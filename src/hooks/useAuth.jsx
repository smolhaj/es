import { createContext, useContext, useState, useCallback } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('pablo_token'));
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pablo_user')); } catch { return null; }
  });

  const login = useCallback((newToken, newUser) => {
    localStorage.setItem('pablo_token', newToken);
    localStorage.setItem('pablo_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('pablo_token');
    localStorage.removeItem('pablo_user');
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ token, user, login, logout, isLoggedIn: !!token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
