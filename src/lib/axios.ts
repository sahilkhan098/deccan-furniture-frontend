import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deccan-furniture-backend.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  // Optional: Add timeout, withCredentials, etc.
  timeout: 10000,
});

// Optional: Add request/response interceptors
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
