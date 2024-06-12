import React from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import "../styles/ProductCard.css";

const ProductCard = ({ product, user }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await api.delete(`/productos/${product.id_producto}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      // Add logic to refresh the product list or provide feedback to the user
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="product-card">
      <Link to={`/productos/detalle/${product.id_producto}`}>
        <img src={product.imagen} alt={product.nombre} className="product-image" />
      </Link>
      <h3 className="product-name">{product.nombre}</h3>
      {/* <p className="product-description">{product.descripcion}</p> */}
      <p className="product-price">${product.precio}</p>
      {user && user.id_usuario === product.artesano_id && (
        <button className="delete-product" onClick={handleDelete}>Eliminar Producto</button>
      )}
    </div>
  );
};

export default ProductCard;
