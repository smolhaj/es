// Unit — The Absolute Superlative: -ísimo (B1)
// Covers: superlative_absolute
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish claim below was verified against SpanishDict,
// StudySpanish.com, Kwiziq, and other pedagogical grammar sources before
// writing — see the audit note at the bottom of this file for the specific
// claims checked.

export default {
  sections: [
    {
      heading: 'Beyond Muy: The -ísimo Ending',
      paragraphs: [
        "Back at A1 you learned that muy means \"very\" — muy alto, muy bueno. Spanish has a second, more emphatic way to say \"very ___,\" and this time it's not a separate word but an ending you attach directly to the adjective: the absolute superlative, formed with -ísimo. Es alto becomes Es altísimo (\"He's really tall / super tall\") — no muy needed, because the intensity is now baked right into the word itself. It's called \"absolute\" because, unlike a relative superlative (el más alto de la clase, \"the tallest in the class\"), it doesn't compare anything to anything else — it just cranks the adjective's intensity up on its own.",
        "The basic formation is simple: take an adjective ending in a vowel, drop that final vowel, and add -ísimo (adjusting the ending for gender/number exactly like any other four-form adjective): bueno → buenísimo/buenísima/buenísimos/buenísimas, grande → grandísimo, alto → altísimo. Adjectives that already end in a consonant skip the vowel-dropping step and simply add -ísimo directly: fácil → facilísimo. The accent mark on that í is mandatory — it's not decoration, it's what tells you exactly where the stress falls, and dropping it is a spelling error.",
        "Three consonant-letter adjustments show up regularly, and they'll look familiar — they're the same kind of spelling-to-protect-the-sound changes you've already met elsewhere in Spanish. Adjectives ending in -co change c to qu before -ísimo, to keep the hard \"k\" sound: rico (\"rich\") → riquísimo, not \"ricísimo.\" Adjectives ending in -go change g to gu, for the same reason: largo (\"long\") → larguísimo. And adjectives ending in -z change that z to c: feliz (\"happy\") → felicísimo — the identical z-to-c swap you already saw when making feliz plural (felices).",
      ],
      examples: [
        { es: 'Esta película es aburridísima.', en: 'This movie is really/super boring.' },
        { es: 'El examen fue facilísimo.', en: 'The exam was super easy.' },
        { es: 'Este postre está riquísimo.', en: 'This dessert is super delicious.' },
        { es: 'La casa es grandísima.', en: 'The house is really/super big.' },
        { es: 'Estamos contentísimos con el resultado.', en: "We're thrilled (super happy) with the result." },
        { es: 'El viaje fue larguísimo.', en: 'The trip was really/super long.' },
      ],
      commonMistakes: [
        "Don't forget the accent on the í — altísimo, not \"altisimo\"; the accent marks exactly where the stress falls and is part of correct spelling, not optional.",
        'Don\'t write "ricísimo," "largísimo," or "felizísimo" — the spelling changes are required: riquísimo (c→qu), larguísimo (g→gu), felicísimo (z→c).',
        '-ísimo still has to agree in gender and number like any adjective — una casa grandísima, unas casas grandísimas, not a frozen "grandísimo" for everything.',
      ],
    },
    {
      heading: 'One More Wrinkle: -ble Adjectives, and When Not to Use -ísimo',
      paragraphs: [
        'One more spelling pattern is common enough to flag on its own: adjectives ending in -ble don\'t just drop the -e and add -ísimo the way you might expect. Amable ("kind") becomes amabilísimo, not "amablísimo" — an extra -il- slides in before -ísimo. You\'ll see this same -bilísimo pattern with other -ble adjectives, like notable → notabilísimo. It\'s a small detail, but a frequent one, since -ble adjectives (amable, posible, terrible, notable) are common.',
        'A handful of very common adjectives — bueno, malo, grande, pequeño — have an older, inherited-from-Latin alternative to -ísimo: óptimo (instead of buenísimo), pésimo (instead of malísimo), máximo (instead of grandísimo), and mínimo (instead of pequeñísimo). These Latinate forms exist and you\'ll recognize them in formal writing, technical contexts, or set phrases (calidad óptima, "optimal quality"; condiciones pésimas, "terrible conditions") — but they\'re a different register, not the everyday choice. In ordinary spoken and written Spanish, buenísimo and malísimo are what people actually say; treat óptimo/pésimo/máximo/mínimo as words to recognize, not ones you need to produce yet.',
        "Finally, a quick word on when -ísimo fits at all: it's a tool for emphasis in a specific moment (¡Qué difícil estuvo el examen — dificilísimo!), not something you sprinkle onto every adjective in every sentence. Overusing it starts to sound like you're constantly shouting for emphasis, the written equivalent of ALL CAPS. Reach for it when something genuinely struck you as extreme; use muy or the plain adjective the rest of the time.",
      ],
      examples: [
        { es: 'Eres amabilísimo, muchas gracias.', en: "You're incredibly kind, thank you so much." },
        { es: 'Su propuesta es notabilísima.', en: 'His/her proposal is outstanding.' },
        { es: 'El servicio fue pésimo. — El servicio fue malísimo.', en: 'The service was terrible. (formal / everyday, same meaning)' },
        { es: 'Buscamos la calidad óptima para este proyecto.', en: 'We are seeking optimal quality for this project. (formal register)' },
        { es: '¡Qué difícil estuvo el examen — dificilísimo!', en: 'The exam was so hard — really, super hard!' },
      ],
      commonMistakes: [
        'Don\'t say "amablísimo" — -ble adjectives take the special -bilísimo pattern: amabilísimo, notabilísimo.',
        'Don\'t treat óptimo/pésimo/máximo/mínimo as everyday words — they\'re valid but formal; buenísimo and malísimo are what fits ordinary conversation.',
        "Don't stack -ísimo onto every single adjective in a paragraph — like any intensifier, it loses its punch (and starts to sound unnatural) if it's not reserved for genuine emphasis.",
      ],
    },
  ],

  vocab: [
    { es: 'buenísimo', en: 'really/super good', example: 'Esta comida está buenísima.', exampleEn: 'This food is really good.' },
    { es: 'malísimo', en: 'really/super bad', example: 'La película fue malísima.', exampleEn: 'The movie was really bad.' },
    { es: 'grandísimo', en: 'really/super big', example: 'Viven en una casa grandísima.', exampleEn: 'They live in a really big house.' },
    { es: 'facilísimo', en: 'super easy', example: 'El examen fue facilísimo.', exampleEn: 'The exam was super easy.' },
    { es: 'dificilísimo', en: 'super difficult', example: 'Este ejercicio es dificilísimo.', exampleEn: 'This exercise is super difficult.' },
    { es: 'riquísimo', en: 'super rich / super delicious', example: 'Este postre está riquísimo.', exampleEn: 'This dessert is super delicious.' },
    { es: 'carísimo', en: 'super expensive', example: 'Ese coche es carísimo.', exampleEn: 'That car is super expensive.' },
    { es: 'larguísimo', en: 'super long', example: 'Fue un viaje larguísimo.', exampleEn: 'It was a super long trip.' },
    { es: 'felicísimo', en: 'super happy', example: 'Estamos felicísimos por ustedes.', exampleEn: "We're super happy for you." },
    { es: 'amabilísimo', en: 'incredibly kind', example: 'El personal fue amabilísimo.', exampleEn: 'The staff was incredibly kind.' },
    { es: 'contentísimo', en: 'super pleased/happy', example: 'Estoy contentísima con mi trabajo nuevo.', exampleEn: "I'm thrilled with my new job." },
    { es: 'óptimo', en: 'optimal (formal, = buenísimo)', example: 'Buscamos condiciones óptimas.', exampleEn: 'We are seeking optimal conditions.' },
    { es: 'pésimo', en: 'terrible (formal, = malísimo)', example: 'El servicio fue pésimo.', exampleEn: 'The service was terrible.' },
  ],

  practice: [
    // ── superlative_absolute block (blocked practice: regular formation + spelling changes first, then -ble/register nuance) ──
    { type: 'fill_blank', prompt: 'Complete: "Es un problema muy difícil." Rewrite with -ísimo instead of muy: "Es un problema ___."', word: 'dificilísimo', english: 'super difficult', answer: 'dificilísimo', concept_id: 'superlative_absolute', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate using -ísimo: 'The exam was super easy.'", english: 'The exam was super easy.', answer: 'El examen fue facilísimo.', word: 'facilísimo', concept_id: 'superlative_absolute', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'What is the correct absolute superlative of "rico" (rich/delicious)?', word: 'riquísimo', english: 'super rich/delicious', answer: 'riquísimo', options: ['ricísimo', 'riquísimo', 'riquisimo', 'ricuísimo'], concept_id: 'superlative_absolute', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the spelling: "El viaje fue largísimo."', word: 'larguísimo', english: 'super long', answer: 'El viaje fue larguísimo.', concept_id: 'superlative_absolute', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Los niños están ___." (feliz → super happy, plural masculine)', word: 'felicísimos', english: 'super happy', answer: 'felicísimos', concept_id: 'superlative_absolute', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'What is the correct absolute superlative of "amable" (kind)?', word: 'amabilísimo', english: 'incredibly kind', answer: 'amabilísimo', options: ['amablísimo', 'amabilísimo', 'amableísimo', 'amabílisimo'], concept_id: 'superlative_absolute', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "El servicio fue pésimo"?', word: 'pésimo', english: 'terrible', answer: 'The service was terrible. (formal register, equivalent to malísimo)', concept_id: 'superlative_absolute', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// Kwiziq, and other pedagogical grammar sources before writing (July 2026):
// - basic -ísimo formation: drop the final vowel and add -ísimo/-ísima/
//   -ísimos/-ísimas (bueno → buenísimo); consonant-ending adjectives add
//   -ísimo directly with no vowel to drop (fácil → facilísimo); the accent
//   on í is mandatory and marks the stressed syllable
// - spelling changes confirmed specifically: -co → -quísimo (rico →
//   riquísimo), -go → -guísimo (largo → larguísimo), -z → -císimo (feliz →
//   felicísimo) — all preserve the original consonant sound, the same
//   pattern already seen elsewhere in Spanish spelling (e.g. feliz →
//   felices)
// - -ble adjectives take the special -bilísimo pattern rather than a plain
//   -e-drop (amable → amabilísimo, not "amablísimo"), confirmed as a
//   distinct, frequently-cited exception
// - a small set of common adjectives (bueno, malo, grande, pequeño) have
//   inherited Latinate absolute-superlative alternatives (óptimo, pésimo,
//   máximo, mínimo) that are formal/written register; -ísimo forms
//   (buenísimo, malísimo) are confirmed as the everyday spoken/written norm
// - -ísimo agrees in gender/number like any four-form adjective, and is
//   used for genuine emphasis rather than default intensification (muy
//   remains the default, unmarked "very")
// This unit introduces superlative_absolute as a new concept (see
// functions/_lib/concepts.js), distinct from the existing `comparatives`
// concept (relative comparatives/superlatives, e.g. el más alto de la
// clase) taught in Unit 25 (Fine Details). No prior GRAMMAR_CARDS entry
// exists for this concept.
