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

router.get('/getProductos', getProductos);
router.get('/getProductoById/:id', getProductoById);
router.post('/createProducto', createProducto);
router.delete('/deleteProducto/:id', deleteProducto);
router.get('/getProductosByPrecioDesc', getProductosByPrecioDesc);
router.get('/getProductosByPrecioAsc', getProductosByPrecioAsc);
router.get('/getProductosByUsuario/:artesano_id', getProductosByUsuario);

export default router;
