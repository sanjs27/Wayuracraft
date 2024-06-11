import Personalizacion from '../models/Personalizacion.js';

export const getPersonalizaciones = async (req, res) => {
  try {
    const personalizaciones = await Personalizacion.findAll();
    res.status(200).json(personalizaciones);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las personalizaciones', error });
  }
};

export const createPersonalizacion = async (req, res) => {
  try {
    const { producto_id, cliente_id, descripcion, imagen, estado } = req.body;

    const newPersonalizacion = await Personalizacion.create({
      producto_id,
      cliente_id,
      descripcion,
      imagen,
      estado
    });

    res.status(201).json(newPersonalizacion);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la personalización', error });
  }
};
