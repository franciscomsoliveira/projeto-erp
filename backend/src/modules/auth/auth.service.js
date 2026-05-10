import { pool } from "../../config/database.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function loginService({ login, senha, codigo_loja }) {
  const [rows] = await pool.execute(
    `
    SELECT 
      u.id,
      u.nome,
      u.login,
      u.email,
      u.senha,
      u.status AS usuario_status,

      l.id AS loja_id,
      l.codigo_loja,
      l.nome_fantasia,
      l.status AS loja_status,

      p.id AS perfil_id,
      p.nome AS perfil,
      p.nivel AS nivel

    FROM tbusuarios u
    JOIN tbusuarioslojas ul ON ul.usuario_id = u.id
    JOIN tblojas l ON l.id = ul.loja_id
    JOIN tbperfis p ON p.id = ul.perfil_id

    WHERE (u.login = ? OR u.email = ?)
      AND l.codigo_loja = ?
      AND ul.ativo = 1
    `,
    [login, login, codigo_loja],
  );

  const user = rows[0];

  if (!user) {
    throw new Error("Usuário ou loja inválidos");
  }

  if (user.usuario_status !== "ATIVO") {
    throw new Error("Usuário inativo ou bloqueado");
  }

  if (user.loja_status !== "ATIVO") {
    throw new Error("Loja inativa ou bloqueada");
  }

  const senhaValida = await bcrypt.compare(senha, user.senha);

  if (!senhaValida) {
    throw new Error("Senha inválida");
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
    { expiresIn: "8h" },
  );

  return {
    token,
    usuario: {
      id: user.id,
      nome: user.nome,
      email: user.email,
      login: user.login,
      perfil_id: user.perfil_id,
      perfil: user.perfil,
      nivel: user.nivel,
      loja_id: user.loja_id,
      loja_nome: user.nome_fantasia,
      loja_codigo: user.codigo_loja,
    },
    loja: {
      id: user.loja_id,
      codigo: user.codigo_loja,
      nome: user.nome_fantasia,
    },
  };
}
