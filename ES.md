# ES.md — Project Directives & Build Guide

This file is the lean, current-state reference for this project: the spec,
standing principles, current architecture, standing conventions, and the
active punch list. Read it before making non-trivial changes — it's the
context a fresh session won't have otherwise.

**For narrative detail** — session-by-session build notes, bug postmortems,
audit findings, the story behind a decision — see
[`ES-HISTORY.md`](./ES-HISTORY.md). This file links to it with a one-line
pointer + date wherever a section was moved there. `ES.md` describes what's
true *now*; `ES-HISTORY.md` describes how it got that way. If the two ever
seem to disagree, trust `ES.md` and the actual code.

## What this project is

A Spanish learning site — branded **"Capi"** (capybara mascot) — going from
complete beginner to full fluency (long-term goal: **C2 mastery**). It's a
parallel project to a sibling Japanese-learning site; this one was scoped
independently via a 25-question interview with the user, then written up as a
full spec before any code existed. That original spec (reproduced below)
is the source of truth for intent — the codebase should be judged against it.

---

## Original learner-facing spec

### Learner Profile
- Starting level: complete beginner
- Goal: full fluency — deep, lasting mastery, not exam-passing
- Timeline: none; depth over speed
- Dialect: universally understood Spanish; avoid region-specific slang unless asked
- Priority vocabulary domains: daily life & social, travel & navigation

### Teaching Approach
- **Language use**: conduct sessions in Spanish as much as possible. Minimize
  English — only use it when a grammar rule genuinely requires it or when
  confusion risks blocking progress.
- **Grammar**: explicit rules taught up front, before examples. Name the rule,
  then demonstrate it.
- **Verb conjugation**: both approaches — embed verbs naturally in context,
  *and* run short dedicated conjugation drills periodically.
- **Vocabulary**: spaced repetition. Track what's been seen, how recently, how
  successfully, and resurface accordingly.
- **Pronunciation**: audio playback for new words/sentences. No written
  phonetics unless asked.

### Session Structure
- **Format**: freeform — vary order/mix each session, avoid predictability.
- **Skill coverage**: all four skills equally (speaking, listening, reading,
  writing). Exercise types: multiple choice, fill in the blank, translation
  drills (both directions), open-ended writing prompts, occasional
  conversation role-play.
- **Progression**: adaptive, continuously calibrated to real-time performance.
  Comfortable = too easy; aim for slight challenge always.
- **Guided vs. free**: guided/structured for grammar, free exploration for
  content topics.

### Feedback & Error Handling
- **On mistakes**: immediate correction with explanation — what rule was
  violated, the correct form, why.
- **Weak spot tracking**: aggressive. Resurface missed items until consistent
  mastery is shown. Never let a repeated mistake go unaddressed.
- **Error philosophy**: mistakes are data, not something to prevent. Don't
  over-scaffold — allow failure, analyze it, learn from it.

### Content & Culture
- Cultural context woven in throughout, especially where it affects meaning
  or register.
- Real media (news, song lyrics, TV clips) introduced once the learner has a
  functional foundation — not from day one.
- Content rotates across: everyday conversations, short stories with
  recurring characters, real-world practical tasks (directions, forms, phone
  calls), media-based exercises.

### Motivation & Tone
- Tone varies by context: warm/encouraging some sessions, efficient/focused
  others, academic for grammar, conversational for dialogue practice. Read
  the session's energy and adapt.
