// Unit 21 — Efficiency & Emphasis (B1)
// Covers: object_pronoun_order, se_impersonal, infinitive_vs_subjunctive, para_que, exclamativas
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit was
// inserted to close a real gap: these four B1 concepts were tracked in
// functions/_lib/concepts.js and tested in adaptive practice, but had never
// been taught in a structured Learn unit before this one. Every Spanish
// claim below was verified against SpanishDict, Kwiziq, Lawless Spanish
// Grammar, and studyspanish.com-adjacent sources before writing — see the
// audit note at the bottom of this file.

export default {
  sections: [
    {
      heading: 'Stacking Pronouns: Indirect Before Direct',
      paragraphs: [
        "Back in Unit 10 you learned direct object pronouns (lo, la, los, las — \"it/them\") and indirect object pronouns (me, te, le, nos, os, les — \"to/for someone\"). So far you've mostly used them one at a time. But real Spanish very often needs both in the same sentence — think of any moment you'd say \"I'll give it to you\" or \"She told it to me.\" English handles this by just piling on prepositional phrases (\"it to you\"), but Spanish has pronouns doing both jobs at once, and they have one fixed order you need to lock in: indirect object pronoun first, then direct object pronoun, both right before the conjugated verb.",
        'Take ¿Me das el libro? ("Will you give me the book?"). If you replace el libro with a pronoun, it becomes ¿Me lo das? — me (to me, indirect) comes first, lo (it, direct) comes second. Never the reverse; ¿Lo me das? is simply not correct Spanish, even though it might feel more intuitive to an English speaker translating word-for-word. The pattern holds no matter which pronouns are involved: nos los mandan ("they send them to us"), te la explico ("I explain it to you") — indirect, then direct, then verb.',
        "This is one of those grammar points where the payoff is huge: once the pattern is automatic, you can compress a whole clause (\"the book\") into a single syllable and keep a conversation moving at natural speed. That's really the theme of this whole unit — Spanish has several tools, this one included, for saying more with less and for saying it with more feeling. Efficiency and emphasis.",
      ],
      examples: [
        { es: '¿Me das el libro? → ¿Me lo das?', en: 'Will you give me the book? → Will you give it to me?' },
        { es: 'Nos mandan los resultados. → Nos los mandan.', en: 'They send us the results. → They send them to us.' },
        { es: 'Te lo explico ahora.', en: "I'll explain it to you now." },
        { es: '¿Me la prestas?', en: 'Will you lend it to me? (fem. thing)' },
      ],
      commonMistakes: [
        'English speakers instinctively want the order to match English word order ("it to me" → lo me) — Spanish always goes indirect-then-direct, so it\'s "me lo," never "lo me."',
        "Don't drop one of the two pronouns just because the sentence already had the noun earlier in conversation — Spanish keeps both pronouns even though English might only keep one (\"it\") and imply the other.",
      ],
    },
    {
      heading: 'The Sound Rule: le/les Becomes se',
      paragraphs: [
        "Now for the part that trips up almost every learner at this stage, so slow down here. The indirect object pronouns le (to him/her/you formal) and les (to them/you all formal) have a problem: Spanish refuses to let them sit directly in front of lo, la, los, or las. Le lo, le la, les los — these combinations are simply banned, not because of meaning, but because of sound. Spanish doesn't like two pronouns in a row that both start with l, and centuries of usage smoothed it away. Whenever le or les would land right before lo/la/los/las, it morphs into se instead.",
        'So Le di la carta a ella ("I gave her the letter") becomes, with both objects replaced by pronouns, not "Le la di" but Se la di. Likewise ¿Le has dicho la verdad a tu jefe? ("Have you told your boss the truth?") becomes ¿Se la has dicho? This se is easy to confuse with the reflexive se you already know (se lava, "he washes himself") or with the impersonal se you\'re about to meet in the next section — but here it has nothing to do with either. It\'s purely a stand-in for le/les, triggered by what follows it, not by what it means.',
        "A helpful way to keep this straight: ask yourself what the sentence would say if you swapped se back to le. Se lo dije = Le lo dije, which is banned, so we know this se is standing in for le. Once you can do that mental swap, you'll never again wonder whether a se you're hearing is reflexive, impersonal, or this third, purely phonetic kind.",
      ],
      examples: [
        { es: 'Le di la carta a ella. → Se la di.', en: 'I gave her the letter. → I gave it to her.' },
        { es: '¿Se lo has dicho ya?', en: 'Have you already told him/her?' },
        { es: 'Les compro el regalo. → Se lo compro.', en: 'I buy them the gift. → I buy it for them.' },
        { es: 'Voy a decírselo mañana.', en: "I'm going to tell it to him/her tomorrow." },
      ],
      commonMistakes: [
        'The single most common error at this level: saying *le lo* or *les la* instead of se lo / se la. There are no exceptions — le/les always becomes se before lo/la/los/las.',
        "Don't mistake this se for the reflexive se (se lava) or the impersonal se (se habla) — check what it's replacing (le or les) to tell them apart, since all three look identical on the page.",
        'With infinitives and gerunds, both pronouns can attach to the end instead of standing before the conjugated verb: quiero dártelo works just as well as te lo quiero dar — both are correct, just don\'t split the pair (never *quiero te lo dar*).',
      ],
    },
    {
      heading: 'Nobody in Particular: Impersonal Se',
      paragraphs: [
        'Switch gears now to a completely different se — the impersonal se, used when you want to describe what "people," "one," or "you" (in the general sense) do, without naming who exactly. English does this with vague subjects like "they," "people," or a generic "you": "They speak Spanish here," "You can\'t smoke in here," "People say it\'s going to rain." Spanish reaches for se + a verb in the third person singular instead: Se habla español aquí, No se puede fumar aquí, Se dice que va a llover.',
        'The formula is simple: se + verb (3rd person singular) + rest of the sentence. It works for describing customs, rules, general truths, or things "people just do" — Se vive bien en esta ciudad ("Life is good in this city" / "You live well here"), Se come tarde en España ("People eat late in Spain"). Notice English needs a placeholder subject (they/you/people) that Spanish simply doesn\'t use at all.',
        'How is this different from the reflexive se you already know? Reflexive se always has an identifiable subject doing something to or for itself — Ella se lava ("she washes herself") has a clear ella. Impersonal se has no subject at all; nobody specific is doing the speaking, living, or eating — it\'s a statement about people in general. Compare Se lava ropa aquí ("clothes are washed here" — impersonal, no one in particular is named) with Ella se lava ("she washes herself" — reflexive, one specific person). Same word, completely different job.',
        "There's also a close cousin worth flagging so you're not confused when you meet it later: passive se, which uses the identical se + 3rd person pattern but agrees in number with what follows (Se vende una casa vs. Se venden dos casas — \"a house is sold\" vs. \"two houses are sold\"). Impersonal se, by contrast, always stays singular no matter what comes after, because there's no direct object standing in as a grammatical subject. For now, focus on recognizing the general, agent-less meaning; the passive/impersonal distinction gets its own deeper treatment later in the curriculum.",
      ],
      examples: [
        { es: 'Se habla español aquí.', en: 'Spanish is spoken here. / They speak Spanish here.' },
        { es: 'Se vive bien en esta ciudad.', en: 'Life is good in this city. / You live well here.' },
        { es: 'Se dice que va a llover.', en: "They say it's going to rain." },
        { es: 'No se permite fumar aquí.', en: 'Smoking is not permitted here.' },
        { es: 'Se trabaja mucho en esa empresa.', en: 'People work a lot at that company.' },
      ],
      commonMistakes: [
        "Don't confuse impersonal se with reflexive se just because they look identical — ask whether there's a specific subject doing the action to themselves (reflexive) or no one in particular (impersonal).",
        'Impersonal se keeps the verb in the singular even when the rest of the sentence sounds plural to an English ear — Se vive bien, not *Se viven bien*, because there\'s no plural subject, just a generic "one."',
        'Don\'t translate this se word-for-word as "itself" — in this use it has no reflexive meaning at all; it corresponds to English "people," "one," "you" (general), or a passive construction.',
      ],
    },
    {
      heading: 'One Subject or Two? Infinitive vs. Subjunctive',
      paragraphs: [
        "Time for what might be the single most useful rule to come out of everything you learned about the subjunctive back in Unit 19. You already know that verbs like querer, esperar, and phrases like es importante can trigger the subjunctive in a que clause: Quiero que estudies (\"I want you to study\"). But you may have also noticed sentences like Quiero estudiar (\"I want to study\") that use a plain infinitive instead — no que, no subjunctive in sight. What decides which one you need? One simple question: is the subject of both verbs the same person, or different people?",
        'If the person who wants/hopes/thinks something is the same person doing the second action, Spanish uses a bare infinitive and skips que entirely: Quiero dormir ("I want to sleep" — I want, and I am the one sleeping). The moment a different person enters the picture as the one doing the second action, Spanish switches to que + subjunctive: Quiero que duermas ("I want you to sleep" — I want, but you are the one sleeping). Same verb querer, completely different grammar, and the only thing that changed is whose action it is.',
        'This same-subject/different-subject test applies to impersonal expressions too, like es importante, es necesario, or es bueno. When there\'s no specific person named — a general statement about "one" or "people" — use the infinitive: Es importante trabajar duro ("It\'s important to work hard," generically). The instant you name a specific person as the one who has to do it, you need que + subjunctive: Es importante que trabajes duro ("It\'s important that you work hard").',
        'A handful of verbs like esperar ("to hope") follow the identical logic: Espero aprobar ("I hope to pass" — I hope, I pass) versus Espero que apruebes ("I hope you pass" — I hope, you pass). Once this test clicks, an enormous chunk of subjunctive-or-not uncertainty disappears, because you\'re no longer guessing — you\'re just checking who\'s doing what.',
      ],
      examples: [
        { es: 'Quiero dormir.', en: 'I want to sleep. (same subject → infinitive)' },
        { es: 'Quiero que duermas.', en: 'I want you to sleep. (different subjects → subjunctive)' },
        { es: 'Es importante trabajar duro.', en: "It's important to work hard. (generic → infinitive)" },
        { es: 'Es importante que trabajes duro.', en: "It's important that you work hard. (specific subject → subjunctive)" },
        { es: 'Espero aprobar. / Espero que apruebes.', en: 'I hope to pass. / I hope you pass.' },
      ],
      commonMistakes: [
        'The classic error is copying English word-for-word: "I want that you study" becomes the tempting but wrong *Quiero que tú estudiar* — once you commit to que, the verb that follows must be conjugated in the subjunctive (estudies), never left as an infinitive.',
        "The reverse error is just as common: adding que when the subject hasn't actually changed — Quiero que estudiar is wrong; if you (the speaker) are the one studying, drop que entirely and just say Quiero estudiar.",
        'A few expressions like es necesario que or ojalá always take que + subjunctive even when you might expect an infinitive shortcut — these are memorized exceptions rather than following the same-subject test.',
      ],
    },
    {
      heading: 'Purpose with a Twist: Para Que',
      paragraphs: [
        "Back in Unit 20, you met para + infinitive for purpose: Estudio para aprender (\"I study in order to learn\") — the same subject (yo) does both the studying and the learning. The same-subject/different-subject test you just built applies here too, and it has a name of its own worth knowing: when a different person is the one benefiting from or carrying out the purpose, para switches to para que + subjunctive. Estudio para que mis hijos aprendan (\"I study so that my children learn\") — yo study, but ellos are the ones learning, so the second verb becomes subjunctive (aprendan), triggered by que.",
        'The pattern is identical to querer/esperar from the last section, just applied to purpose instead of desire: Trabajo para ganar dinero (\"I work to earn money\" — same subject, infinitive) versus Trabajo para que mi familia tenga una vida mejor (\"I work so that my family has a better life\" — different subject, subjunctive). A few other purpose conjunctions follow para que\'s lead — a fin de que and con el fin de que both mean roughly the same thing and work identically, though para que is by far the most common in everyday speech.',
        'One more nuance: para que always takes the subjunctive, in every tense, with no indicative option — unlike cuando and its family from a later unit, there\'s no habitual/anticipated split to worry about here. Purpose is inherently about an intention, not a settled fact, so the subjunctive is automatic every time que appears after para.',
      ],
      examples: [
        { es: 'Estudio para que mis hijos aprendan.', en: 'I study so that my children learn.' },
        { es: 'Te llamo para que sepas la verdad.', en: 'I\'m calling you so that you know the truth.' },
        { es: 'Trabajo para que mi familia tenga una vida mejor.', en: 'I work so that my family has a better life.' },
        { es: 'Abrió la ventana para que entrara aire fresco.', en: 'He opened the window so that fresh air would come in.' },
        { es: 'Te lo explico otra vez para que lo entiendas bien.', en: 'I\'ll explain it to you again so you understand it well.' },
      ],
      commonMistakes: [
        'Don\'t use para + infinitive when the subject changes — Estudio para mis hijos aprender is wrong; the moment a different person enters the picture, que + subjunctive is required: Estudio para que mis hijos aprendan.',
        'Don\'t drop que and leave a conjugated verb after bare para — Para mis hijos aprendan is missing que; it must be para que mis hijos aprendan.',
        "Past-tense purpose still takes the subjunctive, just shifted to imperfect subjunctive — Abrió la ventana para que entrara aire (not entró) — following the same past-shifting pattern you'll see formalized with other triggers later.",
      ],
    },
    {
      heading: 'How Beautiful! Qué + Adjective and Adverb',
      paragraphs: [
        'You learned qué as a question word back in Unit 7 (¿Qué es esto?, "What is this?"). It has a second life as an exclamation word, and this use is everywhere in spoken Spanish — arguably more common than the textbook attention it usually gets. The simplest pattern: ¡Qué + adjective/adverb! for a pure reaction, with no verb needed at all. ¡Qué bonito! ("How beautiful!"), ¡Qué interesante! ("How interesting!"), ¡Qué bien! ("How great! / Well done!"). Just like question words, qué in this exclamatory use always carries its accent mark.',
        'You can also fold in a full clause for a more specific compliment or complaint: ¡Qué bien hablas español! ("How well you speak Spanish!"). Notice the adjective or adverb stays right after qué, and the subject/verb tail follows — the shape doesn\'t change just because you\'ve added more to the sentence.',
      ],
      examples: [
        { es: '¡Qué bonito!', en: 'How beautiful!' },
        { es: '¡Qué interesante!', en: 'How interesting!' },
        { es: '¡Qué bien hablas español!', en: 'How well you speak Spanish!' },
        { es: '¡Qué tarde es!', en: "How late it is!" },
      ],
      commonMistakes: [
        "Don't forget the accent mark on qué in exclamations — it's easy to assume accents are only for questions, but Spanish exclamative words carry them too, exactly like their question-word twins.",
        'Keep the adjective or adverb directly after qué — English speakers sometimes want to restructure the sentence around English word order, but ¡Qué bonito! never becomes anything closer to "how it is beautiful."',
      ],
    },
    {
      heading: 'What a House! Qué + Noun, and Cuánto for Quantity',
      paragraphs: [
        "Exclaiming about a noun instead of a plain adjective needs one more piece. ¡Qué casa! on its own already means \"What a house!\" — a general reaction. But if you want to comment specifically on some quality of that house, Spanish inserts más or tan plus an adjective after the noun: ¡Qué casa más bonita! or ¡Qué casa tan bonita! (both mean \"What a beautiful house!\" — más and tan are interchangeable here and don't change the meaning). The adjective at the end still has to agree in gender and number with the noun, exactly as adjectives always do: ¡Qué chicos más simpáticos! (masculine plural), ¡Qué idea tan buena! (feminine singular).",
        "For quantity — \"how much\" or \"how many\" — Spanish uses cuánto instead of qué, and here it behaves like the adjective it's standing in for: it agrees in gender and number with the noun that follows. ¡Cuánta gente! (feminine singular, gente is treated as feminine singular even though it refers to many people), ¡Cuántos problemas! (masculine plural), ¡Cuántas ganas tengo de verte! (feminine plural). When cuánto modifies a verb instead of a noun — commenting on the extent of an action rather than counting things — it stays in its base masculine singular form: ¡Cuánto has cambiado! (\"How much you've changed!\").",
        "Put the two exclamation words side by side and the split is clean: reach for qué when reacting to a quality (an adjective, an adverb, or a noun you're characterizing), and reach for cuánto when reacting to quantity — how much or how many of something there is.",
      ],
      examples: [
        { es: '¡Qué casa más bonita!', en: 'What a beautiful house!' },
        { es: '¡Qué chicos tan simpáticos!', en: 'What nice guys!' },
        { es: '¡Cuánta gente hay aquí!', en: 'How many people there are here!' },
        { es: '¡Cuántos problemas!', en: 'How many problems!' },
        { es: '¡Cuánto has cambiado!', en: "How much you've changed!" },
      ],
      commonMistakes: [
        'Don\'t forget the agreement step on ¡Qué + noun + más/tan + adjective! — the adjective has to match the noun\'s gender and number, so it\'s ¡Qué casa más bonita! but ¡Qué coche más bonito!',
        'Cuánto agrees with the noun it counts (cuánta gente, cuántos problemas), but stays cuánto (masculine singular) when it\'s modifying a verb rather than a noun, as in ¡Cuánto trabajas!',
        "Don't drop más or tan when reacting to a noun's specific quality — ¡Qué casa bonita! without either word sounds incomplete to native ears; it needs the más/tan bridge (though plain ¡Qué casa! alone, with no adjective at all, is fine on its own).",
      ],
    },
  ],

  vocab: [
    { es: 'dar', en: 'to give', example: '¿Me lo das?', exampleEn: 'Will you give it to me?' },
    { es: 'explicar', en: 'to explain', example: 'Te lo explico ahora.', exampleEn: "I'll explain it to you now." },
    { es: 'prestar', en: 'to lend', example: '¿Me la prestas?', exampleEn: 'Will you lend it to me?' },
    { es: 'mandar', en: 'to send', example: 'Nos los mandan mañana.', exampleEn: "They're sending them to us tomorrow." },
    { es: 'decir', en: 'to say / tell', example: '¿Se lo has dicho ya?', exampleEn: 'Have you already told him?' },
    { es: 'se habla', en: 'is spoken / one speaks', example: 'Se habla español aquí.', exampleEn: 'Spanish is spoken here.' },
    { es: 'se vende', en: 'is for sale / is sold', example: 'Se vende piso.', exampleEn: 'Flat for sale.' },
    { es: 'se permite', en: 'is allowed / permitted', example: 'No se permite fumar aquí.', exampleEn: 'Smoking is not permitted here.' },
    { es: 'se dice que', en: 'they say that / it is said that', example: 'Se dice que va a llover.', exampleEn: "It's said that it's going to rain." },
    { es: 'esperar', en: 'to hope / expect', example: 'Espero que apruebes.', exampleEn: 'I hope you pass.' },
    { es: 'es importante', en: "it's important", example: 'Es importante que estudies.', exampleEn: "It's important that you study." },
    { es: 'es necesario', en: "it's necessary", example: 'Es necesario descansar.', exampleEn: "It's necessary to rest." },
    { es: 'dormir', en: 'to sleep', example: 'Quiero que duermas bien.', exampleEn: 'I want you to sleep well.' },
    { es: 'para que', en: 'so that / in order that', example: 'Te lo explico para que lo entiendas.', exampleEn: 'I explain it to you so that you understand it.' },
    { es: 'a fin de que', en: 'so that / in order that (formal)', example: 'Llegamos temprano a fin de que todo esté listo.', exampleEn: 'We arrive early so that everything is ready.' },
    { es: '¡qué bonito!', en: 'how beautiful!', example: '¡Qué bonito es este pueblo!', exampleEn: 'How beautiful this town is!' },
    { es: '¡qué bien!', en: 'how great! / well done!', example: '¡Qué bien hablas español!', exampleEn: 'How well you speak Spanish!' },
    { es: 'más / tan', en: 'so / such (in exclamations)', example: '¡Qué casa más bonita!', exampleEn: 'What a beautiful house!' },
    { es: '¡cuánta gente!', en: 'how many people!', example: '¡Cuánta gente hay en la fiesta!', exampleEn: 'How many people there are at the party!' },
    { es: 'cambiar', en: 'to change', example: '¡Cuánto has cambiado!', exampleEn: "How much you've changed!" },
  ],

  practice: [
    // ── object_pronoun_order block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which order is correct when replacing both objects with pronouns?', word: 'me lo', english: 'it to me', answer: 'me lo', options: ['me lo', 'lo me', 'lo yo', 'yo lo'], concept_id: 'object_pronoun_order', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "¿Me das el libro? → ¿___ das?" (it to me)', word: 'me lo', english: 'it to me', answer: 'Me lo', concept_id: 'object_pronoun_order', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate, replacing 'the results' with pronouns: 'They send them to us.'", english: 'They send them to us.', answer: 'Nos los mandan.', word: 'nos los', concept_id: 'object_pronoun_order', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Choose the correct pronoun combination: "Le di la carta a ella." → "___ di."', word: 'se la', english: 'it (to her)', answer: 'Se la', options: ['Le la', 'Se la', 'Le lo', 'Se lo'], concept_id: 'object_pronoun_order', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Le lo compré ayer."', word: 'se lo', english: 'I bought it for him', answer: 'Se lo compré ayer.', concept_id: 'object_pronoun_order', difficulty: 2 },

    // ── se_impersonal block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which sentence means "Spanish is spoken here" without naming who speaks it?', word: 'se habla', english: 'is spoken', answer: 'Se habla español aquí.', options: ['Se habla español aquí.', 'Él habla español aquí.', 'Se hablan español aquí.', 'Hablo español aquí.'], concept_id: 'se_impersonal', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "No ___ fumar aquí." (impersonal: smoking is not permitted)', word: 'se permite', english: "isn't permitted", answer: 'se permite', concept_id: 'se_impersonal', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate using impersonal se: 'They say it's going to rain.'", english: "They say it's going to rain.", answer: 'Se dice que va a llover.', word: 'se dice que', concept_id: 'se_impersonal', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence uses the reflexive se, not the impersonal se?', word: 'se lava', english: 'washes herself', answer: 'Ella se lava por la mañana.', options: ['Ella se lava por la mañana.', 'Se habla inglés aquí.', 'Se vende esta casa.', 'Se come tarde en España.'], concept_id: 'se_impersonal', difficulty: 2 },

    // ── infinitive_vs_subjunctive block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Same subject or different? "Quiero ___." (I want to sleep — I am the one sleeping)', word: 'dormir', english: 'to sleep', answer: 'dormir', options: ['dormir', 'que duermas', 'que duermo', 'duerma'], concept_id: 'infinitive_vs_subjunctive', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Quiero que tú ___ (dormir) bien." (different subject — you sleep)', word: 'dormir', english: 'to sleep', answer: 'duermas', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It's important that you (tú) work hard.' (specific subject)", english: "It's important that you work hard.", answer: 'Es importante que trabajes duro.', word: 'trabajes', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Quiero que estudiar." (same subject, no que needed)', word: 'estudiar', english: 'to study', answer: 'Quiero estudiar.', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Espero aprobar" frente a "Espero que apruebes"?', word: 'esperar', english: 'to hope', answer: 'I hope to pass (I am the one passing) vs. I hope you pass (someone else is passing).', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },

    // ── para_que block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Same subject or different? "Estudio ___." (I study in order to learn — I am the one learning)', word: 'aprender', english: 'to learn', answer: 'para aprender', options: ['para aprender', 'para que aprenda', 'para que aprendo', 'para que aprenda yo'], concept_id: 'para_que', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Estudio para que mis hijos ___ (aprender)." (different subject — they learn)', word: 'aprender', english: 'to learn', answer: 'aprendan', concept_id: 'para_que', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I'm calling you so that you know the truth.'", english: "I'm calling you so that you know the truth.", answer: 'Te llamo para que sepas la verdad.', word: 'para que', concept_id: 'para_que', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Estudio para mis hijos aprender." (different subject needs que + subjunctive)', word: 'para que', english: 'so that', answer: 'Estudio para que mis hijos aprendan.', concept_id: 'para_que', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Abrió la ventana para que entrara aire fresco"?', word: 'para que', english: 'so that', answer: 'He opened the window so that fresh air would come in.', concept_id: 'para_que', difficulty: 3 },

    // ── exclamativas block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which is the correct pure exclamation for "How beautiful!"?', word: '¡qué bonito!', english: 'how beautiful!', answer: '¡Qué bonito!', options: ['¡Qué bonito!', '¡Cuánto bonito!', '¡Qué es bonito!', '¡Bonito qué!'], concept_id: 'exclamativas', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'What a beautiful house!' (using qué + noun + más/tan + adjective)", english: 'What a beautiful house!', answer: '¡Qué casa más bonita!', altAnswers: ['¡Qué casa tan bonita!'], word: 'qué casa más bonita', concept_id: 'exclamativas', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correctly agreeing form: "¡___ gente hay aquí!" (how many people, fem. sing.)', word: 'cuánta', english: 'how much/many', answer: 'Cuánta', concept_id: 'exclamativas', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the agreement error: "¡Qué chicos más simpático!"', word: 'simpáticos', english: 'nice', answer: '¡Qué chicos más simpáticos!', concept_id: 'exclamativas', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, Kwiziq Spanish,
// Lawless Spanish Grammar, and studyspanish.com-adjacent sources before
// writing (July 2026):
// - Double object pronoun order: indirect object pronoun always precedes
//   direct object pronoun (me lo, te la, nos los), confirmed against
//   Lawless Spanish Grammar and Kwiziq.
// - le/les → se before lo/la/los/las: confirmed as a purely phonetic rule
//   (avoiding adjacent l-sounds), never a meaning-based rule; *le lo/*le la
//   are confirmed ungrammatical across all sources checked.
// - Impersonal se (se + 3rd person singular verb) vs. reflexive se (has a
//   specific subject) vs. passive se (agrees in number with what follows,
//   e.g. se vende/se venden) — three-way distinction confirmed against
//   Kwiziq's "impersonal se vs. passive reflexive se" and SpanishDict's
//   impersonal-vs-reflexive se answer thread.
// - Infinitive vs. subjunctive same-subject/different-subject rule for
//   querer/esperar/es importante-type triggers confirmed against Kwiziq's
//   "quiero que + subjunctive" page and Spanish Linguist's "single subject
//   subjunctives" analysis.
// - Exclamative qué + adjective/adverb (with required written accent, same
//   as interrogative qué) confirmed against SpanishDict's exclamatory words
//   guide.
// - ¡Qué + noun + más/tan + adjective! pattern (más and tan interchangeable,
//   qué and más/tan invariable, final adjective agrees with the noun)
//   confirmed against Kwiziq's dedicated page on this exact construction.
// - Cuánto/a/os/as agreement with the following noun, but invariant
//   masculine singular when modifying a verb (¡Cuánto has cambiado!),
//   confirmed against SpanishDict's exclamatory words guide.
// - Para + infinitive (same subject) vs. para que + subjunctive (different
//   subject) confirmed against SpanishDict's and Kwiziq's "para que"
//   pages, applying the identical same-subject/different-subject test as
//   querer/esperar; a fin de que and con el fin de que confirmed as
//   near-synonymous, less-common formal alternatives to para que; para que
//   confirmed to always require the subjunctive in every tense (including
//   imperfect subjunctive for past-tense purpose, e.g. entrara), with no
//   indicative option, unlike the habitual/anticipated split that applies
//   to cuando and other adverbial time triggers.
// This content agrees with and does not contradict the existing
// GRAMMAR_CARDS entries for object_pronoun_order, se_impersonal,
// infinitive_vs_subjunctive, and exclamativas in src/content/grammar.js,
// and builds directly on direct_object_pronouns/indirect_object_pronouns
// (Unit 10), present_subjunctive/modal_verbs (Unit 12, Unit 19), and
// por_vs_para's para + infinitive purpose use (Unit 20) without
// re-teaching their basics from scratch. para_que is a new concept (see
// functions/_lib/concepts.js) with no prior GRAMMAR_CARDS entry.
