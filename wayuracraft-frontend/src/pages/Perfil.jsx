import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import ProductCard from '../components/ProductCard';
import "../styles/Perfil.css";

const Perfil = ({ user, onLogout }) => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (id) {
      fetchProfile(id);
      fetchProducts(id);
    } else if (user) {
      fetchProfile(user.id_usuario);
      fetchProducts(user.id_usuario);
    }
  }, [id, user]);

  const fetchProfile = async (userId) => {
    try {
      const response = await api.get(`/users/${userId}`);
      setProfile(response.data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchProducts = async (userId) => {
    try {
      const response = await api.get(`/productos/usuario/${userId}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  if (!profile) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="perfil-container">
      <h2>Perfil del Usuario</h2>
      <div className="user-info">
        <p><strong>Nombre:</strong> {profile.nombre}</p>
        <p><strong>Correo:</strong> {profile.correo_electronico}</p>
        <p><strong>Celular:</strong> {profile.telefono}</p>
        {id ? (
          <button onClick={() => window.open(`https://wa.me/${profile.telefono}`, '_blank')}>
            Comunícate por WhatsApp
          </button>
        ) : (
          <>
            <button onClick={onLogout}>Cerrar sesión</button>
            <Link to="/agregar-producto"><button>Agregar Producto</button></Link>
          </>
        )}
      </div>
      <div className="user-products">
        <h3>Productos del Usuario</h3>
        <div className="products-list">
          {products.map(product => (
            <ProductCard key={product.id_producto} product={product} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perfil;

