import { pool } from '../config/database.js';

export async function listar(req, res) {
  const [rows] = await pool.execute(
    `SELECT e.id, e.nome_fantasia, e.tipo, e.cidade, e.estado
     FROM usuarios_estabelecimentos ue
     JOIN estabelecimentos e ON e.id = ue.estabelecimento_id
     WHERE ue.usuario_id = ? AND ue.ativo = 1 AND e.ativo = 1`,
    [req.user.id]
  );
  res.json(rows);
}

export async function criar(req, res) {
  const { nome_fantasia, tipo, cidade, estado } = req.body;
  if (!nome_fantasia || !tipo || !cidade || !estado) {
    return res.status(400).json({ error: 'Campos obrigatórios ausentes' });
  }

  await pool.execute(
    `INSERT INTO estabelecimentos (nome_fantasia, tipo, cidade, estado, ativo)
     VALUES (?, ?, ?, ?, 1)`,
    [nome_fantasia, tipo, cidade, estado]
  );

  res.status(201).json({ message: 'Estabelecimento criado' });
}
