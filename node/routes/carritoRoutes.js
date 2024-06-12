import express from 'express';
import { getCarrito, addProductoToCarrito, deleteProductoFromCarrito } from '../controllers/CarritoController.js';

const router = express.Router();

router.get('/:usuario_id', getCarrito);
router.post('/add', addProductoToCarrito);
router.delete('/detalle/:detalle_id', deleteProductoFromCarrito);

export default router;
