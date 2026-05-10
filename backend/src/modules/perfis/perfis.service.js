import { pool } from "../../config/database.js";

export async function listarPerfisService() {
  const [rows] = await pool.execute(`
    SELECT
      id,
      nome,
      nivel,
      descricao,
      ativo
    FROM tbperfis
    ORDER BY nivel DESC
  `);

  return rows;
}

export async function listarPerfisSelectService() {
  const [rows] = await pool.execute(`
    SELECT
      id,
      nome,
      nivel
    FROM tbperfis
    WHERE ativo = 1
    ORDER BY nivel DESC
  `);

  return rows;
}

export async function criarPerfilService(dados) {
  const { nome, nivel, descricao } = dados;

  const [existente] = await pool.execute(
    `
    SELECT id
    FROM tbperfis
    WHERE nome = ?
    `,
    [nome],
  );

  if (existente.length > 0) {
    throw new Error("Perfil já cadastrado");
  }

  const [result] = await pool.execute(
    `
    INSERT INTO tbperfis (
      nome,
      nivel,
      descricao,
      ativo
    )
    VALUES (?, ?, ?, 1)
    `,
    [nome, nivel, descricao],
  );

  return {
    id: result.insertId,
    nome,
    nivel,
  };
}
