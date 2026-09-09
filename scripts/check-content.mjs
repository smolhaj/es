// Cross-file content consistency checks.
//
// This project's facts live in several files that must agree — a grammar
// concept has to exist in functions/_lib/concepts.js, be listed in the
// Gemini system prompt's whitelist, have a display label, have a grammar
// card at a matching CEFR level, and be taught by exactly one curriculum
// unit. ES.md's git conventions already warn that these drift; up to now
// keeping them honest meant re-deriving a grep pass by hand each time.
//
//   npm run check:content
//
// Exits non-zero on any error. Warnings are printed but don't fail — they
// flag things worth a look that aren't necessarily wrong.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ROOT = new URL('..', import.meta.url);
const read = (rel) => readFileSync(fileURLToPath(new URL(rel, ROOT)), 'utf8');

const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const rank = (level) => CEFR.indexOf(level);

const errors = [];
const warnings = [];
const fail = (check, msg) => errors.push(`${check}: ${msg}`);
const warn = (check, msg) => warnings.push(`${check}: ${msg}`);

const [
  { CONCEPTS },
  { GRAMMAR_CARDS },
  { CONCEPT_LABELS },
  curriculum,
  { VOCABULARY },
  { IDIOMS },
  { FALSE_FRIENDS },
  { VERBS },
] = await Promise.all([
  import(new URL('functions/_lib/concepts.js', ROOT).href),
  import(new URL('src/content/grammar.js', ROOT).href),
  import(new URL('src/content/conceptLabels.js', ROOT).href),
  import(new URL('src/content/curriculum/index.js', ROOT).href),
  import(new URL('src/content/vocabulary.js', ROOT).href),
  import(new URL('src/content/idioms.js', ROOT).href),
  import(new URL('src/content/false-friends.js', ROOT).href),
  import(new URL('src/content/verbs.js', ROOT).href),
]);

const conceptIds = new Set(Object.keys(CONCEPTS));

// ── 1. The Gemini prompt's concept whitelist ──────────────────────────────
// It's a prose block inside the system prompt, so it can't import anything —
// it has to be kept in step by hand, which is exactly why it's checked.
{
  const src = read('functions/api/sessions/_gemini.js');
  const start = src.indexOf('concept_id must be one of:');
  if (start === -1) {
    fail('gemini-whitelist', 'could not find the "concept_id must be one of:" block');
  } else {
    const block = src.slice(start).split('\n\n')[0];
    const listed = new Set(
      block.split('\n').slice(1)
        .join(' ')
        .replace(/^\s*[A-C][12]:/gm, ' ')
        .replace(/\b[A-C][12]:/g, ' ')
        .split(/[,\s]+/)
        .map(t => t.trim())
        .filter(t => /^[a-z][a-z0-9_]*$/.test(t))
    );
    for (const id of conceptIds) {
      if (!listed.has(id)) fail('gemini-whitelist', `concepts.js has "${id}" but the Gemini prompt doesn't list it — the AI can never pick it`);
    }
    for (const id of listed) {
      if (!conceptIds.has(id)) fail('gemini-whitelist', `the Gemini prompt lists "${id}", which isn't in concepts.js — the AI can emit an unknown concept_id`);
    }
  }
}

// ── 2. FALLBACK_EXERCISES concept ids ─────────────────────────────────────
{
  const { FALLBACK_EXERCISES } = await import(new URL('functions/api/sessions/_gemini.js', ROOT).href);
  for (const ex of FALLBACK_EXERCISES) {
    if (ex.concept_id && !conceptIds.has(ex.concept_id)) {
      fail('fallback-exercises', `exercise for "${ex.concept_id}" has no such concept`);
    }
  }
}

// ── 3. Grammar cards ──────────────────────────────────────────────────────
for (const card of GRAMMAR_CARDS) {
  if (!card.concept_id) continue;
  const concept = CONCEPTS[card.concept_id];
  if (!concept) {
    fail('grammar-cards', `card "${card.title}" points at unknown concept "${card.concept_id}"`);
    continue;
  }
  if (card.cefr !== concept.cefr) {
    fail('grammar-cards', `card "${card.title}" is ${card.cefr} but concept "${card.concept_id}" is ${concept.cefr} — the reference page and the tutor would disagree about the level`);
  }
}

