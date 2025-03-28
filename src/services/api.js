import axios from 'axios';
import { getLocalStorage, setLocalStorage } from '../utils/storage';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  timeout: 10000,
});

api.interceptors.request.use(config => {
  const token = getLocalStorage('authToken');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
}, error => Promise.reject(error));

api.interceptors.response.use(
  response => response.data,
  error => {
    console.error('API Error:', error.response?.status);
    return Promise.reject(error.response?.data || error.message);
  }
);

export const cachedGet = (url) => ({
  query: async () => {
    const cacheKey = `cache_${url}`;
    const cached = getLocalStorage(cacheKey);
    if (cached) return cached;
    
    const data = await api.get(url);
    setLocalStorage(cacheKey, data, 300);
    return data;
  }
});

export default api;
