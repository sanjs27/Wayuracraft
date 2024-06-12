import express from 'express';
import {
  getProductos,
  getProductoById,
  createProducto,
  deleteProducto,
  getProductosByPrecioDesc,
  getProductosByPrecioAsc,
  getProductosByUsuario
} from '../controllers/ProductoController.js';

const router = express.Router();

router.get('/', getProductos); // Ruta para obtener todos los productos con paginación y filtrado
router.get('/:id', getProductoById); // Ruta para obtener un producto por ID
router.post('/', createProducto); // Ruta para crear uno o varios productos
router.delete('/:id', deleteProducto); // Ruta para eliminar un producto por ID
router.get('/precio/desc', getProductosByPrecioDesc); // Ruta para filtrar productos por precio de mayor a menor
router.get('/precio/asc', getProductosByPrecioAsc); // Ruta para filtrar productos por precio de menor a mayor
router.get('/usuario/:artesano_id', getProductosByUsuario); // Ruta para obtener productos por usuario

export default router;
