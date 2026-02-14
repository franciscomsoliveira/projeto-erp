import { Router } from 'express';
import dbTestController from '../controllers/dbTest.controller.js';

const router = Router();
router.get('/db', dbTestController);

export default router;
