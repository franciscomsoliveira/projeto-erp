import {
  listarUsuariosService,
  buscarUsuarioService,
  criarUsuarioService,
  atualizarUsuarioService,
  alterarStatusUsuarioService,
  removerVinculoUsuarioService,
  verificarLoginService,
} from "./usuarios.service.js";

export async function listarUsuariosController(req, res) {
  try {
    console.log("USER LOGADO:", req.user);

    const usuarios = await listarUsuariosService(req.user);
    return res.json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function buscarUsuarioController(req, res) {
  try {
    const usuario = await buscarUsuarioService(req.params.id, req.user);

    if (!usuario) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    return res.json(usuario);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function criarUsuarioController(req, res) {
  try {
    const usuario = await criarUsuarioService(req.body, req.user);

    return res.status(201).json({
      message: "Usuário cadastrado com sucesso",
      usuario,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export async function atualizarUsuarioController(req, res) {
  try {
    const usuario = await atualizarUsuarioService(
      req.params.id,
      req.body,
      req.user,
    );

    return res.json({
      message: "Usuário atualizado com sucesso",
      usuario,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export async function alterarStatusUsuarioController(req, res) {
  try {
    const usuario = await alterarStatusUsuarioService(
      req.params.id,
      req.body.status,
      req.user,
    );

    return res.json({
      message: "Status atualizado com sucesso",
      usuario,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export async function removerVinculoUsuarioController(req, res) {
  try {
    await removerVinculoUsuarioService(
      req.params.id,
      req.params.loja_id,
      req.user,
    );

    return res.json({
      message: "Vínculo removido com sucesso",
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
}

export async function verificarLoginController(req, res) {
  try {
    const exists = await verificarLoginService(req.params.login);

    return res.json({
      exists,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
