// Detects Spanish words that are recognizable as English cognates via a
// small set of reliable suffix-transformation patterns (-ción -> -tion,
// -mente -> -ly, etc). Used to badge existing vocabulary/flashcard entries
// — see src/content/cognate-patterns.js for the hand-curated teaching
// content this mirrors.
//
// Deliberately biased toward false negatives over false positives: a
// suffix match alone would also catch plenty of non-cognates that happen
// to share an ending (cosa/thing, mal/badly, gente/people, chica/girl,
// esposa/wife, mariposa/butterfly — none of these look like English). The
// gate below requires the suffix-swapped candidate to actually appear in
// the word's own English gloss, which those all fail (structurally, not
// by exception-listing them) while genuine cognates like nación->nation
// or curioso->curious pass cleanly. This means some real cognates whose
// common gloss uses a non-cognate synonym (ciudad -> "city", not "civity")
// won't get flagged — acceptable; this is a "spot some cognates" badge,
// not an exhaustive linguistic claim.
const COGNATE_PATTERNS = [
  { name: '-ción/-sión → -tion/-sion', re: /(ci[oó]n|si[oó]n)$/i, swap: w => w.replace(/ci[oó]n$/i, 'tion').replace(/si[oó]n$/i, 'sion') },
  { name: '-dad/-tad → -ty', re: /(dad|tad)$/i, swap: w => w.replace(/(dad|tad)$/i, 'ty') },
  { name: '-mente → -ly', re: /mente$/i, swap: w => w.replace(/mente$/i, 'ly') },
  { name: '-oso/-osa → -ous', re: /os[oa]$/i, swap: w => w.replace(/os[oa]$/i, 'ous') },
  { name: '-ista → -ist', re: /ista$/i, swap: w => w.replace(/ista$/i, 'ist') },
  { name: '-ico/-ica → -ic', re: /ic[oa]$/i, swap: w => w.replace(/ic[oa]$/i, 'ic') },
  { name: '-ante/-ente → -ant/-ent', re: /ante$|ente$/i, swap: w => w.replace(/ante$/i, 'ant').replace(/ente$/i, 'ent') },
  { name: '-ivo/-iva → -ive', re: /iv[oa]$/i, swap: w => w.replace(/iv[oa]$/i, 'ive') },
  { name: '-ario/-aria → -ary', re: /ari[oa]$/i, swap: w => w.replace(/ari[oa]$/i, 'ary') },
  { name: '-encia/-ancia → -ence/-ance', re: /encia$|ancia$/i, swap: w => w.replace(/encia$/i, 'ence').replace(/ancia$/i, 'ance') },
  { name: '-ble → -ble', re: /ble$/i, swap: w => w },
  { name: '-al → -al', re: /al$/i, swap: w => w },
  { name: '-logía → -logy', re: /log[ií]a$/i, swap: w => w.replace(/log[ií]a$/i, 'logy') },
  { name: '-fía → -phy', re: /f[ií]a$/i, swap: w => w.replace(/f[ií]a$/i, 'phy') },
];

const MIN_STEM_LENGTH = 3;

// Latin borrowings that started with s+consonant picked up a prothetic
// "e-" in Spanish (estudiante, escuela, especial, estado, estómago) that
// English never had — a real, well-documented pattern distinct from the
// suffix swaps above, and one the suffix-only gate would otherwise miss
// entirely (its -ción-style candidate for "estación" would be "estation",
// not "station").
const ES_PREFIX_PATTERN = { name: 'es- + consonant → s- + consonant', re: /^es([bcdfgjklmnpqrstvwxz])/i, swap: w => w.replace(/^es/i, '') };

function matchesPattern(pattern, word, gloss) {
  if (!pattern.re.test(word)) return false;
  const stem = word.replace(pattern.re, '');
  if (stem.length < MIN_STEM_LENGTH) return false;
  const candidate = pattern.swap(word);
  return gloss.includes(candidate);
}

// Returns the matching pattern's name, or null. `es`/`en` are a
// vocabulary/flashcard entry's raw fields (multi-word phrases and
// alternate-translation lists are handled — only the first word/gloss is
// checked).
export function detectCognate(es, en) {
  if (!es || !en) return null;
  const word = es.toLowerCase().split(/\s/)[0];
  const gloss = en.toLowerCase();
  for (const pattern of COGNATE_PATTERNS) {
    if (matchesPattern(pattern, word, gloss)) return pattern.name;
  }
  if (matchesPattern(ES_PREFIX_PATTERN, word, gloss)) return ES_PREFIX_PATTERN.name;
  return null;
}
