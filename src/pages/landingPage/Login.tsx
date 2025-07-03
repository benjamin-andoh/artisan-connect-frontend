import React, { useState } from 'react';
import API from '../../utils/api';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/landingPage/Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const res = await API.post('/auth/login', { email, password });
      const { token, user } = res.data; 

    if (!user) {
      navigate('/login');
      return;
    }
    login(user, token);
    if (user.userType === 'artisan') {
      if (user.profileCompleted) {
        navigate('/artisan-dashboard');
      } else {
        navigate('/artisan/update-profile');
      }
    } else if (user.userType === 'customer') {
      if (user.profileCompleted) {
        navigate('/customer-dashboard');
      } else {
        navigate('/customer/update-profile');
      }
    } else if (user.userType === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/');
    }

    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleLogin} className="login-form">
      <h2 className="login-title">Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="email-input"
        required
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="password-input"
        required
      />

      {error && <p className="login-error">{error}</p>}

      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default Login;
