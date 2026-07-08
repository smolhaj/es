// One-time pipeline that adds 11 new tense columns (imperative, imperfect
// subjunctive, futuro de subjuntivo, and the compound/perfect tenses) to
// every verb in src/content/verbs.js, mechanically derived from the tense
// data already present in that file plus well-known Spanish conjugation
// rules. Not part of the app runtime — rerun with:
//   node scripts/extend-verb-tenses.mjs
//
// See ES.md: units 19/22/24/26 teach imperative, imperfect subjunctive, and
// compound tenses, but the verbs.js reference tables stopped at present
// subjunctive. This script closes that gap.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { VERBS, FORM_KEYS } from '../src/content/verbs.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET_FILE = path.join(__dirname, '..', 'src', 'content', 'verbs.js');

const REFLEXIVE_PRONOUN = { yo: 'me', tu: 'te', el: 'se', nosotros: 'nos', vosotros: 'os', ellos: 'se' };

// ---------------------------------------------------------------------------
// Small phonological helpers
// ---------------------------------------------------------------------------

const ACCENT = { a: 'á', e: 'é', i: 'í', o: 'ó', u: 'ú' };
const isVowel = (c) => 'aeiouáéíóúü'.includes(c);
const isStrong = (c) => 'aeoáéó'.includes(c);

// Accent the LAST vowel character of a string. Used for the -ramos/-remos
// forms of the imperfect subjunctive / futuro de subjuntivo, whose stem
// (preterite ellos minus "-ron") always ends in the vowel that needs the
// antepenultimate-stress accent (hablaron -> habla -> habláramos).
function accentLastVowel(word) {
  const chars = word.split('');
  for (let i = chars.length - 1; i >= 0; i--) {
    if (ACCENT[chars[i]]) {
      chars[i] = ACCENT[chars[i]];
      break;
    }
  }
  return chars.join('');
}

// Rough Spanish syllabifier: groups consecutive vowel letters into nuclei,
// splitting hiatus (two strong vowels a/e/o in a row) into separate nuclei
// but keeping diphthongs (strong+weak, weak+strong, weak+weak) as one.
function syllableNuclei(word) {
  const nuclei = [];
  let i = 0;
  while (i < word.length) {
    if (isVowel(word[i])) {
      let j = i;
      while (j + 1 < word.length && isVowel(word[j + 1])) {
        if (isStrong(word[j]) && isStrong(word[j + 1])) break; // hiatus
        j++;
      }
      const idxs = [];
      for (let k = i; k <= j; k++) idxs.push(k);
      nuclei.push(idxs);
      i = j + 1;
    } else {
      i++;
    }
  }
  return nuclei;
}

// Given an unaccented Spanish word (regularly stressed per the default
// rule: penultimate syllable if it ends in a vowel/n/s, otherwise final
// syllable), find the syllable that currently carries the stress and add
// a written accent to it. Used before attaching a monosyllabic reflexive
// enclitic pronoun (te/se/nos), which always pushes that syllable one
// position further from the end and therefore always requires a written
// accent (e.g. levanta -> levánta -> + te -> levántate).
function accentBase(word) {
  const nuclei = syllableNuclei(word);
  const last = word[word.length - 1];
  const endsUnaccentable = isVowel(last) || last === 'n' || last === 's';
  const stressedIdx = endsUnaccentable ? nuclei.length - 2 : nuclei.length - 1;
  const nucleus = nuclei[stressedIdx];
  let targetPos;
  if (nucleus.length === 1) {
    targetPos = nucleus[0];
  } else {
    const [a, b] = nucleus;
    if (isStrong(word[a]) && !isStrong(word[b])) targetPos = a;
    else if (!isStrong(word[a]) && isStrong(word[b])) targetPos = b;
    else targetPos = b; // both weak (i/u) -> accent falls on the second
  }
  const chars = word.split('');
  chars[targetPos] = ACCENT[chars[targetPos]] || chars[targetPos];
  return chars.join('');
}

function attachEncliticTu(bareVerbForm) { return accentBase(bareVerbForm) + 'te'; }
function attachEncliticSe(bareVerbForm) { return accentBase(bareVerbForm) + 'se'; }
function attachEncliticNos(bareVerbForm) {
  // nosotros always ends "-mos"; drop the final "s" before adding "nos".
  const accented = accentBase(bareVerbForm);
  return accented.slice(0, -1) + 'nos';
}

