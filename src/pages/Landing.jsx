import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import styles from './Landing.module.css';

const FEATURE_COLUMNS = [
  [
    {
      label: 'Real grammar',
      body: 'Rules explained explicitly, drilled in context, tracked across sessions. Not "just pick it up."'
    },
    {
      label: 'Spaced repetition',
      body: 'Vocabulary is scheduled with FSRS-4.5, the most accurate open spaced-repetition algorithm. Words appear right when you\'re about to forget them.'
    }
  ],
  [
    {
      label: 'Adapts to you',
      body: 'A built-in professor reads your error history, weak concepts, and personal context before every session. Each exercise is chosen specifically for where you are.'
    },
    {
      label: 'It remembers',
      body: 'Every mistake is tracked. Concepts with persistent errors get flagged as fossilised and drilled harder. You can\'t hide from your weak spots.'
    }
  ],
  [
    {
      label: 'A1 to C1',
      body: 'A full curriculum built to CEFR standards — 71 tracked grammar concepts, 1010 vocabulary items across 23 domains, 110 conjugated verbs, idioms, regional differences.'
    },
    {
      label: 'Built-in references',
      body: 'Grammar rules, verb conjugations, 140 idioms, false friends, pronunciation guide, and regional dialect differences — all searchable, no extra apps needed.'
    }
  ]
];

export default function Landing() {
  return (
    <div className={styles.page}>
      <NavBar />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.eyebrow}>Spanish · A1 → C1</div>
            <h1 className={styles.headline}>
              Learn Spanish.<br />The right way.
            </h1>
            <p className={styles.subline}>
              A tutor that teaches real grammar, tracks every mistake, and builds
              fluency that holds up outside an app. No streaks, no points — just Spanish.
            </p>
            <div className={styles.ctas}>
              <Link to="/register" className="btn btn-primary">
                Start for free
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Sign in
              </Link>
            </div>
          </div>

          <div className={styles.mascotWrap} aria-hidden="true">
            <Capybara />
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            {FEATURE_COLUMNS.map((column, i) => (
              <div key={i} className={styles.featureColumn}>
                {column.map(f => (
                  <div key={f.label} className={styles.featureCard}>
                    <h3 className={styles.featureLabel}>{f.label}</h3>
                    <p className={styles.featureBody}>{f.body}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaHeadline}>Ready to start?</h2>
          <p className={styles.ctaBody}>
            No test to pass. No level to select. Just start — the system calibrates to you.
          </p>
          <Link to="/register" className="btn btn-primary">
            Begin your first session
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Capi — A Spanish learning tool</span>
      </footer>
    </div>
  );
}

function Capybara() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.capybara}>
      {/* Body */}
      <ellipse cx="80" cy="114" rx="48" ry="30" fill="#8b5e3c" />
      {/* Head */}
      <ellipse cx="80" cy="70" rx="36" ry="26" fill="#8b5e3c" />
      {/* Ears */}
      <circle cx="50" cy="48" r="8" fill="#8b5e3c" />
      <circle cx="110" cy="48" r="8" fill="#8b5e3c" />
      <circle cx="50" cy="48" r="4" fill="#6b4527" />
      <circle cx="110" cy="48" r="4" fill="#6b4527" />
      {/* Muzzle */}
      <ellipse cx="80" cy="86" rx="23" ry="14" fill="#d9b98a" />
      {/* Eyes */}
      <circle cx="65" cy="62" r="3.5" fill="#2a1c10" />
      <circle cx="95" cy="62" r="3.5" fill="#2a1c10" />
      <circle cx="66.5" cy="60.5" r="1.2" fill="white" />
      <circle cx="96.5" cy="60.5" r="1.2" fill="white" />
      {/* Nostrils */}
      <ellipse cx="71" cy="86" rx="2.2" ry="1.6" fill="#2a1c10" />
      <ellipse cx="89" cy="86" rx="2.2" ry="1.6" fill="#2a1c10" />
      {/* Mouth */}
      <path d="M73 94 Q80 98 87 94" stroke="#2a1c10" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <ellipse cx="46" cy="138" rx="12" ry="8" fill="#8b5e3c" />
      <ellipse cx="114" cy="138" rx="12" ry="8" fill="#8b5e3c" />
    </svg>
  );
}
