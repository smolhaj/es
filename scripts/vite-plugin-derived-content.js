import { fileURLToPath } from 'node:url';
import { readdirSync } from 'node:fs';
import path from 'node:path';

// Build-time-derived slices of src/content, exposed to the app as virtual
// modules. Both exist for the same reason: a page needed a few facts out of a
// very large content file, and importing the file for them dragged the whole
// thing into that page's chunk.
//
//   virtual:content-stats — the landing page's headline numbers (how many
//     grammar concepts / vocabulary items / verbs / idioms ship today).
//     Derived, never hand-typed, so the copy can't go stale (ES.md
//     punch-list item 30) — but the browser doesn't pay 1.2MB for it.
//
//   virtual:unit-vocab — every curriculum unit's vocab-box entries,
//     flattened. The word-popover dictionary (src/lib/dictionary.js) needs
//     these on every reference page, but nothing else about the units;
//     importing curriculum/index.js for them pulled all 56 written units'
//     lesson prose and practice sets (~1.6MB) into every reference page.
//
//   virtual:practice-pool — every unit's practice exercises, keyed by the
//     order the unit sits at. Review checkpoints pool these across every
//     unit up to their own position; nothing else in a unit is involved.
//
//   virtual:search-index — one flat, compact record per searchable thing on
//     the site (words, verbs, grammar rules, idioms, false friends, reading
//     passages, units, pronunciation and regional notes, cognate patterns,
//     free resources). Site search needs a field or two from all eleven
//     content files at once; loading them whole would be ~1.5MB for what
//     compresses to a fraction of that as an index.
//
// Anything added here must stay a pure function of the content files, so a
// content edit is still the only place a fact lives.

const CONTENT = new URL('../src/content/', import.meta.url);
const CURRICULUM_DIR = fileURLToPath(new URL('curriculum/', CONTENT));

const STATS_SOURCES = ['grammar.js', 'vocabulary.js', 'verbs.js', 'idioms.js'];

const MODULES = {
  'virtual:content-stats': {
    sources: () => STATS_SOURCES.map((f) => fileURLToPath(new URL(f, CONTENT))),
    async build(load) {
      const [grammar, vocabulary, verbs, idioms] = await Promise.all(
        STATS_SOURCES.map((f) => load(new URL(f, CONTENT)))
      );
      return {
        grammarConcepts: grammar.GRAMMAR_CARDS.length,
        cefrLevels: grammar.CEFR_LEVELS,
        vocabularyItems: vocabulary.VOCABULARY.length,
        vocabularyDomains: vocabulary.DOMAINS.length,
        verbs: verbs.VERBS.length,
        idioms: idioms.IDIOMS.length
      };
    }
  },
  'virtual:unit-vocab': {
    sources: curriculumFiles,
    async build(load) {
      const entries = [];
      // Unit order is preserved: dictionary.js's index is first-source-wins,
      // so which unit a shared word is glossed from must not change.
      for (const { meta, unit } of await writtenUnits(load)) {
        for (const v of unit.vocab ?? []) {
          entries.push({
            es: v.es,
            en: v.en,
            example: v.example ?? null,
            exampleEn: v.exampleEn ?? null,
            cefr: meta.level
          });
        }
      }
      return { UNIT_VOCAB: entries };
    }
  },
  'virtual:search-index': {
    sources: () => [
      ...SEARCH_SOURCES.map((f) => fileURLToPath(new URL(f, CONTENT))),
      ...curriculumFiles()
    ],
    build: buildSearchIndex
  },
  'virtual:practice-pool': {
    sources: curriculumFiles,
    async build(load) {
      // Just each unit's practice array plus the order it sits at — that's
      // all a review checkpoint draws from. Bundling it separately keeps a
      // checkpoint from having to pull 50 whole unit chunks (lesson prose
      // and all) to assemble 20 questions.
      const units = (await writtenUnits(load)).map(({ meta, unit }) => ({
        order: meta.order,
        practice: (unit.practice ?? []).filter((ex) => ex.concept_id)
      }));
      return { UNIT_PRACTICE: units };
    }
  }
};

// One searchable record. Keys are one letter because there are ~3,000 of
// them and this ships to the browser: t=type, a=primary (usually Spanish),
// b=secondary (usually English), c=supporting detail, l=CEFR level, u=an
// explicit URL. Anything absent is omitted rather than sent as null, and u
// is only carried for the two types whose link needs an id — everywhere
// else Search.jsx derives it from the type plus `a`, which is a real chunk
// of payload across 3,000 rows.
function entry(t, a, b, c, l, u) {
  // Every field is asserted to be a string rather than trusted: these come
  // from eleven independently-shaped content files, and one field that turns
  // out to be an object (cognate patterns' `watchOut` was one) would
  // otherwise sail through the build and break the whole index at runtime,
  // taking search down entirely rather than degrading one row.
  for (const [name, value] of [['a', a], ['b', b], ['c', c], ['l', l], ['u', u]]) {
    if (value != null && typeof value !== 'string') {
      throw new Error(`search index: ${t} field "${name}" is ${typeof value}, expected string (got ${JSON.stringify(value).slice(0, 80)})`);
    }
  }
  if (!a) throw new Error(`search index: ${t} entry has no primary text`);

  const out = { t, a };
  if (b) out.b = b;
  if (c) out.c = c;
  if (l) out.l = l;
  if (u) out.u = u;
  return out;
}

