import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import sequelize from './config/database.js';
import userRoutes from './routes/userRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import pedidoRoutes from './routes/pedidoRoutes.js';
import carritoRoutes from './routes/carritoRoutes.js';
import personalizacionRoutes from './routes/personalizacionRoutes.js';
import reporteRoutes from './routes/reporteRoutes.js';
import eliminacionRoutes from './routes/eliminacionRoutes.js';
import calificacionRoutes from './routes/calificacionRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js'; // Nueva ruta de categorías

dotenv.config();  // Cargar variables de entorno desde .env

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/pedidos', pedidoRoutes);
app.use('/api/carrito', carritoRoutes);
app.use('/api/personalizaciones', personalizacionRoutes);
app.use('/api/reportes', reporteRoutes);
app.use('/api/eliminaciones', eliminacionRoutes);
app.use('/api/calificaciones', calificacionRoutes);
app.use('/api/categorias', categoriaRoutes); // Nueva ruta de categorías

sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to sync the database:', err);
  });

