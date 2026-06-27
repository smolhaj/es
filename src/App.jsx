import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth.jsx';
import Landing from './pages/Landing.jsx';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Session from './pages/Session.jsx';

function Protected({ children }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function Guest({ children }) {
  const { isLoggedIn } = useAuth();
  return !isLoggedIn ? children : <Navigate to="/dashboard" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Guest><Landing /></Guest>} />
        <Route path="/login" element={<Guest><Auth mode="login" /></Guest>} />
        <Route path="/register" element={<Guest><Auth mode="register" /></Guest>} />
        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="/session" element={<Protected><Session /></Protected>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
