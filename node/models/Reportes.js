import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

const Reporte = sequelize.define('Reporte', {
  id_reporte: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  fecha_generacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  admin_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_usuario'
    }
  },
  tipo: {
    type: DataTypes.ENUM('ventas', 'productos más vendidos', 'análisis de usuarios'),
    allowNull: false
  }
}, {
  tableName: 'Reportes'
});

export default Reporte;
