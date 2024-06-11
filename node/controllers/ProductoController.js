import Producto from '../models/Producto.js';

export const getProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos', error });
  }
};

export const createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, precio, stock, imagen, artesano_id, categoria_id } = req.body;

    const newProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      stock,
      imagen,
      artesano_id,
      categoria_id
    });

    res.status(201).json(newProducto);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el producto', error });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;

    await Producto.destroy({ where: { id_producto: id } });

    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto', error });
  }
};
