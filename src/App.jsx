import { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './hooks/useAuth.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import RouteFallback from './components/RouteFallback.jsx';
import { lazyRoute } from './lib/lazyRoute.js';

// Landing and Auth stay in the entry chunk: they're the two pages a
// logged-out visitor actually hits, and neither pulls in content data.
// Everything else is code-split — the reference pages and the curriculum
// carry megabytes of vocabulary/verb/grammar/unit data between them, and
// eagerly importing all of it meant every visitor downloaded the entire
// content library before the landing page could paint.
import Landing from './pages/Landing.jsx';
import Auth from './pages/Auth.jsx';

const Dashboard = lazyRoute(() => import('./pages/Dashboard.jsx'));
const GetStarted = lazyRoute(() => import('./pages/GetStarted.jsx'));
const Lesson = lazyRoute(() => import('./pages/Lesson.jsx'));
const Session = lazyRoute(() => import('./pages/Session.jsx'));
const Flashcards = lazyRoute(() => import('./pages/Flashcards.jsx'));
const FlashcardStats = lazyRoute(() => import('./pages/FlashcardStats.jsx'));
const GrammarRef = lazyRoute(() => import('./pages/GrammarRef.jsx'));
const VocabReview = lazyRoute(() => import('./pages/VocabReview.jsx'));
const VocabBrowser = lazyRoute(() => import('./pages/VocabBrowser.jsx'));
const VerbsRef = lazyRoute(() => import('./pages/VerbsRef.jsx'));
const FalseFriends = lazyRoute(() => import('./pages/FalseFriends.jsx'));
const CognatePatterns = lazyRoute(() => import('./pages/CognatePatterns.jsx'));
const Idioms = lazyRoute(() => import('./pages/Idioms.jsx'));
const Pronunciation = lazyRoute(() => import('./pages/Pronunciation.jsx'));
const Profile = lazyRoute(() => import('./pages/Profile.jsx'));
const History = lazyRoute(() => import('./pages/History.jsx'));
const Regional = lazyRoute(() => import('./pages/Regional.jsx'));
const Writing = lazyRoute(() => import('./pages/Writing.jsx'));
const Concepts = lazyRoute(() => import('./pages/Concepts.jsx'));
const Resources = lazyRoute(() => import('./pages/Resources.jsx'));
const Readings = lazyRoute(() => import('./pages/Readings.jsx'));
const ReadingPassage = lazyRoute(() => import('./pages/ReadingPassage.jsx'));
const Privacy = lazyRoute(() => import('./pages/Privacy.jsx'));
const Terms = lazyRoute(() => import('./pages/Terms.jsx'));
const NotFound = lazyRoute(() => import('./pages/NotFound.jsx'));

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
      <ScrollToTop />
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route path="/" element={<Guest><Landing /></Guest>} />
          <Route path="/login" element={<Guest><Auth mode="login" /></Guest>} />
          <Route path="/register" element={<Guest><Auth mode="register" /></Guest>} />
          <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
          <Route path="/learn" element={<Protected><GetStarted /></Protected>} />
          <Route path="/get-started" element={<Navigate to="/learn" replace />} />
          <Route path="/lessons/:unitId" element={<Protected><Lesson /></Protected>} />
          <Route path="/session" element={<Protected><Session /></Protected>} />
          <Route path="/flashcards" element={<Protected><Flashcards /></Protected>} />
          <Route path="/flashcards/stats" element={<Protected><FlashcardStats /></Protected>} />
          <Route path="/vocab-review" element={<Protected><VocabReview /></Protected>} />
          <Route path="/vocab" element={<Protected><VocabBrowser /></Protected>} />
          <Route path="/grammar" element={<Protected><GrammarRef /></Protected>} />
          <Route path="/false-friends" element={<Protected><FalseFriends /></Protected>} />
          <Route path="/cognates" element={<Protected><CognatePatterns /></Protected>} />
          <Route path="/idioms" element={<Protected><Idioms /></Protected>} />
          <Route path="/pronunciation" element={<Protected><Pronunciation /></Protected>} />
          <Route path="/verbs" element={<Protected><VerbsRef /></Protected>} />
          <Route path="/profile" element={<Protected><Profile /></Protected>} />
          <Route path="/history" element={<Protected><History /></Protected>} />
          <Route path="/regional" element={<Protected><Regional /></Protected>} />
          <Route path="/writing" element={<Protected><Writing /></Protected>} />
          <Route path="/concepts" element={<Protected><Concepts /></Protected>} />
          <Route path="/resources" element={<Protected><Resources /></Protected>} />
          <Route path="/readings" element={<Protected><Readings /></Protected>} />
          <Route path="/readings/:passageId" element={<Protected><ReadingPassage /></Protected>} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
