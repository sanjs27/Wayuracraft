import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Producto from './Productos.js';
import User from './User.js';

const Personalizacion = sequelize.define('Personalizacion', {
  id_personalizacion: {
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
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_usuario'
    }
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  imagen: {
    type: DataTypes.STRING
  },
  estado: {
    type: DataTypes.ENUM('Pendiente', 'Aprobada', 'Rechazada'),
    allowNull: false
  }
}, {
  tableName: 'Personalizaciones'
});

export default Personalizacion;
