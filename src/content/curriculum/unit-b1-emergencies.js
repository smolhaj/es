// Unit — Emergencies (B1)
// Covers: emergencies
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against InkLingo, SpanishStep, and other
// pedagogical phrasebook sources before writing — see the audit note at
// the bottom of this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar): reuses the
// imperative (Unit 19, just taught) for urgent commands rather than
// introducing new grammar. Placed as the last of the B1 situational
// cluster (directions, doctor, emergencies) right before the B1
// checkpoint.

export default {
  sections: [
    {
      heading: 'Calling for Help',
      paragraphs: [
        "In a real emergency, you need short, immediate words more than full sentences — this section is deliberately compact. ¡Ayuda! (\"Help!\") is the general, all-purpose call for help. ¡Socorro! is a stronger, more urgent version, closer to shouting for help in a genuinely dangerous moment. ¡Auxilio! is a third option, slightly more formal, but functionally interchangeable with socorro in most contexts.",
        'To get someone specific: Llame a la policía (\"Call the police\") and Llame a una ambulancia (\"Call an ambulance\") — both use the usted imperative from Unit 19, the natural register for a stranger in an urgent moment. Es una emergencia (\"It\'s an emergency\") is worth leading with when calling for help by phone, since it immediately tells the listener how seriously to treat what follows.',
        "Emergency numbers vary by country, unlike in the US/Canada's unified 911: Spain and the rest of the EU use 112 for everything, Mexico uses 911, and other countries split services (Argentina: 107 medical, 101 police, 100 fire; Colombia: 123 for all). Knowing to check the local number before you need it is itself a useful travel habit.",
      ],
      examples: [
        { es: '¡Ayuda! ¡Necesito ayuda!', en: 'Help! I need help!' },
        { es: '¡Socorro! ¡Se está ahogando!', en: "Help! He's drowning!" },
        { es: 'Llame a la policía, por favor.', en: 'Call the police, please.' },
        { es: 'Llame a una ambulancia, es una emergencia.', en: "Call an ambulance, it's an emergency." },
        { es: '¿Cuál es el número de emergencias aquí?', en: "What's the emergency number here?" },
      ],
      commonMistakes: [
        "Don't wait to build a full sentence in a real emergency — ¡Ayuda! or ¡Socorro! alone communicates everything urgently needed; a complete grammatical sentence is not the priority in the moment.",
        "Emergency numbers are not universal — don't assume 911 works everywhere; 112 covers the EU (including Spain), but Latin American countries vary country by country.",
        'Llame (usted imperative) is the right register for a stranger — this is not the moment to worry about tú vs. usted precision, but usted is the safer, more universally understood default when addressing someone you don\'t know.',
      ],
    },
    {
      heading: 'Reporting a Problem',
      paragraphs: [
        'Once the immediate danger has passed, you\'ll often need to explain what happened. Me robaron (\"I was robbed,\" literally \"they robbed me\") is the standard way to report a theft, using the impersonal \"they\" construction Spanish favors when the doer is unknown or unimportant: Me robaron la cartera (\"My wallet was stolen\"/\"They stole my wallet from me\").',
        'For lost items, Spanish has two options: the simple Perdí mi pasaporte (\"I lost my passport\") you can already build, and a new pattern worth learning here — Se me perdió el pasaporte, which reframes the loss as something that happened to you almost accidentally, rather than through carelessness. Literally it\'s closer to \"the passport got lost on me\": se marks the event as unintentional, and me marks who it happened to. Both are understood, but se me perdió carries a softer, more sympathetic tone that native speakers often reach for specifically when reporting a loss.',
        'To describe an accident or injury: Hubo un accidente (\"There was an accident,\" from haber) and Hay una persona herida (\"There\'s an injured person\") get the essential facts across fast. Necesito hacer una denuncia (\"I need to file a police report\") is the phrase for the formal follow-up step after a theft or serious incident.',
      ],
      examples: [
        { es: 'Me robaron la cartera en la calle.', en: 'My wallet was stolen on the street.' },
        { es: 'Perdí mi pasaporte esta mañana.', en: 'I lost my passport this morning.' },
        { es: 'Se me perdieron las llaves.', en: 'I lost my keys. (happened to me, softer framing)' },
        { es: 'Hubo un accidente cerca del hotel.', en: 'There was an accident near the hotel.' },
        { es: 'Necesito hacer una denuncia.', en: 'I need to file a police report.' },
      ],
      commonMistakes: [
        'Me robaron uses the impersonal "they" (third person plural, unspecified subject) — don\'t translate it word-for-word as "me robbed"; it means "I was robbed"/"someone stole from me," with the thief left unnamed on purpose.',
        'Se me perdió/perdieron agrees with what was lost, not with "me" — se me perdió el pasaporte (singular) but se me perdieron las llaves (plural), the same accidental-se pattern that shows up elsewhere in Spanish for unplanned events.',
        "Hubo (from haber, preterite) is the right choice for reporting a single past event like an accident — no hay un accidente (present) would suggest it's still happening right now.",
      ],
    },
  ],

  vocab: [
    { es: '¡ayuda!', en: 'help!', example: '¡Ayuda! ¡Necesito ayuda!', exampleEn: 'Help! I need help!' },
    { es: '¡socorro!', en: 'help! (urgent)', example: '¡Socorro! ¡Se está ahogando!', exampleEn: "Help! He's drowning!" },
    { es: '¡auxilio!', en: 'help! (formal)', example: '¡Auxilio! ¡Llamen a la policía!', exampleEn: 'Help! Call the police!' },
    { es: 'llame a la policía', en: 'call the police', example: 'Llame a la policía, por favor.', exampleEn: 'Call the police, please.' },
    { es: 'ambulancia', en: 'ambulance', example: 'Llame a una ambulancia.', exampleEn: 'Call an ambulance.' },
    { es: 'emergencia', en: 'emergency', example: 'Es una emergencia.', exampleEn: "It's an emergency." },
    { es: 'me robaron', en: 'I was robbed', example: 'Me robaron la cartera.', exampleEn: 'My wallet was stolen.' },
    { es: 'perdí', en: 'I lost', example: 'Perdí mi pasaporte.', exampleEn: 'I lost my passport.' },
    { es: 'herido', en: 'injured', example: 'Hay una persona herida.', exampleEn: "There's an injured person." },
    { es: 'hacer una denuncia', en: 'to file a police report', example: 'Necesito hacer una denuncia.', exampleEn: 'I need to file a police report.' },
  ],

  practice: [
    // ── emergencies block (blocked practice: calling for help first, then reporting a problem) ──
    { type: 'multiple_choice', prompt: 'Someone is drowning. What is the most natural urgent call for help?', word: '¡socorro!', english: 'help!', answer: '¡Socorro!', options: ['¡Perdón!', '¡Socorro!', '¡Gracias!', '¡De parte de quién!'], concept_id: 'emergencies', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate (usted, formal command): 'Call the police, please.'", english: 'Call the police, please.', answer: 'Llame a la policía, por favor.', word: 'llame', concept_id: 'emergencies', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Me robaron la cartera"?', word: 'me robaron', english: 'I was robbed', answer: 'My wallet was stolen. / I was robbed of my wallet.', concept_id: 'emergencies', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "___ un accidente cerca del hotel." (from haber, preterite)', word: 'hubo', english: 'there was', answer: 'Hubo', concept_id: 'emergencies', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the agreement: "Se me perdió las llaves." (llaves is plural)', word: 'se me perdieron', english: 'I lost (them)', answer: 'Se me perdieron las llaves.', concept_id: 'emergencies', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I need to file a police report.'", english: 'I need to file a police report.', answer: 'Necesito hacer una denuncia.', word: 'hacer una denuncia', concept_id: 'emergencies', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which is Spain\'s single emergency number (like 911)?', word: '112', english: '112', answer: '112', options: ['911', '112', '123', '100'], concept_id: 'emergencies', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against InkLingo, SpanishStep,
// Baselang, and other pedagogical emergency-phrase guides before writing
// (July 2026):
// - ¡ayuda!/¡socorro!/¡auxilio! confirmed as near-synonymous emergency
//   calls, socorro carrying the most urgency; llame a la policía/una
//   ambulancia confirmed as standard usted-imperative emergency requests
// - emergency numbers confirmed as genuinely non-universal: 112 (Spain/
//   EU), 911 (Mexico), split numbers in Argentina (107/101/100) and
//   Colombia (123) — not a single global standard the way 911 functions
//   in the US/Canada
// - me robaron confirmed as the standard impersonal-"they" construction
//   for reporting theft; perdí vs. se me perdió confirmed as both valid,
//   with se me perdió carrying a softer "it happened to me" framing via
//   the accidental-se construction
// - hubo (preterite of haber) confirmed as correct for a single completed
//   past event (an accident that already happened), contrasted with
//   present hay for an ongoing/current state
// This unit reuses the imperative (Unit 19) for urgent commands. Se me
// perdió (the accidental/involuntary se construction) is introduced here
// as a fixed functional phrase, not taught anywhere earlier in the
// curriculum — treated the same way quisiera and llueve/nieva were
// introduced ahead of their full grammatical treatment elsewhere. No
// prior GRAMMAR_CARDS entry exists for emergencies, a new
// functional-language concept (see functions/_lib/concepts.js).
