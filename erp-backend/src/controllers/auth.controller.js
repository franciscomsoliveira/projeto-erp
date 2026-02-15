import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../config/database.js";

export async function login(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ error: "E-mail e senha obrigatórios" });
  }

  const [users] = await pool.execute(
    "SELECT id, nome, email, senha FROM usuarios WHERE email = ? AND ativo = 1",
    [email],
  );

  if (!users.length || !(await bcrypt.compare(senha, users[0].senha))) {
    return res.status(401).json({ error: "Usuário ou senha inválidos" });
  }

  const user = users[0];

  const [vinculos] = await pool.execute(
    `SELECT 
        ue.estabelecimento_id, 
        ue.perfil_id, 
        e.nome_fantasia, 
        p.nome AS nome_perfil  -- Buscamos o nome real do perfil aqui
     FROM usuarios_estabelecimentos ue
     JOIN estabelecimentos e ON e.id = ue.estabelecimento_id
     JOIN perfis p ON p.id = ue.perfil_id -- Unimos com a tabela de perfis
     WHERE ue.usuario_id = ? AND ue.ativo = 1 AND e.ativo = 1`,
    [user.id],
  );

  if (!vinculos.length) {
    return res.status(403).json({
      error: "Usuário não possui vínculos ativos com estabelecimentos.",
    });
  }

  const contexto = vinculos[0];

  const token = jwt.sign(
    {
      sub: user.id,
      est: contexto.estabelecimento_id,
      role: contexto.perfil_id,
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES || "15m" },
  );

  res.json({
    token,
    user: {
      id: user.id,
      nome: user.nome,
      email: user.email,
      estabelecimento: {
        id: contexto.estabelecimento_id,
        nome: contexto.nome_fantasia,
      },
      perfil: {
        id: contexto.perfil_id,
        nome: contexto.nome_perfil,
      },
    },
  });
}
