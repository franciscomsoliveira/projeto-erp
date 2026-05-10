import { pool } from "../../config/database.js";
import bcrypt from "bcryptjs";

export async function listarUsuariosService(userLogado) {
  const params = [];

  let where = `
    WHERE 1 = 1
  `;

  if (Number(userLogado.nivel) !== 100) {
    where += ` AND ul.loja_id = ?`;
    params.push(userLogado.loja_id);
  }

  const [rows] = await pool.execute(
    `
    SELECT
      u.id,
      u.nome,
      u.login,
      u.email,
      u.status,

      l.id AS loja_id,
      l.codigo_loja,
      l.nome_fantasia,

      p.id AS perfil_id,
      p.nome AS perfil,
      p.nivel

    FROM tbusuarios u
    JOIN tbusuarioslojas ul ON ul.usuario_id = u.id
    JOIN tblojas l ON l.id = ul.loja_id
    JOIN tbperfis p ON p.id = ul.perfil_id

    ${where}

    ORDER BY u.nome ASC
    `,
    params,
  );

  return rows;
}

export async function buscarUsuarioService(id, userLogado) {
  const params = [id];

  let where = `
    WHERE u.id = ?
  `;

  if (Number(userLogado.nivel) !== 100) {
    where += ` AND ul.loja_id = ?`;
    params.push(userLogado.loja_id);
  }

  const [rows] = await pool.execute(
    `
    SELECT
      u.id,
      u.nome,
      u.login,
      u.email,
      u.status,

      l.id AS loja_id,
      l.codigo_loja,
      l.nome_fantasia,

      p.id AS perfil_id,
      p.nome AS perfil,
      p.nivel

    FROM tbusuarios u
    JOIN tbusuarioslojas ul ON ul.usuario_id = u.id
    JOIN tblojas l ON l.id = ul.loja_id
    JOIN tbperfis p ON p.id = ul.perfil_id

    ${where}
    `,
    params,
  );

  return rows[0];
}

export async function criarUsuarioService(dados, userLogado) {
  const {
    nome,
    login,
    email,
    senha = "123456",
    status = "ATIVO",
    loja_id,
    perfil_id,
  } = dados;

  if (!nome || !login || !email || !loja_id || !perfil_id) {
    throw new Error("Preencha todos os campos obrigatórios");
  }

  if (
    Number(userLogado.nivel) !== 100 &&
    Number(loja_id) !== Number(userLogado.loja_id)
  ) {
    throw new Error("Você só pode cadastrar usuários na sua própria loja");
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [usuarioExistente] = await connection.execute(
      `
      SELECT id 
      FROM tbusuarios
      WHERE login = ? OR email = ?
      `,
      [login, email],
    );

    if (usuarioExistente.length > 0) {
      throw new Error("Login ou e-mail já cadastrado");
    }

    const senhaHash = await bcrypt.hash(senha, 10);

    const [usuarioResult] = await connection.execute(
      `
      INSERT INTO tbusuarios
        (nome, login, email, senha, status, criado_em, criado_por)
      VALUES
        (?, ?, ?, ?, ?, NOW(), ?)
      `,
      [nome, login, email, senhaHash, status, userLogado.user_id],
    );

    const usuario_id = usuarioResult.insertId;

    await connection.execute(
      `
      INSERT INTO tbusuarioslojas
        (usuario_id, loja_id, perfil_id, ativo, criado_em)
      VALUES
        (?, ?, ?, 1, NOW())
      `,
      [usuario_id, loja_id, perfil_id],
    );

    await connection.commit();

    return {
      id: usuario_id,
      nome,
      login,
      email,
      status,
      loja_id,
      perfil_id,
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

export async function atualizarUsuarioService(id, dados, userLogado) {
  const { nome, login, email, status, loja_id, perfil_id } = dados;

  if (!nome || !login || !email || !loja_id || !perfil_id) {
    throw new Error("Preencha todos os campos obrigatórios");
  }

  if (
    Number(userLogado.nivel) !== 100 &&
    Number(loja_id) !== Number(userLogado.loja_id)
  ) {
    throw new Error("Você só pode editar usuários da sua própria loja");
  }

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [usuarioExistente] = await connection.execute(
      `
      SELECT id 
      FROM tbusuarios
      WHERE id = ?
      `,
      [id],
    );

    if (usuarioExistente.length === 0) {
      throw new Error("Usuário não encontrado");
    }

    const [duplicado] = await connection.execute(
      `
      SELECT id
      FROM tbusuarios
      WHERE (login = ? OR email = ?)
        AND id <> ?
      `,
      [login, email, id],
    );

    if (duplicado.length > 0) {
      throw new Error("Login ou e-mail já utilizado por outro usuário");
    }

    await connection.execute(
      `
      UPDATE tbusuarios
      SET
        nome = ?,
        login = ?,
        email = ?,
        status = ?,
        atualizado_em = NOW(),
        atualizado_por = ?
      WHERE id = ?
      `,
      [nome, login, email, status, userLogado.user_id, id],
    );

    await connection.execute(
      `
      UPDATE tbusuarioslojas
      SET
        loja_id = ?,
        perfil_id = ?,
        ativo = 1
      WHERE usuario_id = ?
      `,
      [loja_id, perfil_id, id],
    );

    await connection.commit();

    return {
      id: Number(id),
      nome,
      login,
      email,
      status,
      loja_id,
      perfil_id,
    };
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}

export async function alterarStatusUsuarioService(id, status, userLogado) {
  const statusPermitidos = ["ATIVO", "INATIVO", "BLOQUEADO"];

  if (!statusPermitidos.includes(status)) {
    throw new Error("Status inválido");
  }

  await pool.execute(
    `
    UPDATE tbusuarios
    SET
      status = ?,
      atualizado_em = NOW(),
      atualizado_por = ?
    WHERE id = ?
    `,
    [status, userLogado.user_id, id],
  );

  return {
    id: Number(id),
    status,
  };
}

export async function removerVinculoUsuarioService(id, loja_id, userLogado) {
  if (
    Number(userLogado.nivel) !== 100 &&
    Number(loja_id) !== Number(userLogado.loja_id)
  ) {
    throw new Error("Você só pode remover vínculos da sua própria loja");
  }

  await pool.execute(
    `
    UPDATE tbusuarioslojas
    SET ativo = 0
    WHERE usuario_id = ?
      AND loja_id = ?
    `,
    [id, loja_id],
  );

  return true;
}

export async function verificarLoginService(login) {
  const [rows] = await pool.execute(
    `
    SELECT id
    FROM tbusuarios
    WHERE login = ?
    LIMIT 1
    `,
    [login],
  );

  return rows.length > 0;
}
