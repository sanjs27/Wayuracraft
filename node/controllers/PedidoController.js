import Pedido from '../models/Pedidos.js';
import DetallePedido from '../models/Detalle_Pedido.js';

export const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      include: DetallePedido
    });
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos', error });
  }
};

export const createPedido = async (req, res) => {
  try {
    const { fecha_pedido, estado, cliente_id, direccion_envio, detalles } = req.body;

    const newPedido = await Pedido.create({
      fecha_pedido,
      estado,
      cliente_id,
      direccion_envio
    });

    detalles.forEach(async (detalle) => {
      await DetallePedido.create({
        pedido_id: newPedido.id_pedido,
        producto_id: detalle.producto_id,
        cantidad: detalle.cantidad,
        precio_unitario: detalle.precio_unitario
      });
    });

    res.status(201).json(newPedido);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el pedido', error });
  }
};
