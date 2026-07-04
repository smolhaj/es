import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import CefrBadge from './CefrBadge.jsx';
import styles from './NavBar.module.css';

export default function NavBar({ cefrLevel }) {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // The mobile menu is a full-height panel over the page, so lock body
  // scroll while it's open — otherwise the page underneath scrolls along
  // with (or independently of) the menu's own touch drag on mobile.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prevOverflow; };
  }, [open]);

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    // menuRef wraps header + the mobile menu panel together (for the
    // outside-click check above); the panel is rendered as a *sibling* of
    // <header>, not nested inside it — <header> has `backdrop-filter`,
    // which establishes a new containing block for `position: fixed`
    // descendants, so a fixed-position menu nested inside it resolves
    // top/bottom against the ~60px header box instead of the viewport
    // and collapses to nothing instead of covering the page.
    <div ref={menuRef}>
      <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to={isLoggedIn ? '/dashboard' : '/'} className={styles.logo}>
          <span className={styles.logoMark}>C</span>
          <span className={styles.logoText}>Capi</span>
        </Link>

        {/* Desktop nav */}
        <div className={styles.right}>
          {cefrLevel && <CefrBadge level={cefrLevel} />}

          {isLoggedIn ? (
            <>
              <Link to="/learn" className={`btn btn-ghost ${styles.navLink}`}>Learn</Link>
              <Link to="/session" className={`btn btn-ghost ${styles.navLink}`}>Practice</Link>
              <Link to="/flashcards" className={`btn btn-ghost ${styles.navLink}`}>Flashcards</Link>
              <Link to="/dashboard" className={`btn btn-ghost ${styles.navLink}`}>Dashboard</Link>
              <Link to="/profile" className={`btn btn-ghost ${styles.navLink}`}>Profile</Link>
              <button onClick={handleLogout} className={`btn btn-ghost ${styles.navLink}`}>Sign out</button>
            </>
          ) : (
            <>
              <Link to="/login" className={`btn btn-ghost ${styles.navLink}`}>Sign in</Link>
              <Link to="/register" className="btn btn-primary">Start learning</Link>
            </>
          )}

          {/* Hamburger — mobile only */}
          <button
            className={styles.hamburger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span className={`${styles.bar} ${open ? styles.barOpen1 : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen2 : ''}`} />
            <span className={`${styles.bar} ${open ? styles.barOpen3 : ''}`} />
          </button>
        </div>
      </nav>
      </header>

      {/* Mobile menu panel — sibling of <header>, see the comment above. */}
      {open && (
        <div className={styles.mobileMenu} role="menu">
          {isLoggedIn ? (
            <>
              <Link to="/learn"     className={styles.mobileLink} role="menuitem">Learn</Link>
              <Link to="/session"   className={styles.mobileLink} role="menuitem">Practice</Link>
              <Link to="/flashcards" className={styles.mobileLink} role="menuitem">Flashcards</Link>
              <Link to="/dashboard" className={styles.mobileLink} role="menuitem">Dashboard</Link>
              <Link to="/concepts"  className={styles.mobileLink} role="menuitem">Concepts</Link>
              <Link to="/grammar"   className={styles.mobileLink} role="menuitem">Grammar</Link>
              <Link to="/verbs"     className={styles.mobileLink} role="menuitem">Verbs</Link>
              <Link to="/vocab"     className={styles.mobileLink} role="menuitem">Vocabulary</Link>
              <Link to="/idioms"    className={styles.mobileLink} role="menuitem">Idioms</Link>
              <Link to="/regional"  className={styles.mobileLink} role="menuitem">Regional</Link>
              <Link to="/resources" className={styles.mobileLink} role="menuitem">Free resources</Link>
              <Link to="/history"   className={styles.mobileLink} role="menuitem">History</Link>
              <Link to="/profile"   className={styles.mobileLink} role="menuitem">Profile</Link>
              <button onClick={handleLogout} className={`${styles.mobileLink} ${styles.mobileLinkBtn}`} role="menuitem">
                Sign out
              </button>
            </>
          ) : (
            <>
              <Link to="/login"    className={styles.mobileLink} role="menuitem">Sign in</Link>
              <Link to="/register" className={styles.mobileLink} role="menuitem">Start learning</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}