- Motivational frame: anchor in real-world applicability ("you'll need this
  when...") over abstract drilling.
- Gamification: light only — mild progress indicators, streaks, milestone
  acknowledgment. Never let it dominate.

### Standing directives (apply everywhere, not just at launch)
- **Cross-reference multiple sources for accuracy** — never rely on one
  single source of truth for grammar/vocab/cultural claims.
- **Build for long-term scalability and iteration** — this is meant to keep
  growing, not ship-and-freeze.
- **Incorporate multiple pedagogical strategies** — classic explicit
  instruction *and* comprehensible-input/immersion techniques, not just one
  school of thought.
- Spanish is one of the best-resourced languages in the world — use that;
  don't reinvent content that authoritative sources already have right.
- **Original prose (story chapters, reading passages, dialogue, any
  extended narrative content) must read as natively-written Spanish, never
  as AI-generated or translated-from-English** — see "Writing
  natural, human-sounding Spanish prose" below for the concrete checklist.
  User directive (07-09-2026): "no ai slop or phrasing."
- **Every CEFR level tag in this codebase (`concepts.js`, `vocabulary.js`,
  curriculum units, idioms/false-friends, verbs, everything) must mirror
  real-world CEFR requirements/expectations, at every level A1 through
  C2 — the site's internal leveling must never drift from or invent its
  own standard.** User directive (07-09-2026): "per ES.md A1 site should
  mirror real world CEFR A1 expectations and requirements. they should
  not differ" — then confirmed explicitly, "same goes for all cefr
  levels." Triggered by finding `concepts.js` gates `tener`/`ir` behind
  an A2-only `irregular_present` concept even though Unit 7 (A1) already
  has a practice exercise using "¿Cuántos años tienes?" — real CEFR A1
  (Instituto Cervantes' *Plan Curricular*) teaches tener/ir/hay/age/basic
  wants at A1, not A2. When this site's tagging and the real standard
  disagree, **the real standard wins and the site gets corrected — not
  the other way around.** A full audit against the PCIC (and
  cross-referenced against major ELE textbook sequencing) is planned; see
  punch list.

---

## Writing natural, human-sounding Spanish prose

Applies to any extended original prose — the reading-passages story/
standalone passages first, but the same discipline applies to lesson
prose and any future narrative content. Short single-sentence content
(vocab examples, exercise prompts) is lower-risk; full paragraphs are
where AI-sounding writing actually shows.

**Why this needs an explicit checklist**: AI-generated text (in any
language, confirmed by research into LLM writing patterns) leans on
predictable structural tics — uniform sentence/paragraph length, formulaic
transitions, over-hedged or over-balanced phrasing, "telling" emotional
states outright instead of showing them — and default to neutral/formal
register even in casual contexts. In Spanish specifically, this compounds
with a second failure mode: translated-from-English phrasing (translating
English idiom/word-order directly instead of asking "how would a native
speaker actually say this") and avoiding the natural oral-register
connectors, contractions, and elisions real dialogue uses because
"textbook-correct" Spanish feels safer to generate.

**Concrete red flags to check drafts against**:
- Overused connector/filler phrases: *cabe destacar, es importante
  mencionar/señalar, en resumen, sin duda alguna, huelga decir, no cabe
  duda de que, a lo largo de, en definitiva* — these read as
  essay-transition scaffolding, not narrative or natural speech.
- Mechanical paragraph-opening connectors (*Además..., Sin embargo..., Por
  otro lado...*) reused as a structural crutch across consecutive
  paragraphs instead of varying how ideas connect.
- Uniform sentence length/rhythm and identical paragraph shapes
  (topic sentence → explanation → example, every time) — real writing
  varies pace, includes short/fragment sentences for effect, occasionally
  runs long.
- Narrating emotions/subtext directly ("Lucía sintió una mezcla de
  tristeza y esperanza") instead of showing them through action, dialogue,
  or concrete detail — a classic AI-fiction tell.
- Dialogue that's grammatically pristine but sounds nobody would actually
  say it out loud — real spoken Spanish (even in a "neutral,
  universally-understood" register per this project's dialect policy)
  uses *bueno, pues, o sea, vale, claro*, natural contractions/elisions,
  and interruption/incompleteness; textbook-clean dialogue is a tell.
- Literal English-idiom translation instead of the natural Spanish
  equivalent (the existing false-friends/idioms content is a good
  cross-reference for what genuine idiomatic Spanish looks like vs. a
  literal calque).
- Overuse of em dashes as a default punctuation crutch, and avoidance of
  contractions/elisions where natural register calls for them.

**Process** (steps 1-9 confirmed by the user 07-09-2026; step 10 added the
same day after it caught a real gap in the reading-passages POC):
1. **Reference-corpus calibration before drafting** — skim 1-2 real,
   human-authored passages at a similar register/genre (a real children's
   graded reader, a real Spanish blog post, a real news brief) first, not
   to copy content but to recalibrate rhythm and word choice away from
   generic "AI Spanish" before writing a single word.
2. Draft the content.
3. **Blind second-reader pass — a genuinely separate agent/session with no
   authoring context**, not the same pass that wrote it self-reviewing.
   Cold read, no brief beyond "does this sound AI-written," flag anything
   off, hand back for revision. The same context that just wrote something
   is a weak judge of whether it sounds natural; a fresh read isn't.
4. **Automated grep-check against the red-flag phrase list above** before
   the blind read — a small script scanning new prose files for the
   overused-connector list (cabe destacar, en resumen, etc.) and flagging
   matches, the same spirit as this project's existing accuracy-audit
   discipline. Catches the mechanical tells before a human even reads it.
5. **Light per-character voice** for any content with multiple speakers
   (the Blahaj story's pen pals especially) — subtly distinct word-choice
   flavor per character rather than uniform voice across all of them,
   kept tasteful and consistent with this project's "neutral but not
   flavorless" existing approach to regional content (see `regional.js`).
6. Calibrate voice against how a real native author would write this
   specific register/genre (a graded-reader children's story reads
   differently than a news passage or a formal complaint letter) rather
   than defaulting to one flat neutral-AI voice throughout.
7. Read dialogue "aloud" (mentally) — if a sentence wouldn't actually be
   said that way by a real person, rewrite it.
8. Vary sentence/paragraph structure deliberately rather than settling
   into a repeating template.
9. **Human spot-check before scaling up** — for any new extended-prose
   content type (the reading-passages story specifically), write and ship
   just one sample unit first for the user to read and react to, before
   committing to writing the full planned set. Confirmed working this way
   for the Blahaj story: chapter 1 first, full 18-chapter build only after
   that reads right.
10. **Grammar-structure CEFR check against `concepts.js` before any level
    tag ships, not just a vocabulary-difficulty eyeball** — user directive
    (07-09-2026): "apply this level of discipline and testing QA to all
    future writing." A passage claiming A1 (or any level) has to actually
    hold to that level's real grammar, not just simple-sounding vocabulary.
    Concretely: list every grammar structure the draft actually uses
    (tenses, moods, pronoun types, clause types — not just individual
    verbs), look up each one's real tag in `concepts.js`, and flag/fix
    anything above the claimed level rather than assuming short sentences
    and easy words are sufficient. Caught on the first real pass at this
    (07-09-2026, this same session): an A1-tagged reading-passage POC used
    direct/indirect object pronouns (`direct_object_pronouns`/
    `indirect_object_pronouns`, A2), one preterite verb (`preterite_regular`,
    A2), and one relative clause (`relative_clauses_core`, A2) — all
    invisible to a plain "does this sound simple" read, all caught by
    checking the grammar against `concepts.js` directly. If a structure
    above the claimed level is kept on purpose (deliberate i+1
    comprehensible-input exposure), say so explicitly rather than let it
    pass silently as an oversight. Applies to any future original prose
    that carries a CEFR label — reading passages first, but the same
    check applies to any other leveled content type this project adds.
11. **Vocabulary-gloss density for reading passages is a different problem
    from grammar-level QA (step 10) — don't apply the same binary logic to
    both, but the final answer is data-driven, not hand-curated.** Grammar
    is checkable/binary: a structure either has or hasn't been taught, so
    "never exceed the claimed level" is the right rule. Vocabulary glossing
    went through two wrong models before landing on the right one
    (07-09-2026, same reading-passages POC): first, over-applying step 10's
    "check everything" instinct to vocabulary too literally and glossing
    ~70 words including connectors/common verbs/near-cognates a learner
    should infer from repetition, not get handed; user feedback "a little
    heavy for true beginners." Second correction: hand-curating a smaller
    ~24-word list by editorial judgment call (concrete nouns, idioms,
    genuinely irregular verbs — yes; connectors, common verbs, cognates —
    no). **That second model was also wrong** — user pushback ("MOST if
    not all words at the A1 level should have glossary hover definitions")
    surfaced that the site's real `ClickableSpanish`/`segmentSpanish`
    mechanism already does exactly this mechanically, with zero curation:
    every word with a real `vocabulary.js` entry gets a hover-define,
    every word without one doesn't. **The shipped, standing rule**: don't
    curate a glossary at all — pass passages through the real matcher
    (`vocabOnly` mode, see Architecture below) and let real data decide
    what's clickable. This makes rule 12 below load-bearing: the matcher
    can only define what's actually in `vocabulary.js`, so any real gap
    has to be closed as content, not designed around.
12. **Any new word a reading passage introduces that isn't already in
    `vocabulary.js` must be researched (cross-referenced, real CEFR level —
    never guessed) and added to `vocabulary.js` before the passage ships,
    every time, no exceptions.** User directive (07-10-2026): "any new
    words introduced you have to add to the glossary and hover define —
    this is a hard and fast rule." This is what makes rule 11's
    non-curated, fully-mechanical glossing actually work at true-beginner
    level: if a word a beginner wouldn't know is missing from
    `vocabulary.js`, it silently renders with no hover-define, and the
    passage isn't actually A1-accessible regardless of what CEFR label it
    claims. Closing the gap is a general `vocabulary.js` improvement, not
    reading-specific — it benefits `ClickableSpanish` everywhere else on
    the site too, same as the 07-09-2026 49-word and 9-word fills.
13. **Every reading passage ships with its comprehension-question set
    (`questions` array) at the same time it's written — never deferred to
    a later pass.** User directive (07-10-2026): "then we make
    comprehension questions for every passage as they're written — also
    needs to be a rule." Write the passage, close any vocabulary gaps
    (rule 12), then write its comprehension questions before moving to the
    next passage, rather than batching prose-writing and
    question-writing as separate phases.

---

## Cost architecture — must stay $0 for solo/small-group use

The stack was deliberately chosen to make personal use free, permanently,
with no billing account attached anywhere:

| Layer | Choice | Why free |
|---|---|---|
| LLM | Gemini 2.0 Flash | Free tier (no billing attached to the API key = literally cannot be charged); 1M token context |
| Tutoring fallback | Hardcoded exercise bank in `_gemini.js` | Zero cost, zero dependency, covers Gemini outages/misconfiguration |
| Database | Cloudflare D1 | Free tier (5GB storage, 5M rows read/day, 100K rows written/day) — nowhere near solo-use limits, see analysis below |
| Hosting | Cloudflare Pages | Free tier, Git-integrated auto-deploy |
| KV | Cloudflare KV | Bound in `wrangler.toml` but **currently unused in code** — costs nothing regardless |
| TTS *(spec'd, not yet built)* | Google Cloud TTS Neural2 → Web Speech API fallback | 1M chars/month free; Web Speech API is browser-native, zero API cost at all |
| Secondary LLM *(spec'd, not yet built)* | Groq | Rate-limit backstop behind Gemini |
| Object storage *(spec'd, not yet built)* | Cloudflare R2 | Free tier, already on Cloudflare |

**Rule going forward**: any new dependency proposed for this project should be
checked against "does this require a paid tier or a billing-enabled account
for personal use?" If yes, look for a free-tier-native alternative first —
that was an explicit, repeated user directive across sessions.

**D1 free-tier headroom** (verified by direct code inspection, not
assumption): every hot-path query in `functions/api/sessions/turn.js` is an
indexed point lookup (composite primary keys, `idx_*` indexes on `user_id`).
A single heavy day of ~150 exercises answered is roughly 1,000-1,200 D1
statements touching single-digit row counts each — a rounding error against
the free tier's daily caps. This would need to scale 50-100x, sustained, from
multiple simultaneous users before D1 became a real constraint.

---

## Build order (originally specified as Phase 1–4)

The original spec was audited before handoff and a phased build order was
added specifically so a fresh coding session wouldn't either freeze on a
2,000-line spec or try to build everything in one shot:

- **Phase 1 (MVP)**: auth → Gemini call → exercise loop → dashboard. No FSRS,
  no audio, no conversation simulation, no mascot. Just a real session that
  saves progress.
- **Phase 2**: layer in intelligence — mastery tracking, weak-spot
  resurfacing, adaptive difficulty.
- **Phase 3**: audio (TTS + pronunciation).
- **Phase 4**: content depth — media integration, conversation role-play,
  cultural content, broader reference material.

## Current implementation status vs. spec

**Built, current as of 07-09-2026:**
- Auth (JWT, D1-backed `users` table)
- Gemini-driven adaptive session with graceful local-grading fallback
- FSRS-4.5 vocabulary spaced repetition, shared between the adaptive
  session's vocab queue and Flashcards
- Concept mastery tracking with fossilization detection and
  explanation-style rotation
- Reference pages: grammar, verbs, vocabulary (1439 words, A1-C2 parity
  across all 6 levels, 27 domains), idioms, false friends, pronunciation,
  regional differences, free resources — all with `ClickableSpanish`
  word-popover support
- Dashboard, session history, profile
- **Structured "Learn" curriculum — 41 taught units (0-37 plus 3 new B2
  units), A1 through C2, plus 9 cumulative review checkpoints (50 total).**
  See "Architecture" above.
- Audio/TTS via the Web Speech API (no per-character billing, unlike the
  original spec's proposed Google Cloud TTS)
- Anki-style Flashcards (top 5,000 words by frequency)
- **Multi-source cross-referencing for accuracy** — fully operationalized.
  All 6 core content files (verbs, grammar, false friends, pronunciation,
  regional, vocabulary, idioms) plus the adaptive session's fallback bank
  have been through an externally-verified accuracy audit. See
  `ES-HISTORY.md`, 07-03-2026, for the audit process and findings.

**Still not built** (real gaps against the original learner-facing spec —
see "What still needs to be built" below for the live punch list):
- Speaking (no mic input/pronunciation scoring) — backburnered by the user
- Dedicated listening-comprehension exercises (audio-only, not just replay)
  — backburnered by the user
- Open-ended writing prompts (every exercise type has one matchable string)
- Conversation/role-play exercise type
- Real media integration *hosted directly in the app* (the Free Resources
  page links out to existing free content instead — deliberate, cheaper)
- Cloudflare R2 (bound in `wrangler.toml`, unused — no feature needs it yet)
- Secondary/fallback LLM provider, explicit Gemini retry/backoff

## Pedagogical principles (research-grounded, established for the structured curriculum)

The original spec called for explicit grammar instruction blended with
comprehensible-input/immersion techniques and multiple learning strategies.
Before building the structured "Get Started" curriculum, this was grounded in
actual second-language-acquisition research rather than intuition. These
principles are binding for all curriculum content, not just Unit 1:

- **Comprehensible input (~90-98%)**: each lesson introduces one main new
  grammar point at a time. Examples and practice reuse vocabulary/structures
  already taught rather than piling on multiple unfamiliar things at once.
- **Explicit instruction over pure immersion**: research consistently favors
  explicit rule statements for adult learners over discovery-only approaches
  — this validates the original spec's "teach rules explicitly, up front"
  directive rather than walking it back toward pure comprehensible-input
  dogma.
- **Retrieval practice over re-reading**: lesson practice must require
  *producing* an answer (recall), not just re-reading or recognizing —
  retrieval practice measurably beats passive review for retention.
- **Spaced repetition, not a separate silo**: any new vocabulary a lesson
  introduces should feed into the existing FSRS-scheduled `vocabulary_items`
  queue, not live in a parallel system — so spacing benefits apply
  automatically instead of the lesson content being "seen once and forgotten."
- **Blocked practice before interleaving, especially for beginners**: within
  a single new lesson, practice should drill the new concept in relative
  isolation first. Mixed/interleaved review across many concepts is what the
  existing adaptive Gemini session is for — don't duplicate that inside a
  lesson meant to introduce one new thing.
- **Multiple modalities**: the same structure/vocabulary should appear across
  reading, listening (audio), and production (typed/selected answers) within
  a lesson — not just one format.
- **Immediate, explanatory corrective feedback**: matches the original spec
  directive already; research on feedback timing is mixed but supports
  feedback functioning as scaffolding, which immediate + explained feedback
  does well for accuracy-focused practice.
- **L1 (English) scaffolding is appropriate in lesson prose, not sessions**:
  the original spec's "minimize English" directive applies to *live tutoring
  dialogue* (the Gemini session), where the learner already has some base to
  work with. It does not apply to lesson *reading content* for an absolute
  beginner — explaining Spanish grammar in Spanish to someone with zero
  vocabulary is not comprehensible input, it's just incomprehensible. Lesson
  prose is written primarily in English with embedded Spanish examples.

Sources consulted (WebSearch, current at time of writing): comprehensible
input thresholds and spaced/contextual repetition research (The Language Gym,
Frontiers in Education 2025 spaced-retrieval study), retrieval practice and
spacing research synthesis (TESL-EJ deliberate practice framework,
ResearchGate repetition/retrieval/spaced-practice review), explicit-vs-
implicit grammar instruction and blocked-vs-interleaved practice for
lower-achieving/beginner learners (Language Learning journal, 2025), and
corrective feedback timing/scaffolding research (systematic review, PMC).

## Architecture (current state)

Consolidated, current-only description of how the major systems work today.
For how each one got built — the sessions, the false starts, the bugs found
along the way — see the relevant dated section in `ES-HISTORY.md`.

### Structured "Learn" curriculum

41 taught units plus 9 review checkpoints (50 total), A1 through C2, at
`/learn`. Alongside the adaptive Gemini session and reference pages —
doesn't replace either. B2 got 3 units added (fractional order 25.1-25.3,
between "Fine Details" and the B2 checkpoint) closing a real gap: B2 had
only 4 taught units against 6-8 at every neighboring level — see the
Session history index for the full build note.

- `src/content/curriculum/index.js` — `UNIT_METADATA` (id, order, level,
  title, concepts, summary) for every unit. `CONTENT` maps unit id → the
  imported content module. `getUnit(id)` merges the two. **Only this
  orchestrating file wires units together** — a content-writing agent
  should never touch it, `concepts.js`, or `grammar.js` directly, to avoid
  two agents racing on a shared file. See "Git/PR conventions" below.
- `src/content/curriculum/unitNN-slug.js` — one file per unit, each
  standalone (safe for parallel agents to write independently). Shape:
  `{ sections: [{ heading, paragraphs, examples, commonMistakes }], vocab:
  [{ es, en, example, exampleEn }], practice: [...exercise objects] }`.
  Optional `passage`/`passageEn` fields on a practice exercise render a
  short dialogue/narrative above the prompt (added for C1, used heavily in
  C2's discourse-heavy units).
- `functions/_lib/concepts.js` — the master concept graph: every tracked
  grammar/discourse/vocabulary concept (`id`, `label`, `cefr`, `category`,
  `prereqs`, `explanationStyles`). 105 concepts as of the C2 rollout.
- `src/content/grammar.js` — one reference card per concept (`rule`,
  `examples`, `exceptions`), same `concept_id`s as `concepts.js`. Backs
  `/grammar` and lesson "see full explanation" links.
- `src/content/conceptLabels.js` — one shared short-label map, imported by
  `History.jsx`, `Dashboard.jsx`, `Session.jsx` (frontend) and
  `functions/api/sessions/end.js` (backend — cross-boundary imports from
  `src/` into `functions/` are established and safe here, same pattern as
  `functions/api/vocabulary/seed.js`). **Every concept id must have an
  entry here** — this used to be 4 separate hand-copied maps that drifted
  out of sync; consolidated during the C2 rollout specifically because that
  bug class had already recurred once.
- Every concept id must also appear in `functions/api/sessions/_gemini.js`
  in three places: the prompt's `concept_id must be one of` whitelist, the
  CONTENT SCOPE description, and at least one `FALLBACK_EXERCISES` entry.
  The last one is a real invariant, not a nice-to-have — `fallback()` in
  focus-mode drilling filters to the requested concept first, only
  degrading to fully random selection if zero fallback exercises exist for
  it (see the focus-mode bug in `ES-HISTORY.md`, 07-04-2026, for why this
  matters). Run a quick script cross-checking all four files agree before
  trusting a new concept is fully wired.
- Lesson vocab is seeded into the existing FSRS-scheduled `vocabulary_items`
  queue via `api.vocabulary.add` (best-effort, ignores 409) — not a
  separate silo.
- Practice exercises are graded **locally in the browser**
  (`src/pages/Lesson.jsx`), same normalize-and-compare logic as the Gemini
  fallback path — instant feedback, no dependency on Gemini/D1 for the
  practice loop itself.
- Exercise `type`s: `multiple_choice`, `fill_blank`, `translation_to_spanish`,
  `translation_to_english`, `error_correction`, and `register_identify`
  (added for C2 — given a `sentence`/`sentenceEn`, the learner picks one of
  exactly `['formal', 'neutral', 'informal', 'colloquial']`; reuses the
  multiple-choice interaction/keyboard-shortcut code path in
  `ExerciseCard.jsx` via an `isMultipleType()` helper rather than
  duplicating it).
- `schema-v6.sql` / `functions/api/curriculum/progress.js` — `module_progress`
  table tracks per-unit completion, no gating.

**Review checkpoints** (added 07-08-2026) — 9 units (`checkpoint-a1`,
`checkpoint-a1-full`, `checkpoint-a2`, `checkpoint-a2-full`, `checkpoint-b1`,
`checkpoint-b1-full`, `checkpoint-b2`, `checkpoint-c1`, `checkpoint-c2`),
one at the midpoint and end of each CEFR level, giving cumulative
interleaved review across all prior units — no new Spanish content, no
schema changes, no new backend route:
- `UNIT_METADATA` entries carry `isCheckpoint: true` and `checkpointUpTo:
  <order>` instead of a fixed `concepts` list, and use **fractional
  `order` values** (4.5, 7.5, ...) so they slot between real units without
  ever renumbering an existing unit's `order` — the same rule that's kept
  every prior content addition additive.
- `getPracticePoolUpTo(order)` (in `curriculum/index.js`) pools every
  real unit's `practice` array by `concept_id`, for every unit at or
  before that order — reads data that's already in the bundle, since all
  unit content is statically imported.
- `src/lib/checkpoints.js`'s `buildCheckpointPractice()` assembles a fresh
  ~20-exercise set from that pool: weakest concepts (from the existing
  `GET /learner/profile` `weakConcepts`, already ordered worst-mastery-
  first) get priority slots, concepts with no mastery signal yet fall back
  to even sampling — never breaks for a learner who skipped ahead.
- `Lesson.jsx` branches on `isCheckpoint`: real units use the static
  `CONTENT[id]` as before; checkpoints fetch `weakConcepts` and call
  `buildCheckpointPractice()` in a `useEffect`, rebuilding the set **fresh
  every time the lesson mounts** — checkpoints are redoable and
  deliberately not frozen at first-completion state. `getUnit()` returns
  `comingSoon: false` for a checkpoint even with no `CONTENT[id]` entry.
- Completion still writes to `module_progress` via the same
  `markComplete` call every other unit uses — no new tracking needed.

### Verb reference (`/verbs`)

`src/content/verbs.js` — 147 verbs, 17 tenses each (`TENSES`/`TENSE_LABELS`
exports drive the UI generically): present, preterite, imperfect, future,
conditional, present subjunctive, imperfect subjunctive, 6 compound tenses
(present/pluperfect/future/conditional perfect + present/pluperfect perfect
subjunctive), the literary pretérito anterior and futuro de subjuntivo, and
imperative (affirmative/negative). Imperative has no `yo` form — stored as
`yo: '—'` rather than special-cased in the renderer. The original 125 are
regenerable via `scripts/extend-verb-tenses.mjs`, which mechanically
derives all of this from each verb's existing present/preterite/subjunctive
data plus a small set of WebSearch-verified irregular-form exception lists
(tú-imperative irregulars, irregular participles, reflexive
enclitic-pronoun placement) — see `ES-HISTORY.md`, 07-08-2026, if
regenerating and something looks wrong. The 22 added 07-09-2026 (closing a
C1/C2 gap — was 14 C1 / 0 C2, now 22/14) were hand-written directly with
every tense filled per-verb rather than run through that script, since
several (the rare/defective C2 verbs especially) needed individual
WebSearch verification and documented multi-form variation notes that a
mechanical deriver can't produce — running `extend-verb-tenses.mjs` again
would not touch these, only the original 125.

### Vocabulary reference (`/vocab`)

`src/content/vocabulary.js` — 1439 words, `{ es, en, cefr, domain, example,
exampleEn, frequencyRank, register? }`. `DOMAINS`/`CEFR_LEVELS` are exported
for `VocabBrowser.jsx`'s filter chips; `DOMAINS` is auto-derived
(`[...new Set(...)].sort()`), so a new domain string just works with no
separate whitelist to update. A 07-08-2026 pass closed a real gap: C1 had
only 80 words and C2 had zero, despite the C1/C2 curriculum (units 26-37)
existing — brought both to parity with A1/A2 (C1 → 280, C2 → 234) by
promoting the curriculum units' own already-verified `vocab` arrays plus
fresh WebSearch-verified research, and added 4 new domains (`business`,
`academic`, `abstract_concepts`, `media_news`) the prior 22 concrete/
everyday domains didn't cover. New entries (and only new entries — the
original 1005 are untouched) carry a `register` field
(`colloquial`/`informal`/`neutral`/`formal`), reusing `idioms.js`'s
existing 4-way scale rather than inventing a new one; `VocabBrowser.jsx`
renders it as a badge (only when present) and as a filter chip row. One
intentional duplicate spelling: `tío` appears twice (existing "uncle,"
A1, `family`; new "dude/mate" colloquial address term, C2, `greetings`)
— a genuine second sense, not a data bug.

### Idioms (`/idioms`) and False Friends (`/false-friends`)

`src/content/idioms.js` (166 entries) and `src/content/false-friends.js`
(110 entries) both got a `cefr` field added 07-09-2026 — until then neither
had any level tagging at all, unlike every other content file. Both export
`CEFR_LEVELS` and render a level filter row + badge identical in pattern to
`VocabBrowser.jsx`'s. Idioms leveled by real-world pragmatic
commonness (not word difficulty) — distribution skews B1/B2 as expected
for everyday idiomatic language: `A1:1, A2:16, B1:47, B2:71, C1:23, C2:8`.
False friends leveled by how early a learner encounters the *Spanish* word
in question — most classic false friends (`embarazada`, `sensible`,
`actualmente`) trip up early/intermediate learners, so the distribution
tapers from A2/B1 rather than clustering high: `A1:13, A2:36, B1:35,
B2:20, C1:4, C2:2`.

### Readings (`/readings`)

2 original A1 passages as of 07-09-2026 (`src/content/readings.js`) — a
standalone scene ("El pan de cada mañana") and Chapter 1 of a planned
18-chapter serialized story ("Las Aventuras de Blahaj"), the first ship
from the reading-passages feature scoped early in the project. `/readings`
lists passages (`Readings.jsx`); `/readings/:passageId` renders one
(`ReadingPassage.jsx` — singular, since it renders one specific passage)
with a "Ver traducción" toggle for the English. Renamed from "Reading" to
"Readings" (07-10-2026): page/nav label, route, `Readings.jsx`/
`.module.css`, and the content file (`readings.js`) all updated;
`ReadingPassage.jsx` kept its name since it's the per-passage detail page,
not the list.

Every word gets a definition via the exact same `ClickableSpanish`
component used everywhere else on the site — no separate reading-specific
glossary logic, no curated word list, no invented data. The only change
needed: `segmentSpanish`/`buildIndex` in `src/lib/dictionary.js` gained an
optional `vocabOnly` param (plumbed through `ClickableSpanish`'s new
`vocabOnly` prop) that excludes curriculum units' own vocab boxes from the
match index. Those boxes intentionally list bare prepositions/pronouns
(a, de, en, la...) as new grammar-lesson vocabulary for their specific
unit — right for a lesson paragraph, wrong for a flowing story, which
would otherwise get a popover on nearly every function word. Reading
passages pass `vocabOnly`; every other existing call site is unaffected
(defaults preserve the old behavior exactly).

Getting the passages themselves right took three corrected passes, all
narrated in punch-list item 29 and `ES-HISTORY.md`'s dated entry: a
grammar-level QA gap (object pronouns/preterite/relative clauses sneaking
into an "A1" draft), then a vocabulary-glossing density overshoot (nearly
70 words glossed, including connectors that repetition should teach, not
a popover), corrected by switching to this same real-data-only matching
approach instead of any hand-curated list. That correction surfaced 49
ordinary words missing from `vocabulary.js` entirely (panadería, dejar,
contestar, tiburón, intercambiar...), researched and added with real CEFR
levels rather than invented ones — a general fix, not reading-specific,
since any vocabulary.js gap was already invisible to `ClickableSpanish`
sitewide.

Each passage now also carries a `questions` array (comprehension checks,
not grammar drills — mostly `multiple_choice` in Spanish, plus a couple of
free-text `comprehension`-type questions with English answers) rendered on
the passage page behind a "Practicar comprensión →" button, one at a time,
via the same `ExerciseCard`/`Feedback` components curriculum practice
uses. Grading is entirely client-side (no backend call, no concept-mastery
tracking) — a simple running score shown at the end. Building this pulled
`Lesson.jsx`'s local answer-grading logic (`normalizeAnswer`,
`isAnswerCorrect`, contraction/pro-drop/parenthetical handling) out into
shared `src/lib/answerMatching.js` so both curriculum practice and reading
comprehension use the same matcher; the extraction also added accent
stripping to `normalizeAnswer` (reusing `stripAccents` from
`dictionary.js`, now exported), closing the long-flagged bug where "Por
que" was marked wrong for "¿Por qué...?" throughout the A1 curriculum —
strictly loosening, never tightens acceptance.

Not yet built: additional passages/chapters, and letting a serialized
story's own level climb chapter by chapter (the natural design for
chapters 2+, discussed but not started).

### Flashcards (`/flashcards`)

Separate Anki-style deck (top 5,000 Spanish words by frequency), distinct
from curriculum vocab and the adaptive session's `vocabulary_items` queue.
- `scripts/build-flashcards.mjs` — rerunnable pipeline, downloads 3
  openly-licensed source files (hermitdave/FrequencyWords via
  doozan/spanish_data, CC BY-SA; Tatoeba example sentences, CC BY) into
  `.cache/flashcard-data/` (gitignored), writes
  `src/content/flashcards/frequency-5000.js`. Build-time only, zero LLM
  calls. Attribution shown in the Flashcards page footer as the licenses
  require.
- `src/content/flashcards/frequency-5000.js` — loaded via dynamic
  `import()` in `Flashcards.jsx` so it code-splits into its own chunk.
- `schema-v7.sql` (+`v9.sql`) / `functions/api/flashcards/{progress,review,
  undo,suspend,stats}.js` — a `flashcard_progress` table (per-user FSRS +
  Anki-style state; card content stays static in the frontend bundle).
- **Anki-style learning/relearning steps** (`functions/_lib/
  flashcardScheduler.js`), layered on top of `fsrs.js`'s `scheduleReview()`
  (still the exact same function the adaptive session's vocabulary queue
  uses — any future change to it affects both systems). State machine: new
  → `learning` (steps `[1, 10]` minutes, must pass both to graduate) →
  `review` (full FSRS-scale intervals) → a lapse (grade Again while in
  `review`) drops it into `relearning` (one 10-minute step) before it
  returns to `review`. `scheduleFlashcard(item, grade)` is a pure function
  with no DB/env dependency, so `Flashcards.jsx` imports it directly
  (`../../functions/_lib/flashcardScheduler.js`) to compute live interval
  previews on the grade buttons without a network round-trip.
- **Same-session requeue**: a card still mid-steps after grading gets
  spliced back into the client-side queue a few cards ahead (`REQUEUE_GAP`)
  instead of only reappearing on a future visit — this is what makes
  "Again" actually behave like Anki instead of vanishing for hours.
- **Leech flagging**: `lapses >= LEECH_THRESHOLD` (8, matching Anki's
  default) sets `is_leech`; flagged cards stay in normal rotation (shown as
  a badge) rather than being auto-suspended. `lapses` only ever increases,
  so this is a one-way flag by design — once a word is stuck, it stays
  flagged for visibility rather than un-flagging itself later.
- **Suspend** (`flashcards/suspend.js`): manually excludes a card from
  scheduling ("I already know this word") without touching its FSRS state.
  **Undo** (`flashcards/undo.js`): single-level, via a JSON snapshot of the
  pre-grade row (`undo_snapshot` column) taken on every `review.js` call; a
  card graded for the very first time snapshots the sentinel `'NEW'`, so
  undoing it deletes the row entirely rather than restoring one.
- **`flashcard_review_log`** (append-only, mirrors Anki's revlog): every
  grade submission regardless of learning/review/relearning phase, so the
  stats page can compute exact same-day/7-day review counts and retention
  without overloading the FSRS-purpose counters on `flashcard_progress`.
- **`/flashcards/stats`** page: due-forecast (next 7 days), state
  breakdown (new/learning/review/suspended), retention %, and a stuck-words
  (leech) list — linked from the Flashcards empty/complete states.
- `Flashcards.jsx` queues due cards + new cards up to `SESSION_SIZE = 20`,
  new cards capped at `NEW_PER_SESSION = 10` (session length isn't
  strictly fixed once requeued cards start looping back in, same as Anki).
  Keyboard shortcuts: Space/Enter to flip, `1`-`4` to grade. **Known
  simplification**: the new-card cap is per page-load, not a true
  calendar-day quota — see "What still needs to be built" below.
- **Deliberately out of scope for this pass**: the adaptive session's
  `vocabulary_items` queue does *not* get learning steps/requeue/leech/
  undo/suspend — scoped to Flashcards only since it's the one page
  explicitly styled as an Anki-like card deck; `vocabulary_items` serves a
  different UI (a due-list, not a card-by-card session).

### Adaptive session (`/session`)

Gemini-backed exercise loop (`functions/api/sessions/{start,turn}.js`,
`_gemini.js`) with a graceful fallback to `FALLBACK_EXERCISES` (a large
static bank spanning every tracked concept) on any Gemini failure — the
fallback path grades answers locally rather than marking everything wrong.
Both `start.js`/`turn.js` return a `source` field (`'gemini'`/`'fallback'`)
plus a `fallbackReason` when falling back, so it's possible to tell from the
outside whether Gemini is actually being called in production. Focus mode
(`/session?focus=<concept_id>`) persists `focus_concept` on the `sessions`
row (`schema-v8.sql`) and re-reminds Gemini of it on every turn, since
Gemini has no cross-request memory.

### Database schema

`schema.sql` + incremental `schema-vN.sql` files, applied in order.
**SQLite's `ALTER TABLE ADD COLUMN` isn't idempotent** — always check a
column doesn't already exist earlier in the chain before adding a new
migration. See "Deployment & ops conventions" below for the local-vs-remote
D1 gotcha that has already caused two production outages.

## Deployment & ops conventions

- **Cloudflare Pages is Git-integrated via the dashboard**, not CLI-deployed.
  Pushing to `main` auto-triggers a build; PRs get their own preview
  deployment + a `cloudflare-workers-and-pages[bot]` PR comment, which is the
  only CI check currently configured on this repo.
- **`wrangler.toml` is the source of truth for D1/KV bindings and build
  config** once `pages_build_output_dir` is set — the Cloudflare dashboard's
  "Variables and secrets" UI can only manage **Secrets** (encrypted), not
  plain vars, once wrangler.toml is present. Don't expect dashboard-set plain
  env vars to take effect.
- **Secrets** (`GEMINI_API_KEY`, `JWT_SECRET`) are set via the dashboard's
  Secret UI, never committed to `wrangler.toml` or the repo. `.dev.vars` is
  gitignored and is for local-only dev.
- If Cloudflare shows a **"disconnected from Git" banner**, pushes silently
  stop triggering builds. Fix via Settings → Build → "Manage" (re-authorize
  the GitHub App) before assuming a push failed for some other reason.
- Placeholder IDs in `wrangler.toml` (`database_id`, KV `id`) must be
  replaced with real resource IDs from the dashboard before any deploy will
  succeed — a placeholder produces `Error 8000022: Invalid KV namespace ID`.

## Git/PR conventions

- A session's feature branch typically gets reused across many rounds of
  work within that session; **after each merge, Cloudflare/GitHub
  auto-deletes the remote branch**, so the next push needs a fresh
  `git push -u` (not force-push) rather than assuming the remote ref still
  exists.
- Every push got its own draft PR, marked ready by the user, merged
  individually — small, reviewable, sequential changes rather than one giant
  PR.
- When multiple background agents touch the repo concurrently, **only let
  them work on genuinely disjoint files in parallel**; anything touching
  `functions/api/sessions/_gemini.js` (concept prompt list, fallback
  exercises) needs to run sequentially against grammar-concept changes in
  `functions/_lib/concepts.js` and `src/content/grammar.js`, since those three
  files plus `Landing.jsx`'s copy counts must all stay consistent for every
  concept_id.

## Code/design gotchas

- **`--sp-7` was referenced in a dozen components' `gap`/spacing rules but
  never defined** in `index.css`'s token list. An undefined CSS custom
  property with no fallback makes the *whole declaration* invalid at
  computed-value time — `gap: var(--undefined)` silently becomes `gap: 0`,
  not an error. Always confirm a token exists in `:root` before trusting
  `var()` usage elsewhere; this class of bug is invisible until you actually
  measure rendered spacing.
- **Don't use `display: grid` with implicit rows for cards of uneven content
  height** — CSS Grid syncs row height to the tallest cell in that row across
  *all* columns, leaving dead space under shorter cards. Independent flex
  columns (each stacking its own content) avoid the coupling entirely.
- **Verify Pages Functions import paths actually build** — a single wrong
  `../` in one function file (`functions/api/vocabulary/add.js` originally
  had one extra `../`) broke the *entire* Functions bundle, not just that
  route, because Wrangler compiles all functions together.
- **`console.error` inside a caught Gemini failure is not optional** — a bare
  `catch {}` with no logging means a misconfigured API key degrades silently
  forever with zero way to diagnose it from Cloudflare's logs.
- **PBKDF2 with 100k iterations exceeds Cloudflare Workers Free's ~10ms
  CPU-time-per-request budget** (measured ~57ms locally) — the platform
  kills the request and serves its own HTML error page instead of letting
  the Worker respond with JSON, which surfaces to the frontend as
  `Unexpected token '<'`, not as a recognizable auth error. 10k iterations
  (~5ms) fits comfortably. Any CPU-bound crypto/hashing work on Workers
  needs to be checked against this budget, not just against security
  best-practice iteration counts.
- **A caught error swallowed silently is worse than no try/catch at all,
  twice over**: the fallback path in `_gemini.js` hardcoded `correct: false`
  on any Gemini failure instead of actually grading the learner's answer —
  every exercise answered while on the fallback path was marked wrong
  regardless of what was submitted, for however long the fallback was
  silently active. A caught failure path needs to preserve correct behavior
  for the parts of the request it *can* still handle locally, not just
  avoid crashing.
- **Spanish/English homographs break naive dictionary word-matching in
  mixed-language prose** — words like `red` (Spanish "network") and `pan`
  ("bread") are also ordinary English words, so a lesson's English
  explanatory text can't safely auto-link single Spanish words without
  checking for this. Multi-word phrases (`buenos días`) are safe since
  cross-language collisions there are effectively nonexistent. Any future
  text-annotation feature over mixed-language content should check its
  term list against common English words before enabling single-word
  matching in prose.
- **A missing `JWT_SECRET` doesn't fail loudly** — `signJWT(payload,
  undefined)` makes WebCrypto try to import a zero-length HMAC key, which
  throws `DataError: Zero-length key is not supported`. Unhandled, that's
  the same "Cloudflare serves its own HTML error page" failure mode as the
  PBKDF2 CPU-budget issue above, surfacing to the frontend as the same
  unhelpful `Unexpected token '<'`. `register.js`/`login.js` now check
  `env.JWT_SECRET` up front and return a named JSON error; `_middleware.js`
  now wraps the whole request in try/catch so *any* future unhandled
  exception returns JSON instead of HTML. If you add a new endpoint that
  reads a secret from `env`, don't assume it's set — Cloudflare secrets are
  configured per-environment in the dashboard and it's easy to add code that
  depends on one without actually setting it there.
- **A schema migration can silently break its own sequence** —
  `schema-v3.sql` tried to `ALTER TABLE ADD COLUMN session_count`, a column
  `schema.sql` already defined. SQLite's `ALTER TABLE ADD COLUMN` isn't
  idempotent (no `IF NOT EXISTS` support), so running the migration chain in
  order always threw `duplicate column name` at v3 — which means anyone who
  stopped after hitting that error (reasonable instinct) never got v4/v5
  applied either, silently missing columns those add. `schema-v3.sql` is now
  a documented no-op. **Lesson**: when writing a new incremental
  `schema-vN.sql`, always check the column doesn't already exist somewhere
  earlier in the chain — there's no automatic idempotency to lean on here.
- **A D1 error mentioning "storage caused object to be reset" or similar
  internal-sounding language is a Cloudflare platform hiccup, not an app
  bug** — D1 runs on Durable Objects, which occasionally cold-start/reset.
  These are transient and typically clear on retry; the `reference = ...` ID
  in the error is Cloudflare's own support-ticket format. Don't chase this
  as a code issue unless it's frequent/persistent, in which case check
  https://www.cloudflarestatus.com/ or investigate actual load patterns.
- **`wrangler pages dev --d1 DB --local` and `wrangler d1 execute DB
  --local` can silently point at two different local SQLite files** if the
  `pages dev` invocation passes a bare `--d1 DB` flag instead of `--d1
  DB=<database_id>` matching the `database_id` in `wrangler.toml`. Each
  local D1 "database" is persisted as
  `.wrangler/state/v3/d1/miniflare-D1DatabaseObject/<hash>.sqlite`, and the
  hash is derived from the database identity Wrangler thinks it's binding
  to — a bare `--d1 DB` gets a different (empty, unmigrated) hash than the
  one `d1 execute --file=schema.sql` populated, producing a very confusing
  `D1_ERROR: no such table: users` even though migrations were definitely
  run. Always pass the full `--d1 DB=<database_id>` (copy the id from
  `wrangler.toml`'s `[[d1_databases]]` block) when starting `pages dev`
  locally, or just check `ls .wrangler/state/v3/d1/miniflare-D1DatabaseObject/`
  for multiple `.sqlite` files if a fresh-looking DB error shows up on a
  local server that was supposedly already migrated.
- **An ancestor with `backdrop-filter` (or `filter`/`transform`/
  `perspective`/`will-change`) silently changes what `position: fixed`
  means for its descendants.** `NavBar`'s `<header>` uses `backdrop-
  filter: blur(12px)` for its frosted-glass effect. The mobile hamburger
  menu was originally a short `position: absolute` dropdown that left
  page content visible (and clickable) underneath it — the fix was to
  make it a full-height `position: fixed` panel with a body-scroll lock.
  That alone didn't work: nested inside `<header>`, the "fixed" panel
  resolved its `top`/`bottom` against the ~60px header box instead of
  the viewport (because `backdrop-filter` establishes a new containing
  block for fixed descendants per spec) and rendered at ~0 height,
  invisible. The fix was moving the menu panel to be a *sibling* of
  `<header>` rather than a child, with a single wrapping ref around both
  for the existing outside-click-to-close handler. **Any time a
  `position: fixed` element nested under a blurred/filtered/transformed
  ancestor isn't behaving like it's positioned against the viewport,
  suspect the ancestor's `backdrop-filter`/`filter`/`transform` before
  suspecting the fixed element's own CSS.**
- **Playwright's `waitUntil: 'networkidle'` is unreliable in this sandbox
  specifically because of the outbound proxy's handling of
  `fonts.googleapis.com`** — `index.html` loads Google Fonts via a
  render-blocking-looking `<link rel="stylesheet">` (mitigated by
  `display=swap`, so real users never actually block on it), but in this
  sandboxed environment that particular external request sometimes hangs
  instead of failing fast, so `networkidle` times out on an otherwise
  perfectly fine page. Confirmed by loading the same route with
  `request`/`requestfinished`/`requestfailed` listeners and seeing the
  Google Fonts request as the only one still outstanding at timeout. Don't
  read a `networkidle` timeout in local QA scripts as an app bug without
  checking what's still in flight first — prefer `waitUntil: 'load'` or a
  specific-element wait over `networkidle` for pages that pull external
  resources.

## Branding

- Site name: **Capi**. Mascot: capybara (was previously "Pablo" + fox —
  fully renamed). Consistency points to check whenever branding changes:
  `index.html` `<title>`, `NavBar.jsx` logo, `public/favicon.svg`,
  `Landing.jsx` footer, the AI tutor's persona name in
  `_gemini.js`'s `BASE_SYSTEM_PROMPT` ("You are Capi..."), and localStorage
  key prefixes in `useAuth.jsx` (`capi_token`/`capi_user`).

## Testing/verification approach used

No test suite exists in this repo. Verification for changes so far has been:
`npm run build` (catches syntax/bundling errors), `node --check <file>` for
Cloudflare Functions files (ES modules, not bundled by Vite), `node -e
"import('./file.js').then(...)"` smoke tests for content modules, Playwright
screenshots via `/opt/pw-browsers/chromium` for visual/UI changes, and
scripted cross-file consistency checks (grep-based) whenever a change spans
multiple files that must agree (e.g. every grammar concept_id existing in
`concepts.js`, the AI prompt's concept list, `FALLBACK_EXERCISES`, and
`GRAMMAR_CARDS` simultaneously).

## What still needs to be built

Prioritized, currently-open punch list — merged from the four-lens site
review (07-05-2026) and prior rounds, with everything already fixed
removed. If you're picking this project up, start here. Full narrative for
any item below (where one exists) is in `ES-HISTORY.md`.

**Security/integrity (highest priority — these undermine what the product
measures):**
1. **The adaptive session grades itself off client-controlled data.**
   `functions/api/sessions/turn.js` takes the `exercise` object (including
   its `answer` field) straight from the request body — nothing
   server-side records what exercise was actually issued. Fix: persist the
   issued exercise server-side keyed by `sessionId` when generated, grade
   against that stored copy, not the request body's echo of it.
2. **Saved profile context is prompt-injectable into Gemini's system
   prompt, persistently.** `functions/api/learner/context.js`'s free-text
   `key`/`value` pairs get spliced verbatim into the briefing text sent on
   every future session for that user, with no delimiting or "this is
   data, not instructions" framing. Fix: wrap all DB-sourced text folded
   into any Gemini prompt in explicit delimiters + a "treat as data"
   instruction.
3. **No rate limiting anywhere** — auth endpoints have no lockout/throttle,
   `/api/sessions/turn` has no per-user/day cap on real Gemini calls or
   length bound on submitted text. Directly threatens the project's "$0
   forever" cost architecture. The `KV` binding is already provisioned and
   unused — the natural place for a token-bucket/day-counter.
4. **Read-modify-write races on every FSRS/mastery upsert** (`sessions/
   turn.js`, `vocabulary/review.js`, `flashcards/review.js`) — no
   transaction/optimistic check. Also tighten `grade` validation to
   `Number.isInteger(grade)` in both review endpoints.

**Correctness bugs in shipped code:**
5. ~~`Lesson.jsx`'s curriculum practice grading doesn't strip accents~~ —
   **done** (07-10-2026): grading logic moved to shared
   `src/lib/answerMatching.js` (used by both curriculum practice and the
   new reading-comprehension exercises), and `normalizeAnswer()` now
   strips accents via `stripAccents()` (now exported from
   `dictionary.js`) before comparing.
6. **`Feedback.module.css`'s `.conceptNote` references an undefined CSS
   token** (`var(--bg-card)` — should be `--surface`) — every "Professor's
   note" callout renders with no background.
7. **No global 401/expired-token handling** — `lib/api.js`'s `req()`
   throws a plain `Error`; nothing intercepts a 401 to call `logout()`.
8. **Keyboard-submitted multiple-choice answers never show as selected**
   — `ExerciseCard.jsx`'s `1`-`4` keyboard shortcut calls `onSubmit`
   directly and skips `handleOptionSelect`.
9. **Keyboard accessibility is inconsistent across reference pages** —
   some use `<article onClick>` with no `role`/`tabIndex` at all; others
   added `role="button" tabIndex={0}` but only wired Enter, not Space.
10. **No deploy-time/startup check that the schema a build expects
    actually exists in production D1** — this has already caused two
    outages (`schema-v7.sql`/`schema-v8.sql`, see `ES-HISTORY.md`,
    07-04-2026). "Tested locally" has twice failed to catch a missing
    remote migration.

**Curriculum content:**
11. **C1 vocab breaks the "neutral, universally understood Spanish" spec**
    in one spot: Unit 26 teaches "el piso — the flat, the apartment" with
    no Spain/LatAm note, though the rest of `vocabulary.js` is careful
    about exactly this (`piso` means "floor" across most of Latin
    America).
12. **`frequency-5000.js` (flashcard deck) has homograph gloss/example
    mismatches** on a small fraction of cards (e.g. `corte` glossed
    masculine "a cut" but exampled with feminine "court"); ~5.6% also have
    no example at all. Worth a pipeline pass flagging gender/article
    mismatches between gloss and example. (Separately: a "nested-gloss
    category header leaking through as a definition" bug in the same
    pipeline was found and fixed 07-09-2026 — see Session history index —
    but only the 12 confirmed-improved cards from that pass were patched
    into the shipped deck; `build-flashcards.mjs` no longer produces this
    bug on future regenerations, but a full regeneration wasn't done
    because it also pulls in unrelated upstream dictionary-data drift that
    reshuffles rank-based card IDs. A word-content-derived ID scheme would
    remove that risk if a full regen is ever wanted.)
13. ~~No cumulative/interleaved cross-unit review layer~~ — **done**, see
    "Review checkpoints" in Architecture above (07-08-2026).
14. **Minor content duplication, flagged but not fixed**: `vocabulary.js`'s
    `cuñado`/`cuñada` (A2 and B2, different examples, looks unintentional);
    `idioms.js`'s "a buenas horas(,) mangas verdes" comma/no-comma
    duplicate; `regional.js`'s near-duplicate `le_lo`/`leismo` sections.

**Product/account gaps:**
15. No password reset flow — a forgotten password is unrecoverable.
16. No account deletion or personal-data export in Profile.
17. No privacy policy or terms of service page, despite storing email,
    password hashes, and free-text personal-context data indefinitely.
18. No instructor/cohort-facing view (relevant only if this is ever
    pitched at a classroom rather than a solo learner — not a bug).

**Backburnered features (deprioritized by the user, not forgotten):**
19. **Speaking** — no mic input, no pronunciation scoring. Cheapest
    starting point: the Web Speech API's `SpeechRecognition` counterpart
    to the TTS already in use — no new backend needed, just a new
    exercise type + client-side recording flow. A scoring rubric needs
    real design thought (recognition confidence ≠ pronunciation quality).
20. **Dedicated listening-comprehension exercises** — the existing
    `SpeakButton` only replays visible text, it's not an assessed skill.
    Needs a new exercise type where audio is the only information given.
21. **An open-ended writing-prompt exercise type** — every current type has
    one matchable correct string. Cheapest $0-compatible version: show a
    model answer after the learner writes their own (Flashcards-style
    self-assessment), don't have Gemini grade free text on every submit.
22. **Conversation/role-play exercise type** — no open-ended dialogue type
    exists.
23. **The displayed CEFR level is a grammar-only accuracy gate, not a true
    4-skill assessment.** `skill_profiles` seeds `reading`/`listening`/
    `writing`/`grammar` rows at registration, but only `grammar` is ever
    written to (`sessions/end.js`) — the other three sit frozen at their
    A1/0% defaults forever, so the Dashboard's CEFR badge reflects
    grammar/exercise-accuracy alone, not "all four skills equally" per the
    original spec above. It's also a rolling-10-session accuracy-threshold
    gate (`computeCefrLevel()`), not a proctored assessment against CEFR
    can-do descriptors — high accuracy on review-heavy sessions can
    advance the label without a real skills check across reading,
    listening, writing, and speaking. User flagged this by inspection
    (07-09-2026) after the level-tracking audit/fixes earlier that day;
    deliberately deprioritized — fixing it properly means wiring real
    listening/writing exercise types (items 20/21 above) into the skill
    rows, not a quick patch, and the user wants to focus on written
    content first.

**Housekeeping:**
24. **Confirm GitHub branch protection is actually enabled** on
    `smolhaj/es` — shown to the user but never verified done; no API this
    session type has access to for checking directly.
25. **Flashcards' daily new-card cap is per page-load, not per calendar
    day** — `NEW_PER_SESSION = 10` caps per visit, but reloading
    immediately offers 10 more. Low priority for solo/small-group use.
26. Cloudflare R2 (bound, unused), a secondary/fallback LLM provider, and
    explicit exponential backoff around the Gemini call are all
    unstarted, low-risk, well-scoped if picked up.
27. **CEFR-accuracy audit of `concepts.js`, phased (07-09-2026).**
    Phase 1 (research) found ~36 of 109 concepts mistagged against
    real-world CEFR (Instituto Cervantes PCIC + cross-referenced ELE
    textbook sequencing) — see `ES-HISTORY.md` for the full findings.
    **Phase A (data layer) is done**: 18 high-confidence, non-bundled
    mismatches retagged in `concepts.js`/`grammar.js`/`_gemini.js`'s
    whitelist, all consistent (zero backwards prereqs, all 109
    `grammar.js` cards re-verified to match `concepts.js` exactly).
    **Phase B (data layer) is done**: 8 new concepts split off from 6
    bundled ones that mixed two real CEFR levels —
    `irregular_present_core` (A1, ir/tener) out of `irregular_present`
    (A2, narrowed to venir/hacer/poner/salir), `gustar_basico` (A1,
    gustar itself) out of `gustar_type` (A2, narrowed to
    encantar/doler/molestar/parecer), `prepositions_core` (A1, a/de/en)
    out of `prepositions_basic` (A2, narrowed to con/sin/por/para/entre),
    `modal_verbs_core` (A1, poder/querer) out of `modal_verbs` (A2,
    narrowed to deber), `imperative_affirmative` (A2, tú affirmative) out
    of `imperative` (B1, narrowed to negative/formal commands + clitic
    placement), `relative_clauses_core` (A2, que/donde) out of
    `relative_clauses` (B1, narrowed to quien + subjunctive-in-relative
    nuance). Each original concept keeps its id at the higher/broader
    level (so no existing curriculum-unit registration or exercise
    `concept_id` reference breaks) and gains the new concept as a
    prereq; the new concept itself has no curriculum unit yet (same
    "pacing lag" pattern as Phase A — see below). The four `connectors_*`
    concepts (C1) and `reformuladores`/`generos_discursivos_formales`
    (C2) turned out **not** to need new split concepts on inspection:
    `conectores_argumentativos_basicos` (B2) already explicitly covers
    the "conversational-tier" pero/sin embargo/por eso/además subset
    with a note that the fuller C1 families build on it, so those four
    just gained it as an explicit prereq instead of a redundant new
    concept. `reformuladores`/`generos_discursivos_formales` did get one
    genuine new concept each — `reformuladores_basico` (B2, o
    sea/es decir) and `genero_informe` (B2, the informe/report genre) —
    since no B2 concept already covered that content. Total concept
    count: 109 → 117, all prereqs verified consistent (zero backwards
    deps), all 117 `grammar.js` cards synced 1:1 by cefr, `_gemini.js`
    whitelist regenerated programmatically from `concepts.js`.
    **Phase C is done**: `estilo_indirecto_basico` and
    `expresiones_probabilidad_basica` retagged B2 → B1 (their real
    level per the Phase 1 findings), moved to the B1 section of
    `concepts.js`/`grammar.js`, `_gemini.js` whitelist regenerated. Their
    two curriculum units (`reported-speech-basic`,
    `certainty-doubt-probability`, from PR #55) moved from B2's order
    range to B1's (order 21.1/21.2, right after `efficiency-emphasis`
    and before `checkpoint-b1-full`, whose `checkpointUpTo` moved
    21 → 21.2), files renamed `unit-b2-*` → `unit-b1-*` with their
    internal level comments corrected too. `argumentation-workplace`
    (the third PR #55 unit, teaching `conectores_argumentativos_basicos`
    + `registro_formal_correspondencia`, both genuinely B2) stayed put
    and was renumbered to order 25.1 to fill the gap; `checkpoint-b2`'s
    `checkpointUpTo` moved 25.3 → 25.1. Net effect: B2 back to 5 units,
    B1 to 8 — exactly undoing the B2-unit-count-parity math that
    motivated building the 3 units in the first place, since 2 of the 3
    were never really B2 content. Total concept count still 117
    (no concepts added/removed, only moved); prereqs re-verified
    consistent (`imperfect` and `present_subjunctive`, both B1, are
    these two concepts' only prereqs, so the move only tightened the
    prereq gap rather than creating a backwards one); `grammar.js`
    still 117/117 synced; `npm run build` passes.
    **Phase D is done**: dedicated WebSearch research (`cvc.cervantes.es`
    still 403s directly, so this is secondary-source-synthesized, same
    caveat as Phase 1) resolved all 5 flagged concepts. `near_future`
    (ir a + infinitive) and `obligation_infinitive` (tener que/hay que)
    both A2 → A1 — near-universally A1 content across major ELE course
    sequencing (Aula Internacional, Nuevo Prisma, etc.); their prereqs
    now point at Phase B's A1 core concepts (`irregular_present_core`,
    `prepositions_core`, `hay`) instead of the A2 originals, which is
    exactly the kind of retag Phase B's splits were meant to unblock.
    `modal_verbs`' deber question turned out to already be correctly
    resolved by Phase B + C: the obligation sense of deber is A2
    (`modal_verbs`), the probability sense (deber de) is B1
    (`expresiones_probabilidad_basica`, whose card already documents
    exactly this split) — no change needed. `imperfect_subjunctive` and
    `si_clauses` B2 → B1, matching the real-world pattern of type-2
    hypothetical conditionals (si tuviera... iría...) at B1 with type-3
    counterfactual-past (si hubiera... habría..., already
    `pluperfect_subjunctive`, staying B2) a level above; `si_clauses`'
    card narrowed to types 1-2 only, removing the type-3 content it
    used to duplicate (that content requires a B2 prereq and is already
    owned by `pluperfect_subjunctive`'s own card). `controladores_contacto`
    C2 → B2, on direct PCIC evidence that this exact category of
    discourse marker (¿no?/¿eh?/confirmation-seeking tags — the
    concept's own listed ¿verdad?, fíjate, oye) is introduced at B1-B2,
    not C2; dropped its now-backwards `registro_formal_informal` (C2)
    prereq since nothing in the concept's actual content depends on
    register-switching knowledge. Concept count unchanged at 117 (moves
    only); prereq graph re-verified consistent; `grammar.js` re-synced
    117/117; `_gemini.js` whitelist regenerated; `npm run build` passes.
    **The 3 concepts pulled from Phase A are now resolved too**
    (07-09-2026, dedicated WebSearch research, same `cvc.cervantes.es`-
    403 caveat as every prior phase): `operadores_discursivos` (de
    hecho, en realidad, por cierto) C2 → B2 — direct evidence these
    exact connectors appear in B2 teaching materials, and "claro" (the
    same PCIC discourse-operator subcategory) starts at B1; its prereq
    repointed from `reformuladores` (C2) to `reformuladores_basico`
    (B2). `estructuradores_informacion` (por una parte…por otra, en
    primer lugar…en definitiva) C2 → C1, and `registro_formal_informal`
    (register switching) C2 → C1 — PCIC evidence that "marcas de
    registro... se inicia en B2 y es abundante en C1" (register marking
    begins at B2, is abundant at C1) and that C1 can-do descriptors
    explicitly include register adaptation, meaning C2 was overclaiming
    for what's actually core C1 content. All three retags were
    downward moves, which can't create backwards prereqs for anything
    depending on them (`pares_registro_lexico` and
    `generos_discursivos_formales`, both C2, only got a safer margin).
    Concept count still 117; prereq graph, `grammar.js` (117/117), and
    `_gemini.js` whitelist all re-verified; `npm run build` passes.
    **Still open**:
    - **A larger, newly-discovered systemic issue**: every one of the
      18 Phase-A-retagged concepts is currently *taught* (in
      `curriculum/index.js`'s unit sequence) 1-2 levels later than its
      corrected CEFR level — e.g. `present_perfect` is now correctly
      tagged A2, but Unit 22 (B2) is still the only place it's taught.
      Not a "used before taught" bug like the original tener/ir case
      (nothing contradicts it), but it does mean the structured Learn
      path systematically lags real-world CEFR pacing. Fixing this
      means moving/rewriting curriculum unit content, not just
      retagging metadata — a genuinely large undertaking, scoped as
      its own future phase rather than folded into this one.
    Directly relevant to writing true-A1 reading-passage content, since
    the story needs to know what a learner has actually been taught by
    each level. See "Standing directives" above.
28. **CEFR-accuracy audit of `vocabulary.js` and `verbs.js` (07-09-2026,
    same session as item 27).** Different methodology than `concepts.js`
    since these aren't sequenced by curriculum order — `vocabulary.js`
    has a stored `frequencyRank` per word, so a mechanical
    frequency-consistency scan (does a word's real-world frequency match
    its assigned cefr band?) flagged candidates, which 3 parallel
    research agents then verified/corrected; `verbs.js` has no stored
    frequency data, so a 4th agent cross-referenced all 147 verbs
    against real canonical Spanish-verb-frequency sources directly.
    **Important methodology finding**: raw frequency alone produces
    false positives for *thematic/functional* vocabulary (colors, food,
    emotions, family, school items) — these are legitimately taught
    early despite low corpus frequency, because they're taught for
    communicative necessity, not frequency. Excluding those domains
    from the "under-leveled" check left a much smaller, high-confidence
    signal, entirely on the "over-leveled" side: common, everyday words
    (mostly verbs, nouns, adjectives, connectors) tagged 2+ CEFR bands
    higher than warranted — the same over-leveling pattern that started
    the whole audit (the original `venir` bug).
    **Result**: 167 of 1439 `vocabulary.js` words retagged (e.g.
    `alcanzar`, `establecer`, `objetivo`, `equipo`, `dispositivo`,
    `¿no?` — all were much more basic/common than their B2/C1/C2 tags
    suggested), 11 of 147 `verbs.js` verbs retagged (most notably
    `llover`/`nevar`, weather verbs mistagged C2 despite being taught in
    the first A1 weather unit of every real course — flagged and
    confirmed exactly as suspected before dispatching the research;
    also `haber`, `correr`, `oír`, `seguir`, `despertarse`, `vestirse`,
    `preferir`, `valer`, `impedir`). Item counts unchanged in both files
    (retags only). ~100 additional flagged vocabulary candidates were
    reviewed and kept as-is — either genuinely formal/legal/literary
    register despite frequency (e.g. `esclarecer`, `vulnerar`,
    `menoscabar`) or flagged "uncertain" by the research agents rather
    than guessed. `idioms.js` and `false-friends.js` were explicitly
    scoped OUT of this phase (user chose verbs+vocabulary only) and
    remain unaudited against real-world standards. See `ES-HISTORY.md`
    for full methodology and per-batch findings.
29. **Curriculum-unit-content pacing-lag fix, both phases done (07-09-2026)**
    — the systemic issue flagged in item 27 above. Full data pull found: 8
    concepts (all from Phase B's splits) had **zero** teaching unit at
    all, 8 units had a minor 1-concept lag (left as-is, documented only —
    a learner isn't blocked, just reinforced slightly late), and 7 units
    no longer cohered at their assigned level at all (`probability-aspect`
    had **zero** C1 content left after its 3 concepts all moved to
    B1/B2; `subjunctive-deep-dive` was 3/4 B1). **Phase 1**: wrote new
    sections + practice for all 8 orphaned concepts, folded into 5
    existing units — `irregular_present_core`/`modal_verbs_core`/
    `gustar_basico` into `everyday-actions` (A1, placed here rather than
    the A2 units that still teach the higher rest, since an A1 concept in
    an A2-positioned unit wouldn't actually fix the pacing mismatch);
    `prepositions_core` into `asking-questions` (A1); `imperative_
    affirmative` into `obligations-requests` (A2); `relative_clauses_core`
    into `comparing-describing` (A2); `reformuladores_basico`/
    `genero_informe` into `argumentation-workplace` (B2, already the
    natural home). **Phase 2**: restructured the 7 incoherent units by
    content-coherence, not just whole-unit relabeling — classified each as
    either a tightly-sequenced arc (don't split; `subjunctive-deep-dive`,
    where si_clauses' practice literally depends on imperfect_subjunctive's
    forms taught 2 sections earlier in the same file — relabeled B2→B1
    wholesale instead, keeping `perfect_subjunctive` as a documented "taught
    early" exception) or a loose grab-bag (safe to split; the other 6).
    Result: `perfect-tenses` lost `present_perfect` to a new section in
    `what-happened` (A2), which now teaches participle formation from
    scratch since it's the first place a learner meets it — `perfect-tenses`
    recaps rather than re-teaches. `probability-aspect`'s slot was
    repurposed in place (id kept, for progress-tracking safety) into a new
    B1 "Verb Nuance" unit (`futuro_probabilidad`, `perifraseis_avanzadas`,
    plus `verbos_preposicionales`/`cuantificadores` moved in from the old
    `fixed-expressions`); its `condicional_probabilidad` moved out to a
    brand-new B2 unit, `subjunctive-counterfactuals-concession` (reusing
    the order-24 slot vacated when `subjunctive-deep-dive` relabeled to
    B1), alongside `pluperfect_subjunctive` and `subjunctive_adjective_
    clauses` (both split off `subjunctive-limits`, which keeps its 2
    still-correctly-C1 concepts) and `aunque_concessive` (split off
    `fixed-expressions`) — all four share an unreal/hypothetical-reasoning
    theme. `fixed-expressions` gained `estructuradores_informacion` and
    `registro_formal_informal`, both split off C2 units `discourse-markers`
    and `register-stance` (each now down to their one remaining
    genuinely-C2 concept: `reformuladores`, `modalizacion_epistemica`);
    the other two split-off concepts, `operadores_discursivos` and
    `controladores_contacto`, folded into `argumentation-workplace`
    (already the workplace/conversational-register home). Every relocated
    section's prose, examples, and practice moved verbatim — the only
    wholly new prose this phase is `what-happened`'s participle-formation
    section. Verified: concept-lag script (0 duplicate ids, 0 untaught
    concepts, 0 double-taught concepts, exactly 11 accepted minor/
    documented lags — same list as before, now covering the *whole*
    curriculum, not just the units left untouched); every touched unit's
    practice `concept_id`s cross-checked against both `concepts.js` and its
    own unit's `concepts` array; `npm run build` passes.

## Session history index

- **07-09-2026** — 22 new verbs added to `/verbs` (9 C1, 14 C2 — one
  C1 candidate dropped as a duplicate of an existing B2 entry), closing
  the "zero C2 verbs" gap. Two parallel background agents, each
  WebSearch-verifying every conjugation individually; both independent
  spot-checks against RAE's own dictionary held up exactly.
- **07-09-2026** — 3 new B2 curriculum units (reported speech basics,
  certainty/doubt/probability, argumentation + formal correspondence)
  closing B2's unit-count gap (4 → 7, parity with neighboring levels).
  4 new grammar concepts added first as standalone groundwork, then 3
  parallel background worktree agents wrote the unit content against
  them. Queue continues with C1/C2 verbs, then a new reading-passages
  section (scoped, not yet started) — see "What still needs to be built."
- **07-09-2026** — CEFR-tagged idioms.js (166) and false-friends.js (110)
  in parallel via two background worktree agents; wired level filters into
  both pages. First step of a "bang out written content" push.
- **07-09-2026** — Flashcard deck content fix: found and fixed the
  "nested-gloss category header" bug in `build-flashcards.mjs` (e.g.
  "venir" showing "Senses relating to figurative movement" instead of "to
  come, to arrive"); patched 12 confirmed-improved cards in place without
  a full regeneration (which would've reshuffled rank-based IDs against
  existing `flashcard_progress` rows — see punch-list item 12).
- **07-09-2026** — Flashcards rebuilt Anki-style: learning/relearning
  steps, same-session requeue, leech flagging, undo, suspend, keyboard
  shortcuts, interval preview, and a new `/flashcards/stats` page.
  `vocabulary_items` deliberately untouched (scoped to Flashcards only).
- **07-09-2026** — Spaced repetition + progress-tracking deep-dive audit:
  4 real bugs found and fixed (new vocab words invisible for ~3 days;
  fossilization off-by-one + permanently-stuck flag; dashboard CEFR level
  frozen at A1 forever; CEFR leveling unresponsive after enough sessions
  and unable to downgrade from C2). Verified live via `wrangler pages dev`
  + D1 with simulated accelerated time.

Every section below was moved to `ES-HISTORY.md` as part of a 07-08-2026
cleanup pass (this file had grown to ~1900 lines of accreted session
narrative). One-line pointer + date each — see `ES-HISTORY.md` for the
full account of any of these.

- **07-03-2026** — Implementation status snapshot at the time (superseded
  by "Current implementation status" above).
- **07-03-2026** — Content accuracy audit process and findings across
  verbs, grammar, false friends, pronunciation, regional, vocabulary, and
  idioms — the real errors found and the batching/verification method used.
- **07-03-2026** — Original structured-curriculum build notes (Unit 1 live,
  early architecture decisions — superseded by "Architecture" above).
- **07-04-2026** — Product audit findings: skill-coverage gaps (speaking/
  listening/writing) and a "no streaks" messaging contradiction.
- **07-04-2026** — Naming/positioning changes: Get Started → Learn rename,
  dashboard streak-stat removal.
- **07-04-2026** — Navigation reorganization: unified desktop/mobile nav,
  surfaced 4 previously nav-less reference pages.
- **07-04-2026** — Dashboard visual polish: removed redundant CEFR badge,
  fixed stats-grid dead space.
- **07-04-2026** — C1 curriculum build: units 26-29, the first tier past B2.
- **07-04-2026** — A1/A2 content gaps filled: plural nouns, basic
  comparatives.
- **07-04-2026** — Bug fix: lessons loading mid-scroll instead of at the top.
- **07-04-2026** — Final pre-break site scan: full-route QA pass results.
- **07-04-2026** — Content cleanup: 49 cross-batch duplicate entries found
  and deduped in `vocabulary.js`.
- **07-04-2026** — Flashcards bugs found and fixed: proper-noun example-
  sentence contamination, silent review-save failures.
- **07-04-2026** — Flashcards Bug 2 root cause: `schema-v7.sql` likely
  never applied to production D1.
- **07-04-2026** — Production outage: `schema-v8.sql` applied locally but
  never to production D1 (the incident "Deployment & ops conventions"
  above's remote-migration rule comes from).
- **07-04-2026** — Free Resources page build.
- **07-04-2026** — Flashcards feature build: architecture, licensing
  research, and two more bugs found post-launch (superseded by
  "Architecture" above for current state).
- **07-04-2026** — Adaptive session "Drill this concept" focus-mode bug:
  two compounding root causes plus a testing-methodology lesson about
  asserting on semantic content, not just structural rendering.
- **07-05-2026** — Full-site four-lens audit (frontend/backend/curriculum
  lenses) — every still-open finding is merged into "What still needs to
  be built" above; this entry has the full per-finding detail and the
  lower-priority findings already resolved.
- **07-08-2026** — C2 tier build: units 30-37, the `verbs.js` tense
  extension, the Unit 26 duplicate-concept fix, and the `CONCEPT_LABELS`/
  CEFR-array consolidation.
- **07-08-2026** — Review checkpoints: 9 cumulative interleaved-review
  units, scoped via MC questions, zero new content/schema — full current
  state in "Architecture" above, decision narrative and a git-reflog
  recovery incident in this entry.
- **07-09-2026** — C1/C2 vocabulary gap fill: `vocabulary.js` 1005 → 1439
  words, found via a plain file-size comparison across content files, not
  a punch-list item. 4 parallel research/promotion batches, 4 new domains,
  a new `register` field — full current state in "Architecture" above.
- **07-09-2026** — Curriculum-unit-content pacing-lag fix, both phases:
  Phase 1 folded 8 orphaned concepts into 5 existing units; Phase 2
  restructured the 7 units the CEFR audit had left incoherent, splitting
  loose grab-bags apart, relabeling one tightly-sequenced arc wholesale
  instead of splitting it, and creating one new consolidated B2 unit
  (`subjunctive-counterfactuals-concession`) for four concepts that all
  share an unreal/hypothetical-reasoning theme — full account in
  punch-list item 29.
- **07-09-2026** — Reading section shipped: 2 original A1 passages at
  `/reading`, three corrected passes (grammar-level QA, then a
  vocabulary-glossing overshoot, then a switch to real-data-only matching
  reusing `ClickableSpanish` sitewide) surfacing and fixing 49 real
  `vocabulary.js` gaps along the way — full current state in
  "Architecture" above, full narrative in `ES-HISTORY.md`.
- **07-10-2026** — Reading comprehension exercises: both passages got a
  `questions` array graded via the shared `ExerciseCard`/`Feedback`
  components; extracting the grading logic into `src/lib/answerMatching.js`
  closed punch-list item 5 (accent-stripping) as a side effect — full
  current state in "Architecture" above.
- **07-10-2026** — "Reading" renamed to "Readings" throughout (page/nav
  label, `/readings` route, `Readings.jsx`/`.module.css`,
  `src/content/readings.js`) — full current state in "Architecture" above.
