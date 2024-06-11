import Categoria from '../models/Categorias.js';

// Obtener todas las categorías
export const getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.status(200).json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las categorías', error });
  }
};

// Crear una o varias categorías
export const createCategoria = async (req, res) => {
  try {
    console.log('Datos recibidos para crear categorías:', req.body);
    const categorias = req.body;
    const nuevasCategorias = await Categoria.bulkCreate(categorias);
    console.log('Categorías creadas:', nuevasCategorias);
    res.status(201).json(nuevasCategorias);
  } catch (error) {
    console.error('Error al crear las categorías:', error);
    res.status(500).json({ message: 'Error al crear las categorías', error });
  }
};
