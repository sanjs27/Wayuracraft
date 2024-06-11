import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Pedido from './Pedidos.js';
import Producto from './Productos.js';

const DetallePedido = sequelize.define('DetallePedido', {
  id_detalle_pedido: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  pedido_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Pedido,
      key: 'id_pedido'
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
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, {
  tableName: 'Detalle_Pedido'
});

export default DetallePedido;
