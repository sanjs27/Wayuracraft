import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

const Carrito = sequelize.define('Carrito', {
  id_carrito: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_usuario'
    }
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'Carritos'
});

export default Carrito;
