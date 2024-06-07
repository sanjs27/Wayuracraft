import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import api from './services/api';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={isLoggedIn ? <h1>Welcome</h1> : <Login />} />
    </Routes>
  );
};

export default App;

