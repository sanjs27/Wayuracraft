import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import "../styles/Perfil.css";

const Perfil = ({ user }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (user) {
      fetchProducts();
    }
  }, [user]);

  const fetchProducts = async () => {
    try {
      const response = await api.get(`/productos/usuario/${user.id_usuario}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await api.delete(`/productos/${productId}`);
      setProducts(products.filter(product => product.id_producto !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = user.telefono.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="perfil-container">
      <h2>Perfil del Usuario</h2>
      <div className="user-info">
        <p><strong>Nombre:</strong> {user.nombre}</p>
        <p><strong>Correo:</strong> {user.correo_electronico}</p>
        <p><strong>Celular:</strong> {user.telefono}</p>
        <button onClick={handleWhatsApp}>Comunícate por WhatsApp</button>
      </div>
      <div className="user-products">
        <h3>Mis Productos</h3>
        <div className="products-list">
          {products.map(product => (
            <div key={product.id_producto} className="product-card">
              <ProductCard product={product} />
              <button className="delete-button" onClick={() => handleDelete(product.id_producto)}>Eliminar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
