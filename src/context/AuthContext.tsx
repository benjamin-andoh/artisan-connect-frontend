import { createContext, useState, useEffect, useContext } from 'react';
import type { ReactNode } from 'react';
import { jwtDecode } from 'jwt-decode';

// Define the shape of the user and context
interface DecodedToken {
  id: number;
  role: string;
  exp: number;
  iat: number;
  // Add other fields if needed
}

interface AuthContextType {
  user: DecodedToken | null;
  login: (token: string) => void;
  logout: () => void;
}

// Create Context
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<DecodedToken | null>(null);

  // Check and decode token on mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        setUser(decoded);
      } catch (err) {
        console.error('Invalid token:', err);
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  }, []);

  // Login function
  const login = (token: string) => {
    try {
      const decoded: DecodedToken = jwtDecode(token);
      localStorage.setItem('token', token);
      setUser(decoded);
    } catch (err) {
      console.error('Login failed: Invalid token');
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
