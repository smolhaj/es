import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import CefrBadge from './CefrBadge.jsx';
import styles from './NavBar.module.css';

export default function NavBar({ cefrLevel }) {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to={isLoggedIn ? '/dashboard' : '/'} className={styles.logo}>
          <span className={styles.logoMark}>P</span>
          <span className={styles.logoText}>Pablo</span>
        </Link>

        <div className={styles.right}>
          {cefrLevel && <CefrBadge level={cefrLevel} />}

          {isLoggedIn ? (
            <>
              <Link to="/session" className={`btn btn-ghost ${styles.navLink}`}>
                Practice
              </Link>
              <Link to="/dashboard" className={`btn btn-ghost ${styles.navLink}`}>
                Dashboard
              </Link>
              <Link to="/profile" className={`btn btn-ghost ${styles.navLink}`}>
                Profile
              </Link>
              <button onClick={handleLogout} className={`btn btn-ghost ${styles.navLink}`}>
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={`btn btn-ghost ${styles.navLink}`}>
                Sign in
              </Link>
              <Link to="/register" className="btn btn-primary">
                Start learning
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
