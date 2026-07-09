// Unit — Basic Reported Speech (B1)
// Covers: estilo_indirecto_basico
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit is
// deliberately scoped as the everyday, present-tense-only on-ramp to
// reported speech — dijo que + present-shifts-to-imperfect for statements,
// preguntó si for reported yes/no questions, and preguntó + question word
// for reported wh-questions. It does NOT teach the full backshift table
// (preterite→pluscuamperfecto, futuro→condicional, commands→subjunctive) —
// that fuller system is reserved for the existing C1 unit,
// unit27-reported-speech.js (estilo_indirecto), which this unit's concept
// is listed as a direct prerequisite for in functions/_lib/concepts.js.
// Every Spanish claim below was verified against SpanishDict, Kwiziq,
// Lawless Spanish, and other pedagogical grammar sources before writing —
// see the audit note at the bottom of this file.

export default {
  sections: [
    {
      heading: 'She Said What? Dijo Que and the Present-to-Imperfect Shift',
      paragraphs: [
        "You already know how to quote someone directly in Spanish — just like in English, you put their exact words in quotation marks: Ana dice: \"Estoy cansada\" (\"Ana says: 'I'm tired'\"). But most of the time, especially in conversation, you're not quoting someone live — you're relaying something they told you earlier. \"Ana said she was tired.\" That's reported speech (estilo indirecto), and it's one of the most useful everyday skills in the language: retelling a phone call, passing along what a friend said, summarizing an email for someone who didn't read it.",
        "Here's the part that needs a little care. In English, when you report something with a past-tense verb like \"said,\" the tense inside usually shifts back one step too — \"I'm tired\" becomes \"she said she was tired,\" not \"she said she is tired.\" Spanish does the exact same thing, and at this stage there's really just one shift you need to know cold: when the direct quote uses the present tense, the reported version shifts it to the imperfect. Ana dice: \"Estoy cansada\" becomes Ana dijo que estaba cansada. Notice dijo (said, preterite) stays fixed as the reporting verb — it's the verb inside the que clause that moves back in time, from estoy to estaba.",
        "Why the imperfect specifically, and not some other past tense? Think about what the imperfect is for: describing an ongoing state or situation without marking exactly when it started or ended — which is precisely what a present-tense statement becomes once it's relocated into the past. \"I am tired\" describes an ongoing state at the moment of speaking; once you report it later, that state simply becomes something that was ongoing at the moment it was said. Estaba cansada captures that perfectly — you already have every tool you need for this shift from the imperfect you learned earlier in the curriculum; the only new piece is knowing when to reach for it.",
        "This same shift works with any reporting verb in the past, not just dijo — contestó que (answered that), respondió que (replied that), comentó que (mentioned that), explicó que (explained that) all trigger the identical present→imperfect move. Mi hermano contestó que no tenía tiempo (\"My brother answered that he didn't have time\"). One more useful note for real conversations: if you're relaying the message on the very same day, about a situation that's still true right now, Spanish often just keeps the present tense instead — Dice Juan que está en camino (\"Juan says he's on his way\") is completely natural when Juan is, in fact, still on his way as you speak. The shift to the imperfect is really about distance in time between the original statement and the retelling, not a rule with zero exceptions.",
      ],
      examples: [
        { es: '"Estoy cansada." → Dijo que estaba cansada.', en: '"I\'m tired." → She said she was tired.' },
        { es: '"Vivo en Madrid." → Dijo que vivía en Madrid.', en: '"I live in Madrid." → He said he lived in Madrid.' },
        { es: '"No tengo tiempo." → Mi hermano contestó que no tenía tiempo.', en: '"I don\'t have time." → My brother answered that he didn\'t have time.' },
        { es: '"Me gusta el café." → Explicó que le gustaba el café.', en: '"I like coffee." → She explained that she liked coffee.' },
      ],
      commonMistakes: [
        "Leaving the verb in the present tense inside the que clause — *Dijo que está cansada* instead of Dijo que estaba cansada. If the reporting verb (dijo, contestó, explicó...) is in the past, the verb being reported shifts too, even though the feeling itself might still be true right now.",
        "Forgetting to change the person of the verb and any possessive/object pronouns to match who's talking now. \"Estoy cansada\" (Ana, about herself) becomes Dijo que estaba cansada (someone else, about Ana) — the verb ending and any pronouns need to track who the sentence is actually about after the switch from first person to third.",
        "This is the everyday, present-tense-only version of the rule — don't try to stretch it to preterite, future, or command forms yet (\"llegué,\" \"vendré,\" \"¡ven!\"). Those get their own fuller backshift system later in the curriculum; for now, only present tense inside the quote shifts to imperfect.",
      ],
    },
    {
      heading: 'Did You...? Reporting Yes/No Questions with Si',
      paragraphs: [
        "Reporting a question works a little differently from reporting a statement, because you're no longer relaying a fact — you're relaying someone's act of asking. Start with the simplest kind: a question that could be answered with \"yes\" or \"no.\" ¿Vienes a la fiesta? (\"Are you coming to the party?\") In English, this becomes \"She asked me if I was coming to the party\" — English reaches for \"if\" (or \"whether\") to bridge from the asking verb into the question content. Spanish does exactly the same move with si: Me preguntó si venía a la fiesta.",
        "Notice three things happen at once here, and all three matter. First, the question mark disappears entirely — you're not asking anymore, you're stating that someone asked, so the sentence becomes a plain declarative statement start to finish. Second, the word order flattens out into normal statement order (si venía, not the inverted question order ¿vienes?). Third — and this is the piece that lines up with what you just learned — the verb still shifts from present to imperfect exactly the same way it does for reported statements: vienes becomes venía.",
        "One warning worth flagging early, because it trips up even careful learners: this si (\"if/whether\") is written without an accent mark, and it's easy to confuse with sí (\"yes\"), which does carry an accent. Me preguntó si quería café means \"She asked me if I wanted coffee\" — put the accent on by mistake (*preguntó sí*) and you've written something that doesn't parse as a real sentence. Keep the two visually distinct in your head: sí with an accent answers a question, si without one introduces a reported yes/no question.",
      ],
      examples: [
        { es: '"¿Vienes a la fiesta?" → Me preguntó si venía a la fiesta.', en: '"Are you coming to the party?" → She asked me if I was coming to the party.' },
        { es: '"¿Tienes hambre?" → Me preguntó si tenía hambre.', en: '"Are you hungry?" → He asked me if I was hungry.' },
        { es: '"¿Hablas español?" → Nos preguntó si hablábamos español.', en: '"Do you speak Spanish?" → She asked us if we spoke Spanish.' },
        { es: '"¿Quieres café?" → Me preguntó si quería café.', en: '"Do you want coffee?" → He asked me if I wanted coffee.' },
      ],
      commonMistakes: [
        "Writing sí (with an accent, \"yes\") instead of si (no accent, \"if/whether\") — Me preguntó sí quería café looks almost right but the accented sí doesn't belong there at all.",
        "Keeping the question mark or the inverted word order — *Me preguntó si ¿venías?* mixes a reported question with the punctuation and structure of a direct one. Once si introduces the clause, the rest reads as an ordinary statement, no question mark anywhere in the sentence.",
        "Forgetting the present→imperfect shift inside the si clause — *Me preguntó si vienes* should be Me preguntó si venía, for the same reason a reported statement shifts: the reporting verb (preguntó) is in the past.",
      ],
    },
    {
      heading: 'Where, When, What: Reporting Questions with a Question Word',
      paragraphs: [
        "Not every question is yes/no — plenty ask for specific information: ¿Dónde vives? (\"Where do you live?\"), ¿Cuándo llegas? (\"When are you arriving?\"), ¿Qué quieres? (\"What do you want?\"). When you report one of these, you don't need si at all — the question word itself already does the same connecting job that si does for yes/no questions, so you just keep it in place: Me preguntó dónde vivía. Me preguntó cuándo llegaba. Me preguntó qué quería.",
        "Two details make this pattern click into place. First, the question word keeps its written accent mark even though the sentence as a whole is no longer a direct question — dónde, cuándo, qué, cómo, quién, and cuánto all stay accented in reported speech exactly as they are in a direct question; only unaccented question-word look-alikes (like the relative que or the conjunction donde used elsewhere in the language) drop the accent, and those are different words doing a different job. Second, just like with si, the inverted question mark disappears completely and the word order settles into normal statement order — no ¿, no ?, and the verb no longer needs to invert around the subject the way it does in a live question.",
        "One thing to actively avoid here, because it's a natural but wrong instinct once you've gotten comfortable with si: don't add que after the question word. Spanish doesn't say *Me preguntó que dónde vivía* in careful, standard usage — the question word alone (dónde) already connects the clause, so an extra que is simply redundant and non-standard at this level. Keep it lean: preguntó + question word + the rest of the clause, present shifted to imperfect, done.",
      ],
      examples: [
        { es: '"¿Dónde vives?" → Me preguntó dónde vivía.', en: '"Where do you live?" → He asked me where I lived.' },
        { es: '"¿Cuándo llegas?" → Me preguntó cuándo llegaba.', en: '"When are you arriving?" → She asked me when I was arriving.' },
        { es: '"¿Qué quieres?" → Me preguntó qué quería.', en: '"What do you want?" → He asked me what I wanted.' },
        { es: '"¿Cómo se llama el perro?" → Nos preguntó cómo se llamaba el perro.', en: '"What\'s the dog\'s name?" → She asked us what the dog\'s name was.' },
      ],
      commonMistakes: [
        "Keeping the upside-down question mark — *Me preguntó ¿dónde vivía?* mixes reported and direct question punctuation. Once preguntó introduces the clause, drop both question marks entirely; the sentence is a statement about someone's question, not a question itself.",
        "Adding an unnecessary que after the question word — *Me preguntó que dónde vivía* is a very common colloquial slip to hear but isn't the standard pattern to produce at this level; the question word by itself already links the clause to preguntó.",
        "Dropping the accent mark on the question word because the sentence no longer looks like a question — dónde, cuándo, and qué keep their accents in reported speech; losing the accent turns them into different words entirely (donde as a plain relative, que as a plain connector).",
      ],
    },
  ],

  vocab: [
    { es: 'decir', en: 'to say, to tell', example: 'Dijo que estaba cansada.', exampleEn: 'She said she was tired.' },
    { es: 'preguntar', en: 'to ask', example: 'Me preguntó si venía.', exampleEn: 'He asked me if I was coming.' },
    { es: 'contestar', en: 'to answer', example: 'Contestó que no tenía tiempo.', exampleEn: "He answered that he didn't have time." },
    { es: 'responder', en: 'to reply, to respond', example: 'Respondió que le gustaba el plan.', exampleEn: 'She replied that she liked the plan.' },
    { es: 'comentar', en: 'to mention, to remark', example: 'Comentó que hacía frío.', exampleEn: 'He mentioned that it was cold.' },
    { es: 'explicar', en: 'to explain', example: 'Explicó que estaba ocupada.', exampleEn: 'She explained that she was busy.' },
    { es: 'dijo que', en: 'he/she said that', example: 'Dijo que vivía en Madrid.', exampleEn: 'He said that he lived in Madrid.' },
    { es: 'me preguntó si', en: 'he/she asked me if/whether', example: 'Me preguntó si tenía hambre.', exampleEn: 'She asked me if I was hungry.' },
    { es: 'me preguntó dónde', en: 'he/she asked me where', example: 'Me preguntó dónde trabajaba.', exampleEn: 'He asked me where I worked.' },
    { es: 'me preguntó cuándo', en: 'he/she asked me when', example: 'Me preguntó cuándo llegaba el tren.', exampleEn: 'She asked me when the train was arriving.' },
    { es: 'me preguntó qué', en: 'he/she asked me what', example: 'Me preguntó qué quería de cena.', exampleEn: 'He asked me what I wanted for dinner.' },
    { es: 'me preguntó cómo', en: 'he/she asked me how', example: 'Me preguntó cómo se llamaba mi perro.', exampleEn: "She asked me what my dog's name was." },
    { es: 'si (no accent)', en: 'if, whether', example: 'Nos preguntó si hablábamos español.', exampleEn: 'She asked us if we spoke Spanish.' },
    { es: 'estar cansado/a', en: 'to be tired', example: 'Dijo que estaba cansado.', exampleEn: 'He said he was tired.' },
  ],

  practice: [
    // ── Block 1: dijo que + present→imperfect shift (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: '"Estoy cansada." → Dijo que ___ cansada.', word: 'estar', english: 'was', answer: 'estaba', options: ['estaba', 'está', 'estuvo', 'esté'], concept_id: 'estilo_indirecto_basico', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Ana dijo que ___ (tener) mucho trabajo." (present → imperfect shift)', word: 'tener', english: 'had', answer: 'tenía', concept_id: 'estilo_indirecto_basico', difficulty: 1 },
    { type: 'translation_to_english', prompt: 'Mi hermana dijo que vivía en Madrid.', word: 'vivir', english: 'lived', answer: 'My sister said that she lived in Madrid.', concept_id: 'estilo_indirecto_basico', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'He said that he was hungry.' (dijo que + imperfect)", english: 'He said that he was hungry.', answer: 'Dijo que tenía hambre.', word: 'tener hambre', concept_id: 'estilo_indirecto_basico', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Dijo que está feliz."', word: 'estar', english: 'was', answer: 'Dijo que estaba feliz.', concept_id: 'estilo_indirecto_basico', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which reporting verb fits: "Mi hermano ___ que no tenía tiempo." (answered)', word: 'contestar', english: 'answered', answer: 'contestó', options: ['contestó', 'pregunta', 'preguntó', 'contesta'], concept_id: 'estilo_indirecto_basico', difficulty: 2 },

    // ── Block 2: reported yes/no questions with si (blocked before mixed review) ──
    { type: 'multiple_choice', prompt: '"¿Vienes a la fiesta?" → Me preguntó ___ venía a la fiesta.', word: 'si', english: 'if/whether', answer: 'si', options: ['si', 'sí', 'que', 'qué'], concept_id: 'estilo_indirecto_basico', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "¿Tienes hambre?" → Me preguntó ___ tenía hambre.', word: 'si', english: 'if', answer: 'si', concept_id: 'estilo_indirecto_basico', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'She asked me if I was tired.' (reported yes/no question)", english: 'She asked me if I was tired.', answer: 'Me preguntó si estaba cansado.', altAnswers: ['Me preguntó si estaba cansada.'], word: 'si estaba', concept_id: 'estilo_indirecto_basico', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Me preguntó sí quería café." (wrong accent)', word: 'si', english: 'if', answer: 'Me preguntó si quería café.', concept_id: 'estilo_indirecto_basico', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Me preguntó si ¿venías?"', word: 'si venía', english: 'if I was coming', answer: 'Me preguntó si venía.', concept_id: 'estilo_indirecto_basico', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Nos preguntó si hablábamos español.', word: 'hablar', english: 'spoke', answer: 'She asked us if we spoke Spanish.', concept_id: 'estilo_indirecto_basico', difficulty: 2 },

    // ── Block 3: reported wh-questions with a question word (blocked before mixed review) ──
    { type: 'multiple_choice', prompt: '"¿Dónde vives?" → Me preguntó ___ vivía.', word: 'dónde', english: 'where', answer: 'dónde', options: ['dónde', 'si', 'que', 'donde'], concept_id: 'estilo_indirecto_basico', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "¿Cuándo llegas?" → Me preguntó ___ llegaba. (keep the accent)', word: 'cuándo', english: 'when', answer: 'cuándo', concept_id: 'estilo_indirecto_basico', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'He asked me what I wanted.' (question word, no que, no question mark)", english: 'He asked me what I wanted.', answer: 'Me preguntó qué quería.', word: 'qué quería', concept_id: 'estilo_indirecto_basico', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Me preguntó ¿dónde vivía?"', word: 'dónde vivía', english: 'where I lived', answer: 'Me preguntó dónde vivía.', concept_id: 'estilo_indirecto_basico', difficulty: 3 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Me preguntó que dónde trabajaba." (no que before the question word)', word: 'dónde trabajaba', english: 'where I worked', answer: 'Me preguntó dónde trabajaba.', concept_id: 'estilo_indirecto_basico', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Nos preguntó cómo se llamaba el perro.', word: 'cómo', english: 'what... was', answer: "She asked us what the dog's name was.", concept_id: 'estilo_indirecto_basico', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch (July 2026) against SpanishDict,
// Kwiziq Spanish, Lawless Spanish, Elon.io, and other pedagogical grammar
// sources before writing:
// - Present→imperfect backshift for reported statements after a past-tense
//   reporting verb (Carlos dijo: "Estoy feliz." → Carlos dijo que estaba
//   feliz.), and the general "concordancia de tiempos" logic behind it —
//   confirmed against SpanishDict, grammar.spanishintexas.org's "Indirect
//   Speech – Past" page, and Kwiziq's "el estilo indirecto" lesson.
// - The same present→imperfect shift applying to any past-tense reporting
//   verb, not only decir (contestó que, respondió que, comentó que,
//   explicó que) — confirmed against Elon.io's reported-speech overview and
//   Tell Me In Spanish's reported-speech guide, plus a targeted check that
//   "contestó que"/"respondió que" specifically follow the identical
//   backshift as "dijo que."
// - Same-day/still-true reporting sometimes keeping the present tense
//   (Dice Juan que está en camino) — a natural, commonly noted exception
//   flagged as an aside, not a core rule to drill, consistent with how the
//   existing C1 unit (unit27-reported-speech.js) treats the same nuance for
//   the fuller backshift table.
// - Reported yes/no questions using si ("if/whether") with the direct
//   question's inverted punctuation and word order dropped entirely —
//   confirmed against Kwiziq and Lawless Spanish material on indirect
//   questions, and cross-checked that si here is the unaccented conjunction,
//   distinct from the accented sí ("yes").
// - Reported wh-questions keeping the question word (dónde, cuándo, qué,
//   cómo) with no si and no que, no inverted question mark, and normal
//   statement word order — confirmed against SpanishStep's "Spanish
//   Question Marks Explained for Direct and Indirect Questions" (explicit
//   "Me preguntó dónde vivía" / "Le pregunté dónde vivía" examples) and
//   Lingolia's "Indirect Questions in Spanish Grammar" page.
// - Question words retaining their written accent mark in indirect/reported
//   questions (dónde, cuándo, qué stay accented; unaccented donde/que are
//   different words) — confirmed against Kwiziq's "cómo, dónde and cuándo
//   in interrogative, exclamatory and indirect sentences" page and
//   coffeebreaklanguages.com's question-word-accent guide.
// This content agrees with and does not contradict the existing
// GRAMMAR_CARDS entry for estilo_indirecto_basico in src/content/grammar.js
// (same rule statement: dijo que + present→imperfect, si for reported
// yes/no questions, question word retained with no inverted punctuation or
// que for reported wh-questions) or the concepts.js entry (cefr: 'B1',
// prereq: imperfect). It is deliberately scoped narrower than
// unit27-reported-speech.js's estilo_indirecto (C1) — no preterite→
// pluscuamperfecto, futuro→condicional, or command→subjunctive backshift is
// taught here, matching estilo_indirecto_basico's listed prereq role for
// estilo_indirecto in concepts.js and the exceptions note already on its
// grammar.js card.
