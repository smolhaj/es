// Unit — Directions & Getting Around (B1)
// Covers: directions_transport
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict and other pedagogical
// phrasebook sources before writing — see the audit note at the bottom of
// this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar): placed right
// after Unit 19 (Opinions & Commands) specifically to put the newly-built
// full imperative system (tú affirmative/negative, usted/ustedes) to
// immediate real-world use, rather than introducing new grammar.

export default {
  sections: [
    {
      heading: 'Asking for Directions',
      paragraphs: [
        "To ask how to get somewhere, ¿Cómo llego a...? (\"How do I get to...?\") and ¿Dónde está...? (\"Where is...?\", from Unit 5's estar) are the two workhorse questions: ¿Cómo llego a la estación? (\"How do I get to the station?\"), ¿Dónde está el museo? (\"Where is the museum?\"). Since you're usually asking a stranger, the polite usted form is the natural default here — the same register choice you'd make ordering at a formal restaurant.",
        'The answers you\'ll hear lean entirely on the command forms you just built in the last unit. Siga todo recto (\"Keep going straight,\" usted) is the single most common instruction; from there, Doble a la izquierda / Doble a la derecha (\"Turn left / Turn right,\" usted, from doblar) or the equally common Gire a la izquierda / Gire a la derecha (from girar — both verbs mean "to turn" and are used interchangeably) get you around a corner. Cruce la calle (\"Cross the street,\" from cruzar) tells you to cross to the other side.',
        'If a friend is giving you directions instead of a stranger, the same instructions switch to tú: Sigue todo recto, Dobla a la izquierda, Cruza la calle — same meaning, informal register, using the tú affirmative pattern from Unit 19. Distance gets described with a la izquierda/derecha (to the left/right) plus a measurement: está a dos cuadras (\"it\'s two blocks away\") — cuadra is the word for "city block" in most of Latin America; Spain instead says manzana for the same idea (yes, the same word as the fruit — context always makes it clear which is meant).',
      ],
      examples: [
        { es: '¿Cómo llego a la estación de tren?', en: 'How do I get to the train station?' },
        { es: 'Siga todo recto y doble a la derecha en el semáforo.', en: 'Keep going straight and turn right at the traffic light. (usted)' },
        { es: 'Cruce la calle y el banco está a la izquierda.', en: 'Cross the street and the bank is on the left. (usted)' },
        { es: 'Está a dos cuadras de aquí.', en: "It's two blocks from here. (Latin America)" },
        { es: 'Sigue recto, luego dobla a la izquierda.', en: 'Go straight, then turn left. (tú, informal)' },
      ],
      commonMistakes: [
        "Don't drop a la before izquierda/derecha — it's always a la izquierda, a la derecha, never a bare izquierda/derecha standing alone after doblar/girar.",
        'Doblar and girar are interchangeable for "to turn" when giving directions — don\'t assume one is more correct; regional habit decides which a given speaker reaches for.',
        'Cuadra (Latin America) and manzana (Spain) both mean "city block" in this context — if you hear manzana while asking for directions, it\'s not the fruit; context makes the meaning obvious to a native speaker instantly.',
      ],
    },
    {
      heading: 'Buses, Trains, and Tickets',
      paragraphs: [
        "Public transport runs on its own small vocabulary. To find out which bus goes where: ¿Qué autobús va a...? (\"Which bus goes to...?\"). To find the nearest stop: ¿Dónde está la parada de autobús más cercana? (\"Where's the nearest bus stop?\"). Once you're at a stop or station, subirse (\"to get on\") and bajarse (\"to get off\") are the two verbs you'll use constantly: Me subo aquí (\"I'm getting on here\"), ¿Dónde me bajo para el museo? (\"Where do I get off for the museum?\").",
        'Buying a ticket uses billete (Spain) or boleto (Latin America) — both mean "ticket" and you already met both back in Unit 2. If you\'re planning a round trip, ask for ida y vuelta (\"round trip,\" literally "going and coming back"): Un billete de ida y vuelta a Madrid, por favor. A one-way ticket is simply sólo ida (\"one-way,\" literally "just going").',
        "Two more useful questions round this out: ¿A qué hora sale/llega? (\"What time does it leave/arrive?\") reuses the time-telling you already know, and ¿Cuánto tarda el viaje? (\"How long does the trip take?\") asks about duration. Between the imperative for directions and this small transport vocabulary, you now have what you need to navigate an unfamiliar city almost entirely in Spanish.",
      ],
      examples: [
        { es: '¿Qué autobús va al centro?', en: 'Which bus goes downtown?' },
        { es: '¿Dónde está la parada más cercana?', en: "Where's the nearest stop?" },
        { es: 'Me bajo en la próxima parada.', en: "I'm getting off at the next stop." },
        { es: 'Un billete de ida y vuelta, por favor.', en: 'A round-trip ticket, please.' },
        { es: '¿A qué hora sale el próximo tren?', en: 'What time does the next train leave?' },
        { es: '¿Cuánto tarda el viaje a Barcelona?', en: 'How long does the trip to Barcelona take?' },
      ],
      commonMistakes: [
        "Subirse and bajarse are reflexive — don't drop the pronoun: Me bajo aquí, not \"Bajo aquí,\" the same pattern you already know from levantarse.",
        'Billete and boleto are regional variants (Spain / Latin America), not a formal/informal distinction — either is understood everywhere, but locals will usually expect the one their own country uses.',
        'Ida y vuelta describes the whole round trip, not a return-only ticket — if you only need to go one way, ask for sólo ida.',
      ],
    },
  ],

  vocab: [
    { es: '¿cómo llego a...?', en: 'how do I get to...?', example: '¿Cómo llego a la plaza principal?', exampleEn: 'How do I get to the main square?' },
    { es: 'siga todo recto', en: 'keep going straight (usted)', example: 'Siga todo recto por esta calle.', exampleEn: 'Keep going straight down this street.' },
    { es: 'doble / gire', en: 'turn (usted)', example: 'Doble a la derecha en la esquina.', exampleEn: 'Turn right at the corner.' },
    { es: 'cruce', en: 'cross (usted)', example: 'Cruce la calle con cuidado.', exampleEn: 'Cross the street carefully.' },
    { es: 'a la izquierda', en: 'to the left', example: 'El hotel está a la izquierda.', exampleEn: 'The hotel is on the left.' },
    { es: 'a la derecha', en: 'to the right', example: 'El banco está a la derecha.', exampleEn: 'The bank is on the right.' },
    { es: 'cuadra', en: 'city block (Latin America)', example: 'Está a dos cuadras de aquí.', exampleEn: "It's two blocks from here." },
    { es: 'la parada', en: 'the (bus/train) stop', example: '¿Dónde está la parada?', exampleEn: "Where's the stop?" },
    { es: 'subirse', en: 'to get on (a vehicle)', example: 'Me subo en la próxima parada.', exampleEn: "I'll get on at the next stop." },
    { es: 'bajarse', en: 'to get off (a vehicle)', example: '¿Dónde me bajo para el museo?', exampleEn: 'Where do I get off for the museum?' },
    { es: 'ida y vuelta', en: 'round trip', example: 'Un billete de ida y vuelta, por favor.', exampleEn: 'A round-trip ticket, please.' },
    { es: 'conductor', en: 'driver', example: 'Le pregunté al conductor.', exampleEn: 'I asked the driver.' },
  ],

  practice: [
    // ── directions_transport block (blocked practice: directions/commands first, then transport/tickets) ──
    { type: 'translation_to_spanish', prompt: "Translate (formal, usted): 'Keep going straight and turn left.'", english: 'Keep going straight and turn left.', answer: 'Siga todo recto y doble a la izquierda.', word: 'siga/doble', concept_id: 'directions_transport', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'A friend (tú) is giving you directions. Which is correct?', word: 'sigue', english: 'keep going (tú)', answer: 'Sigue todo recto.', options: ['Siga todo recto.', 'Sigue todo recto.', 'Sigues todo recto.', 'Seguir todo recto.'], concept_id: 'directions_transport', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "El banco está ___ derecha." (to the right)', word: 'a la', english: 'to the', answer: 'a la', concept_id: 'directions_transport', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Está a dos cuadras de aquí"?', word: 'cuadras', english: 'blocks', answer: "It's two blocks from here.", concept_id: 'directions_transport', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Bajo en la próxima parada." (missing the reflexive pronoun)', word: 'me bajo', english: "I'm getting off", answer: 'Me bajo en la próxima parada.', concept_id: 'directions_transport', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'A round-trip ticket, please.'", english: 'A round-trip ticket, please.', answer: 'Un billete de ida y vuelta, por favor.', word: 'ida y vuelta', concept_id: 'directions_transport', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which question asks which bus goes to a place?', word: '¿qué autobús va a...?', english: 'which bus goes to...?', answer: '¿Qué autobús va al centro?', options: ['¿Cuánto cuesta el autobús?', '¿Qué autobús va al centro?', '¿A qué hora sale?', '¿Dónde me bajo?'], concept_id: 'directions_transport', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, Migaku, Na'atik
// Language Institute, and other pedagogical direction-giving guides before
// writing (July 2026):
// - siga todo recto, doble/gire a la izquierda/derecha, cruce la calle
//   confirmed as the standard usted-register direction-giving commands,
//   correctly built from the present-subjunctive-based usted imperative
//   taught in Unit 19 (regular -ar verbs: doble/gire/cruce from
//   doblar/girar/cruzar's subjunctive stem)
// - doblar and girar confirmed as interchangeable synonyms for "to turn"
//   in this context, not a register or regional split worth over-teaching
// - cuadra (Latin America) vs. manzana (Spain, homograph with "apple")
//   confirmed as the standard regional pair for "city block"
// - subirse/bajarse confirmed as reflexive for "to get on/off" a vehicle;
//   billete (Spain) vs. boleto (Latin America) confirmed as regional
//   ticket-word variants, both already present in vocabulary.js since
//   Unit 2
// - ida y vuelta (round trip) vs. sólo ida (one-way) confirmed as the
//   standard ticket-type phrasing
// This unit deliberately follows immediately after Unit 19 (Opinions &
// Commands) to put the freshly-taught tú/usted imperative system to real
// use, rather than introducing new grammar — reuses estar_basics (Unit 5)
// for ¿dónde está...? and time-telling (Unit 2) for departure/arrival
// questions. No prior GRAMMAR_CARDS entry exists for directions_transport,
// a new functional-language concept (see functions/_lib/concepts.js).
