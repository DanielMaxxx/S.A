import axios from 'axios';

// Base URL da API
const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Substitua pelo URL real da sua API, se necessário
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
