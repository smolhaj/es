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
- **Structured "Learn" curriculum — all 38 taught units (0-37), A1 through
  C2, complete, plus 9 cumulative review checkpoints (47 total).** See
  "Architecture" above.
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

38 taught units (0-37) plus 9 review checkpoints (47 total), A1 through
C2, at `/learn`. Alongside the adaptive Gemini
session and reference pages — doesn't replace either.

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

`src/content/verbs.js` — 125 verbs, 17 tenses each (`TENSES`/`TENSE_LABELS`
exports drive the UI generically): present, preterite, imperfect, future,
conditional, present subjunctive, imperfect subjunctive, 6 compound tenses
(present/pluperfect/future/conditional perfect + present/pluperfect perfect
subjunctive), the literary pretérito anterior and futuro de subjuntivo, and
imperative (affirmative/negative). Imperative has no `yo` form — stored as
`yo: '—'` rather than special-cased in the renderer. Regenerable via
`scripts/extend-verb-tenses.mjs`, which mechanically derives all of this
from each verb's existing present/preterite/subjunctive data plus a small
set of WebSearch-verified irregular-form exception lists (tú-imperative
irregulars, irregular participles, reflexive enclitic-pronoun placement) —
see `ES-HISTORY.md`, 07-08-2026, if regenerating and something looks wrong.

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
5. **`Lesson.jsx`'s curriculum practice grading doesn't strip accents.**
   `normalizeAnswer()` never strips accents and only trims trailing
   punctuation. A beginner typing "Por que" for "¿Por qué...?" is marked
   wrong throughout the A1 curriculum. The fix exists and isn't reused:
   `stripAccents()` in `src/lib/dictionary.js`.
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

**Housekeeping:**
23. **Confirm GitHub branch protection is actually enabled** on
    `smolhaj/es` — shown to the user but never verified done; no API this
    session type has access to for checking directly.
24. **Flashcards' daily new-card cap is per page-load, not per calendar
    day** — `NEW_PER_SESSION = 10` caps per visit, but reloading
    immediately offers 10 more. Low priority for solo/small-group use.
25. Cloudflare R2 (bound, unused), a secondary/fallback LLM provider, and
    explicit exponential backoff around the Gemini call are all
    unstarted, low-risk, well-scoped if picked up.

## Session history index

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
