import React, { useState } from 'react';
import { registerUser } from '../services/api';

function SignUpForm() {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_phone: '',
    user_password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      ...formData,
      user_lastname: 'Doe',
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };
    registerUser(userData)
      .then((response) => {
        console.log('User registered:', response.data);
      })
      .catch((error) => {
        console.error('Registration error:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="user_firstname" placeholder="First Name" value={formData.user_firstname} onChange={handleChange} required />
      <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
      <input type="text" name="user_phone" placeholder="Phone" value={formData.user_phone} onChange={handleChange} required />
      <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpForm;