const PRONOUN_PREFIX_RE = /^(me|te|se|nos|os)\s+/;
function stripPronoun(form) { return form.replace(PRONOUN_PREFIX_RE, ''); }

function isReflexive(infinitive) { return infinitive.endsWith('se'); }
function baseInfinitive(infinitive) { return isReflexive(infinitive) ? infinitive.slice(0, -2) : infinitive; }

// ---------------------------------------------------------------------------
// Past participles
// ---------------------------------------------------------------------------

// Verified (WebSearch, RAE/SpanishDict/WordReference) irregular participles
// for every base verb in this 125-verb list whose participle doesn't follow
// the regular -ado/-ido pattern. Compounds are listed individually because
// irregularity is NOT guaranteed to propagate (e.g. bendecir/maldecir would
// be regular if they were in this list) -- each was checked on its own.
const IRREGULAR_PARTICIPLES = {
  decir: 'dicho', predecir: 'predicho', contradecir: 'contradicho',
  hacer: 'hecho', deshacer: 'deshecho', satisfacer: 'satisfecho',
  poner: 'puesto', proponer: 'propuesto', suponer: 'supuesto', componer: 'compuesto',
  ver: 'visto',
  volver: 'vuelto', devolver: 'devuelto', resolver: 'resuelto',
  morir: 'muerto',
  escribir: 'escrito',
  abrir: 'abierto',
};

function computeParticiple(infinitive) {
  const base = baseInfinitive(infinitive);
  if (IRREGULAR_PARTICIPLES[base]) return IRREGULAR_PARTICIPLES[base];
  if (base.endsWith('ar')) return base.slice(0, -2) + 'ado';
  // -er / -ir: regular "-ido", with a written accent on the i (hiatus) when
  // the stem ends in a strong vowel (a/e/o) -- leer->leído, traer->traído,
  // caer->caído, oír->oído, reír->reído -- but not after a weak vowel u,
  // which forms a diphthong instead -- construir->construido.
  const stem = base.slice(0, -2);
  const lastChar = stem[stem.length - 1];
  if ('aeo'.includes(lastChar)) return `${stem}ído`;
  return `${stem}ido`;
}

// ---------------------------------------------------------------------------
// tú imperative irregulars
// ---------------------------------------------------------------------------

// The 8 classic tú-imperative irregulars, plus haber (rarely used but
// verified via SpanishDict: "he"), plus every compound of those 8 that is
// actually present in the 125-verb list -- verified individually rather
// than assumed, since irregularity does not always propagate to compounds
// (predecir/contradecir turned out regular: predice/contradice, matching
// the well-documented bendecir/maldecir pattern).
const TU_IMPERATIVE_IRREGULAR = {
  decir: 'di', hacer: 'haz', ir: 've', poner: 'pon', salir: 'sal',
  ser: 'sé', tener: 'ten', venir: 'ven', haber: 'he',
  // hacer compounds (inherit)
  deshacer: 'deshaz', satisfacer: 'satisfaz',
  // poner compounds (inherit, with the accent required once "pon" gains a
  // second syllable and is no longer word-final-stressed by default)
  proponer: 'propón', suponer: 'supón', componer: 'compón',
  // tener compounds (inherit)
  detener: 'detén', mantener: 'mantén', obtener: 'obtén',
  contener: 'contén', sostener: 'sostén',
  abstenerse: 'abstente', // reflexive; ten + te -> tente -> abstente (no accent needed)
  // venir compounds (inherit)
  prevenir: 'prevén', intervenir: 'intervén',
  // NOTE: predecir and contradecir are deliberately NOT here -- verified
  // via WebSearch that they do NOT inherit decir's "di": their tú
  // imperative is the regular "predice"/"contradice" (== present.el).
};

// ---------------------------------------------------------------------------
// Per-verb tense builders
// ---------------------------------------------------------------------------

function computeImperfectSubjunctiveLike(verb, endings) {
  // endings: { yo, tu, el, nosotrosSuffix, vosotros, ellos } where
  // nosotrosSuffix is appended after accenting the stem's last vowel.
  const stem = verb.preterite.ellos.slice(0, -3); // strip "-ron"
  return {
    yo: stem + endings.yo,
    tu: stem + endings.tu,
    el: stem + endings.el,
    nosotros: accentLastVowel(stem) + endings.nosotrosSuffix,
    vosotros: stem + endings.vosotros,
    ellos: stem + endings.ellos,
  };
}

