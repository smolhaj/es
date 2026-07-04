# ES.md — Project Directives & Build Guide

This file captures the instructions, design decisions, and lessons learned
across the sessions that specified and built this site. Read it before making
non-trivial changes — it's the accumulated context a fresh session won't have.

## What this project is

A Spanish learning site — branded **"Capi"** (capybara mascot) — going from
complete beginner to full fluency (long-term goal: **C2 mastery**). It's a
parallel project to a sibling Japanese-learning site; this one was scoped
independently via a 25-question interview with the user, then written up as a
full spec before any code existed. That original spec (reproduced below)
is the source of truth for intent — the codebase should be judged against it,
and gaps between spec and implementation are called out explicitly further
down so future sessions know what's still open.

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

## Current implementation status vs. spec (gap analysis)

**Built** (goes well beyond Phase 1 — mastery tracking, FSRS, a structured
curriculum, and audio all shipped):
- Auth (JWT, D1-backed `users` table)
- Gemini-driven session loop with graceful fallback to a large static
  exercise bank (`functions/api/sessions/_gemini.js`), fallback path grades
  answers locally rather than always marking them wrong
- FSRS-4.5 vocabulary spaced repetition (`functions/_lib/fsrs.js`)
- Concept mastery tracking with fossilization detection (3+ session errors)
  and explanation-style rotation
- Reference pages: grammar, verbs (conjugation tables), vocabulary browser,
  idioms, false friends, pronunciation guide, regional differences
- Dashboard, session history, profile
- **Structured "Get Started" curriculum** — thematic units with reading,
  vocab, and embedded practice, separate from the adaptive session. See
  "Structured curriculum: architecture and status" below.
- **Audio/TTS** — via the Web Speech API (`src/hooks/useSpeech.jsx`,
  `SpeakButton`), not Google Cloud TTS as the original spec proposed — same
  outcome (pronunciation playback), simpler and genuinely free at any scale
  since there's no per-character billing.
- **Clickable Spanish words** — click any word/phrase in a lesson for a
  popover with translation, CEFR level, example, and pronunciation. See
  `src/lib/dictionary.js` / `ClickableSpanish.jsx`, and the homograph-safety
  gotcha below before extending this elsewhere.
