import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth.jsx';
import Landing from './pages/Landing.jsx';
import Auth from './pages/Auth.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Session from './pages/Session.jsx';
import GrammarRef from './pages/GrammarRef.jsx';
import VocabReview from './pages/VocabReview.jsx';
import VocabBrowser from './pages/VocabBrowser.jsx';
import VerbsRef from './pages/VerbsRef.jsx';
import FalseFriends from './pages/FalseFriends.jsx';
import Idioms from './pages/Idioms.jsx';
import Pronunciation from './pages/Pronunciation.jsx';
import Profile from './pages/Profile.jsx';
import History from './pages/History.jsx';

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
        <Route path="/vocab-review" element={<Protected><VocabReview /></Protected>} />
        <Route path="/vocab" element={<Protected><VocabBrowser /></Protected>} />
        <Route path="/grammar" element={<Protected><GrammarRef /></Protected>} />
        <Route path="/false-friends" element={<Protected><FalseFriends /></Protected>} />
        <Route path="/idioms" element={<Protected><Idioms /></Protected>} />
        <Route path="/pronunciation" element={<Protected><Pronunciation /></Protected>} />
        <Route path="/verbs" element={<Protected><VerbsRef /></Protected>} />
        <Route path="/profile" element={<Protected><Profile /></Protected>} />
        <Route path="/history" element={<Protected><History /></Protected>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}
