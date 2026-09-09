import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import NavBar from '../components/NavBar.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './NotFound.module.css';

export default function NotFound() {
  useDocumentTitle('Page not found');
  const { isLoggedIn } = useAuth();
  const homeHref = isLoggedIn ? '/dashboard' : '/';
  const homeLabel = isLoggedIn ? 'Dashboard' : 'Home';

  return (
    <div className={styles.page}>
      <NavBar />
      <main id="main-content" className={styles.main}>
        <div className={styles.inner}>
          <p className={styles.code}>404</p>
          <h1 className={styles.title}>Page not found</h1>
          <p className={styles.subtitle}>
            That page doesn't exist, or it may have moved.
          </p>
          <Link to={homeHref} className={styles.homeLink}>← Back to {homeLabel}</Link>
        </div>
      </main>
    </div>
  );
}