function computeImperfectSubjunctive(verb) {
  return computeImperfectSubjunctiveLike(verb, {
    yo: 'ra', tu: 'ras', el: 'ra', nosotrosSuffix: 'ramos', vosotros: 'rais', ellos: 'ran',
  });
}

function computeFuturoSubjuntivo(verb) {
  return computeImperfectSubjunctiveLike(verb, {
    yo: 're', tu: 'res', el: 're', nosotrosSuffix: 'remos', vosotros: 'reis', ellos: 'ren',
  });
}

function computeImperativeNegative(verb) {
  // Always "no " + present subjunctive, for every person, no exceptions.
  // Reflexive pronouns are already baked into the stored subjunctive forms
  // (e.g. "te levantes"), so this works uniformly for reflexives too.
  const out = { yo: '—' };
  for (const k of ['tu', 'el', 'nosotros', 'vosotros', 'ellos']) {
    out[k] = `no ${verb.subjunctive[k]}`;
  }
  return out;
}

function computeImperativeAffirmative(verb) {
  const inf = verb.infinitive;
  const reflexive = isReflexive(inf);
  const base = baseInfinitive(inf);
  const out = { yo: '—' };

  // tú
  if (TU_IMPERATIVE_IRREGULAR[inf]) {
    out.tu = TU_IMPERATIVE_IRREGULAR[inf];
  } else if (reflexive) {
    out.tu = attachEncliticTu(stripPronoun(verb.present.el));
  } else {
    out.tu = verb.present.el;
  }

  // usted (el), nosotros, ustedes (ellos)
  if (!reflexive) {
    out.el = verb.subjunctive.el;
    out.nosotros = verb.subjunctive.nosotros;
    out.ellos = verb.subjunctive.ellos;
  } else {
    out.el = attachEncliticSe(stripPronoun(verb.subjunctive.el));
    out.ellos = attachEncliticSe(stripPronoun(verb.subjunctive.ellos));
    out.nosotros = attachEncliticNos(stripPronoun(verb.subjunctive.nosotros));
  }

  // vosotros
  if (!reflexive) {
    out.vosotros = base.replace(/r$/, 'd');
  } else {
    out.vosotros = base.endsWith('ir') ? `${base.slice(0, -2)}íos` : `${base.slice(0, -1)}os`;
  }

  return out;
}

