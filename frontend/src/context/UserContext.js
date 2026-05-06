import React, { createContext, useEffect, useState } from 'react';
import authService from '../services/authService';

export const UserContext = createContext({
  user: null,
  login: () => {},
  register: () => {},
  logout: () => {},
  updateProfile: () => {}
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(authService.getCurrentUser());

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    setUser(data.user);
    return data;
  };

  const register = async (userData) => {
    const data = await authService.register(userData);
    setUser(data.user);
    return data;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const updateProfile = async (profileData) => {
    const data = await authService.updateProfile(profileData);
    setUser(data.user);
    return data;
  };

  useEffect(() => {
    const storedUser = authService.getCurrentUser();
    if (JSON.stringify(storedUser) !== JSON.stringify(user)) {
      setUser(storedUser);
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, register, logout, updateProfile }}>
      {children}
    </UserContext.Provider>
  );
};
