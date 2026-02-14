import { Router } from 'express';
import { listar, criar } from '../controllers/estabelecimentos.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { checkEstabelecimentoAtivo, onlyAdmin } from '../middlewares/authorization.middleware.js';

const router = Router();

router.get('/', authMiddleware, checkEstabelecimentoAtivo, listar);
router.post('/', authMiddleware, checkEstabelecimentoAtivo, onlyAdmin, criar);

export default router;
