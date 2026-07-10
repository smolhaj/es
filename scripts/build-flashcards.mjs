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
// Some headwords group several senses under a label line with the real
// definitions nested one level deeper, e.g. (from "venir"):
//   gloss: Senses relating to figurative movement
//       _gloss: to come from, originate
//       _gloss: to come (happen)
// The label itself ("Senses relating to figurative movement") isn't a
// translation of anything — it's Wiktionary's own category description for
// the group — but the old parser only matched 2-space-indented "gloss:"
// lines, so it read the label as if it *were* the definition and never saw
// the real "_gloss:" children at all. Matches "Senses/Uses/Meanings
// relating/related/pertaining to X".
const CATEGORY_HEADER_RE = /^(senses?|uses?|meanings?)\s+(relating|related|pertaining)\s+to\b/i;

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
    let currentGender = null;
    const entries = [];
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i];
      const posMatch = line.match(/^pos:\s*(\S+)/);
      if (posMatch) { currentPos = posMatch[1]; currentGender = null; continue; }
      // "  g: m"/"  g: f" declares this pos-block's grammatical gender —
      // two blocks can share the same `pos:` code (both "n") while being
      // entirely distinct homograph senses distinguished only by gender,
      // e.g. "corte" (el corte, "cut" — g: m) vs "corte" (la corte,
      // "court" — g: f). Tracked so buildTranslation() and the example-
      // sentence picker below can tell these senses apart instead of
      // treating a same-pos different-gender block as more of the same
      // word sense.
      const genderMatch = line.match(/^\s{2}g:\s*(\S+)/);
      if (genderMatch) { currentGender = genderMatch[1]; continue; }
      // "  gloss: ..." (2-space indent) is a normal top-level sense; a
      // nested "    _gloss: ..." (4-space indent, underscore-prefixed) is
      // a specific definition living under a parent gloss/category line —
      // both get pushed as ordinary candidate entries so buildTranslation()
      // has the real definitions available, not just their group label.
      const glossMatch = line.match(/^\s{2}gloss:\s*(.+)/);
      const subGlossMatch = !glossMatch && line.match(/^\s{4}_gloss:\s*(.+)/);
      const match = glossMatch || subGlossMatch;
      if (match && currentPos) {
        let gloss = match[1].trim();
        // Drop trailing multi-line continuations (glosses can wrap with \n
        // literal sequences in this dataset) — keep just the first clause.
        gloss = gloss.split('\\n')[0].trim();
        const lower = gloss.toLowerCase();
        if (BAD_GLOSS_PREFIXES.some(p => lower.startsWith(p))) continue;
        // A pure category label has no standalone meaning — skip it so it
        // can never win a slot in buildTranslation() ahead of the real
        // "_gloss:" definitions nested underneath it (parsed above, and
        // already queued right after this line in `entries`).
        if (glossMatch && CATEGORY_HEADER_RE.test(gloss)) continue;
        entries.push({ pos: currentPos, gloss, gender: currentGender });
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

const GLOSS_MAX = 60;

// A gloss over GLOSS_MAX gets dropped outright by buildTranslation() below,
// which used to mean a correct-but-verbose primary sense (e.g. "telephone
// (a telecommunication device used for two-way talking with another
// person)") lost silently to whatever short gloss happened to come next in
// the file — for "teléfono" that was "pothos (Epipremnum aureum)", a
// regional plant nickname. Most of these follow the same "term (long
// explanatory clause)" shape, where the clause is pure explanation, not a
// short useful qualifier (contrast "to be (in the passive voice sense)",
// which already fits under GLOSS_MAX and is never touched by this). Try
// trimming to just the head term before giving up on the gloss entirely.
function shortenGloss(gloss) {
  const m = gloss.match(/^([^(]{2,40}?)\s*\(.+\)$/);
  return m ? m[1].trim() : gloss;
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
// without the flashcard becoming a run-on dictionary entry. When two
// distinct pos-blocks share the same pos code but declare different
// genders (the "corte"/g:m "cut" vs "corte"/g:f "court" case), only combine
// glosses from the SAME gender-block — otherwise an unrelated homograph
// sense can bleed into the same translation string.
function buildTranslation(entries, pos, gender) {
  const sameBlock = entries.filter(e => e.pos === pos && e.gender === gender);
  // Individual gloss lines can themselves already be "; "-joined lists of
  // near-synonyms for the same sense (e.g. "que"'s gloss is literally
  // "who; that"), so flatten every gloss line to its comma-parts first and
  // dedupe across lines — otherwise combining 2 gloss *lines* naively can
  // repeat the same sub-sense twice ("who; that; that; whom; which").
  const seen = new Set();
  const parts = [];
  let linesUsed = 0;
  for (const e of sameBlock) {
    let g = cleanGloss(e.gloss);
    if (!g) continue;
    if (g.length > GLOSS_MAX) {
      const shortened = shortenGloss(g);
      if (shortened.length > GLOSS_MAX) continue;
      g = shortened;
    }
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

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// True if `word` literally appears in `sentence` (any case), as a whole
// token. Spanish grammatical paradigms mean the *absence* of a headword's
// exact spelling is often fine on its own — verbs are shown conjugated
// (tener -> "tengo"), and articles/determiners/pronouns/quantifiers have
// legitimate gender/number/apocope variants (uno -> "un", nosotros ->
// "nosotras", alguno -> "algún"). But this corpus's tagger also lemma-
// groups genuinely distinct closed-class words together (e.g. the neuter
// pronoun "lo" and the direct-object pronoun "lo" both lemmatize to the
// masculine article "el", even though neither spells "el"), and separately
// a homograph can collide across parts of speech (bajo the preposition
// "under" vs. baja the adjective "short" both surface-lemmatize to "bajo").
// For the small set of POS categories below, Spanish has no legitimate
// inflection at all, so requiring the literal word's presence is safe and
// catches exactly these lemma-grouping/homograph mistakes without
// false-flagging normal conjugation or gender/number agreement elsewhere.
function containsLiteralWord(sentence, word) {
  const re = new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegExp(word)}(?![\\p{L}\\p{N}])`, 'iu');
  return re.test(sentence);
}

const STRICT_LITERAL_POS = new Set(['article', 'preposition', 'adverb', 'conjunction', 'interjection']);

const MASCULINE_ARTICLES = new Set(['el', 'un', 'los', 'unos', 'al', 'del']);
const FEMININE_ARTICLES = new Set(['la', 'una', 'las', 'unas']);

// Feminine nouns that begin with a stressed /a/ sound take el/un instead of
// la/una in the singular for euphony (el agua, un arma, el alma, el área,
// un ave, el águila, el/al alba, un hacha, el hambre...) while remaining
// grammatically feminine — proven by plural ("las armas") and adjective
// agreement ("un ave nocturna", feminine "-a" ending) elsewhere in the same
// sentence. Without this exception, every one of these ordinary, correct
// sentences looks identical to a genuine gender mismatch to a naive
// article-adjacency check. Approximated as "starts with a/á/ha/há" — not a
// full phonetic stress analyzer, but conservative in the safe direction:
// it only suppresses a flag (never invents one), so at worst it misses a
// genuine mismatch on some other a-initial feminine word, never nulls out
// a correct example.
const STRESSED_A_RE = /^(a|á|ha|há)/i;

// True if `sentence` has `word` immediately preceded by an article whose
// gender contradicts `expectedGender` ('m'/'f', from the dictionary's own
// "g:" tag — see loadDictionary). Only fires for the two unambiguous
// single-gender cases; common-gender nouns (g: mf or similar) and words
// with no gender info at all are left alone. This is the check that
// catches the "corte" bug: the gloss picked is the g:m "cut" sense, but
// the only cached example sentence for the bare lemma "corte" happens to
// be from the entirely separate g:f "court" sense ("la corte") — same
// spelling, different word. A plural example ("los cortes") won't match
// this regex at all, which is a conservative miss, not a false positive.
function sentenceGenderConflict(sentence, word, expectedGender) {
  if (expectedGender !== 'm' && expectedGender !== 'f') return false;
  if (expectedGender === 'f' && STRESSED_A_RE.test(word)) return false;
  const re = new RegExp(`(\\p{L}+)\\s+${escapeRegExp(word)}(?![\\p{L}\\p{N}])`, 'giu');
  let m;
  while ((m = re.exec(sentence))) {
    const prev = m[1].toLowerCase();
    if (expectedGender === 'f' && MASCULINE_ARTICLES.has(prev)) return true;
    if (expectedGender === 'm' && FEMININE_ARTICLES.has(prev)) return true;
  }
  return false;
}

// True if every verbatim occurrence of `word` in `sentence` is capitalized
// AND not at the start of the sentence — the signature of a mistagged
// proper noun riding along on a common word's spelling (e.g. the corpus's
// own tagger mislabels "Cesar" in "O el Cesar o nada" — a set phrase about
// Julius Caesar — as the verb lemma "cesar", with no :prop marker at all,
// so the :prop/:split filtering above can't catch it). A lowercase match
// anywhere, or a capitalized match only because it opens the sentence, is
// treated as safe ordinary usage. \p{L} (Unicode letter) is used instead of
// \w/\b so accented characters (á, é, í, ó, ú, ñ, ü) count as word
// characters at the match boundaries.
function isRiskyMatch(sentence, word) {
  const re = new RegExp(`(?<![\\p{L}\\p{N}])(${escapeRegExp(word)})(?![\\p{L}\\p{N}])`, 'giu');
  let m;
  let sawAny = false;
  while ((m = re.exec(sentence))) {
    sawAny = true;
    const matched = m[1];
    const isCapitalized = /^[A-ZÁÉÍÓÚÑÜ]/.test(matched);
    // "Sentence start" means only opening punctuation/quotes/whitespace
    // precede the match — not strict index 0 — since Spanish routinely
    // opens with ¡/¿, and a multi-sentence example ("Sí. No. Quizá.") can
    // have the target word start a later clause after ". "/"! "/"? ".
    const before = sentence.slice(0, m.index);
    const isSentenceStart = /(^|[.!?]\s*)[¡¿"'“”«»\s]*$/.test(before);
    if (!isCapitalized || isSentenceStart) return false;
  }
  return sawAny;
}

// --- sentences.tsv: find a short example sentence for a given lemma ---
function loadSentenceIndex() {
  // Build a lemma -> [{en, es, len}] index. Sentences where the lemma's own
  // spelling only ever shows up as a likely-mistagged proper noun (see
  // isRiskyMatch above) are ranked below every "safe" sentence, regardless
  // of length; within the same safety tier, the shortest Spanish-side
  // sentence wins, to bias toward simple beginner-friendly examples.
  // Streams the 42MB file line-by-line.
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
      //
      // Two tag kinds must be skipped entirely, or proper nouns leak into
      // common-word example sentences (e.g. "ella" the pronoun picking a
      // sentence about the singer Ella Fitzgerald):
      //   :prop  — the token IS a proper noun in this sentence (a name like
      //            "Rosa" or "Cruz" that happens to share spelling with a
      //            common word doesn't demonstrate that word's usage).
      //   :split — multi-word proper nouns are additionally broken into
      //            parts for search indexing, e.g. "Ella Fitzgerald" also
      //            emits ":split,Ella,Fitzgerald" — these parts have no
      //            lemma of their own and must not be indexed as if they
      //            were ordinary word occurrences.
      const groups = tags.split(' ');
      for (const g of groups) {
        if (g.startsWith(':prop,') || g.startsWith(':split,')) continue;
        const commaIdx = g.indexOf(',');
        if (commaIdx === -1) continue;
        const rest = g.slice(commaIdx + 1);
        for (const form of rest.split(',')) {
          const [surface, lemma] = form.split('|');
          const key = (lemma || surface || '').toLowerCase();
          if (!key) continue;
          const risky = isRiskyMatch(es, key);
          const existing = index.get(key);
          if (!existing) {
            index.set(key, { en, es, risky });
            continue;
          }
          if (existing.risky && !risky) {
            index.set(key, { en, es, risky });
          } else if (existing.risky === risky && es.length < existing.es.length) {
            index.set(key, { en, es, risky });
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
    const translation = buildTranslation(entries, best.pos, best.gender);
    if (!translation) continue;
    const posLabel = POS_LABEL[best.pos] ?? best.pos ?? '';
    // If every candidate sentence for this word is "risky" (its spelling
    // only ever shows up capitalized as a likely proper noun — see
    // isRiskyMatch), showing no example beats showing a misleading one.
    // For non-inflecting POS categories, also require the word's exact
    // spelling to literally appear — see containsLiteralWord's comment for
    // why (lemma-grouping and homograph mistakes in the source corpus).
    const rawSent = sentIndex.get(row.spanish);
    let sent = rawSent && !rawSent.risky ? rawSent : null;
    if (sent && STRICT_LITERAL_POS.has(posLabel) && !containsLiteralWord(sent.es, row.spanish)) {
      sent = null;
    }
    // Homograph guard: the sentence index is keyed purely by lemma spelling
    // with no gender awareness, so a single-gender noun like "corte" (g:m,
    // "cut") can get handed the one cached example for the entirely
    // different g:f "court" sense. Discard rather than show a misleading
    // pairing — see sentenceGenderConflict's comment.
    if (sent && posLabel === 'noun' && sentenceGenderConflict(sent.es, row.spanish, best.gender)) {
      sent = null;
    }
    if (sent) sentenceHits++;
    results.push({
      id: 'fc' + (results.length + 1),
      es: row.spanish,
      pos: posLabel,
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
