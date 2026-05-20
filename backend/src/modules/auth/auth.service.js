import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { pool } from "../../config/database.js";

function gerarToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "2h",
  });
}

function montarUsuario(usuario, lojas = []) {
  return {
    id: usuario.id,
    nome: usuario.nome,
    login: usuario.login,
    email: usuario.email,

    loja_id: usuario.loja_id,
    codigo_loja: usuario.codigo_loja,
    loja_nome: usuario.loja_nome,

    perfil_id: usuario.perfil_id,
    perfil: usuario.perfil,
    nivel: usuario.nivel,

    lojas,
  };
}

async function buscarLojasDoUsuario(usuario_id) {
  const [lojas] = await pool.query(
    `
    SELECT
      l.id,
      l.codigo_loja,
      l.nome_fantasia,
      p.id AS perfil_id,
      p.nome AS perfil,
      p.nivel
    FROM tbusuarioslojas ul
    INNER JOIN tblojas l
      ON l.id = ul.loja_id
    INNER JOIN tbperfis p
      ON p.id = ul.perfil_id
    WHERE
      ul.usuario_id = ?
      AND ul.ativo = 1
      AND l.status = 'ATIVO'
    ORDER BY l.nome_fantasia ASC
    `,
    [usuario_id],
  );

  return lojas;
}

async function buscarUsuarioNaLoja(usuario_id, loja_id) {
  const [rows] = await pool.query(
    `
    SELECT
      u.id,
      u.nome,
      u.login,
      u.email,
      u.status,

      l.id AS loja_id,
      l.codigo_loja,
      l.nome_fantasia AS loja_nome,

      p.id AS perfil_id,
      p.nome AS perfil,
      p.nivel
    FROM tbusuarios u
    INNER JOIN tbusuarioslojas ul
      ON ul.usuario_id = u.id
    INNER JOIN tblojas l
      ON l.id = ul.loja_id
    INNER JOIN tbperfis p
      ON p.id = ul.perfil_id
    WHERE
      u.id = ?
      AND l.id = ?
      AND ul.ativo = 1
      AND u.status = 'ATIVO'
      AND l.status = 'ATIVO'
    LIMIT 1
    `,
    [usuario_id, loja_id],
  );

  return rows[0];
}

export async function loginService({ login, senha }) {
  if (!login || !senha) {
    const error = new Error("Login e senha são obrigatórios.");
    error.statusCode = 400;
    throw error;
  }

  const [rows] = await pool.query(
    `
    SELECT
      id,
      nome,
      login,
      email,
      senha,
      status
    FROM tbusuarios
    WHERE login = ? OR email = ?
    LIMIT 1
    `,
    [login, login],
  );

  const usuario = rows[0];

  if (!usuario) {
    const error = new Error("Usuário ou senha inválidos.");
    error.statusCode = 401;
    throw error;
  }

  if (usuario.status !== "ATIVO") {
    const error = new Error("Usuário inativo ou bloqueado.");
    error.statusCode = 403;
    throw error;
  }

  const senhaConfere = await bcrypt.compare(senha, usuario.senha);

  if (!senhaConfere) {
    const error = new Error("Usuário ou senha inválidos.");
    error.statusCode = 401;
    throw error;
  }

  const lojas = await buscarLojasDoUsuario(usuario.id);

  if (!lojas.length) {
    const error = new Error("Usuário não possui loja vinculada.");
    error.statusCode = 403;
    throw error;
  }

  if (lojas.length > 1) {
    const tempToken = gerarToken({
      user_id: usuario.id,
      type: "TEMP_STORE_SELECTION",
    });

    return {
      needsStoreSelection: true,
      tempToken,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        login: usuario.login,
        email: usuario.email,
        lojas,
      },
    };
  }

  const loja = lojas[0];

  const token = gerarToken({
    user_id: usuario.id,
    loja_id: loja.id,
    perfil_id: loja.perfil_id,
    perfil: loja.perfil,
    nivel: loja.nivel,
    type: "AUTHENTICATED",
  });

  return {
    needsStoreSelection: false,
    token,
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      login: usuario.login,
      email: usuario.email,

      loja_id: loja.id,
      codigo_loja: loja.codigo_loja,
      loja_nome: loja.nome_fantasia,

      perfil_id: loja.perfil_id,
      perfil: loja.perfil,
      nivel: loja.nivel,

      lojas,
    },
  };
}

export async function selecionarLojaService({ user, loja_id }) {
  if (!loja_id) {
    const error = new Error("Loja não informada.");
    error.statusCode = 400;
    throw error;
  }

  if (user.type !== "TEMP_STORE_SELECTION") {
    const error = new Error("Token inválido para seleção de loja.");
    error.statusCode = 401;
    throw error;
  }

  const usuario = await buscarUsuarioNaLoja(user.user_id, loja_id);

  if (!usuario) {
    const error = new Error("Usuário não possui acesso ativo a esta loja.");
    error.statusCode = 403;
    throw error;
  }

  const lojas = await buscarLojasDoUsuario(user.user_id);

  const token = gerarToken({
    user_id: usuario.id,
    loja_id: usuario.loja_id,
    perfil_id: usuario.perfil_id,
    perfil: usuario.perfil,
    nivel: usuario.nivel,
    type: "AUTHENTICATED",
  });

  return {
    token,
    usuario: montarUsuario(usuario, lojas),
  };
}

export async function trocarLojaService({ usuario_id, loja_id }) {
  if (!loja_id) {
    const error = new Error("Loja não informada.");
    error.statusCode = 400;
    throw error;
  }

  const usuario = await buscarUsuarioNaLoja(usuario_id, loja_id);

  if (!usuario) {
    const error = new Error("Usuário não possui acesso ativo a esta loja.");
    error.statusCode = 403;
    throw error;
  }

  const lojas = await buscarLojasDoUsuario(usuario_id);

  const token = gerarToken({
    user_id: usuario.id,
    loja_id: usuario.loja_id,
    perfil_id: usuario.perfil_id,
    perfil: usuario.perfil,
    nivel: usuario.nivel,
    type: "AUTHENTICATED",
  });

  return {
    token,
    usuario: montarUsuario(usuario, lojas),
  };
}
