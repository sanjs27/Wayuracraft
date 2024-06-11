import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Producto from './Productos.js';
import User from './User.js';

const Eliminacion = sequelize.define('Eliminacion', {
  id_eliminacion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Producto,
      key: 'id_producto'
    }
  },
  admin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_usuario'
    }
  },
  fecha_eliminacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  motivo: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'Eliminaciones'
});

export default Eliminacion;