- **Multi-source cross-referencing for accuracy** — fully operationalized,
  not just planned. See "Content accuracy audits" below for the process and
  real results (verbs 125/125 verified, grammar 79/79 verified, false
  friends/pronunciation/regional all verified — see "What still needs to be
  built" for what's left).

**Not yet built** (real gaps against the original spec):
- **Conversation role-play scenarios** — no exercise `type` for open-ended
  dialogue exists (current types: `multiple_choice`, `fill_blank`,
  `translation_to_spanish`, `translation_to_english`, `error_correction`).
- **Real media integration** (news/songs/TV clips) — not present.
- **Cloudflare R2** — not bound in `wrangler.toml`, not used.
- **Groq secondary LLM fallback** — current fallback on Gemini failure is
  local-graded static exercises, not a secondary LLM call.
- **Explicit backoff/rate-limit handling** — current `_gemini.js` catches
  *any* failure (including rate limits) and falls straight to static
  fallback; there's no retry-with-backoff before giving up.

See "What still needs to be built" near the end of this file for the full,
current, prioritized punch list — the two sections above describe the
original spec's gaps specifically; the punch list covers everything
outstanding, spec or not.

---

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

## Content accuracy audits (established this session)

Given the volume of existing content (79 grammar concepts, 125 verb
conjugation tables, 1000+ vocabulary items, 167 idioms, 475 fallback
exercises) was originally authored without external verification, a
systematic externally-verified audit was run batch-by-batch:

- **Batching rule**: batches touching the *same file* must run sequentially,
  never in parallel — concurrent agents editing one file race and corrupt
  each other's changes. Batches touching *different* files can run in
  parallel. (Verbs and grammar concepts got their own parallel tracks since
  they're separate files; vocabulary/idioms/exercises should follow the same
  pattern when their turn comes.)
- **Verification method**: each batch agent reads its assigned slice, then
  WebSearches an authoritative source per item (WordReference conjugator/
  SpanishDict for verbs, studyspanish.com/spanishdict.com/guide/RAE for
  grammar rules, RAE/dialectology sources for regional claims) before fixing
  anything — never edits based on the agent's own assumption of what's wrong.
- **Real errors found this way** (as a sense of the actual error rate — low,
  but nonzero, which is exactly why the audit was worth doing): missing
  accent in `preferir`'s imperfect nosotros form, an unsupported/fabricated
  claim about dropping "a" in "ir a + infinitive," a mislabeled false-friend
  entry (preservar vs. preservativo — the trap word was wrong), a
  syllabification rule error in pronunciation.js, a backwards rule in
  `subjunctive_adjective_clauses` (claimed indicative is typical after
  superlatives like "el mejor libro que…" — actually subjunctive is typical
  there), and in `regional.js`: a mislabeled slang term (bacán tagged
  Argentine, actually more Peru/Chile/Cuba — "copado" is the real Argentine
  term), a wrong jalar/jamar regional attribution, a vos-imperative typo, an
  imprecise guagua/"baby" regional range, an overstated present-perfect-vs-
  preterite Spain/Latin-America binary (RAE: this verb form shows the
  *greatest* regional variation in Spanish, not a clean two-way split), a
  gender-agreement error on "pochoclo" (popcorn, Argentina), and two
  overstated "Latin America never uses leísmo" claims (highland Ecuadorian
  Spanish has its own well-documented generalized leísmo).
- **Audit status as of this writing**: verbs 125/125 done, grammar concepts
  79/79 done, false friends/pronunciation/regional all done. **Not yet
  audited**: `vocabulary.js` (~1056 items), `idioms.js` (167 items),
  `FALLBACK_EXERCISES` in `_gemini.js` (475 items) — these are next per the
  batching rule above (each is one file, so each needs its own sequential
  chain of batches; the three files can run in parallel with each other).
- **Background-agent session limits**: long batches can hit account-level API
  session limits and terminate mid-edit. Always check `git diff` on the
  target file after an agent completes/fails before trusting its self-report
  — a failed agent may have partially edited a file before being cut off.
  Commit verified-good partial work rather than discarding it; leave a
  follow-up task for what's still incomplete. **A session-limit interruption
  can also land mid-write with a corrupted-but-plausible-looking file** — two
  curriculum unit files were cut off right after the write with small
  string-escaping bugs (a stray extra backslash, an unescaped apostrophe
  inside a single-quoted string) that made them look complete but fail
  `node --check`. Always run `node --check` on a freshly-written file before
  trusting it, not just before committing — the file can *look* finished
  (proper closing braces, trailing comment block) while still being broken
  Just past that point.

## Structured curriculum: architecture and status

The "Get Started" guided path lives alongside the existing adaptive Gemini
session and reference pages — it doesn't replace either.

**Architecture**:
- `src/content/curriculum/index.js` — `UNIT_METADATA` is the full 24-unit
  outline (id, order, level, title, concepts, summary) for every planned
  unit, written or not. `CONTENT` maps unit id → the imported content module
  for units that have been written. `getUnit(id)` merges the two;
  `UNITS` (metadata + `comingSoon` flag) drives the Get Started page's
  "coming soon" cards for unwritten units.
- `src/content/curriculum/unitNN-slug.js` — one file per written unit,
  matching the existing per-domain content file pattern (`verbs.js`,
  `idioms.js`, etc.). This means future units can be written by parallel
  agents with zero file-conflict risk — each is a standalone file only
  registered in `index.js` afterward (by a human/orchestrating session, not
  the writing agent itself, to avoid two agents racing on `index.js`).
- Content shape (see any `unitNN-*.js` file for a live example):
  `{ sections: [{ heading, paragraphs, examples, commonMistakes }], vocab: [{
  es, en, example, exampleEn }], practice: [...exercise objects, same shape
  as FALLBACK_EXERCISES] }`.
- `schema-v6.sql` / `functions/api/curriculum/progress.js` — `module_progress`
  table (`user_id`, `module_id`, `completed_at`), tracks per-unit completion.
  Fully open, no gating — matches the landing page's "no streaks, no points"
  positioning.
- Lesson vocab is seeded into the *existing* FSRS-scheduled `vocabulary_items`
  queue via `api.vocabulary.add` (best-effort, ignores 409 "already exists"),
  not a separate silo — so spaced-repetition benefits apply automatically.
- Practice exercises inside a lesson are graded **locally in the browser**
  (`src/pages/Lesson.jsx`, same normalize-and-compare logic as the Gemini
  fallback path), not via a backend round-trip — instant feedback, no
  dependency on Gemini/D1 being reachable for the practice loop itself (only
  the final mark-complete call hits the API, and that's best-effort/non-
  blocking).
- New registrations land on `/get-started` instead of `/dashboard`
  (`Auth.jsx`); existing logins go to `/dashboard` as before.

**Status — 15 of 24 outlined units written (all of A1 + A2, the full
beginner-through-elementary tier)**: Unit 1 Saying Hello, Unit 2 Numbers &
Time, Unit 3 People & Things, Unit 4 Who You Are, Unit 5 Where You Are,
Unit 6 Everyday Actions, Unit 7 Asking Questions, Unit 8 Your Daily
Routine, Unit 9 Likes & Dislikes, Unit 10 People & Things Around You, Unit
11 What Happened, Unit 12 Obligations & Requests, Unit 13 Right Now &
Soon, Unit 14 Comparing & Describing, Unit 15 Irregular Verbs in the
Present. **Units 16-24 (B1/B2) are outlined in `UNIT_METADATA` but not
written** — see "What still needs to be built" for the full remaining list
and the exact process to follow (mirrors how 2-15 were built: one
dedicated content-writing agent per unit, each reading
`unit01-saying-hello.js` as the quality/shape reference, `ES.md`'s
Pedagogical Principles section, and the relevant `concepts.js` +
`grammar.js` entries before writing, with mandatory WebSearch verification
of every Spanish claim).

---

## Flashcards: architecture and status

A separate Anki-style flashcard deck (top 5,000 Spanish words by frequency),
distinct from the curriculum's lesson vocabulary and the adaptive session's
`vocabulary_items` FSRS queue. Built in response to an explicit request for
"Anki style flashcards... top 5000 or so Spanish words," scoped via
AskUserQuestion into 4 decisions: **separate deck** (not merged into
`vocabulary_items`), **true flip-card self-rating UI** (not typed/graded
exercises), **word + translation + example sentence** per card, **all 5000
at once** (not a smaller MVP first).

**Licensing research (done before building anything)**: the well-known
"Spanish 5000 words" Anki decks on AnkiWeb are built from *A Frequency
Dictionary of Spanish* (Davies & Davies, Routledge) — a paid book — and the
decks themselves carry no clear reuse license, several bundling Azure TTS
audio with its own terms. Redistributing someone else's exact deck content
would be a real copyright risk. Instead, the deck is generated from openly-
licensed data other legitimate deck-builders derive from:
[hermitdave/FrequencyWords](https://github.com/hermitdave/FrequencyWords)
(OpenSubtitles-derived word counts, CC BY-SA 3.0) via
[doozan/spanish_data](https://github.com/doozan/spanish_data), which
packages that same frequency data already lemmatized (grouping inflected
forms like soy/eres/es/somos under "ser") with part-of-speech tags
(`frequency.csv`), a Spanish→English dictionary derived from Wiktionary
(`es-en.data`, CC BY-SA), and example sentences from Tatoeba.org
(`sentences.tsv`, CC BY 2.0 France). Attribution for all three is shown in
the Flashcards page footer, as CC BY-SA/CC BY require.

**Architecture**:
- `scripts/build-flashcards.mjs` — one-time/rerunnable Node pipeline. Run
  with `node scripts/build-flashcards.mjs`; it downloads the 3 source files
  into `.cache/flashcard-data/` (gitignored, ~60MB, only fetched once) and
  writes `src/content/flashcards/frequency-5000.js`. Not part of the app's
  runtime — purely a build-time data generation step, so the 5000-card
  lookup involved zero LLM API calls (keeps to the $0 cost architecture).
- Card selection logic (all in the pipeline script, worth knowing if
  regenerating): sorts `frequency.csv` by count descending, dedupes by
  spelling; for each candidate, looks up `es-en.data` and **picks the
  dictionary sense whose part-of-speech matches `frequency.csv`'s reported
  pos** — this was a real bug caught during review: naively taking the
  first dictionary entry gave "de" → "letter: d" and "y" → "letter: ye,
  i griega" instead of the actual preposition/conjunction, because
  Wiktionary often lists a minor "letter name" sense before the dominant
  grammatical one for short function words. Filters out `letter`/`suffix`/
  `prefix` pos categories and `surname`/`given name`/`abbreviation of`-style
  glosses (not useful vocabulary). Combines up to 2 gloss lines per word,
  flattening and deduping at the sub-sense level first (individual gloss
  lines can themselves be "; "-joined lists of near-synonyms, e.g. "que"'s
  gloss is literally "who; that" — naively joining 2 such lines produces
  visibly repeated senses). Looks up the shortest matching example sentence
  per lemma from `sentences.tsv`'s lemma-tagged column (~95% of the final
  5000 cards have one; the rest get `example: null` and the UI just omits
  that part of the card).
- `src/content/flashcards/frequency-5000.js` — the generated static content
  (`{ id, es, pos, en, example, exampleEn, rank }[]`, 5000 entries, ~800KB).
  Loaded via a **dynamic `import()`** in `Flashcards.jsx`, not a static
  import — Vite code-splits it into its own chunk so visiting any other
  page never downloads it (verified: builds as a separate
  `frequency-5000-*.js` chunk, ~257KB gzipped, versus the ~272KB gzipped
  main bundle).
- `schema-v7.sql` / `functions/api/flashcards/{progress,review}.js` — a new
  `flashcard_progress` table (`user_id`, `card_id`, FSRS columns, same
  shape as `vocabulary_items`'s FSRS columns) storing only per-user
  scheduling state — the card *content* stays static/global in the
  frontend bundle, never duplicated server-side. Reuses the exact same
  `functions/_lib/fsrs.js` `scheduleReview()` used by the vocabulary
  review loop (grade scale 1-4 = Again/Hard/Good/Easy, identical to
  Anki's own convention — no new SRS math needed).
- `Flashcards.jsx` builds each session's queue client-side: due cards
  (already reviewed, `dueAt <= now`, sorted soonest-first) plus new cards
  (never reviewed, in frequency-rank order) fill up to `SESSION_SIZE = 20`,
  with new cards additionally capped at `NEW_PER_SESSION = 10` even if
  there are no due reviews yet — this mirrors Anki's own new-card-intro
  cap. **Known simplification vs. real Anki**: the cap is per page-load,
  not a true calendar-day quota — reloading the page after finishing a
  session's new cards will introduce another 10 immediately rather than
  waiting until tomorrow, since there's no "new cards introduced today"
  counter. Verified this is what actually happens (graded 10 cards "Good"
  in a test session, all scheduled ~3 days out per FSRS, reload
  immediately offered 10 *more* new cards rather than an empty state) —
  acceptable for a $0 solo-use MVP, but a real per-day counter would be a
  natural follow-up if this becomes a problem in practice.

**Status**: shipped and verified end-to-end locally (registration → first
flashcard session → flip → grade all 4 ways → session-complete screen →
reload correctly pulls the next batch → confirmed FSRS state persisted
correctly in D1). Linked from NavBar (desktop + mobile), Dashboard's
reference-link row, at route `/flashcards`.

---

## Deployment & ops conventions (established this session)

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

## Git/PR workflow used this session

- Feature branch `claude/site-setup-deployment-d15kib` was reused across many
  rounds of work; **after each merge, Cloudflare/GitHub auto-deletes the
  remote branch**, so the next push needs a fresh `git push -u` (not
  force-push) rather than assuming the remote ref still exists.
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

## Code/design gotchas discovered this session

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

Prioritized punch list as of this writing. If you're picking this project up
in a new session, this is the place to start. Nothing below is blocked on a
design decision — each item's approach is already established by precedent
elsewhere in the codebase; follow the referenced pattern.

0. **Flashcards daily new-card cap is per page-load, not per calendar
   day.** See the "Flashcards: architecture and status" section above —
   `NEW_PER_SESSION = 10` in `Flashcards.jsx` caps new cards per session
   visit, but nothing stops a user from reloading the page immediately and
   getting 10 more. A real fix needs a small "new cards introduced today"
   counter (e.g. a `new_cards_today`/`day` pair in a settings-ish row, or
   derive it from counting `flashcard_progress` rows whose
   `last_reviewed_at` falls on today's date and `review_count = 1`).
   Low priority — acceptable for solo/small-group $0 use — but worth fixing
   if this becomes a real multi-user product.
1. **Curriculum units 16–24 (B1/B2, not yet started).** Units 1-15 (all
   of A1+A2) are done and live — units 9-15 needed a second attempt after
   the first parallel batch hit a shared account session-limit mid-batch
   (all 7 agents died in the research phase before writing anything; the
   retry succeeded cleanly). Units 16-24 are fully outlined in
   `UNIT_METADATA` in
   `src/content/curriculum/index.js` (id, level, title, concepts, summary
   already decided — do not re-litigate the outline) but have no content
   file yet, so `GetStarted.jsx` renders them as "Coming soon." To write
   one: create `src/content/curriculum/unitNN-slug.js` matching the shape
   used by `unit01-saying-hello.js` (`{ sections: [{ heading, paragraphs,
   examples?, commonMistakes? }], vocab: [{ es, en, example?, exampleEn? }],
   practice: [...] }`), WebSearch-verify grammar claims against authoritative
   sources the way units 1–7 were (don't just generate plausible-sounding
   content), run `node --check` on the file immediately after writing (session
   rate-limit interruptions have corrupted files mid-write before — see
   "Background-agent session limits" below), then wire it into `index.js`
   (add the import and the `CONTENT` map entry — the metadata entry already
   exists). Batch by CEFR level (finish B1 = units 16–20 before moving
   to B2) using one agent per unit, run in parallel since each unit is a
   distinct file. Update this list as units land.
3. **Content accuracy audits — 3 of 6 content files still unaudited (tasks
   #10–12).** `vocabulary.js` (~1056 items), `idioms.js` (167 items), and
   `FALLBACK_EXERCISES` in `functions/api/sessions/_gemini.js` (475 items)
   have never been cross-referenced against authoritative sources, unlike
   `verbs.js` (125/125 audited), `grammar.js` (79/79 audited), and
   `false-friends.js`/`pronunciation.js`/`regional.js` (all audited, 7 real
   errors found and fixed in `regional.js` alone — see "Content accuracy
   audits" above for the full list). These three are independent files, so
   they can be audited in parallel by three separate agents. Follow the same
   method used for verbs/grammar/regional: WebSearch each claim against a
   real source (RAE, SpanishDict, a grammar reference), fix in place, and
   report a tally of confirmed-correct vs. fixed items — don't just eyeball it.
4. **Extend `ClickableSpanish` beyond `Lesson.jsx`.** Currently only lesson
   pages have clickable Spanish words with the translation popover. The
   other reference pages that display Spanish text — `Grammar.jsx`,
   `Verbs.jsx`, `Idioms.jsx`, `FalseFriends.jsx`, `Pronunciation.jsx`,
   `Regional.jsx`, `VocabBrowser.jsx` — do not use it yet. Wrapping their
   Spanish text runs in `<ClickableSpanish text={...} minWords={N} />` is
   the whole job; use `minWords={2}` for mixed English/Spanish prose (to
   avoid the homograph false-positive problem — see the "Homograph
   collision risk" gotcha below) and the default `minWords={1}` for
   pure-Spanish text (example sentences, isolated words/phrases).
5. **Confirm GitHub branch protection is actually enabled.** The user was
   shown how to turn this on via the GitHub UI earlier in this project but
   it was never confirmed as done. Worth a quick check on
   `smolhaj/es` settings before this becomes a real gap (currently anyone
   with push access, including agent sessions, can push straight to `main`).
6. **Remaining gaps against the original learner-facing spec** (see
   "Original learner-facing spec" above for the full spec this was scoped
   against): conversation/role-play exercise type (currently only
   translation/fill-blank/multiple-choice exist), real media integration
   (authentic news clips/songs/TV snippets — deliberately deferred as a
   licensing/hosting cost risk, revisit only if a $0 source is found),
   Cloudflare R2 (bound in `wrangler.toml` but unused — no feature currently
   needs object storage), a secondary/fallback LLM provider (e.g. Groq) for
   when Gemini is unavailable or rate-limited, and explicit exponential
   backoff/retry handling around the Gemini call in `_gemini.js` (today a
   failure just falls through to `gradeLocally()` and `FALLBACK_EXERCISES`,
   which is graceful but doesn't retry the actual LLM call first).
7. **Minor: `regional.js` has near-duplicate `le_lo` and `leismo`
   sections.** Flagged by an audit agent as covering overlapping ground
   (not a factual error, just redundant structure). Worth consolidating
   into one section next time that file is touched, but not urgent.
8. **Done: full "brand-new-user" QA pass (this session).** Registered a
   fresh account, followed the redirect to Get Started, read and fully
   completed Unit 1 (including clicking a `ClickableSpanish` popover),
   confirmed the completion checkmark persisted back on Get Started,
   checked the Dashboard (greeting, stats, FSRS word count, nav links),
   opened Adaptive Session, and loaded all 12 reference pages
   (Grammar/Verbs/VocabBrowser/VocabReview/Idioms/FalseFriends/
   Pronunciation/Regional/Writing/Concepts/History/Profile), then logged
   out and back in. Everything passed — 23/24 automated steps green, and
   the one flaky step (`/grammar` timing out on Playwright's
   `networkidle`) was root-caused to the sandbox's network proxy being
   unreliable toward the external `fonts.googleapis.com` call, not an app
   bug (confirmed by testing `/grammar` in isolation and by checking that
   `index.html` already loads the Google Fonts stylesheet with
   `display=swap`, so real users never get blocked on it — see the
   gotcha below). No functional bugs found this pass. Screenshots taken
   at each step confirmed correct visual rendering, not just "didn't
   crash."
9. **Done: Anki-style Flashcards feature (this session).** Separate
   5,000-word frequency deck, true flip-card self-rating UI, reusing the
   existing FSRS algorithm. See "Flashcards: architecture and status"
   above for the full writeup, and item 0 above for the one known
   follow-up (per-day new-card cap).
