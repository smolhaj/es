// Unit 22 — Passive & Impersonal (B2)
// Covers: passive_voice, passive_se, ser_estar_participle
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com, and other
// established grammar references before writing — see the audit note at
// the bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'The True Passive: ser + Past Participle',
      paragraphs: [
        "So far in this course, almost every sentence you've built has had a clear subject doing something: Juan escribió la carta (\"Juan wrote the letter\"). But English speakers constantly use another structure too — one that flips the spotlight from the doer onto the thing being done to: \"The letter was written.\" This is the passive voice, and Spanish has a direct grammatical equivalent: ser + past participle.",
        'The formation is straightforward once you already know ser and past participles (escrito, hablado, cerrado, and so on — the same participles you learned for the present perfect). Conjugate ser in whatever tense the sentence needs, then add the past participle: La carta fue escrita ("The letter was written"). El proyecto será terminado mañana ("The project will be finished tomorrow"). Los documentos han sido firmados ("The documents have been signed").',
        'Here is the detail that catches almost everyone off guard: in this construction, the past participle behaves like an adjective and must agree in gender and number with the subject. That is a real departure from what you learned for the present perfect, where the participle after haber never changes — hemos escrito, ha escrito, han escrito are all frozen in that one masculine-singular-looking form no matter who did the writing. The passive is the opposite: La carta fue escrita (feminine singular, matching carta), not escrito. Los contratos fueron firmados (masculine plural). Las ventanas fueron lavadas (feminine plural). If you remember one rule from this section, make it this contrast: haber + participle = invariable; ser + participle = agrees with the subject.',
        'When you want to name who performed the action, Spanish uses por ("by") to introduce the agent, exactly where English uses "by": El puente fue diseñado por un arquitecto famoso ("The bridge was designed by a famous architect"). Just as in English, naming the agent is optional — Spanish drops it constantly when the doer is unknown, obvious, or simply unimportant to the point being made: Los heridos fueron trasladados al hospital ("The injured were taken to the hospital") doesn\'t bother saying by whom, because it doesn\'t matter.',
        "One more thing worth knowing before you start using this structure freely: this true ser-passive is genuinely less common in everyday spoken Spanish than its English counterpart is in everyday spoken English. Spanish speakers reach for it mainly in formal, written, or journalistic contexts — news reports, official documents, academic writing. In casual conversation, Spanish overwhelmingly prefers other ways of de-emphasizing the doer, especially the construction you'll meet next: passive se. Recognizing the ser-passive when you read or hear it is essential at this level; producing it constantly in casual speech would actually sound a little stiff and unnatural, the way an English speaker overusing legal-document phrasing would.",
      ],
      examples: [
        { es: 'La carta fue escrita por mi abuela.', en: 'The letter was written by my grandmother.' },
        { es: 'El puente fue diseñado por un arquitecto famoso.', en: 'The bridge was designed by a famous architect.' },
        { es: 'Las ventanas son lavadas cada semana.', en: 'The windows are washed every week.' },
        { es: 'Los documentos han sido firmados.', en: 'The documents have been signed.' },
        { es: 'Los heridos fueron trasladados al hospital.', en: 'The injured were taken to the hospital. (no agent named)' },
        { es: 'El contrato será revisado por los abogados.', en: 'The contract will be reviewed by the lawyers.' },
      ],
      commonMistakes: [
        "The most common error at this level: forgetting participle agreement. La casa fue construido is wrong — it must be La casa fue construida, agreeing with the feminine casa.",
        "Don't confuse this with the present perfect. Ha escrito la carta (present perfect, invariable participle, active voice: \"She has written the letter\") is a completely different structure from La carta fue escrita (passive voice, agreeing participle: \"The letter was written\") — they answer different questions and aren't interchangeable.",
        "Because English uses the passive constantly in both writing and speech, English speakers tend to overuse ser + participle in spoken Spanish where a native speaker would reach for passive se or just an active sentence instead. It's not wrong, exactly — it just reads as more formal or bookish than the moment usually calls for.",
      ],
    },
    {
      heading: 'Passive Se: The Everyday Alternative',
      paragraphs: [
        'If the ser-passive is mostly for formal writing, how does everyday spoken Spanish avoid naming a doer? The answer is a construction you\'ve technically already seen in fixed phrases: se + a third-person verb. This is passive se, and it is dramatically more common in daily conversation, signage, and casual writing than the ser-passive. You\'ve probably already noticed it on storefronts: Se habla español ("Spanish is spoken [here]"), Se venden casas ("Houses for sale," literally "houses are sold").',
        "The mechanics are what make this genuinely useful rather than just another set phrase to memorize: the verb agrees in number with the noun that follows it, exactly the way a normal subject-verb pair would. Se vende casa (singular casa, singular vende — \"house for sale\") versus Se venden casas (plural casas, plural venden — \"houses for sale\"). Grammatically, that following noun — casa or casas — is functioning as the sentence's real subject, even though it comes after the verb; se here is simply marking that no specific person is being credited with doing the selling.",
        'This is why passive se and the ser-passive can often express closely related ideas, but passive se is the one you\'ll reach for in casual speech and signs, while ser + participle is the one you\'ll see in a news article covering the same event formally. Compare: Se vendieron miles de entradas en una hora (everyday framing: "Thousands of tickets were sold within an hour") versus the more formal Miles de entradas fueron vendidas en una hora — both are grammatically valid passives, but a Spanish speaker chatting with a friend reaches for the first, not the second.',
        'Passive se has a close cousin that looks identical on the surface but works differently: impersonal se. The giveaway is what follows the verb. Passive se is followed by a noun that the verb agrees with (Se venden casas). Impersonal se has no such noun — there\'s no logical subject at all, just a general, unspecified "people," "one," or "you" — and the verb is therefore always third-person singular, no matter what: Se dice que va a llover ("They say it\'s going to rain" / "It\'s said that it\'s going to rain"). Se vive bien aquí ("One lives well here" / "Life is good here"). Se trabaja mucho en esta empresa ("People work a lot at this company"). There is no plural noun anywhere in these sentences for the verb to agree with, so dice, vive, and trabaja stay singular even though the meaning is clearly about people in general.',
      ],
      examples: [
        { es: 'Se habla español aquí.', en: 'Spanish is spoken here.' },
        { es: 'Se vende casa.', en: 'House for sale. (singular noun, singular verb)' },
        { es: 'Se venden casas.', en: 'Houses for sale. (plural noun, plural verb)' },
        { es: 'Se necesitan camareros.', en: 'Waiters needed. (plural noun, plural verb)' },
        { es: 'Se dice que el jefe se va.', en: "It's said / people say the boss is leaving. (impersonal, always singular)" },
        { es: 'Se come muy bien en esta ciudad.', en: 'One eats very well in this city. (impersonal, no logical subject)' },
      ],
      commonMistakes: [
        'A very frequent slip: writing "Se vende casas" with a singular verb before a plural noun. Once a plural noun follows, the verb must be plural too: Se venden casas.',
        "Don't confuse passive se with reflexive se (Ella se lava, \"She washes herself\") just because they look identical on the page. Reflexive se means the subject is doing the action to itself; passive se means no one in particular is being credited with the action at all. Context and meaning — not the word se itself — tell them apart.",
        'The test for passive vs. impersonal se: is there a noun right after the verb that the verb is agreeing with? If yes (se venden libros), it\'s passive se. If there\'s no such noun and the verb is stuck in singular no matter what (se vive bien, se dice que...), it\'s impersonal se.',
      ],
    },
    {
      heading: 'Ser vs. Estar + Participle: Action vs. Resulting State',
      paragraphs: [
        "You've now met ser + participle for the true passive. But you already know estar + participle from earlier lessons too — La puerta está cerrada (\"The door is closed\") uses exactly the same past participle, cerrada, with a different auxiliary. This pairing is one of the classic pain points for English speakers at this level, because English \"is closed\" is ambiguous in a way Spanish refuses to be: it could describe the ongoing state of a door, or it could describe the passive action of someone closing it right now. Spanish forces you to pick.",
        'Ser + participle describes the action or event itself — the process of something happening, often (though not always) with an agent doing it. Estar + participle describes the resulting state that exists afterward — a condition, a description of how something currently is, with no sense of an ongoing action at all. Compare these two sentences side by side: La puerta fue cerrada por el guardia ("The door was closed by the guard" — this is the event of closing happening, ser + participle, true passive) versus La puerta está cerrada ("The door is closed" — this simply describes the door\'s current condition, estar + participle, resulting state, and it doesn\'t care who closed it or when).',
        "A useful mental test: if you can naturally insert \"by [someone]\" or picture the action actively taking place, you likely want ser. If you're just describing how something currently looks or exists — a snapshot, not an event — you want estar. El contrato fue firmado ayer (\"The contract was signed yesterday\" — an event that happened) versus El contrato ya está firmado (\"The contract is already signed\" — its current state, done and dusted, regardless of when the signing happened). Notice también that estar + participle in this state-describing sense is actually the more common of the two constructions in everyday speech — Spanish speakers describe how things currently are constantly; they invoke the formal passive event far less often.",
        'Because the estar + participle form is functioning as a description, the participle still agrees in gender and number with what it describes, just as it does with ser: La puerta está cerrada, Las ventanas están rotas, Los platos están lavados. Some participles have drifted so far toward pure adjective meaning with estar that the passive sense disappears almost entirely — estar aburrido means "to be bored" (a state of feeling), not "to be bored by someone," even though aburrido comes from the verb aburrir ("to bore").',
      ],
      examples: [
        { es: 'La puerta fue cerrada por el guardia.', en: 'The door was closed by the guard. (event)' },
        { es: 'La puerta está cerrada.', en: 'The door is closed. (state)' },
        { es: 'El contrato fue firmado ayer.', en: 'The contract was signed yesterday. (event)' },
        { es: 'El contrato ya está firmado.', en: 'The contract is already signed. (state)' },
        { es: 'Las tiendas fueron abiertas a las nueve.', en: 'The stores were opened at nine. (event)' },
        { es: 'Las tiendas ya están abiertas.', en: 'The stores are already open. (state)' },
      ],
      commonMistakes: [
        'A frequent error is reaching for estar to form a true passive with an agent: "La puerta está cerrada por el guardia" sounds odd to native ears — once you name who is doing the closing with por, you almost always want ser (fue cerrada), because you\'re describing the event, not just the resulting condition.',
        "Don't forget that estar + participle still agrees in gender/number just like ser + participle does — Las ventanas están rotas, not roto.",
        'When in doubt, ask: am I describing something happening (ser) or something\'s current condition (estar)? La comida fue preparada por mi madre (the event of preparing) vs. La comida ya está preparada (it\'s ready now, a state) — same participle, very different focus.',
      ],
    },
  ],

  vocab: [
    { es: 'fue escrito/a', en: 'was written', example: 'La novela fue escrita en 1967.', exampleEn: 'The novel was written in 1967.' },
    { es: 'fue construido/a', en: 'was built', example: 'El edificio fue construido en 1920.', exampleEn: 'The building was built in 1920.' },
    { es: 'fue firmado/a', en: 'was signed', example: 'El acuerdo fue firmado por ambos países.', exampleEn: 'The agreement was signed by both countries.' },
    { es: 'por', en: 'by (introduces the agent)', example: 'El cuadro fue pintado por Frida Kahlo.', exampleEn: 'The painting was painted by Frida Kahlo.' },
    { es: 'el participio', en: 'the past participle', example: 'El participio debe concordar con el sujeto.', exampleEn: 'The participle must agree with the subject.' },
    { es: 'se vende / se venden', en: 'for sale (singular/plural)', example: 'Se venden pisos en el centro.', exampleEn: 'Flats for sale in the center.' },
    { es: 'se habla', en: 'is spoken', example: 'Aquí se habla inglés y español.', exampleEn: 'English and Spanish are spoken here.' },
    { es: 'se necesita(n)', en: 'is/are needed, wanted (in ads)', example: 'Se necesitan voluntarios.', exampleEn: 'Volunteers needed.' },
    { es: 'se dice que', en: "it's said that / they say that", example: 'Se dice que va a nevar.', exampleEn: "They say it's going to snow." },
    { es: 'se vive', en: 'one lives / people live', example: 'Se vive muy bien en este pueblo.', exampleEn: 'Life is very good in this town. / One lives very well in this town.' },
    { es: 'está cerrado/a', en: 'is closed (state)', example: 'La tienda está cerrada los domingos.', exampleEn: 'The store is closed on Sundays.' },
    { es: 'está abierto/a', en: 'is open (state)', example: 'El museo está abierto hasta las seis.', exampleEn: 'The museum is open until six.' },
    { es: 'está terminado/a', en: 'is finished (state)', example: 'El informe ya está terminado.', exampleEn: 'The report is already finished.' },
    { es: 'el agente', en: 'the agent (the doer)', example: 'En esta frase no se menciona el agente.', exampleEn: "The agent isn't mentioned in this sentence." },
    { es: 'trasladado/a', en: 'moved / transferred', example: 'El paciente fue trasladado a otro hospital.', exampleEn: 'The patient was transferred to another hospital.' },
    { es: 'la voz pasiva', en: 'the passive voice', example: 'La voz pasiva se usa poco en el habla cotidiana.', exampleEn: 'The passive voice is used little in everyday speech.' },
  ],

  practice: [
    // ── passive_voice block (blocked practice: drill in isolation first) ──
    { type: 'multiple_choice', prompt: 'Choose the correctly agreeing form: "La carta ___ por mi tío." (escribir)', word: 'fue escrita', english: 'was written', answer: 'fue escrita', options: ['fue escrito', 'fue escrita', 'fue escritos', 'ha escrito'], concept_id: 'passive_voice', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete with the correct passive form: "Las ventanas ___ lavadas cada semana." (ser, present)', word: 'son', english: 'are', answer: 'son', concept_id: 'passive_voice', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate, making the participle agree correctly: 'The bridge was designed by a famous architect.'", english: 'The bridge was designed by a famous architect.', answer: 'El puente fue diseñado por un arquitecto famoso.', word: 'fue diseñado', concept_id: 'passive_voice', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate: "Los documentos han sido firmados."', word: 'han sido firmados', english: 'have been signed', answer: 'The documents have been signed.', concept_id: 'passive_voice', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the agreement error: "La casa fue construido en 1950."', word: 'fue construida', english: 'was built', answer: 'La casa fue construida en 1950.', concept_id: 'passive_voice', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Where would you most expect to encounter the ser + participle passive in everyday Spanish-speaking life?', word: 'la voz pasiva', english: 'the passive voice', answer: 'a newspaper article', options: ['a casual chat between friends', 'a newspaper article', 'texting a family member', 'ordering food'], concept_id: 'passive_voice', difficulty: 2 },

    // ── passive_se block (blocked separately) ──
    { type: 'multiple_choice', prompt: 'Which is correct for a sign advertising several apartments for sale?', word: 'se venden', english: 'for sale (plural)', answer: 'Se venden pisos.', options: ['Se vende pisos.', 'Se venden pisos.', 'Se vendido pisos.', 'Se es vendido pisos.'], concept_id: 'passive_se', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Se ___ inglés y francés en esta escuela." (hablar — the noun that follows is plural: inglés y francés together)', word: 'hablan', english: 'are spoken', answer: 'hablan', concept_id: 'passive_se', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate using passive se: 'Waiters are needed.' (plural)", english: 'Waiters are needed.', answer: 'Se necesitan camareros.', word: 'se necesitan', concept_id: 'passive_se', difficulty: 2 },
    { type: 'translation_to_english', prompt: 'Translate, noting this is impersonal se (no logical subject): "Se dice que el jefe se va."', word: 'se dice', english: "it's said / they say", answer: "It's said (people say) that the boss is leaving.", concept_id: 'passive_se', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the agreement error: "Se vende casas nuevas en esta calle."', word: 'se venden', english: 'are sold / for sale', answer: 'Se venden casas nuevas en esta calle.', concept_id: 'passive_se', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which sentence is impersonal se (no logical subject, always singular) rather than passive se?', word: 'se vive', english: 'one lives', answer: 'Se vive muy bien aquí.', options: ['Se venden casas.', 'Se vive muy bien aquí.', 'Se necesitan voluntarios.', 'Se alquilan habitaciones.'], concept_id: 'passive_se', difficulty: 3 },

    // ── ser_estar_participle block (blocked separately, builds on both prior concepts) ──
    { type: 'multiple_choice', prompt: 'Which describes the current condition of the door, not the act of closing it?', word: 'está cerrada', english: 'is closed (state)', answer: 'La puerta está cerrada.', options: ['La puerta fue cerrada por el guardia.', 'La puerta está cerrada.', 'La puerta es cerrada.', 'La puerta cerró.'], concept_id: 'ser_estar_participle', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete describing the event (an agent is named): "El contrato ___ firmado por los dos directores." (ser, preterite)', word: 'fue', english: 'was', answer: 'fue', concept_id: 'ser_estar_participle', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate, choosing ser or estar correctly: 'The report is already finished.' (describing its current state)", english: 'The report is already finished.', answer: 'El informe ya está terminado.', word: 'está terminado', concept_id: 'ser_estar_participle', difficulty: 3 },
    { type: 'translation_to_english', prompt: 'Translate, capturing the event vs. state distinction: "Las tiendas fueron abiertas a las nueve. Ahora ya están abiertas."', word: 'fueron abiertas / están abiertas', english: 'were opened / are open', answer: 'The stores were opened at nine. Now they are already open.', concept_id: 'ser_estar_participle', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: an agent is explicitly named, so this should use ser, not estar: "La puerta está cerrada por el guardia."', word: 'fue cerrada', english: 'was closed', answer: 'La puerta fue cerrada por el guardia.', concept_id: 'ser_estar_participle', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and other established grammar references before writing (July 2026):
// - passive voice formation: ser + past participle, agent introduced by
//   "por", agent optional (SpanishDict "Active vs. Passive Voice",
//   spanishgrammar.co.uk, Kwiziq "Forming the passive voice with ser +
//   participle + por")
// - participle agreement with the subject in the ser-passive (gender and
//   number), contrasted against the invariable participle used with haber
//   in compound/perfect tenses (SpanishDict, italki "Spanish Past
//   Participles: From Regular to Irregular Forms", Wikibooks Spanish/Tenses)
// - the ser-passive being comparatively rare in everyday spoken Spanish and
//   concentrated in formal, written, journalistic, academic, and legal
//   registers, vs. English's much heavier reliance on the passive
//   (mydailyspanish.com "Passive Voice in Spanish", spanish.academy "How to
//   Master the Passive Voice in Spanish", spanishgrammar.co.uk)
// - passive se vs. impersonal se: passive se followed by a noun the verb
//   agrees with in number (se vende piso / se venden pisos); impersonal se
//   has no logical subject/following noun and is always 3rd-person singular
//   (se dice que..., se vive bien) (SpanishDict "Impersonal Se vs. Passive
//   Se", SpanishDict "Impersonal Se in Spanish", spanishgrammar.net)
// - passive se being far more common than the ser-passive in everyday
//   spoken/casual Spanish (mydailyspanish.com "The Passive Se and
//   Impersonal Se in Spanish")
// - ser + participle = the action/event (and the true passive), estar +
//   participle = the resulting state, both requiring gender/number
//   agreement in the participle; the "La puerta fue cerrada por el
//   guardia" vs. "La puerta está cerrada" contrast pair specifically
//   (inklingo.app "Ser + Past Participle vs Estar + Past Participle",
//   Kwiziq "Passive with estar?", WordReference Forums "ser/estar + past
//   participle")
// - estar + participle with some participles drifting to pure adjectival/
//   stative meaning (estar aburrido = to be bored, a state) — consistent
//   with the existing GRAMMAR_CARDS entry for ser_estar_participle in
//   src/content/grammar.js, which this lesson content agrees with and
//   expands into a fuller B2-paced walkthrough without contradicting it.
