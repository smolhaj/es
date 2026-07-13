// Unit — Phone Calls & Making Plans (A2)
// Covers: phone_plans
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishPod101, Migaku, and other
// pedagogical phrasebook sources before writing — see the audit note at
// the bottom of this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar): reuses grammar
// already taught (near_future, time_expressions) rather than introducing
// a new grammar structure.

export default {
  sections: [
    {
      heading: 'Answering and Making a Call',
      paragraphs: [
        'How you answer the phone in Spanish actually depends on where you are — this is one of the more noticeably regional corners of the language. In much of Latin America, especially Colombia, Chile, Peru, and Venezuela, people answer with ¿Aló? In Spain, the standard is ¿Diga? or ¿Dígame? (literally "speak" or "tell me"), and Mexico commonly uses ¿Bueno? All of them do the same job as English "Hello?" when picking up — none is more "correct" than another, they\'re simply regional defaults.',
        'To identify who\'s calling, you\'ll hear ¿De parte de quién? (\"Who\'s calling?\", literally \"on behalf of whom\") or the shorter ¿Quién habla? (\"Who\'s speaking?\"). To answer, just give your name: Soy Ana (\"It\'s Ana\") or De parte de Ana (\"This is Ana\"/\"On behalf of Ana\").',
        "If the person you're calling isn't available, ¿Puedo dejar un mensaje? (\"Can I leave a message?\") is the standard request. When you're done, colgar (\"to hang up\") is the verb you'll need: Voy a colgar, hablamos luego (\"I'm going to hang up, we'll talk later\").",
      ],
      examples: [
        { es: '¿Aló? ¿Quién habla?', en: 'Hello? Who is this? (Latin America)' },
        { es: '¿Dígame? Soy Carlos.', en: "Hello? It's Carlos. (Spain)" },
        { es: '¿De parte de quién, por favor?', en: "Who's calling, please?" },
        { es: '¿Puedo dejar un mensaje para ella?', en: 'Can I leave a message for her?' },
        { es: 'Te llamo más tarde, voy a colgar.', en: "I'll call you later, I'm going to hang up." },
      ],
      commonMistakes: [
        'Aló, diga/dígame, and bueno are all correct — none is "the" right way to answer a Spanish phone call; the natural choice depends entirely on which country you\'re in.',
        'Don\'t answer ¿Quién es? the way you might in English ("who is it?") — while understandable, ¿De parte de quién? or ¿Quién habla? are the phrases a native speaker actually reaches for.',
        'Colgar is irregular (o→ue: cuelgo, cuelgas, cuelga) — don\'t regularize it to "colgo."',
      ],
    },
    {
      heading: 'Making Plans: Quedar',
      paragraphs: [
        "Once you're actually talking to someone, quedar (\"to arrange to meet\") is the verb that runs almost every plan-making conversation in Spanish. ¿Quedamos el sábado? (\"Shall we meet up Saturday?\") is the standard way to propose getting together — notice it reuses nosotros-form the same way English \"shall we\" invites a joint decision.",
        'To pin down details, combine quedar with the time expressions and near-future (ir a + infinitive) you already know: ¿A qué hora quedamos? (\"What time should we meet?\"), Quedamos a las siete (\"Let\'s meet at seven\"), Voy a llegar un poco tarde (\"I\'m going to arrive a little late,\" from Unit 6\'s near future). ¿Dónde quedamos? (\"Where should we meet?\") pairs naturally with a specific place: Quedamos en la plaza (\"Let\'s meet at the square\").',
        "To respond to an invitation, Spanish has ready-made phrases for both directions: Me encantaría (\"I'd love to\") or Claro, ¿a qué hora? (\"Sure, what time?\") to accept, and Lo siento, no puedo (\"Sorry, I can't\") or Tengo otro plan (\"I have other plans\") to decline politely. If plans need to change, cambiar de planes (\"to change plans\") and cancelar (\"to cancel\") cover it: ¿Podemos cambiar la hora? (\"Can we change the time?\").",
      ],
      examples: [
        { es: '¿Quedamos el sábado por la tarde?', en: 'Shall we meet up Saturday afternoon?' },
        { es: '¿A qué hora y dónde quedamos?', en: 'What time and where should we meet?' },
        { es: 'Quedamos a las siete en la plaza.', en: "Let's meet at seven at the square." },
        { es: 'Me encantaría, ¿a qué hora?', en: "I'd love to, what time?" },
        { es: 'Lo siento, no puedo — tengo otro plan.', en: "Sorry, I can't — I have other plans." },
        { es: '¿Podemos cambiar la hora? Voy a llegar tarde.', en: "Can we change the time? I'm going to arrive late." },
      ],
      commonMistakes: [
        'Don\'t confuse quedar ("to arrange to meet") with quedarse ("to stay/remain") — Quedamos a las siete means "we\'re meeting at seven," while Me quedo en casa means "I\'m staying home." Same root, different reflexive status, different meaning.',
        "Tengo otro plan is a softer, more natural decline than a flat no — Spanish speakers generally prefer offering a reason (even a light one) over a bare refusal, the same social instinct English speakers have.",
        'Cancelar and cambiar are different actions — cancelar ends the plan entirely; cambiar just adjusts it (time, place). Don\'t say cancelar la hora when you mean "change the time."',
      ],
    },
  ],

  vocab: [
    { es: 'aló', en: 'hello (phone, Latin America)', example: '¿Aló? ¿Quién habla?', exampleEn: 'Hello? Who is this?' },
    { es: 'dígame', en: 'hello (phone, Spain)', example: '¿Dígame? Soy Marta.', exampleEn: "Hello? It's Marta." },
    { es: '¿de parte de quién?', en: "who's calling?", example: '¿De parte de quién, por favor?', exampleEn: "Who's calling, please?" },
    { es: 'dejar un mensaje', en: 'to leave a message', example: '¿Puedo dejar un mensaje?', exampleEn: 'Can I leave a message?' },
    { es: 'colgar', en: 'to hang up', example: 'Voy a colgar ahora.', exampleEn: "I'm going to hang up now." },
    { es: 'quedar', en: 'to arrange to meet', example: '¿Quedamos el sábado?', exampleEn: 'Shall we meet up Saturday?' },
    { es: '¿a qué hora quedamos?', en: 'what time should we meet?', example: '¿A qué hora y dónde quedamos?', exampleEn: 'What time and where should we meet?' },
    { es: 'me encantaría', en: "I'd love to", example: 'Me encantaría, ¿a qué hora?', exampleEn: "I'd love to, what time?" },
    { es: 'tengo otro plan', en: 'I have other plans', example: 'Lo siento, tengo otro plan.', exampleEn: "Sorry, I have other plans." },
    { es: 'cambiar de planes', en: 'to change plans', example: '¿Podemos cambiar de planes?', exampleEn: 'Can we change plans?' },
  ],

  practice: [
    // ── phone_plans block (blocked practice: answering/calling first, then making plans) ──
    { type: 'multiple_choice', prompt: 'You are in Spain and answer the phone. Which is the standard greeting?', word: 'dígame', english: 'hello (phone)', answer: '¿Dígame?', options: ['¿Aló?', '¿Dígame?', '¿Quedamos?', '¿De parte?'], concept_id: 'phone_plans', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Can I leave a message?'", english: 'Can I leave a message?', answer: '¿Puedo dejar un mensaje?', word: 'dejar un mensaje', concept_id: 'phone_plans', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "¿___ de quién, por favor?" (asking who is calling)', word: 'de parte', english: "who's calling", answer: 'De parte', concept_id: 'phone_plans', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Shall we meet up Saturday?'", english: 'Shall we meet up Saturday?', answer: '¿Quedamos el sábado?', word: 'quedamos', concept_id: 'phone_plans', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Me quedo el sábado a las siete." (you mean "let\'s meet," not "I\'m staying")', word: 'quedamos', english: "let's meet", answer: 'Quedamos el sábado a las siete.', concept_id: 'phone_plans', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Lo siento, tengo otro plan"?', word: 'tengo otro plan', english: 'I have other plans', answer: "Sorry, I have other plans.", concept_id: 'phone_plans', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'You want to accept an invitation enthusiastically. What do you say?', word: 'me encantaría', english: "I'd love to", answer: 'Me encantaría, ¿a qué hora?', options: ['No puedo, gracias.', 'Me encantaría, ¿a qué hora?', 'Voy a colgar.', 'Tengo otro plan.'], concept_id: 'phone_plans', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishPod101, Migaku,
// Speechling, and other pedagogical phone/plan-making guides before
// writing (July 2026):
// - regional variation in phone greetings confirmed: aló (Colombia, Chile,
//   Peru, Venezuela and much of Latin America), diga/dígame (Spain), bueno
//   (Mexico) — none more "correct," purely regional default
// - ¿de parte de quién?/¿quién habla? confirmed as the standard ways to
//   ask who's calling; ¿puedo dejar un mensaje? confirmed as the standard
//   message-leaving request
// - quedar (to arrange to meet) confirmed as distinct from its reflexive
//   quedarse (to stay/remain) — same verb root, different meaning, a
//   commonly-confused pair for learners
// - me encantaría / tengo otro plan / lo siento, no puedo confirmed as
//   natural accept/decline phrases; declining with a stated reason
//   confirmed as the socially expected pattern over a bare "no"
// This unit reuses near_future (Unit 6) and time_expressions (Unit 13)
// rather than introducing new grammatical structure. No prior
// GRAMMAR_CARDS entry exists for phone_plans, a new functional-language
// concept (see functions/_lib/concepts.js).
