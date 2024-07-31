import axios from 'axios';

const API_BASE_URL = 'https://syoft.dev/Api';

export const registerUser = (userData) => {
  return axios.post(`${API_BASE_URL}/user_registeration/api/user_registeration`, userData);
};

export const loginUser = (credentials) => {
  return axios.post(`${API_BASE_URL}/userlogin/api/userlogin`, credentials);
};
