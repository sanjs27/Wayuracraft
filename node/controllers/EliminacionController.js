import Eliminacion from '../models/Eliminaciones.js';

export const getEliminaciones = async (req, res) => {
  try {
    const eliminaciones = await Eliminacion.findAll();
    res.status(200).json(eliminaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las eliminaciones', error });
  }
};

export const createEliminacion = async (req, res) => {
  try {
    const { producto_id, admin_id, fecha_eliminacion, motivo } = req.body;

    const newEliminacion = await Eliminacion.create({
      producto_id,
      admin_id,
      fecha_eliminacion,
      motivo
    });

    res.status(201).json(newEliminacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la eliminación', error });
  }
};
