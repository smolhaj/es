import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import NavBar from '../components/NavBar.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import styles from './Legal.module.css';

const LAST_UPDATED = 'July 20, 2026';

export default function Terms() {
  useDocumentTitle('Terms of Service');
  const { isLoggedIn } = useAuth();

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <h1 className={styles.title}>Terms of Service</h1>
          <p className={styles.updated}>Last updated: {LAST_UPDATED}</p>

          <p className={styles.intro}>
            Capi is a small, independently-run Spanish-learning project. These terms are written
            in plain language and cover the basics of using the site — they're not a substitute
            for professional legal advice, and there's no legal team behind this project.
          </p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Using Capi</h2>
            <p>
              Capi is a free, AI-assisted Spanish-learning tool: an adaptive practice engine, a
              structured curriculum, flashcards, and reference material. It's an educational aid,
              not a substitute for a certified language course or an official proficiency
              certification — the CEFR levels shown reflect the app's own assessment, not an
              accredited exam result.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Your account</h2>
            <ul>
              <li>You need a valid email address and a password of at least 8 characters to register.</li>
              <li>You're responsible for keeping your password secure and for anything that happens under your account.</li>
              <li>One account per person — don't share your login with others.</li>
              <li>You can delete your account at any time from your Profile page; deletion is immediate and permanent.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Acceptable use</h2>
            <p>Please don't:</p>
            <ul>
              <li>Attempt to disrupt, overload, or scrape the site</li>
              <li>Try to extract, abuse, or misuse the underlying AI system beyond normal practice use</li>
              <li>Use the service for anything illegal or to harass others</li>
              <li>Create multiple accounts to get around rate limits</li>
            </ul>
            <p>We may suspend or terminate accounts that violate these terms.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>AI-generated content</h2>
            <p>
              Practice exercises, explanations, feedback, and grading are generated and evaluated
              by an AI model (Google's Gemini). While the curriculum content is written and
              fact-checked by hand, the adaptive session engine's output is AI-generated and can
              occasionally be wrong — treat it as a helpful study partner, not an infallible
              authority.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Availability</h2>
            <p>
              Capi is provided as-is, without uptime guarantees. As a small project, features may
              change, and the service could be modified, paused, or shut down at any time. We'll
              try to avoid surprises, but we can't promise otherwise.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>No warranty, limited liability</h2>
            <p>
              The service is provided without warranties of any kind, express or implied. To the
              extent permitted by law, we aren't liable for any damages arising from your use of
              the service.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Changes to these terms</h2>
            <p>
              If these terms change, we'll update the date at the top of this page. Continuing to
              use Capi after a change means you accept the updated terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Questions</h2>
            <p>
              The most reliable way to reach us is by{' '}
              <a href="https://github.com/smolhaj/es/issues" target="_blank" rel="noreferrer">
                opening an issue on GitHub
              </a>.
            </p>
          </section>

          <p className={styles.intro}>
            See also our <Link to="/privacy">Privacy Policy</Link>, which covers what data we
            collect and how you can export or delete it.
          </p>

          <Link to={isLoggedIn ? '/profile' : '/'} className={styles.backLink}>
            ← Back to {isLoggedIn ? 'Profile' : 'Home'}
          </Link>
        </div>
      </main>
    </div>
  );
}
