// Unit 32 — Register & Epistemic Stance (C2)
// Covers: modalizacion_epistemica
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit also
// follows ES.md's C2-specific framing: per DELE/Instituto Cervantes research,
// C2 is not primarily about learning new grammar structures — by this level
// nearly all of the grammar is already in place — it's about register
// control, discourse markers, and pragmatic nuance: sounding native, not
// just correct. Every Spanish claim below was verified against RAE
// (Diccionario panhispánico de dudas), general linguistic descriptions of
// modalidad epistémica, and journalism-ethics sources on legal/journalistic
// register before writing — see the audit note at the bottom of this file.
//
// Curriculum-pacing-lag fix (07-09-2026): this unit originally also taught
// registro_formal_informal and controladores_contacto, but the CEFR audit
// retagged both down to C1. They've moved, verbatim, to unit29-fixed-
// expressions.js (registro_formal_informal) and unit-b2-argumentation-
// workplace.js (controladores_contacto) — see ES.md's punch-list item 29.
// modalizacion_epistemica stays here; it's still correctly C2.

export default {
  sections: [
    {
      heading: 'Hedging Your Certainty: Epistemic Modalization',
      paragraphs: [
        "Epistemic modalization is the technical name for a very practical skill: signaling how sure you are about something, or that you're relaying a claim rather than personally vouching for it. Compare El vuelo se retrasó — a flat, unhedged statement of fact — with Al parecer, el vuelo se retrasó — \"Apparently, the flight was delayed,\" which reports the same information while explicitly distancing the speaker from full certainty. Nothing about the underlying grammar changes; what changes is the speaker's stance toward their own claim.",
        "Al parecer and según parece both translate as \"apparently\" or \"it seems that,\" and function as close synonyms: both signal that the information comes from indirect evidence, secondhand report, or general impression rather than something the speaker witnessed or confirmed firsthand. Según parece leans slightly more formal/written, and can front a sentence the same way al parecer does: Según parece, cambiarán la fecha de la reunión (\"It seems they'll change the meeting date\").",
        'Se supone que ("it\'s supposed to / it\'s assumed that") does something subtly different: it points to an expectation, plan, or common assumption — often one the speaker is quietly questioning or about to contradict. Se supone que la tienda abre a las nueve is a neutral statement of an assumed fact, but the same phrase very often carries a note of mild criticism or disappointment when reality violates the assumption: Se supone que ibas a llamarme ("You were supposed to call me" — and didn\'t).',
        'Presuntamente ("allegedly") is the most register-specific of the four, and the one most worth using carefully. It\'s strongly tied to legal and journalistic register, precisely because it protects the presunción de inocencia (presumption of innocence): a news report says el sospechoso, presuntamente implicado en el fraude rather than flatly asserting guilt before any conviction. Reach for it in casual conversation about an everyday claim — who ate the last slice of pizza — and it will land as comically overformal or ironic rather than genuinely cautious.',
      ],
      examples: [
        { es: 'Al parecer, el vuelo se retrasará dos horas.', en: 'Apparently, the flight will be delayed two hours.' },
        { es: 'Según parece, el acuerdo se firmará la próxima semana.', en: 'It seems that the agreement will be signed next week.' },
        { es: 'Se supone que la tienda abre a las nueve.', en: 'The shop is supposed to open at nine.' },
        { es: 'Se supone que ibas a llamarme anoche.', en: "You were supposed to call me last night. (mild reproach — the expectation wasn't met)" },
        { es: 'El sospechoso, presuntamente implicado en el fraude, negó los cargos.', en: 'The suspect, allegedly involved in the fraud, denied the charges.' },
      ],
      commonMistakes: [
        "Treating all four hedges as fully interchangeable — presuntamente belongs to legal/journalistic register specifically; swapping it into casual talk about a friend eating the last cookie sounds like a joke, not genuine caution. Al parecer or por lo que parece would be the natural everyday choice instead.",
        "Reading se supone que as pure neutral information every time — very often it carries an implied 'and that didn't happen' or 'and I'm not so sure,' especially in spoken Spanish. Missing that undertone means missing the speaker's actual attitude.",
        'Forgetting these hedges do the same job — signaling inference or reduced certainty — as tools taught elsewhere, like the future/conditional of probability (será, sería tarde). Different structure, same underlying pragmatic function: distancing the speaker from full commitment to the claim.',
      ],
    },
  ],

  vocab: [
    { es: 'al parecer', en: 'apparently (neutral epistemic hedge)', example: 'Al parecer, el tren llega con retraso.', exampleEn: 'Apparently, the train is running late.' },
    { es: 'según parece', en: 'it seems that, apparently (neutral, slightly more formal/written)', example: 'Según parece, cambiarán la fecha de la reunión.', exampleEn: "It seems they'll change the date of the meeting." },
    { es: 'se supone que', en: "it's supposed to / it's assumed that (neutral; often implies an unmet expectation)", example: 'Se supone que la tienda abre a las nueve.', exampleEn: 'The shop is supposed to open at nine.' },
    { es: 'presuntamente', en: 'allegedly (formal, legal/journalistic register)', example: 'El conductor, presuntamente ebrio, provocó el accidente.', exampleEn: 'The driver, allegedly drunk, caused the accident.' },
  ],

  practice: [
    // ── modalizacion_epistemica block ──
    { type: 'multiple_choice', prompt: "Complete, keeping a neutral hedge (not a legal/journalistic one): '___, el vuelo se retrasará dos horas.'", word: 'al parecer', english: 'apparently', answer: 'Al parecer', options: ['Al parecer', 'Presuntamente', 'Se supone que no', 'Es cierto que'], concept_id: 'modalizacion_epistemica', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Se supone que ibas a llamarme anoche"?', word: 'se supone que', english: "you were supposed to (implying you didn't)", answer: 'You were supposed to call me last night. (implying a broken expectation)', concept_id: 'modalizacion_epistemica', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'El sospechoso está ___ implicado en el fraude.'",
      word: 'presuntamente',
      english: 'allegedly (legal/journalistic register)',
      answer: 'presuntamente',
      concept_id: 'modalizacion_epistemica',
      difficulty: 2,
      passage: 'Según las primeras informaciones, el sospechoso está presuntamente implicado en el fraude que se descubrió la semana pasada. Al parecer, la empresa llevaba meses perdiendo dinero sin que nadie lo notara. Se supone que el consejo de administración iba a revisar las cuentas cada trimestre, pero, según parece, nadie cumplió con ese control. La policía no ha confirmado nada oficialmente todavía.',
      passageEn: 'According to initial reports, the suspect is allegedly involved in the fraud discovered last week. Apparently, the company had been losing money for months without anyone noticing. The board of directors was supposed to review the accounts every quarter, but, it seems, no one followed through on that oversight. Police have not officially confirmed anything yet.',
    },
    {
      type: 'multiple_choice',
      prompt: "Según el texto, ¿por qué el periodista usa 'presuntamente' en vez de afirmar directamente la culpabilidad del sospechoso?",
      word: 'presuntamente',
      english: 'allegedly',
      answer: 'Porque protege la presunción de inocencia hasta que se demuestre lo contrario',
      options: [
        'Porque protege la presunción de inocencia hasta que se demuestre lo contrario',
        'Porque "presuntamente" significa exactamente lo mismo que "culpable"',
        'Porque es una palabra más corta y fácil de escribir',
        'Porque el periodista ya sabe que el sospechoso es inocente',
      ],
      concept_id: 'modalizacion_epistemica',
      difficulty: 3,
      passage: 'Según las primeras informaciones, el sospechoso está presuntamente implicado en el fraude que se descubrió la semana pasada. Al parecer, la empresa llevaba meses perdiendo dinero sin que nadie lo notara. Se supone que el consejo de administración iba a revisar las cuentas cada trimestre, pero, según parece, nadie cumplió con ese control. La policía no ha confirmado nada oficialmente todavía.',
      passageEn: 'According to initial reports, the suspect is allegedly involved in the fraud discovered last week. Apparently, the company had been losing money for months without anyone noticing. The board of directors was supposed to review the accounts every quarter, but, it seems, no one followed through on that oversight. Police have not officially confirmed anything yet.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Se supone que el consejo de administración iba a revisar las cuentas cada trimestre, pero, según parece, nadie cumplió con ese control.'",
      word: 'se supone que... según parece',
      english: 'it was supposed to... it seems',
      answer: "The board of directors was supposed to review the accounts every quarter, but, it seems, no one followed through on that oversight.",
      concept_id: 'modalizacion_epistemica',
      difficulty: 3,
      passage: 'Según las primeras informaciones, el sospechoso está presuntamente implicado en el fraude que se descubrió la semana pasada. Al parecer, la empresa llevaba meses perdiendo dinero sin que nadie lo notara. Se supone que el consejo de administración iba a revisar las cuentas cada trimestre, pero, según parece, nadie cumplió con ese control. La policía no ha confirmado nada oficialmente todavía.',
      passageEn: 'According to initial reports, the suspect is allegedly involved in the fraud discovered last week. Apparently, the company had been losing money for months without anyone noticing. The board of directors was supposed to review the accounts every quarter, but, it seems, no one followed through on that oversight. Police have not officially confirmed anything yet.',
    },
    { type: 'translation_to_spanish', prompt: "Translate: 'Apparently, they'll change the date of the meeting.'", english: "Apparently, they'll change the date of the meeting.", answer: 'Según parece, cambiarán la fecha de la reunión.', word: 'según parece', concept_id: 'modalizacion_epistemica', difficulty: 2 },
    {
      type: 'error_correction',
      prompt: "Fix the register mismatch: 'Presuntamente, mi hermano se comió la última galleta.' (a casual, everyday claim — not a legal/journalistic one)",
      word: 'al parecer',
      english: 'apparently (the natural everyday hedge)',
      answer: 'Al parecer, mi hermano se comió la última galleta.',
      concept_id: 'modalizacion_epistemica',
      difficulty: 3,
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - modalizacion_epistemica: al parecer / según parece as near-synonymous
//   evidential/epistemic hedges signaling inference or secondhand
//   information rather than firsthand certainty; se supone que marking an
//   assumption that can carry an implied unmet expectation; presuntamente as
//   specifically legal/journalistic register tied to presunción de
//   inocencia — checked against the general linguistic definition of
//   modalidad epistémica (Wikipedia ES summary of the pragmatic/semantic
//   concept: speaker's stance toward the dictum) and against journalism-
//   ethics sources on "presuntamente" and presumption of innocence in
//   Spanish-language reporting. Matches the existing GRAMMAR_CARDS entry for
//   modalizacion_epistemica in src/content/grammar.js.
// - General C2 framing (register/pragmatics, not new grammar, as the core
//   C2 skill) checked against Instituto Cervantes' Plan Curricular, "6.
//   Tácticas y estrategias pragmáticas. Inventario. C1-C2," which places
//   register marking (marcas de registro) as increasingly dense at C1 and
//   especially C2, alongside field/mode discourse features.
// This content is complementary to the existing GRAMMAR_CARDS entry for
// modalizacion_epistemica in src/content/grammar.js (same facts, fuller
// C2-paced walkthrough with an original passage) and does not contradict
// it.
//
// Curriculum-pacing-lag fix (07-09-2026): registro_formal_informal and
// controladores_contacto were removed from this unit (see header note for
// where each relocated); their citations, previously included here, now
// live in the audit notes of unit29-fixed-expressions.js and
// unit-b2-argumentation-workplace.js respectively. See ES.md's punch-list
// item 29.
