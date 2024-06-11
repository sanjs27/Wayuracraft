import express from 'express';
import { getReportes, createReporte } from '../controllers/ReporteController.js';

const router = express.Router();

router.get('/getReportes', getReportes);
router.post('/createReporte', createReporte);

export default router;
