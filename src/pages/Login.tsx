import React, { useState } from 'react';
import API from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', { email, password });
      const {token} = res.data;

      login(token);

      const {userType} = res.data.user;

    if (userType === 'customer') {
        navigate('/customer');
    } else {
      navigate('/artisan');
    }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
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
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="password-input"
      />
      {error && <p className="login-error">{error}</p>}
      <button type="submit" className="login-button">Login</button>
    </form>
  );
};

export default Login;
