import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? 'https://your-backend-url.com/api/v1' : 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;