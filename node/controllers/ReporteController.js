import Reporte from '../models/Reportes.js';

export const getReportes = async (req, res) => {
  try {
    const reportes = await Reporte.findAll();
    res.status(200).json(reportes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los reportes', error });
  }
};

export const createReporte = async (req, res) => {
  try {
    const { nombre, descripcion, fecha_generacion, admin_id, tipo } = req.body;

    const newReporte = await Reporte.create({
      nombre,
      descripcion,
      fecha_generacion,
      admin_id,
      tipo
    });

    res.status(201).json(newReporte);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el reporte', error });
  }
};
