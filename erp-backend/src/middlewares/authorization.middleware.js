import { pool } from "../config/database.js";

export async function checkEstabelecimentoAtivo(req, res, next) {
  // Certifique-se que o authMiddleware preencheu esses campos corretamente
  const { id, estabelecimentoId } = req.user;

  try {
    const [rows] = await pool.execute(
      `SELECT 1 FROM usuarios_estabelecimentos ue
       JOIN estabelecimentos e ON e.id = ue.estabelecimento_id
       WHERE ue.usuario_id = ? AND ue.estabelecimento_id = ?
         AND ue.ativo = 1 AND e.ativo = 1`,
      [id, estabelecimentoId],
    );

    if (rows.length === 0) {
      return res
        .status(403)
        .json({ error: "Acesso negado ou estabelecimento inativo" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "Erro ao validar estabelecimento" });
  }
}

export async function onlyAdmin(req, res, next) {
  const { id, estabelecimentoId } = req.user;

  try {
    // Buscamos o nome do perfil na tabela 'perfis' através da tabela de ligação
    const [rows] = await pool.execute(
      `SELECT p.nome as role_name 
       FROM usuarios_estabelecimentos ue
       JOIN perfis p ON p.id = ue.perfil_id
       WHERE ue.usuario_id = ? AND ue.estabelecimento_id = ?`,
      [id, estabelecimentoId],
    );

    if (rows.length === 0) {
      return res
        .status(403)
        .json({ error: "Usuário não vinculado a este estabelecimento" });
    }

    // Comparamos o nome do perfil (ajuste para 'ADMIN' ou 'admin' conforme seu banco)
    const userRole = rows[0].role_name.toLowerCase();

    if (userRole !== "admin") {
      return res
        .status(403)
        .json({ error: "Permissão insuficiente: Requer perfil Admin" });
    }

    next();
  } catch (error) {
    console.error("Erro no middleware onlyAdmin:", error);
    res
      .status(500)
      .json({ error: "Erro ao validar permissões de administrador" });
  }
}
