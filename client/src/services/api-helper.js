import axios from 'axios';

const api = axios.create({
  baseURL: `https://agile-falls-46666.herokuapp.com`,
  // baseURL: 'http://localhost:3001',
});

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  return resp.data;
};

export const registerUser = async (registerData) => {
  const resp = await api.post(`/auth/register`, registerData);
  return resp.data;
}

export const fetchCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
}

export const fetchProducts = async () => {
  const resp = await api.get('/products');
  return resp.data;
}

const storeToken = (token) => {
  localStorage.setItem('jwt', token);
  api.defaults.headers.common.authorization = `Bearer ${token}`
}

export const verifyToken = async () => {
  const token = localStorage.getItem('jwt');
  if (token) {
    try {
      const resp = await api.get('/auth/verify', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      // storeToken(resp.data.user);
      storeToken(token);

      console.log(resp.data.user);
      return resp.data.user;
    } catch (e) {
      console.log(e.message);
      console.log('invalid token');
    }
  }
}