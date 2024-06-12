import Producto from '../models/Productos.js';
import { Sequelize } from 'sequelize';

// Obtener todos los productos con paginación y filtrado
export const getProductos = async (req, res) => {
  try {
    const { sort = 'random', page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;
    let order = [];

    if (sort === 'asc') {
      order = [['precio', 'ASC']];
    } else if (sort === 'desc') {
      order = [['precio', 'DESC']];
    } else if (sort === 'random') {
      order = [Sequelize.literal('RAND()')];
    }

    const productos = await Producto.findAll({
      order,
      limit: parseInt(limit),
      offset: parseInt(offset),
    });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

// Obtener un solo producto por ID
export const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByPk(id);

    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el producto', error });
  }
};

// Crear uno o varios productos
export const createProducto = async (req, res) => {
  try {
    const productos = req.body;
    const nuevosProductos = await Producto.bulkCreate(productos);
    res.status(201).json(nuevosProductos);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear los productos', error });
  }
};

// Eliminar un producto por ID
export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;

    await Producto.destroy({ where: { id_producto: id } });

    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};

// Filtrar productos por precio de mayor a menor
export const getProductosByPrecioDesc = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      order: [['precio', 'DESC']]
    });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos por precio', error });
  }
};

// Filtrar productos por precio de menor a mayor
export const getProductosByPrecioAsc = async (req, res) => {
  try {
    const productos = await Producto.findAll({
      order: [['precio', 'ASC']]
    });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos por precio', error });
  }
};

// Obtener productos por usuario
export const getProductosByUsuario = async (req, res) => {
  try {
    const { artesano_id } = req.params;
    const productos = await Producto.findAll({ where: { artesano_id } });
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos por usuario', error });
  }
};
