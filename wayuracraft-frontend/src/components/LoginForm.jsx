import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/login', { correo_electronico: email, contraseña: password });
      localStorage.setItem('token', response.data.token); // Guarda el token en localStorage
      onLogin(response.data.user); // Actualiza el estado de usuario en App.js
      navigate('/');
      toast.success('Inicio de sesión exitoso'); // Notificación de éxito
    } catch (error) {
      console.error('Error logging in:', error);
      if (error.response && error.response.status === 401) {
        toast.error('Contraseña incorrecta'); // Notificación de contraseña incorrecta
      } else if (error.response && error.response.status === 404) {
        toast.error('Usuario no encontrado'); // Notificación de usuario no encontrado
      } else {
        toast.error('Error al iniciar sesión'); // Notificación de error general
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
      <Link to="/register">Register</Link>
    </form>
  );
};

export default LoginForm;
