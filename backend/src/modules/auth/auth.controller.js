import {
  loginService,
  selecionarLojaService,
  trocarLojaService,
} from "./auth.service.js";

export async function login(req, res, next) {
  try {
    const result = await loginService(req.body);

    return res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function selecionarLojaController(req, res, next) {
  try {
    const { loja_id } = req.body;

    const result = await selecionarLojaService({
      user: req.user,
      loja_id,
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function trocarLojaController(req, res, next) {
  try {
    const { loja_id } = req.body;

    const result = await trocarLojaService({
      usuario_id: req.user.user_id || req.user.id,
      loja_id,
    });

    return res.json(result);
  } catch (error) {
    next(error);
  }
}