const SEARCH_SOURCES = [
  'grammar.js', 'vocabulary.js', 'verbs.js', 'idioms.js', 'false-friends.js',
  'pronunciation.js', 'regional.js', 'cognate-patterns.js', 'resources.js',
  'readings.js'
];

async function buildSearchIndex(load) {
  const [grammar, vocabulary, verbs, idioms, falseFriends, pronunciation,
         regional, cognates, resources, readings] = await Promise.all(
    SEARCH_SOURCES.map((f) => load(new URL(f, CONTENT)))
  );
  const curriculum = await load(new URL('curriculum/index.js', CONTENT));

  const index = [];

  for (const v of vocabulary.VOCABULARY) {
    index.push(entry('word', v.es, v.en, v.example, v.cefr, null));
  }
  for (const v of verbs.VERBS) {
    index.push(entry('verb', v.infinitive, v.meaning, v.note, v.cefr, null));
  }
  for (const c of grammar.GRAMMAR_CARDS) {
    index.push(entry('grammar', c.title, c.rule, c.examples?.[0]?.es, c.cefr, null));
  }
  for (const i of idioms.IDIOMS) {
    index.push(entry('idiom', i.idiom, i.meaning, i.literal && `literally: ${i.literal}`, i.cefr, null));
  }
  for (const f of falseFriends.FALSE_FRIENDS) {
    index.push(entry('false friend', f.spanish, f.actualMeaning, `looks like "${f.looksLike}"`, f.cefr, null));
  }
  for (const r of readings.PASSAGES) {
    index.push(entry('reading', r.title, r.summary, null, r.level, `/readings/${r.id}`));
  }
  for (const u of curriculum.UNIT_METADATA) {
    index.push(entry('lesson', u.title, u.summary, null, u.level, `/lessons/${u.id}`));
  }
  for (const p of pronunciation.PRONUNCIATION_RULES) {
    index.push(entry('pronunciation', p.title, p.rule, p.sounds?.[0]?.example, null, null));
  }
  for (const r of regional.REGIONAL_SECTIONS) {
    index.push(entry('regional', r.title, r.summary, r.tip, null, null));
  }
  for (const c of cognates.COGNATE_PATTERNS) {
    // `watchOut` is a structured false-friend object here, not prose — the
    // worked examples are what a searcher is actually scanning for.
    const examples = (c.examples ?? []).slice(0, 3).map(e => `${e.es} → ${e.en}`).join(', ');
    index.push(entry('cognate', c.pattern, c.explanation, examples || null, null, null));
  }
  for (const r of resources.RESOURCES) {
    index.push(entry('resource', r.name, r.description, r.why, r.level, null));
  }

  return { SEARCH_INDEX: index };
}

function curriculumFiles() {
  return readdirSync(CURRICULUM_DIR)
    .filter((f) => f.endsWith('.js'))
    .map((f) => path.join(CURRICULUM_DIR, f));
}

// Every non-checkpoint unit that actually has a content file, in curriculum
// order, resolved through the same loadUnit() the app uses.
async function writtenUnits(load) {
  const curriculum = await load(new URL('curriculum/index.js', CONTENT));
  const out = [];
  for (const meta of curriculum.UNIT_METADATA) {
    if (meta.isCheckpoint) continue;
    const unit = await curriculum.loadUnit(meta.id);
    if (!unit || unit.comingSoon) continue;
    out.push({ meta, unit });
  }
  return out;
}

export default function derivedContent() {
  // Cache-busted per build so `vite dev` recomputes after a content edit
  // instead of handing back Node's cached copy from the first load.
  const load = (url) => import(`${url.href}?t=${Date.now()}`);

  return {
    name: 'capi-derived-content',
    resolveId(id) {
      if (MODULES[id]) return '\0' + id;
    },
    async load(id) {
      if (!id.startsWith('\0')) return;
      const mod = MODULES[id.slice(1)];
      if (!mod) return;

      for (const file of mod.sources()) this.addWatchFile(file);

      const values = await mod.build(load);
      return Object.entries(values)
        .map(([key, value]) => `export const ${key} = ${JSON.stringify(value)};`)
        .join('\n');
    },
    handleHotUpdate({ file, server }) {
      for (const [id, mod] of Object.entries(MODULES)) {
        if (!mod.sources().includes(file)) continue;
        const graphMod = server.moduleGraph.getModuleById('\0' + id);
        if (graphMod) server.moduleGraph.invalidateModule(graphMod);
      }
    }
  };
}
