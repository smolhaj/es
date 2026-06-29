import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.jsx';
import { api } from '../lib/api.js';
import NavBar from '../components/NavBar.jsx';
import { VOCABULARY, DOMAINS, CEFR_LEVELS } from '../content/vocabulary.js';
import styles from './VocabBrowser.module.css';

const DOMAIN_LABELS = {
  greetings: 'Greetings', numbers: 'Numbers', time: 'Time', colors: 'Colors',
  family: 'Family', food: 'Food', places: 'Places', verbs: 'Verbs',
  adjectives: 'Adjectives', connectors: 'Connectors', adverbs: 'Adverbs',
  nouns: 'Nouns',
};

export default function VocabBrowser() {
  const { token } = useAuth();
  const [search, setSearch] = useState('');
  const [filterCefr, setFilterCefr] = useState('');
  const [filterDomain, setFilterDomain] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [addWord, setAddWord] = useState('');
  const [addTranslation, setAddTranslation] = useState('');
  const [addStatus, setAddStatus] = useState('');
  const [addError, setAddError] = useState('');
  const [adding, setAdding] = useState(false);
  const [wordStatus, setWordStatus] = useState({});

  useEffect(() => {
    api.vocabulary.status(token)
      .then(d => setWordStatus(d.words ?? {}))
      .catch(() => {});
  }, [token]);

  async function handleAddWord(e) {
    e.preventDefault();
    if (!addWord.trim() || !addTranslation.trim()) return;
    setAdding(true);
    setAddStatus('');
    setAddError('');
    try {
      const word = addWord.trim();
      await api.vocabulary.add(token, word, addTranslation.trim());
      setWordStatus(prev => ({
        ...prev,
        [word]: { reviewCount: 0, correctCount: 0, dueAt: new Date().toISOString() }
      }));
      setAddStatus(`"${word}" added to your review queue.`);
      setAddWord('');
      setAddTranslation('');
      setTimeout(() => setAddStatus(''), 3000);
    } catch (err) {
      setAddError(err.message === 'Word already exists' ? 'That word is already in your list.' : err.message);
    } finally {
      setAdding(false);
    }
  }

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return VOCABULARY.filter(v => {
      if (filterCefr && v.cefr !== filterCefr) return false;
      if (filterDomain && v.domain !== filterDomain) return false;
      if (filterStatus === 'seen' && !wordStatus[v.es]) return false;
      if (filterStatus === 'unseen' && wordStatus[v.es]) return false;
      if (q && !v.es.toLowerCase().includes(q) && !v.en.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [search, filterCefr, filterDomain, filterStatus, wordStatus]);

  const seenCount = useMemo(
    () => VOCABULARY.filter(v => wordStatus[v.es]).length,
    [wordStatus]
  );

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.pageHeader}>
            <Link to="/dashboard" className={styles.backLink}>← Dashboard</Link>
            <h1 className={styles.title}>Vocabulary</h1>
            <p className={styles.subtitle}>
              {VOCABULARY.length} words · A1 through C1
              {seenCount > 0 && ` · ${seenCount} in your queue`}
            </p>
          </header>

          {/* Add custom word */}
          <form className={styles.addForm} onSubmit={handleAddWord}>
            <input
              className={styles.addInput}
              placeholder="Spanish word (e.g. madrugada)"
              value={addWord}
              onChange={e => setAddWord(e.target.value)}
            />
            <input
              className={styles.addInput}
              placeholder="English meaning (e.g. early morning)"
              value={addTranslation}
              onChange={e => setAddTranslation(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-secondary"
              disabled={adding || !addWord.trim() || !addTranslation.trim()}
            >
              {adding ? 'Adding…' : 'Add word'}
            </button>
            {addStatus && <span className={styles.addSuccess}>{addStatus}</span>}
            {addError && <span className={styles.addError}>{addError}</span>}
          </form>

          <div className={styles.filters}>
            <input
              type="search"
              className={styles.searchInput}
              placeholder="Search words…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <div className={styles.filterRow}>
              {CEFR_LEVELS.map(l => (
                <button
                  key={l}
                  className={`${styles.filterBtn} ${filterCefr === l ? styles.filterActive : ''}`}
                  onClick={() => setFilterCefr(v => v === l ? '' : l)}
                >
                  {l}
                </button>
              ))}
            </div>
            <div className={styles.filterRow}>
              <button
                className={`${styles.filterBtn} ${styles.filterSmall} ${filterStatus === 'seen' ? styles.filterActive : ''}`}
                onClick={() => setFilterStatus(v => v === 'seen' ? '' : 'seen')}
              >
                In queue
              </button>
              <button
                className={`${styles.filterBtn} ${styles.filterSmall} ${filterStatus === 'unseen' ? styles.filterActive : ''}`}
                onClick={() => setFilterStatus(v => v === 'unseen' ? '' : 'unseen')}
              >
                Not in queue
              </button>
            </div>
            <div className={styles.filterRow}>
              {DOMAINS.map(d => (
                <button
                  key={d}
                  className={`${styles.filterBtn} ${styles.filterSmall} ${filterDomain === d ? styles.filterActive : ''}`}
                  onClick={() => setFilterDomain(v => v === d ? '' : d)}
                >
                  {DOMAIN_LABELS[d] ?? d}
                </button>
              ))}
            </div>
          </div>

          <p className={styles.count}>{filtered.length} word{filtered.length !== 1 ? 's' : ''}</p>

          <div className={styles.grid}>
            {filtered.map((v, i) => (
              <WordCard key={`${v.es}-${i}`} item={v} status={wordStatus[v.es]} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

function WordCard({ item, status }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`${styles.card} ${open ? styles.cardOpen : ''}`}
      onClick={() => setOpen(o => !o)}
      role="button"
      tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && setOpen(o => !o)}
    >
      <div className={styles.cardMain}>
        <span className={styles.es}>{item.es}</span>
        <span className={styles.en}>{item.en}</span>
        <div className={styles.cardRight}>
          {status && (
            <span className={`${styles.seenDot} ${status.reviewCount >= 3 ? styles.seenDotStrong : ''}`}
              title={`${status.reviewCount} review${status.reviewCount !== 1 ? 's' : ''}`}
            />
          )}
          <span className={`${styles.cefr} ${styles['cefr' + item.cefr.replace('.', '')]}`}>
            {item.cefr}
          </span>
        </div>
      </div>
      {open && item.example && (
        <div className={styles.cardDetail} onClick={e => e.stopPropagation()}>
          <p className={styles.exampleES}>{item.example}</p>
          <p className={styles.exampleEN}>{item.exampleEn}</p>
        </div>
      )}
    </div>
  );
}
