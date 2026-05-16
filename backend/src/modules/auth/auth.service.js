import { pool } from "../../config/database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function loginService({ login, senha }) {
  const [usuarios] = await pool.execute(
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

  const usuario = usuarios[0];

  if (!usuario) {
    throw new Error("Usuário ou senha inválidos");
  }

  if (usuario.status !== "ATIVO") {
    throw new Error("Usuário inativo ou bloqueado");
  }

  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    throw new Error("Usuário ou senha inválidos");
  }

  const [lojas] = await pool.execute(
    `
    SELECT
      l.id AS loja_id,
      l.codigo_loja,
      l.nome_fantasia,
      l.status AS loja_status,

      p.id AS perfil_id,
      p.nome AS perfil,
      p.nivel
    FROM tbusuarioslojas ul
    INNER JOIN tblojas l ON l.id = ul.loja_id
    INNER JOIN tbperfis p ON p.id = ul.perfil_id
    WHERE ul.usuario_id = ?
      AND ul.ativo = 1
      AND l.status = 'ATIVO'
    ORDER BY l.nome_fantasia
    `,
    [usuario.id],
  );

  if (lojas.length === 0) {
    throw new Error("Usuário não possui acesso a nenhuma loja ativa");
  }

  if (lojas.length === 1) {
    const loja = lojas[0];

    const token = jwt.sign(
      {
        user_id: usuario.id,
        loja_id: loja.loja_id,
        perfil_id: loja.perfil_id,
        perfil: loja.perfil,
        nivel: loja.nivel,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN || "8h",
      },
    );

    return {
      token,
      needsStoreSelection: false,
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email,
        login: usuario.login,

        loja_id: loja.loja_id,
        loja_nome: loja.nome_fantasia,
        loja_codigo: loja.codigo_loja,

        perfil_id: loja.perfil_id,
        perfil: loja.perfil,
        nivel: loja.nivel,

        lojas,
      },
    };
  }

  const tempToken = jwt.sign(
    {
      user_id: usuario.id,
      temp: true,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "15m",
    },
  );

  return {
    token: tempToken,
    needsStoreSelection: true,
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      login: usuario.login,
      lojas,
    },
  };
}

export async function selecionarLojaService(userId, lojaId) {
  const [rows] = await pool.execute(
    `
    SELECT
      u.id,
      u.nome,
      u.login,
      u.email,

      l.id AS loja_id,
      l.codigo_loja,
      l.nome_fantasia,

      p.id AS perfil_id,
      p.nome AS perfil,
      p.nivel
    FROM tbusuarios u
    INNER JOIN tbusuarioslojas ul ON ul.usuario_id = u.id
    INNER JOIN tblojas l ON l.id = ul.loja_id
    INNER JOIN tbperfis p ON p.id = ul.perfil_id
    WHERE u.id = ?
      AND ul.loja_id = ?
      AND ul.ativo = 1
      AND u.status = 'ATIVO'
      AND l.status = 'ATIVO'
    LIMIT 1
    `,
    [userId, lojaId],
  );

  const user = rows[0];

  if (!user) {
    throw new Error("Você não possui acesso a esta loja");
  }

  const token = jwt.sign(
    {
      user_id: user.id,
      loja_id: user.loja_id,
      perfil_id: user.perfil_id,
      perfil: user.perfil,
      nivel: user.nivel,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN || "8h",
    },
  );

  return {
    token,
    usuario: {
      id: user.id,
      nome: user.nome,
      email: user.email,
      login: user.login,

      loja_id: user.loja_id,
      loja_nome: user.nome_fantasia,
      loja_codigo: user.codigo_loja,

      perfil_id: user.perfil_id,
      perfil: user.perfil,
      nivel: user.nivel,
    },
  };
}
