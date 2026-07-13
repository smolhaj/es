// Unit — Shopping (A2)
// Covers: shopping_language
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict and other pedagogical
// phrasebook sources before writing — see the audit note at the bottom of
// this file for the specific claims checked.
//
// Functional/situational unit (CEFR's "Funciones" pillar): reuses grammar
// already taught (direct object pronouns, comparatives, numbers, colors)
// rather than introducing a new grammar structure.

export default {
  sections: [
    {
      heading: 'Asking Prices, Sizes, and Colors',
      paragraphs: [
        "Shopping runs on a handful of short, repeatable questions. To ask what something costs, you already know ¿Cuánto cuesta esto? (\"How much does this cost?\") from Unit 2 — for more than one item, it switches to ¿Cuánto cuestan estos zapatos? (\"How much do these shoes cost?\"). To ask about size, use talla for clothes and número for shoes: ¿Qué talla tiene? (\"What size do you have?\"), Necesito el número treinta y ocho (\"I need size 38\").",
        'If something\'s not quite right, ¿Tiene esto en otra talla? (\"Do you have this in another size?\") and ¿Tiene esto en otro color? (\"Do you have this in another color?\") are the two questions that solve almost every fitting problem. Notice esto (neuter "this," from Unit 9) works perfectly here — you\'re pointing at an item without needing to know or state its specific grammatical gender.',
        "Comparatives from Unit 14 come in constantly while shopping: ¿Tiene algo más barato? (\"Do you have something cheaper?\"), Prefiero el más grande (\"I prefer the bigger one\"). Combined with colors and talla, you can now describe almost exactly what you're looking for even if you don't know the specific product name.",
      ],
      examples: [
        { es: '¿Cuánto cuesta esta chaqueta?', en: 'How much does this jacket cost?' },
        { es: '¿Qué talla tiene esta camisa?', en: 'What size is this shirt?' },
        { es: '¿Tiene esto en otro color, por favor?', en: 'Do you have this in another color, please?' },
        { es: '¿Tiene algo más barato?', en: 'Do you have something cheaper?' },
        { es: 'Necesito una talla más grande.', en: 'I need a bigger size.' },
        { es: 'Prefiero el rojo al azul.', en: 'I prefer the red one to the blue one.' },
      ],
      commonMistakes: [
        "Don't forget cuesta/cuestan agreement from Unit 2 — ¿Cuánto cuesta estos zapatos? is wrong because zapatos is plural; it must be ¿Cuánto cuestan estos zapatos?",
        'Talla is for clothes; número is for shoes — asking ¿qué talla? about shoes sounds odd to a native speaker, who expects ¿qué número calza?/¿qué número tiene?',
        "Esto/eso (neuter) work well when pointing at an item generically, but once you know the noun, switch to the matching demonstrative — este vestido (this dress), not esto vestido.",
      ],
    },
    {
      heading: 'Trying Things On and Paying',
      paragraphs: [
        'To try something on, ask ¿Puedo probarme esto? (\"Can I try this on?\") — the reflexive verb probarse (\"to try on,\" o→ue stem-changing, like probar itself) always takes a reflexive pronoun here, since you\'re trying something on yourself: me pruebo, te pruebas, se prueba. The fitting room itself is el probador: ¿Dónde están los probadores? (\"Where are the fitting rooms?\").',
        'Once you\'ve decided, Me lo llevo (\"I\'ll take it\") is the standard way to commit to buying — notice lo, the direct object pronoun from Unit 10, standing in for the specific item (el vestido → lo, la camisa → la). To ask about payment: ¿Aceptan tarjeta o solo efectivo? (\"Do you take card, or only cash?\") — the same pair you met in the restaurant unit.',
        "Two more useful words for browsing: rebaja/oferta both mean \"sale/discount\" — todo está de rebaja (\"everything's on sale\") — and gratis means \"free\" (no cost at all), not to be confused with libre (\"free\" as in unoccupied/available, like a free seat). If a price feels wrong, ¿Es correcto el precio? (\"Is the price correct?\") is a polite way to double-check without accusing anyone of a mistake.",
      ],
      examples: [
        { es: '¿Puedo probarme este vestido?', en: 'Can I try on this dress?' },
        { es: '¿Dónde están los probadores?', en: 'Where are the fitting rooms?' },
        { es: 'Me gusta, me lo llevo.', en: "I like it, I'll take it." },
        { es: '¿Aceptan tarjeta o solo efectivo?', en: 'Do you take card, or only cash?' },
        { es: 'Todo está de rebaja esta semana.', en: 'Everything is on sale this week.' },
        { es: 'La entrada es gratis los domingos.', en: 'Admission is free on Sundays.' },
      ],
      commonMistakes: [
        'Don\'t drop the reflexive pronoun with probarse — ¿Puedo probar esto? without me changes the meaning toward "can I test/taste this," not "can I try this on"; keep ¿Puedo probarme esto?.',
        'Me lo llevo needs the pronoun to agree with the item — a shirt (la camisa, feminine) is Me la llevo, not Me lo llevo; a jacket (el abrigo, masculine) is Me lo llevo.',
        "Don't mix up gratis (no cost) with libre (unoccupied/available) — un asiento libre is \"a free/available seat,\" not \"a seat that costs nothing.\"",
      ],
    },
  ],

  vocab: [
    { es: 'talla', en: 'size (clothing)', example: '¿Qué talla necesita?', exampleEn: 'What size do you need?' },
    { es: 'probarse', en: 'to try on', example: '¿Puedo probarme esto?', exampleEn: 'Can I try this on?' },
    { es: 'probador', en: 'fitting room', example: 'Los probadores están al fondo.', exampleEn: 'The fitting rooms are in the back.' },
    { es: 'me lo llevo', en: "I'll take it", example: 'Me gusta, me lo llevo.', exampleEn: "I like it, I'll take it." },
    { es: 'efectivo', en: 'cash', example: '¿Aceptan efectivo?', exampleEn: 'Do you accept cash?' },
    { es: 'rebaja', en: 'discount / sale', example: 'Todo está de rebaja.', exampleEn: "Everything's on sale." },
    { es: 'gratis', en: 'free (no cost)', example: 'La entrada es gratis.', exampleEn: 'Admission is free.' },
    { es: '¿tiene esto en otro color?', en: 'do you have this in another color?', example: '¿Tiene esto en otro color, por favor?', exampleEn: 'Do you have this in another color, please?' },
    { es: '¿tiene esto en otra talla?', en: 'do you have this in another size?', example: 'No me queda bien — ¿tiene esto en otra talla?', exampleEn: "It doesn't fit well — do you have this in another size?" },
    { es: 'más barato', en: 'cheaper', example: '¿Tiene algo más barato?', exampleEn: 'Do you have something cheaper?' },
  ],

  practice: [
    // ── shopping_language block (blocked practice: prices/sizes/colors first, then trying on/paying) ──
    { type: 'translation_to_spanish', prompt: "Translate: 'How much do these shoes cost?'", english: 'How much do these shoes cost?', answer: '¿Cuánto cuestan estos zapatos?', word: 'cuestan', concept_id: 'shopping_language', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "¿Tiene esto en otro ___?" (asking for a different color)', word: 'color', english: 'color', answer: 'color', concept_id: 'shopping_language', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which word asks about clothing size specifically?', word: 'talla', english: 'size (clothing)', answer: 'talla', options: ['número', 'talla', 'color', 'precio'], concept_id: 'shopping_language', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the mistake: "¿Puedo probar esta camisa?" (you want to try it ON, not taste-test it)', word: 'probarme', english: 'try on (reflexive)', answer: '¿Puedo probarme esta camisa?', concept_id: 'shopping_language', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate, referring to a jacket (el abrigo): 'I'll take it.'", english: "I'll take it. (the jacket)", answer: 'Me lo llevo.', word: 'me lo llevo', concept_id: 'shopping_language', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Todo está de rebaja esta semana"?', word: 'rebaja', english: 'sale/discount', answer: 'Everything is on sale this week.', concept_id: 'shopping_language', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'You want a cheaper option. What do you ask?', word: 'más barato', english: 'cheaper', answer: '¿Tiene algo más barato?', options: ['¿Tiene algo más caro?', '¿Tiene algo más barato?', '¿Cuánto es gratis?', '¿Dónde está el probador?'], concept_id: 'shopping_language', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, Migaku, and
// other pedagogical shopping-phrase guides before writing (July 2026):
// - talla (clothing size) vs. número (shoe size) confirmed as distinct,
//   non-interchangeable terms
// - ¿Tiene esto en otra talla/otro color? confirmed as the standard
//   fitting-problem questions
// - probarse confirmed as reflexive (o→ue, like probar) specifically for
//   trying on clothing, distinct from probar (to try/taste, non-reflexive,
//   used for food)
// - Me lo llevo confirmed as the standard "I'll take it" purchase
//   commitment, with direct object pronoun agreement (lo/la) matching the
//   item's grammatical gender, reusing Unit 10's direct_object_pronouns
// - rebaja and oferta confirmed as near-synonyms for "sale/discount";
//   gratis (no cost) vs. libre (unoccupied/available) confirmed as a real,
//   commonly-confused pair for learners
// This unit reuses grammar already taught (numbers/Unit 2, demonstratives/
// Unit 9, direct object pronouns/Unit 10, comparatives_basic/Unit 14)
// rather than introducing new grammatical structure. No prior
// GRAMMAR_CARDS entry exists for shopping_language, a new
// functional-language concept (see functions/_lib/concepts.js).
