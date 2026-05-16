import {
  listarLojasService,
  buscarLojaService,
  listarLojasSelectService,
  criarLojaService,
  atualizarLojaService,
} from "./lojas.service.js";

export async function listarLojasController(req, res) {
  try {
    const lojas = await listarLojasService();

    return res.json(lojas);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function listarLojasSelectController(req, res) {
  try {
    const lojas = await listarLojasSelectService(req.user);

    return res.json(lojas);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function buscarLojaController(req, res) {
  try {
    const loja = await buscarLojaService(req.params.id);

    return res.json(loja);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}

export async function criarLojaController(req, res) {
  try {
    const loja = await criarLojaService(req.body, req.user);

    return res.status(201).json({
      message: "Loja cadastrada com sucesso",
      loja,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}

export async function atualizarLojaController(req, res) {
  try {
    const loja = await atualizarLojaService(req.params.id, req.body, req.user);

    return res.json({
      message: "Loja atualizada com sucesso",
      loja,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
