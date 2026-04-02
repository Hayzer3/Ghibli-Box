import axios from 'axios';

// conexão base 
export const api = axios.create({
  baseURL: 'http://localhost:8080',
});

// interceptar e modificar requisições HTTP antes que elas sejam enviadas ao servidor
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('ghiblibox-token'); 
    
    if (token) {
      // Se tiver token, injeta ele no cabeçalho de Autorização
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
