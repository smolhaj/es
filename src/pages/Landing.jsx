import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar.jsx';
import styles from './Landing.module.css';

const FEATURES = [
  {
    label: 'Real grammar',
    body: 'Rules explained explicitly, drilled in context, tracked across sessions. Not "just pick it up."'
  },
  {
    label: 'Adapts to you',
    body: 'A built-in professor reads your error history, weak concepts, and personal context before every session. Each exercise is chosen specifically for where you are.'
  },
  {
    label: 'A1 to C1',
    body: 'A full curriculum built to CEFR standards — 57 tracked grammar concepts, 402 vocabulary items, idioms, regional differences, verb conjugation tables.'
  },
  {
    label: 'Spaced repetition',
    body: 'Vocabulary is scheduled with FSRS-4.5, the most accurate open spaced-repetition algorithm. Words appear right when you\'re about to forget them.'
  },
  {
    label: 'It remembers',
    body: 'Every mistake is tracked. Concepts with persistent errors get flagged as fossilised and drilled harder. You can\'t hide from your weak spots.'
  },
  {
    label: 'Built-in references',
    body: 'Grammar rules, verb conjugations, 72 idioms, false friends, pronunciation guide, and regional dialect differences — all searchable, no extra apps needed.'
  }
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
            <Fox />
          </div>
        </section>

        <section className={styles.features}>
          <div className={styles.featuresGrid}>
            {FEATURES.map(f => (
              <div key={f.label} className={styles.featureCard}>
                <h3 className={styles.featureLabel}>{f.label}</h3>
                <p className={styles.featureBody}>{f.body}</p>
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
        <span>Pablo — A Spanish learning tool</span>
      </footer>
    </div>
  );
}

function Fox() {
  return (
    <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.fox}>
      {/* Body */}
      <ellipse cx="80" cy="105" rx="40" ry="35" fill="#c4511a" />
      {/* Head */}
      <ellipse cx="80" cy="72" rx="30" ry="26" fill="#c4511a" />
      {/* Ears */}
      <polygon points="58,52 50,28 70,48" fill="#c4511a" />
      <polygon points="102,52 110,28 90,48" fill="#c4511a" />
      <polygon points="59,50 53,33 68,47" fill="#f8d0b0" />
      <polygon points="101,50 107,33 92,47" fill="#f8d0b0" />
      {/* Face white */}
      <ellipse cx="80" cy="78" rx="18" ry="14" fill="#f8d0b0" />
      {/* Eyes */}
      <circle cx="72" cy="70" r="4" fill="#1c1409" />
      <circle cx="88" cy="70" r="4" fill="#1c1409" />
      <circle cx="73.5" cy="68.5" r="1.5" fill="white" />
      <circle cx="89.5" cy="68.5" r="1.5" fill="white" />
      {/* Nose */}
      <ellipse cx="80" cy="79" rx="3" ry="2" fill="#1c1409" />
      {/* Mouth */}
      <path d="M76 82 Q80 86 84 82" stroke="#1c1409" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Tail */}
      <path d="M118 112 Q148 100 145 130 Q130 145 110 130" fill="#c4511a" />
      <path d="M134 136 Q145 140 145 130" fill="#f8d0b0" />
      {/* Paws */}
      <ellipse cx="62" cy="136" rx="12" ry="7" fill="#c4511a" />
      <ellipse cx="98" cy="136" rx="12" ry="7" fill="#c4511a" />
    </svg>
  );
}
