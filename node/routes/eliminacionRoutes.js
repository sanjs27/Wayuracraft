import express from 'express';
import { getEliminaciones, createEliminacion } from '../controllers/EliminacionController.js';

const router = express.Router();

router.get('/', getEliminaciones);
router.post('/', createEliminacion);

export default router;
