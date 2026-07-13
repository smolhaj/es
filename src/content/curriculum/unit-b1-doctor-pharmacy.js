// Unit — At the Doctor & Pharmacy (B1)
// Covers: doctor_pharmacy
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against Yabla, Spanish.Academy, and other
// pedagogical phrasebook sources before writing — see the audit note at
// the bottom of this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar): reuses doler
// (gustar_type, Unit 9) and present_subjunctive (Unit 19, already taught
// by this point) rather than introducing new grammar.

export default {
  sections: [
    {
      heading: 'Describing Symptoms',
      paragraphs: [
        "You already know doler from Unit 9's gustar-type verbs, and it's the backbone of describing pain: Me duele la cabeza (\"My head hurts\"), Me duelen las piernas (\"My legs hurt\") — same singular/plural agreement rule as gustar. Alongside it, Tengo dolor de + [body part] works as an equally common alternative: Tengo dolor de espalda (\"I have back pain\").",
        'For symptoms beyond localized pain, tener + [symptom] covers most of what comes up: Tengo fiebre (\"I have a fever\"), Tengo tos (\"I have a cough\"), Tengo náuseas (\"I feel nauseous\"), Tengo mareos (\"I feel dizzy\"). To describe how long: Me duele desde ayer (\"It\'s been hurting since yesterday\") reuses the desde/desde hace pattern from Unit 13.',
        "To get seen, Necesito una cita con el médico (\"I need a doctor's appointment\") is the standard request, and No me siento bien (\"I don't feel well\") is a natural, general opener if you're not sure how to describe things precisely yet. A doctor will likely ask ¿Qué síntomas tiene? (\"What symptoms do you have?\") or ¿Desde cuándo se siente así? (\"Since when have you felt this way?\").",
      ],
      examples: [
        { es: 'Me duele mucho la cabeza desde esta mañana.', en: "My head has been hurting a lot since this morning." },
        { es: 'Tengo fiebre y tos desde ayer.', en: "I've had a fever and a cough since yesterday." },
        { es: 'Necesito una cita con el médico, por favor.', en: "I need a doctor's appointment, please." },
        { es: 'No me siento bien — tengo náuseas.', en: "I don't feel well — I feel nauseous." },
        { es: '¿Desde cuándo se siente así?', en: 'Since when have you felt this way?' },
      ],
      commonMistakes: [
        'Doler still agrees with the body part, not the person — Me duele las piernas is wrong because piernas is plural; it must be Me duelen las piernas, the exact rule from Unit 9.',
        "Don't add a possessive with doler or dolor de — Me duele mi cabeza is redundant, exactly as you learned before; the article alone (la cabeza) is enough.",
        'Tengo náuseas is usually said in the plural in everyday speech, even though the feeling is singular — treat it as a fixed phrase rather than reasoning out the number.',
      ],
    },
    {
      heading: 'At the Pharmacy and Getting Advice',
      paragraphs: [
        'La farmacia (\"the pharmacy\") is often the first stop for something minor, before or instead of a doctor. ¿Tiene algo para...? (\"Do you have something for...?\") is the workhorse question: ¿Tiene algo para el dolor de cabeza? (\"Do you have something for a headache?\"), ¿Tiene algo para la tos? (\"Do you have something for a cough?\"). The pharmacist might recommend una pastilla (\"a pill\"), un jarabe (\"a syrup\"), or una crema (\"a cream\"), depending on the symptom.',
        'This is a natural place to put the present subjunctive from Unit 19 to real use, since giving medical advice is exactly the kind of recommendation/suggestion context that triggers it: Le recomiendo que descanse (\"I recommend that you rest\"), Es importante que tome mucha agua (\"It\'s important that you drink lots of water\"). Notice both follow the WEIRDO pattern you already learned — recomendar and es importante que are both recommendation triggers, so the verb that follows (descanse, tome) switches to subjunctive.',
        'If you need a written prescription: ¿Necesito receta para esto? (\"Do I need a prescription for this?\") — over-the-counter availability varies by country and by medication, so it\'s always worth asking rather than assuming. To ask about dosage: ¿Cómo debo tomarlo? (\"How should I take it?\") is the standard follow-up question.',
      ],
      examples: [
        { es: '¿Tiene algo para el dolor de cabeza?', en: 'Do you have something for a headache?' },
        { es: 'Le recomiendo que descanse y tome mucha agua.', en: 'I recommend that you rest and drink lots of water.' },
        { es: 'Es importante que tome el jarabe tres veces al día.', en: "It's important that you take the syrup three times a day." },
        { es: '¿Necesito receta para esto?', en: 'Do I need a prescription for this?' },
        { es: '¿Cómo debo tomarlo?', en: 'How should I take it?' },
      ],
      commonMistakes: [
        "Don't forget the subjunctive after recomendar que / es importante que — Le recomiendo que descansa (indicative) is wrong; recommendation triggers require descanse (subjunctive), the same WEIRDO pattern from Unit 19.",
        "Prescription rules genuinely vary by country and medication — don't assume everything needs (or doesn't need) a receta; asking ¿necesito receta? is always the safer move.",
        'Jarabe specifically means a liquid/syrup medicine — don\'t use it for pills or creams; pastilla and crema are the words for those forms.',
      ],
    },
  ],

  vocab: [
    { es: 'me duele', en: 'it hurts (me)', example: 'Me duele la cabeza.', exampleEn: 'My head hurts.' },
    { es: 'tengo fiebre', en: 'I have a fever', example: 'Tengo fiebre desde ayer.', exampleEn: "I've had a fever since yesterday." },
    { es: 'náusea', en: 'nausea', example: 'Tengo náuseas.', exampleEn: 'I feel nauseous.' },
    { es: 'necesito una cita', en: 'I need an appointment', example: 'Necesito una cita con el médico.', exampleEn: "I need a doctor's appointment." },
    { es: 'no me siento bien', en: "I don't feel well", example: 'No me siento bien hoy.', exampleEn: "I don't feel well today." },
    { es: '¿tiene algo para...?', en: 'do you have something for...?', example: '¿Tiene algo para la tos?', exampleEn: 'Do you have something for a cough?' },
    { es: 'jarabe', en: 'syrup (medicine)', example: '¿Tiene jarabe para la tos?', exampleEn: 'Do you have cough syrup?' },
    { es: 'le recomiendo que', en: 'I recommend that you', example: 'Le recomiendo que descanse.', exampleEn: 'I recommend that you rest.' },
    { es: 'receta', en: 'prescription', example: '¿Necesito receta para esto?', exampleEn: 'Do I need a prescription for this?' },
    { es: '¿cómo debo tomarlo?', en: 'how should I take it?', example: '¿Cómo debo tomarlo, con comida?', exampleEn: 'How should I take it, with food?' },
  ],

  practice: [
    // ── doctor_pharmacy block (blocked practice: symptoms first, then pharmacy/subjunctive advice) ──
    { type: 'translation_to_spanish', prompt: "Translate: 'My legs hurt.'", english: 'My legs hurt.', answer: 'Me duelen las piernas.', word: 'me duelen', concept_id: 'doctor_pharmacy', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the mistake: "Me duele los pies."', word: 'me duelen', english: 'my feet hurt', answer: 'Me duelen los pies.', concept_id: 'doctor_pharmacy', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which phrase asks for a doctor\'s appointment?', word: 'necesito una cita', english: 'I need an appointment', answer: 'Necesito una cita con el médico.', options: ['Tengo dolor de cabeza.', 'Necesito una cita con el médico.', '¿Tiene algo para la tos?', 'No me siento bien.'], concept_id: 'doctor_pharmacy', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the subjunctive: "Le recomiendo que ___ mucha agua." (tomar)', word: 'tome', english: 'drink (subjunctive)', answer: 'tome', concept_id: 'doctor_pharmacy', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Tiene algo para el dolor de cabeza?"?', word: 'dolor de cabeza', english: 'headache', answer: 'Do you have something for a headache?', concept_id: 'doctor_pharmacy', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Do I need a prescription for this?'", english: 'Do I need a prescription for this?', answer: '¿Necesito receta para esto?', word: 'receta', concept_id: 'doctor_pharmacy', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which word means a liquid medicine, not a pill?', word: 'jarabe', english: 'syrup', answer: 'jarabe', options: ['pastilla', 'jarabe', 'crema', 'receta'], concept_id: 'doctor_pharmacy', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against Yabla, Spanish.Academy, and
// other pedagogical medical-phrase guides before writing (July 2026):
// - me duele/me duelen + doler agreement confirmed as reusing exactly the
//   gustar_type pattern from Unit 9; tengo dolor de + [body part]
//   confirmed as an equally common alternative
// - tener + fiebre/tos/náuseas/mareos confirmed as the standard symptom
//   pattern; tengo náuseas confirmed as conventionally plural in everyday
//   speech
// - necesito una cita con el médico, no me siento bien, ¿tiene algo
//   para...? confirmed as the standard opening phrases at a doctor's
//   office/pharmacy
// - recommendation-trigger subjunctive (le recomiendo que + subjunctive,
//   es importante que + subjunctive) confirmed as the natural register
//   for medical advice, correctly reusing the WEIRDO present_subjunctive
//   pattern taught in Unit 19
// - jarabe (syrup) vs. pastilla (pill) vs. crema (cream) confirmed as
//   distinct, non-interchangeable medication forms; prescription
//   requirements confirmed as varying genuinely by country/medication
// This unit reuses gustar_type (Unit 9) and present_subjunctive (Unit 19)
// rather than introducing new grammar. No prior GRAMMAR_CARDS entry
// exists for doctor_pharmacy, a new functional-language concept (see
// functions/_lib/concepts.js).
