import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Carrito from './Carrito.js';
import Producto from './Productos.js';

const DetalleCarrito = sequelize.define('DetalleCarrito', {
  id_detalle_carrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  carrito_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Carrito,
      key: 'id_carrito'
    }
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Producto,
      key: 'id_producto'
    }
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Detalle_Carrito'
});

export default DetalleCarrito;
