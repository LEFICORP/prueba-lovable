import axios from 'axios';

/**
 * Configura una instancia de Axios con una URL base.  
 * El valor se toma de la variable `VITE_API_URL` si está definida,
 * de lo contrario utilizará `http://localhost:3001/api` como predeterminado.
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
});

// Añade un interceptor para incluir el token JWT si está presente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;