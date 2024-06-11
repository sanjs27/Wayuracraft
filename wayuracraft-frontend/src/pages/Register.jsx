import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import '../styles/Register.css'; 
const Register = () => {
  return (
    <div>
      <h2>Registro</h2>
      <RegisterForm />
      <Link to="/login">¿Ya tienes una cuenta? Inicia sesión</Link>
    </div>
  );
};

export default Register;

