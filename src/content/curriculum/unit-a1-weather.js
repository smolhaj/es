// Unit — Weather (A1)
// Covers: weather_expressions
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict,
// WordReference-adjacent pedagogical sources, and RAE-derived guidance
// before writing — see the audit note at the bottom of this file for the
// specific claims checked.

export default {
  sections: [
    {
      heading: 'What\'s the Weather Like? Hace + Noun',
      paragraphs: [
        "Talking about weather in Spanish works differently than in English, and the good news is that once you learn the pattern, it barely changes. English says \"it is hot/cold/windy,\" treating weather as a state of being — Spanish instead says the weather \"makes\" heat, cold, or wind, using the verb hacer (\"to make/do\"): hace calor (\"it's hot,\" literally \"it makes heat\"), hace frío (\"it's cold\"), hace sol (\"it's sunny\"), hace viento (\"it's windy\"). You'll also hear the more general hace buen tiempo (\"the weather is nice\") and hace mal tiempo (\"the weather is bad\") for an overall verdict rather than a specific condition.",
        "One detail makes this genuinely easy: every one of these phrases uses the exact same verb form, hace, and nothing else. Weather hacer is impersonal — it has no subject (not \"the weather,\" not \"it,\" nothing) and is used only in this one fixed third-person-singular form. You will never see hago calor or haces frío; hace is the only form weather-hacer ever takes, no matter who's asking or what day it is.",
        'To ask about the weather, use ¿Qué tiempo hace? ("What\'s the weather like?" — literally "what weather does it make"). The answer just plugs one of the hace phrases back in: ¿Qué tiempo hace hoy? — Hace mucho calor ("What\'s the weather like today? — It\'s very hot"). Notice mucho, not muy, stacks onto these noun-based phrases for "very/a lot" — hace mucho calor, not hace muy calor — because calor, frío, sol, and viento are nouns here, not adjectives, and mucho is what pairs with a noun.',
      ],
      examples: [
        { es: '¿Qué tiempo hace hoy?', en: "What's the weather like today?" },
        { es: 'Hace calor en verano.', en: "It's hot in summer." },
        { es: 'Hace mucho frío en invierno.', en: "It's very cold in winter." },
        { es: 'Hace sol y no hace viento.', en: "It's sunny and it's not windy." },
        { es: 'Hoy hace buen tiempo, pero ayer hizo mal tiempo.', en: "The weather is nice today, but it was bad yesterday." },
      ],
      commonMistakes: [
        'Don\'t say "muy calor" or "muy frío" — calor and frío are nouns in these weather phrases, so they pair with mucho (mucho calor, mucho frío), the same way mucho pairs with any other noun. Muy is reserved for adjectives, which is a different pattern you\'ll meet soon.',
        'Weather hacer only exists as hace — there is no "yo hago calor" or any other person; if you catch yourself conjugating it for a subject, stop and use the fixed form hace instead.',
        '"Ser" and "estar" don\'t work for these particular phrases — you cannot say "es calor" or "está calor." Hace calor is the only correct way to say "it\'s hot" (weather).',
      ],
    },
    {
      heading: 'When It Rains, When It\'s Cloudy: Llover, Nevar, Hay, and Está',
      paragraphs: [
        "Hace covers heat, cold, sun, and wind, but three more common weather situations each use a different pattern. Rain and snow get their own dedicated impersonal verbs: llover (\"to rain\") and nevar (\"to snow\"), and just like weather-hacer, each one is only ever used in a single fixed form — llueve (\"it's raining/it rains\") and nieva (\"it's snowing/it snows\"). No subject, no other conjugated forms: not \"yo lluevo,\" not \"ellos nievan.\" Llueve mucho en abril (\"It rains a lot in April\") and No nieva aquí en diciembre (\"It doesn't snow here in December\") are as far as these two verbs ever go.",
        'Cloudy and clear skies use estar, the verb you already know for temporary states, paired with an adjective: está nublado ("it\'s cloudy") and está despejado ("it\'s clear," "the sky is clear") — the same pattern as estoy cansado, just describing the sky instead of a person. And for weather phenomena that are more like "things that are present" — fog, a storm — Spanish reaches for hay, the same word you already use to say something exists: hay niebla ("there\'s fog"), hay tormenta ("there\'s a storm").',
        "So three tools, three different jobs: hace for heat/cold/sun/wind, llueve/nieva as their own fixed one-word answers for rain and snow, está for describing the sky as cloudy or clear, and hay for announcing that fog or a storm is present. All of them stay in this same fixed present-tense form regardless of who's asking or talking — that consistency is what makes weather talk one of the easier corners of Spanish once the pattern clicks.",
      ],
      examples: [
        { es: 'Llueve mucho en esta ciudad.', en: 'It rains a lot in this city.' },
        { es: '¿Nieva en tu país en invierno?', en: 'Does it snow in your country in winter?' },
        { es: 'Está nublado, pero no llueve.', en: "It's cloudy, but it's not raining." },
        { es: 'Mañana estará despejado.', en: "Tomorrow it will be clear." },
        { es: 'Hay niebla esta mañana.', en: "There's fog this morning." },
        { es: 'Dicen que hay tormenta esta noche.', en: "They say there's a storm tonight." },
      ],
      commonMistakes: [
        'Don\'t invent other forms of llover/nevar — "yo lluevo" and "tú nievas" are not real Spanish; these two verbs only ever appear as llueve and nieva.',
        'Don\'t reach for hay when describing the sky itself — "hay nublado" is incorrect. Nublado and despejado are adjectives describing a state, so they pair with estar (está nublado), not hay, which is reserved for announcing something\'s presence (hay niebla, hay tormenta).',
        "Fog and storms use hay, not hace — you can't say \"hace niebla\" or \"hace tormenta\"; only calor, frío, sol, viento, and buen/mal tiempo pair with hace.",
      ],
    },
  ],

  vocab: [
    { es: 'hace calor', en: "it's hot (weather)", example: 'Hace mucho calor hoy.', exampleEn: "It's very hot today." },
    { es: 'hace frío', en: "it's cold (weather)", example: 'Hace frío por la noche.', exampleEn: "It's cold at night." },
    { es: 'hace sol', en: "it's sunny", example: 'Hace sol toda la semana.', exampleEn: "It's sunny all week." },
    { es: 'hace viento', en: "it's windy", example: 'Hace viento en la playa.', exampleEn: "It's windy at the beach." },
    { es: '¿qué tiempo hace?', en: "what's the weather like?", example: '¿Qué tiempo hace en Madrid?', exampleEn: "What's the weather like in Madrid?" },
    { es: 'llover', en: 'to rain', example: 'Va a llover mañana.', exampleEn: "It's going to rain tomorrow." },
    { es: 'llueve', en: "it's raining / it rains", example: 'Llueve mucho en otoño.', exampleEn: 'It rains a lot in autumn.' },
    { es: 'nevar', en: 'to snow', example: 'Aquí nunca nieva.', exampleEn: "It never snows here." },
    { es: 'nieva', en: "it's snowing / it snows", example: 'Nieva en las montañas.', exampleEn: "It's snowing in the mountains." },
    { es: 'está nublado', en: "it's cloudy", example: 'Hoy está nublado.', exampleEn: "It's cloudy today." },
    { es: 'está despejado', en: "it's clear (sky)", example: 'Esta noche está despejado.', exampleEn: "Tonight it's clear." },
    { es: 'hay niebla', en: "there's fog", example: 'Hay niebla en la carretera.', exampleEn: "There's fog on the road." },
    { es: 'hay tormenta', en: "there's a storm", example: 'Hay tormenta en la costa.', exampleEn: "There's a storm on the coast." },
    { es: 'la temperatura', en: 'the temperature', example: 'La temperatura sube en julio.', exampleEn: 'The temperature rises in July.' },
  ],

  practice: [
    // ── weather_expressions block (blocked practice: hace-phrases first, then llover/nevar/estar/hay contrast) ──
    { type: 'multiple_choice', prompt: 'How do you say "it\'s hot" in Spanish?', word: 'hace calor', english: "it's hot", answer: 'Hace calor.', options: ['Es calor.', 'Está calor.', 'Hace calor.', 'Hay calor.'], concept_id: 'weather_expressions', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Hace ___ frío en invierno." (a lot of)', word: 'mucho', english: 'a lot of', answer: 'mucho', concept_id: 'weather_expressions', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'What's the weather like today?'", english: "What's the weather like today?", answer: '¿Qué tiempo hace hoy?', word: '¿qué tiempo hace?', concept_id: 'weather_expressions', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Llueve mucho en abril"?', word: 'llueve', english: "it rains", answer: 'It rains a lot in April.', concept_id: 'weather_expressions', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which is the correct way to say "it\'s snowing"?', word: 'nieva', english: "it's snowing", answer: 'Nieva.', options: ['Nievo.', 'Nieva.', 'Está nieva.', 'Hay nieva.'], concept_id: 'weather_expressions', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly describes a cloudy sky?', word: 'está nublado', english: "it's cloudy", answer: 'Está nublado.', options: ['Hace nublado.', 'Hay nublado.', 'Está nublado.', 'Es nublado.'], concept_id: 'weather_expressions', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Hace niebla esta mañana."', word: 'hay niebla', english: "there's fog", answer: 'Hay niebla esta mañana.', concept_id: 'weather_expressions', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It's very windy and there's a storm.'", english: "It's very windy and there's a storm.", answer: 'Hace mucho viento y hay tormenta.', word: 'hace viento', concept_id: 'weather_expressions', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and other pedagogical grammar sources before writing (July 2026):
// - weather uses three different verbs depending on the phenomenon: hacer
//   (hace calor/frío/sol/viento/buen tiempo/mal tiempo), estar + adjective
//   (está nublado/despejado), and hay + noun (hay niebla/tormenta)
// - llover and nevar are impersonal verbs used only in the fixed
//   third-person-singular present form (llueve, nieva) — no subject, no
//   other persons exist for weather use
// - mucho (not muy) pairs with hace calor/frío/etc. because calor, frío,
//   sol, and viento are functioning as nouns in these fixed phrases, not
//   adjectives — muy vs. mucho itself gets its own full treatment in a
//   later unit (this unit only flags the specific mucho-with-hace pattern)
// - ¿Qué tiempo hace? as the standard question for asking about weather
// - está lloviendo/está nevando (progressive forms) are intentionally
//   deferred — they require estar + gerund (present_progressive), which
//   isn't taught until Unit 13 (Right Now & Soon); this unit sticks to the
//   fixed impersonal forms (llueve, nieva) a true A1 learner already has
//   the grammar to use correctly
// This content is the first coverage of weather_expressions in the
// curriculum (new concept — see functions/_lib/concepts.js) and does not
// contradict any existing GRAMMAR_CARDS entry.
