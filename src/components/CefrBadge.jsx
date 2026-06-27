import styles from './CefrBadge.module.css';

const LEVEL_COLOR = {
  A1: 'terracotta', A2: 'terracotta',
  B1: 'gold',       B2: 'gold',
  C1: 'green',      C2: 'green'
};

export default function CefrBadge({ level = 'A1', skill }) {
  const color = LEVEL_COLOR[level] ?? 'terracotta';
  return (
    <span className={`${styles.badge} ${styles[color]}`} aria-label={`CEFR level ${level}${skill ? ` — ${skill}` : ''}`}>
      {level}
    </span>
  );
}
