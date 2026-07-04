// Unit 16 — Recent & Ongoing Actions (B1)
// Covers: acabar_de, llevar_gerund
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This is the first
// B1 unit, so it builds directly on preterite, present progressive, and
// reflexive verbs already taught — no basics are re-explained. Every
// Spanish claim below was verified against SpanishDict, StudySpanish.com/
// Kwiziq/Lawless Spanish grammar references, and the existing GRAMMAR_CARDS
// entries in src/content/grammar.js before writing — see the audit note at
// the bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Just Did It: Acabar de + Infinitive',
      paragraphs: [
        "You already know the preterite for talking about finished actions — comí, llegué, estudié. Spanish has a second, more specialized tool for one particular flavor of past action: something that happened moments ago, so recently it still feels present. That tool is acabar de + infinitive, and it's one of the most useful B1 structures you'll learn, because you'll reach for it constantly in real conversation: explaining why you're out of breath, why your hands are wet, why you can't eat right now.",
        'The construction is simple to build: conjugate acabar in the present tense (a regular -ar verb: acabo, acabas, acaba, acabamos, acabáis, acaban), add de, then add an infinitive. Acabo de llegar means "I have just arrived." Acaba de salir means "she has just left." Notice that de never gets dropped and the second verb never gets conjugated — no matter who the subject is, the infinitive after de stays exactly as it is in the dictionary.',
        "There's a second, less obvious form worth learning right alongside the present: the imperfect, acababa de + infinitive, which means \"had just done something.\" This is how you place one recent action relative to another past moment, usually one introduced by cuando. Acababa de empezar a comer cuando sonó el teléfono — \"I had just started eating when the phone rang.\" The present tense (acabo de) anchors the recency to right now, the moment you're speaking; the imperfect (acababa de) anchors it to some other moment in the past that you're describing.",
        "Where does the literal meaning of acabar (\"to finish\") go in all this? It's still there in the background — acabar de + infinitive is literally something like \"to finish having done X,\" which is exactly why it lands on the meaning \"just did.\" Keep that etymology in mind; it'll help the next section make sense, where we look at what happens when you try to put this construction in the preterite.",
      ],
      examples: [
        { es: 'Acabo de llegar.', en: 'I have just arrived.' },
        { es: 'Acabas de cometer un error.', en: 'You have just made a mistake.' },
        { es: 'Mi hermana acaba de graduarse de la universidad.', en: 'My sister just graduated from university.' },
        { es: '¿Has comido? — Sí, acabo de comer.', en: 'Have you eaten? — Yes, I just ate.' },
        { es: 'Acababa de salir cuando llamaste.', en: 'She had just left when you called.' },
      ],
      commonMistakes: [
        'Don\'t conjugate the second verb — it stays an infinitive no matter what: "Acabo de llegar" is correct, "Acabo de llego" is not.',
        'Don\'t drop the de — it\'s "acabar de + infinitivo," never "acabar + infinitivo" on its own.',
        'Acabar de only carries the "just did" meaning in the present and imperfect. Other tenses either revert to acabar\'s literal meaning ("to finish") or simply aren\'t used this way — more on that next.',
      ],
    },
    {
      heading: 'Acabar de vs. the Preterite: Two Ways to Talk About Recent Past',
      paragraphs: [
        "Here's a question that trips up a lot of learners at this stage: if the preterite already covers completed past actions, why do you need acabar de at all? Couldn't you just say Comí a minute ago and be done with it? The answer is that the preterite is neutral about how recently something happened — Comí could mean five minutes ago or three days ago, and by itself it carries no built-in sense of \"just now.\" To convey recency with the preterite, you have to add it explicitly with words like hace un momento or hace poco: Comí hace un momento (\"I ate a moment ago\").",
        'Acabar de, by contrast, has immediacy baked directly into the construction — no extra words needed. Acabo de comer already means "I just ate, moments ago," full stop. That\'s the whole reason this periphrasis exists: it\'s a shortcut for a very specific, very common communicative need.',
        'Now for the trap: what happens if you put acabar de itself in the preterite, expecting it to mean "I just did X" but emphasizing that it\'s now fully over? It doesn\'t work that way. Acabé de estudiar does not mean "I just studied" — it reverts to acabar\'s literal, non-idiomatic meaning of "to finish," so it comes across as "I finished studying," with no sense of recency at all, the same way Terminé de estudiar would. The "just did" meaning of acabar de is only available in the present (acabo de) and the imperfect (acababa de) — never the preterite.',
        "So the practical rule for choosing between the two: reach for acabar de when the point you're making is how recently something happened. Reach for the plain preterite (with or without a time phrase like hace una hora) when the timing isn't the point — you're just stating that something happened.",
      ],
      examples: [
        { es: 'Comí hace una hora.', en: 'I ate an hour ago. (preterite + time phrase — neutral about recency)' },
        { es: 'Acabo de comer.', en: 'I just ate. (recency is built into the construction)' },
        { es: 'Acabé de estudiar. = Terminé de estudiar.', en: 'I finished studying. (preterite of acabar reverts to its literal meaning — NOT "I just studied")' },
        { es: 'Cuando llegué, acababan de irse.', en: 'When I arrived, they had just left. (imperfect — relative to another past moment)' },
      ],
      commonMistakes: [
        'Acabé de + infinitive is not a "more finished" version of "I just did X" — it changes meaning entirely to "I finished doing X," losing the sense of recency.',
        "Don't assume the preterite alone communicates \"just now\" — Comí by itself is compatible with any point in the past; you need acabar de (or an explicit time phrase) to pin down recency.",
        'Keep acabar de out of the future and conditional for this meaning — those tenses aren\'t used this way in standard Spanish.',
      ],
    },
    {
      heading: 'How Long Have You Been Doing This? Llevar + Gerund',
      paragraphs: [
        "Switch gears now to a different kind of time problem: not \"how recently did this happen,\" but \"how long has this been going on, and is it still going on right now?\" For that, Spanish uses llevar + gerund — a completely different verb from acabar, doing a completely different job. You already know the gerund from present progressive (estar + gerund: estoy comiendo, está hablando); llevar + gerund reuses that same -ando/-iendo form, just with a different auxiliary and a different meaning.",
        'The pattern: conjugate llevar (a regular -ar verb: llevo, llevas, lleva, llevamos, lleváis, llevan) to agree with the subject, add a length of time, add the gerund. Llevo tres años estudiando español — "I have been studying Spanish for three years." The time expression is flexible about position — it can sit right after llevar (Llevo tres años estudiando) or after the gerund (Llevo estudiando tres años) — but the gerund itself never changes form; it stays invariable no matter the subject, the same way it does in the present progressive.',
        "It's worth pausing on how this is different from estar + gerund, which you already know. Estoy estudiando just tells you an action is happening right now, with no reference to how long. Llevo tres años estudiando adds the duration — it's specifically built to answer \"for how long,\" and it implies the action is still ongoing at the moment of speaking, not finished. To ask that question yourself, use ¿Cuánto tiempo llevas + gerund?: ¿Cuánto tiempo llevas viviendo aquí? — \"How long have you been living here?\"",
        'And just like acabar de, llevar + gerund has a past-tense counterpart for describing duration relative to another past moment: the imperfect llevaba. Llevaba una hora esperando cuando llegó — "I had been waiting for an hour when he arrived." Same logic as acababa de: present tense anchors to now, imperfect anchors to some other point you\'re narrating in the past.',
      ],
      examples: [
        { es: 'Llevo tres años estudiando español.', en: 'I have been studying Spanish for three years.' },
        { es: 'Llevamos dos horas esperando.', en: "We've been waiting for two hours." },
        { es: '¿Cuánto tiempo llevas viviendo aquí?', en: 'How long have you been living here?' },
        { es: 'Mis padres llevan treinta años casados.', en: 'My parents have been married for thirty years.' },
        { es: 'Llevaba una hora esperando cuando llegó.', en: 'I had been waiting for an hour when he arrived.' },
      ],
      commonMistakes: [
        "Don't confuse llevar + gerund with estar + gerund — estoy estudiando is neutral about duration; llevo tres años estudiando specifically expresses how long, with the implication it's still happening now.",
        "The gerund never agrees with the subject — it's viviendo for yo, tú, ella, nosotros, everyone. Only llevar itself is conjugated.",
        'The time expression can move around the sentence (before or after the gerund), but it always comes after a conjugated form of llevar, not before it.',
      ],
    },
    {
      heading: "Llevar + Time + Sin + Infinitive: How Long You Haven't Done Something",
      paragraphs: [
        "Llevar has one more trick, for the mirror-image situation: expressing how long it's been since you last did something — a gap, an absence of action, rather than an action in progress. For that, swap the gerund for sin + infinitive: llevar + time + sin + infinitivo. Llevo dos días sin comer — \"I haven't eaten in two days.\" The logic is the same skeleton as llevar + gerund (conjugated llevar, then a length of time), but where the positive version reaches for a gerund, the negative version reaches for sin + the plain infinitive.",
        "This is genuinely one spot where English and Spanish part ways in how they build the idea, so it's worth being deliberate about it rather than translating word-for-word. English says \"I haven't eaten,\" which looks like it wants a negative verb form — but Spanish does not say Llevo dos días no comiendo. To express the absence of an action, Spanish uses sin + infinitivo, never no + gerundio. Once you've internalized that one substitution, the rest of the construction behaves exactly like llevar + gerund: same conjugation of llevar, same flexible placement of the time expression.",
        "And the same past-tense pattern applies here too: llevaba + time + sin + infinitivo for a gap that existed relative to another past moment. Llevaba mucho tiempo sin verla — \"He hadn't seen her in a long time\" (at some point being described in the past, not necessarily true right now).",
      ],
      examples: [
        { es: 'Llevo dos días sin comer.', en: "I haven't eaten in two days." },
        { es: 'Lleva tres meses sin fumar.', en: "He hasn't smoked in three months." },
        { es: '¿Cuánto tiempo llevas sin verla?', en: "How long has it been since you've seen her?" },
        { es: 'Llevaba mucho tiempo sin verla.', en: "He hadn't seen her in a long time." },
      ],
      commonMistakes: [
        'Never use no + gerundio for this meaning — "Llevo dos días no comiendo" is not correct Spanish; it has to be "Llevo dos días sin comer."',
        'Sin is followed by the plain infinitive, not a conjugated verb: sin comer, sin ver, sin trabajar — never sin como, sin veo.',
        "Don't mix up llevar + gerund (an action still happening: Llevo estudiando) with llevar + sin + infinitive (an action that hasn't happened: Llevo sin estudiar) — they describe opposite situations.",
      ],
    },
  ],

  vocab: [
    { es: 'acabar de', en: 'to have just (done something)', example: 'Acabo de terminar el informe.', exampleEn: 'I have just finished the report.' },
    { es: 'llevar', en: 'to have been (doing something) / to carry', example: 'Llevo un año viviendo en Chile.', exampleEn: "I've been living in Chile for a year." },
    { es: 'sin', en: 'without', example: 'Llevo tres días sin dormir bien.', exampleEn: "I haven't slept well in three days." },
    { es: 'cuánto tiempo', en: 'how long', example: '¿Cuánto tiempo llevas esperando?', exampleEn: 'How long have you been waiting?' },
    { es: 'todavía', en: 'still / yet', example: 'Todavía estamos esperando la respuesta.', exampleEn: "We're still waiting for the answer." },
    { es: 'ya', en: 'already', example: 'Ya acabé de comer.', exampleEn: 'I already finished eating.' },
    { es: 'mudarse', en: 'to move (change residence)', example: 'Acabamos de mudarnos a México.', exampleEn: 'We just moved to Mexico.' },
    { es: 'casarse (con)', en: 'to get married (to)', example: 'Llevan diez años casados.', exampleEn: "They've been married for ten years." },
    { es: 'graduarse', en: 'to graduate', example: 'Mi hermana acaba de graduarse.', exampleEn: 'My sister just graduated.' },
    { es: 'jubilarse', en: 'to retire', example: 'Mi padre acaba de jubilarse.', exampleEn: 'My father just retired.' },
    { es: 'enamorarse (de)', en: 'to fall in love (with)', example: 'Acaban de enamorarse.', exampleEn: 'They just fell in love.' },
    { es: 'esperar', en: 'to wait', example: 'Llevamos media hora esperando el autobús.', exampleEn: "We've been waiting half an hour for the bus." },
    { es: 'terminar', en: 'to finish', example: 'Acabo de terminar mi tarea.', exampleEn: 'I just finished my homework.' },
    { es: 'vivir', en: 'to live', example: '¿Cuánto tiempo llevas viviendo aquí?', exampleEn: 'How long have you been living here?' },
  ],

  practice: [
    // ── acabar_de block (blocked practice: drill the new construction in isolation first) ──
    { type: 'multiple_choice', prompt: 'Which sentence correctly means "I just ate"?', word: 'acabar de', english: 'to have just done something', answer: 'Acabo de comer.', options: ['Acabé de comer.', 'Acabo de comer.', 'Como.', 'Comía.'], concept_id: 'acabar_de', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Ella ___ de llegar." (acabar, present)', word: 'acabar', english: 'to have just done something', answer: 'acaba', concept_id: 'acabar_de', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We have just finished the exam.'", english: 'We have just finished the exam.', answer: 'Acabamos de terminar el examen.', word: 'acabar de', concept_id: 'acabar_de', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Acababa de dormirme cuando sonó el teléfono"?', word: 'acabar de (imperfect)', english: 'had just done something', answer: 'I had just fallen asleep when the phone rang.', concept_id: 'acabar_de', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Acabé de estudiar." (intending to say "I just studied")', word: 'acabar de', english: 'to have just done something', answer: 'Acabo de estudiar.', concept_id: 'acabar_de', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'How do you say "You (tú) have just arrived"?', word: 'acabar de', english: 'to have just done something', answer: 'Acabas de llegar.', options: ['Acabas de llegar.', 'Acabaste de llegar.', 'Acabas a llegar.', 'Acabas llegando.'], concept_id: 'acabar_de', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We have just moved to Mexico.'", english: 'We have just moved to Mexico.', answer: 'Acabamos de mudarnos a México.', word: 'mudarse', concept_id: 'acabar_de', difficulty: 3 },

    // ── llevar_gerund block (kept separate from acabar_de; blocked before mixed review) ──
    { type: 'fill_blank', prompt: 'Complete: "Nosotros ___ dos horas esperando." (llevar)', word: 'llevar', english: 'to have been doing (for a period of time)', answer: 'llevamos', concept_id: 'llevar_gerund', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I have been living in Madrid for five years.'", english: 'I have been living in Madrid for five years.', answer: 'Llevo cinco años viviendo en Madrid.', word: 'llevar', concept_id: 'llevar_gerund', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Cuánto tiempo llevas estudiando español?"?', word: 'llevar + gerundio', english: 'how long have you been doing', answer: 'How long have you been studying Spanish?', concept_id: 'llevar_gerund', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly means "I haven\'t seen her in three months"?', word: 'llevar + sin + infinitivo', english: "haven't done something for a period of time", answer: 'Llevo tres meses sin verla.', options: ['Llevo tres meses no viéndola.', 'Llevo tres meses sin verla.', 'Veo tres meses sin ella.', 'Llevo viendo tres meses sin ella.'], concept_id: 'llevar_gerund', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Llevo dos días no comiendo."', word: 'llevar + sin + infinitivo', english: "haven't done something for a period of time", answer: 'Llevo dos días sin comer.', concept_id: 'llevar_gerund', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete: "Él ___ mucho tiempo sin trabajar." (llevar)', word: 'llevar', english: 'to have been (not doing something) for a period of time', answer: 'lleva', concept_id: 'llevar_gerund', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'How long have you (tú) been waiting?'", english: 'How long have you been waiting?', answer: '¿Cuánto tiempo llevas esperando?', word: 'llevar', concept_id: 'llevar_gerund', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, Lawless Spanish
// Grammar, Kwiziq Spanish, StudySpanish-adjacent sources, and the existing
// GRAMMAR_CARDS entries for acabar_de/llevar_gerund in src/content/
// grammar.js before writing (July 2026):
// - Acabar de + infinitive = "to have just done something"; built from the
//   present tense of the regular -ar verb acabar (acabo/acabas/acaba/
//   acabamos/acabáis/acaban) + de + an invariable infinitive.
// - The "just did" meaning of acabar de exists only in the present and the
//   imperfect (acababa de = "had just done," used relative to another past
//   moment, e.g. with cuando) — confirmed via Lawless Spanish and Kwiziq.
// - Putting acabar de in the preterite (acabé de) does NOT mean "I just
//   did X" — it reverts to acabar's literal meaning "to finish," per
//   Study.com and Polyglottist Language Academy analysis; this is flagged
//   explicitly in Section 2 and in commonMistakes as the single most
//   important trap at this level.
// - The preterite alone (e.g. Comí) is neutral about recency and needs an
//   explicit time phrase (hace un momento, hace poco) to convey "just now";
//   acabar de builds that immediacy in without extra words.
// - Llevar + time expression + gerund = "have been doing X for Y time,"
//   describing an action that started in the past and is still ongoing;
//   llevar is a regular -ar verb (llevo/llevas/lleva/llevamos/lleváis/
//   llevan); the gerund is invariable, matching the present-progressive
//   gerund rule already taught. Time-expression placement is flexible
//   (before or after the gerund, but always after llevar) — confirmed via
//   Kwiziq and SpanishDict forum answers.
// - Llevar + time + sin + infinitive = "haven't done X in Y time" — the
//   negative/absence counterpart, using sin + plain infinitive rather than
//   no + gerundio (SpanishDict explicitly flags no + gerundio as incorrect
//   for this meaning). Imperfect llevaba (+ sin) + infinitive/gerund gives
//   the past-relative-to-past equivalents of both patterns, mirroring
//   acababa de.
// This content agrees with (does not contradict) the existing acabar_de and
// llevar_gerund entries in src/content/grammar.js and functions/_lib/
// concepts.js, and deliberately does not introduce hace + time + que (a
// related but distinct construction with no existing concept entry) or
// dejar de (reserved for the C1 perifraseis_avanzadas concept), to keep to
// one main new grammar point family per the "one main new grammar point"
// principle while still covering the required acabar_de/llevar_gerund
// contrast pairing.
