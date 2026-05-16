import { Router } from "express";

import {
  listarPerfisController,
  listarPerfisSelectController,
  criarPerfilController,
} from "./perfis.controller.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { checkNivel } from "../../middlewares/checkNivel.middleware.js";

const router = Router();

router.use(authMiddleware);

/*
|--------------------------------------------------------------------------
| SOMENTE NÍVEL 100
|--------------------------------------------------------------------------
*/
router.get("/select", listarPerfisSelectController);

router.use(checkNivel([100]));

router.get("/", listarPerfisController);

router.post("/", criarPerfilController);

export default router;
