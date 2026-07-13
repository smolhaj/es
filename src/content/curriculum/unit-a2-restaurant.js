// Unit — At the Café & Restaurant (A2)
// Covers: restaurant_ordering
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict and other pedagogical
// grammar/phrasebook sources before writing — see the audit note at the
// bottom of this file for the specific claims checked.
//
// This is a functional/situational unit (CEFR's "Funciones" pillar, not
// "Gramática") rather than a new grammar structure — it teaches fixed
// phrases and a real exchange pattern built entirely from grammar already
// taught (gustar_basico, numbers, questions), the same way hay was
// introduced early as a fixed form before full verb conjugation.

export default {
  sections: [
    {
      heading: 'Getting a Table and Ordering',
      paragraphs: [
        "Walking into a restaurant or café runs through a small, predictable set of exchanges — and once you have them, you can handle almost any Spanish-speaking restaurant with confidence. To ask for a table, say ¿Tiene una mesa para dos? (\"Do you have a table for two?\") — swap dos for however many people you are. If there's a wait, you might hear ¿Tiene reserva? (\"Do you have a reservation?\") in return.",
        'To actually order, Spanish has a politer alternative to simply saying quiero ("I want"), which can sound a little blunt for a service interaction. Quisiera and Me gustaría both mean "I would like" and are the standard, courteous way to order: Quisiera un café con leche (\"I would like a coffee with milk\"), Me gustaría probar la paella (\"I would like to try the paella\"). Both are built from grammar you\'ll meet formally later (quisiera from the imperfect subjunctive, me gustaría from the conditional) — for now, just treat them as fixed, ready-to-use polite phrases, the same way you already use hay without needing to conjugate haber.',
        "If you're ordering in a group, para mí (\"for me\") is the natural way to specify your own order once someone else has already spoken: Para mí, la sopa (\"For me, the soup\"). To ask what's good, ¿Qué me recomienda? (\"What do you recommend?\") is the standard question to the waiter — and la carta or el menú (both mean \"the menu\") is what you ask to see: ¿Nos trae la carta, por favor? (\"Could you bring us the menu, please?\").",
      ],
      examples: [
        { es: '¿Tiene una mesa para dos, por favor?', en: 'Do you have a table for two, please?' },
        { es: 'Quisiera un té y un sándwich.', en: 'I would like a tea and a sandwich.' },
        { es: '¿Nos trae la carta, por favor?', en: 'Could you bring us the menu, please?' },
        { es: 'Para mí, el pollo con arroz.', en: 'For me, the chicken with rice.' },
        { es: '¿Qué me recomienda?', en: 'What do you recommend?' },
        { es: 'Me gustaría probar el postre de la casa.', en: "I'd like to try the house dessert." },
      ],
      commonMistakes: [
        'Quiero un café isn\'t wrong, but it can sound abrupt in a restaurant — quisiera or me gustaría is the natural, polite default a native speaker reaches for when ordering, the same way English prefers "I\'d like" over a bare "I want" to a waiter.',
        'Both la carta and el menú mean "the menu" and are used interchangeably in most places — don\'t assume one is more correct than the other; regional habit decides which is more common.',
        'Don\'t forget por favor at the end of a request — Spanish service culture leans on it constantly, even more than English uses "please" in the same situations.',
      ],
    },
    {
      heading: 'The Bill, the Tip, and Wrapping Up',
      paragraphs: [
        'When you\'re ready to leave, La cuenta, por favor (\"The bill, please\") is the single most useful phrase in this whole unit — it\'s how you signal you\'re done and ready to pay, and a waiter will rarely bring the bill unprompted the way some places do in English-speaking countries. Asking is expected, not rude.',
        'Tipping culture varies significantly by country, so it\'s worth asking rather than assuming: ¿Está incluida la propina? (\"Is the tip included?\"). In Spain, a service charge is often already built into the price and tipping is light/optional; in much of Latin America, a 10% propina is common but still usually separate from the bill. To ask how you can pay: ¿Aceptan tarjeta, o solo efectivo? (\"Do you take card, or only cash?\") — tarjeta (card) and efectivo (cash) cover the two most common payment methods.',
        'One more pair worth knowing if you\'re ordering from a café or fast counter rather than sitting down for a full meal: ¿Para aquí o para llevar? (\"For here or to go?\") is what you\'ll often be asked. Para llevar (\"to take away/to go\") is the answer if you\'re not staying.',
      ],
      examples: [
        { es: 'La cuenta, por favor.', en: 'The bill, please.' },
        { es: '¿Está incluida la propina?', en: 'Is the tip included?' },
        { es: '¿Aceptan tarjeta, o solo efectivo?', en: 'Do you take card, or only cash?' },
        { es: '¿Para aquí o para llevar? — Para llevar, gracias.', en: '"For here or to go?" — "To go, thanks."' },
        { es: 'Todo estuvo delicioso, gracias.', en: 'Everything was delicious, thank you.' },
      ],
      commonMistakes: [
        "Don't wait for the bill to appear on its own the way it might in some English-speaking countries — asking for la cuenta is the normal, expected move, not an impatient one.",
        'Tipping norms genuinely differ by country — asking ¿está incluida la propina? is more useful (and more accurate) than assuming either "no tipping" or "always 20%" the way things work at home.',
        'Para llevar means "to go" (taking food away); don\'t confuse it with para aquí ("for here," eating in) — they\'re opposite answers to the same question.',
      ],
    },
  ],

  vocab: [
    { es: 'quisiera', en: 'I would like (polite)', example: 'Quisiera un café, por favor.', exampleEn: 'I would like a coffee, please.' },
    { es: 'me gustaría', en: 'I would like', example: 'Me gustaría probar la paella.', exampleEn: 'I would like to try the paella.' },
    { es: 'para mí', en: 'for me', example: 'Para mí, la sopa.', exampleEn: 'For me, the soup.' },
    { es: 'la carta', en: 'the menu', example: '¿Nos trae la carta?', exampleEn: 'Could you bring us the menu?' },
    { es: 'el menú', en: 'the menu', example: 'El menú del día cuesta doce euros.', exampleEn: "Today's menu costs twelve euros." },
    { es: '¿qué me recomienda?', en: 'what do you recommend?', example: '¿Qué me recomienda de postre?', exampleEn: 'What do you recommend for dessert?' },
    { es: 'la cuenta', en: 'the bill', example: 'La cuenta, por favor.', exampleEn: 'The bill, please.' },
    { es: 'propina', en: 'tip', example: '¿Está incluida la propina?', exampleEn: 'Is the tip included?' },
    { es: 'efectivo', en: 'cash', example: '¿Aceptan efectivo?', exampleEn: 'Do you accept cash?' },
    { es: 'para llevar', en: 'to go (takeaway)', example: 'Un café para llevar, por favor.', exampleEn: 'A coffee to go, please.' },
    { es: 'para aquí', en: 'for here (eating in)', example: '¿Para aquí o para llevar?', exampleEn: 'For here or to go?' },
    { es: 'bebida', en: 'drink', example: '¿Qué bebida quiere?', exampleEn: 'What drink would you like?' },
    { es: 'mesero / camarero', en: 'waiter (Latin America / Spain)', example: 'El camarero trajo la cuenta.', exampleEn: 'The waiter brought the bill.' },
  ],

  practice: [
    // ── restaurant_ordering block (blocked practice: getting a table/ordering, then bill/paying) ──
    { type: 'translation_to_spanish', prompt: "Translate: 'Do you have a table for two?'", english: 'Do you have a table for two?', answer: '¿Tiene una mesa para dos?', word: 'mesa para', concept_id: 'restaurant_ordering', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which is the more polite way to order a coffee?', word: 'quisiera', english: 'I would like', answer: 'Quisiera un café.', options: ['Quiero un café.', 'Quisiera un café.', 'Café, dame.', 'Un café, ya.'], concept_id: 'restaurant_ordering', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "___ mí, el pollo con arroz." (specifying your own order)', word: 'para', english: 'for', answer: 'Para', concept_id: 'restaurant_ordering', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Nos trae la carta, por favor?"?', word: 'la carta', english: 'the menu', answer: 'Could you bring us the menu, please?', concept_id: 'restaurant_ordering', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'The bill, please.'", english: 'The bill, please.', answer: 'La cuenta, por favor.', word: 'la cuenta', concept_id: 'restaurant_ordering', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'You want to know if tip is included. What do you ask?', word: 'propina', english: 'tip', answer: '¿Está incluida la propina?', options: ['¿Cuánto cuesta la propina?', '¿Está incluida la propina?', '¿Tiene propina?', '¿Dónde está la propina?'], concept_id: 'restaurant_ordering', difficulty: 2 },
    { type: 'error_correction', prompt: 'You want your coffee to take away, not to stay. Fix: "Para aquí, por favor." (you are leaving)', word: 'para llevar', english: 'to go', answer: 'Para llevar, por favor.', concept_id: 'restaurant_ordering', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, Migaku, and
// other pedagogical restaurant-phrase guides before writing (July 2026):
// - ¿Tiene una mesa para...? as the standard way to request a table
// - quisiera and me gustaría both confirmed as the standard, more-polite
//   alternatives to quiero for ordering; quisiera specifically noted as
//   sounding more courteous than a bare quiero in service contexts
// - para mí as the standard way to specify one's own order within a group
// - la carta and el menú confirmed as interchangeable, regionally-varying
//   terms for "the menu," not a formal/informal distinction
// - la cuenta, por favor confirmed as the expected, non-rude way to
//   request the bill — the bill is not typically brought unprompted
// - tipping-culture variation between Spain (often included/light) and
//   Latin America (commonly ~10%, usually separate) confirmed as a real,
//   worth-flagging regional difference rather than a single fixed rule
// - ¿para aquí o para llevar? confirmed as the standard dine-in/takeaway
//   question at cafés and fast-counter service
// This unit deliberately treats quisiera/me gustaría as fixed functional
// phrases without teaching their underlying grammar (imperfect
// subjunctive / conditional), which are taught properly in Units 18 and
// 21.3 — consistent with how hay (Unit 5) and llueve/nieva (Weather unit)
// were introduced as fixed forms ahead of their full grammatical
// treatment. No prior GRAMMAR_CARDS entry exists for restaurant_ordering,
// a new functional-language concept (see functions/_lib/concepts.js).
