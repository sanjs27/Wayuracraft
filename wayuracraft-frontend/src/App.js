import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContainerPrincipal from './components/ContainerPrincipal';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import Productos from './pages/Productos';
import ProductDetail from './pages/ProductDetail';
import OtherUserProfile from './pages/OtherUserProfile';
import AgregarProducto from './pages/AgregarProducto'; // Asegúrate de importar AgregarProducto
import Carrito from './pages/Carrito';
import api from './services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.get('/users/me', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          setIsLoggedIn(true);
          setUser(response.data);
        })
        .catch(error => {
          console.error('Error fetching user:', error);
        });
    }
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <Routes>
        <Route path="/" element={<ContainerPrincipal />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil user={user} onLogout={handleLogout} />} />
        <Route path="/perfil/:id" element={<OtherUserProfile />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/detalle/:id" element={<ProductDetail user={user} />} /> {/* Aquí se pasa el usuario */}
        <Route path="/agregar-producto" element={<AgregarProducto />} /> {/* Aquí se usa AgregarProducto */}
        <Route path="/carrito" element={<Carrito user={user} />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
