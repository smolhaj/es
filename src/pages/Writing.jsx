import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import styles from './Writing.module.css';

export default function Writing() {
  const { token } = useAuth();
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    api.learner.writing(token)
      .then(d => setSamples(d.samples ?? []))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  const totalWords = samples.reduce((s, w) => s + (w.word_count ?? 0), 0);

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.inner}>
          <header>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Writing portfolio</h1>
            <p className={styles.subtitle}>
              {samples.length > 0
                ? `${samples.length} translation${samples.length !== 1 ? 's' : ''} · ${totalWords.toLocaleString()} words written`
                : 'Your Spanish translations are saved here as you practise.'}
            </p>
          </header>

          {loading && <p className={styles.empty}>Loading…</p>}
          {error && <p className={styles.empty} style={{ color: 'var(--incorrect)' }}>{error}</p>}

          {!loading && !error && samples.length === 0 && (
            <p className={styles.empty}>
              No writing samples yet. Translation exercises are automatically saved here when you practise.{' '}
              <Link to="/session">Start a session →</Link>
            </p>
          )}

          {samples.length > 0 && (
            <div className={styles.sampleList}>
              {samples.map(s => <SampleCard key={s.id} sample={s} />)}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function SampleCard({ sample }) {
  const [open, setOpen] = useState(false);
  const date = new Date(sample.created_at).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric'
  });
  const previewPrompt = sample.prompt
    ? sample.prompt.slice(0, 60) + (sample.prompt.length > 60 ? '…' : '')
    : 'Translation exercise';

  return (
    <div className={`${styles.card} ${open ? styles.cardExpanded : ''}`}>
      <div
        className={styles.cardHeader}
        onClick={() => setOpen(o => !o)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
      >
        <span className={styles.prompt}>{previewPrompt}</span>
        <div className={styles.meta}>
          {sample.estimated_cefr && (
            <span className={styles.cefrBadge}>{sample.estimated_cefr}</span>
          )}
          <span className={styles.words}>{sample.word_count}w</span>
          <span className={styles.date}>{date}</span>
        </div>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}>▾</span>
      </div>

      {open && (
        <div className={styles.cardBody} onClick={e => e.stopPropagation()}>
          {sample.prompt && (
            <div>
              <div className={styles.bodyLabel}>Prompt</div>
              <p className={styles.promptFull}>{sample.prompt}</p>
            </div>
          )}

          <div>
            <div className={styles.bodyLabel}>Your answer</div>
            <p className={styles.content}>{sample.content}</p>
          </div>

          {sample.professor_notes && (
            <div className={styles.notes}>
              <span className={styles.notesLabel}>Professor's feedback</span>
              {sample.professor_notes}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
