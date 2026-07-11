// Reliable Spanish -> English suffix-transformation patterns, for the
// /cognates reference page. Every example word is a real vocabulary.js
// entry (searchable/clickable elsewhere in the app, not invented for this
// page); every watchOut cross-references a real false-friends.js entry —
// the same word is never taught as "always safe" in one place and "a trap"
// in the other. Pattern names mirror src/lib/cognates.js's algorithmic
// matcher (used for the cognate badge on Vocab/Flashcards), though that
// matcher is deliberately more conservative than the curated examples here.

export const COGNATE_PATTERNS = [
  {
    id: 'cion-sion',
    pattern: '-ción / -sión → -tion / -sion',
    reliability: 'high',
    explanation: 'One of the most productive patterns in the language — almost any Spanish noun ending in -ción or -sión has a near-identical English cousin ending in -tion/-sion.',
    examples: [
      { es: 'solución', en: 'solution', cefr: 'B1' },
      { es: 'decisión', en: 'decision', cefr: 'B1' },
      { es: 'conversación', en: 'conversation', cefr: 'A2' },
      { es: 'información', en: 'information', cefr: 'A2' },
      { es: 'situación', en: 'situation', cefr: 'A2' },
      { es: 'nación', en: 'nation', cefr: 'B1' },
    ],
    watchOut: { spanish: 'complexión', looksLike: 'complexion', actualMeaning: 'build / physique / body type (not skin tone)' },
  },
  {
    id: 'dad-tad',
    pattern: '-dad / -tad → -ty',
    reliability: 'high',
    explanation: 'Very reliable for longer, more formal nouns (universidad -> university). A few short, everyday words wore down further over time and don’t follow the mechanical spelling swap (ciudad is "city," not "civity") — the pattern still helps you recognize the word, just not always spell the English one from it.',
    examples: [
      { es: 'universidad', en: 'university', cefr: 'A1' },
      { es: 'libertad', en: 'freedom / liberty', cefr: 'B1' },
      { es: 'posibilidad', en: 'possibility', cefr: 'B1' },
      { es: 'curiosidad', en: 'curiosity', cefr: 'B1' },
      { es: 'sociedad', en: 'society', cefr: 'B1' },
    ],
    watchOut: { spanish: 'ingenuidad', looksLike: 'ingenuity', actualMeaning: 'naivety / gullibility' },
  },
  {
    id: 'mente',
    pattern: '-mente → -ly',
    reliability: 'high',
    explanation: 'Spanish builds adverbs the same way English does — take the adjective, add the ending. Once you know this, you can turn almost any adjective you know into its adverb on the spot.',
    examples: [
      { es: 'rápidamente', en: 'quickly / rapidly', cefr: 'A2' },
      { es: 'realmente', en: 'really / truly / actually', cefr: 'A2' },
      { es: 'generalmente', en: 'generally / usually', cefr: 'A2' },
      { es: 'especialmente', en: 'especially / particularly', cefr: 'A2' },
      { es: 'finalmente', en: 'finally / at last', cefr: 'A2' },
      { es: 'normalmente', en: 'normally / usually', cefr: 'A2' },
    ],
    watchOut: [
      { spanish: 'actualmente', looksLike: 'actually', actualMeaning: 'currently / at present' },
      { spanish: 'eventualmente', looksLike: 'eventually', actualMeaning: 'possibly / if need be / at some point' },
    ],
  },
  {
    id: 'oso-osa',
    pattern: '-oso / -osa → -ous',
    reliability: 'medium',
    explanation: 'A real, historic cognate suffix (both trace back to Latin -osus), but less mechanical than the others — plenty of -oso adjectives just don’t have a common "-ous" translation in everyday English (orgulloso is "proud," not "-ous" anything). Treat a match as a strong hint, not a guarantee.',
    examples: [
      { es: 'nervioso', en: 'nervous / anxious', cefr: 'A1' },
      { es: 'misterioso', en: 'mysterious', cefr: 'B1' },
      { es: 'generoso', en: 'generous', cefr: 'B1' },
      { es: 'delicioso', en: 'delicious', cefr: 'A2' },
    ],
  },
  {
    id: 'ista',
    pattern: '-ista → -ist',
    reliability: 'high',
    explanation: 'Job titles and "-ism" followers both work this way in both languages, and the Spanish form doesn’t even change for gender (el/la turista, el/la artista).',
    examples: [
      { es: 'artista', en: 'artist', cefr: 'A2' },
      { es: 'dentista', en: 'dentist', cefr: 'A2' },
      { es: 'turista', en: 'tourist', cefr: 'A2' },
      { es: 'periodista', en: 'journalist', cefr: 'B1' },
      { es: 'pianista', en: 'pianist', cefr: 'B1' },
    ],
  },
  {
    id: 'ico-ica',
    pattern: '-ico / -ica → -ic / -ical',
    reliability: 'high',
    explanation: 'Covers a huge amount of academic and scientific vocabulary — once you spot -ico, you can usually guess the whole word before you even finish reading it.',
    examples: [
      { es: 'básico', en: 'basic', cefr: 'A2' },
      { es: 'específico', en: 'specific', cefr: 'B1' },
      { es: 'histórico', en: 'historic / historical', cefr: 'B1' },
      { es: 'práctico', en: 'practical', cefr: 'A2' },
      { es: 'científico', en: 'scientist', cefr: 'B1' },
    ],
    watchOut: { spanish: 'simpático', looksLike: 'sympathetic', actualMeaning: 'nice / friendly / likeable' },
  },
  {
    id: 'ante-ente',
    pattern: '-ante / -ente → -ant / -ent',
    reliability: 'high',
    explanation: 'Common for adjectives describing a quality and for "the person/thing that does X" nouns (like English -ant/-ent agent nouns).',
    examples: [
      { es: 'importante', en: 'important', cefr: 'A2' },
      { es: 'diferente', en: 'different', cefr: 'A2' },
      { es: 'restaurante', en: 'restaurant', cefr: 'A1' },
      { es: 'presidente', en: 'president', cefr: 'A2' },
      { es: 'accidente', en: 'accident', cefr: 'B1' },
      { es: 'paciente', en: 'patient (noun/adj)', cefr: 'B1' },
    ],
    watchOut: { spanish: 'dependiente', looksLike: 'dependent', actualMeaning: 'shop assistant / sales clerk' },
  },
  {
    id: 'ivo-iva',
    pattern: '-ivo / -iva → -ive',
    reliability: 'high',
    explanation: 'A short, clean swap — drop the -o/-a, and you usually have the real English word.',
    examples: [
      { es: 'activo', en: 'active', cefr: 'B1' },
      { es: 'positivo', en: 'positive', cefr: 'A2' },
      { es: 'creativo', en: 'creative', cefr: 'B1' },
      { es: 'objetivo', en: 'objective / goal / aim', cefr: 'B1' },
      { es: 'alternativa', en: 'alternative', cefr: 'B2' },
    ],
  },
  {
    id: 'ario-aria',
    pattern: '-ario / -aria → -ary',
    reliability: 'high',
    explanation: 'Shows up constantly in everyday nouns, not just formal vocabulary.',
    examples: [
      { es: 'necesario', en: 'necessary', cefr: 'A2' },
      { es: 'diccionario', en: 'dictionary', cefr: 'A2' },
      { es: 'aniversario', en: 'anniversary', cefr: 'B1' },
      { es: 'voluntario', en: 'volunteer / voluntary', cefr: 'B1' },
      { es: 'contrario', en: 'contrary / opposite', cefr: 'B1' },
    ],
  },
  {
    id: 'encia-ancia',
    pattern: '-encia / -ancia → -ence / -ance',
    reliability: 'high',
    explanation: 'Abstract-noun suffix, very common in the kind of vocabulary you need once you’re expressing opinions and describing situations rather than naming everyday objects.',
    examples: [
      { es: 'experiencia', en: 'experience', cefr: 'A2' },
      { es: 'diferencia', en: 'difference', cefr: 'A2' },
      { es: 'importancia', en: 'importance', cefr: 'B1' },
      { es: 'paciencia', en: 'patience', cefr: 'B1' },
      { es: 'presencia', en: 'presence', cefr: 'B2' },
    ],
  },
  {
    id: 'ble',
    pattern: '-ble → -ble',
    reliability: 'medium',
    explanation: 'Often identical or nearly identical in both languages, but Spanish sometimes doubles a consonant or shifts a vowel at the seam (posible/possible, responsable/responsible) — close enough to recognize, not always close enough to spell blind.',
    examples: [
      { es: 'posible', en: 'possible', cefr: 'A2' },
      { es: 'horrible', en: 'horrible', cefr: 'A2' },
      { es: 'terrible', en: 'terrible', cefr: 'A2' },
      { es: 'flexible', en: 'flexible', cefr: 'B2' },
      { es: 'responsable', en: 'responsible / person in charge', cefr: 'B1' },
    ],
    watchOut: { spanish: 'sensible', looksLike: 'sensible', actualMeaning: 'sensitive' },
  },
  {
    id: 'al',
    pattern: '-al → -al',
    reliability: 'high',
    explanation: 'The simplest pattern here — no spelling change at all most of the time. Watch for two very common exceptions, though.',
    examples: [
      { es: 'normal', en: 'normal', cefr: 'A2' },
      { es: 'natural', en: 'natural', cefr: 'A2' },
      { es: 'social', en: 'social', cefr: 'A2' },
      { es: 'general', en: 'general', cefr: 'A2' },
      { es: 'hospital', en: 'hospital', cefr: 'A1' },
    ],
    watchOut: [
      { spanish: 'actual', looksLike: 'actual', actualMeaning: 'current / present / today' },
      { spanish: 'eventual', looksLike: 'eventual', actualMeaning: 'possible / contingent / temporary (of a job)' },
    ],
  },
  {
    id: 'es-prefix',
    pattern: 'es- + consonant → s- + consonant',
    reliability: 'high',
    explanation: 'Spanish never starts a word with s + another consonant — it adds an "e" in front. English kept the original Latin spelling, so dropping that first "e" mentally often hands you the English word directly.',
    examples: [
      { es: 'estudiante', en: 'student', cefr: 'A1' },
      { es: 'escuela', en: 'school', cefr: 'A1' },
      { es: 'especial', en: 'special', cefr: 'A2' },
      { es: 'estación', en: 'station', cefr: 'A1' },
      { es: 'estómago', en: 'stomach', cefr: 'A2' },
    ],
  },
  {
    id: 'logia-fia',
    pattern: '-logía / -fía → -logy / -phy',
    reliability: 'high',
    explanation: 'A smaller set of words, but they’re everywhere in academic and science vocabulary once you get past the basics.',
    examples: [
      { es: 'biología', en: 'biology', cefr: 'B1' },
      { es: 'tecnología', en: 'technology', cefr: 'A2' },
      { es: 'geografía', en: 'geography', cefr: 'B1' },
      { es: 'fotografía', en: 'photograph / photography', cefr: 'B1' },
      { es: 'filosofía', en: 'philosophy', cefr: 'B2' },
    ],
  },
];

export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
