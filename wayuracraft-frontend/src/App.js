import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContainerPrincipal from './components/ContainerPrincipal';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Perfil from './pages/Perfil';
import Productos from './pages/Productos';
import api from './services/api';
import { ToastContainer, toast } from 'react-toastify';
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

  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <Routes>
        <Route path="/" element={<ContainerPrincipal />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Perfil user={user} />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
