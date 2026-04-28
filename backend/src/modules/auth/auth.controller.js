import { loginService } from "./auth.service.js";

export async function login(req, res, next) {
  try {
    const { email, senha, loja_id } = req.body;

    if (!email || !senha || !loja_id) {
      return res.status(400).json({
        error: "E-mail, senha e loja são obrigatórios",
      });
    }

    const resultado = await loginService({
      email,
      senha,
      loja_id,
    });

    return res.status(200).json(resultado);
  } catch (error) {
    next(error);
  }
}
