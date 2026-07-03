import { speak, isSpeechSupported } from '../hooks/useSpeech.jsx';
import styles from './SpeakButton.module.css';

export default function SpeakButton({ text, lang = 'es-ES', label }) {
  if (!isSpeechSupported()) return null;
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => speak(text, { lang })}
      aria-label={label ?? `Play pronunciation: ${text}`}
      title="Play pronunciation"
    >
      🔊
    </button>
  );
}
