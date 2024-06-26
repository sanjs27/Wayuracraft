import Carrito from '../models/Carrito.js';
import DetalleCarrito from '../models/Detalle_Carrito.js';

export const getCarrito = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const carrito = await Carrito.findOne({
      where: { usuario_id },
      include: DetalleCarrito
    });

    if (!carrito) {
      return res.status(404).json({ message: 'Carrito no encontrado' });
    }

    res.status(200).json(carrito);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el carrito', error });
  }
};

export const addProductoToCarrito = async (req, res) => {
  try {
    const { carrito_id, producto_id, cantidad } = req.body;

    const detalleCarrito = await DetalleCarrito.create({
      carrito_id,
      producto_id,
      cantidad
    });

    res.status(201).json(detalleCarrito);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar producto al carrito', error });
  }
};

export const deleteProductoFromCarrito = async (req, res) => {
  try {
    const { detalle_id } = req.params;

    await DetalleCarrito.destroy({ where: { id_detalle: detalle_id } });

    res.status(200).json({ message: 'Producto eliminado del carrito' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el producto del carrito', error });
  }
};
