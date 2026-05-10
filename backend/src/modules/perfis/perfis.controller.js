import {
  listarPerfisService,
  listarPerfisSelectService,
  criarPerfilService,
} from "./perfis.service.js";

export async function listarPerfisController(req, res) {
  try {
    const perfis = await listarPerfisService();

    return res.json(perfis);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function listarPerfisSelectController(req, res) {
  try {
    const perfis = await listarPerfisSelectService();

    return res.json(perfis);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function criarPerfilController(req, res) {
  try {
    const perfil = await criarPerfilService(req.body);

    return res.status(201).json({
      message: "Perfil criado com sucesso",
      perfil,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
