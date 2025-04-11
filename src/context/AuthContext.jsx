import React, { createContext, useContext, useState, useEffect } from 'react';
import { verifyToken } from '../Auth/auth';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = async () => {
    const data = await verifyToken();
    setUserData(data);
    setLoading(false);
  };

  const login = (token) => {
    localStorage.setItem('Authinfo', token);
    checkAuth(); // Update userData after login
  };

  const logout = () => {
    localStorage.removeItem('Authinfo');
    setUserData(null); // Clear userData on logout
  };

  useEffect(() => {
    checkAuth(); // Check authentication on app load
  }, []);

  return (
    <AuthContext.Provider value={{ userData, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);