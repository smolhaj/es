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

**Built** (goes beyond Phase 1 already — mastery tracking and FSRS shipped
early):
- Auth (JWT, D1-backed `users` table)
- Gemini-driven session loop with graceful fallback to a large static
  exercise bank (`functions/api/sessions/_gemini.js`)
- FSRS-4.5 vocabulary spaced repetition (`functions/_lib/fsrs.js`)
- Concept mastery tracking with fossilization detection (3+ session errors)
  and explanation-style rotation
- Reference pages: grammar, verbs (conjugation tables), vocabulary browser,
  idioms, false friends, pronunciation guide, regional differences
- Dashboard, session history, profile

**Not yet built** (real gaps against the original spec — worth prioritizing
if picking this back up):
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

**Now underway** (as of the structured-curriculum effort):
- **Audio/TTS** — being built via the Web Speech API (browser-native, $0,
  no external API dependency) rather than Google Cloud TTS from the original
  spec — same end result (pronunciation playback), simpler and free at any
  scale since there's no per-character billing to worry about.
- **Multi-source cross-referencing for accuracy** — now operationalized:
  content-writing agents are required to WebSearch-verify claims against
  multiple authoritative sources (RAE, SpanishDict, WordReference, established
  grammar references) rather than writing from training knowledge alone. See
  "Content accuracy audits" below for the process this turned into in
  practice.

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
- **Real errors found this way** (as a sense of the actual error rate):
  missing accent in `preferir`'s imperfect nosotros form, an unsupported/
  fabricated claim about dropping "a" in "ir a + infinitive," a mislabeled
  false-friend entry (preservar vs. preservativo — the trap word was wrong),
  a syllabification rule error in pronunciation.js, and a regional slang
  attribution error (bacán mislabeled as Argentine when it's more Peru/
  Chile/Cuba). All fixed and verified against sources before committing.
- **Background-agent session limits**: long batches can hit account-level API
  session limits and terminate mid-edit. Always check `git diff` on the
  target file after an agent completes/fails before trusting its self-report
  — a failed agent may have partially edited a file before being cut off.
  Commit verified-good partial work rather than discarding it; leave a
  follow-up task for what's still incomplete.

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
