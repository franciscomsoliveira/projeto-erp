import { Router } from "express";

import {
  listarLojasController,
  buscarLojaController,
  listarLojasSelectController,
  criarLojaController,
  atualizarLojaController,
} from "./lojas.controller.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { checkNivel } from "../../middlewares/checkNivel.middleware.js";

const router = Router();

router.use(authMiddleware);

/*
|--------------------------------------------------------------------------
| SOMENTE NÍVEL 100
|--------------------------------------------------------------------------
*/
router.get("/select", listarLojasSelectController);

router.use(checkNivel([100]));

router.get("/", listarLojasController);

router.get("/:id", buscarLojaController);

router.post("/", criarLojaController);

router.put("/:id", atualizarLojaController);

export default router;
