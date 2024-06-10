import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = ({ onLogin }) => {
  return (
    <div>
      <h2>Iniciar sesión</h2>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};

export default Login;
