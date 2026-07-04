// Generates src/content/flashcards/frequency-5000.js from openly-licensed
// source data (see the header of that file for full attribution). Run with:
//   node scripts/build-flashcards.mjs
// Source files are downloaded once into .cache/flashcard-data/ (gitignored)
// and reused on subsequent runs.

import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, '..', '.cache', 'flashcard-data');
const OUT_FILE = path.join(__dirname, '..', 'src', 'content', 'flashcards', 'frequency-5000.js');
const TARGET_COUNT = 5000;

const SOURCES = {
  'frequency.csv': 'https://raw.githubusercontent.com/doozan/spanish_data/master/frequency.csv',
  'es-en.data': 'https://raw.githubusercontent.com/doozan/spanish_data/master/es-en.data',
  'sentences.tsv': 'https://raw.githubusercontent.com/doozan/spanish_data/master/sentences.tsv',
};

async function ensureSourceFiles() {
  fs.mkdirSync(DIR, { recursive: true });
  for (const [name, url] of Object.entries(SOURCES)) {
    const dest = path.join(DIR, name);
    if (fs.existsSync(dest)) continue;
    console.error(`Downloading ${name}...`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
    fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  }
}

const POS_LABEL = {
  n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb', prep: 'preposition',
  pron: 'pronoun', conj: 'conjunction', art: 'article', num: 'numeral',
  determiner: 'determiner', interj: 'interjection', prop: 'proper noun',
  suffix: 'suffix', prefix: 'prefix', phrase: 'phrase', none: '',
};

function parseCsvLine(line) {
  // frequency.csv fields: count,spanish,pos,flags,usage — usage may contain
  // commas inside quoted-free pipe-lists, but the file isn't quoted, so a
  // simple split on the first 4 commas is safe (usage is always last field).
  const parts = line.split(',');
  const count = parts[0];
  const spanish = parts[1];
  const pos = parts[2];
  const flags = parts[3];
  return { count: Number(count), spanish, pos, flags };
}

async function loadFrequency() {
  const rl = readline.createInterface({ input: fs.createReadStream(`${DIR}/frequency.csv`) });
  let first = true;
  const byWord = new Map();
  for await (const line of rl) {
    if (first) { first = false; continue; }
    if (!line.trim()) continue;
    const row = parseCsvLine(line);
    if (!row.spanish || !row.count) continue;
    // Skip pure numbers/punctuation-looking tokens and single-letter noise.
    if (!/^[a-záéíóúüñ]+$/i.test(row.spanish)) continue;
    const existing = byWord.get(row.spanish);
    if (!existing || row.count > existing.count) byWord.set(row.spanish, row);
  }
  return [...byWord.values()].sort((a, b) => b.count - a.count);
}

// --- es-en.data parser ---
// Blocks separated by lines of exactly "_____". Each block: headword line,
// then one or more "pos: X" sections, each followed by indented metadata
// lines and one or more "  gloss: ..." lines (possibly with a nested
// "    q: ..." qualifier on the next line).
function loadDictionary() {
  const raw = fs.readFileSync(`${DIR}/es-en.data`, 'utf8');
  const blocks = raw.split('\n_____\n');
  const dict = new Map(); // word -> [{ pos, gloss }]

  const BAD_GLOSS_PREFIXES = [
    'obsolete form of', 'alternative form of', 'archaic spelling of',
    'misspelling of', 'pronunciation spelling of', 'dated form of',
    'eye dialect spelling of', 'superseded form of', 'nonstandard spelling of',
    'rare form of', 'informal spelling of',
  ];

  for (const block of blocks) {
    const lines = block.split('\n');
    const word = (lines[0] || '').trim();
    if (!word || /^[*\-]/.test(word)) continue;

    let currentPos = null;
    const entries = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const posMatch = line.match(/^pos:\s*(\S+)/);
      if (posMatch) { currentPos = posMatch[1]; continue; }
      const glossMatch = line.match(/^\s{2}gloss:\s*(.+)/);
      if (glossMatch && currentPos) {
        let gloss = glossMatch[1].trim();
        // Drop trailing multi-line continuations (glosses can wrap with \n
        // literal sequences in this dataset) — keep just the first clause.
        gloss = gloss.split('\\n')[0].trim();
        const lower = gloss.toLowerCase();
        if (BAD_GLOSS_PREFIXES.some(p => lower.startsWith(p))) continue;
        entries.push({ pos: currentPos, gloss });
      }
    }
    if (entries.length) {
      if (!dict.has(word)) dict.set(word, entries);
    }
  }
  return dict;
}

function cleanGloss(gloss) {
  // Strip a single leading parenthetical qualifier like "(archaic) foo" only
  // if there's substantial text after it; otherwise keep as-is (parens with
  // genuinely useful sense info, e.g. "to be (in the passive voice sense)",
  // are fine to keep, they read naturally on a flashcard).
  return gloss.replace(/\s*\.$/, '').trim();
}

const USELESS_POS = new Set(['letter', 'suffix', 'prefix']);
// Not anchored to the start: Wiktionary surname/given-name glosses are
// often formatted as "Peña: surname" or "María: given name", not just
// "surname" alone.
const USELESS_GLOSS = /surname|given name|^the letter|initialism of|abbreviation of/i;

// Pick the dictionary entry block matching the frequency list's reported
// part of speech (frequency.csv and es-en.data use the same short pos
// codes since both are generated by the same toolchain/author). Falling
// back to entries[0] blindly picks whichever sense Wiktionary happened to
// list first in the file, which for common function words is very often
// a "letter name" or minor sense, not the actual dominant usage — e.g.
// "de" (overwhelmingly the preposition) has "letter: d" listed first.
function pickEntry(entries, wantedPos) {
  const usable = entries.filter(e => !USELESS_POS.has(e.pos));
  if (!usable.length) return null;
  const exact = usable.find(e => e.pos === wantedPos);
  return exact ?? usable[0];
}

