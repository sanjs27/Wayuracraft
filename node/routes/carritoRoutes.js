import express from 'express';
import { getCarrito, addProductoToCarrito } from '../controllers/CarritoController.js';

const router = express.Router();

router.get('/:usuario_id', getCarrito);
router.post('/add', addProductoToCarrito);

export default router;
