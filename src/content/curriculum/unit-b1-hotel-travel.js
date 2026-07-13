// Unit — Hotel & Travel Logistics (B1)
// Covers: hotel_travel
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishStep, Babbel, and other
// pedagogical phrasebook sources before writing — see the audit note at
// the bottom of this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar): placed right
// after Unit 17 (The Past in Detail) specifically to put the freshly-
// taught preterite-vs-imperfect contrast to real use describing a booking
// that went wrong, rather than introducing new grammar.

export default {
  sections: [
    {
      heading: 'Checking In',
      paragraphs: [
        "Arriving at a hotel runs through a short, predictable exchange. Tengo una reserva (\"I have a reservation\") is how you announce yourself, usually followed by your name: Tengo una reserva a nombre de García (\"I have a reservation under the name García\"). If you haven't booked ahead, ¿Tiene habitaciones libres? (\"Do you have any rooms available?\") is the question to ask.",
        'Two room types come up constantly: habitación doble (\"double room\") and habitación sencilla (\"single room\" — also called individual in some countries). ¿Cuánto cuesta la habitación por noche? (\"How much is the room per night?\") and ¿El desayuno está incluido? (\"Is breakfast included?\") round out the basics you\'ll need before deciding.',
        'To formally check in, you might hear ¿Me permite su pasaporte? (\"May I see your passport?\") — hotels routinely ask for ID, so keep it handy. Registrarse (\"to check in\") is the reflexive verb behind the whole process: Quisiera registrarme, por favor (\"I would like to check in, please\") — the reflexive matters here, since you\'re registering yourself.',
      ],
      examples: [
        { es: 'Tengo una reserva a nombre de Torres.', en: 'I have a reservation under the name Torres.' },
        { es: '¿Tiene habitaciones libres para esta noche?', en: 'Do you have any rooms available for tonight?' },
        { es: 'Quisiera una habitación doble con vista al mar.', en: 'I would like a double room with a sea view.' },
        { es: '¿El desayuno está incluido en el precio?', en: 'Is breakfast included in the price?' },
        { es: 'Quisiera registrarme, por favor. Aquí está mi pasaporte.', en: "I'd like to check in, please. Here's my passport." },
      ],
      commonMistakes: [
        'Don\'t drop the reflexive on registrarse — Quisiera registrar sounds like you want to register something else (a car, a complaint); Quisiera registrarme is what you mean.',
        'Sencillo/sencilla ("single") also means "simple" in other contexts — a native speaker will understand habitación sencilla instantly from context, but don\'t assume the word only ever means "single room."',
        'A nombre de ("under the name of") is the fixed phrase for a reservation — don\'t translate word-for-word as "in name of"; a nombre de Torres is the natural Spanish equivalent.',
      ],
    },
    {
      heading: 'When Something Goes Wrong',
      paragraphs: [
        'This is exactly where the preterite-vs-imperfect contrast you just built in the last unit earns its keep: describing a booking problem naturally splits into a completed action (what you did — preterite) and the background situation you walked into (imperfect). Reservé una habitación doble para dos noches, pero cuando llegué, no tenían mi reserva (\"I booked a double room for two nights, but when I arrived, they didn\'t have my reservation\") — reservé and llegué are single completed events (preterite); tenían describes the ongoing state you found (imperfect).',
        'To flag a problem clearly: Parece que hay un problema con mi reserva (\"It seems there\'s a problem with my reservation\") is a polite, non-confrontational opener. ¿Podría verificar mi reserva, por favor? (\"Could you verify my reservation, please?\") asks staff to double-check. If what you got doesn\'t match what you booked: Mi habitación no coincide con lo que reservé (\"My room doesn\'t match what I reserved\").',
        "For everyday requests once you're settled, la llave (\"the key\"), el ascensor (\"the elevator\"), and ¿A qué hora es el check-out? (\"What time is check-out?\") cover most of what comes up. If you need to extend your stay: ¿Podría quedarme una noche más? (\"Could I stay one more night?\") — notice quedarse here, the reflexive form from the last unit, since you're the one staying.",
      ],
      examples: [
        { es: 'Reservé una habitación doble, pero cuando llegué, no tenían mi reserva.', en: "I booked a double room, but when I arrived, they didn't have my reservation." },
        { es: 'Parece que hay un problema con mi reserva.', en: "It seems there's a problem with my reservation." },
        { es: '¿Podría verificar mi reserva, por favor?', en: 'Could you verify my reservation, please?' },
        { es: 'Mi habitación no coincide con lo que reservé.', en: "My room doesn't match what I reserved." },
        { es: '¿A qué hora es el check-out?', en: "What time is check-out?" },
        { es: '¿Podría quedarme una noche más?', en: 'Could I stay one more night?' },
      ],
      commonMistakes: [
        'Watch the preterite/imperfect split when describing a problem — the booking itself and your arrival are single events (reservé, llegué), but what you found already in progress (no tenían mi reserva) is imperfect, describing an existing state, not a new action.',
        "Parece que hay un problema is a softer opener than a direct complaint — leading with it (rather than jumping straight to a demand) matches the polite, understanding tone hotel staff generally expect and respond best to.",
        "Don't confuse la llave (the key) with la clave (a code/password, e.g. la clave del wifi) — they look similar but aren't interchangeable.",
      ],
    },
  ],

  vocab: [
    { es: 'tengo una reserva', en: 'I have a reservation', example: 'Tengo una reserva a nombre de García.', exampleEn: 'I have a reservation under the name García.' },
    { es: 'a nombre de', en: 'under the name of', example: 'La reserva está a nombre de Torres.', exampleEn: 'The reservation is under the name Torres.' },
    { es: 'habitación doble', en: 'double room', example: 'Quisiera una habitación doble.', exampleEn: 'I would like a double room.' },
    { es: 'habitación sencilla', en: 'single room', example: 'Prefiero una habitación sencilla.', exampleEn: 'I prefer a single room.' },
    { es: 'registrarse', en: 'to check in', example: 'Quisiera registrarme, por favor.', exampleEn: 'I would like to check in, please.' },
    { es: 'verificar', en: 'to verify', example: '¿Podría verificar mi reserva?', exampleEn: 'Could you verify my reservation?' },
    { es: 'coincidir', en: 'to match', example: 'Mi habitación no coincide con lo que reservé.', exampleEn: "My room doesn't match what I reserved." },
    { es: 'el check-out', en: 'check-out', example: '¿A qué hora es el check-out?', exampleEn: 'What time is check-out?' },
    { es: 'la llave', en: 'the key', example: '¿Me da la llave de la habitación?', exampleEn: 'Could you give me the room key?' },
    { es: 'quedarme una noche más', en: 'to stay one more night', example: '¿Podría quedarme una noche más?', exampleEn: 'Could I stay one more night?' },
  ],

  practice: [
    // ── hotel_travel block (blocked practice: checking in first, then problems/preterite-imperfect) ──
    { type: 'translation_to_spanish', prompt: "Translate: 'I have a reservation under the name García.'", english: 'I have a reservation under the name García.', answer: 'Tengo una reserva a nombre de García.', word: 'a nombre de', concept_id: 'hotel_travel', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'You want a room for two people. Which do you ask for?', word: 'habitación doble', english: 'double room', answer: 'una habitación doble', options: ['una habitación sencilla', 'una habitación doble', 'un check-out', 'una llave doble'], concept_id: 'hotel_travel', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Reservé una habitación, pero cuando llegué, no ___ mi reserva." (imperfect — the state they found)', word: 'tenían', english: "didn't have", answer: 'tenían', concept_id: 'hotel_travel', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Parece que hay un problema con mi reserva"?', word: 'problema con mi reserva', english: 'problem with my reservation', answer: "It seems there's a problem with my reservation.", concept_id: 'hotel_travel', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Quisiera registrar, por favor." (missing the reflexive)', word: 'registrarme', english: 'to check in', answer: 'Quisiera registrarme, por favor.', concept_id: 'hotel_travel', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Could I stay one more night?'", english: 'Could I stay one more night?', answer: '¿Podría quedarme una noche más?', word: 'quedarme', concept_id: 'hotel_travel', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which asks what time you need to leave the room?', word: 'check-out', english: 'check-out', answer: '¿A qué hora es el check-out?', options: ['¿A qué hora es el check-out?', '¿Tiene habitaciones libres?', '¿Está incluido el desayuno?', '¿Me da la llave?'], concept_id: 'hotel_travel', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishStep, Babbel,
// Kaiwa, and other pedagogical hotel-phrase guides before writing (July
// 2026):
// - tengo una reserva / a nombre de confirmed as the standard check-in
//   opener; habitación doble/sencilla confirmed as the standard room-type
//   pair (individual also used regionally for "single")
// - parece que hay un problema con mi reserva, ¿podría verificar mi
//   reserva?, and mi habitación no coincide con lo que reservé confirmed
//   as standard, polite ways to raise a booking problem
// - registrarse (reflexive, to check in) confirmed as distinct from
//   registrar (to register something else); quedarse (to stay) reused
//   correctly with its reflexive from the phone_plans unit's quedar note
// This unit deliberately follows immediately after Unit 17 (The Past in
// Detail) to put preterite-vs-imperfect to real use describing a booking
// problem, rather than introducing new grammar. No prior GRAMMAR_CARDS
// entry exists for hotel_travel, a new functional-language concept (see
// functions/_lib/concepts.js).
