import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3001`,
});

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData);
  return resp.data;
};

export const registerUser = async (registerData) => {
  const resp = await api.post(`/auth/register`, registerData);
  return resp.data;
}

export const fetchCategories = async() => {
  const resp = await api.get('/categories');
  return resp.data;
}