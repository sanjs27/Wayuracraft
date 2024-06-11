import express from 'express';
import { getPersonalizaciones, createPersonalizacion } from '../controllers/PersonalizacionController.js';

const router = express.Router();

router.get('/', getPersonalizaciones);
router.post('/', createPersonalizacion);

export default router;
