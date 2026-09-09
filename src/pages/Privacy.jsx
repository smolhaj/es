import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import NavBar from '../components/NavBar.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Legal.module.css';

const LAST_UPDATED = 'July 20, 2026';

export default function Privacy() {
  useDocumentTitle('Privacy Policy');
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.page}>
      <NavBar />
      <main id="main-content" className={styles.main}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>

          <p className={styles.intro}>
            Capi is a small, independently-run Spanish-learning project. This page explains, in
            plain language, what data it collects, why, and how you can get it back or delete it.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>What we collect</h2>
            <p>Creating an account requires an email address and a password. We never see or store your password itself — only a salted, one-way hash of it.</p>
            <p>Beyond that, using Capi generates learning data tied to your account:</p>
            <ul>
              <li>Practice sessions, answers, and accuracy across exercises</li>
              <li>Vocabulary and flashcard progress (spaced-repetition scheduling state)</li>
              <li>Grammar concept mastery and the specific errors you make, used to personalise what's taught next</li>
              <li>CEFR level history as it changes over time, per skill</li>
              <li>Writing samples you submit for feedback</li>
              <li>Reading-passage completion and comprehension-question results</li>
              <li>Any personal-context facts you choose to add in your Profile (e.g. your native language or learning goals), used to personalise sessions</li>
            </ul>
            <p>We don't use any analytics, advertising, or tracking scripts. There's nothing on this site watching you browse.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How we use it</h2>
            <p>
              Your learning data drives the adaptive practice engine — deciding what to teach next,
              how to explain it, and when to review it — and powers your own progress views
              (Dashboard, Profile, History). We don't sell it, rent it, or use it for advertising.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Third parties</h2>
            <p>
              Capi's adaptive session engine is built on Google's Gemini API. When you practice,
              your answers, writing samples, and any personal-context facts you've added are sent
              to Gemini to generate exercises and grade your responses — this is how the adaptive
              engine works and can't be turned off without disabling adaptive practice itself.
              Google's own privacy terms govern how they handle that data on their end.
            </p>
            <p>
              The site runs on Cloudflare: your account and learning data are stored in a
              Cloudflare D1 database, and short-lived rate-limiting counters (e.g. login attempts)
              are stored in Cloudflare KV.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Cookies and local storage</h2>
            <p>
              Capi doesn't use cookies. Your login session is a token stored in your browser's
              local storage, which keeps you signed in until you sign out or the token expires.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>How long we keep it</h2>
            <p>
              We keep your data for as long as your account exists. There's no automatic expiry —
              deletion is something you control directly.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your data, your control</h2>
            <p>
              From your {isLoggedIn ? <Link to="/profile">Profile</Link> : 'Profile'} page, at any
              time, you can:
            </p>
            <ul>
              <li><strong>Export</strong> everything stored about your account as a single JSON file</li>
              <li><strong>Delete</strong> your account and all associated data permanently, with no waiting period</li>
            </ul>
            <p>Account deletion is immediate and can't be undone — there's no recovery window or backup restore.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Children</h2>
            <p>
              Capi isn't directed at children under 13, and we don't knowingly collect data from
              them.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to this policy</h2>
            <p>
              If this policy changes, we'll update the date at the top of this page. Significant
              changes will be noted here directly rather than announced elsewhere.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Questions</h2>
            <p>
              This is a small project without a dedicated support team. The most reliable way to
              reach us is by{' '}
              <a href="https://github.com/smolhaj/es/issues" target="_blank" rel="noreferrer">
                opening an issue on GitHub
              </a>.
            </p>
          </section>

          <Link to={isLoggedIn ? '/profile' : '/'} className={styles.backLink}>
            ← Back to {isLoggedIn ? 'Profile' : 'Home'}
          </Link>
        </div>
      </main>
    </div>
  );
}
