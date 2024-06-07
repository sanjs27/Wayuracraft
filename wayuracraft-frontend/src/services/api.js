import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // La URL base del servidor backend
});

export default api;