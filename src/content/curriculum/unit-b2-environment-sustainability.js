// Unit — Environment & Sustainability (B2)
// Covers: environment_sustainability
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified via WebSearch against SpanishDict and
// established Spanish environmental-vocabulary sources before writing —
// see the audit note at the bottom of this file for the specific claims
// checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar), and also a
// vocabulary-volume fix: B2's vocabulary count was noticeably thinner than
// B1's, and this unit closes part of that gap with a domain — the
// environment and everyday sustainability — that was previously entirely
// uncovered, despite being one of the most common topics in B2-level
// Spanish exams and real conversation. Reuses grammar already taught
// (present subjunctive for recommendations, passive/impersonal se) rather
// than introducing a new grammar structure. This content is consistent
// with sostenible and reducir, both already present as core vocabulary.

export default {
  sections: [
    {
      heading: 'Talking About the Planet: Climate Change and Pollution',
      paragraphs: [
        "The environment is one of the most common topics you'll hit in advanced conversation, the news, and formal exams alike, so it's worth having the core vocabulary ready. El cambio climático (climate change) and el calentamiento global (global warming) are the two umbrella terms you'll hear constantly — they're related but not identical: el calentamiento global refers specifically to rising global temperatures, while el cambio climático is the broader term covering all the shifting weather patterns that result from it.",
        "La contaminación (pollution) is the general problem, and contaminar (to pollute) is the verb: Las fábricas contaminan el río (\"The factories pollute the river\"). Two specific, serious consequences come up constantly in this kind of discussion: la sequía (drought) — a lack of rain over a long period — and la deforestación (deforestation), the clearing of forests, usually for farmland or development.",
        "Two more words round out the vocabulary you need to describe the stakes: el ecosistema (the ecosystem) is the whole interconnected web of a natural environment, and la extinción (extinction) is what happens to a species when it disappears entirely — estar en peligro de extinción (\"to be in danger of extinction\") is the fixed phrase you'll see on almost every list of endangered animals.",
      ],
      examples: [
        { es: 'El calentamiento global está provocando sequías más frecuentes.', en: 'Global warming is causing more frequent droughts.' },
        { es: 'Las fábricas contaminan el río con productos químicos.', en: 'The factories pollute the river with chemicals.' },
        { es: 'La deforestación destruye el hábitat de muchas especies.', en: 'Deforestation destroys the habitat of many species.' },
        { es: 'Este ecosistema es único en el mundo.', en: 'This ecosystem is unique in the world.' },
        { es: 'El oso panda estuvo en peligro de extinción durante décadas.', en: 'The panda bear was in danger of extinction for decades.' },
      ],
      commonMistakes: [
        'El calentamiento global and el cambio climático aren\'t perfectly interchangeable — calentamiento global names the specific temperature rise, while cambio climático is the broader umbrella term for all its downstream effects; in casual conversation people do use them loosely as synonyms, but it\'s worth knowing the distinction.',
        'Contaminar (to pollute) and contagiar (to infect someone with an illness) look similar but are unrelated — don\'t mix them up just because both involve something spreading.',
        'En peligro de extinción is a fixed phrase — don\'t translate word-for-word as "in danger of extinguishing"; extinción here specifically means a species disappearing, not a fire going out (that would be apagar or extinguir un incendio).',
      ],
    },
    {
      heading: 'Everyday Sustainability: Reduce, Reuse, Recycle',
      paragraphs: [
        "From the global picture to what you can actually do about it: reciclar (to recycle) is the everyday verb, and it pairs naturally with two others that complete the classic three-part slogan you already know in English — reducir (to reduce, which you've already met) and reutilizar (to reuse). Es importante que reciclemos más (\"It's important that we recycle more\") reuses the present subjunctive you already know for recommendations and opinions.",
        "La basura (trash/garbage) is what doesn't get recycled or reused, and el vertedero (the landfill) is where it usually ends up — Gran parte de la basura termina en el vertedero (\"A large part of the trash ends up in the landfill\"). El plástico (plastic) and el envase (the container/packaging) come up constantly in this context, since single-use packaging is one of the most-discussed sustainability problems: Muchos envases de plástico no se reciclan (\"Many plastic containers don't get recycled\").",
        "On the positive side, sostenible (sustainable, which you already know) describes practices designed to avoid this waste, and la energía renovable (renewable energy — solar, wind, and similar sources) is the alternative to fossil fuels you'll hear about constantly. Ahorrar energía (\"to save/conserve energy\") is the everyday action anyone can take, and el desperdicio (waste — of food, resources, or energy specifically, as opposed to basura's broader \"trash\" sense) names the problem ahorrar energía and reducir are trying to solve.",
      ],
      examples: [
        { es: 'Es importante que reciclemos más plástico y papel.', en: "It's important that we recycle more plastic and paper." },
        { es: 'Gran parte de la basura termina en el vertedero.', en: 'A large part of the trash ends up in the landfill.' },
        { es: 'Muchos envases de plástico no se reciclan.', en: "Many plastic containers don't get recycled." },
        { es: 'Cada vez más países invierten en energía renovable.', en: 'More and more countries are investing in renewable energy.' },
        { es: 'Debemos ahorrar energía y reducir el desperdicio de alimentos.', en: 'We should save energy and reduce food waste.' },
      ],
      commonMistakes: [
        'Basura (trash/garbage, the general category) and desperdicio (waste — specifically the wasteful loss of something, like food or resources) aren\'t interchangeable — el desperdicio de alimentos is "food waste" (food that gets wasted), not "food trash."',
        'Reducir, reutilizar, reciclar follow the same order as English "reduce, reuse, recycle" — don\'t scramble the order when reciting the phrase, since it\'s a fixed, well-known slogan in Spanish too.',
        'El envase (a container/package, usually for a product) is not the same as la basura (trash in general) — un envase only becomes basura once you\'re done with it and it\'s discarded.',
      ],
    },
  ],

  vocab: [
    { es: 'el cambio climático', en: 'climate change', example: 'El cambio climático afecta a todo el planeta.', exampleEn: 'Climate change affects the whole planet.' },
    { es: 'el calentamiento global', en: 'global warming', example: 'El calentamiento global está provocando sequías.', exampleEn: 'Global warming is causing droughts.' },
    { es: 'la contaminación', en: 'pollution', example: 'La contaminación del aire es un problema grave.', exampleEn: 'Air pollution is a serious problem.' },
    { es: 'contaminar', en: 'to pollute', example: 'Las fábricas contaminan el río.', exampleEn: 'The factories pollute the river.' },
    { es: 'la sequía', en: 'the drought', example: 'La región sufre una sequía terrible.', exampleEn: 'The region is suffering a terrible drought.' },
    { es: 'la deforestación', en: 'deforestation', example: 'La deforestación destruye hábitats.', exampleEn: 'Deforestation destroys habitats.' },
    { es: 'el ecosistema', en: 'the ecosystem', example: 'Este ecosistema es único en el mundo.', exampleEn: 'This ecosystem is unique in the world.' },
    { es: 'la extinción', en: 'extinction', example: 'Está en peligro de extinción.', exampleEn: "It's in danger of extinction." },
    { es: 'reciclar', en: 'to recycle', example: 'Es importante que reciclemos más.', exampleEn: "It's important that we recycle more." },
    { es: 'reutilizar', en: 'to reuse', example: 'Prefiero reutilizar las bolsas antes de tirarlas.', exampleEn: 'I prefer to reuse the bags before throwing them away.' },
    { es: 'la basura', en: 'the trash / garbage', example: 'Saca la basura, por favor.', exampleEn: 'Take out the trash, please.' },
    { es: 'el vertedero', en: 'the landfill', example: 'Gran parte de la basura termina en el vertedero.', exampleEn: 'A large part of the trash ends up in the landfill.' },
    { es: 'el plástico', en: 'plastic', example: 'Intentamos usar menos plástico.', exampleEn: 'We try to use less plastic.' },
    { es: 'el envase', en: 'the container / packaging', example: 'Muchos envases de plástico no se reciclan.', exampleEn: "Many plastic containers don't get recycled." },
    { es: 'la energía renovable', en: 'renewable energy', example: 'Cada vez más países invierten en energía renovable.', exampleEn: 'More and more countries are investing in renewable energy.' },
    { es: 'ahorrar energía', en: 'to save/conserve energy', example: 'Debemos ahorrar energía en casa.', exampleEn: 'We should save energy at home.' },
    { es: 'el desperdicio', en: 'the waste (of food, resources)', example: 'Reducir el desperdicio de alimentos.', exampleEn: 'Reduce food waste.' },
    { es: 'proteger el medio ambiente', en: 'to protect the environment', example: 'Todos podemos ayudar a proteger el medio ambiente.', exampleEn: 'We can all help protect the environment.' },
  ],

  practice: [
    // ── environment_sustainability block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'fill_blank', prompt: 'Complete: "El ___ global está provocando sequías más frecuentes." (global warming)', word: 'calentamiento', english: 'warming', answer: 'calentamiento', concept_id: 'environment_sustainability', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which word means "drought" (a long lack of rain)?', word: 'sequía', english: 'drought', answer: 'la sequía', options: ['la sequía', 'la contaminación', 'la extinción', 'el vertedero'], concept_id: 'environment_sustainability', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'The factories pollute the river.'", english: 'The factories pollute the river.', answer: 'Las fábricas contaminan el río.', word: 'contaminar', concept_id: 'environment_sustainability', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete using the present subjunctive: "Es importante que ___ más plástico." (we recycle)', word: 'reciclemos', english: 'we recycle', answer: 'reciclemos', concept_id: 'environment_sustainability', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "La deforestación afecta solo a los animales, no al ecosistema." (this understates what deforestación actually destroys)', word: 'ecosistema', english: 'ecosystem', answer: 'La deforestación destruye el ecosistema entero, no solo afecta a los animales.', concept_id: 'environment_sustainability', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "Muchos envases de plástico no se reciclan."', word: 'envase', english: "Many plastic containers don't get recycled.", answer: "Many plastic containers don't get recycled.", concept_id: 'environment_sustainability', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which correctly completes the classic three-part slogan: "reducir, reutilizar, ___"?', word: 'reciclar', english: 'recycle', answer: 'reciclar', options: ['reciclar', 'contaminar', 'ahorrar', 'proteger'], concept_id: 'environment_sustainability', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Gran parte de la basura termina en el ___." (the landfill)', word: 'vertedero', english: 'landfill', answer: 'vertedero', concept_id: 'environment_sustainability', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We should save energy and reduce food waste.'", english: 'We should save energy and reduce food waste.', answer: 'Debemos ahorrar energía y reducir el desperdicio de alimentos.', word: 'el desperdicio', concept_id: 'environment_sustainability', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which phrase describes a species that could disappear entirely?', word: 'en peligro de extinción', english: 'in danger of extinction', answer: 'en peligro de extinción', options: ['en peligro de extinción', 'en peligro de contaminación', 'en riesgo de sequía', 'en riesgo de deforestación'], concept_id: 'environment_sustainability', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate: "Cada vez más países invierten en energía renovable."', word: 'energía renovable', english: 'More and more countries are investing in renewable energy.', answer: 'More and more countries are investing in renewable energy.', concept_id: 'environment_sustainability', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch and existing Spanish dictionary/
// vocabulary sources before writing (July 2026):
// - el calentamiento global (global warming) vs. el cambio climático
//   (climate change) as related but distinct terms — calentamiento global
//   names the specific rise in average global temperature, while cambio
//   climático is the broader umbrella term for the resulting shifts in
//   weather patterns; confirmed these are commonly used loosely as
//   synonyms in casual speech despite the technical distinction, matching
//   how English speakers also blur "global warming" and "climate change."
// - contaminar (to pollute) vs. contagiar (to infect) as genuinely
//   unrelated verbs despite superficial similarity, to preempt a plausible
//   learner confusion.
// - en peligro de extinción as the standard fixed phrase for "endangered"
//   (species), distinct from apagar/extinguir un incendio ("to put out a
//   fire"), which uses the same root (extinguir) but an entirely different
//   sense.
// - reducir, reutilizar, reciclar confirmed as the standard Spanish
//   ordering of the "reduce, reuse, recycle" slogan, matching the English
//   order.
// - basura (trash/garbage, general) vs. desperdicio (waste — the wasteful
//   loss of a specific resource like food or energy) as genuinely distinct,
//   commonly confused near-synonyms.
// - envase (container/packaging for a product) as distinct from basura
//   (trash in general) until discarded — a nuance worth flagging since
//   English "container" and "trash" don't share this same overlap.
// This content is consistent with and does not duplicate the existing
// vocabulary.js entries for sostenible and reducir, which are referenced
// in prose as known background rather than re-taught from scratch.
//
// B2 curriculum-volume fix (07-25-2026): built as a new standalone unit
// (rather than folded into an existing one) because everyday environment
// and sustainability vocabulary was a genuinely uncovered domain, not an
// extension of an already-taught topic — unlike this batch's other two
// additions (correlative_comparatives, topic_shift_connectors), which
// extended existing grammar units. B2's vocabulary count was noticeably
// thinner than B1's; this is one of two new vocab-focused units (the
// other being Technology & Digital Life) built to help close that gap.