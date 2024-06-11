import Carrito from '../models/Carrito.js';
import DetalleCarrito from '../models/DetalleCarrito.js';

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
