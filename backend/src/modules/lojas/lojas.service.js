import { pool } from "../../config/database.js";

export async function listarLojasService() {
  const [rows] = await pool.execute(`
    SELECT
      id,
      codigo_loja,
      nome_fantasia,
      razao_social,
      cnpj,
      cidade,
      estado,
      telefone,
      email,
      status
    FROM tblojas
    ORDER BY nome_fantasia
  `);

  return rows;
}

export async function listarLojasSelectService() {
  const [rows] = await pool.execute(`
    SELECT
      id,
      codigo_loja,
      nome_fantasia
    FROM tblojas
    WHERE status = 'ATIVO'
    ORDER BY nome_fantasia
  `);

  return rows;
}

export async function buscarLojaService(id) {
  const [rows] = await pool.execute(
    `
    SELECT *
    FROM tblojas
    WHERE id = ?
    `,
    [id],
  );

  return rows[0];
}

export async function criarLojaService(dados, userLogado) {
  const {
    codigo_loja,
    nome_fantasia,
    razao_social,
    cnpj,
    cep,
    estado,
    cidade,
    bairro,
    endereco,
    numero,
    telefone,
    whatsapp,
    email,
    status = "ATIVO",
  } = dados;

  const [existente] = await pool.execute(
    `
    SELECT id
    FROM tblojas
    WHERE codigo_loja = ?
    `,
    [codigo_loja],
  );

  if (existente.length > 0) {
    throw new Error("Código da loja já cadastrado");
  }

  const [result] = await pool.execute(
    `
    INSERT INTO tblojas (
      codigo_loja,
      nome_fantasia,
      razao_social,
      cnpj,
      cep,
      estado,
      cidade,
      bairro,
      endereco,
      numero,
      telefone,
      whatsapp,
      email,
      status,
      criado_em,
      criado_por
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?)
    `,
    [
      codigo_loja,
      nome_fantasia,
      razao_social,
      cnpj,
      cep,
      estado,
      cidade,
      bairro,
      endereco,
      numero,
      telefone,
      whatsapp,
      email,
      status,
      userLogado.user_id,
    ],
  );

  return {
    id: result.insertId,
    codigo_loja,
    nome_fantasia,
  };
}

export async function atualizarLojaService(id, dados, userLogado) {
  const {
    nome_fantasia,
    razao_social,
    cnpj,
    cep,
    estado,
    cidade,
    bairro,
    endereco,
    numero,
    telefone,
    whatsapp,
    email,
    status,
  } = dados;

  await pool.execute(
    `
    UPDATE tblojas
    SET
      nome_fantasia = ?,
      razao_social = ?,
      cnpj = ?,
      cep = ?,
      estado = ?,
      cidade = ?,
      bairro = ?,
      endereco = ?,
      numero = ?,
      telefone = ?,
      whatsapp = ?,
      email = ?,
      status = ?,
      atualizado_em = NOW(),
      atualizado_por = ?
    WHERE id = ?
    `,
    [
      nome_fantasia,
      razao_social,
      cnpj,
      cep,
      estado,
      cidade,
      bairro,
      endereco,
      numero,
      telefone,
      whatsapp,
      email,
      status,
      userLogado.user_id,
      id,
    ],
  );

  return {
    id,
    nome_fantasia,
  };
}
