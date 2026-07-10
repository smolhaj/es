// Shared free-text answer grading — used by curriculum practice (Lesson.jsx)
// and reading comprehension (ReadingPassage.jsx) so both accept the same
// reasonable variants of a correct answer instead of requiring an exact
// string match.
import { stripAccents } from './dictionary.js';

// English contractions and their expansions — a learner shouldn't be marked
// wrong for writing "I'm" when the stored answer spells out "I am" or vice
// versa, so both sides are canonicalized to the expanded form before matching.
const CONTRACTIONS = {
  "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are',
  "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not',
  "don't": 'do not', "doesn't": 'does not', "didn't": 'did not',
  "can't": 'cannot', "won't": 'will not', "wouldn't": 'would not',
  "shouldn't": 'should not', "couldn't": 'could not', "mustn't": 'must not',
  "hasn't": 'has not', "haven't": 'have not', "hadn't": 'had not',
  "it's": 'it is', "that's": 'that is', "there's": 'there is',
  "what's": 'what is', "who's": 'who is', "let's": 'let us',
  "i'd": 'i would', "you'd": 'you would', "he'd": 'he would', "she'd": 'she would',
  "we'd": 'we would', "they'd": 'they would',
  "i'll": 'i will', "you'll": 'you will', "he'll": 'he will', "she'll": 'she will',
  "we'll": 'we will', "they'll": 'they will',
  "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have',
};

function expandContractions(s) {
  let out = String(s).replace(/[’‘`´]/g, "'");
  for (const [contraction, expanded] of Object.entries(CONTRACTIONS)) {
    out = out.replace(new RegExp(`\\b${contraction}\\b`, 'gi'), expanded);
  }
  return out;
}

// Accents are stripped so a beginner typing "Por que" for "¿Por qué...?" (or
// "esta" for "está") is marked correct — this only ever loosens acceptance,
// never tightens it, since the stored answer variants go through the same
// normalization.
export function normalizeAnswer(s) {
  return stripAccents(expandContractions(s).trim().toLowerCase())
    .replace(/\s+/g, ' ')
    .replace(/[.!?¡¿]+$/g, '')
    .replace(/^[¡¿]+/, '');
}

// Some answers carry a parenthetical aside or an em-dash clarification
// ("one hundred (100)", "you all — used only in Spain") that a learner
// isn't expected to reproduce verbatim; strip it to get the core phrase.
function coreAnswer(s) {
  return String(s).replace(/\s*\([^)]*\)/g, '').replace(/\s+—.*$/, '').trim();
}

// Spanish is pro-drop: a subject pronoun spelled out in the stored answer
// ("Ellas son de Bolivia.") can always be omitted ("Son de Bolivia.") without
// changing correctness, so accept that variant too.
const SPANISH_SUBJECT_PRONOUNS = ['yo', 'tú', 'tu', 'él', 'el', 'ella', 'usted', 'nosotros', 'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'ustedes'];

function proDropVariant(text) {
  const words = String(text).trim().split(/\s+/);
  if (words.length < 2) return null;
  const first = words[0].toLowerCase().replace(/^[¡¿]+/, '');
  if (!SPANISH_SUBJECT_PRONOUNS.includes(first)) return null;
  const rest = words.slice(1);
  rest[0] = rest[0].charAt(0).toUpperCase() + rest[0].slice(1);
  return rest.join(' ');
}

// Build the set of strings that should count as correct for an exercise:
// the canonical answer, its "core" (parenthetical/aside stripped) form, its
// pro-drop form, the short `english` gloss some exercises carry, any
// explicit `altAnswers`, and "/"-separated alternative phrasings within any
// of those.
function acceptableAnswers(exercise) {
  const sources = [exercise.answer, exercise.english, ...(exercise.altAnswers || [])].filter(Boolean);
  const variants = new Set();
  sources.forEach(text => {
    text.split('/').forEach(part => {
      part = part.trim();
      variants.add(normalizeAnswer(part));
      variants.add(normalizeAnswer(coreAnswer(part)));
      const dropped = proDropVariant(part);
      if (dropped) variants.add(normalizeAnswer(dropped));
    });
  });
  return variants;
}

export function isAnswerCorrect(exercise, learnerAnswer) {
  return acceptableAnswers(exercise).has(normalizeAnswer(learnerAnswer));
}
