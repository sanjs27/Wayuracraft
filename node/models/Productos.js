import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';
import Categoria from './Categorias.js';

const Producto = sequelize.define('Producto', {
  id_producto: {
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
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING
  },
  artesano_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_usuario'
    }
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Categoria,
      key: 'id_categoria'
    }
  }
}, {
  tableName: 'Productos'
});

export default Producto;
