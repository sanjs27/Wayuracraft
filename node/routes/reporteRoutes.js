import express from 'express';
import { getReportes, createReporte } from '../controllers/ReporteController.js';

const router = express.Router();

router.get('/', getReportes);
router.post('/', createReporte);

export default router;
