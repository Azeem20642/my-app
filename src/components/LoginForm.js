import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';

function LoginForm() {
  const [credentials, setCredentials] = useState({ user_email: '', user_password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(credentials)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/dashboard');
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="user_email" placeholder="Email" value={credentials.user_email} onChange={handleChange} required />
      <input type="password" name="user_password" placeholder="Password" value={credentials.user_password} onChange={handleChange} required />
      <button type="submit">Log In</button>
    </form>
  );
}

export default LoginForm;
