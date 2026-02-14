import { pool } from '../config/database.js';

export async function checkEstabelecimentoAtivo(req, res, next) {
  const { id, estabelecimentoId } = req.user;

  const [rows] = await pool.execute(
    `SELECT 1 FROM usuarios_estabelecimentos ue
     JOIN estabelecimentos e ON e.id = ue.estabelecimento_id
     WHERE ue.usuario_id = ? AND ue.estabelecimento_id = ?
       AND ue.ativo = 1 AND e.ativo = 1`,
    [id, estabelecimentoId]
  );

  if (rows.length === 0) {
    return res.status(403).json({ error: 'Acesso negado ao estabelecimento' });
  }

  next();
}

export function onlyAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Permissão insuficiente' });
  }
  next();
}
