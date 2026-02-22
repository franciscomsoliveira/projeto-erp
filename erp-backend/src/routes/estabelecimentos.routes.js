import { Router } from "express";
import {
  listarTudo,
  criar,
  alternarStatus,
  atualizar,
} from "../controllers/estabelecimentos.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { onlyAdmin } from "../middlewares/authorization.middleware.js";

const router = Router();

// 1. Listar TODOS os estabelecimentos (Para a tabela de gestão do Admin)
// Removemos o 'checkEstabelecimentoAtivo' aqui pois o Admin precisa ver a lista global
router.get("/admin/lista", authMiddleware, onlyAdmin, listarTudo);

// 2. Criar novo estabelecimento
// O Admin cria uma nova unidade; não faz sentido checar se a unidade "nova" está ativa
router.post("/", authMiddleware, onlyAdmin, criar);

// 3. Rota para Ativar/Desativar (O botão da tabela)
router.patch("/:id/status", authMiddleware, onlyAdmin, alternarStatus);

router.put("/:id", authMiddleware, onlyAdmin, atualizar);

export default router;
