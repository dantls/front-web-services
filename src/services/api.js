import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.8.220:3335',
});

export default api
