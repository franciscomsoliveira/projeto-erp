import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../../config/database.js";

export async function loginService({ email, senha, loja_id }) {
  const [usuarios] = await pool.execute(
    `
    SELECT 
      u.id,
      u.nome,
      u.email,
      u.senha,
      u.ativo,
      ul.loja_id,
      l.nome_fantasia,
      ul.perfil_id,
      p.nome AS perfil,
      p.nivel
    FROM tbUsuarios u
    INNER JOIN tbUsuariosLojas ul ON ul.usuario_id = u.id
    INNER JOIN tbLojas l ON l.id = ul.loja_id
    INNER JOIN tbPerfis p ON p.id = ul.perfil_id
    WHERE u.email = ?
      AND ul.loja_id = ?
      AND u.ativo = 1
      AND ul.ativo = 1
      AND l.ativo = 1
      AND p.ativo = 1
    LIMIT 1
    `,
    [email, loja_id],
  );

  if (usuarios.length === 0) {
    throw new Error("Usuário não encontrado ou sem acesso a esta loja");
  }

  const usuario = usuarios[0];

  const senhaValida = await bcrypt.compare(senha, usuario.senha);

  if (!senhaValida) {
    throw new Error("Senha inválida");
  }

  const token = jwt.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      loja_id: usuario.loja_id,
      loja: usuario.nome_fantasia,
      perfil_id: usuario.perfil_id,
      perfil: usuario.perfil,
      nivel: usuario.nivel,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );

  return {
    token,
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      loja_id: usuario.loja_id,
      loja: usuario.nome_fantasia,
      perfil_id: usuario.perfil_id,
      perfil: usuario.perfil,
      nivel: usuario.nivel,
    },
  };
}
