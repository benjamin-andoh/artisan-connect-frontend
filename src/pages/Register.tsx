import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';
import '../styles/Register.css';

const Register: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    userType: 'customer',
  });

  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await API.post('/users', formData);

      if (res.status === 201 || res.status === 200) {
        localStorage.setItem('token', res.data.token);
        navigate('/email-verification');
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err: any) {
      console.error(err);
      const msg = err.response?.data?.message || 'Registration failed. Please check your details.';
      setError(msg);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="username-input"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="email-input"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="password-input"
          required
        />

        <div className="user-type-buttons">
          <button
            type="button"
            className={`user-type-button ${formData.userType === 'customer' ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, userType: 'customer' })}
          >
            Customer
          </button>
          <button
            type="button"
            className={`user-type-button ${formData.userType === 'artisan' ? 'active' : ''}`}
            onClick={() => setFormData({ ...formData, userType: 'artisan' })}
          >
            Artisan
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
