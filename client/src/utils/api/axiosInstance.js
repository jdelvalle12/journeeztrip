import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    timeout: 5000,
  },
});

if (typeof window !== 'undefined') {
  const token = localStorage.getItem('token');
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axiosInstance;