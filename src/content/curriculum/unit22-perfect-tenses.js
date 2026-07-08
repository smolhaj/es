// Unit 21 — Perfect Tenses (B2, first unit of the B2 tier)
// Covers: present_perfect, pluperfect, future_perfect, conditional_perfect
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com, and other
// established grammar references before writing — see the audit note at
// the bottom of this file for the specific claims checked. This unit
// orders present_perfect first (per functions/_lib/concepts.js, it is the
// shared prerequisite of all three other perfect tenses), then pluperfect,
// future_perfect, conditional_perfect, matching the task's specified order.

export default {
  sections: [
    {
      heading: 'One Pattern, Four Tenses: Meet the Perfect Tenses',
      paragraphs: [
        "Here's the good news before you learn anything new: you already know almost all of what's in this unit. Every one of the four \"perfect\" tenses in Spanish — present perfect, pluperfect, future perfect, and conditional perfect — is built from exactly the same two-piece pattern: a conjugated form of the helper verb haber (\"to have,\" in the sense of an auxiliary, not possession), plus a past participle that never changes. He hablado, había hablado, habré hablado, habría hablado — same participle, hablado, every single time. The only thing that changes across all four tenses is which tense haber itself is conjugated in.",
        "This is a genuinely different way to think about this unit than most grammar topics: you're not learning four unrelated things, you're learning one participle-formation rule and four small sets of haber conjugations, then combining them. Present perfect uses haber in the present (he, has, ha…); pluperfect uses haber in the imperfect (había, habías…); future perfect uses haber in the simple future (habré, habrás…); conditional perfect uses haber in the conditional (habría, habrías…). If you already know the present, imperfect, future, and conditional conjugations of regular verbs, you already know the pattern haber follows in each case — haber is irregular in a few of these tenses, but predictably so, and you'll see the exact forms in each section below.",
        "One rule holds across all four tenses without exception, and it's worth fixing in your mind now: haber and the past participle are never separated. No adverb, no negation word, nothing goes between them. \"I have already eaten\" is Ya he comido or He comido ya — never *He ya comido. And the past participle itself never changes for gender or number when it follows haber — hemos comido is the same whether \"we\" are two women, two men, or a mixed group. (This is different from when a participle is used as a plain adjective, like la puerta está abierta — but that's not what's happening in these four tenses, so don't let it confuse you here.)",
      ],
      examples: [
        { es: 'He comido. — Había comido. — Habré comido. — Habría comido.', en: 'I have eaten. — I had eaten. — I will have eaten. — I would have eaten.' },
        { es: 'Ya hemos terminado.', en: 'We have already finished. (never *hemos ya terminado)' },
        { es: 'No he visto esa película todavía.', en: "I haven't seen that movie yet." },
        { es: 'Ellas han vivido aquí, y ellos también han vivido aquí.', en: 'They (f.) have lived here, and they (m.) have too. (participle never changes)' },
      ],
      commonMistakes: [
        "Don't insert an adverb or ya between haber and the participle — He ya terminado is wrong; it must be Ya he terminado or He terminado ya.",
        'The past participle after haber is frozen — it does not agree with the subject\'s gender or number. Resist the instinct to write "hemos comidos" or "ha llegada"; it is always hemos comido, ha llegado, no matter who is speaking.',
        "Don't try to memorize these four tenses as four separate vocabulary lists — they share one participle system. Learn the participle once, then just swap which tense haber is in.",
      ],
    },
    {
      heading: 'Present Perfect: Building the Past Participle',
      paragraphs: [
        'The present perfect (he hablado, "I have spoken") is built from haber conjugated in the present — he, has, ha, hemos, habéis, han — plus a past participle. To form a regular past participle, drop the infinitive ending and add -ado for -ar verbs, or -ido for -er and -ir verbs: hablar → hablado (spoken), comer → comido (eaten), vivir → vivido (lived). That\'s the whole regular rule, and it applies to the vast majority of Spanish verbs.',
        "A handful of very common verbs, though, have irregular past participles that simply have to be memorized, because they don't follow the -ado/-ido pattern at all. The core list: hacer → hecho (done/made), decir → dicho (said), poner → puesto (put), ver → visto (seen), volver → vuelto (returned), escribir → escrito (written), abrir → abierto (opened), morir → muerto (died), romper → roto (broken), cubrir → cubierto (covered). Notice a pattern within the irregulars themselves: several end in -to (puesto, visto, vuelto, abierto, muerto, roto, cubierto) and two end in -cho (hecho, dicho) — that won't help you predict a new irregular participle from scratch, but it does make the list a bit easier to hold in memory once you've seen it a few times. Compound verbs built on these roots stay irregular the same way: descubrir → descubierto, devolver → devuelto, deshacer → deshecho.",
        "Use the present perfect the way you'd use English \"have/has + past participle\" — for an action completed at some point up to now, often (though not always) with a connection to the present moment: ¿Has estado en España? (\"Have you been to Spain?\") asks about your whole life up to now, not a specific date. Hemos vivido aquí cinco años (\"We have lived here for five years\") describes something that started in the past and continues to be true. This is the same logical territory as English's present perfect, so if you can already feel the difference between \"I ate\" and \"I have eaten\" in English, you already have decent intuition for when Spanish reaches for this tense.",
        "One regional note worth knowing, though it's a tendency rather than a hard rule: in Spain, the present perfect is used quite freely for same-day events — Esta mañana he desayunado tarde (\"This morning I had a late breakfast\") sounds completely natural there, even though the action is already over. In much of Latin America, the simple preterite is preferred for that same sentence — Esta mañana desayuné tarde — regardless of how recently it happened. (The Andean region is a partial exception, leaning closer to the Spain pattern.) Both are correct Spanish; this is a difference in everyday habit, not a grammar error, so don't be surprised when you hear either version.",
      ],
      examples: [
        { es: 'He hablado con ella esta semana.', en: 'I have spoken with her this week.' },
        { es: '¿Has comido algo hoy?', en: 'Have you eaten anything today?' },
        { es: 'Ha vivido en tres países diferentes.', en: 'He has lived in three different countries.' },
        { es: 'Todavía no he hecho la tarea.', en: "I haven't done the homework yet." },
        { es: '¿Habéis visto mis llaves?', en: 'Have you all seen my keys? (Spain, vosotros)' },
        { es: 'Nunca han estado en Perú.', en: 'They have never been to Peru.' },
      ],
      commonMistakes: [
        'Don\'t regularize the irregular participles — "hacido" and "decido" (for hacer and decir) are common learner errors; the correct forms are hecho and dicho.',
        'Watch out for compound verbs built on irregular roots: devolver follows volver (devuelto, not devolvido), and descubrir follows cubrir (descubierto, not descubrido).',
        "Don't assume the present perfect is interchangeable with the preterite everywhere — in Spain it's the natural choice for same-day events, but a Latin American speaker will often reach for the preterite (desayuné, not he desayunado) in that exact same situation. Neither is wrong; it's regional.",
      ],
    },
    {
      heading: 'Pluperfect: The Past of the Past',
      paragraphs: [
        "The pluperfect (había hablado, \"I had spoken\") swaps in one different piece of the pattern: haber conjugated in the imperfect instead of the present — había, habías, había, habíamos, habíais, habían — plus the exact same past participle you just learned (hablado, comido, vivido, hecho, dicho, and so on; nothing new to memorize there). Notice había and habían look similar at a glance but are not the same person — había is yo/él/ella/usted, habían is ellos/ellas/ustedes — so read carefully for the rest of that word or its context.",
        'Use the pluperfect to describe an action that had already been completed before another past action or point in time — it\'s literally "the past of the past," a step further back in time than the preterite or imperfect you\'ve already been using. Cuando llegué, ya habían comido ("When I arrived, they had already eaten") sets up two past events and makes clear which one happened first: the eating (pluperfect, habían comido) came before the arriving (preterite, llegué). Without the pluperfect, Cuando llegué, comieron would leave the sequence ambiguous — did they eat before or after you arrived? The pluperfect removes that ambiguity by explicitly marking "already further in the past."',
        'You\'ll see the pluperfect very often paired with ya ("already") for exactly this reason — ya había terminado ("I had already finished") — though ya isn\'t required grammatically, just extremely common because it reinforces the "before this other point" meaning. You\'ll also meet the pluperfect constantly in reported/indirect speech: Me dijo que ya había hablado con el director ("He told me he had already spoken with the director") reports something that was, at the time it was said, already in the past relative to the telling.',
      ],
      examples: [
        { es: 'Cuando llegué, ya habían comido.', en: 'When I arrived, they had already eaten.' },
        { es: 'No había visto esa película antes de anoche.', en: "I hadn't seen that movie before last night." },
        { es: 'Ya habíamos terminado cuando ella llamó.', en: 'We had already finished when she called.' },
        { es: 'Me dijo que ya había hablado con el director.', en: 'He told me he had already spoken with the director.' },
        { es: 'Habías estudiado español antes de mudarte a Chile.', en: 'You had studied Spanish before moving to Chile.' },
      ],
      commonMistakes: [
        'Don\'t confuse había (imperfect haber, yo/él/ella/usted) with habían (imperfect haber, ellos/ellas/ustedes) — they look alike but mark completely different subjects.',
        "The pluperfect only makes sense relative to another past point — using it alone, with no other past event in the sentence or context, usually sounds incomplete to a native speaker. It answers \"before what?\"",
        'Don\'t reach for the preterite (comieron) when you specifically mean "had already happened before something else" — that\'s exactly the job the pluperfect (habían comido) is built for, and swapping it for a plain preterite loses the "already before" sequencing.',
      ],
    },
    {
      heading: 'Future Perfect: What Will Have Happened, and Educated Guesses',
      paragraphs: [
        "The future perfect (habré hablado, \"I will have spoken\") swaps in haber conjugated in the simple future: habré, habrás, habrá, habremos, habréis, habrán — plus, again, the same past participle from the first section. Its most straightforward job is describing an action that will be completed by some future point, before a deadline: Para el lunes, habré terminado el informe (\"By Monday, I will have finished the report\"). Notice para + a time expression (para el lunes, para cuando llegues) is a strong signal that the future perfect is coming — it marks the deadline the completed action is being measured against.",
        "The second use of the future perfect is the one that surprises most learners, because English doesn't build it the same way: expressing probability or a guess about something that has already happened, roughly equivalent to English \"must have…\" or \"probably has…\". ¿Habrá llegado ya? doesn't literally ask \"will she have arrived?\" the way the words might suggest — in everyday speech it means something closer to \"She's probably arrived by now\" or \"I bet she's already arrived,\" a speculation about the recent past framed with future-tense grammar. Se habrá quedado en casa (\"He's probably stayed home\" / \"He must have stayed home\") works the same way — you're not certain, so you reach for the future perfect to signal an educated guess rather than a flat statement of fact.",
        'This "probability" use might feel backwards at first — why would a tense named "future" be used to guess about the past? — but it mirrors something you may already know from the simple future: Spanish also uses plain habrá, será, tendrá and so on to guess about the present (¿Qué hora será? — "I wonder what time it is," roughly "What time might it be?"). The future perfect just applies that same "guessing" logic one step further back, to something already completed. Context — usually the absence of any real future-time marker, plus a guessing tone — is what tells you which use is meant.',
      ],
      examples: [
        { es: 'Para el viernes, habré terminado el proyecto.', en: 'By Friday, I will have finished the project. (deadline)' },
        { es: 'Para cuando llegues, ya habremos comido.', en: "By the time you arrive, we'll have already eaten. (deadline)" },
        { es: '¿Habrá llegado ya?', en: "Has she probably arrived by now? / I bet she's already arrived. (probability)" },
        { es: '—¿Dónde está Marcos? —No sé, se habrá quedado en casa.', en: "Where's Marcos? — I don't know, he's probably stayed home. (probability)" },
        { es: 'Habrán salido temprano; por eso no hay tráfico.', en: "They've probably left early; that's why there's no traffic. (probability)" },
      ],
      commonMistakes: [
        'Don\'t assume "future perfect" always talks about the future — its second, very common use (probability about something already completed) is grammatically framed as future tense but is really about the past or present.',
        'Watch for the trigger phrase para + a time point (para el lunes, para cuando + subjunctive) — it\'s a strong signal that the deadline use, not the probability use, is intended.',
        "Don't overuse the future perfect for plain past narration — if you're just stating a completed fact with no deadline and no guessing involved, the preterite or present perfect is the right choice; the future perfect specifically marks either \"done by a future point\" or \"probably already done.\"",
      ],
    },
    {
      heading: 'Conditional Perfect: What Would Have Happened',
      paragraphs: [
        'The last piece of the pattern is the conditional perfect (habría hablado, "I would have spoken"): haber conjugated in the conditional — habría, habrías, habría, habríamos, habríais, habrían — plus, once more, the same past participle. If you notice habría looks like había with an extra -r-, that\'s a genuinely useful memory hook: the conditional forms of haber and the imperfect forms of haber are close cousins in spelling, so read carefully, especially in fast speech or handwriting.',
        "The conditional perfect's main job is describing what would have happened under different circumstances — a hypothetical about the past that didn't actually occur. It shows up constantly with a specific partner: a si-clause in the pluperfect subjunctive (hubiera/hubiese + participle), forming a full counterfactual-past sentence. Si hubiera estudiado más, habría aprobado el examen (\"If I had studied more, I would have passed the exam\") describes a past that didn't happen (he didn't study enough) and its imagined different outcome (he would have passed). You'll meet the pluperfect subjunctive itself in more depth later — for now, just recognize that si + había-shaped hubiera pairs with habría in the other half of the sentence.",
        "Beyond full si-sentences, the conditional perfect also stands alone to express regret, a hypothetical past action, or a guess about someone else's past choice: No lo habría dicho si no fuera verdad (\"I wouldn't have said it if it weren't true\"), or simply ¿Qué habrías hecho tú en mi lugar? (\"What would you have done in my place?\") — asking someone to imagine a past they didn't actually live through. Like the future perfect, the conditional perfect can also express probability, but about a more distant or already-resolved past situation — Habría tenido unos cuarenta años cuando pasó (\"He must have been about forty when it happened\") — though in casual speech, the simple conditional alone (Tendría unos cuarenta años) is actually more common for this kind of age-guessing; the compound form specifically implies a completed action rather than an ongoing state.",
      ],
      examples: [
        { es: 'Si hubiera estudiado más, habría aprobado el examen.', en: 'If I had studied more, I would have passed the exam.' },
        { es: 'No habría llegado tarde si hubiera salido antes.', en: "I wouldn't have arrived late if I had left earlier." },
        { es: '¿Qué habrías hecho tú en mi lugar?', en: 'What would you have done in my place?' },
        { es: 'Habría sido un buen médico.', en: 'He would have made a good doctor. (hypothetical, no stated condition)' },
        { es: 'Habrían llegado ya, si el vuelo no se hubiera retrasado.', en: "They would have already arrived, if the flight hadn't been delayed." },
      ],
      commonMistakes: [
        "Don't mix up habría (conditional perfect, \"would have\") with había (pluperfect, \"had\") — they play different roles: había pairs with a past deadline (\"had already X when Y\"), habría pairs with a counterfactual condition (\"would have X if Y had been different\").",
        'The conditional perfect\'s natural si-clause partner is the pluperfect subjunctive (hubiera/hubiese hablado), not the plain preterite or imperfect — Si hubiera sabido…, habría venido is correct; *Si sabía…, habría venido is not.',
        "For guessing someone's past age or a past state, the simple conditional (tendría, sería) is actually the more everyday choice — reach for the full conditional perfect (habría tenido) only when you specifically mean a completed action, not an ongoing state.",
      ],
    },
  ],

  vocab: [
    { es: 'haber', en: 'to have (auxiliary only, never possession)', example: 'He comido ya.', exampleEn: 'I have already eaten.' },
    { es: 'hecho', en: 'done / made (irregular participle of hacer)', example: 'Todavía no he hecho la tarea.', exampleEn: "I haven't done the homework yet." },
    { es: 'dicho', en: 'said (irregular participle of decir)', example: '¿Qué te ha dicho?', exampleEn: 'What has he told you?' },
    { es: 'puesto', en: 'put / placed (irregular participle of poner)', example: 'Ya he puesto la mesa.', exampleEn: 'I have already set the table.' },
    { es: 'visto', en: 'seen (irregular participle of ver)', example: '¿Has visto a Marta hoy?', exampleEn: 'Have you seen Marta today?' },
    { es: 'vuelto', en: 'returned (irregular participle of volver)', example: 'Todavía no ha vuelto.', exampleEn: "He hasn't come back yet." },
    { es: 'escrito', en: 'written (irregular participle of escribir)', example: 'Le he escrito dos veces.', exampleEn: "I've written to him twice." },
    { es: 'abierto', en: 'opened (irregular participle of abrir)', example: 'La tienda ya ha abierto.', exampleEn: 'The store has already opened.' },
    { es: 'roto', en: 'broken (irregular participle of romper)', example: 'Se ha roto el vaso.', exampleEn: 'The glass has broken.' },
    { es: 'cubierto', en: 'covered (irregular participle of cubrir)', example: 'El suelo estaba cubierto de nieve.', exampleEn: 'The ground was covered in snow.' },
    { es: 'ya', en: 'already', example: 'Ya habíamos comido cuando llegaste.', exampleEn: 'We had already eaten when you arrived.' },
    { es: 'todavía no', en: 'not yet', example: 'Todavía no he leído ese libro.', exampleEn: "I haven't read that book yet." },
    { es: 'para cuando', en: 'by the time', example: 'Para cuando llegues, habré terminado.', exampleEn: "By the time you arrive, I'll have finished." },
    { es: 'habría', en: 'would have (conditional of haber)', example: 'Yo habría dicho lo mismo.', exampleEn: 'I would have said the same thing.' },
    { es: 'habré', en: 'will have (future of haber)', example: 'Para el viernes, habré terminado.', exampleEn: "By Friday, I'll have finished." },
    { es: 'había', en: 'had (imperfect of haber)', example: 'Ya había salido cuando llamaste.', exampleEn: 'She had already left when you called.' },
  ],

  practice: [
    // ── present_perfect block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'fill_blank', prompt: 'Complete: "___ comido ya." (yo, present perfect of comer)', word: 'he', english: 'have (I have)', answer: 'He', concept_id: 'present_perfect', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'What is the past participle of hacer?', word: 'hecho', english: 'done/made', answer: 'hecho', options: ['hacido', 'hecho', 'hacho', 'hacido'], concept_id: 'present_perfect', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "¿___ visto mis llaves?" (tú, present perfect of ver)', word: 'has', english: 'have (you have)', answer: 'Has', concept_id: 'present_perfect', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the error: "He ya terminado el informe."', word: 'ya he', english: 'already (correct word order)', answer: 'Ya he terminado el informe.', concept_id: 'present_perfect', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We have lived here five years.'", english: 'We have lived here five years.', answer: 'Hemos vivido aquí cinco años.', word: 'hemos vivido', concept_id: 'present_perfect', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "Todavía no he hecho la tarea."', word: 'he hecho', english: "I haven't done the homework yet.", answer: "I haven't done the homework yet.", concept_id: 'present_perfect', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "Ellas han vividas aquí toda su vida."', word: 'han vivido', english: 'have lived (participle never agrees)', answer: 'Ellas han vivido aquí toda su vida.', concept_id: 'present_perfect', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which participle correctly completes: "La ventana está ___." (irregular participle of romper, used as adjective)', word: 'rota', english: 'broken', answer: 'rota', options: ['rompida', 'roto', 'rota', 'rompido'], concept_id: 'present_perfect', difficulty: 2 },

    // ── pluperfect block (kept separate from present_perfect; blocked before mixed review) ──
    { type: 'fill_blank', prompt: 'Complete: "Cuando llegué, ya ___ comido." (ellos, pluperfect of comer)', word: 'habían', english: 'had (they had)', answer: 'habían', concept_id: 'pluperfect', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly shows one past action happening before another?', word: 'había', english: 'had (pluperfect)', answer: 'Cuando llegué, ya habían comido.', options: ['Cuando llegué, ya habían comido.', 'Cuando llegué, ya comen.', 'Cuando llego, ya han comido.', 'Cuando llegué, ya comeré.'], concept_id: 'pluperfect', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I hadn't seen that movie before.'", english: "I hadn't seen that movie before.", answer: 'No había visto esa película antes.', word: 'había visto', concept_id: 'pluperfect', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "Me dijo que ya había hablado con el director."', word: 'había hablado', english: 'He told me he had already spoken with the director.', answer: 'He told me he had already spoken with the director.', altAnswers: ['She told me she had already spoken with the director.'], concept_id: 'pluperfect', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "Cuando llegué, ellos ya había comido."', word: 'habían comido', english: 'they had eaten', answer: 'Cuando llegué, ellos ya habían comido.', concept_id: 'pluperfect', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which form of haber goes with "nosotros" in the pluperfect?', word: 'habíamos', english: 'we had', answer: 'habíamos', options: ['habíamos', 'habremos', 'hemos', 'habríamos'], concept_id: 'pluperfect', difficulty: 2 },

    // ── future_perfect block ──
    { type: 'fill_blank', prompt: 'Complete: "Para el viernes, ___ terminado el proyecto." (yo, future perfect of terminar)', word: 'habré', english: 'will have (I will have)', answer: 'habré', concept_id: 'future_perfect', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'What does "¿Habrá llegado ya?" most likely mean in conversation?', word: 'habrá llegado', english: 'has probably arrived', answer: "She's probably arrived by now.", options: ["She's probably arrived by now.", 'Will she arrive tomorrow?', 'She will arrive later.', 'Did she arrive yesterday?'], concept_id: 'future_perfect', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'By the time you arrive, we will have already eaten.'", english: 'By the time you arrive, we will have already eaten.', answer: 'Para cuando llegues, ya habremos comido.', word: 'habremos comido', concept_id: 'future_perfect', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "No sé dónde está; se habrá quedado en casa."', word: 'se habrá quedado', english: "I don't know where he is; he's probably stayed home.", answer: "I don't know where he is; he's probably stayed home.", altAnswers: ["I don't know where she is; she's probably stayed home."], concept_id: 'future_perfect', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "Habré ya terminado el trabajo."', word: 'ya habré', english: 'already will have (no separation)', answer: 'Ya habré terminado el trabajo.', concept_id: 'future_perfect', difficulty: 2 },

    // ── conditional_perfect block ──
    { type: 'fill_blank', prompt: 'Complete: "Si hubiera estudiado más, ___ aprobado." (yo, conditional perfect of aprobar)', word: 'habría', english: 'would have (I would have)', answer: 'habría', concept_id: 'conditional_perfect', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly expresses a counterfactual past ("would have… if had…")?', word: 'habría', english: 'conditional perfect', answer: 'Si hubiera estudiado más, habría aprobado el examen.', options: ['Si hubiera estudiado más, habría aprobado el examen.', 'Si estudio más, apruebo el examen.', 'Si estudiaba más, apruebo el examen.', 'Si estudié más, aprobaré el examen.'], concept_id: 'conditional_perfect', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'What would you have done in my place?'", english: 'What would you have done in my place?', answer: '¿Qué habrías hecho tú en mi lugar?', word: 'habrías hecho', concept_id: 'conditional_perfect', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "No lo habría dicho si no fuera verdad."', word: 'habría dicho', english: "I wouldn't have said it if it weren't true.", answer: "I wouldn't have said it if it weren't true.", concept_id: 'conditional_perfect', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "Si había estudiado más, habría aprobado el examen."', word: 'hubiera estudiado', english: 'had studied (pluperfect subjunctive, not indicative)', answer: 'Si hubiera estudiado más, habría aprobado el examen.', concept_id: 'conditional_perfect', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and other established grammar references before writing (July 2026):
// - the shared haber + past participle structure across all four perfect
//   tenses, with the participle invariable and never separated from haber
//   (SpanishDict "Irregular Spanish Past Participles"; StudySpanish.com
//   Present Perfect and Past Perfect lessons)
// - present perfect: haber present forms he/has/ha/hemos/habéis/han;
//   regular participles -ado/-ido (StudySpanish.com "Present Perfect";
//   SpanishDict Haber conjugation page)
// - irregular past participles: hecho, dicho, puesto, visto, vuelto,
//   escrito, abierto, muerto, roto, cubierto (plus resuelto, frito/freído
//   noted as having two forms) — confirmed against spanish.academy "20
//   Common Irregular Past Participles" and SpanishDict's irregular
//   participles guide; compound-verb inheritance (descubrir → descubierto,
//   devolver → devuelto) follows the same root-verb pattern
// - Spain vs. Latin America present-perfect-vs-preterite tendency for
//   same-day events, phrased as a tendency with a noted Andean-region
//   exception rather than a strict binary, consistent with the existing
//   ES.md audit finding that RAE documents this as the tense with the
//   greatest regional variation in Spanish (SpanishDict Answers threads on
//   "present perfect vs preterite" and "European Spanish/Latin American:
//   Past Perfect/Preterite"; languageatlas.com Latin American Spanish
//   preterite-vs-present-perfect guide)
// - pluperfect: haber imperfect forms había/habías/había/habíamos/
//   habíais/habían + participle, used for an action completed before
//   another past action/point (StudySpanish.com "Past Perfect"; Collins
//   Education Spanish Easy Learning pluperfect guide; SpanishDict "Past
//   Perfect Spanish Forms and Uses")
// - future perfect: haber future forms habré/habrás/habrá/habremos/
//   habréis/habrán + participle; two uses confirmed — completed-by-a-
//   deadline (para + time trigger) and probability/conjecture about an
//   already-completed action, matching the "Ya habrá llegado" ≈ "She's
//   probably already arrived" gloss (tellmeinspanish.com and
//   bergesinstitutespanish.com Future Perfect guides; espanido.com
//   "Future Perfect Tense in Spanish")
// - conditional perfect: haber conditional forms habría/habrías/habría/
//   habríamos/habríais/habrían + participle; primary use as the result
//   clause of a counterfactual past (si + pluperfect subjunctive →
//   conditional perfect), plus regret/hypothetical-past and past-
//   probability uses, with simple conditional (tendría) noted as more
//   common than the compound form for ongoing-state guesses (mangolanguages
//   and study.com Conditional Perfect guides; existing conditional_perfect
//   card in src/content/grammar.js)
// This content is complementary to the existing GRAMMAR_CARDS entries for
// present_perfect, pluperfect, future_perfect, and conditional_perfect in
// src/content/grammar.js (same facts, fuller B2-paced walkthrough that
// foregrounds the shared haber + participle system across all four tenses)
// and does not contradict them. Concept order (present_perfect first, as
// shared prerequisite, then pluperfect, future_perfect, conditional_perfect)
// matches the prereqs declared in functions/_lib/concepts.js.
