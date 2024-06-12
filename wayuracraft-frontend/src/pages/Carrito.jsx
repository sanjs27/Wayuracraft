import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';
import '../styles/Carrito.css';

const Carrito = ({ user }) => {
  const [carrito, setCarrito] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const response = await api.get(`/carrito/${user.id_usuario}`);
        setCarrito(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching carrito:', error);
      }
    };

    if (user) {
      fetchCarrito();
    }
  }, [user]);

  const handleDelete = async (detalle_id) => {
    try {
      await api.delete(`/carrito/delete/${detalle_id}`);
      setMessage('Producto eliminado del carrito');
      setCarrito({
        ...carrito,
        DetalleCarrito: carrito.DetalleCarrito.filter(item => item.id_detalle !== detalle_id)
      });
    } catch (error) {
      console.error('Error deleting product from carrito:', error);
    }
  };

  const handleComprar = () => {
    // Implementar la lógica de compra aquí
    setMessage('Compra realizada con éxito');
  };

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  if (!carrito || !carrito.DetalleCarrito.length) {
    return <div className="empty-carrito">Tu carrito está vacío.</div>;
  }

  return (
    <div className="carrito-container">
      <h2>Tu Carrito</h2>
      {message && <div className="message">{message}</div>}
      <div className="carrito-list">
        {carrito.DetalleCarrito.map(item => (
          <div key={item.id_detalle} className="carrito-item">
            <div className="carrito-item-image">
              <img src={item.Producto.imagen} alt={item.Producto.nombre} />
            </div>
            <div className="carrito-item-info">
              <h3>{item.Producto.nombre}</h3>
              <p>{item.Producto.descripcion}</p>
              <p><strong>Precio:</strong> ${item.Producto.precio}</p>
              <p><strong>Cantidad:</strong> {item.cantidad}</p>
              <button className="delete-product" onClick={() => handleDelete(item.id_detalle)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>
      <button className="buy-now" onClick={handleComprar}>Comprar Ahora</button>
    </div>
  );
};

export default Carrito;
