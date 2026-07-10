// Unit B1 — Certainty & Doubt: Everyday Probability Expressions (B1)
// Covers: expresiones_probabilidad_basica
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit teaches
// the lexical-hedge toolkit for expressing certainty, doubt, and probability
// — deber de + infinitive, the subjunctive-triggering doubt phrases (es
// posible/probable que, puede que, quizá(s)/tal vez), and the indicative
// exception (a lo mejor, seguramente). It is deliberately scoped away from
// the future/conditional-for-probability trick (Serán las diez, Tendría
// treinta años), which is a separate, later concept
// (futuro_probabilidad/condicional_probabilidad, C1) — this unit is about
// hedge words, not verb tense. Every Spanish claim below was verified
// against SpanishDict, Kwiziq Spanish, and other native-grammar sources
// before writing — see the audit note at the bottom of this file.

export default {
  sections: [
    {
      heading: 'Hedging a Guess: Deber de + Infinitive',
      paragraphs: [
        "You already know deber as \"should\" or \"must\" for obligation: Debes estudiar más (\"You should study more\"). Spanish reuses that same verb for a completely different job — making an educated guess — but marks the difference with one small word: de. Deber de + infinitive means \"must be,\" in the sense of \"I'm inferring this, not stating a fact.\" Debe de tener treinta años doesn't mean someone is obligated to be thirty — it means you're looking at the evidence (their job, their kids, the way they talk) and concluding they're probably around thirty.",
        "Why does one tiny preposition carry that much weight? Because English \"must\" is genuinely ambiguous — \"You must be tired\" (a guess) and \"You must finish this\" (an order) use the identical word, and only context tells them apart. Spanish, in its careful, written form, doesn't like that ambiguity, so it split the two meanings: deber alone for obligation, deber de for inference. Keep that \"de\" firmly attached to the probability sense and you'll never leave a reader guessing which \"must\" you meant.",
        "One honest caveat before you move on: in fast, casual speech, plenty of native speakers drop the de even when they mean probability — Debe tener treinta años, said quickly, is often understood as a guess from context alone, the same way English lets \"must\" do double duty. You'll hear this constantly. But as a learner, keeping deber de for guesses and deber (no de) for obligations gives you a clean, unambiguous default that's never wrong — so that's the version this unit teaches and drills.",
      ],
      examples: [
        { es: 'Debe de tener treinta años.', en: 'He must be around thirty. (a guess)' },
        { es: 'Debes llegar temprano.', en: 'You should arrive early. (an obligation, no de)' },
        { es: 'Debe de haber mucho tráfico.', en: "There must be a lot of traffic. (inferring from being late)" },
        { es: 'No debe de ser tan difícil.', en: "It probably isn't that difficult." },
      ],
      commonMistakes: [
        'Mixing up deber (obligation, "should/must do") with deber de (probability, "must be") — Debes llamarla means "You should call her"; Debes de llamarla, with de, would be read as a guess ("You must be calling her"), which rarely makes sense — check which meaning you actually want before you add or drop the de.',
        "Don't expect anything unusual from the infinitive that follows deber de — it stays a plain infinitive, never a subjunctive form. Deber de + infinitive is a hedge on the whole idea, not a trigger for the verb that comes after it.",
      ],
    },
    {
      heading: 'When Doubt Talks Back: The Subjunctive Hedges',
      paragraphs: [
        "Back in your subjunctive units you learned that Spanish grammatically marks the difference between a stated fact and something that isn't (yet) a settled fact — wishes, requests, emotional reactions. Doubt belongs to that same family. When you say es posible que, es probable que, or puede que, you're explicitly framing what follows as not a fact — just a possibility floating in your head — and Spanish requires the subjunctive to mark that status, with no exceptions: Es posible que llueva mañana, Es probable que ya lo sepa, Puede que no lo sepa. If you catch yourself putting llueve, sabe, or any indicative verb after these three, stop and switch to the subjunctive.",
        "Puede que deserves a special note because it looks like it should conjugate and doesn't: it's a frozen phrase, always puede, no matter who or what you're talking about. Puede que ellos vengan (not \"pueden que\"), Puede que yo esté equivocado — puede que never changes shape; only the verb after que does, and that verb is always subjunctive.",
        "Quizá(s) and tal vez (both mean \"maybe/perhaps,\" completely interchangeable) work a little differently: they attach straight to the following verb with no que at all — Quizá venga, Tal vez tengas razón. Here's the nuance worth knowing, even if it doesn't affect your everyday choices much: native speakers do sometimes follow quizá/tal vez with the indicative instead of the subjunctive, and when they do, it tends to signal they think the thing is actually more likely to be true, while the subjunctive signals real, live doubt. You'll see both in the wild. As a learner, though, the subjunctive is the far more common choice and the safe default — use it unless you have a specific reason not to.",
      ],
      examples: [
        { es: 'Es posible que llueva mañana.', en: "It's possible it'll rain tomorrow." },
        { es: 'Es probable que ya lo sepa.', en: "She's probably already found out." },
        { es: 'Puede que no lo sepa.', en: "She might not know it." },
        { es: 'Quizá venga a la fiesta.', en: "Maybe she'll come to the party." },
        { es: 'Tal vez tengas razón.', en: "Maybe you're right." },
      ],
      commonMistakes: [
        'Trying to conjugate puede to match the subject ("pueden que vengan" for "they might come") — puede que is invariable; only vengan changes.',
        'Slipping back into the indicative after es posible que or puede que out of habit ("Es posible que llueve" instead of llueva) — these two are hard, no-exceptions subjunctive triggers, unlike the expressions in the next section.',
        "Assuming quizá/tal vez must always take the subjunctive — they can genuinely take either, but if you're not sure which nuance you want, the subjunctive is the safer, far more common default.",
      ],
    },
    {
      heading: 'The Exception That Proves the Rule: A Lo Mejor & Seguramente',
      paragraphs: [
        "Here's the single most important twist in this whole unit, so read it twice. A lo mejor means almost exactly the same thing as es posible que — \"maybe\" — and yet it behaves completely differently: a lo mejor never triggers the subjunctive. Ever. A lo mejor ya se fue, A lo mejor vamos a la playa — plain indicative, every time, no matter how uncertain the guess actually is. It doesn't work like es posible que grammatically at all; it's an adverbial hedge that just sits in front of an ordinary indicative sentence, not a subordinator that reaches forward and changes the mood of the verb after it.",
        "This is genuinely confusing the first time you meet it, because the meaning feels identical to your ear: A lo mejor llueve and Es posible que llueva both translate as \"Maybe it'll rain\" in English. But only one of them uses the subjunctive. The reliable test isn't \"how sure does the speaker sound\" — it's simply which expression is doing the hedging. See es posible/probable que or puede que? Subjunctive. See a lo mejor? Indicative, full stop.",
        "Seguramente (\"surely,\" \"probably\") follows the same everyday pattern as a lo mejor: pair it with the indicative by default — Seguramente llega tarde (\"She'll probably arrive late\"). It's worth knowing, purely as a heads-up so it doesn't throw you later, that seguramente is technically flexible in more advanced/native usage — you may occasionally hear a subjunctive verb right after it for extra emphasis on the doubt. That's a genuine wrinkle in real speech, not something this unit expects you to produce; for now, treat seguramente exactly like a lo mejor and reach for the indicative.",
      ],
      examples: [
        { es: 'A lo mejor ya se fue.', en: 'Maybe she already left. (indicative)' },
        { es: 'A lo mejor vamos a la playa este fin de semana.', en: 'We might go to the beach this weekend.' },
        { es: 'Seguramente llega tarde.', en: "She'll probably arrive late." },
        { es: 'Es posible que llueva. / A lo mejor llueve.', en: "It's possible it'll rain. / Maybe it'll rain. (same idea, different mood)" },
      ],
      commonMistakes: [
        'Applying the subjunctive to a lo mejor by analogy with es posible que ("A lo mejor llueva" for "Maybe it\'ll rain") — a lo mejor always keeps the indicative, with no exceptions at this level.',
        'Making the same mistake with seguramente — treat it like a lo mejor by default: indicative, not subjunctive.',
        "Forgetting that a lo mejor and seguramente still work with any indicative tense you already know (present, future, preterite) — the only special rule is \"don't switch to subjunctive,\" not \"only use the present.\"",
      ],
    },
  ],

  vocab: [
    { es: 'deber de', en: 'must be (probability)', example: 'Debe de tener treinta años.', exampleEn: 'He must be around thirty.' },
    { es: 'deber', en: 'should / must (obligation)', example: 'Debes llegar temprano.', exampleEn: 'You should arrive early.' },
    { es: 'es posible que', en: "it's possible that", example: 'Es posible que llueva mañana.', exampleEn: "It's possible it'll rain tomorrow." },
    { es: 'es probable que', en: "it's probable that", example: 'Es probable que ya lo sepa.', exampleEn: "She's probably already found out." },
    { es: 'puede que', en: 'it might be that / maybe', example: 'Puede que no lo sepa.', exampleEn: "She might not know it." },
    { es: 'quizá(s)', en: 'maybe / perhaps', example: 'Quizá venga a la fiesta.', exampleEn: "Maybe she'll come to the party." },
    { es: 'tal vez', en: 'maybe / perhaps', example: 'Tal vez tengas razón.', exampleEn: "Maybe you're right." },
    { es: 'a lo mejor', en: 'maybe (always indicative)', example: 'A lo mejor ya se fue.', exampleEn: 'Maybe she already left.' },
    { es: 'seguramente', en: 'surely / probably', example: 'Seguramente llega tarde.', exampleEn: "She'll probably arrive late." },
    { es: 'tener razón', en: 'to be right', example: 'Tal vez tengas razón.', exampleEn: "Maybe you're right." },
    { es: 'llover', en: 'to rain', example: 'Es posible que llueva mañana.', exampleEn: "It's possible it'll rain tomorrow." },
    { es: 'saber', en: 'to know', example: 'Puede que no lo sepa.', exampleEn: "She might not know it." },
    { es: 'el tráfico', en: 'traffic', example: 'Debe de haber mucho tráfico.', exampleEn: 'There must be a lot of traffic.' },
  ],

  practice: [
    // ── deber de vs. deber block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: "Which sentence expresses a guess (\"must be\"), not an obligation?", word: 'debe de', english: 'must be', answer: 'Debe de tener treinta años.', options: ['Debes estudiar más.', 'Debe de tener treinta años.', 'Debemos salir ya.', 'Debiste llamarme.'], concept_id: 'expresiones_probabilidad_basica', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete to say "She must be tired" (a guess, not an order): "___ estar cansada."', word: 'debe de', english: 'must be', answer: 'Debe de', concept_id: 'expresiones_probabilidad_basica', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate (this is an obligation, not a guess): \"You should arrive early.\"", english: 'You should arrive early.', answer: 'Debes llegar temprano.', word: 'debes', concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: this sentence is meant to give an order (obligation), not a guess: "Debe de estudiar más."', word: 'debes', english: 'you should', answer: 'Debes estudiar más.', concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },

    // ── subjunctive-triggering doubt block (blocked practice) ──
    { type: 'multiple_choice', prompt: 'Which verb form correctly completes: "Es posible que ___ (llover) mañana."', word: 'llueva', english: 'it rains', answer: 'llueva', options: ['llueve', 'llueva', 'lloverá', 'llovía'], concept_id: 'expresiones_probabilidad_basica', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Puede que no lo ___ (saber)."', word: 'sepa', english: 'she knows', answer: 'sepa', concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: \"It's probable that she already knows it.\"", english: "It's probable that she already knows it.", answer: 'Es probable que ya lo sepa.', word: 'es probable que', concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly uses puede que ("they might come")?', word: 'puede que vengan', english: 'they might come', answer: 'Puede que vengan.', options: ['Pueden que vengan.', 'Puede que vengan.', 'Puede que vienen.', 'Puede que van a venir.'], concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Es posible que llueve mañana."', word: 'llueva', english: "it'll rain", answer: 'Es posible que llueva mañana.', concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Tal vez tengas razón.', word: 'tal vez', english: 'maybe', answer: "Maybe you're right.", concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the subjunctive (real, live doubt): "Quizá ___ (venir) a la fiesta, pero no estoy seguro."', word: 'venga', english: 'she comes', answer: 'venga', concept_id: 'expresiones_probabilidad_basica', difficulty: 3 },

    // ── indicative exception block: a lo mejor / seguramente (blocked, then contrasted directly) ──
    { type: 'multiple_choice', prompt: 'Which mood does a lo mejor always use?', word: 'a lo mejor', english: 'maybe', answer: 'Indicative, always', options: ['Indicative, always', 'Subjunctive, always', 'Either, depending on how doubtful you feel', 'Imperative'], concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct mood: "A lo mejor ___ (llover) mañana."', word: 'llueve', english: "it'll rain", answer: 'llueve', concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "A lo mejor llueva mañana."', word: 'llueve', english: "it'll rain", answer: 'A lo mejor llueve mañana.', concept_id: 'expresiones_probabilidad_basica', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which pair correctly matches expression to mood?', word: 'es posible que / a lo mejor', english: 'subjunctive vs. indicative', answer: 'Es posible que + subjunctive; a lo mejor + indicative', options: ['Es posible que + indicative; a lo mejor + subjunctive', 'Es posible que + subjunctive; a lo mejor + indicative', 'Both always take the subjunctive', 'Both always take the indicative'], concept_id: 'expresiones_probabilidad_basica', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate using a lo mejor (indicative): \"We might go to the beach this weekend.\"", english: 'We might go to the beach this weekend.', answer: 'A lo mejor vamos a la playa este fin de semana.', word: 'a lo mejor', concept_id: 'expresiones_probabilidad_basica', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate using es posible que (subjunctive): \"It's possible we'll go to the beach this weekend.\"", english: "It's possible we'll go to the beach this weekend.", answer: 'Es posible que vayamos a la playa este fin de semana.', word: 'es posible que', concept_id: 'expresiones_probabilidad_basica', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Seguramente llega tarde.', word: 'seguramente', english: 'surely / probably', answer: "She'll probably arrive late.", concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },

    // ── Production practice: writing_prompt (self-assessed, no exact-match grading) ──
    { type: 'writing_prompt', prompt: 'No sabes dónde está un amigo ahora mismo. Escribe 2-3 frases especulando dónde puede estar, usando expresiones como "debe de", "es posible que", o "a lo mejor".', word: null, english: null, answer: 'Debe de estar todavía en el trabajo. Es posible que tenga una reunión larga hoy. A lo mejor me llama cuando termine.', concept_id: 'expresiones_probabilidad_basica', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, Kwiziq Spanish,
// and related native-grammar sources before writing (July 2026):
// - Deber (no "de") = obligation ("should/must do") vs. deber de + infinitive
//   = probability/inference ("must be") — confirmed against Kwiziq's "Deber
//   versus Deber de" page and multiple SpanishDict Answers threads. Also
//   confirmed the commonly-noted caveat that native speakers often drop the
//   "de" in casual speech even when they mean probability, blurring the
//   distinction in practice — this unit still teaches the clean, careful
//   version (de = probability) as the safe default, matching the existing
//   src/content/grammar.js entry for this concept.
// - Es posible que / es probable que / puede que as hard, obligatory
//   subjunctive triggers (no indicative alternative, even negated: "no es
//   posible que...") confirmed against SpanishDict Answers and general
//   subjunctive-trigger sources.
// - Puede que as an invariable/frozen phrase (never "pueden que," only the
//   subordinate verb conjugates) confirmed against Kwiziq's "Puede que +
//   subjunctive for possibility" page.
// - A lo mejor takes the indicative always, never the subjunctive, despite
//   expressing doubt — explicitly confirmed against Kwiziq's "El Indicativo
//   with a lo mejor/igual/lo mismo" pages (both the Spain and LatAm
//   versions). One source explicitly offers "a lo mejor" as the
//   indicative-only alternative to es posible que for learners who want to
//   avoid the subjunctive, which corroborates the contrast this unit
//   teaches as its central "aha."
// - Quizá(s)/tal vez: confirmed genuine, real variation exists here, not
//   settled the way a lo mejor is — both can take either indicative or
//   subjunctive, with subjunctive generally signaling greater doubt and
//   indicative signaling the speaker leans toward the statement being true
//   (this matches the existing grammar.js note that subjunctive is "more
//   common and the safer default" rather than obligatory). Some
//   forum/pedagogical sources (e.g. a Rocket Languages forum thread) also
//   claim mood is affected by whether quizá/tal vez appears before or after
//   the verb; this position-based rule is less consistently corroborated
//   across the higher-authority sources checked (Kwiziq, SpanishDict), so
//   this unit deliberately does not teach it as settled fact — it sticks to
//   the confidence-level explanation, which is the more consistently
//   attested one.
// - Seguramente: default/everyday pairing is indicative, confirmed against
//   SpanishDict's translation entry and general adverb-of-doubt sources.
//   However, Spanish-language grammar sources (hispanoteca.eu,
//   espanolavanzado.com, a WordReference forum thread) show seguramente is
//   genuinely more flexible than a lo mejor — native speakers do sometimes
//   follow it with the subjunctive for extra emphasis on doubt, especially
//   when seguramente immediately precedes the verb. This unit flags that
//   wrinkle explicitly in the prose rather than presenting seguramente as
//   quite as ironclad-indicative as a lo mejor, while still teaching
//   indicative as the correct everyday default and the only form drilled
//   in practice.
// This content agrees with and does not contradict the existing
// GRAMMAR_CARDS entry for expresiones_probabilidad_basica in
// src/content/grammar.js, and is deliberately scoped away from
// futuro_probabilidad/condicional_probabilidad (future/conditional tense
// used for probability, e.g. "Serán las diez") — those remain untaught
// here and are reserved for their own C1 units.
