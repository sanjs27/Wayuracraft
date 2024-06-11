import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Producto from './Producto.js';
import Usuario from './Usuario.js';

const Calificacion = sequelize.define('Calificacion', {
  id_calificacion: {
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
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Usuario,
      key: 'id_usuario'
    }
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  comentario: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'Calificaciones'
});

export default Calificacion;
