import { VOCABULARY } from '../content/vocabulary.js';
// Curriculum units' vocab boxes arrive pre-flattened from the build (see
// scripts/vite-plugin-derived-content.js) rather than by importing
// curriculum/index.js — that import pulled all 65 units' lesson prose and
// practice sets into every reference page's bundle for ~880 glosses.
import { UNIT_VOCAB } from 'virtual:unit-vocab';

export function stripAccents(s) {
  return s.normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function normalizeKey(s) {
  return stripAccents(s.toLowerCase().trim());
}

let index = null;
let vocabOnlyIndex = null;

// Builds a phrase-aware dictionary from every Spanish source already in the
// app (vocabulary.js + written curriculum units) so clickable words only
// ever show real, sourced data — never a guess. Longest known phrase wins
// (e.g. "buenos días" over "buenos" + "días" separately).
//
// includeUnitVocab controls whether curriculum units' own vocab boxes are
// merged in. Those boxes intentionally list bare prepositions/pronouns
// (a, de, en, la...) as new grammar-lesson vocabulary for that specific
// unit — right for a lesson paragraph, but it floods a flowing reading
// passage with clicks on function words. Pass false (see
// segmentSpanish's vocabOnly option) to match against vocabulary.js alone.
function buildIndex(includeUnitVocab) {
  const map = new Map();

  function add(es, entry) {
    const key = normalizeKey(es);
    if (!key || map.has(key)) return; // first source wins, no overwrite churn
    map.set(key, { es, wordCount: es.trim().split(/\s+/).length, ...entry });
  }

  for (const v of VOCABULARY) {
    add(v.es, { en: v.en, example: v.example, exampleEn: v.exampleEn, cefr: v.cefr });
  }

  if (includeUnitVocab) {
    for (const v of UNIT_VOCAB) {
      add(v.es, { en: v.en, example: v.example, exampleEn: v.exampleEn, cefr: v.cefr });
    }
  }

  const maxWords = Math.max(1, ...[...map.values()].map(e => e.wordCount));
  return { map, maxWords };
}

function getIndex(includeUnitVocab) {
  if (!includeUnitVocab) {
    if (!vocabOnlyIndex) vocabOnlyIndex = buildIndex(false);
    return vocabOnlyIndex;
  }
  if (!index) index = buildIndex(true);
  return index;
}

// Given a plain-text Spanish string, returns an array of
// { text, match: entry|null } segments — text preserves original spacing/
// punctuation, match is populated only when that segment is a known term.
//
// minWords controls the shortest phrase length eligible to match. Pass 1
// (default) for text that's entirely Spanish (example sentences), where a
// single-word match is unambiguous. Pass 2 for mixed English/Spanish prose
// (lesson paragraphs) — some Spanish words are also valid English words
// (red = "network", pan = "bread"), so single-word matching there would
// misfire inside ordinary English sentences. Multi-word Spanish phrases
// (e.g. "buenos días") essentially never collide with English, so those
// stay safe to match even in prose.
//
// vocabOnly excludes curriculum units' own vocab boxes from the match
// index (see buildIndex's comment) — pass true for extended narrative
// prose (reading passages), where those grammar-lesson-scoped entries
// would otherwise gloss bare prepositions/pronouns throughout the text.
export function segmentSpanish(text, minWords = 1, vocabOnly = false) {
  const { map, maxWords } = getIndex(!vocabOnly);
  // Tokenize keeping whitespace/punctuation as separate segments so we can
  // reassemble the exact original string.
  const tokens = text.match(/[\wÀ-ÿ]+|[^\wÀ-ÿ]+/g) ?? [];
  const wordPositions = tokens
    .map((t, i) => ({ t, i }))
    .filter(({ t }) => /[\wÀ-ÿ]/.test(t));

  const consumed = new Set();
  const segments = [];
  let cursor = 0;

  for (let wi = 0; wi < wordPositions.length; wi++) {
    const { i: tokenIndex } = wordPositions[wi];
    if (consumed.has(tokenIndex)) continue;

    let matched = null;
    let matchedTokenSpan = 1;
    for (let span = Math.min(maxWords, wordPositions.length - wi); span >= minWords; span--) {
      const wordTokenIndexes = wordPositions.slice(wi, wi + span).map(w => w.i);
      const lastTokenIndex = wordTokenIndexes[wordTokenIndexes.length - 1];
      const phrase = tokens.slice(tokenIndex, lastTokenIndex + 1).join('');
      const entry = map.get(normalizeKey(phrase.replace(/[¿?¡!.,;:"']/g, '')));
      if (entry) {
        matched = entry;
        matchedTokenSpan = lastTokenIndex - tokenIndex + 1;
        break;
      }
    }

    // Flush any plain text before this match
    if (tokenIndex > cursor) {
      segments.push({ text: tokens.slice(cursor, tokenIndex).join(''), match: null });
    }

    const spanTokens = tokens.slice(tokenIndex, tokenIndex + matchedTokenSpan);
    segments.push({ text: spanTokens.join(''), match: matched });
    for (let k = tokenIndex; k < tokenIndex + matchedTokenSpan; k++) consumed.add(k);
    cursor = tokenIndex + matchedTokenSpan;
  }

  if (cursor < tokens.length) {
    segments.push({ text: tokens.slice(cursor).join(''), match: null });
  }

  return segments;
}
