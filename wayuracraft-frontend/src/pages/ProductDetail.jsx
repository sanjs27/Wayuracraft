import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import '../styles/ProductDetail.css';

const ProductDetail = ({ user }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await api.get(`/productos/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Producto no encontrado');
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [id]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      await api.delete(`/productos/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      navigate('/productos');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!product) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.imagen} alt={product.nombre} />
      </div>
      <div className="product-info">
        <h2>{product.nombre}</h2>
        <p>{product.descripcion}</p>
        <p><strong>Precio:</strong> ${product.precio}</p>
        <p><strong>Registrado por:</strong> <Link to={`/perfil/${product.User.id_usuario}`}>{product.User.nombre}</Link></p>
        <button className="add-to-cart">Agregar al Carrito</button>
        <button className="buy-now">Comprar Ahora</button>
        {user && user.id_usuario === product.artesano_id && (
          <button className="delete-product" onClick={handleDelete}>Eliminar Producto</button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
