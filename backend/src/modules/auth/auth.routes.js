import { Router } from "express";

import { login, selecionarLojaController } from "./auth.controller.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";

const router = Router();

router.post("/login", login);

router.post("/selecionar-loja", authMiddleware, selecionarLojaController);

export default router;