function compoundTense(verb, haberForms, participle) {
  const reflexive = isReflexive(verb.infinitive);
  const out = {};
  for (const k of FORM_KEYS) {
    const pronoun = reflexive ? REFLEXIVE_PRONOUN[k] : null;
    out[k] = pronoun ? `${pronoun} ${haberForms[k]} ${participle}` : `${haberForms[k]} ${participle}`;
  }
  return out;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function extendVerbs(verbs) {
  // Pass 1: tense data that only depends on the verb's own existing forms.
  for (const verb of verbs) {
    verb.participle = computeParticiple(verb.infinitive);
    verb.imperfectSubjunctive = computeImperfectSubjunctive(verb);
    verb.futuroSubjuntivo = computeFuturoSubjuntivo(verb);
    verb.imperativeAffirmative = computeImperativeAffirmative(verb);
    verb.imperativeNegative = computeImperativeNegative(verb);
  }

  // Pass 2: compound tenses, built from haber's own (freshly-extended) forms.
  const haber = verbs.find((v) => v.infinitive === 'haber');
  if (!haber) throw new Error('haber not found in VERBS -- cannot build compound tenses');

  for (const verb of verbs) {
    const participle = verb.participle;
    verb.presentPerfect = compoundTense(verb, haber.present, participle);
    verb.pluperfect = compoundTense(verb, haber.imperfect, participle);
    verb.futurePerfect = compoundTense(verb, haber.future, participle);
    verb.conditionalPerfect = compoundTense(verb, haber.conditional, participle);
    verb.perfectSubjunctive = compoundTense(verb, haber.subjunctive, participle);
    verb.pluperfectSubjunctive = compoundTense(verb, haber.imperfectSubjunctive, participle);
    verb.preteritoAnterior = compoundTense(verb, haber.preterite, participle);
  }

  // `participle` was only an internal helper value, not one of the 11
  // required per-form tense objects -- strip it back out before returning.
  for (const verb of verbs) delete verb.participle;

  return verbs;
}

const NEW_TENSES_IN_ORDER = [
  'imperfectSubjunctive', 'presentPerfect', 'pluperfect', 'futurePerfect',
  'conditionalPerfect', 'perfectSubjunctive', 'pluperfectSubjunctive',
  'preteritoAnterior', 'futuroSubjuntivo', 'imperativeAffirmative', 'imperativeNegative',
];

const NEW_TENSE_LABELS = {
  imperfectSubjunctive: 'Imperfect Subjunctive',
  presentPerfect: 'Present Perfect',
  pluperfect: 'Pluperfect',
  futurePerfect: 'Future Perfect',
  conditionalPerfect: 'Conditional Perfect',
  perfectSubjunctive: 'Present Perfect Subjunctive',
  pluperfectSubjunctive: 'Pluperfect Subjunctive',
  preteritoAnterior: 'Pretérito Anterior',
  futuroSubjuntivo: 'Futuro de Subjuntivo (Literary)',
  imperativeAffirmative: 'Imperative (Affirmative)',
  imperativeNegative: 'Imperative (Negative)',
};

function formatTenseLine(label, forms) {
  const inner = FORM_KEYS.map((k) => `${k}:'${forms[k]}'`).join(', ');
  return `    ${label.padEnd(21)}: { ${inner} },`;
}

function patchFile(rawSource, verbsInOrder) {
  let out = rawSource;

  // 1. TENSES array
  out = out.replace(
    /export const TENSES = \[[^\]]*\];/,
    `export const TENSES = [\n  'present', 'preterite', 'imperfect', 'future', 'conditional', 'subjunctive',\n  ${NEW_TENSES_IN_ORDER.slice(0, 6).map((t) => `'${t}'`).join(', ')},\n  ${NEW_TENSES_IN_ORDER.slice(6).map((t) => `'${t}'`).join(', ')},\n];`,
  );

  // 2. TENSE_LABELS map
  out = out.replace(
    /export const TENSE_LABELS = \{[\s\S]*?\n\};/,
    () => {
      const oldEntries = [
        `present: 'Present', preterite: 'Preterite', imperfect: 'Imperfect',`,
        `future: 'Future', conditional: 'Conditional', subjunctive: 'Subjunctive (pres.)',`,
      ];
      const newEntries = NEW_TENSES_IN_ORDER.map((t) => `  ${t}: '${NEW_TENSE_LABELS[t]}',`);
      return `export const TENSE_LABELS = {\n  ${oldEntries.join('\n  ')}\n${newEntries.join('\n')}\n};`;
    },
  );

  // 3. Insert the 11 new tense lines into every verb block, right after its
  // existing `subjunctive: { ... },` line (which is always immediately
  // followed by the object's closing `  },`).
  let i = 0;
  const subjunctiveLineRe = /(    subjunctive:[^\n]*\n)(  \},\n)/g;
  out = out.replace(subjunctiveLineRe, (match, subjLine, closeLine) => {
    const verb = verbsInOrder[i];
    i++;
    if (!verb) throw new Error('More subjunctive-line matches than verbs -- regex/order mismatch');
    const newLines = NEW_TENSES_IN_ORDER.map((t) => formatTenseLine(t, verb[t])).join('\n');
    return `${subjLine}${newLines}\n${closeLine}`;
  });

  if (i !== verbsInOrder.length) {
    throw new Error(`Matched ${i} verb blocks but expected ${verbsInOrder.length} -- aborting to avoid a corrupt file`);
  }

  return out;
}

function main() {
  // Work on a structuredClone so the original imported VERBS (used only for
  // reading the pre-existing tenses) isn't mutated mid-computation in a way
  // that could affect later verbs (it isn't, but this keeps the pass order
  // explicit and safe).
  const verbs = VERBS.map((v) => ({ ...v }));
  extendVerbs(verbs);

  const raw = fs.readFileSync(TARGET_FILE, 'utf8');
  const patched = patchFile(raw, verbs);
  fs.writeFileSync(TARGET_FILE, patched, 'utf8');

  console.log(`Extended ${verbs.length} verbs with ${NEW_TENSES_IN_ORDER.length} new tenses each.`);
  console.log(`Wrote ${TARGET_FILE}`);
}

main();
