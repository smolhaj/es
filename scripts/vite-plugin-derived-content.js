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
