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

**Also built since the gap analysis above was first written**:
- **Full structured curriculum, all 25 units (0-24), A1 through B2** —
  Unit 0 is a short non-grammar orientation unit ("Why Spanish?"); Units
  1-24 cover the complete CEFR path. See "Structured curriculum:
  architecture and status" below.
- **A brutally-honest product audit** was run against this spec and
  against real Spanish-pedagogy expectations (delivered as a standalone
  report, not committed to the repo) — see "Product audit findings"
  below for what it concluded and which findings are already resolved.
- **Free Resources page** (`/resources`) — a curated list of external,
  verified-free comprehensible-input resources (YouTube channels,
  podcasts, graded readers, news, music, legal free TV/film streaming),
  addressing the spec's "real media integration" gap via *linking out*
  to existing free content rather than hosting/licensing media directly
  (a deliberate, much cheaper alternative — see that section below).
- **`ClickableSpanish` extended everywhere** — previously lesson-only,
  now wired into all 7 static reference pages too.
- Three real, user-reported/found bugs fixed this round: a proper-noun
  contamination bug in the Flashcards example-sentence generator, a
  mobile nav menu that didn't cover the screen, and a "no streaks"
  marketing claim that was contradicted by an actual streak stat on the
  dashboard (stat removed). See "Code/design gotchas" and the relevant
  sections below for each.

**Still not built** (real gaps against the original spec):
- **Speaking** — no feature at all (no mic input, no pronunciation
  scoring). Explicitly deprioritized/backburnered by the user for now;
  see "What still needs to be built" for the scoping notes if picked
  back up later.
- **Dedicated listening-comprehension exercises** — audio-first
  exercises where sound is the *only* information given (as opposed to
  the existing `SpeakButton`, which just replays text already visible
  on screen). Also explicitly backburnered by the user.
- **Open-ended writing prompts** — no exercise type exists for free
  response; every type has one matchable correct string.
- **Conversation role-play scenarios** — no exercise `type` for
  open-ended dialogue exists (current types: `multiple_choice`,
  `fill_blank`, `translation_to_spanish`, `translation_to_english`,
  `error_correction`).
