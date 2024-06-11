import express from 'express';
import { getCalificaciones, createCalificacion } from '../controllers/CalificacionController.js';

const router = express.Router();

router.get('/', getCalificaciones);
router.post('/', createCalificacion);

export default router;
