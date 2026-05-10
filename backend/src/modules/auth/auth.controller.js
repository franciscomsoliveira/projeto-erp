import { loginService } from "./auth.service.js";

export async function login(req, res, next) {
  try {
    const { login, senha, codigo_loja } = req.body;

    if (!login || !senha || !codigo_loja) {
      return res.status(400).json({
        error: "Login, senha e loja são obrigatórios",
      });
    }

    const resultado = await loginService({
      login,
      senha,
      codigo_loja,
    });

    return res.json(resultado);
  } catch (error) {
    next(error);
  }
}
