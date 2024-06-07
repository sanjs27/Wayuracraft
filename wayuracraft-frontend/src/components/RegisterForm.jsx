import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const RegisterForm = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rol, setRol] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/users/register', {
        nombre,
        apellido,
        correo_electronico: email,
        contraseña,
        telefono,
        rol
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
      <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} placeholder="Apellido" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" />
      <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} placeholder="Teléfono" />
      <select value={rol} onChange={(e) => setRol(e.target.value)}>
        <option value="">Seleccione un rol</option>
        <option value="Admin">Admin</option>
        <option value="Usuario">Usuario</option>
        <option value="Cliente">Cliente</option>
        <option value="Artesano">Artesano</option>
      </select>
      <button type="submit">Registrar</button>
      <Link to="/login">Iniciar sesión</Link>
    </form>
  );
};

export default RegisterForm;
