import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import User from './User.js';

const Pedido = sequelize.define('Pedido', {
  id_pedido: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  fecha_pedido: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.ENUM('Pendiente', 'Procesando', 'Enviado', 'Entregado'),
    allowNull: false
  },
  cliente_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_usuario'
    }
  },
  direccion_envio: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Pedidos'
});

export default Pedido;
