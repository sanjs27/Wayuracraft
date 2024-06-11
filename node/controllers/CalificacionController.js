import Calificacion from '../models/Calificacion.js';

export const getCalificaciones = async (req, res) => {
  try {
    const calificaciones = await Calificacion.findAll();
    res.status(200).json(calificaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las calificaciones', error });
  }
};

export const createCalificacion = async (req, res) => {
  try {
    const { producto_id, usuario_id, calificacion, comentario } = req.body;

    const newCalificacion = await Calificacion.create({
      producto_id,
      usuario_id,
      calificacion,
      comentario
    });

    res.status(201).json(newCalificacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la calificación', error });
  }
};
