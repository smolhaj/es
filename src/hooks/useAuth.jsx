import { createContext, useContext, useState, useCallback, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem('capi_token'));
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('capi_user')); } catch { return null; }
  });

  const login = useCallback((newToken, newUser) => {
    localStorage.setItem('capi_token', newToken);
    localStorage.setItem('capi_user', JSON.stringify(newUser));
    setToken(newToken);
    setUser(newUser);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('capi_token');
    localStorage.removeItem('capi_user');
    setToken(null);
    setUser(null);
  }, []);

  // A 401 from any authenticated API call (expired/invalid token) logs the
  // user out globally — `Protected` routes then redirect to /login on their
  // own via `isLoggedIn` going false, instead of leaving whatever component
  // made the call to render a bare "Unauthorized" error in place of content.
  useEffect(() => {
    function handleUnauthorized() {
      logout();
      sessionStorage.setItem('capi_session_expired', '1');
    }
    window.addEventListener('capi:unauthorized', handleUnauthorized);
    return () => window.removeEventListener('capi:unauthorized', handleUnauthorized);
  }, [logout]);

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
