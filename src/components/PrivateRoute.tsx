// src/components/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';
import { type JSX } from 'react';

interface PrivateRouteProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