- **Real media integration** *hosted directly in the app* (as opposed
  to the Free Resources page's link-out approach above) — still not
  present; likely stays that way given the licensing/hosting cost this
  spec itself flagged as a risk.
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

## Product audit findings (this session)

A full, deliberately unsparing audit was run against this file's spec and
against real second-language-pedagogy expectations — delivered to the user
as a standalone report (not committed here), summarized for continuity:

- **Overall verdict**: strong on grammar sequencing and content rigor,
  weak on skill-coverage breadth. The contrastive grammar teaching (ser/
  estar, por/para, preterite/imperfect, two full subjunctive units) was
  judged genuinely better than most paid competitors at exactly the
  concepts English speakers struggle with most.
- **The one structural finding that matters most**: of the spec's four
  "equally covered" skills (speaking, listening, reading, writing), only
  reading and closed-response writing are really built. Speaking doesn't
  exist; listening is a replay button, not an assessed exercise; writing
  has no open-ended prompt type. See "Still not built" above — this is
  the single biggest gap between the spec's ambition and what's shipped.
- **Content-rigor inconsistency, now resolved**: at audit time,
  `vocabulary.js`/`idioms.js`/`FALLBACK_EXERCISES` were the last
  unverified content, in contrast to the fully-audited `verbs.js`/
  `grammar.js`/curriculum. All three have since been audited this same
  session — see "Content accuracy audits" below, now current.
- **A messaging contradiction, now resolved**: the homepage/Learn-page
  copy led with "no streaks," while the dashboard had a literal streak
  counter. The stat has been removed (the copy was kept, since it's the
  intended positioning) — see "Structured curriculum" and Dashboard
  notes below.
- **A process observation**: both real bugs found this session (the
  flashcard proper-noun contamination, the mobile nav menu) were caught
  by direct product use, not by the "brand-new-user QA pass" already
  logged below — that pass never ran at a mobile viewport width and
  wasn't set up to catch a corpus-mining artifact. Worth remembering for
  future QA passes: check mobile viewports explicitly, and treat any
  auto-generated/corpus-derived content as needing its own adversarial
  spot-check pass, not just a "did it render" check.

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
- **Audit status: all six content files fully audited.** verbs 125/125,
  grammar concepts 79/79, false friends/pronunciation/regional all done
  (see above), and — completed this session — `vocabulary.js` (1056/1056,
  4 parallel batches), `idioms.js` (167/167, 2 parallel batches), and
  `FALLBACK_EXERCISES` in `_gemini.js` (475/475, 3 parallel batches).
  Real errors found and fixed in this last round: in `vocabulary.js`, an
  example sentence that didn't match its own translation, an example
  that didn't contain its own headword, two masculine/feminine agreement
  mismatches against "she" in translated examples, one example using the
  antonym of its headword, and four missing Spain/Latin-America regional
  notes (including a genuine cross-dialect trap — "zapatillas" means
  sneakers in Spain but heels/slippers in Mexico); in `idioms.js`, two
  inaccurate literal translations, a register mislabel, an overly narrow
  definition, and one idiom whose translated tone was inverted (framed
  as sincere "better late than never" when the actual usage is sarcastic
  — "oh NOW you show up"); in `FALLBACK_EXERCISES`, an ungrammatical "a
  cuál" in a gustar-construction exercise, a "hace" that should have been
  "desde hace," an `answer` field with parenthetical commentary baked
  into it (would never match a learner's correct verbatim answer), a
  gerund-vs-infinitive hint that told learners to do the opposite of the
  correct answer, a mismatched future/conditional-probability
  `concept_id`, and a corrupted/garbled prompt string.
- **Flagged but deliberately not fixed** (structural/duplication issues an
  audit agent noticed outside the strict "is this claim accurate" mandate
  — worth a cleanup pass, not urgent): `vocabulary.js` has `cuñado`/
  `cuñada` as two separate entries at different CEFR levels (A2 and B2)
  with different examples — looks like an unintentional duplicate, not
  deliberate design; `idioms.js` has "a buenas horas(,) mangas verdes"
  duplicated (comma vs. no-comma variants, both fixed independently by
  different concurrent audit batches since removing one mid-audit risked
  shifting line numbers the other batch was relying on); `regional.js`'s
  near-duplicate `le_lo`/`leismo` sections (flagged in an earlier audit
  round, still unconsolidated).
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
- New registrations land on `/learn` instead of `/dashboard` (`Auth.jsx`);
  existing logins go to `/dashboard` as before. (Route renamed from
  `/get-started` to `/learn` this session — see "Naming/positioning
  changes" below. `/get-started` still redirects to `/learn`.)

**Status — all 25 outlined units written and live, A1 through B2,
complete.** Unit 0 "Why Spanish?" is a short non-grammar orientation unit
(speaker counts, official-language status, career/internet relevance,
cultural presence as of 2026 — WebSearch-verified the same way grammar
claims are, just for demographic/economic facts instead) that runs before
Unit 1; it has no vocab list and its "practice" is light reading-
comprehension recall rather than a grammar drill, since there's no new
grammar to drill. Units 1-24 cover the full CEFR path: A1 (1-7), A2
(8-15), B1 (16-20), B2 (21-24) — Unit 24 "Fine Details" is the closing
unit. Every unit was WebSearch-verified per the process below; two
génuine mid-write corruption bugs were caught this way (see "Background-
agent session limits" above) and one nearly-shipped unescaped-quote
syntax bug was caught by a stop-and-check `node --check` pass rather than
trusting an agent's own self-report.

There is no more "coming soon" state anywhere in `UNIT_METADATA` —
`GetStarted.jsx` (the page component; the route/nav label is now "Learn")
renders every unit as a real, completed lesson. If you're extending this
further (a C1 tier, additional units within an existing level, etc.), the
process that built 1-24 is the one to repeat: one dedicated content-
writing agent per unit, each reading `unit01-saying-hello.js` as the
quality/shape reference, this file's Pedagogical Principles section, and
the relevant `concepts.js` + `grammar.js` entries before writing, with
mandatory WebSearch verification of every Spanish claim, followed
immediately by `node --check` before trusting the file, then wiring the
import + `CONTENT` map entry into `index.js` yourself (never let a
content-writing agent touch `index.js`, to avoid two agents racing on the
same shared file).

## Naming/positioning changes (this session)

- **"Get started" → "Learn"** throughout the nav, dashboard, and lesson
  back-links. The route moved from `/get-started` to `/learn`; the old
  path 307-redirects (`<Navigate>`) to the new one in `App.jsx` so
  nothing that already linked to `/get-started` breaks. `GetStarted.jsx`
  is still the component's filename — only the route and user-facing
  label changed, not the file/component name.
- **The dashboard's Streak stat card was removed.** The homepage and
  Learn-page copy both lead with "no streaks" as a differentiator; a
  literal streak counter one click away on the dashboard directly
  contradicted that (see "Product audit findings" above). The backend
  (`functions/api/learner/profile.js`'s `computeStreak()`) still computes
  and returns a `streak` value — only the frontend display was removed,
  since the original learner-facing spec explicitly asked for light
  streak gamification and there's no reason to rip out working backend
  logic that costs nothing to leave in place. If streaks are ever
  reintroduced to the UI, reconcile the copy first.

## Navigation reorganization (this session)

**Problem found while scoping "better UI/organization" QOL work:** the
desktop nav (`NavBar.jsx`) only showed 5 links (Learn, Practice,
Flashcards, Dashboard, Profile), while the mobile hamburger menu had 13 —
the two were hand-maintained separately and had drifted apart. Worse,
4 real pages had **no nav entry on either breakpoint**: `/vocab-review`,
`/false-friends`, `/pronunciation`, `/writing` — reachable only via
buttons buried in `Dashboard.jsx`. A desktop user had no way to discover
the reference pages at all short of going through Dashboard first.

Fixed by unifying desktop and mobile into one shared link list
(`REFERENCE_LINKS`, `ACCOUNT_LINKS` arrays at the top of `NavBar.jsx`),
rendered as:
- Desktop: flat primary links (Learn, Practice, Flashcards, Dashboard)
  plus two click-toggle dropdowns, **Reference** (Concepts, Grammar,
  Verbs, Vocabulary, Vocab review, Idioms, False friends, Pronunciation,
  Regional, Free resources) and **Account** (Profile, History, Writing,
  Sign out). Dropdowns are `position: absolute` against a `position:
  relative` `.dropdown` wrapper — deliberately not `fixed`, so the
  existing `backdrop-filter`-on-`<header>` containing-block gotcha
  (documented in "Code/design gotchas" below) doesn't apply to them.
- Mobile: the same two link arrays rendered into the existing full-panel
  menu, under non-interactic `REFERENCE`/`ACCOUNT` section-label
  headings instead of one long undifferentiated list.
- A single `openMenu` state (`null | 'reference' | 'account'`) keeps at
  most one dropdown open at a time; outside-click and route-change both
  close everything, extending the pattern the mobile hamburger already
  used.

`Dashboard.jsx`'s own "Reference links" section (a 14-link row at the
bottom of the page, `.refSection`/`.refLink` in `Dashboard.module.css`)
was then removed entirely, along with its now-dead CSS — it was fully
redundant with the new nav dropdowns and existed in the first place
because the nav didn't surface these pages.

Verified via Playwright against a real local `wrangler pages dev` + D1
server at both a desktop (1280px) and mobile (390px) viewport: all 10
Reference items and 3 Account items + Sign out render and are clickable
in the desktop dropdowns; the dropdown closes on an actual outside click
(not a click inside the nav's own `menuRef` wrapper, which doesn't count
as "outside" — this tripped up the first version of the test itself, not
the app); all 18 items are present in the mobile panel; clicking a link
actually navigates. One test-only gotcha worth remembering: a Playwright
`fullPage: true` screenshot of the mobile menu showed the Dashboard page
bleeding through underneath it — this is a known `position: fixed` +
full-page-screenshot artifact, not a real bug (confirmed via a normal
viewport-only screenshot, which shows the panel correctly covering the
full viewport with no bleed-through, exactly as a real user would see
it).

## Dashboard visual polish (this session)

First round of a broader "QOL: better UI" pass, scoped via 24 direction-
setting multiple-choice questions to the user beforehand — the answer to
nearly every open lever (density, typography, buttons, card elevation,
stats-as-plain-numbers, motion/animation, empty states, loading spinner,
mobile nav) was "keep as-is." That left refinement of concrete,
already-broken specifics as the actual scope, not a redesign:

- **CEFR level was shown three times on one screen**: the small pill in
  `NavBar` (only Dashboard passes the `cefrLevel` prop, so this triple-up
  is Dashboard-specific), a second standalone `<CefrBadge>` floating in
  the page's own header next to the greeting, and a third time as the
  "Level / CEFR" stat card. Removed the redundant header badge (and the
  now-unused `CefrBadge` import) — down to two, an ambient nav indicator
  and an explicit stats-grid data point, which is a defensible amount of
  overlap rather than true duplication.
- **`.statsGrid` was still `grid-template-columns: repeat(5, 1fr)`**,
  leftover from before this session's earlier removal of the Streak stat
  card (see "Naming/positioning changes" above) — only 4 `StatCard`s
  render now, so the grid left a dead 5th-column gap of blank space on
  the right on every viewport. Fixed to `repeat(4, 1fr)`. The `640px`
  breakpoint had the same problem one level down (`repeat(3, 1fr)` with
  4 cards left a lone orphaned 4th card under column 1) — changed to a
  clean `repeat(2, 1fr)` 2×2 grid; the existing sub-`400px` single-column
  fallback was already correct and left untouched.

Verified via Playwright against a real local `wrangler pages dev` + D1
server at 1280px, 600px, and 390px: CEFR text now appears exactly twice
(nav + stat card, confirmed via a page-wide text count), zero page
errors, and all three viewport tiers render the stats grid without dead
space or orphaned cards.

## C1 curriculum: units 26-29, the first tier past B2 (this session)

Part 3 of the QOL pass (#3). Extended the structured "Learn" path past B2
for the first time, covering all 14 C1 concepts that existed in
`concepts.js`/`grammar.js` with zero curriculum units built around them.
Scoped via 24 direction-setting questions beforehand (grouping, format,
gating, sourcing, review process — all "keep it consistent with the
existing 25 units" answers except one real scope addition, below).

**New units, grouped by grammatical function** (mirroring how B2 split
into 4 thematic units):
- `subjunctive-limits` (26) — subjunctive_noun_clauses, subjunctive_adjective_clauses, subjunctive_temporal, pluperfect_subjunctive
- `reported-speech` (27) — estilo_indirecto, nominalisation, gerund_advanced
- `probability-aspect` (28) — futuro_probabilidad, condicional_probabilidad, perifraseis_avanzadas
- `fixed-expressions` (29) — ser_passive, aunque_concessive, verbos_preposicionales, cuantificadores

**New schema capability — reading passages.** C1 grammar (reported
speech, subjunctive contrasts, register-driven passive voice) is often
best demonstrated with a short dialogue or narrative rather than a
single sentence, which the existing exercise format couldn't show. Added
an optional `passage`/`passageEn` field to the shared exercise-object
shape; `ExerciseCard.jsx` (shared by `Lesson.jsx` and the adaptive
`Session.jsx`) renders it above the prompt with audio via the existing
`SpeakButton` pattern, only when present — purely additive, zero effect
on any of the other ~2000 existing exercises across the app. Across the
4 new units, roughly half of the 86 total practice exercises use a
passage (15/24, 11/18, 9/18, 2/26 respectively — weighted toward the
concepts where discourse-level context matters most, e.g. nearly all of
`estilo_indirecto`'s items use a dialogue, since reported speech is
fundamentally about relaying what was said in a prior exchange).

**Process**: one dedicated content-writing agent per unit (matching the
established pattern from units 1-25), each independently reading
`unit01-saying-hello.js` as the shape/rigor reference, this file's
Pedagogical Principles section, and the relevant `concepts.js`/
`grammar.js` entries, with mandatory WebSearch verification of every
grammar claim before writing (full source lists are in each file's own
accuracy-audit comment block) and a `node --check` pass before
finishing. All 4 ran in parallel in the background; each was
independently re-verified afterward (`node --check` + a programmatic
structure check: section/vocab/practice counts, concept coverage,
multiple_choice option counts) before wiring into `index.js` myself, per
the same division of labor as every previous batch of units.

**Real bug found and fixed during QA, unrelated to the new content
itself: `GetStarted.jsx` silently dropped an entire CEFR tier.** The
"Learn" page groups units by level via a hardcoded `const LEVELS = ['A1',
'A2', 'B1', 'B2']` array — adding the 4 C1 units to `UNITS`/`index.js`
made them fully real, non-`comingSoon` data (confirmed via a direct
`getUnit()` check), but the page's render loop only ever iterates the
levels in that array, so all 4 C1 units were completely invisible on
`/learn` — no section header, no cards, nothing — while the page's own
"0 of 30 available units complete" counter correctly showed 30, proving
the data layer knew about them and only the display loop didn't. Fixed
by adding `'C1'` to `LEVELS` and a `C1: 'Near-Native Precision'` label.
Caught by an actual Playwright pass against the live page, not by
reasoning about the code — the kind of gap between "the array has 30
entries" and "the page renders 30 entries" that's easy to miss without
looking at the real rendered output.

**Test-script false-positive worth remembering for future QA scripts**:
an early pass reported "never saw a passage-based exercise" across
several steps through Unit 26, which looked like a real rendering bug at
first. Root cause was the *test's* selector, `[class*="option"]`,
matching both `.option` (the individual multiple-choice button) and
`.options` (the parent `<ul>` wrapper) — since `"options"` contains
`"option"` as a substring — and `.first()` in document order picked the
non-interactive `<ul>` ahead of the actual buttons inside it. Clicking a
`<ul>` does nothing, so the exercise silently never advanced and every
subsequent check ran against the same first exercise. Fixed by scoping
to `button[class*="option"]`, the pattern already used correctly
elsewhere in this session's QA scripts. Once fixed, passages render
exactly as designed (verified visually via screenshot: audio button,
Spanish text, English translation, then a passage-referencing question).

## A1/A2 content gaps: plural nouns and basic comparatives (this session)

A follow-up to a broader "are any concepts missing in A/B levels?"
WebSearch-grounded audit against Instituto Cervantes' Plan Curricular. Of
several candidate gaps considered, only two survived a check against the
actual codebase content (a third, al/del contractions, was found already
taught in Unit 14's `prepositions_basic` section at A2 — correction noted
and dropped before implementing anything):

- **Plural noun formation** — never explicitly taught anywhere, despite
  plural forms (`los libros`, `las chicas`) being used constantly from
  Unit 3 onward. Added as a new concept `plural_nouns` (A1,
  `prereqs: ['noun_gender']`) and a new section in `unit03-people-things.js`
  ("One Becomes Many: Forming Plural Nouns"), inserted between the
  gender-exceptions section and the definite-articles section (definite
  articles need los/las, which need plural nouns first). Covers: vowel-
  ending nouns add -s, consonant-ending nouns add -es, -z nouns swap
  z→c before -es (lápiz→lápices), and nouns already ending in unstressed
  -s stay unchanged (el lunes→los lunes).
- **Basic comparatives** — Unit 14 is titled "Comparing & Describing" but,
  despite the name, never actually covered comparatives (only
  ser_vs_estar, adverbs, and prepositions). Added `comparatives_basic`
  (A2, `prereqs: ['adjective_agreement']`) and a new section ("Comparing
  Two Things: más/menos…que and tan…como"), inserted between the adverbs
  section and the prepositions section. Covers inequality (más/menos +
  adjective + que) and equality (tan + adjective + como), adjective
  agreement with the noun described (not the comparison target), and the
  que→de switch directly before a plain number (más de treinta años). The
  existing B2 `comparatives` concept's `prereqs` now includes
  `comparatives_basic`, since it's the natural prerequisite for
  superlatives and irregular forms (mejor/peor/mayor/menor).

Both concepts were wired through every place a concept_id needs to exist
consistently: `concepts.js` (mastery tracking/prereq graph), matching
`GRAMMAR_CARDS` entries in `grammar.js`, `FALLBACK_EXERCISES` entries and
the Gemini system prompt's `concept_id` whitelist + CONTENT SCOPE
description in `_gemini.js` (so both the static fallback bank and the
live Gemini-adaptive session can test them), and `UNIT_METADATA` in
`curriculum/index.js`. Verified with `node --check` on every touched
file, a programmatic structure check per curriculum unit (section/vocab/
practice counts, concept_id coverage), and a live Playwright pass
creating a real user and stepping through both lessons end-to-end,
confirming the new sections render and the new practice exercises
advance without repeats alongside the pre-existing ones.

**Local dev environment gotcha hit during QA, worth remembering**: a
freshly-spun-up container's local D1 state was empty (`no such table:
users`), and `wrangler d1 execute DB --local` and `wrangler pages dev
--d1 DB --kv KV` turned out to bind to *two different* local SQLite
files — passing just `--d1 DB` to `pages dev` (no explicit database ID)
creates its own default local D1 identity, separate from the one
`wrangler.toml`'s `database_id` resolves to for `d1 execute --local`.
Applying `schema.sql` through `schema-v8.sql` only fixed the file the
`d1 execute` command was using; registration kept failing until
`pages dev` was relaunched with the ID pinned explicitly:
`--d1 DB=<database_id from wrangler.toml>`. This is purely a local-dev
quirk (production's binding is unambiguous); the fix is to always pass
the explicit database ID to `pages dev` when local D1 state has just
been (re)initialized in a fresh environment.

## Bug fix: lessons loading mid-scroll instead of at the top (this session)

User report: navigating into a lesson (e.g. from `/learn` after scrolling
down to find a unit card, or between lessons) would load the new page
already scrolled partway down, not at the top. Root cause: the app is a
client-side-routed SPA (`react-router-dom`'s `BrowserRouter`) and nothing
anywhere reset `window.scrollY` on navigation — a full page load always
starts at the top, but a client-side route change just swaps the
rendered component in place, so the browser leaves the scroll position
exactly where it was on the previous page. This affected every route,
not just lessons; lessons were simply the most noticeable case since
`/learn` is often scrolled before clicking into a card.

Fixed with the standard React Router pattern: a `ScrollToTop`
(`src/components/ScrollToTop.jsx`) component that calls
`window.scrollTo(0, 0)` in a `useEffect` keyed on `useLocation().pathname`,
mounted once at the top of `App.jsx` (renders nothing, always active
regardless of which route is showing). Verified via a live Playwright
pass: scrolled the `/learn` page down, clicked into a lesson via its
`<Link>`, confirmed `scrollY === 0` on load; repeated for a second lesson
navigated to directly from `/learn` again, same result.

## Content cleanup: vocabulary.js cross-batch duplicates (this session)

Part 2 of the QOL pass (#4). ES.md had previously flagged exactly one
duplicate pair (`cuñado`/`cuñada` — already resolved). A fresh automated
scan run this session, before touching anything, found the real scope
was much larger: **49 duplicate word entries** in `vocabulary.js`, each
the same Spanish word listed twice with a different `domain` tag (e.g.
`casa` under both `places` and `house`, `feliz` under both `adjectives`
and `emotions`). Root cause: the file was built in two passes — an
early general CEFR-ordered pass using generic catch-all domains
(`places`, `nouns`, `adjectives`), and a later "thematic domains" pass
(see `ES.md`'s audit-task list: "batch 4, C1 + thematic domains") that
re-added many of the same common words under specific domains
(`travel`, `health`, `house`, `emotions`, `technology`, etc.) without
checking for existing entries first.

Deduped mechanically (script in scratchpad, not committed — one-time
cleanup, not a reusable tool): for each duplicate pair, kept the entry
with the more specific (non-generic) domain, and set its `cefr` to
whichever of the two entries had the lower value if they disagreed (6 of
49 pairs needed this — e.g. `hospital` was `places/A1` and `health/A2`;
kept the `health` domain but downgraded to `A1` so the word isn't
gatekept behind a higher level than necessary). Result: 1054 → 1005
entries, zero duplicate groups remaining, verified via `node --check`
and a full re-scan.

Also re-scanned `grammar.js` (79 cards), `verbs.js` (125 verbs), and
`FALLBACK_EXERCISES` (475 items) for the same cross-batch pattern per
the user's direction — all three were already clean (zero duplicates by
their respective id fields; `FALLBACK_EXERCISES`'s 26 "same word+concept+
type" groups are intentional variety — multiple distinct exercises per
concept, not accidental repeats, as already documented in this file's
"Content accuracy audits" section).

## Flashcards bugs found and fixed from a user report (this session)

Two issues reported together from the same screenshot: the "el" card
showed an example sentence with no "el" in it, and flashcards kept
serving the same 10 cards repeatedly.

**Bug 1 — example sentence didn't contain the headword.** `el`'s example
was "No sé lo que es." — literally absent the word "el". Root cause is
in `scripts/build-flashcards.mjs`'s sentence-indexing: candidate
sentences are indexed by the *lemma* the source corpus (Tatoeba, via
doozan/spanish_data) tags a token with, not by verifying the headword's
own spelling actually appears. That corpus lemma-groups the neuter
pronoun "lo" under the masculine article "el" (a legitimate-looking but
overly broad grouping), so a sentence containing only "lo" got filed
under lemma "el". The existing `isRiskyMatch()` proper-noun heuristic
didn't catch this because it only flags *capitalized* false matches —
it never checks for the word being *absent* entirely.

A full-deck scan found 1391/5000 cards where the example doesn't
literally contain the headword — but the overwhelming majority (828
verbs, 320 nouns, 231 adjectives) are *correct*: Spanish conjugation and
gender/number agreement mean a verb or noun's flashcard legitimately
shows an inflected form (`tener` → "Ya me **tengo** que ir."), not the
bare dictionary form. Only the closed-class grammatical categories with
no real inflection paradigm — article, preposition, adverb, conjunction,
interjection — are safe to require an exact literal match for. Fixed by
adding a `containsLiteralWord()` check in `build-flashcards.mjs`, applied
only to that `STRICT_LITERAL_POS` set; regenerating found and nulled out
exactly 3 true bugs across the whole deck (`el`, `mucho` — whose example
used "poco," an unrelated/opposite word, and `bajo` the preposition —
whose example used "baja" the adjective, a same-spelling homograph
collision), while correctly leaving alone legitimate variants elsewhere
in the deck like `uno`→"un" (apocope) and `nosotros`→"nosotras" (gender).
Deck regenerated from the already-cached source files (no network
needed): 5000 → same 5000 cards, 4718 (94%) with an example, down
slightly from before as the 3 misleading ones now correctly show none.

**Bug 2 — investigated, root cause not reproduced, but a real blind spot
fixed anyway.** A live end-to-end repro (register → review a full batch
of 10 real cards via the actual `/api/flashcards/review` and
`/api/flashcards/progress` endpoints → rebuild the queue) showed
*correct* behavior: zero overlap between session 1's and session 2's
cards. `buildQueue()`, the review endpoint's upsert, and the progress
endpoint's read all look and behave correctly. However, `Flashcards.jsx`'s
`handleGrade` swallowed every review-save failure completely silently
(`catch { /* best-effort */ }`) — the UI still advances to the next card
and shows "Session complete" normally even if the save call fails, so a
run of failed saves in production (network blip, transient error) would
be indistinguishable from a successful session until the *next* visit
serves the same cards again, with zero signal anything went wrong. Fixed
by surfacing a visible warning banner ("Some reviews didn't save — check
your connection...") when any review call fails, shown both mid-session
and on the completion screen — verified via Playwright by forcing the
review endpoint to fail and confirming the banner appears, and
separately confirming it does *not* appear on a normal successful run.
This doesn't explain what the user saw, but closes the exact blind spot
that would make a real production issue impossible to diagnose or even
notice next time.

## Production outage: schema-v8.sql applied locally but never to prod D1

**Real incident, caught by the user in production, not by any QA pass
run this session.** After `schema-v8.sql` (adds `sessions.focus_concept`)
was merged along with the code that reads/writes that column
(`start.js`/`turn.js`), every `/api/sessions/start` call in production
started failing with `D1_ERROR: table sessions has no column named
focus_concept` — a full outage of the adaptive session / Practice
feature for every user, not just focus-mode drills, since `start.js`
unconditionally inserts that column on every session.

**Root cause**: this session's agent applied `schema-v8.sql` to the
*local* dev D1 database only (`wrangler d1 execute DB --local --file=...`,
used to test the focus-concept fix), and verified everything end-to-end
against that local database. Nobody — agent or user — ran the equivalent
`--remote` migration against the actual production D1 database before
the code shipped. The agent session has no Cloudflare account
credentials (`wrangler whoami` → not authenticated) and cannot run
`--remote` migrations itself; this step has always required the human
operator, same as every `schema-v2.sql` through `schema-v7.sql`
migration before it — but this is the first time a session shipped code
that hard-depended on a new column without that step being confirmed
done first.

**Fix**: run the migration against the remote database — either
`ALTER TABLE sessions ADD COLUMN focus_concept TEXT;` via the Cloudflare
dashboard's D1 Console tab, or `npx wrangler d1 execute DB --remote
--file=schema-v8.sql` from a machine with `wrangler` authenticated to the
account. Purely additive, safe to run any time, no redeploy needed
afterward.

**Process lesson for future migrations**: "tested locally" is not
sufficient signoff for a schema-adding PR — local `wrangler dev --d1
DB --local` and production D1 are two entirely separate SQLite
databases, and nothing about the local test would ever reveal that the
remote one is out of sync. Before merging any PR that adds a migration
file, explicitly confirm with the user that they've run it against
`--remote` (or ask them to), rather than treating a clean local
end-to-end test as proof the feature works in production.

## Free Resources page (this session)

`/resources` (`src/pages/Resources.jsx`, `src/content/resources.js`) — a
curated list of 21 external, genuinely free comprehensible-input
resources across five categories (Video, Podcasts, Reading, Music, TV &
Film), addressing the original spec's "real media integration" request
via linking *out* to existing free content rather than hosting/licensing
media directly (see the spec gaps above — direct hosting was deliberately
deferred as a licensing/cost risk; this is the cheaper alternative that
still serves the same "expose the learner to real media" goal). Every URL
was pulled directly from a live WebSearch result rather than generated
from memory, and every entry was checked to confirm it's actually free
(no paywall/trial gate) before being added — see the file header comment
for the verification note. Linked from the Dashboard's reference-link row
and the mobile nav menu. Follows the same filterable-card-list pattern as
`Idioms.jsx` (search box + category filter chips + expandable cards).

This list will go stale over time (channels rebrand, podcasts go on
hiatus, free tiers change) — worth a periodic re-verification pass, not a
one-time build-and-forget.

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

**Bug found and fixed this session: proper nouns were contaminating
example sentences.** A user spotted the "ella" (she/her) card using an
example sentence about the singer Ella Fitzgerald instead of demonstrating
the pronoun. Root cause: `sentences.tsv`'s tagging format marks proper
nouns with a `:prop` tag and additionally splits multi-word names into
parts for search indexing (e.g. "Ella Fitzgerald" also emits
`:split,Ella,Fitzgerald`) — the original pipeline's tag parser treated
both as ordinary lemma occurrences, so *any* common word that happens to
share spelling with a Spanish name (Rosa, Paz, Sol, Cruz, Blanco, Rey,
Cesar...) was at risk of having its example sentence hijacked. Fixed in
`scripts/build-flashcards.mjs`:
- `:prop` and `:split` tag groups are now skipped entirely when indexing
  candidate sentences.
- A second, independent check (`isRiskyMatch()`) catches proper nouns the
  *corpus itself* mistagged with no `:prop` marker at all — e.g. "Cesar"
  in the set phrase "O el Cesar o nada" (a Cesare Borgia reference) was
  tagged directly as the verb lemma `cesar` ("to cease"), no proper-noun
  marker whatsoever. The check: if a lemma's spelling only ever appears
  capitalized and not at a sentence boundary in a candidate sentence,
  treat it as a likely mistagged proper noun. Safe sentences always beat
  risky ones regardless of length; if only risky candidates exist for a
  word, the card now gets no example rather than a misleading one
  (better than showing something wrong).
- Regenerating the full 5000-word deck with this fix changed 50 of 5000
  examples (14 now correctly show no example, 36 swapped to a better
  sentence); a full programmatic scan confirmed zero remaining instances
  of the bug pattern across the deck.
- **Lesson for any future corpus-mining pipeline**: an auto-generated
  deck needs its own adversarial spot-check pass (search for the bug
  pattern programmatically, not just "does it render") — this shipped,
  passed initial QA, and sat in production before a user caught the
  specific instance that exposed the systemic issue.

**Second bug found and fixed this session: cards graded "Again" never
actually got rescheduled — they stayed permanently due.** A user reported
"I keep getting the same words to review each time." Root cause was in
the *shared* `functions/_lib/fsrs.js` (not flashcards-specific — this
function also schedules the adaptive session's `vocabulary_items` queue,
so the bug affected both systems): `due_at` was computed as `Date.now() +
Math.round(stability) * 86400000`. A struggling/new card's FSRS stability
is routinely well under 1 day (0.02-0.4 days is normal after a few
"Again" grades), and `Math.round()` truncated all of that down to **0**,
scheduling the card due at essentially the same instant it was just
reviewed. That card then never actually spaced further out: every
subsequent review recomputed another sub-day stability, rounded to 0
again, so it stayed permanently "due" and kept winning the soonest-due
sort in every future session, crowding out other due/new cards — exactly
the reported symptom. Fixed by removing the rounding entirely (`Date.now()
+ stability * 86400000`) — real SRS systems (Anki's own learning steps,
etc.) genuinely do re-show a failed card within minutes to hours, not
after a full day, so using the raw fractional stability is both the fix
and the more correct behavior. Verified via a repeated-"Again" simulation
(stability/due-time now correctly shrinks from ~9.8h → ~4.2h → ~1.9h →
~0.9h → ~0.4h instead of flatlining at "due now" every time) and via a
live end-to-end test hitting the real `/api/flashcards/review` endpoint.
**Because this lives in the shared FSRS function, the same one-line fix
also corrected the adaptive session's vocabulary spaced-repetition
scheduling**, not just Flashcards — worth remembering that any future
change to `scheduleReview()` affects both systems at once.

---

## Adaptive session: "Drill this concept" focus mode bug (this session)

The session summary's weak-spots list links `Drill →` for a specific
concept, which opens `/session?focus=<concept_id>` — meant to lock the
*entire* 10-exercise session onto that one concept (`Session.jsx` even
shows a persistent "Drilling: X" banner). A user reported the opposite:
mid-"Drilling: Greetings" session, exercise 2 was `Translate: 'She used to
live in Barcelona.'` — a B1 imperfect-tense sentence with zero connection
to greetings.

Root cause was two compounding gaps, both in the Gemini-backed session
loop (`functions/api/sessions/{start,turn}.js`, `_gemini.js`):

1. **`focusConcept` was never persisted.** `start.js` only ever told
   Gemini to focus on the concept in the userMessage for the *first*
   exercise. It was never written to the `sessions` row. Gemini has no
   cross-request memory — each `turn.js` call is a fresh API request with
   only the current exercise + answer + the session's professor briefing
   (which reflects overall learner profile, not this session's focus). So
   from exercise 2 onward, nothing told Gemini to stay on-topic; it was
   free to drift to whatever concept it felt like.
2. **The static fallback bank (`FALLBACK_EXERCISES`, 475 items spanning
   A1→C1) was selected with zero concept filtering.** `fallback()` did
   `FALLBACK_EXERCISES[Math.floor(Math.random() * FALLBACK_EXERCISES.length)]`
   — fully random across every CEFR level and concept. This path fires
   whenever the Gemini call fails outright (network error, exhausted
   retries) *or* Gemini's response exercise JSON fails to parse — on
   **any** turn, including turn 1. The reported "vivir" exercise is
   `_gemini.js`'s literal fallback-bank entry tagged `concept_id:
   'imperfect'` — direct proof the random fallback fired mid-focus-session.

Fixed with three changes:
- `schema-v8.sql` adds `sessions.focus_concept TEXT`; `start.js` now
  persists it on session creation.
- `turn.js` now selects `focus_concept` alongside `briefing_text` and
  passes it into every `callGemini()` call. `callGemini()` appends an
  explicit reminder to the prompt on every non-first turn when a focus
  concept is set ("this whole session is focused on drilling the concept
  X — the next exercise must also target concept_id X"), so the
  instruction survives Gemini's lack of cross-request memory instead of
  being given once and forgotten.
- `fallback()` now takes an optional `focusConcept` argument and filters
  `FALLBACK_EXERCISES` to that concept first, only falling back to fully
  random selection if no matching exercise exists for that concept (all
  79 tracked concepts have at least one, so in practice this never
  degrades to random during a focus session). Both call sites (exhausted
  Gemini retries, and unparseable Gemini exercise JSON) now pass the
  focus concept through.

Verified against the real local D1 DB with `wrangler pages dev` (no
Gemini key configured locally, so every call already exercises the
fallback path — the exact failure mode from the bug report): started a
`focusConcept: 'greeting_basics'` session and stepped through all 10
turns via the real `/api/sessions/start` and `/api/sessions/turn`
endpoints — every exercise across the full session stayed on
`greeting_basics`, where before the fix a random sample of 30
exhausted-retry fallbacks landed on concepts across all CEFR levels.

**Second, more severe bug found during re-QA of the fix above: the
"Drill →" link — the actual production entry point to focus mode — did
nothing.** After shipping the backend fix, a deeper re-test was run
specifically because the *previous* QA pass had never opened focus mode
at all (see "why the bug wasn't caught" below) — this time the test
drove the real user journey: complete a session with wrong answers, land
on the summary, click "Drill →" for one of the listed weak concepts. The
click updated the URL to `/session?focus=<concept>` but the page kept
showing the *old* "Session complete." summary — no new session started,
no "Drilling:" banner, nothing. Root cause: `Session.jsx`'s session-start
`useEffect` depended only on `[token]`. `/session` and `/session?focus=X`
are the same React Router route, so a client-side `<Link>` navigation
between them (exactly what "Drill →" does) only changes the query string
— it does not unmount/remount the component — so the effect never re-ran
and `focusConcept` was silently ignored. Focus mode only ever worked via
a full page load (typing the URL, hard refresh), which is not how any
real user reaches it from the product's own UI. Fixed by adding
`focusConcept` to the effect's dependency array and resetting all session
state (`phase`, `sessionId`, `exercise`, `stats`, `summary`, etc.) at the
top of the effect, so every focus change — including in-app navigation —
cleanly restarts the session. Verified end-to-end via Playwright driving
the actual click (not a direct URL load): register → complete a 10-item
session with wrong answers → click "Drill →" on the summary → confirm
the "Drilling: X" banner appears immediately and stays on that same
concept for all 10 turns of the new session.

**Why the previous QA pass (the one right before this one) didn't catch
either bug, and what changed:** its adaptive-session test opened
`/session` with no `?focus=` param and only asserted "did an exercise
render" and "did I manage to answer N of them" — it never exercised focus
mode at all, and never asserted on exercise *content* (concept_id)
against what was requested, only on structural rendering. A test can
click through every exercise in a session and pass while every single
one is off-topic, because nothing checked which concept came back. The
remedy applied here: any test of a "targeted" feature must (1) actually
invoke it through its real UI entry point, not just the underlying route
with a hand-typed query param, and (2) assert on the semantic content of
what came back (concept_id, not just "an exercise exists"). Both gaps are
now closed in this feature's test coverage — multi-concept, multi-turn,
concept-adherence assertions plus a full click-driven journey from
summary → drill link → locked session.

**How to tell whether Gemini is actually being called in production, vs.
silently running on the static fallback bank the whole time:** there was
no way to distinguish these from the outside — a real Gemini call and a
fallback exercise both render as a normal exercise, and previous QA
passes (this session's and prior ones) exclusively exercised the
fallback path, since `.dev.vars`' `GEMINI_API_KEY` is a placeholder
locally. If the production secret were ever missing, expired, wrong, or
pointed at a since-deprecated model id, the app would keep working
perfectly from a user's perspective (full 79-concept fallback coverage)
while silently never calling Gemini at all — nobody would necessarily
notice. `/api/sessions/start` and `/api/sessions/turn` now both return a
`source` field (`'gemini'` or `'fallback'`) plus a `fallbackReason`
string when `source: 'fallback'` (e.g. `"Gemini 400"` for an auth/bad-key
error, `"Gemini 429"` for rate-limiting, or `"unparseable exercise JSON
in Gemini response"` if Gemini replied but didn't follow the expected
format). Check it via browser DevTools → Network tab on either endpoint,
or `curl`. Locally this always reads `fallback` / `"Gemini 400"` because
of the placeholder key — that 400 is itself informative: it confirms the
retry logic correctly treats it as non-retryable (fails fast to fallback
rather than burning 3 attempts) exactly as the retry-backoff logic
intends for auth errors vs. transient 429/5xx.

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

Prioritized punch list as of this writing. If you're picking this project up
in a new session, this is the place to start. Nothing below is blocked on a
design decision — each item's approach is already established by precedent
elsewhere in the codebase; follow the referenced pattern.

**Everything from previous punch lists is done**: all 25 curriculum units
(0-24, A1 through B2), all 6 content files audited (verbs, grammar,
false friends, pronunciation, regional, and — completed this session —
vocabulary, idioms, fallback exercises), `ClickableSpanish` extended to
every reference page, the Anki-style Flashcards feature, the "brand-new-
user" QA pass, the Free Resources page, the Get-started→Learn rename, and
the dashboard streak-stat removal. See the relevant sections above for
each. What's left:

1. **Speaking — no feature exists at all** (backburnered by the user this
   session; not currently being worked, but scoped here for whenever it's
   picked back up). No mic input, no pronunciation scoring, no exercise
   type that asks the learner to produce spoken Spanish. The cheapest
   real starting point: the Web Speech API (already powering
   `useSpeech.jsx`/`SpeakButton` for text-to-speech) has a
   `SpeechRecognition` counterpart in the same browser API family — a
   minimal version doesn't need a new backend, just a new exercise type
   plus a client-side recording/recognition flow. A quality bar/scoring
   rubric would need actual design thought (recognition confidence isn't
   the same thing as pronunciation quality), which is likely why this
   hasn't been started yet rather than a technical blocker.
2. **Dedicated listening-comprehension exercises — also backburnered.**
   The existing `SpeakButton` only replays text already visible on
   screen — it's a convenience feature, not an assessed listening skill.
   A real version needs a new exercise type where audio is the *only*
   information given up front (e.g. "listen and choose what you heard,"
   "listen and transcribe") — no new infrastructure needed beyond what
   TTS already provides, just new exercise-type handling in
   `ExerciseCard.jsx`/`Lesson.jsx`/`Session.jsx` and new content.
3. **An open-ended writing-prompt exercise type.** Every current exercise
   type (`multiple_choice`, `fill_blank`, `translation_to_spanish`,
   `translation_to_english`, `error_correction`) has exactly one matchable
   correct string. A genuinely free-response prompt ("write two sentences
   about your day") can't be auto-graded without an LLM call — the
   cheapest version that stays inside the $0 architecture is closer to
   the Flashcards pattern: show a model answer after the learner writes
   their own, let them self-assess, don't try to have Gemini grade free
   text on every submission.
4. **Confirm GitHub branch protection is actually enabled.** Still
   unconfirmed as of this writing — the user was shown how to turn this
   on via the GitHub UI earlier in this project but it's never been
   verified as done, and there's no API this session had access to for
   checking it directly. A five-minute manual check in `smolhaj/es`
   repo settings, not a coding task. Currently anyone with push access,
   including agent sessions, can push straight to `main`.
5. **Minor content cleanup, flagged but not fixed during the vocabulary/
   idioms audits** (none are factual errors, just duplication — see
   "Content accuracy audits" above for the full detail on each):
   `vocabulary.js`'s `cuñado`/`cuñada` duplicate entries (A2 and B2, with
   different examples — looks unintentional); `idioms.js`'s "a buenas
   horas(,) mangas verdes" comma/no-comma duplicate; `regional.js`'s
   near-duplicate `le_lo`/`leismo` sections (flagged in an even earlier
   audit round, still unconsolidated).
6. **Remaining gaps against the original learner-facing spec** (see
   "Original learner-facing spec" above): conversation/role-play exercise
   type (no open-ended dialogue type exists — related to but distinct
   from the speaking/listening gaps above, since role-play could
   plausibly stay text-based), real media integration *hosted directly in
   the app* (the Free Resources page addresses this via linking out
   instead — see that section above; direct hosting stays deferred as a
   licensing/cost risk), Cloudflare R2 (bound in `wrangler.toml` but
   unused — no feature currently needs object storage), a secondary/
   fallback LLM provider (e.g. Groq) for when Gemini is unavailable or
   rate-limited, and explicit exponential backoff/retry handling around
   the Gemini call in `_gemini.js` (today a failure just falls through to
   `gradeLocally()` and `FALLBACK_EXERCISES`, which is graceful but
   doesn't retry the actual LLM call first — this one is a contained,
   well-scoped, low-risk change if picked up).
7. **Flashcards daily new-card cap is per page-load, not per calendar
   day.** See "Flashcards: architecture and status" above —
   `NEW_PER_SESSION = 10` in `Flashcards.jsx` caps new cards per session
   visit, but nothing stops a user from reloading the page immediately and
   getting 10 more. A real fix needs a small "new cards introduced today"
   counter (e.g. a `new_cards_today`/`day` pair in a settings-ish row, or
   derive it from counting `flashcard_progress` rows whose
   `last_reviewed_at` falls on today's date and `review_count = 1`).
   Low priority — acceptable for solo/small-group $0 use — but worth fixing
   if this becomes a real multi-user product.