// Combine up to 2 short glosses from the SAME pos block for a fuller sense
// without the flashcard becoming a run-on dictionary entry.
function buildTranslation(entries, pos) {
  const sameBlock = entries.filter(e => e.pos === pos);
  // Individual gloss lines can themselves already be "; "-joined lists of
  // near-synonyms for the same sense (e.g. "que"'s gloss is literally
  // "who; that"), so flatten every gloss line to its comma-parts first and
  // dedupe across lines — otherwise combining 2 gloss *lines* naively can
  // repeat the same sub-sense twice ("who; that; that; whom; which").
  const seen = new Set();
  const parts = [];
  let linesUsed = 0;
  for (const e of sameBlock) {
    const g = cleanGloss(e.gloss);
    if (!g || g.length > 60) continue;
    if (USELESS_GLOSS.test(g)) continue;
    for (const part of g.split(';').map(s => s.trim()).filter(Boolean)) {
      const key = part.toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      parts.push(part);
    }
    linesUsed++;
    if (linesUsed === 2) break;
  }
  if (!parts.length) return null;
  let combined = parts[0];
  for (let i = 1; i < parts.length; i++) {
    const next = combined + ', ' + parts[i];
    if (next.length > 75) break;
    combined = next;
  }
  return combined;
}

// --- sentences.tsv: find a short example sentence for a given lemma ---
function loadSentenceIndex() {
  // Build a lemma -> [{en, es, len}] index, but only keep the sentence with
  // the smallest Spanish-side length per lemma to bias toward simple
  // beginner-friendly examples. Streams the 42MB file line-by-line.
  return new Promise((resolve, reject) => {
    const index = new Map();
    const rl = readline.createInterface({ input: fs.createReadStream(`${DIR}/sentences.tsv`) });
    rl.on('line', (line) => {
      const cols = line.split('\t');
      if (cols.length < 6) return;
      const [en, es, , , , tags] = cols;
      if (!en || !es || !tags) return;
      if (es.length > 90) return; // skip long sentences, keep it simple
      // tags look like ":v,tengas|tener :art,una|uno ..." — space-separated
      // groups, each "surfaceForm|lemma" or just "surfaceForm" when the
      // surface form equals the lemma.
      const groups = tags.split(' ');
      for (const g of groups) {
        const commaIdx = g.indexOf(',');
        if (commaIdx === -1) continue;
        const rest = g.slice(commaIdx + 1);
        for (const form of rest.split(',')) {
          const [surface, lemma] = form.split('|');
          const key = (lemma || surface || '').toLowerCase();
          if (!key) continue;
          const existing = index.get(key);
          if (!existing || es.length < existing.es.length) {
            index.set(key, { en, es });
          }
        }
      }
    });
    rl.on('close', () => resolve(index));
    rl.on('error', reject);
  });
}

async function main() {
  await ensureSourceFiles();

  console.error('Loading frequency list...');
  const freq = await loadFrequency();
  console.error(`  ${freq.length} unique candidate words`);

  console.error('Loading dictionary...');
  const dict = loadDictionary();
  console.error(`  ${dict.size} dictionary headwords`);

  console.error('Loading sentence index (this takes a bit, 42MB file)...');
  const sentIndex = await loadSentenceIndex();
  console.error(`  ${sentIndex.size} lemma->sentence entries`);

  const results = [];
  let sentenceHits = 0;
  for (const row of freq) {
    if (results.length >= TARGET_COUNT) break;
    const entries = dict.get(row.spanish);
    if (!entries || !entries.length) continue;
    const best = pickEntry(entries, row.pos);
    if (!best) continue;
    const translation = buildTranslation(entries, best.pos);
    if (!translation) continue;
    const sent = sentIndex.get(row.spanish);
    if (sent) sentenceHits++;
    results.push({
      id: 'fc' + (results.length + 1),
      es: row.spanish,
      pos: POS_LABEL[best.pos] ?? best.pos ?? '',
      en: translation,
      example: sent ? sent.es : null,
      exampleEn: sent ? sent.en : null,
      rank: results.length + 1,
    });
  }

  console.error(`Built ${results.length} cards, ${sentenceHits} with an example sentence (${Math.round(100 * sentenceHits / results.length)}%)`);

  const header = `// Top 5000 Spanish words by frequency, for the Anki-style Flashcards deck.
// Generated (not hand-authored) from openly-licensed data — see scripts/
// build-flashcards.mjs for the pipeline and ES.md's Flashcards section for
// full attribution. Do not hand-edit; fix the pipeline and regenerate:
//   node scripts/build-flashcards.mjs
//
//  - Word frequency + part-of-speech + lemma grouping: doozan/spanish_data
//    (frequency.csv), built on hermitdave/FrequencyWords' OpenSubtitles-
//    derived counts. CC BY-SA 3.0.
//  - English translations: doozan/spanish_data (es-en.data), derived from
//    Wiktionary. CC BY-SA.
//  - Example sentences: doozan/spanish_data (sentences.tsv), from
//    Tatoeba.org. CC BY 2.0 (France).

export default ${JSON.stringify(results)};
`;
  fs.writeFileSync(OUT_FILE, header);
  console.error(`Wrote ${OUT_FILE}`);
}

main().catch(e => { console.error(e); process.exit(1); });
