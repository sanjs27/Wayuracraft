import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <LoginForm />
      <Link to="/register">¿No tienes una cuenta? Regístrate</Link>
    </div>
  );
};

export default Login;
