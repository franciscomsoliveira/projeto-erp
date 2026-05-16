import { loginService, selecionarLojaService } from "./auth.service.js";

export async function login(req, res, next) {
  try {
    const { login, senha } = req.body;

    if (!login || !senha) {
      return res.status(400).json({
        error: "Login e senha são obrigatórios",
      });
    }

    const resultado = await loginService({
      login,
      senha,
    });

    return res.json(resultado);
  } catch (error) {
    next(error);
  }
}

export async function selecionarLojaController(req, res) {
  try {
    const { loja_id } = req.body;

    if (!loja_id) {
      return res.status(400).json({
        message: "Loja obrigatória",
      });
    }

    const result = await selecionarLojaService(req.user.user_id, loja_id);

    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
}
