// Web Speech API wrapper — free, browser-native TTS, no external API or
// billing dependency. Falls back to a no-op if the browser doesn't support
// speechSynthesis (older Safari/Firefox, some mobile browsers).
export function speak(text, { lang = 'es-ES', rate = 0.9 } = {}) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return false;
  window.speechSynthesis.cancel(); // avoid overlapping utterances
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = rate;
  window.speechSynthesis.speak(utterance);
  return true;
}

export function isSpeechSupported() {
  return typeof window !== 'undefined' && !!window.speechSynthesis;
}
