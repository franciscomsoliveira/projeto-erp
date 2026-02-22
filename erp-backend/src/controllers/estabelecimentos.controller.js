import { pool } from "../config/database.js";

// Lista todos os estabelecimentos do sistema (Visão Admin)
export async function listarTudo(req, res) {
  try {
    const [rows] = await pool.execute(
      `SELECT * FROM estabelecimentos ORDER BY criado_em DESC`,
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar estabelecimentos" });
  }
}

// Criar estabelecimento com TODOS os campos da sua tabela
export async function criar(req, res) {
  const {
    nome_fantasia,
    razao_social,
    cnpj,
    tipo,
    estado,
    cidade,
    endereco,
    numero,
    bairro,
    cep,
    telefone,
    email,
  } = req.body;

  // Validação básica de campos obrigatórios
  if (!nome_fantasia || !cnpj || !tipo) {
    return res
      .status(400)
      .json({ error: "Nome Fantasia, CNPJ e Tipo são obrigatórios" });
  }

  try {
    const [result] = await pool.execute(
      `INSERT INTO estabelecimentos 
      (nome_fantasia, razao_social, cnpj, tipo, estado, cidade, endereco, numero, bairro, cep, telefone, email, ativo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)`,
      [
        nome_fantasia,
        razao_social,
        cnpj,
        tipo,
        estado,
        cidade,
        endereco,
        numero,
        bairro,
        cep,
        telefone,
        email,
      ],
    );

    res.status(201).json({
      message: "Estabelecimento criado com sucesso",
      id: result.insertId,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao salvar no banco de dados" });
  }
}

// Alternar status Ativo/Inativo (O que você perguntou)
export async function alternarStatus(req, res) {
  const { id } = req.params;
  const { ativo } = req.body; // Espera 0 ou 1

  try {
    await pool.execute(`UPDATE estabelecimentos SET ativo = ? WHERE id = ?`, [
      ativo,
      id,
    ]);
    res.json({ message: "Status atualizado" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar status" });
  }
}

export async function atualizar(req, res) {
  const { id } = req.params;
  const {
    nome_fantasia,
    razao_social,
    cnpj,
    tipo,
    estado,
    cidade,
    endereco,
    numero,
    bairro,
    cep,
    telefone,
    email,
  } = req.body;

  try {
    await pool.execute(
      `UPDATE estabelecimentos SET
        nome_fantasia = ?,
        razao_social = ?,
        cnpj = ?,
        tipo = ?,
        estado = ?,
        cidade = ?,
        endereco = ?,
        numero = ?,
        bairro = ?,
        cep = ?,
        telefone = ?,
        email = ?
      WHERE id = ?`,
      [
        nome_fantasia,
        razao_social,
        cnpj,
        tipo,
        estado,
        cidade,
        endereco,
        numero,
        bairro,
        cep,
        telefone,
        email,
        id,
      ],
    );

    res.json({ message: "Atualizado com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar" });
  }
}