// ── 4. Display labels ─────────────────────────────────────────────────────
for (const id of conceptIds) {
  if (!CONCEPT_LABELS[id]) warn('concept-labels', `"${id}" has no label — the dashboard will show the raw id`);
}
for (const id of Object.keys(CONCEPT_LABELS)) {
  if (!conceptIds.has(id)) warn('concept-labels', `label for "${id}", which is no longer a concept`);
}

// ── 5. Prerequisite graph ─────────────────────────────────────────────────
for (const [id, concept] of Object.entries(CONCEPTS)) {
  if (!CEFR.includes(concept.cefr)) {
    fail('concepts', `"${id}" has CEFR "${concept.cefr}", which isn't one of ${CEFR.join('/')}`);
  }
  for (const prereq of concept.prereqs ?? []) {
    if (!conceptIds.has(prereq)) {
      fail('prereqs', `"${id}" requires "${prereq}", which doesn't exist — getReadyConcepts can never unlock it`);
      continue;
    }
    const prereqLevel = CONCEPTS[prereq].cefr;
    if (rank(prereqLevel) > rank(concept.cefr)) {
      fail('prereqs', `"${id}" (${concept.cefr}) requires "${prereq}" (${prereqLevel}) — a learner reaches the concept before its prerequisite`);
    }
  }
}

// ── 6. Curriculum coverage ────────────────────────────────────────────────
{
  const taughtBy = new Map();
  for (const meta of curriculum.UNIT_METADATA) {
    for (const id of meta.concepts ?? []) {
      if (!conceptIds.has(id)) {
        fail('curriculum', `unit "${meta.id}" teaches "${id}", which isn't a concept`);
        continue;
      }
      (taughtBy.get(id) ?? taughtBy.set(id, []).get(id)).push(meta.id);
    }
  }
  for (const id of conceptIds) {
    const units = taughtBy.get(id);
    if (!units) fail('curriculum', `"${id}" is never taught by any unit`);
    else if (units.length > 1) fail('curriculum', `"${id}" is taught by ${units.length} units (${units.join(', ')}) — it should have one home`);
  }
}

// ── 7. CEFR tags across the content files ─────────────────────────────────
const LEVELLED = [
  ['vocabulary.js', VOCABULARY, v => v.es],
  ['idioms.js', IDIOMS, i => i.idiom],
  ['false-friends.js', FALSE_FRIENDS, f => f.spanish],
  ['verbs.js', VERBS, v => v.infinitive],
  ['grammar.js', GRAMMAR_CARDS, c => c.title],
];
for (const [file, rows, name] of LEVELLED) {
  for (const row of rows) {
    if (row.cefr && !CEFR.includes(row.cefr)) {
      fail('cefr-tags', `${file}: "${name(row)}" has CEFR "${row.cefr}"`);
    }
  }
}

// ── 8. Duplicates ─────────────────────────────────────────────────────────
for (const [file, rows, name] of LEVELLED) {
  const seen = new Map();
  for (const row of rows) {
    const key = name(row)?.toLowerCase();
    if (!key) continue;
    if (seen.has(key)) {
      const other = seen.get(key);
      // A word can legitimately appear twice at different levels as a
      // homograph (tío A1 "uncle" vs C2 "guy"); same level and same gloss is
      // a real duplicate.
      const dupGloss = (row.en ?? row.meaning ?? row.actualMeaning) === (other.en ?? other.meaning ?? other.actualMeaning);
      if (row.cefr === other.cefr && dupGloss) fail('duplicates', `${file}: "${name(row)}" appears twice at ${row.cefr} with the same gloss`);
      else warn('duplicates', `${file}: "${name(row)}" appears twice (${other.cefr} / ${row.cefr}) — intentional homograph?`);
    }
    seen.set(key, row);
  }
}

// ── Report ────────────────────────────────────────────────────────────────
for (const w of warnings) console.warn(`  warn  ${w}`);
for (const e of errors) console.error(`  ERROR ${e}`);

const counts = `${Object.keys(CONCEPTS).length} concepts, ${GRAMMAR_CARDS.length} grammar cards, ${curriculum.UNIT_METADATA.length} units, ${VOCABULARY.length} words, ${VERBS.length} verbs, ${IDIOMS.length} idioms, ${FALSE_FRIENDS.length} false friends`;
if (errors.length) {
  console.error(`\n✗ ${errors.length} error(s), ${warnings.length} warning(s) — ${counts}`);
  process.exit(1);
}
console.log(`\n✓ content consistent (${warnings.length} warning(s)) — ${counts}`);
