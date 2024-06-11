import express from 'express';
import { getCategorias, createCategoria } from '../controllers/CategoriaController.js';

const router = express.Router();

router.get('/getCategorias', getCategorias);
router.post('/createCategoria', createCategoria);

export default router;
