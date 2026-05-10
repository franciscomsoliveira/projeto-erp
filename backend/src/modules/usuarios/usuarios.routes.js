import { Router } from "express";

import {
  listarUsuariosController,
  buscarUsuarioController,
  criarUsuarioController,
  atualizarUsuarioController,
  alterarStatusUsuarioController,
  removerVinculoUsuarioController,
  verificarLoginController,
} from "./usuarios.controller.js";

import { authMiddleware } from "../../middlewares/auth.middleware.js";
import { checkNivel } from "../../middlewares/checkNivel.middleware.js";

const router = Router();

router.use(authMiddleware);

router.get("/", listarUsuariosController);
router.get("/:id", buscarUsuarioController);
router.get(
  "/check-login/:login",
  checkNivel([100, 90]),
  verificarLoginController,
);

router.post("/", checkNivel([100, 90]), criarUsuarioController);

router.put("/:id", checkNivel([100, 90]), atualizarUsuarioController);

router.patch(
  "/:id/status",
  checkNivel([100, 90]),
  alterarStatusUsuarioController,
);

router.delete(
  "/:id/vinculo/:loja_id",
  checkNivel([100, 90]),
  removerVinculoUsuarioController,
);

export default router;
