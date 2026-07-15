// Unit — At the Bank & Post Office (B1)
// Covers: bank_post_office
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against Baselang, Migaku, Spanish.Academy, and
// other pedagogical phrasebook sources before writing — see the audit
// note at the bottom of this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar): reuses
// quisiera (introduced in the Restaurant unit) and present_perfect (Unit 11)
// rather than introducing new grammar. The last of the B1 situational
// cluster (directions, doctor, emergencies, bank/post office) before the
// B1 checkpoint.

export default {
  sections: [
    {
      heading: 'At the Bank',
      paragraphs: [
        "Bank errands run on a small, predictable set of verbs. Quisiera abrir una cuenta (\"I would like to open an account\") is the standard opener if you're a new customer — specify cuenta de ahorros (\"savings account\") or cuenta corriente (\"checking account\") if asked which kind. Once you have an account, retirar (\"to withdraw\") and depositar (\"to deposit\") cover the two basic transactions: Necesito retirar dinero (\"I need to withdraw money\"), Quiero depositar un cheque (\"I want to deposit a check\").",
        'A regional habit is worth knowing here: in Spain, sacar dinero ("to take out money") is just as common as retirar; in Latin America, retirar tends to dominate. Both are understood everywhere. For everyday cash needs outside banking hours, el cajero automático ("the ATM") is the word you\'ll reach for constantly: ¿Dónde hay un cajero automático cerca? ("Where\'s a nearby ATM?").',
        '¿Cuál es mi saldo? ("What\'s my balance?") is the standard balance inquiry. If you need to send money to someone else: Quisiera hacer una transferencia ("I would like to make a transfer"). And if something\'s gone wrong — a lost card, an unrecognized charge — He perdido mi tarjeta ("I\'ve lost my card," present perfect from Unit 11) is exactly the kind of situation that tense was built for: a recent event whose effect still matters right now.',
      ],
      examples: [
        { es: 'Quisiera abrir una cuenta de ahorros.', en: 'I would like to open a savings account.' },
        { es: 'Necesito retirar cien dólares.', en: 'I need to withdraw one hundred dollars.' },
        { es: '¿Dónde hay un cajero automático cerca de aquí?', en: "Where's a nearby ATM?" },
        { es: '¿Cuál es mi saldo actual?', en: "What's my current balance?" },
        { es: 'He perdido mi tarjeta de crédito, ¿qué hago?', en: "I've lost my credit card, what should I do?" },
      ],
      commonMistakes: [
        'Retirar and sacar (dinero) are both correct for "withdraw" — don\'t assume only one is right; it\'s a Spain-vs-Latin-America habit, not a formal/informal split.',
        'Cuenta de ahorros (savings) and cuenta corriente (checking) are not interchangeable — specify which one you mean when opening an account, since the bank will ask if you don\'t.',
        'He perdido (present perfect) fits a recent loss whose effect is ongoing — if you\'re instead telling a longer story about when/how it happened, you\'d shift to the preterite (perdí mi tarjeta ayer) from Unit 11 instead.',
      ],
    },
    {
      heading: 'At the Post Office',
      paragraphs: [
        "The post office runs through an equally short list of essentials. Quisiera enviar esta carta/este paquete (\"I would like to send this letter/this package\") gets any transaction started. ¿Venden sellos? (\"Do you sell stamps?\") is the standard question if you just need postage — sello is \"stamp,\" and you'll often be asked how many you need and where they're going.",
        'For anything valuable or important, correo certificado ("certified mail") provides proof of delivery: Quisiera enviarlo por correo certificado ("I would like to send it by certified mail"). Two more words fill out a shipping label: el remitente ("the sender") and el destinatario ("the recipient") — both come up on any package or certified letter form you\'ll need to fill out.',
        '¿Cuánto tarda en llegar? ("How long does it take to arrive?") reuses the tarda construction from the Hotel & Travel unit, now applied to mail instead of a trip. And if you\'re shipping internationally: ¿Cuánto cuesta enviarlo a...? ("How much does it cost to send it to...?") plugs a country or city straight into the price question you already know from Unit 2.',
      ],
      examples: [
        { es: 'Quisiera enviar este paquete a México.', en: 'I would like to send this package to Mexico.' },
        { es: '¿Venden sellos aquí?', en: 'Do you sell stamps here?' },
        { es: 'Quisiera enviarlo por correo certificado.', en: 'I would like to send it by certified mail.' },
        { es: 'Escriba el nombre del destinatario aquí, por favor.', en: "Write the recipient's name here, please." },
        { es: '¿Cuánto tarda en llegar a España?', en: 'How long does it take to arrive in Spain?' },
      ],
      commonMistakes: [
        "Don't mix up remitente (sender — you) and destinatario (recipient — them) when filling out a form; the two words look similar but mean opposite roles.",
        'Correo certificado is specifically about proof of delivery/tracking, not speed — don\'t assume it means "express" or "fast" the way it might sound.',
        '¿Cuánto tarda? asks about duration (how long); ¿Cuánto cuesta? asks about price — both are common follow-up questions but answer completely different things.',
      ],
    },
  ],

  vocab: [
    { es: 'abrir una cuenta', en: 'to open an account', example: 'Quisiera abrir una cuenta de ahorros.', exampleEn: 'I would like to open a savings account.' },
    { es: 'cuenta de ahorros', en: 'savings account', example: 'Quisiera abrir una cuenta de ahorros.', exampleEn: 'I would like to open a savings account.' },
    { es: 'cuenta corriente', en: 'checking account', example: 'Prefiero una cuenta corriente.', exampleEn: 'I prefer a checking account.' },
    { es: 'retirar', en: 'to withdraw (money)', example: 'Necesito retirar dinero.', exampleEn: 'I need to withdraw money.' },
    { es: 'depositar', en: 'to deposit', example: 'Quiero depositar un cheque.', exampleEn: 'I want to deposit a check.' },
    { es: 'cajero automático', en: 'ATM', example: '¿Dónde hay un cajero automático?', exampleEn: "Where's an ATM?" },
    { es: 'saldo', en: 'balance (account)', example: '¿Cuál es mi saldo actual?', exampleEn: "What's my current balance?" },
    { es: 'transferencia', en: 'transfer (money)', example: 'Quisiera hacer una transferencia.', exampleEn: 'I would like to make a transfer.' },
    { es: 'oficina de correos', en: 'post office', example: '¿Dónde está la oficina de correos?', exampleEn: "Where's the post office?" },
    { es: 'sello', en: 'stamp', example: '¿Venden sellos aquí?', exampleEn: 'Do you sell stamps here?' },
    { es: 'carta', en: 'letter (mail)', example: 'Quisiera enviar esta carta.', exampleEn: 'I would like to send this letter.' },
    { es: 'correo certificado', en: 'certified mail', example: 'Envié el documento por correo certificado.', exampleEn: 'I sent the document by certified mail.' },
    { es: 'remitente', en: 'sender', example: 'Escriba el nombre del remitente aquí.', exampleEn: "Write the sender's name here." },
    { es: 'destinatario', en: 'recipient', example: 'El destinatario vive en Bogotá.', exampleEn: 'The recipient lives in Bogotá.' },
  ],

  practice: [
    // ── bank_post_office block (blocked practice: bank first, then post office) ──
    { type: 'translation_to_spanish', prompt: "Translate: 'I would like to open a savings account.'", english: 'I would like to open a savings account.', answer: 'Quisiera abrir una cuenta de ahorros.', word: 'abrir una cuenta', concept_id: 'bank_post_office', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Necesito ___ cien dólares." (withdraw)', word: 'retirar', english: 'to withdraw', answer: 'retirar', concept_id: 'bank_post_office', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which question asks about your account balance?', word: 'saldo', english: 'balance', answer: '¿Cuál es mi saldo?', options: ['¿Cuál es mi saldo?', '¿Dónde hay un cajero?', '¿Puedo depositar esto?', '¿Cuánto tarda?'], concept_id: 'bank_post_office', difficulty: 1 },
    { type: 'translation_to_english', prompt: '¿Qué significa "He perdido mi tarjeta de crédito"?', word: 'he perdido', english: "I've lost", answer: "I've lost my credit card.", concept_id: 'bank_post_office', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Do you sell stamps here?'", english: 'Do you sell stamps here?', answer: '¿Venden sellos aquí?', word: 'sellos', concept_id: 'bank_post_office', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the mix-up: "Escriba el nombre del remitente aquí" (you actually want the RECIPIENT\'s name, not the sender\'s)', word: 'destinatario', english: 'recipient', answer: 'Escriba el nombre del destinatario aquí.', concept_id: 'bank_post_office', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which phrase asks how long a package will take to arrive?', word: '¿cuánto tarda?', english: 'how long does it take?', answer: '¿Cuánto tarda en llegar?', options: ['¿Cuánto cuesta enviarlo?', '¿Cuánto tarda en llegar?', '¿Dónde está el remitente?', '¿Venden sellos?'], concept_id: 'bank_post_office', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against Baselang, Migaku,
// Spanish.Academy, and other pedagogical bank/post-office guides before
// writing (July 2026):
// - quisiera abrir una cuenta (de ahorros/corriente) confirmed as the
//   standard account-opening opener; cuenta de ahorros vs. cuenta
//   corriente confirmed as a real, non-interchangeable distinction
// - retirar vs. sacar (dinero) confirmed as a Spain/Latin-America
//   regional pair, not a register distinction — both widely understood
// - cajero automático, saldo, transferencia confirmed as standard
//   everyday banking vocabulary
// - quisiera enviar esta carta/este paquete, ¿venden sellos?, correo
//   certificado (with tracking/proof-of-delivery, not speed) confirmed
//   as standard post-office phrases; remitente/destinatario confirmed as
//   the standard sender/recipient pair used on shipping forms
// This unit reuses quisiera (introduced in the Restaurant unit) and
// present_perfect (Unit 11) rather than introducing new grammar, and
// reuses the ¿cuánto tarda?/¿cuánto cuesta? question patterns from the
// Hotel & Travel and Numbers & Time units. No prior GRAMMAR_CARDS entry
// exists for bank_post_office, a new functional-language concept (see
// functions/_lib/concepts.js).
