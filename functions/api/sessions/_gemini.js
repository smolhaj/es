export const BASE_SYSTEM_PROMPT = `You are Capi, an expert Spanish tutor adapting to each learner's exact profile.

EVERY response must follow this exact format — no exceptions:

CORRECT: true
(or)
CORRECT: false

[1-2 sentence feedback. Specific, direct, no filler.]

<EXERCISE>
{"type":"...","prompt":"...","word":"...","english":"...","answer":"...","concept_id":"...","difficulty":1}
</EXERCISE>

Optionally, if the learner just got something wrong and a brief concept note would help:
[CONCEPT_NOTE]One crisp grammar rule, max 2 sentences.[/CONCEPT_NOTE]

EXERCISE types and required JSON fields:

multiple_choice — include "options" array of exactly 4 strings:
{"type":"multiple_choice","prompt":"What does 'agua' mean?","word":"agua","english":"water","answer":"water","options":["fire","water","earth","air"],"concept_id":"noun_gender","difficulty":1}

fill_blank — prompt contains ___, answer is the exact word/form:
{"type":"fill_blank","prompt":"Complete: Yo ___ español. (hablar)","word":"hablar","english":"to speak","answer":"hablo","concept_id":"present_ar","difficulty":2}

translation_to_spanish:
{"type":"translation_to_spanish","prompt":"Translate: 'I speak Spanish'","english":"I speak Spanish","answer":"Hablo español","word":"hablar","concept_id":"present_ar","difficulty":3}

translation_to_english:
{"type":"translation_to_english","prompt":"¿Qué significa 'Me llamo Pablo'?","spanish":"Me llamo Pablo","answer":"My name is Pablo","word":"llamarse","concept_id":"reflexive_verbs","difficulty":2}

error_correction — prompt shows a sentence with an error, learner must correct it:
{"type":"error_correction","prompt":"Find and correct the error: \"Le lo dije ayer.\"","word":"le → se","english":"le becomes se before lo","answer":"Se lo dije ayer.","concept_id":"object_pronoun_order","difficulty":2}

concept_id must be one of:
A1: greeting_basics, numbers_1_20, subject_pronouns, noun_gender, definite_articles, indefinite_articles,
    ser_basics, estar_basics, present_ar, present_er_ir, adjective_agreement, question_words, hay, numbers_21_100,
    plural_nouns
A2: ser_vs_estar, reflexive_verbs, gustar_type, direct_object_pronouns, indirect_object_pronouns,
    demonstratives, possessives, preterite_regular, modal_verbs, obligation_infinitive, time_expressions,
    present_progressive, irregular_present, negation, prepositions_basic, near_future, adverbs_formation,
    comparatives_basic
B1: acabar_de, llevar_gerund, preterite_irregular, imperfect, preterite_vs_imperfect, future_simple,
    conditional, present_subjunctive, imperative, por_vs_para, relative_clauses,
    object_pronoun_order, se_impersonal, infinitive_vs_subjunctive, exclamativas, saber_vs_conocer, lo_neutro
B2: present_perfect, pluperfect, future_perfect, conditional_perfect, passive_voice, passive_se,
    imperfect_subjunctive, si_clauses, subjunctive_adverbial, comparatives, ser_estar_participle,
    diminutives_augmentatives, relative_pronouns_advanced, adjectives_ser_estar, perfect_subjunctive,
    verbos_cambio, adjective_position
C1: subjunctive_noun_clauses, subjunctive_adjective_clauses, gerund_advanced, ser_passive,
    estilo_indirecto, nominalisation, subjunctive_temporal, cuantificadores,
    futuro_probabilidad, condicional_probabilidad, perifraseis_avanzadas, pluperfect_subjunctive,
    aunque_concessive, verbos_preposicionales

difficulty: 1 (easy recall), 2 (production), 3 (full translation or nuanced contrast)

CONTENT SCOPE:
Default to A1 material unless the professor briefing explicitly shows higher CEFR level.
A1: greetings, numbers, colors, family, food, ser/estar basics, present -ar/-er/-ir, noun gender, articles, plural noun formation (-s/-es/-ces)
A2: ser vs estar contrast, preterite (regular), reflexives, gustar-type verbs, object pronouns (direct/indirect), demonstratives, possessives, modal verbs, obligation (tener que/hay que), time expressions (hace/ayer/desde hace), present progressive (estar + gerund), irregular present tense (ir/tener/hacer/poder/venir/saber + yo-go + stem-changes), negation (no/nada/nadie/nunca double negatives), adverbs of manner (-mente formation), basic comparatives (más/menos...que, tan...como)
B1: preterite irregular, imperfect, preterite vs imperfect, future, conditional, present subjunctive, imperative, por/para, relative clauses, acabar de, llevar + gerund, double object pronouns (me lo/se lo), impersonal se, infinitive vs subjunctive (same/different subject), exclamatory sentences (¡Qué!, ¡Cuánto!), saber vs. conocer, neuter lo (lo + adjective, lo que)
B2: present perfect, pluperfect, future perfect, conditional perfect, passive constructions (ser + participio, pasiva se), imperfect subjunctive, si-clauses, subjunctive in adverbial clauses, comparatives, diminutives/augmentatives, advanced relative pronouns, present perfect subjunctive (haya + participio), verbs of change (ponerse/volverse/hacerse/llegar a ser), adjective position (before/after noun) — only if CEFR level is B2+
C1: subjunctive in noun/adjective/temporal clauses, gerund (advanced), ser passive, indirect speech, nominalisation, quantifiers, future/conditional for probability inference, advanced verb periphrases (soler, ponerse a, volver a, dejar de, llevar sin), pluperfect subjunctive (hubiera/hubiese + participio), concessive aunque (indicative vs. subjunctive), verbs with fixed prepositions (pensar en, soñar con, consistir en) — only if CEFR level is C1

FEEDBACK RULES:
- Wrong: name the exact rule violated. One sentence on how to fix it.
- Right: one precise observation, or nothing if it was trivially obvious.
- Never "Great job!", "Excellent!", "Wonderful!", or hollow praise.
- Never repeat the same encouragement twice in a row.
- First turn: CORRECT: true, empty feedback, give first exercise.
- All feedback in English.

EXPLANATION STYLES (briefing will specify which to use per concept):
- rule_first: State the grammar rule explicitly first, then give an exercise that tests it.
- example_first: Lead the concept note with 2-3 clear examples before any rule statement.
- contrastive: Pair a correct and incorrect form in the exercise or note to show the contrast.
- table: Use a paradigm table in the concept note (conjugation, pronoun grid, etc.).
- pattern: Focus the concept note on the productive pattern only (e.g. -ar → -o for yo form).
- story: Wrap the exercise in a short real-life narrative sentence or dialogue.
- analogy: Draw a parallel to English in the concept note (e.g. "like 'to have' in English but...").
When the briefing says "Try: X explanation style", apply that style in the [CONCEPT_NOTE] and in how you frame the next exercise.

VOCAB SRS INTEGRATION:
When the briefing lists words under "VOCAB DUE FOR SRS REVIEW", use those exact words in at least 2 exercises this session. Wrap them in context sentences at the learner's CEFR level. Use translation_to_english for words the learner has seen before (testing recognition) and multiple_choice for words seen fewer than 3 times (easing in).

PERSONALIZATION (when briefing is provided):
- Target weak concepts identified in the briefing.
- Use the suggested explanation style for each concept (see EXPLANATION STYLES above).
- If fossilization risk is flagged, try a completely different angle or exercise type.
- If last session had high frustration/fatigue, start easier.
- Vary exercise type per concept: don't repeat same type for same concept consecutively.

EXERCISE VARIETY:
- No more than 2 consecutive multiple_choice.
- Never test the same word twice in a row.
- When wrong: next exercise tests the same concept differently.
- A1/A2 learners: favour multiple_choice for new vocab, fill_blank for familiar grammar.
- B1+ learners: shift toward fill_blank and translation; limit multiple_choice to new concepts.
- B2/C1 learners: prefer translation exercises; use multiple_choice only to introduce brand-new vocabulary.

SESSION OPENER (first_turn=true only):
One short line referencing learner context (session count, weak spots), then blank line, then CORRECT: true.`;

export const FALLBACK_EXERCISES = [
  // A1
  { type: 'multiple_choice', prompt: 'What does "hola" mean?', word: 'hola', english: 'hello', answer: 'hello', options: ['goodbye', 'hello', 'please', 'thank you'], concept_id: 'greeting_basics', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: Yo ___ español. (hablar)', word: 'hablar', english: 'to speak', answer: 'hablo', concept_id: 'present_ar', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "gracias"?', word: 'gracias', english: 'thank you', answer: 'thank you', concept_id: 'greeting_basics', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'How do you say "water" in Spanish?', word: 'agua', english: 'water', answer: 'agua', options: ['fuego', 'agua', 'tierra', 'aire'], concept_id: 'noun_gender', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Good morning'", english: 'Good morning', answer: 'Buenos días', word: 'buenos días', concept_id: 'greeting_basics', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'What does "rojo" mean?', word: 'rojo', english: 'red', answer: 'red', options: ['blue', 'green', 'red', 'yellow'], concept_id: 'noun_gender', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: Ella ___ profesora. (ser)', word: 'ser', english: 'to be (permanent)', answer: 'es', concept_id: 'ser_basics', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "hasta luego"?', word: 'hasta luego', english: 'see you later', answer: 'see you later', concept_id: 'greeting_basics', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'What does "comer" mean?', word: 'comer', english: 'to eat', answer: 'to eat', options: ['to drink', 'to eat', 'to sleep', 'to run'], concept_id: 'present_er_ir', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: ¿Cómo ___ tú? (llamarse)', word: 'llamarse', english: 'to be called', answer: 'te llamas', concept_id: 'reflexive_verbs', difficulty: 2 },
  // A2
  { type: 'fill_blank', prompt: 'Complete: Ella ___ en Madrid desde hace dos años. (vivir)', word: 'vivir', english: 'to live', answer: 'vive', concept_id: 'present_er_ir', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which is correct for "I went to the cinema"?', word: 'ir', english: 'to go', answer: 'Fui al cine.', options: ['Iba al cine.', 'Fui al cine.', 'Voy al cine.', 'Iré al cine.'], concept_id: 'preterite_regular', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: ¿___ te gusta más, el café o el té? (cuál)', word: 'gustar', english: 'to like', answer: 'cuál', concept_id: 'gustar_type', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I am going to travel to Spain.'", english: 'I am going to travel to Spain.', answer: 'Voy a viajar a España.', word: 'viajar', concept_id: 'near_future', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'How do you say "I was studying" (ongoing past) in Spanish?', word: 'estudiar', english: 'to study', answer: 'Estaba estudiando.', options: ['Estudié.', 'Estaba estudiando.', 'Estudiaré.', 'He estudiado.'], concept_id: 'present_progressive', difficulty: 2 },
  // B1
  { type: 'fill_blank', prompt: 'Complete: Si tuviera más tiempo, ___ más. (estudiar, conditional)', word: 'estudiar', english: 'to study', answer: 'estudiaría', concept_id: 'conditional', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I have just arrived.'", english: 'I have just arrived.', answer: 'Acabo de llegar.', word: 'llegar', concept_id: 'acabar_de', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which sentence uses "por" correctly?', word: 'por', english: 'for/by/through', answer: 'Gracias por tu ayuda.', options: ['Lo hago para divertirme.', 'Gracias por tu ayuda.', 'Estudio para aprender.', 'Salgo para Madrid mañana.'], concept_id: 'por_vs_para', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: Quiero que ___ la verdad. (decir, present subjunctive, tú)', word: 'decir', english: 'to say', answer: 'digas', concept_id: 'present_subjunctive', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Lleva tres horas estudiando"?', word: 'llevar', english: 'to have been doing for', answer: 'She has been studying for three hours.', concept_id: 'llevar_gerund', difficulty: 2 },
  // A2 — adverbs_formation
  { type: 'fill_blank', prompt: 'Complete: Habla muy ___. (rápido → adverb)', word: 'rápidamente', english: 'quickly', answer: 'rápidamente', concept_id: 'adverbs_formation', difficulty: 2 },
  // A2 — comparatives_basic
  { type: 'translation_to_spanish', prompt: "Translate: 'Ana is taller than Luis.'", english: 'Ana is taller than Luis.', answer: 'Ana es más alta que Luis.', word: 'más...que', concept_id: 'comparatives_basic', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: Mi hermana es ___ inteligente ___ yo. (as...as)', word: 'tan...como', english: 'as...as', answer: 'tan / como', concept_id: 'comparatives_basic', difficulty: 2 },
  // B2
  { type: 'fill_blank', prompt: 'Complete: ___ tres países este año. (I have visited — haber + visitar)', word: 'haber', english: 'to have (auxiliary)', answer: 'He visitado', concept_id: 'present_perfect', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'If I had more money, I would travel more.'", english: 'If I had more money, I would travel more.', answer: 'Si tuviera más dinero, viajaría más.', word: 'tener', concept_id: 'si_clauses', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: Quería que él ___ más despacio. (hablar, imperfect subjunctive)', word: 'hablar', english: 'to speak', answer: 'hablara', concept_id: 'imperfect_subjunctive', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "El informe fue redactado por el director"?', word: 'ser', english: 'to be', answer: 'The report was drafted by the director.', concept_id: 'passive_voice', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence is a correct B2 comparison?', word: 'más', english: 'more', answer: 'Habla español mejor que yo.', options: ['Habla español más bien que yo.', 'Habla español mejor que yo.', 'Habla español más bueno que yo.', 'Habla español tan bien como yo no.'], concept_id: 'comparatives', difficulty: 2 },
  // C1
  { type: 'translation_to_spanish', prompt: "Translate: 'I doubt that he has told the truth.'", english: 'I doubt that he has told the truth.', answer: 'Dudo que haya dicho la verdad.', word: 'dudar', concept_id: 'subjunctive_noun_clauses', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: Me dijo que ___ al día siguiente. (volver, indirect speech, él)', word: 'volver', english: 'to return', answer: 'volvería', concept_id: 'estilo_indirecto', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Serán las tres de la tarde"? (uso del futuro de probabilidad)', word: 'ser', english: 'to be', answer: 'It must be about three in the afternoon.', concept_id: 'futuro_probabilidad', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: No sé cuántos años tiene, pero ___ unos cuarenta. (tener, condicional de probabilidad)', word: 'tener', english: 'to have', answer: 'tendrá', concept_id: 'futuro_probabilidad', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Tendría unos treinta años cuando lo conocí"? (condicional de probabilidad)', word: 'tener', english: 'to have', answer: 'He must have been about thirty when I met him.', concept_id: 'condicional_probabilidad', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: ___ llegar tarde los viernes. (soler, ella, perifrase habitual)', word: 'soler', english: 'to usually do', answer: 'Suele', concept_id: 'perifraseis_avanzadas', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'She suddenly burst into tears.' (use ponerse a)", english: 'She suddenly burst into tears.', answer: 'Se puso a llorar de repente.', word: 'ponerse a', concept_id: 'perifraseis_avanzadas', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Rewrite using double object pronouns: "Le di el dinero a ella." → ___ ___', word: 'le/lo', english: 'to her / it', answer: 'Se lo di.', concept_id: 'object_pronoun_order', difficulty: 2 },
  { type: 'error_correction', prompt: 'Find and correct the error: "Le lo expliqué ayer."', word: 'le → se', english: 'le becomes se before lo', answer: 'Se lo expliqué ayer.', concept_id: 'object_pronoun_order', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete with impersonal se: "___ come bien en este restaurante." (comer)', word: 'comer', english: 'to eat', answer: 'Se come', concept_id: 'se_impersonal', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate using impersonal se: 'Apartments for sale here.'", english: 'Apartments for sale here.', answer: 'Se venden pisos aquí.', word: 'vender', concept_id: 'se_impersonal', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I want you to study more.' (use que + subjunctive)", english: 'I want you to study more.', answer: 'Quiero que estudies más.', word: 'querer que', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct if wrong: "Espero que venir mañana." (subject: he)', word: 'venir → venga', english: 'to come (subjunctive)', answer: 'Espero que venga mañana.', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'What a beautiful city!'", english: 'What a beautiful city!', answer: '¡Qué ciudad tan bonita!', word: '¡qué!', concept_id: 'exclamativas', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete the exclamation: "___ gente hay aquí!" (¡Cuánto/a/os/as!)', word: 'cuánto', english: 'how much/many', answer: '¡Cuánta', concept_id: 'exclamativas', difficulty: 2 },
  { type: 'multiple_choice', prompt: '¿Qué significa "Ella es muy aburrida"?', word: 'aburrido', english: 'boring / bored', answer: 'She is very boring.', options: ['She is very bored.', 'She is very boring.', 'She is very tired.', 'She is very dull but only sometimes.'], concept_id: 'adjectives_ser_estar', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I am not ready yet.' (use estar listo)", english: 'I am not ready yet.', answer: 'Todavía no estoy listo.', word: 'listo', concept_id: 'adjectives_ser_estar', difficulty: 2 },
  { type: 'error_correction', prompt: 'Choose the right verb: "Está/Es malo — he is a bad person."', word: 'ser malo vs estar malo', english: 'ser malo = bad person; estar malo = sick', answer: 'Es malo.', concept_id: 'adjectives_ser_estar', difficulty: 3 },
  // A1 — numbers_1_20
  { type: 'translation_to_spanish', prompt: "Translate the number: 'fifteen'", english: 'fifteen', answer: 'quince', word: 'quince', concept_id: 'numbers_1_20', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which is the correct spelling of 12?', word: 'doce', english: 'twelve', answer: 'doce', options: ['dose', 'doce', 'doze', 'dóce'], concept_id: 'numbers_1_20', difficulty: 1 },
  // A1 — subject_pronouns
  { type: 'multiple_choice', prompt: 'Which subject pronoun means "they" (mixed group)?', word: 'ellos', english: 'they', answer: 'ellos', options: ['ellas', 'ellos', 'vosotros', 'ustedes'], concept_id: 'subject_pronouns', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'We (female group) are from Spain.'", english: 'We (female group) are from Spain.', answer: 'Nosotras somos de España.', word: 'nosotras', concept_id: 'subject_pronouns', difficulty: 1 },
  // A1 — definite_articles
  { type: 'fill_blank', prompt: 'Add the correct definite article: "___ mesa" (the table)', word: 'la', english: 'the (feminine)', answer: 'La', concept_id: 'definite_articles', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which is correct? "___ libros están aquí."', word: 'los', english: 'the (masc. plural)', answer: 'Los libros están aquí.', options: ['El libros están aquí.', 'Los libros están aquí.', 'Las libros están aquí.', 'La libros están aquí.'], concept_id: 'definite_articles', difficulty: 1 },
  // A1 — indefinite_articles
  { type: 'fill_blank', prompt: 'Complete: "Tengo ___ gato." (I have a cat)', word: 'un', english: 'a (masculine)', answer: 'un', concept_id: 'indefinite_articles', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which is correct? "She has a sister."', word: 'una', english: 'a (feminine)', answer: 'Tiene una hermana.', options: ['Tiene un hermana.', 'Tiene una hermana.', 'Tiene unos hermana.', 'Tiene unas hermana.'], concept_id: 'indefinite_articles', difficulty: 1 },
  // A1 — estar_basics
  { type: 'fill_blank', prompt: 'Complete: "¿Dónde ___ el baño?" (Where is the bathroom?)', word: 'estar', english: 'to be (location)', answer: 'está', concept_id: 'estar_basics', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I am tired.'", english: 'I am tired.', answer: 'Estoy cansado.', word: 'estar', concept_id: 'estar_basics', difficulty: 1 },
  // A1 — adjective_agreement
  { type: 'fill_blank', prompt: 'Complete: "Las casas son muy ___." (grande → agree with plural feminine)', word: 'grandes', english: 'big (plural)', answer: 'grandes', concept_id: 'adjective_agreement', difficulty: 1 },
  { type: 'error_correction', prompt: 'Correct: "Tengo una bolsa rojo."', word: 'rojo → roja', english: 'red (feminine)', answer: 'Tengo una bolsa roja.', concept_id: 'adjective_agreement', difficulty: 1 },
  // A1 — question_words
  { type: 'translation_to_spanish', prompt: "Translate: 'Where are you from?'", english: 'Where are you from?', answer: '¿De dónde eres?', word: 'dónde', concept_id: 'question_words', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which question word asks for a reason?', word: 'por qué', english: 'why', answer: '¿Por qué?', options: ['¿Cuándo?', '¿Cómo?', '¿Por qué?', '¿Quién?'], concept_id: 'question_words', difficulty: 1 },
  // A1 — hay
  { type: 'fill_blank', prompt: 'Complete: "___ un supermercado cerca de aquí." (There is…)', word: 'hay', english: 'there is/are', answer: 'Hay', concept_id: 'hay', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Are there any seats available?'", english: 'Are there any seats available?', answer: '¿Hay asientos disponibles?', word: 'hay', concept_id: 'hay', difficulty: 1 },
  // A1/A2 — numbers_21_100
  { type: 'translation_to_spanish', prompt: "Translate the number: 'forty-five'", english: 'forty-five', answer: 'cuarenta y cinco', word: 'cuarenta y cinco', concept_id: 'numbers_21_100', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'How do you say 72?', word: 'setenta y dos', english: 'seventy-two', answer: 'setenta y dos', options: ['setenta dos', 'siete y dos', 'setenta y dos', 'setentados'], concept_id: 'numbers_21_100', difficulty: 1 },
  // A1 — plural_nouns
  { type: 'fill_blank', prompt: 'Make it plural: "el lápiz" → "los ___"', word: 'lápices', english: 'pencils', answer: 'lápices', concept_id: 'plural_nouns', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'What is the plural of "el papel"?', word: 'papeles', english: 'papers', answer: 'los papeles', options: ['los papels', 'los papeles', 'las papeles', 'los papeles s'], concept_id: 'plural_nouns', difficulty: 1 },
  // A2 — ser_vs_estar
  { type: 'multiple_choice', prompt: 'Which is correct? "The café is on the corner."', word: 'estar (location)', english: 'to be (location)', answer: 'El café está en la esquina.', options: ['El café es en la esquina.', 'El café está en la esquina.', 'El café tiene en la esquina.', 'El café está a la esquina.'], concept_id: 'ser_vs_estar', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct if wrong: "La conferencia es en el hotel Ritz."', word: 'ser vs estar for events', english: 'Events use ser for location in Spanish', answer: 'La conferencia es en el hotel Ritz. (correct — events use ser)', concept_id: 'ser_vs_estar', difficulty: 2 },
  // A2 — direct_object_pronouns
  { type: 'fill_blank', prompt: 'Replace the object: "Veo a María todos los días." → "___ veo todos los días."', word: 'la', english: 'her (direct object)', answer: 'La', concept_id: 'direct_object_pronouns', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Lo como la manzana."', word: 'Lo → La', english: 'la manzana is feminine', answer: 'La como.', concept_id: 'direct_object_pronouns', difficulty: 2 },
  // A2 — indirect_object_pronouns
  { type: 'fill_blank', prompt: 'Complete: "Siempre ___ doy propina al camarero." (to him)', word: 'le', english: 'to him/her (indirect)', answer: 'le', concept_id: 'indirect_object_pronouns', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I am going to send them an email.'", english: 'I am going to send them an email.', answer: 'Les voy a enviar un correo.', word: 'les', concept_id: 'indirect_object_pronouns', difficulty: 2 },
  // A2 — demonstratives
  { type: 'fill_blank', prompt: 'Complete: "___ coches de allá son muy caros." (those over there, masc. pl.)', word: 'aquellos', english: 'those (far away, masc. pl.)', answer: 'Aquellos', concept_id: 'demonstratives', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which demonstrative refers to something near the listener?', word: 'ese/esa', english: 'that (near listener)', answer: 'ese/esa', options: ['este/esta', 'ese/esa', 'aquel/aquella', 'cualquier'], concept_id: 'demonstratives', difficulty: 2 },
  // A2 — possessives
  { type: 'fill_blank', prompt: 'Complete: "¿Es ___ libro?" (Is it your book? — tú, informal)', word: 'tu', english: 'your (informal)', answer: 'tu', concept_id: 'possessives', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which stressed possessive means "of theirs"?', word: 'suyo/a', english: 'theirs', answer: 'suyo/a', options: ['tuyo/a', 'mío/a', 'nuestro/a', 'suyo/a'], concept_id: 'possessives', difficulty: 2 },
  // A2 — modal_verbs
  { type: 'translation_to_spanish', prompt: "Translate: 'I can help you.'", english: 'I can help you.', answer: 'Puedo ayudarte.', word: 'poder', concept_id: 'modal_verbs', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which expresses ability to do something?', word: 'poder', english: 'can/to be able to', answer: 'Sé nadar.', options: ['Quiero nadar.', 'Sé nadar.', 'Tengo que nadar.', 'Debo nadar.'], concept_id: 'modal_verbs', difficulty: 2 },
  // A2 — obligation_infinitive
  { type: 'fill_blank', prompt: 'Complete: "___ que estudiar más." (You have to study more — tú)', word: 'tienes', english: 'tener que + infinitive', answer: 'Tienes', concept_id: 'obligation_infinitive', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'We have to leave now.'", english: 'We have to leave now.', answer: 'Tenemos que salir ahora.', word: 'tener que', concept_id: 'obligation_infinitive', difficulty: 1 },
  // A2 — time_expressions
  { type: 'translation_to_spanish', prompt: "Translate: 'I went to the cinema last week.'", english: 'I went to the cinema last week.', answer: 'Fui al cine la semana pasada.', word: 'la semana pasada', concept_id: 'time_expressions', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which means "the day before yesterday"?', word: 'anteayer', english: 'the day before yesterday', answer: 'anteayer', options: ['ayer', 'anteayer', 'antes de ayer tarde', 'antes de hoy'], concept_id: 'time_expressions', difficulty: 2 },
  // A2 — irregular_present
  { type: 'fill_blank', prompt: 'Complete: "¿A qué hora ___ (volver, ella) a casa normalmente?"', word: 'volver', english: 'to return (o→ue)', answer: 'vuelve', concept_id: 'irregular_present', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Yo sabo la respuesta."', word: 'sabo → sé', english: 'saber is irregular: yo sé', answer: 'Yo sé la respuesta.', concept_id: 'irregular_present', difficulty: 2 },
  // A2 — negation
  { type: 'fill_blank', prompt: 'Complete: "No quiero ___ café." (not… any / none)', word: 'ningún', english: 'no/none (before masc. noun)', answer: 'ningún', concept_id: 'negation', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I have never been to Peru.'", english: 'I have never been to Peru.', answer: 'Nunca he estado en Perú.', word: 'nunca', concept_id: 'negation', difficulty: 2 },
  // A2 — prepositions_basic
  { type: 'multiple_choice', prompt: 'Which preposition means "in front of"?', word: 'delante de', english: 'in front of', answer: 'delante de', options: ['detrás de', 'encima de', 'delante de', 'dentro de'], concept_id: 'prepositions_basic', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "La reunión es ___ las tres." (at — time)', word: 'a', english: 'at (time)', answer: 'a', concept_id: 'prepositions_basic', difficulty: 1 },
  // B1 — preterite_irregular
  { type: 'fill_blank', prompt: 'Complete: "El año pasado ___ (ir, yo) a México."', word: 'ir', english: 'to go (irregular preterite)', answer: 'fui', concept_id: 'preterite_irregular', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'What is the preterite yo form of "tener"?', word: 'tener', english: 'to have', answer: 'tuve', options: ['tení', 'tuví', 'tuve', 'tenué'], concept_id: 'preterite_irregular', difficulty: 2 },
  // B1 — imperfect
  { type: 'fill_blank', prompt: 'Complete: "Cuando era niño, ___ (jugar, yo) en el parque todos los días."', word: 'jugar', english: 'to play', answer: 'jugaba', concept_id: 'imperfect', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'She used to live in Barcelona.'", english: 'She used to live in Barcelona.', answer: 'Vivía en Barcelona.', word: 'vivir', concept_id: 'imperfect', difficulty: 2 },
  // B1 — preterite_vs_imperfect
  { type: 'multiple_choice', prompt: 'Which is correct? "While I was reading, the phone rang."', word: 'leía / sonó', english: 'imperfect (ongoing) + preterite (event)', answer: 'Mientras leía, sonó el teléfono.', options: ['Mientras leí, sonó el teléfono.', 'Mientras leía, sonó el teléfono.', 'Mientras leía, sonaba el teléfono.', 'Mientras leí, sonaba el teléfono.'], concept_id: 'preterite_vs_imperfect', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct if wrong: "De repente, llovía mucho."', word: 'llovía → llovió', english: 'sudden events use preterite', answer: 'De repente, llovió mucho.', concept_id: 'preterite_vs_imperfect', difficulty: 2 },
  // B1 — future_simple
  { type: 'fill_blank', prompt: 'Complete: "Mañana ___ (llamar, yo) a mis padres."', word: 'llamar', english: 'to call', answer: 'llamaré', concept_id: 'future_simple', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'They will arrive on Friday.'", english: 'They will arrive on Friday.', answer: 'Llegarán el viernes.', word: 'llegar', concept_id: 'future_simple', difficulty: 2 },
  // B1 — imperative
  { type: 'fill_blank', prompt: 'Complete (affirmative tú imperative): "___ (comer) más despacio."', word: 'comer', english: 'to eat', answer: 'Come', concept_id: 'imperative', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct (negative tú imperative): "No come eso."', word: 'come → comas', english: 'negative imperative uses subjunctive', answer: 'No comas eso.', concept_id: 'imperative', difficulty: 2 },
  // B1 — relative_clauses
  { type: 'fill_blank', prompt: 'Complete: "La película ___ vi anoche fue increíble." (that/which)', word: 'que', english: 'that/which (relative)', answer: 'que', concept_id: 'relative_clauses', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The woman who called you is my mother.'", english: 'The woman who called you is my mother.', answer: 'La mujer que te llamó es mi madre.', word: 'que', concept_id: 'relative_clauses', difficulty: 2 },
  // B2 — pluperfect
  { type: 'fill_blank', prompt: 'Complete: "Cuando llegué, ella ya se ___." (ir, pluperfect)', word: 'ir', english: 'to go', answer: 'había ido', concept_id: 'pluperfect', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I had never eaten sushi before that day.'", english: 'I had never eaten sushi before that day.', answer: 'Nunca había comido sushi antes de ese día.', word: 'haber', concept_id: 'pluperfect', difficulty: 3 },
  // B2 — future_perfect
  { type: 'fill_blank', prompt: 'Complete: "Para el lunes, ___ (terminar, nosotros) el proyecto." (future perfect)', word: 'terminar', english: 'to finish', answer: 'habremos terminado', concept_id: 'future_perfect', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'By next year, she will have finished her degree.'", english: 'By next year, she will have finished her degree.', answer: 'Para el año que viene, habrá terminado su carrera.', word: 'haber', concept_id: 'future_perfect', difficulty: 3 },
  // B2 — conditional_perfect
  { type: 'fill_blank', prompt: 'Complete: "Si hubiera sabido, ___ (venir, yo) antes." (conditional perfect)', word: 'venir', english: 'to come', answer: 'habría venido', concept_id: 'conditional_perfect', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'He would have called you.'", english: 'He would have called you.', answer: 'Te habría llamado.', word: 'llamar', concept_id: 'conditional_perfect', difficulty: 3 },
  // B2 — passive_se
  { type: 'fill_blank', prompt: 'Complete: "___ hablan tres idiomas en esta región." (passive se)', word: 'se', english: 'passive se', answer: 'Se', concept_id: 'passive_se', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Se construyeron el puente en 1990."', word: 'construyeron → construyó', english: 'passive se agrees with the subject (el puente = singular)', answer: 'Se construyó el puente en 1990.', concept_id: 'passive_se', difficulty: 3 },
  // B2 — subjunctive_adverbial
  { type: 'fill_blank', prompt: 'Complete: "Te llamo cuando ___ (llegar, yo) al aeropuerto." (future event)', word: 'llegar', english: 'to arrive', answer: 'llegue', concept_id: 'subjunctive_adverbial', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which conjunction always triggers subjunctive?', word: 'para que', english: 'so that', answer: 'para que', options: ['cuando', 'aunque', 'para que', 'porque'], concept_id: 'subjunctive_adverbial', difficulty: 3 },
  // B2 — ser_estar_participle
  { type: 'multiple_choice', prompt: '"La ventana está rota" vs "La ventana fue rota por el niño" — what is the difference?', word: 'estar vs ser + participle', english: 'estar = resulting state; ser = passive action', answer: 'Estar describes the resulting state; ser describes the action.', options: ['They mean the same thing.', 'Estar is more formal.', 'Estar describes the resulting state; ser describes the action.', 'Ser is used for adjectives only.'], concept_id: 'ser_estar_participle', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: "El documento ___ firmado por el director ayer." (was signed — action)', word: 'ser', english: 'to be (passive action)', answer: 'fue', concept_id: 'ser_estar_participle', difficulty: 3 },
  // B2 — diminutives_augmentatives
  { type: 'fill_blank', prompt: 'Form the diminutive of "perro" (little dog): "___"', word: '-ito/-ita', english: 'diminutive suffix', answer: 'perrito', concept_id: 'diminutives_augmentatives', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Ese hombre es un grandote"?', word: 'grandote', english: 'augmentative of grande', answer: 'That man is a huge/big fellow.', concept_id: 'diminutives_augmentatives', difficulty: 2 },
  // B2 — relative_pronouns_advanced
  { type: 'fill_blank', prompt: 'Complete: "El libro, ___ autor ganó el Nobel, es fascinante." (whose)', word: 'cuyo', english: 'whose (relative)', answer: 'cuyo', concept_id: 'relative_pronouns_advanced', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which relative pronoun is used after a preposition (formal)?', word: 'el cual / la cual', english: 'which/who (formal, after preposition)', answer: 'el cual / la cual', options: ['que', 'lo que', 'el cual / la cual', 'donde'], concept_id: 'relative_pronouns_advanced', difficulty: 3 },
  // C1 — subjunctive_adjective_clauses
  { type: 'fill_blank', prompt: 'Complete: "Busco un piso que ___ (tener) terraza." (hypothetical/non-specific)', word: 'tener', english: 'to have', answer: 'tenga', concept_id: 'subjunctive_adjective_clauses', difficulty: 3 },
  { type: 'error_correction', prompt: 'Correct if wrong: "Conozco a alguien que habla chino." (a specific known person)', word: 'subjunctive not needed — specific referent', english: 'known/specific antecedent → indicative', answer: 'Conozco a alguien que habla chino. (correct — specific referent uses indicative)', concept_id: 'subjunctive_adjective_clauses', difficulty: 3 },
  // C1 — gerund_advanced
  { type: 'translation_to_spanish', prompt: "Translate: 'Seeing you every day makes me happy.' (Spanish uses the infinitive, not a gerund, as the subject)", english: 'Seeing you every day makes me happy.', answer: 'Verte todos los días me alegra.', word: 'ver', concept_id: 'gerund_advanced', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which use of gerund is INCORRECT in Spanish?', word: 'gerund as adjective', english: 'gerund cannot modify a noun in Spanish', answer: '"Una caja conteniendo libros" (incorrect — use que contiene)', options: ['"Salió corriendo" (he left running)', '"Está lloviendo" (it is raining)', '"Una caja conteniendo libros" (incorrect — use que contiene)', '"Llegó cantando" (she arrived singing)'], concept_id: 'gerund_advanced', difficulty: 3 },
  // C1 — ser_passive
  { type: 'translation_to_spanish', prompt: "Translate: 'The law was approved by parliament.'", english: 'The law was approved by parliament.', answer: 'La ley fue aprobada por el parlamento.', word: 'ser', concept_id: 'ser_passive', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: "Los premios ___ entregados esta noche." (will be awarded — ser + participio)', word: 'ser', english: 'to be (passive)', answer: 'serán', concept_id: 'ser_passive', difficulty: 3 },
  // C1 — nominalisation
  { type: 'translation_to_english', prompt: '¿Qué significa "el llegar tarde" en "El llegar tarde es una falta de respeto"?', word: 'el + infinitivo', english: 'nominalised infinitive (arriving late)', answer: 'Arriving late is a sign of disrespect.', concept_id: 'nominalisation', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: "___ importante es la honestidad." (The important thing is…)', word: 'lo + adjective', english: 'lo + adjective = nominalised concept', answer: 'Lo', concept_id: 'nominalisation', difficulty: 3 },
  // C1 — subjunctive_temporal
  { type: 'fill_blank', prompt: 'Complete: "Avísame cuando ___ (terminar, tú) el informe." (future action)', word: 'terminar', english: 'to finish', answer: 'termines', concept_id: 'subjunctive_temporal', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly uses subjunctive after a temporal conjunction?', word: 'cuando + subjunctive (future)', english: 'temporal conjunction + future action → subjunctive', answer: 'Te llamo en cuanto llegue.', options: ['Te llamo en cuanto llegué.', 'Te llamo en cuanto llegaré.', 'Te llamo en cuanto llegue.', 'Te llamo en cuanto llego mañana.'], concept_id: 'subjunctive_temporal', difficulty: 3 },
  // C1 — cuantificadores
  { type: 'fill_blank', prompt: 'Complete: "___ de los estudiantes aprobaron." (The majority)', word: 'la mayoría', english: 'the majority', answer: 'La mayoría', concept_id: 'cuantificadores', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which quantifier expresses a small amount (uncountable)?', word: 'poco', english: 'little (uncountable)', answer: 'poco dinero', options: ['pocos dineros', 'poco dinero', 'algunos dinero', 'un poco dineros'], concept_id: 'cuantificadores', difficulty: 2 },
  // Extra fallbacks for thin concepts (second exercise for each)
  // A1 — ser_basics
  { type: 'translation_to_spanish', prompt: "Translate: 'He is a doctor.'", english: 'He is a doctor.', answer: 'Es médico.', word: 'ser', concept_id: 'ser_basics', difficulty: 1 },
  // A1 — present_ar
  { type: 'translation_to_spanish', prompt: "Translate: 'They work here every day.'", english: 'They work here every day.', answer: 'Trabajan aquí todos los días.', word: 'trabajar', concept_id: 'present_ar', difficulty: 2 },
  // A2 — reflexive_verbs
  { type: 'translation_to_spanish', prompt: "Translate: 'She gets up at seven every morning.'", english: 'She gets up at seven every morning.', answer: 'Se levanta a las siete todas las mañanas.', word: 'levantarse', concept_id: 'reflexive_verbs', difficulty: 2 },
  // A2 — gustar_type
  { type: 'translation_to_spanish', prompt: "Translate: 'Do you like this song?'", english: 'Do you like this song?', answer: '¿Te gusta esta canción?', word: 'gustar', concept_id: 'gustar_type', difficulty: 1 },
  // A2 — preterite_regular
  { type: 'fill_blank', prompt: 'Complete: "Ayer ellos ___ mucho en la reunión." (hablar)', word: 'hablar', english: 'to talk', answer: 'hablaron', concept_id: 'preterite_regular', difficulty: 2 },
  // A2 — present_progressive
  { type: 'fill_blank', prompt: 'Complete: "¿Qué ___ (hacer, tú) en este momento?"', word: 'hacer', english: 'to do', answer: 'estás haciendo', concept_id: 'present_progressive', difficulty: 2 },
  // A2 — near_future
  { type: 'multiple_choice', prompt: 'Which sentence expresses a near future plan?', word: 'ir a + infinitivo', english: 'going to (near future)', answer: 'Voy a llamar a mi madre.', options: ['Llamo a mi madre.', 'Voy a llamar a mi madre.', 'Llamaré a mi madre mañana.', 'Llamé a mi madre.'], concept_id: 'near_future', difficulty: 1 },
  // A2 — adverbs_formation
  { type: 'translation_to_spanish', prompt: "Translate: 'She sings beautifully.'", english: 'She sings beautifully.', answer: 'Canta bellamente.', word: 'bellamente', concept_id: 'adverbs_formation', difficulty: 2 },
  // B1 — acabar_de
  { type: 'fill_blank', prompt: 'Complete: "Ellos ___ cenar. No tienen hambre." (acabar de)', word: 'acabar de', english: 'to have just', answer: 'acaban de', concept_id: 'acabar_de', difficulty: 2 },
  // B1 — llevar_gerund
  { type: 'fill_blank', prompt: 'Complete: "¿Cuánto tiempo ___ (llevar, tú) esperando?"', word: 'llevar', english: 'to have been (duration)', answer: 'llevas', concept_id: 'llevar_gerund', difficulty: 2 },
  // B1 — conditional
  { type: 'translation_to_spanish', prompt: "Translate: 'I would buy the house if I could.'", english: 'I would buy the house if I could.', answer: 'Compraría la casa si pudiera.', word: 'comprar', concept_id: 'conditional', difficulty: 3 },
  // B1 — present_subjunctive
  { type: 'translation_to_spanish', prompt: "Translate: 'I hope you feel better soon.'", english: 'I hope you feel better soon.', answer: 'Espero que te mejores pronto.', word: 'mejorar', concept_id: 'present_subjunctive', difficulty: 3 },
  // B1 — por_vs_para
  { type: 'fill_blank', prompt: 'Complete: "Este regalo es ___ ti." (for you — recipient)', word: 'para', english: 'for (recipient)', answer: 'para', concept_id: 'por_vs_para', difficulty: 2 },
  // B2 — present_perfect
  { type: 'translation_to_spanish', prompt: "Translate: 'Have you ever been to Mexico?'", english: 'Have you ever been to Mexico?', answer: '¿Has estado alguna vez en México?', word: 'estar', concept_id: 'present_perfect', difficulty: 2 },
  // B2 — passive_voice
  { type: 'fill_blank', prompt: 'Complete: "Los libros ___ enviados ayer." (were sent — ser + participio)', word: 'ser', english: 'to be (passive)', answer: 'fueron', concept_id: 'passive_voice', difficulty: 3 },
  // B2 — imperfect_subjunctive
  { type: 'translation_to_spanish', prompt: "Translate: 'I wanted you to come with us.'", english: 'I wanted you to come with us.', answer: 'Quería que vinieras con nosotros.', word: 'venir', concept_id: 'imperfect_subjunctive', difficulty: 3 },
  // B2 — si_clauses (type 1 — open condition)
  { type: 'fill_blank', prompt: 'Complete: "Si ___ (tener, tú) tiempo mañana, llámame." (open condition — present)', word: 'tener', english: 'to have', answer: 'tienes', concept_id: 'si_clauses', difficulty: 2 },
  // B2 — comparatives
  { type: 'fill_blank', prompt: 'Complete: "Este libro es ___ largo que el otro." (longer)', word: 'más', english: 'more (comparative)', answer: 'más', concept_id: 'comparatives', difficulty: 1 },
  // C1 — subjunctive_noun_clauses
  { type: 'fill_blank', prompt: 'Complete: "Es importante que ___ (estudiar, tú) cada día."', word: 'estudiar', english: 'to study', answer: 'estudies', concept_id: 'subjunctive_noun_clauses', difficulty: 3 },
  // C1 — estilo_indirecto
  { type: 'translation_to_spanish', prompt: "Translate: 'She told me she was tired.'", english: 'She told me she was tired.', answer: 'Me dijo que estaba cansada.', word: 'decir', concept_id: 'estilo_indirecto', difficulty: 3 },
  // C1 — futuro_probabilidad
  { type: 'fill_blank', prompt: 'Complete: "No sé dónde está — ___ (estar) en el trabajo." (probability guess)', word: 'estar', english: 'to be', answer: 'estará', concept_id: 'futuro_probabilidad', difficulty: 3 },

  // ── 3rd fallbacks for all concepts that had exactly 2 ──────────────────
  // A1 — noun_gender
  { type: 'fill_blank', prompt: 'Add the correct article: "___ agua" — masculine or feminine?', word: 'el agua', english: 'water (feminine noun, but takes el in singular)', answer: 'el', concept_id: 'noun_gender', difficulty: 2 },
  // A1 — ser_basics
  { type: 'error_correction', prompt: 'Correct if wrong: "Nosotros somos estudiantes."', word: 'ser (nosotros)', english: 'we are', answer: 'Nosotros somos estudiantes. (correct)', concept_id: 'ser_basics', difficulty: 1 },
  // A1 — present_ar
  { type: 'multiple_choice', prompt: 'What is the correct form of "hablar" for vosotros?', word: 'hablar', english: 'to speak (vosotros)', answer: 'habláis', options: ['hablás', 'habláis', 'hableis', 'hablan'], concept_id: 'present_ar', difficulty: 2 },
  // A1 — present_er_ir
  { type: 'translation_to_spanish', prompt: "Translate: 'We write every day.'", english: 'We write every day.', answer: 'Escribimos todos los días.', word: 'escribir', concept_id: 'present_er_ir', difficulty: 2 },
  // A2 — reflexive_verbs
  { type: 'multiple_choice', prompt: 'Which reflexive pronoun goes with "nosotros"?', word: 'nos', english: 'ourselves', answer: 'nos', options: ['se', 'os', 'nos', 'me'], concept_id: 'reflexive_verbs', difficulty: 1 },
  // A1 — numbers_1_20
  { type: 'translation_to_spanish', prompt: "Translate the number: 'seventeen'", english: 'seventeen', answer: 'diecisiete', word: 'diecisiete', concept_id: 'numbers_1_20', difficulty: 1 },
  // A1 — subject_pronouns
  { type: 'fill_blank', prompt: 'Complete: "___ (you, formal singular) habla muy bien."', word: 'usted', english: 'you (formal)', answer: 'Usted', concept_id: 'subject_pronouns', difficulty: 1 },
  // A1 — definite_articles
  { type: 'translation_to_spanish', prompt: "Translate: 'the windows' (las ventanas)", english: 'the windows', answer: 'las ventanas', word: 'las', concept_id: 'definite_articles', difficulty: 1 },
  // A1 — indefinite_articles
  { type: 'error_correction', prompt: 'Correct: "Quiero un pizza."', word: 'un → una', english: 'pizza is feminine', answer: 'Quiero una pizza.', concept_id: 'indefinite_articles', difficulty: 1 },
  // A1 — estar_basics
  { type: 'fill_blank', prompt: 'Complete: "Los niños ___ en el parque." (location)', word: 'estar', english: 'to be (location)', answer: 'están', concept_id: 'estar_basics', difficulty: 1 },
  // A1 — adjective_agreement
  { type: 'translation_to_spanish', prompt: "Translate: 'She has a new white car.'", english: 'She has a new white car.', answer: 'Tiene un coche nuevo y blanco.', word: 'nuevo/blanco', concept_id: 'adjective_agreement', difficulty: 2 },
  // A1 — question_words
  { type: 'fill_blank', prompt: 'Complete: "¿___ comes por la noche?" (When do you eat dinner?)', word: 'cuándo', english: 'when', answer: 'Cuándo', concept_id: 'question_words', difficulty: 1 },
  // A1 — hay
  { type: 'error_correction', prompt: 'Correct: "Están tres personas en la sala." (use hay for indefinite)', word: 'Están → Hay', english: 'hay for indefinite "there are"', answer: 'Hay tres personas en la sala.', concept_id: 'hay', difficulty: 1 },
  // A1/A2 — numbers_21_100
  { type: 'fill_blank', prompt: 'Complete: "Tengo ___ años." (99 years old)', word: 'noventa y nueve', english: 'ninety-nine', answer: 'noventa y nueve', concept_id: 'numbers_21_100', difficulty: 1 },
  // A2 — ser_vs_estar
  { type: 'translation_to_spanish', prompt: "Translate: 'The soup is cold.' (temporary state)", english: 'The soup is cold. (temporary state)', answer: 'La sopa está fría.', word: 'estar', concept_id: 'ser_vs_estar', difficulty: 2 },
  // A2 — direct_object_pronouns
  { type: 'translation_to_spanish', prompt: "Translate: 'He reads it every morning.' (lo = el periódico)", english: 'He reads it every morning.', answer: 'Lo lee todas las mañanas.', word: 'lo', concept_id: 'direct_object_pronouns', difficulty: 2 },
  // A2 — indirect_object_pronouns
  { type: 'error_correction', prompt: 'Make more concise (remove the redundant emphasis): "¿Me puedes prestar a mí el libro?"', word: 'drop "a mí" — le/me already covers it', english: 'indirect object pronoun replaces the phrase; "a mí" is optional emphasis, not required', answer: '¿Me puedes prestar el libro?', concept_id: 'indirect_object_pronouns', difficulty: 2 },
  // A2 — demonstratives
  { type: 'translation_to_spanish', prompt: "Translate: 'I prefer those shoes (close to listener).'", english: 'I prefer those shoes (close to listener).', answer: 'Prefiero esos zapatos.', word: 'esos', concept_id: 'demonstratives', difficulty: 2 },
  // A2 — possessives
  { type: 'translation_to_english', prompt: '¿Qué significa "Es un amigo mío"?', word: 'mío', english: 'mine (stressed possessive)', answer: 'He is a friend of mine.', concept_id: 'possessives', difficulty: 2 },
  // A2 — preterite_regular
  { type: 'translation_to_spanish', prompt: "Translate: 'We ate at a nice restaurant last night.'", english: 'We ate at a nice restaurant last night.', answer: 'Comimos en un restaurante bonito anoche.', word: 'comer', concept_id: 'preterite_regular', difficulty: 2 },
  // A2 — modal_verbs
  { type: 'fill_blank', prompt: 'Complete: "Deberías ___ más agua." (drink — tú, advice)', word: 'beber', english: 'to drink', answer: 'beber', concept_id: 'modal_verbs', difficulty: 2 },
  // A2 — obligation_infinitive
  { type: 'fill_blank', prompt: 'Complete: "___ que reservar mesa — el restaurante está lleno." (one must)', word: 'hay', english: 'hay que = one must (impersonal)', answer: 'Hay', concept_id: 'obligation_infinitive', difficulty: 1 },
  // A2 — time_expressions
  { type: 'fill_blank', prompt: 'Complete: "Vivo aquí ___ tres años." (for three years — present state)', word: 'desde hace', english: 'desde hace + time (how long)', answer: 'desde hace', concept_id: 'time_expressions', difficulty: 2 },
  // A2 — present_progressive
  { type: 'translation_to_spanish', prompt: "Translate: 'They are watching a film right now.'", english: 'They are watching a film right now.', answer: 'Están viendo una película ahora mismo.', word: 'ver', concept_id: 'present_progressive', difficulty: 2 },
  // A2 — irregular_present
  { type: 'fill_blank', prompt: 'Complete: "Yo ___ (pedir) siempre el menú del día." (e→i stem-change)', word: 'pedir', english: 'to order/ask for (e→i)', answer: 'pido', concept_id: 'irregular_present', difficulty: 2 },
  // A2 — negation
  { type: 'error_correction', prompt: 'Correct: "No vi a nadie no."', word: 'Remove second "no" — double negation before verb is wrong', english: 'nadie alone is sufficient after "no"', answer: 'No vi a nadie.', concept_id: 'negation', difficulty: 2 },
  // A2 — prepositions_basic
  { type: 'translation_to_spanish', prompt: "Translate: 'The bank is next to the post office.'", english: 'The bank is next to the post office.', answer: 'El banco está al lado de la oficina de correos.', word: 'al lado de', concept_id: 'prepositions_basic', difficulty: 1 },
  // A2 — near_future
  { type: 'error_correction', prompt: 'Correct: "Voy estudiar esta noche."', word: 'Voy → Voy a', english: 'ir a + infinitive requires "a"', answer: 'Voy a estudiar esta noche.', concept_id: 'near_future', difficulty: 1 },
  // A2 — gustar_type
  { type: 'fill_blank', prompt: 'Complete: "A mis padres les ___ el fútbol." (encantar)', word: 'encantar', english: 'to love (gustar-type)', answer: 'encanta', concept_id: 'gustar_type', difficulty: 2 },
  // A2 — adverbs_formation
  { type: 'error_correction', prompt: 'Correct the adverb (formal register): "Habla muy rápido."', word: 'rápido → rápidamente', english: 'manner adverbs from adjectives add -mente', answer: 'Habla muy rápidamente.', concept_id: 'adverbs_formation', difficulty: 2 },
  // B1 — acabar_de
  { type: 'translation_to_english', prompt: '¿Qué significa "Acabo de ver una película estupenda"?', word: 'acabar de', english: 'to have just', answer: 'I have just seen a great film.', concept_id: 'acabar_de', difficulty: 2 },
  // B1 — llevar_gerund
  { type: 'translation_to_spanish', prompt: "Translate: 'She has been working here for five years.'", english: 'She has been working here for five years.', answer: 'Lleva cinco años trabajando aquí.', word: 'llevar', concept_id: 'llevar_gerund', difficulty: 2 },
  // B1 — preterite_irregular
  { type: 'fill_blank', prompt: 'Complete: "¿Qué ___ (hacer, tú) el fin de semana pasado?"', word: 'hacer', english: 'to do (irregular preterite: hizo/hiciste)', answer: 'hiciste', concept_id: 'preterite_irregular', difficulty: 2 },
  // B1 — imperfect
  { type: 'fill_blank', prompt: 'Complete: "Mi abuela ___ (ser) maestra antes de jubilarse."', word: 'ser', english: 'to be (imperfect: era)', answer: 'era', concept_id: 'imperfect', difficulty: 2 },
  // B1 — preterite_vs_imperfect
  { type: 'translation_to_spanish', prompt: "Translate: 'I was reading when she arrived.'", english: 'I was reading when she arrived.', answer: 'Estaba leyendo cuando ella llegó.', word: 'leer / llegar', concept_id: 'preterite_vs_imperfect', difficulty: 2 },
  // B1 — future_simple
  { type: 'fill_blank', prompt: 'Complete: "Ella ___ (tener) que estudiar más." (irregular future)', word: 'tener', english: 'to have (irregular future: tendrá)', answer: 'tendrá', concept_id: 'future_simple', difficulty: 3 },
  // B1 — conditional
  { type: 'fill_blank', prompt: 'Complete: "¿___ (saber, tú) la respuesta si lo hubiera explicado?" (conditional)', word: 'saber', english: 'to know (conditional: sabrías)', answer: 'Sabrías', concept_id: 'conditional', difficulty: 3 },
  // B1 — present_subjunctive
  { type: 'fill_blank', prompt: 'Complete: "Es necesario que ___ (ser, ella) más puntual."', word: 'ser', english: 'to be (subjunctive: sea)', answer: 'sea', concept_id: 'present_subjunctive', difficulty: 3 },
  // B1 — imperative
  { type: 'fill_blank', prompt: 'Complete (nosotros command): "___ (comer) juntos esta noche."', word: 'comer', english: 'to eat (nosotros imperative)', answer: 'Comamos', concept_id: 'imperative', difficulty: 2 },
  // B1 — por_vs_para
  { type: 'error_correction', prompt: 'Correct if wrong: "Estudia para aprobar el examen."', word: 'para = purpose', english: 'purpose/goal uses para', answer: 'Estudia para aprobar el examen. (correct)', concept_id: 'por_vs_para', difficulty: 2 },
  // B1 — relative_clauses
  { type: 'fill_blank', prompt: 'Complete: "El pueblo ___ nací tiene doscientos años." (where)', word: 'donde', english: 'where (relative adverb)', answer: 'donde', concept_id: 'relative_clauses', difficulty: 2 },
  // B1 — object_pronoun_order
  { type: 'translation_to_spanish', prompt: "Translate: 'He explained it to her.' (use double object pronouns)", english: 'He explained it to her.', answer: 'Se lo explicó.', word: 'se/lo', concept_id: 'object_pronoun_order', difficulty: 3 },
  // B1 — se_impersonal
  { type: 'fill_blank', prompt: 'Complete with impersonal se: "___ dice que va a llover." (it is said / they say)', word: 'se', english: 'impersonal se', answer: 'Se', concept_id: 'se_impersonal', difficulty: 2 },
  // B1 — infinitive_vs_subjunctive
  { type: 'fill_blank', prompt: 'Complete (same subject → infinitive): "Quiero ___ más tiempo libre." (tener)', word: 'tener', english: 'to have (same subject → infinitive)', answer: 'tener', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
  // B1 — exclamativas
  { type: 'fill_blank', prompt: 'Complete: "¡___ ruido hacen!" (What a lot of noise!)', word: 'cuánto', english: 'how much/what a lot of', answer: 'Cuánto', concept_id: 'exclamativas', difficulty: 2 },
  // B2 — present_perfect
  { type: 'error_correction', prompt: 'Correct (Spain usage): "Esta mañana me levanté muy tarde."', word: 'levanté → he levantado', english: 'Spain uses present perfect for same-day events', answer: 'Esta mañana me he levantado muy tarde. (Spain)', concept_id: 'present_perfect', difficulty: 3 },
  // B2 — pluperfect
  { type: 'fill_blank', prompt: 'Complete: "Cuando llegamos al teatro, la función ya ___ (empezar)."', word: 'empezar', english: 'to start (pluperfect: había empezado)', answer: 'había empezado', concept_id: 'pluperfect', difficulty: 3 },
  // B2 — future_perfect
  { type: 'error_correction', prompt: 'Correct: "Para mañana, yo habré terminado el informe." — is this correct?', word: 'future perfect', english: 'future perfect for an action completed before a future reference point', answer: 'Para mañana, yo habré terminado el informe. (correct)', concept_id: 'future_perfect', difficulty: 3 },
  // B2 — conditional_perfect
  { type: 'fill_blank', prompt: 'Complete: "Ella ___ (venir) si se lo hubieras pedido." (conditional perfect)', word: 'venir', english: 'to come (conditional perfect: habría venido)', answer: 'habría venido', concept_id: 'conditional_perfect', difficulty: 3 },
  // B2 — passive_voice
  { type: 'fill_blank', prompt: 'Complete: "El contrato ___ firmado por ambas partes." (was signed — passive)', word: 'ser', english: 'to be (passive: fue)', answer: 'fue', concept_id: 'passive_voice', difficulty: 3 },
  // B2 — passive_se
  { type: 'translation_to_spanish', prompt: "Translate: 'Rooms for rent here.' (use passive se)", english: 'Rooms for rent here.', answer: 'Se alquilan habitaciones aquí.', word: 'alquilar', concept_id: 'passive_se', difficulty: 2 },
  // B2 — imperfect_subjunctive
  { type: 'fill_blank', prompt: 'Complete: "Ojalá ___ (llover) menos." (I wish it rained less)', word: 'llover', english: 'to rain (imperfect subjunctive: lloviera)', answer: 'lloviera', concept_id: 'imperfect_subjunctive', difficulty: 3 },
  // B2 — si_clauses
  { type: 'error_correction', prompt: 'Correct: "Si tendría tiempo, te ayudaría."', word: 'tendría → tuviera', english: 'si + Type 2 condition always uses imperfect subjunctive, not conditional', answer: 'Si tuviera tiempo, te ayudaría.', concept_id: 'si_clauses', difficulty: 3 },
  // B2 — subjunctive_adverbial
  { type: 'fill_blank', prompt: 'Complete: "Aunque ___ cansado, seguiré trabajando." (even if — hypothetical)', word: 'estar', english: 'to be (subjunctive: esté)', answer: 'esté', concept_id: 'subjunctive_adverbial', difficulty: 3 },
  // B2 — comparatives
  { type: 'fill_blank', prompt: 'Complete: "Este hotel es ___ que el otro." (worse — irregular)', word: 'peor', english: 'worse (irregular comparative of malo)', answer: 'peor', concept_id: 'comparatives', difficulty: 2 },
  // B2 — ser_estar_participle
  { type: 'translation_to_spanish', prompt: "Translate: 'The shop was already closed when I arrived.' (resulting state)", english: 'The shop was already closed when I arrived.', answer: 'La tienda ya estaba cerrada cuando llegué.', word: 'estar cerrado', concept_id: 'ser_estar_participle', difficulty: 3 },
  // B2 — diminutives_augmentatives
  { type: 'fill_blank', prompt: 'Form the affectionate diminutive of "abuela" (little/dear grandma):', word: '-ita', english: 'diminutive suffix -ita', answer: 'abuelita', concept_id: 'diminutives_augmentatives', difficulty: 2 },
  // B2 — relative_pronouns_advanced
  { type: 'fill_blank', prompt: 'Complete: "No llegó, ___ cual me preocupó mucho." (lo cual = which — referring to whole clause)', word: 'lo', english: 'lo cual = "which" (referring to whole clause)', answer: 'lo', concept_id: 'relative_pronouns_advanced', difficulty: 3 },
  // C1 — subjunctive_noun_clauses
  { type: 'error_correction', prompt: 'Correct if wrong: "Es evidente que Juan sabe la verdad."', word: 'indicative after es evidente que', english: 'factual assertion → indicative, not subjunctive', answer: 'Es evidente que Juan sabe la verdad. (correct — indicative after factual assertion)', concept_id: 'subjunctive_noun_clauses', difficulty: 3 },
  // C1 — subjunctive_adjective_clauses
  { type: 'fill_blank', prompt: 'Complete: "No hay nadie que ___ (saber) hacerlo." (no known referent)', word: 'saber', english: 'to know (subjunctive: sepa)', answer: 'sepa', concept_id: 'subjunctive_adjective_clauses', difficulty: 3 },
  // C1 — gerund_advanced
  { type: 'fill_blank', prompt: 'Complete (gerund of manner): "Salió ___ (cantar) de la ducha." (singing)', word: 'cantar', english: 'to sing (gerund as manner)', answer: 'cantando', concept_id: 'gerund_advanced', difficulty: 2 },
  // C1 — ser_passive
  { type: 'translation_to_english', prompt: '¿Qué significa "El libro fue escrito por Cervantes"?', word: 'ser + participio', english: 'passive voice', answer: 'The book was written by Cervantes.', concept_id: 'ser_passive', difficulty: 2 },
  // C1 — estilo_indirecto
  { type: 'fill_blank', prompt: 'Complete (indirect speech): "Dijo que ___ (estar, él) cansado." (backshift: estaba)', word: 'estar', english: 'to be (backshifted: estaba)', answer: 'estaba', concept_id: 'estilo_indirecto', difficulty: 3 },
  // C1 — nominalisation
  { type: 'translation_to_spanish', prompt: "Translate: 'The difficulty lies in finding the right words.'", english: 'The difficulty lies in finding the right words.', answer: 'La dificultad radica en encontrar las palabras adecuadas.', word: 'infinitivo nominal', concept_id: 'nominalisation', difficulty: 3 },
  // C1 — subjunctive_temporal
  { type: 'error_correction', prompt: 'Correct: "Te llamo cuando llegaré." (future time clause)', word: 'llegaré → llegue', english: 'future time clauses use subjunctive in Spanish', answer: 'Te llamo cuando llegue.', concept_id: 'subjunctive_temporal', difficulty: 3 },
  // C1 — cuantificadores
  { type: 'fill_blank', prompt: 'Complete: "Han venido ___ de cincuenta personas." (more than)', word: 'más de', english: 'more than (before a number)', answer: 'más de', concept_id: 'cuantificadores', difficulty: 2 },
  // C1 — futuro_probabilidad
  { type: 'translation_to_spanish', prompt: "Translate: 'He must be about forty years old.' (probability — future)", english: 'He must be about forty years old.', answer: 'Tendrá unos cuarenta años.', word: 'tener', concept_id: 'futuro_probabilidad', difficulty: 3 },
  // C1 — condicional_probabilidad
  { type: 'translation_to_spanish', prompt: "Translate: 'She must have been about twenty when it happened.' (past probability — conditional)", english: 'She must have been about twenty when it happened.', answer: 'Tendría unos veinte años cuando ocurrió.', word: 'tener', concept_id: 'condicional_probabilidad', difficulty: 3 },
  // C1 — perifraseis_avanzadas
  { type: 'fill_blank', prompt: 'Complete: "Dejó ___ fumar hace un año." (stopped smoking)', word: 'dejar de', english: 'dejar de + infinitive = to stop doing', answer: 'de', concept_id: 'perifraseis_avanzadas', difficulty: 2 },

  // ── Extended fallback pool: 3 additional exercises per concept ──────────────
  // A1 — greeting_basics
  { type: 'multiple_choice', prompt: 'What does "buenas noches" mean?', word: 'buenas noches', english: 'good night', answer: 'good night', options: ['good afternoon', 'good night', 'good morning', 'goodbye'], concept_id: 'greeting_basics', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "Mucho ___." (Nice to meet you)', word: 'gusto', english: 'pleasure / nice to meet you', answer: 'gusto', concept_id: 'greeting_basics', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'See you tomorrow.'", english: 'See you tomorrow.', answer: 'Hasta mañana.', word: 'hasta mañana', concept_id: 'greeting_basics', difficulty: 1 },
  // A1 — numbers_1_20
  { type: 'translation_to_spanish', prompt: "Translate the number: 'eight'", english: 'eight', answer: 'ocho', word: 'ocho', concept_id: 'numbers_1_20', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which is the correct spelling of 19?', word: 'diecinueve', english: 'nineteen', answer: 'diecinueve', options: ['diez y nueve', 'diecinueve', 'decinueve', 'diecinuevo'], concept_id: 'numbers_1_20', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "Tengo ___ años." (I am eleven years old)', word: 'once', english: 'eleven', answer: 'once', concept_id: 'numbers_1_20', difficulty: 1 },
  // A1 — subject_pronouns
  { type: 'fill_blank', prompt: 'Complete: "___ (I) soy de Colombia."', word: 'yo', english: 'I', answer: 'Yo', concept_id: 'subject_pronouns', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'You all (informal, Spain) are welcome.'", english: 'You all (informal, Spain) are welcome.', answer: 'Vosotros sois bienvenidos.', word: 'vosotros', concept_id: 'subject_pronouns', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which pronoun means "she"?', word: 'ella', english: 'she', answer: 'ella', options: ['él', 'ella', 'ellos', 'usted'], concept_id: 'subject_pronouns', difficulty: 1 },
  // A1 — noun_gender
  { type: 'multiple_choice', prompt: 'Which article goes with "problema" (masculine despite the -a ending)?', word: 'el problema', english: 'the problem (masculine)', answer: 'el problema', options: ['la problema', 'el problema', 'las problema', 'uno problema'], concept_id: 'noun_gender', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "___ mano es pequeña." (feminine noun, despite the -o ending)', word: 'la mano', english: 'hand (feminine)', answer: 'La', concept_id: 'noun_gender', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'the map' (masculine, despite the -a ending)", english: 'the map', answer: 'el mapa', word: 'el mapa', concept_id: 'noun_gender', difficulty: 1 },
  // A1 — definite_articles
  { type: 'fill_blank', prompt: 'Complete: "___ chico es alto." (the boy)', word: 'el', english: 'the (masc.)', answer: 'El', concept_id: 'definite_articles', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which is correct? "the hands" (feminine plural)', word: 'las manos', english: 'the hands', answer: 'las manos', options: ['los manos', 'las manos', 'la manos', 'el manos'], concept_id: 'definite_articles', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'the water' (uses el even though agua is feminine)", english: 'the water', answer: 'el agua', word: 'el agua', concept_id: 'definite_articles', difficulty: 2 },
  // A1 — indefinite_articles
  { type: 'fill_blank', prompt: 'Complete: "Hay ___ problema." (a problem, masc.)', word: 'un', english: 'a (masc.)', answer: 'un', concept_id: 'indefinite_articles', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which is correct? "some apples" (fem. plural)', word: 'unas manzanas', english: 'some apples', answer: 'unas manzanas', options: ['unos manzanas', 'unas manzanas', 'uno manzanas', 'un manzanas'], concept_id: 'indefinite_articles', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I need a pencil.'", english: 'I need a pencil.', answer: 'Necesito un lápiz.', word: 'un lápiz', concept_id: 'indefinite_articles', difficulty: 1 },
  // A1 — ser_basics
  { type: 'multiple_choice', prompt: 'Which is the correct "ser" form for "tú"?', word: 'ser', english: 'to be (tú)', answer: 'eres', options: ['es', 'eres', 'soy', 'son'], concept_id: 'ser_basics', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "Vosotros ___ amigos." (ser)', word: 'ser', english: 'to be (vosotros)', answer: 'sois', concept_id: 'ser_basics', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'They are engineers.'", english: 'They are engineers.', answer: 'Son ingenieros.', word: 'ser', concept_id: 'ser_basics', difficulty: 1 },
  // A1 — estar_basics
  { type: 'multiple_choice', prompt: 'Which form of "estar" completes "Yo ___ en casa"?', word: 'estar', english: 'to be (location)', answer: 'estoy', options: ['estoy', 'eres', 'está', 'son'], concept_id: 'estar_basics', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "Nosotros ___ muy ocupados hoy." (estar)', word: 'estar', english: 'to be (temporary state)', answer: 'estamos', concept_id: 'estar_basics', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'You (tú) are in the kitchen.'", english: 'You are in the kitchen.', answer: 'Estás en la cocina.', word: 'estar', concept_id: 'estar_basics', difficulty: 1 },
  // A1 — present_ar
  { type: 'fill_blank', prompt: 'Complete: "Ellos ___ música todos los días. (escuchar)"', word: 'escuchar', english: 'to listen', answer: 'escuchan', concept_id: 'present_ar', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I cook dinner every night.'", english: 'I cook dinner every night.', answer: 'Cocino la cena todas las noches.', word: 'cocinar', concept_id: 'present_ar', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Ella hablo inglés."', word: 'hablo → habla', english: 'she speaks (3rd person -ar ending)', answer: 'Ella habla inglés.', concept_id: 'present_ar', difficulty: 1 },
  // A1 — present_er_ir
  { type: 'fill_blank', prompt: 'Complete: "Nosotros ___ (leer) el periódico por la mañana."', word: 'leer', english: 'to read', answer: 'leemos', concept_id: 'present_er_ir', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'They live in a small apartment.'", english: 'They live in a small apartment.', answer: 'Viven en un apartamento pequeño.', word: 'vivir', concept_id: 'present_er_ir', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Ellos vive juntos."', word: 'vive → viven', english: 'they live (plural conjugation)', answer: 'Ellos viven juntos.', concept_id: 'present_er_ir', difficulty: 1 },
  // A1 — adjective_agreement
  { type: 'fill_blank', prompt: 'Complete: "Los coches son muy ___." (rápido → agree masc. plural)', word: 'rápidos', english: 'fast (masc. pl.)', answer: 'rápidos', concept_id: 'adjective_agreement', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which is correct? "The girls are happy."', word: 'felices', english: 'happy (plural)', answer: 'Las chicas están felices.', options: ['Las chicas están feliz.', 'Las chicas están felices.', 'Las chicas está felices.', 'Los chicas están felices.'], concept_id: 'adjective_agreement', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I have two small dogs.'", english: 'I have two small dogs.', answer: 'Tengo dos perros pequeños.', word: 'pequeños', concept_id: 'adjective_agreement', difficulty: 1 },
  // A1 — question_words
  { type: 'fill_blank', prompt: 'Complete: "¿___ cuesta esta camisa?" (How much)', word: 'cuánto', english: 'how much', answer: 'Cuánto', concept_id: 'question_words', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which question word asks "who"?', word: 'quién', english: 'who', answer: '¿Quién?', options: ['¿Qué?', '¿Quién?', '¿Cuál?', '¿Dónde?'], concept_id: 'question_words', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'What is your name?'", english: 'What is your name?', answer: '¿Cómo te llamas?', word: 'cómo', concept_id: 'question_words', difficulty: 1 },
  // A1 — hay
  { type: 'multiple_choice', prompt: 'Which sentence correctly uses "hay"?', word: 'hay', english: 'there is/are', answer: 'Hay muchos libros en la mesa.', options: ['Es muchos libros en la mesa.', 'Hay muchos libros en la mesa.', 'Está muchos libros en la mesa.', 'Son muchos libros en la mesa.'], concept_id: 'hay', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "No ___ leche en la nevera." (there isn\'t)', word: 'hay', english: 'there is/are (negative)', answer: 'hay', concept_id: 'hay', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'There are twenty students in the class.'", english: 'There are twenty students in the class.', answer: 'Hay veinte estudiantes en la clase.', word: 'hay', concept_id: 'hay', difficulty: 1 },
  // A1/A2 — numbers_21_100
  { type: 'translation_to_spanish', prompt: "Translate the number: 'sixty-three'", english: 'sixty-three', answer: 'sesenta y tres', word: 'sesenta y tres', concept_id: 'numbers_21_100', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'How do you say 100?', word: 'cien', english: 'one hundred', answer: 'cien', options: ['ciento', 'cien', 'cientos', 'una cien'], concept_id: 'numbers_21_100', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "Hay ___ personas en la fiesta." (thirty-one)', word: 'treinta y uno', english: 'thirty-one', answer: 'treinta y una', concept_id: 'numbers_21_100', difficulty: 1 },

  // A2 — ser_vs_estar
  { type: 'fill_blank', prompt: 'Complete: "Mi hermano ___ médico." (permanent profession)', word: 'ser', english: 'to be (profession)', answer: 'es', concept_id: 'ser_vs_estar', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which is correct? "I am happy today." (temporary feeling)', word: 'estar (feeling)', english: 'to be (temporary feeling)', answer: 'Estoy feliz hoy.', options: ['Soy feliz hoy.', 'Estoy feliz hoy.', 'Está feliz hoy.', 'Es feliz hoy.'], concept_id: 'ser_vs_estar', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The party is at my house.' (event location)", english: 'The party is at my house.', answer: 'La fiesta es en mi casa.', word: 'ser', concept_id: 'ser_vs_estar', difficulty: 2 },
  // A2 — reflexive_verbs
  { type: 'fill_blank', prompt: 'Complete: "Yo ___ (ducharse) antes de desayunar."', word: 'ducharse', english: 'to shower', answer: 'me ducho', concept_id: 'reflexive_verbs', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'They go to bed at eleven.'", english: 'They go to bed at eleven.', answer: 'Se acuestan a las once.', word: 'acostarse', concept_id: 'reflexive_verbs', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Yo lavo las manos."', word: 'lavo → me lavo', english: 'to wash oneself (reflexive)', answer: 'Yo me lavo las manos.', concept_id: 'reflexive_verbs', difficulty: 2 },
  // A2 — gustar_type
  { type: 'multiple_choice', prompt: 'Which is correct? "We like the beach."', word: 'gustar', english: 'to like', answer: 'Nos gusta la playa.', options: ['Nos gustamos la playa.', 'Nos gusta la playa.', 'Nos gustan la playa.', 'Gustamos la playa.'], concept_id: 'gustar_type', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'It bothers me when people are late.'", english: 'It bothers me when people are late.', answer: 'Me molesta cuando la gente llega tarde.', word: 'molestar', concept_id: 'gustar_type', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "A ti te ___ los deportes, ¿verdad?" (interesar)', word: 'interesar', english: 'to interest', answer: 'interesan', concept_id: 'gustar_type', difficulty: 2 },
  // A2 — direct_object_pronouns
  { type: 'fill_blank', prompt: 'Complete: "¿Tienes las llaves? Sí, ___ tengo."', word: 'las', english: 'them (fem. direct object)', answer: 'las', concept_id: 'direct_object_pronouns', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly replaces "el libro"?', word: 'lo', english: 'it (masc. direct object)', answer: 'Lo leí ayer.', options: ['La leí ayer.', 'Lo leí ayer.', 'Le leí ayer.', 'Los leí ayer.'], concept_id: 'direct_object_pronouns', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I don't know him.'", english: "I don't know him.", answer: 'No lo conozco.', word: 'lo', concept_id: 'direct_object_pronouns', difficulty: 2 },
  // A2 — indirect_object_pronouns
  { type: 'fill_blank', prompt: 'Complete: "¿Qué ___ vas a regalar a tu madre?" (to her)', word: 'le', english: 'to her (indirect)', answer: 'le', concept_id: 'indirect_object_pronouns', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I am going to explain the rule to you.' (tú)", english: 'I am going to explain the rule to you.', answer: 'Te voy a explicar la regla.', word: 'te', concept_id: 'indirect_object_pronouns', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which sentence is correct? "We wrote them a letter."', word: 'les', english: 'to them (indirect)', answer: 'Les escribimos una carta.', options: ['Los escribimos una carta.', 'Les escribimos una carta.', 'La escribimos una carta.', 'Le escribimos una carta.'], concept_id: 'indirect_object_pronouns', difficulty: 2 },
  // A2 — demonstratives
  { type: 'fill_blank', prompt: 'Complete: "Me gusta ___ camisa que llevas puesta." (this, near speaker, fem.)', word: 'esta', english: 'this (fem., near speaker)', answer: 'esta', concept_id: 'demonstratives', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'This book here is mine.'", english: 'This book here is mine.', answer: 'Este libro es mío.', word: 'este', concept_id: 'demonstratives', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which demonstrative refers to something far from both speaker and listener?', word: 'aquel/aquella', english: 'that (far from both)', answer: 'aquel/aquella', options: ['este/esta', 'ese/esa', 'aquel/aquella', 'cualquiera'], concept_id: 'demonstratives', difficulty: 2 },
  // A2 — possessives
  { type: 'fill_blank', prompt: 'Complete: "___ padres viven en Chile." (our)', word: 'nuestro', english: 'our', answer: 'Nuestros', concept_id: 'possessives', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Is this jacket yours?' (informal)", english: 'Is this jacket yours?', answer: '¿Es tuya esta chaqueta?', word: 'tuyo', concept_id: 'possessives', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which possessive agrees with "casa" (fem. sing.) for "her house"?', word: 'su casa', english: 'her house', answer: 'su casa', options: ['sus casa', 'su casa', 'suyo casa', 'sus casas'], concept_id: 'possessives', difficulty: 1 },
  // A2 — preterite_regular
  { type: 'fill_blank', prompt: 'Complete: "Yo ___ (trabajar) todo el fin de semana."', word: 'trabajar', english: 'to work (preterite)', answer: 'trabajé', concept_id: 'preterite_regular', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'She wrote three emails yesterday.'", english: 'She wrote three emails yesterday.', answer: 'Escribió tres correos ayer.', word: 'escribir', concept_id: 'preterite_regular', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Tú hablastes con el profesor."', word: 'hablastes → hablaste', english: 'you spoke (correct tú preterite ending)', answer: 'Tú hablaste con el profesor.', concept_id: 'preterite_regular', difficulty: 2 },
  // A2 — modal_verbs
  { type: 'fill_blank', prompt: 'Complete: "___ (deber, nosotros) llegar temprano." (we should)', word: 'deber', english: 'should/must', answer: 'Debemos', concept_id: 'modal_verbs', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'You must not smoke here.'", english: 'You must not smoke here.', answer: 'No debes fumar aquí.', word: 'deber', concept_id: 'modal_verbs', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which expresses "I want to travel"?', word: 'querer', english: 'to want', answer: 'Quiero viajar.', options: ['Puedo viajar.', 'Debo viajar.', 'Quiero viajar.', 'Sé viajar.'], concept_id: 'modal_verbs', difficulty: 1 },
  // A2 — obligation_infinitive
  { type: 'multiple_choice', prompt: 'Which sentence expresses a general, impersonal obligation?', word: 'hay que', english: 'one must (impersonal)', answer: 'Hay que llegar a tiempo.', options: ['Tengo que llegar a tiempo.', 'Hay que llegar a tiempo.', 'Debes llegar a tiempo.', 'Voy a llegar a tiempo.'], concept_id: 'obligation_infinitive', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'They have to finish the project today.'", english: 'They have to finish the project today.', answer: 'Tienen que terminar el proyecto hoy.', word: 'tener que', concept_id: 'obligation_infinitive', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "___ que apagar las luces antes de salir." (one must)', word: 'hay que', english: 'one must', answer: 'Hay', concept_id: 'obligation_infinitive', difficulty: 1 },
  // A2 — time_expressions
  { type: 'translation_to_spanish', prompt: "Translate: 'I haven't seen her since last month.'", english: "I haven't seen her since last month.", answer: 'No la he visto desde el mes pasado.', word: 'desde', concept_id: 'time_expressions', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which means "two days ago"?', word: 'hace dos días', english: 'two days ago', answer: 'hace dos días', options: ['dos días hace', 'hace dos días', 'en dos días', 'desde dos días'], concept_id: 'time_expressions', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "Nos conocimos ___ mucho tiempo." (a long time ago)', word: 'hace', english: 'ago', answer: 'hace', concept_id: 'time_expressions', difficulty: 2 },
  // A2 — present_progressive
  { type: 'fill_blank', prompt: 'Complete: "Los niños ___ (dormir) ahora mismo." (present progressive)', word: 'dormir', english: 'to sleep', answer: 'están durmiendo', concept_id: 'present_progressive', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I am cooking dinner right now.'", english: 'I am cooking dinner right now.', answer: 'Estoy cocinando la cena ahora mismo.', word: 'cocinar', concept_id: 'present_progressive', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Estoy comer ahora."', word: 'comer → comiendo', english: 'gerund form needed after estar', answer: 'Estoy comiendo ahora.', concept_id: 'present_progressive', difficulty: 1 },
  // A2 — irregular_present
  { type: 'fill_blank', prompt: 'Complete: "Yo ___ (hacer) la cena todos los domingos."', word: 'hacer', english: 'to do/make (yo-go verb)', answer: 'hago', concept_id: 'irregular_present', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I come from Argentina.'", english: 'I come from Argentina.', answer: 'Vengo de Argentina.', word: 'venir', concept_id: 'irregular_present', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'What is the "yo" form of "tener"?', word: 'tener', english: 'to have', answer: 'tengo', options: ['tenes', 'tengo', 'tiene', 'tenéis'], concept_id: 'irregular_present', difficulty: 1 },
  // A2 — negation
  { type: 'fill_blank', prompt: 'Complete: "No tengo ___ de dinero." (not any)', word: 'nada', english: 'nothing/not any', answer: 'nada', concept_id: 'negation', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Nobody called me today.'", english: 'Nobody called me today.', answer: 'Nadie me llamó hoy.', word: 'nadie', concept_id: 'negation', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which sentence is grammatically correct?', word: 'no...nada', english: 'double negation with nada', answer: 'No quiero nada.', options: ['Quiero nada.', 'No quiero nada.', 'No no quiero nada.', 'Nada no quiero.'], concept_id: 'negation', difficulty: 2 },
  // A2 — prepositions_basic
  { type: 'fill_blank', prompt: 'Complete: "El gato está ___ la mesa." (under)', word: 'debajo de', english: 'under', answer: 'debajo de', concept_id: 'prepositions_basic', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which preposition means "between"?', word: 'entre', english: 'between', answer: 'entre', options: ['entre', 'sobre', 'hacia', 'según'], concept_id: 'prepositions_basic', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The keys are inside the drawer.'", english: 'The keys are inside the drawer.', answer: 'Las llaves están dentro del cajón.', word: 'dentro de', concept_id: 'prepositions_basic', difficulty: 1 },
  // A2 — near_future
  { type: 'fill_blank', prompt: 'Complete: "¿Qué ___ (ir a) hacer este fin de semana?" (tú)', word: 'ir a', english: 'going to', answer: 'vas a', concept_id: 'near_future', difficulty: 1 },
  { type: 'translation_to_spanish', prompt: "Translate: 'We are going to eat at a new restaurant.'", english: 'We are going to eat at a new restaurant.', answer: 'Vamos a comer en un restaurante nuevo.', word: 'ir a', concept_id: 'near_future', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which expresses a plan for tonight?', word: 'ir a + infinitivo', english: 'going to (near future)', answer: 'Voy a estudiar esta noche.', options: ['Estudié esta noche.', 'Voy a estudiar esta noche.', 'Estudiaba esta noche.', 'He estudiado esta noche.'], concept_id: 'near_future', difficulty: 1 },
  // A2 — adverbs_formation
  { type: 'fill_blank', prompt: 'Complete: "Trabaja muy ___. (cuidadoso → adverb)"', word: 'cuidadosamente', english: 'carefully', answer: 'cuidadosamente', concept_id: 'adverbs_formation', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'He explains things clearly.'", english: 'He explains things clearly.', answer: 'Explica las cosas claramente.', word: 'claramente', concept_id: 'adverbs_formation', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which is the correct adverb from "fácil"?', word: 'fácilmente', english: 'easily', answer: 'fácilmente', options: ['fácilmente', 'facilamente', 'fácilomente', 'fácila'], concept_id: 'adverbs_formation', difficulty: 1 },

  // B1 — acabar_de
  { type: 'fill_blank', prompt: 'Complete: "___ de despertarme." (I have just woken up)', word: 'acabar de', english: 'to have just', answer: 'Acabo', concept_id: 'acabar_de', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'We have just eaten lunch.'", english: 'We have just eaten lunch.', answer: 'Acabamos de almorzar.', word: 'acabar de', concept_id: 'acabar_de', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which correctly means "She has just left"?', word: 'acabar de', english: 'to have just', answer: 'Acaba de salir.', options: ['Acabó de salir.', 'Acaba de salir.', 'Va a salir.', 'Está saliendo.'], concept_id: 'acabar_de', difficulty: 2 },
  // B1 — llevar_gerund
  { type: 'fill_blank', prompt: 'Complete: "___ (llevar, yo) dos años aprendiendo español."', word: 'llevar', english: 'to have been (duration)', answer: 'Llevo', concept_id: 'llevar_gerund', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'They have been living in Peru for six months.'", english: 'They have been living in Peru for six months.', answer: 'Llevan seis meses viviendo en Perú.', word: 'llevar', concept_id: 'llevar_gerund', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Llevo una hora esperando el autobús"?', word: 'llevar', english: 'to have been waiting', answer: 'I have been waiting for the bus for an hour.', concept_id: 'llevar_gerund', difficulty: 2 },
  // B1 — preterite_irregular
  { type: 'fill_blank', prompt: 'Complete: "Ella no ___ (poder) venir a la fiesta." (preterite of poder)', word: 'poder', english: 'to be able (preterite)', answer: 'pudo', concept_id: 'preterite_irregular', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I put the keys on the table.'", english: 'I put the keys on the table.', answer: 'Puse las llaves en la mesa.', word: 'poner', concept_id: 'preterite_irregular', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'What is the preterite "yo" form of "decir"?', word: 'decir', english: 'to say', answer: 'dije', options: ['decí', 'dije', 'dijí', 'deciste'], concept_id: 'preterite_irregular', difficulty: 2 },
  // B1 — imperfect
  { type: 'fill_blank', prompt: 'Complete: "De niños, nosotros ___ (ir) a la playa cada verano."', word: 'ir', english: 'to go (imperfect)', answer: 'íbamos', concept_id: 'imperfect', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'They were always happy at that school.'", english: 'They were always happy at that school.', answer: 'Siempre eran felices en esa escuela.', word: 'ser', concept_id: 'imperfect', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which describes a repeated past habit?', word: 'imperfecto', english: 'habitual past', answer: 'Comíamos juntos todos los domingos.', options: ['Comimos juntos todos los domingos.', 'Comíamos juntos todos los domingos.', 'Comeremos juntos todos los domingos.', 'Hemos comido juntos todos los domingos.'], concept_id: 'imperfect', difficulty: 2 },
  // B1 — preterite_vs_imperfect
  { type: 'fill_blank', prompt: 'Complete: "Eran las diez cuando el tren ___ (llegar)." (single event)', word: 'llegar', english: 'to arrive (preterite)', answer: 'llegó', concept_id: 'preterite_vs_imperfect', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I was sleeping when the phone rang.'", english: 'I was sleeping when the phone rang.', answer: 'Estaba durmiendo cuando sonó el teléfono.', word: 'dormir / sonar', concept_id: 'preterite_vs_imperfect', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct if wrong: "Cuando yo era joven, viví en Francia por diez años."', word: 'viví', english: 'bounded past duration uses preterite', answer: 'Cuando yo era joven, viví en Francia por diez años. (correct — a bounded duration uses preterite)', concept_id: 'preterite_vs_imperfect', difficulty: 3 },
  // B1 — future_simple
  { type: 'fill_blank', prompt: 'Complete: "El año que viene, nosotros ___ (mudarse) a otra ciudad."', word: 'mudarse', english: 'to move (future)', answer: 'nos mudaremos', concept_id: 'future_simple', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'She will finish her studies next year.'", english: 'She will finish her studies next year.', answer: 'Terminará sus estudios el año que viene.', word: 'terminar', concept_id: 'future_simple', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'What is the irregular future "yo" form of "poder"?', word: 'poder', english: 'to be able (future)', answer: 'podré', options: ['poderé', 'podré', 'pudré', 'poderá'], concept_id: 'future_simple', difficulty: 2 },
  // B1 — conditional
  { type: 'fill_blank', prompt: 'Complete: "En tu lugar, yo no ___ (decir) nada." (conditional)', word: 'decir', english: 'to say (conditional)', answer: 'diría', concept_id: 'conditional', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'We would travel more if we had money.'", english: 'We would travel more if we had money.', answer: 'Viajaríamos más si tuviéramos dinero.', word: 'viajar', concept_id: 'conditional', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly uses the conditional for a polite request?', word: 'poder (conditional)', english: 'polite conditional request', answer: '¿Podrías ayudarme?', options: ['¿Puedes ayudarme?', '¿Podrías ayudarme?', '¿Pudiste ayudarme?', '¿Podrás ayudarme?'], concept_id: 'conditional', difficulty: 2 },
  // B1 — present_subjunctive
  { type: 'fill_blank', prompt: 'Complete: "Ojalá ___ (hacer) buen tiempo mañana."', word: 'hacer', english: 'to do/make (subjunctive)', answer: 'haga', concept_id: 'present_subjunctive', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I hope you can come to the party.'", english: 'I hope you can come to the party.', answer: 'Espero que puedas venir a la fiesta.', word: 'poder', concept_id: 'present_subjunctive', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly uses present subjunctive after "es importante que"?', word: 'llegar (subjunctive)', english: 'to arrive (subjunctive)', answer: 'Es importante que llegues a tiempo.', options: ['Es importante que llegas a tiempo.', 'Es importante que llegues a tiempo.', 'Es importante que llegarás a tiempo.', 'Es importante que llegar a tiempo.'], concept_id: 'present_subjunctive', difficulty: 3 },
  // B1 — imperative
  { type: 'fill_blank', prompt: 'Complete (usted command): "___ (escribir) su nombre aquí, por favor."', word: 'escribir', english: 'to write (usted imperative)', answer: 'Escriba', concept_id: 'imperative', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Open the window, please.' (tú)", english: 'Open the window, please.', answer: 'Abre la ventana, por favor.', word: 'abrir', concept_id: 'imperative', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct (negative usted imperative): "No hace ruido."', word: 'hace → haga', english: 'negative formal imperative uses subjunctive form', answer: 'No haga ruido.', concept_id: 'imperative', difficulty: 2 },
  // B1 — por_vs_para
  { type: 'fill_blank', prompt: 'Complete: "Caminamos ___ el parque." (through)', word: 'por', english: 'through', answer: 'por', concept_id: 'por_vs_para', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I need the report by Friday.'", english: 'I need the report by Friday.', answer: 'Necesito el informe para el viernes.', word: 'para', concept_id: 'por_vs_para', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which sentence uses "por" to express means/method?', word: 'por (means)', english: 'by/through (means)', answer: 'Te llamo por teléfono.', options: ['Te llamo para teléfono.', 'Te llamo por teléfono.', 'Voy para teléfono.', 'Hablo por a ti.'], concept_id: 'por_vs_para', difficulty: 2 },
  // B1 — relative_clauses
  { type: 'fill_blank', prompt: 'Complete: "El hombre con ___ hablé es mi vecino." (with whom)', word: 'quien', english: 'whom', answer: 'quien', concept_id: 'relative_clauses', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The house where I grew up is very old.'", english: 'The house where I grew up is very old.', answer: 'La casa donde crecí es muy vieja.', word: 'donde', concept_id: 'relative_clauses', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which relative pronoun refers to a person after a preposition?', word: 'quien', english: 'whom (relative)', answer: 'quien', options: ['que', 'quien', 'donde', 'cuyo'], concept_id: 'relative_clauses', difficulty: 2 },
  // B1 — object_pronoun_order
  { type: 'fill_blank', prompt: 'Rewrite using double object pronouns: "Les compré los regalos a mis sobrinos." → ___ ___ compré.', word: 'se/los', english: 'to them / them', answer: 'Se los', concept_id: 'object_pronoun_order', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I gave it to you.' (it = el libro, tú)", english: 'I gave it to you.', answer: 'Te lo di.', word: 'te/lo', concept_id: 'object_pronoun_order', difficulty: 2 },
  { type: 'error_correction', prompt: 'Find and correct the error: "Se los di a él." (el regalo — singular masculine)', word: 'los → lo', english: 'singular direct object', answer: 'Se lo di a él.', concept_id: 'object_pronoun_order', difficulty: 3 },
  // B1 — se_impersonal
  { type: 'multiple_choice', prompt: 'Which sentence uses impersonal se correctly?', word: 'se impersonal', english: 'impersonal se', answer: 'Se trabaja mucho aquí.', options: ['Trabaja se mucho aquí.', 'Se trabaja mucho aquí.', 'Se trabajan mucho aquí.', 'Uno se trabaja mucho aquí.'], concept_id: 'se_impersonal', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'You can't smoke here.' (impersonal)", english: "You can't smoke here.", answer: 'No se puede fumar aquí.', word: 'se puede', concept_id: 'se_impersonal', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "___ necesita experiencia para este trabajo." (impersonal se)', word: 'se', english: 'impersonal se', answer: 'Se', concept_id: 'se_impersonal', difficulty: 2 },
  // B1 — infinitive_vs_subjunctive
  { type: 'fill_blank', prompt: 'Complete (different subject → subjunctive): "Prefiero que ellos ___ (llegar) temprano."', word: 'llegar', english: 'to arrive (subjunctive)', answer: 'lleguen', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I need to rest.' (same subject → infinitive)", english: 'I need to rest.', answer: 'Necesito descansar.', word: 'descansar', concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which is correct when the subjects differ?', word: 'venir (subjunctive)', english: 'to come (subjunctive)', answer: 'Quiero que tú vengas.', options: ['Quiero que tú vienes.', 'Quiero que tú vengas.', 'Quiero que tú venir.', 'Quiero tú vengas.'], concept_id: 'infinitive_vs_subjunctive', difficulty: 2 },
  // B1 — exclamativas
  { type: 'translation_to_spanish', prompt: "Translate: 'How tired I am!'", english: 'How tired I am!', answer: '¡Qué cansado estoy!', word: 'qué', concept_id: 'exclamativas', difficulty: 1 },
  { type: 'multiple_choice', prompt: 'Which exclamation is grammatically correct?', word: '¡qué...tan!', english: 'what a... (exclamation)', answer: '¡Qué casa tan grande!', options: ['¡Qué tan grande casa!', '¡Qué casa tan grande!', '¡Cuán casa grande!', '¡Qué grande tan casa!'], concept_id: 'exclamativas', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "¡___ bien cocinas!" (How well you cook!)', word: 'qué bien', english: 'how well', answer: 'Qué', concept_id: 'exclamativas', difficulty: 1 },

  // B2 — present_perfect
  { type: 'fill_blank', prompt: 'Complete: "¿___ (terminar, tú) la tarea todavía?"', word: 'terminar', english: 'to finish (present perfect)', answer: 'Has terminado', concept_id: 'present_perfect', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'We have already eaten.'", english: 'We have already eaten.', answer: 'Ya hemos comido.', word: 'comer', concept_id: 'present_perfect', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly uses the present perfect?', word: 'haber + viajado', english: 'to have travelled', answer: 'Nunca he viajado a Asia.', options: ['Nunca viajé a Asia nunca.', 'Nunca he viajado a Asia.', 'Nunca viajaba a Asia.', 'Nunca voy a viajar a Asia.'], concept_id: 'present_perfect', difficulty: 2 },
  // B2 — pluperfect
  { type: 'fill_blank', prompt: 'Complete: "Antes de mudarnos, ya ___ (vender) la casa vieja."', word: 'vender', english: 'to sell (pluperfect)', answer: 'habíamos vendido', concept_id: 'pluperfect', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'She had already left when I called.'", english: 'She had already left when I called.', answer: 'Ya se había ido cuando llamé.', word: 'irse', concept_id: 'pluperfect', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly describes an earlier past action?', word: 'pluscuamperfecto', english: 'pluperfect', answer: 'Cuando llegamos, la película ya había empezado.', options: ['Cuando llegamos, la película ya empezó.', 'Cuando llegamos, la película ya había empezado.', 'Cuando llegamos, la película ya empieza.', 'Cuando llegamos, la película ha empezado ya.'], concept_id: 'pluperfect', difficulty: 3 },
  // B2 — future_perfect
  { type: 'fill_blank', prompt: 'Complete: "Para las ocho, ella ya ___ (llegar)."', word: 'llegar', english: 'to arrive (future perfect)', answer: 'habrá llegado', concept_id: 'future_perfect', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'By Sunday, we will have painted the whole house.'", english: 'By Sunday, we will have painted the whole house.', answer: 'Para el domingo, habremos pintado toda la casa.', word: 'pintar', concept_id: 'future_perfect', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which best expresses "They will have finished by then"?', word: 'futuro perfecto', english: 'future perfect', answer: 'Habrán terminado para entonces.', options: ['Terminarán para entonces.', 'Habrán terminado para entonces.', 'Han terminado para entonces.', 'Terminaron para entonces.'], concept_id: 'future_perfect', difficulty: 3 },
  // B2 — conditional_perfect
  { type: 'fill_blank', prompt: 'Complete: "Si hubiera estudiado más, ___ (aprobar) el examen."', word: 'aprobar', english: 'to pass (conditional perfect)', answer: 'habría aprobado', concept_id: 'conditional_perfect', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I would have helped you if you had asked.'", english: 'I would have helped you if you had asked.', answer: 'Te habría ayudado si me lo hubieras pedido.', word: 'ayudar', concept_id: 'conditional_perfect', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which correctly expresses a hypothetical past regret?', word: 'condicional perfecto', english: 'conditional perfect', answer: 'Habría llegado antes, pero perdí el tren.', options: ['Llegaría antes, pero perdí el tren.', 'Habría llegado antes, pero perdí el tren.', 'He llegado antes, pero perdí el tren.', 'Llegué antes, pero perdí el tren.'], concept_id: 'conditional_perfect', difficulty: 3 },
  // B2 — passive_voice
  { type: 'translation_to_spanish', prompt: "Translate: 'The bridge was built in 1950.'", english: 'The bridge was built in 1950.', answer: 'El puente fue construido en 1950.', word: 'construir', concept_id: 'passive_voice', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: "Las cartas ___ escritas por el secretario." (were written)', word: 'ser', english: 'to be (passive)', answer: 'fueron', concept_id: 'passive_voice', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence is in the passive voice?', word: 'ser + participio', english: 'passive voice', answer: 'El premio fue entregado por la alcaldesa.', options: ['La alcaldesa entregó el premio.', 'El premio fue entregado por la alcaldesa.', 'La alcaldesa entrega el premio.', 'El premio entrega la alcaldesa.'], concept_id: 'passive_voice', difficulty: 2 },
  // B2 — passive_se
  { type: 'fill_blank', prompt: 'Complete: "___ venden coches usados en esa tienda." (passive se)', word: 'se', english: 'passive se', answer: 'Se', concept_id: 'passive_se', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Spanish is spoken in many countries.'", english: 'Spanish is spoken in many countries.', answer: 'Se habla español en muchos países.', word: 'hablar', concept_id: 'passive_se', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Se busca empleados con experiencia."', word: 'busca → buscan', english: 'passive se agrees with a plural subject', answer: 'Se buscan empleados con experiencia.', concept_id: 'passive_se', difficulty: 3 },
  // B2 — imperfect_subjunctive
  { type: 'fill_blank', prompt: 'Complete: "Si yo ___ (ser) rico, viajaría por todo el mundo."', word: 'ser', english: 'to be (imperfect subjunctive)', answer: 'fuera', concept_id: 'imperfect_subjunctive', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'She asked me to close the door.'", english: 'She asked me to close the door.', answer: 'Me pidió que cerrara la puerta.', word: 'cerrar', concept_id: 'imperfect_subjunctive', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly uses the imperfect subjunctive?', word: 'imperfecto de subjuntivo', english: 'imperfect subjunctive', answer: 'Dudaba que él dijera la verdad.', options: ['Dudaba que él dice la verdad.', 'Dudaba que él dijera la verdad.', 'Dudaba que él diría la verdad.', 'Dudaba que él ha dicho la verdad.'], concept_id: 'imperfect_subjunctive', difficulty: 3 },
  // B2 — si_clauses
  { type: 'fill_blank', prompt: 'Complete: "Si llueve mañana, no ___ (salir, nosotros)." (open condition)', word: 'salir', english: 'to go out (si + present)', answer: 'salimos', concept_id: 'si_clauses', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'If I were you, I would apologize.'", english: 'If I were you, I would apologize.', answer: 'Si yo fuera tú, me disculparía.', word: 'disculparse', concept_id: 'si_clauses', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence is a correct hypothetical (Type 2) conditional?', word: 'si + imperfecto subjuntivo', english: 'hypothetical condition', answer: 'Si tuviera tiempo, iría al gimnasio.', options: ['Si tengo tiempo, iría al gimnasio.', 'Si tuviera tiempo, iría al gimnasio.', 'Si tendría tiempo, iría al gimnasio.', 'Si tuviera tiempo, voy al gimnasio.'], concept_id: 'si_clauses', difficulty: 3 },
  // B2 — subjunctive_adverbial
  { type: 'fill_blank', prompt: 'Complete: "Te ayudaré con tal de que ___ (ser, tú) honesto conmigo."', word: 'ser', english: 'to be (subjunctive)', answer: 'seas', concept_id: 'subjunctive_adverbial', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I will wait until you arrive.'", english: 'I will wait until you arrive.', answer: 'Esperaré hasta que llegues.', word: 'llegar', concept_id: 'subjunctive_adverbial', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence needs subjunctive because the action has not happened yet?', word: 'antes de que', english: 'before (subjunctive trigger)', answer: 'Saldremos antes de que empiece a llover.', options: ['Saldremos antes de que empieza a llover.', 'Saldremos antes de que empiece a llover.', 'Saldremos antes de que empezó a llover.', 'Saldremos antes de que empezará a llover.'], concept_id: 'subjunctive_adverbial', difficulty: 3 },
  // B2 — comparatives
  { type: 'fill_blank', prompt: 'Complete: "Mi hermano es ___ que yo." (older — irregular)', word: 'mayor', english: 'older', answer: 'mayor', concept_id: 'comparatives', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'This city is as beautiful as that one.'", english: 'This city is as beautiful as that one.', answer: 'Esta ciudad es tan bonita como esa.', word: 'tan...como', concept_id: 'comparatives', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which is the correct comparative of "bueno"?', word: 'mejor', english: 'better', answer: 'mejor', options: ['más bueno', 'mejor', 'buenoso', 'más bien'], concept_id: 'comparatives', difficulty: 2 },
  // B2 — ser_estar_participle
  { type: 'fill_blank', prompt: 'Complete: "La puerta ___ abierta cuando llegamos." (resulting state)', word: 'estar', english: 'to be (resulting state)', answer: 'estaba', concept_id: 'ser_estar_participle', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The letter was written by my grandfather.' (action)", english: 'The letter was written by my grandfather.', answer: 'La carta fue escrita por mi abuelo.', word: 'ser', concept_id: 'ser_estar_participle', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence describes a state rather than an action?', word: 'estar + participio', english: 'resulting state', answer: 'El museo está cerrado los lunes.', options: ['El museo es cerrado por el director.', 'El museo está cerrado los lunes.', 'El museo fue cerrado ayer.', 'El museo es cerrado los lunes por el guardia.'], concept_id: 'ser_estar_participle', difficulty: 3 },
  // B2 — diminutives_augmentatives
  { type: 'fill_blank', prompt: 'Form the diminutive of "casa" (little/cozy house): "___"', word: '-ita', english: 'diminutive suffix', answer: 'casita', concept_id: 'diminutives_augmentatives', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Dame un momentito"?', word: 'momentito', english: 'diminutive of momento', answer: 'Give me just a little moment.', concept_id: 'diminutives_augmentatives', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which is an augmentative meaning "a big, imposing house"?', word: '-ón/-ona', english: 'augmentative suffix', answer: 'casona', options: ['casita', 'casona', 'casera', 'casilla'], concept_id: 'diminutives_augmentatives', difficulty: 2 },
  // B2 — relative_pronouns_advanced
  { type: 'fill_blank', prompt: 'Complete: "La empresa para ___ trabajo es multinacional." (which, formal, after preposition)', word: 'la cual', english: 'which (formal)', answer: 'la cual', concept_id: 'relative_pronouns_advanced', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The professor whose class I love is retiring.'", english: 'The professor whose class I love is retiring.', answer: 'El profesor cuya clase me encanta se jubila.', word: 'cuyo/a', concept_id: 'relative_pronouns_advanced', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly uses "lo que"?', word: 'lo que', english: 'what/that which', answer: 'No entiendo lo que dices.', options: ['No entiendo lo cual dices.', 'No entiendo lo que dices.', 'No entiendo que dices.', 'No entiendo cual dices.'], concept_id: 'relative_pronouns_advanced', difficulty: 2 },
  // B2 — adjectives_ser_estar
  { type: 'fill_blank', prompt: 'Complete: "Mi abuelo ___ muy vivo — cuenta historias fascinantes." (lively, personality trait)', word: 'ser', english: 'to be (inherent trait)', answer: 'es', concept_id: 'adjectives_ser_estar', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The fruit is not ripe yet.'", english: 'The fruit is not ripe yet.', answer: 'La fruta todavía está verde.', word: 'verde', concept_id: 'adjectives_ser_estar', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which sentence means "He is a witty/sharp person"? (personality trait)', word: 'ser vivo', english: 'to be witty/sharp (trait)', answer: 'Es muy vivo.', options: ['Está muy vivo.', 'Es muy vivo.', 'Estuvo muy vivo.', 'Fue vivo.'], concept_id: 'adjectives_ser_estar', difficulty: 3 },

  // C1 — subjunctive_noun_clauses
  { type: 'fill_blank', prompt: 'Complete: "No creo que ___ (tener, ellos) razón."', word: 'tener', english: 'to have (subjunctive)', answer: 'tengan', concept_id: 'subjunctive_noun_clauses', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'It's a shame that you can't come.'", english: "It's a shame that you can't come.", answer: 'Es una lástima que no puedas venir.', word: 'poder', concept_id: 'subjunctive_noun_clauses', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence requires the subjunctive?', word: 'ojalá', english: 'I hope (subjunctive trigger)', answer: 'Ojalá que todo salga bien.', options: ['Sé que todo sale bien.', 'Ojalá que todo salga bien.', 'Es cierto que todo sale bien.', 'Veo que todo sale bien.'], concept_id: 'subjunctive_noun_clauses', difficulty: 3 },
  // C1 — subjunctive_adjective_clauses
  { type: 'fill_blank', prompt: 'Complete: "Necesito un empleado que ___ (hablar) tres idiomas." (non-specific)', word: 'hablar', english: 'to speak (subjunctive)', answer: 'hable', concept_id: 'subjunctive_adjective_clauses', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Is there anyone here who knows how to fix this?'", english: 'Is there anyone here who knows how to fix this?', answer: '¿Hay alguien aquí que sepa arreglar esto?', word: 'saber', concept_id: 'subjunctive_adjective_clauses', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly uses the indicative because the antecedent is known?', word: 'antecedente conocido', english: 'known antecedent → indicative', answer: 'Tengo un amigo que vive en Roma.', options: ['Tengo un amigo que viva en Roma.', 'Tengo un amigo que vive en Roma.', 'Busco un amigo que viva en Roma.', 'Necesito un amigo que viva en Roma.'], concept_id: 'subjunctive_adjective_clauses', difficulty: 3 },
  // C1 — gerund_advanced
  { type: 'fill_blank', prompt: 'Complete (gerund of means): "___ (trabajar) duro, logró sus metas." (By working hard)', word: 'trabajar', english: 'by working (gerund)', answer: 'Trabajando', concept_id: 'gerund_advanced', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Practicing every day, you will improve quickly.'", english: 'Practicing every day, you will improve quickly.', answer: 'Practicando todos los días, mejorarás rápido.', word: 'practicar', concept_id: 'gerund_advanced', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Siguió hablando a pesar de las interrupciones"?', word: 'seguir + gerundio', english: 'to keep on doing', answer: 'He kept talking despite the interruptions.', concept_id: 'gerund_advanced', difficulty: 2 },
  // C1 — ser_passive
  { type: 'fill_blank', prompt: 'Complete: "El edificio ___ diseñado por un arquitecto famoso." (was designed)', word: 'ser', english: 'to be (passive)', answer: 'fue', concept_id: 'ser_passive', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The decision will be made by the committee.'", english: 'The decision will be made by the committee.', answer: 'La decisión será tomada por el comité.', word: 'ser', concept_id: 'ser_passive', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence correctly forms the ser-passive in the present perfect?', word: 'haber sido + participio', english: 'present perfect passive', answer: 'El proyecto ha sido aprobado.', options: ['El proyecto ha aprobado.', 'El proyecto ha sido aprobado.', 'El proyecto es sido aprobado.', 'El proyecto había aprobado.'], concept_id: 'ser_passive', difficulty: 3 },
  // C1 — estilo_indirecto
  { type: 'fill_blank', prompt: 'Complete (indirect speech): "Me preguntó si ___ (querer, yo) ir con ella." (backshift)', word: 'querer', english: 'to want (backshifted)', answer: 'quería', concept_id: 'estilo_indirecto', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'He said that he would call me the next day.'", english: 'He said that he would call me the next day.', answer: 'Dijo que me llamaría al día siguiente.', word: 'llamar', concept_id: 'estilo_indirecto', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which correctly reports "I have finished" (said yesterday)?', word: 'estilo indirecto', english: 'indirect speech', answer: 'Dijo que había terminado.', options: ['Dijo que ha terminado.', 'Dijo que había terminado.', 'Dijo que termina.', 'Dijo que terminará.'], concept_id: 'estilo_indirecto', difficulty: 3 },
  // C1 — nominalisation
  { type: 'fill_blank', prompt: 'Complete: "___ bueno de este trabajo es el horario flexible." (The good thing)', word: 'lo + adjetivo', english: 'the good thing', answer: 'Lo', concept_id: 'nominalisation', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Smoking is bad for your health.' (use el + infinitive)", english: 'Smoking is bad for your health.', answer: 'El fumar es malo para la salud.', word: 'el + infinitivo', concept_id: 'nominalisation', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Lo difícil fue convencerlo"?', word: 'lo + adjetivo', english: 'nominalised adjective', answer: 'The hard part was convincing him.', concept_id: 'nominalisation', difficulty: 3 },
  // C1 — subjunctive_temporal
  { type: 'fill_blank', prompt: 'Complete: "Vamos a esperar hasta que ___ (parar) de llover." (future action)', word: 'parar', english: 'to stop (subjunctive)', answer: 'pare', concept_id: 'subjunctive_temporal', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'As soon as you finish, call me.'", english: 'As soon as you finish, call me.', answer: 'En cuanto termines, llámame.', word: 'en cuanto', concept_id: 'subjunctive_temporal', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence is correct for a habitual action (not a future event)?', word: 'cuando + indicativo', english: 'habitual action → indicative', answer: 'Siempre la saludo cuando la veo.', options: ['Siempre la saludo cuando la vea.', 'Siempre la saludo cuando la veo.', 'Siempre la saludo cuando la viera.', 'Siempre la saludo cuando la ve.'], concept_id: 'subjunctive_temporal', difficulty: 3 },
  // C1 — cuantificadores
  { type: 'fill_blank', prompt: 'Complete: "___ personas vinieron a la reunión de las que esperábamos." (fewer)', word: 'menos', english: 'fewer', answer: 'Menos', concept_id: 'cuantificadores', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Several students failed the exam.'", english: 'Several students failed the exam.', answer: 'Varios estudiantes suspendieron el examen.', word: 'varios', concept_id: 'cuantificadores', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which quantifier means "enough"?', word: 'suficiente', english: 'enough', answer: 'suficiente', options: ['demasiado', 'suficiente', 'apenas', 'tanto'], concept_id: 'cuantificadores', difficulty: 2 },
  // C1 — futuro_probabilidad
  { type: 'fill_blank', prompt: 'Complete: "¿Dónde está Marta? No sé, ___ (estar) todavía en el trabajo." (probability guess)', word: 'estar', english: 'to be (probability)', answer: 'estará', concept_id: 'futuro_probabilidad', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'It's probably around midnight.' (future of probability)", english: "It's probably around midnight.", answer: 'Serán las doce de la noche.', word: 'ser', concept_id: 'futuro_probabilidad', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence expresses probability about the present using the future tense?', word: 'futuro de probabilidad', english: 'future of probability', answer: 'Tendrá unos cincuenta años.', options: ['Tiene unos cincuenta años.', 'Tendrá unos cincuenta años.', 'Tuvo unos cincuenta años.', 'Tenía unos cincuenta años.'], concept_id: 'futuro_probabilidad', difficulty: 3 },
  // C1 — condicional_probabilidad
  { type: 'fill_blank', prompt: 'Complete: "En esa época, yo ___ (tener) unos quince años." (past probability guess)', word: 'tener', english: 'to have (conditional probability)', answer: 'tendría', concept_id: 'condicional_probabilidad', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'It must have been about six in the evening when we left.'", english: 'It must have been about six in the evening when we left.', answer: 'Serían las seis de la tarde cuando salimos.', word: 'ser', concept_id: 'condicional_probabilidad', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence expresses probability about a past moment?', word: 'condicional de probabilidad', english: 'conditional of probability', answer: 'Estaría cansado después del viaje.', options: ['Está cansado después del viaje.', 'Estaría cansado después del viaje.', 'Estuvo cansado después del viaje.', 'Estaba cansado después del viaje.'], concept_id: 'condicional_probabilidad', difficulty: 3 },
  // C1 — perifraseis_avanzadas
  { type: 'fill_blank', prompt: 'Complete: "___ (volver a) intentarlo después de fallar." (tried again)', word: 'volver a', english: 'to do again', answer: 'Volvió a', concept_id: 'perifraseis_avanzadas', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I haven't seen him in three years.' (use llevar sin)", english: "I haven't seen him in three years.", answer: 'Llevo tres años sin verlo.', word: 'llevar sin', concept_id: 'perifraseis_avanzadas', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which periphrasis expresses a habitual action in the past?', word: 'soler', english: 'used to (habitual)', answer: 'Solía correr por las mañanas.', options: ['Solía correr por las mañanas.', 'Se puso a correr por las mañanas.', 'Dejó de correr por las mañanas.', 'Volvió a correr por las mañanas.'], concept_id: 'perifraseis_avanzadas', difficulty: 3 },
  // B1 — saber_vs_conocer
  { type: 'fill_blank', prompt: 'Complete: "¿___ (tú) tocar el piano?" (skill)', word: 'saber', english: 'to know how to', answer: 'Sabes', concept_id: 'saber_vs_conocer', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "No ___ a tu primo todavía." (haven\'t met him)', word: 'conocer', english: 'to know/be acquainted with', answer: 'conozco', concept_id: 'saber_vs_conocer', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which verb completes: "___ dónde está la estación."', word: 'saber', english: 'to know (a fact)', answer: 'Sé', options: ['Sé', 'Conozco', 'Sepo', 'Conoce'], concept_id: 'saber_vs_conocer', difficulty: 1 },
  { type: 'error_correction', prompt: 'Correct: "Yo conozco que la reunión es a las tres."', word: 'conozco → sé', english: 'facts use saber, not conocer', answer: 'Yo sé que la reunión es a las tres.', concept_id: 'saber_vs_conocer', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I met her at a party last year.'", english: 'I met her at a party last year.', answer: 'La conocí en una fiesta el año pasado.', word: 'conocer', concept_id: 'saber_vs_conocer', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Supe la verdad ayer"?', word: 'saber (preterite)', english: 'found out', answer: 'I found out the truth yesterday.', concept_id: 'saber_vs_conocer', difficulty: 2 },
  // B1 — lo_neutro
  { type: 'fill_blank', prompt: 'Complete: "___ importante es llegar a tiempo." (The important thing)', word: 'lo', english: 'the ... thing (neuter)', answer: 'Lo', concept_id: 'lo_neutro', difficulty: 1 },
  { type: 'fill_blank', prompt: 'Complete: "No entiendo ___ quieres decir." (what)', word: 'lo que', english: 'what/that which', answer: 'lo que', concept_id: 'lo_neutro', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which completes: "Eso es exactamente ___ necesito."', word: 'lo que', english: 'what', answer: 'lo que', options: ['que', 'lo que', 'el que', 'cual'], concept_id: 'lo_neutro', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'The worst part was the traffic.'", english: 'The worst part was the traffic.', answer: 'Lo peor fue el tráfico.', word: 'lo + adjetivo', concept_id: 'lo_neutro', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "No sabes lo cansado que estoy"?', word: 'lo + adjetivo + que', english: 'intensifier', answer: 'You have no idea how tired I am.', concept_id: 'lo_neutro', difficulty: 3 },
  { type: 'error_correction', prompt: 'Correct: "El que dijo me sorprendió." (refers to an idea, not a specific noun)', word: 'El que → Lo que', english: 'ideas need the neuter lo que', answer: 'Lo que dijo me sorprendió.', concept_id: 'lo_neutro', difficulty: 3 },
  // B2 — perfect_subjunctive
  { type: 'fill_blank', prompt: 'Complete: "Espero que ___ (dormir, tú) bien." (perfect subjunctive)', word: 'dormir', english: 'to sleep', answer: 'hayas dormido', concept_id: 'perfect_subjunctive', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: "No creo que ___ (llegar, él) todavía."', word: 'llegar', english: 'to arrive', answer: 'haya llegado', concept_id: 'perfect_subjunctive', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I'm glad you have finished the project.'", english: "I'm glad you have finished the project.", answer: 'Me alegro de que hayas terminado el proyecto.', word: 'terminar', concept_id: 'perfect_subjunctive', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which is correct for "It\'s a shame you couldn\'t come" (already happened)?', word: 'haber + participio', english: 'perfect subjunctive', answer: 'Es una pena que no hayas podido venir.', options: ['Es una pena que no puedas venir.', 'Es una pena que no hayas podido venir.', 'Es una pena que no podías venir.', 'Es una pena que no pudiste venir.'], concept_id: 'perfect_subjunctive', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Cuando hayas terminado, avísame"?', word: 'haber + participio', english: 'perfect subjunctive', answer: 'When you have finished, let me know.', concept_id: 'perfect_subjunctive', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Ojalá que ella haiga visto la película." (nonstandard form)', word: 'haiga → haya', english: 'haiga is not standard Spanish', answer: 'Ojalá que ella haya visto la película.', concept_id: 'perfect_subjunctive', difficulty: 2 },
  // B2 — verbos_cambio
  { type: 'fill_blank', prompt: 'Complete: "Cuando oyó la noticia, ___ (ponerse) pálida." (sudden change)', word: 'ponerse', english: 'to become/turn (temporary)', answer: 'se puso', concept_id: 'verbos_cambio', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "Después de tantos golpes, ___ (volverse) desconfiado." (radical change)', word: 'volverse', english: 'to become (radical, involuntary)', answer: 'se volvió', concept_id: 'verbos_cambio', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which verb of "becoming" fits: "___ abogado tras seis años de carrera." (through effort)', word: 'hacerse', english: 'to become (through effort)', answer: 'Se hizo', options: ['Se puso', 'Se hizo', 'Se volvió', 'Fue'], concept_id: 'verbos_cambio', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'She became the manager after years of hard work.' (gradual process)", english: 'She became the manager after years of hard work.', answer: 'Llegó a ser la gerente después de años de trabajo duro.', word: 'llegar a ser', concept_id: 'verbos_cambio', difficulty: 3 },
  { type: 'error_correction', prompt: 'Correct: "Se puso profesor el año pasado." (ponerse cannot take a noun)', word: 'Se puso → Se hizo', english: 'ponerse only takes adjectives, not nouns', answer: 'Se hizo profesor el año pasado.', concept_id: 'verbos_cambio', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "El agua se convirtió en hielo"?', word: 'convertirse en', english: 'to turn into/become', answer: 'The water turned into ice.', concept_id: 'verbos_cambio', difficulty: 2 },
  // B2 — adjective_position
  { type: 'fill_blank', prompt: 'Complete: "Es un ___ hombre." (great — apocopated form before the noun)', word: 'gran', english: 'great (before noun)', answer: 'gran', concept_id: 'adjective_position', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which means "a longtime friend" (known a long time, not necessarily elderly)?', word: 'viejo amigo', english: 'longtime friend', answer: 'un viejo amigo', options: ['un amigo viejo', 'un viejo amigo', 'un amigo de viejo', 'un viejo de amigo'], concept_id: 'adjective_position', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'He is a poor man.' (no money)", english: 'He is a poor man.', answer: 'Es un hombre pobre.', word: 'pobre', concept_id: 'adjective_position', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "¡Pobre hombre!"?', word: 'pobre (before noun)', english: 'pitiable', answer: 'Poor guy! / What a pity!', concept_id: 'adjective_position', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "Vivo en una casa muy ___." (big — objective size, after the noun)', word: 'grande', english: 'big', answer: 'grande', concept_id: 'adjective_position', difficulty: 1 },
  { type: 'error_correction', prompt: 'Correct if the intended meaning is "a different idea," not "a brand-new one": "Tengo una idea nueva."', word: 'idea nueva → nueva idea', english: 'adjective before the noun = another/different', answer: 'Tengo una nueva idea.', concept_id: 'adjective_position', difficulty: 3 },
  // C1 — pluperfect_subjunctive
  { type: 'fill_blank', prompt: 'Complete: "Si ___ (estudiar, yo) más, habría aprobado." (pluperfect subjunctive)', word: 'estudiar', english: 'to study', answer: 'hubiera estudiado', concept_id: 'pluperfect_subjunctive', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'I wish you had come to the party.'", english: 'I wish you had come to the party.', answer: 'Ojalá hubieras venido a la fiesta.', word: 'venir', concept_id: 'pluperfect_subjunctive', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: "No creía que él ___ (terminar) tan rápido."', word: 'terminar', english: 'to finish', answer: 'hubiera terminado', concept_id: 'pluperfect_subjunctive', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which correctly completes an unreal past condition: "Si lo ___ sabido, no lo habría hecho."', word: 'haber', english: 'to have (auxiliary)', answer: 'hubiera', options: ['habría', 'hubiera', 'haya', 'había'], concept_id: 'pluperfect_subjunctive', difficulty: 3 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Me habría gustado que me lo hubieras dicho antes"?', word: 'pluperfect subjunctive', english: 'past unreal wish', answer: 'I would have liked you to have told me sooner.', concept_id: 'pluperfect_subjunctive', difficulty: 3 },
  { type: 'error_correction', prompt: 'Correct: "Si hubiera sabido, no lo habia hecho." (wrong verb form in the result clause)', word: 'habia hecho → habría hecho', english: 'the result clause needs the conditional perfect', answer: 'Si hubiera sabido, no lo habría hecho.', concept_id: 'pluperfect_subjunctive', difficulty: 3 },
  // C1 — aunque_concessive
  { type: 'fill_blank', prompt: 'Complete: "Aunque ___ (llover), vamos a salir." (it is actually raining — known fact)', word: 'llover', english: 'to rain', answer: 'llueve', concept_id: 'aunque_concessive', difficulty: 3 },
  { type: 'fill_blank', prompt: 'Complete: "Aunque ___ (llover) mañana, iremos de excursión." (uncertain, hypothetical)', word: 'llover', english: 'to rain (subjunctive)', answer: 'llueva', concept_id: 'aunque_concessive', difficulty: 3 },
  { type: 'multiple_choice', prompt: 'Which sentence expresses "even if he were rich" as a contrary-to-fact hypothetical?', word: 'aunque + imperfect subjunctive', english: 'contrary-to-fact concession', answer: 'Aunque fuera rico, no se lo compraría.', options: ['Aunque es rico, no se lo compra.', 'Aunque fuera rico, no se lo compraría.', 'Aunque será rico, no se lo comprará.', 'Aunque sea rico, no se lo compra.'], concept_id: 'aunque_concessive', difficulty: 3 },
  { type: 'translation_to_spanish', prompt: "Translate: 'Although it is expensive, I'm going to buy it.' (known fact)", english: "Although it is expensive, I'm going to buy it.", answer: 'Aunque es caro, lo voy a comprar.', word: 'aunque', concept_id: 'aunque_concessive', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Aunque no lo creas, es verdad"?', word: 'aunque + subjunctive', english: "even if you don't believe it", answer: "Even if you don't believe it, it's true.", concept_id: 'aunque_concessive', difficulty: 2 },
  { type: 'error_correction', prompt: 'Correct: "Aunque llueva ahora mismo, como puedes ver." (a visible fact needs indicative)', word: 'llueva → llueve', english: 'a visible/known fact requires indicative', answer: 'Aunque llueve ahora mismo, como puedes ver.', concept_id: 'aunque_concessive', difficulty: 3 },
  // C1 — verbos_preposicionales
  { type: 'fill_blank', prompt: 'Complete: "Pienso ___ ti todos los días." (about)', word: 'en', english: 'in/about (pensar en)', answer: 'en', concept_id: 'verbos_preposicionales', difficulty: 2 },
  { type: 'fill_blank', prompt: 'Complete: "Sueño ___ viajar por el mundo." (of/about)', word: 'con', english: 'with (soñar con)', answer: 'con', concept_id: 'verbos_preposicionales', difficulty: 2 },
  { type: 'multiple_choice', prompt: 'Which preposition completes "El éxito consiste ___ la constancia"?', word: 'consistir en', english: 'to consist of', answer: 'en', options: ['de', 'en', 'con', 'por'], concept_id: 'verbos_preposicionales', difficulty: 2 },
  { type: 'translation_to_spanish', prompt: "Translate: 'It depends on the situation.'", english: 'It depends on the situation.', answer: 'Depende de la situación.', word: 'depender de', concept_id: 'verbos_preposicionales', difficulty: 2 },
  { type: 'translation_to_english', prompt: '¿Qué significa "Me alegro de verte"?', word: 'alegrarse de', english: 'to be glad about', answer: "I'm glad to see you.", concept_id: 'verbos_preposicionales', difficulty: 1 },
  { type: 'error_correction', prompt: 'Correct: "¿Qué piensas en esta idea?" (asking for an opinion)', word: 'piensas en → piensas de', english: 'pensar de = to have an opinion of', answer: '¿Qué piensas de esta idea?', concept_id: 'verbos_preposicionales', difficulty: 3 },
];

function fallback(focusConcept = null) {
  if (focusConcept) {
    const matches = FALLBACK_EXERCISES.filter(e => e.concept_id === focusConcept);
    if (matches.length) return matches[Math.floor(Math.random() * matches.length)];
  }
  return FALLBACK_EXERCISES[Math.floor(Math.random() * FALLBACK_EXERCISES.length)];
}

// English contractions and their expansions — a learner shouldn't be marked
// wrong for writing "I'm" when the stored answer spells out "I am" or vice
// versa, so both sides are canonicalized to the expanded form before matching.
const CONTRACTIONS = {
  "i'm": 'i am', "you're": 'you are', "we're": 'we are', "they're": 'they are',
  "isn't": 'is not', "aren't": 'are not', "wasn't": 'was not', "weren't": 'were not',
  "don't": 'do not', "doesn't": 'does not', "didn't": 'did not',
  "can't": 'cannot', "won't": 'will not', "wouldn't": 'would not',
  "shouldn't": 'should not', "couldn't": 'could not', "mustn't": 'must not',
  "hasn't": 'has not', "haven't": 'have not', "hadn't": 'had not',
  "it's": 'it is', "that's": 'that is', "there's": 'there is',
  "what's": 'what is', "who's": 'who is', "let's": 'let us',
  "i'd": 'i would', "you'd": 'you would', "he'd": 'he would', "she'd": 'she would',
  "we'd": 'we would', "they'd": 'they would',
  "i'll": 'i will', "you'll": 'you will', "he'll": 'he will', "she'll": 'she will',
  "we'll": 'we will', "they'll": 'they will',
  "i've": 'i have', "you've": 'you have', "we've": 'we have', "they've": 'they have',
};

function expandContractions(s) {
  let out = String(s).replace(/[’‘`´]/g, "'");
  for (const [contraction, expanded] of Object.entries(CONTRACTIONS)) {
    out = out.replace(new RegExp(`\\b${contraction}\\b`, 'gi'), expanded);
  }
  return out;
}

function normalizeAnswer(s) {
  return expandContractions(s).trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?¡¿]+$/g, '').replace(/^[¡¿]+/, '');
}

// Some answers carry a parenthetical aside ("gran (before noun)") or use
// "/" to list alternative phrasings ("One must recycle more. / We need to
// recycle more.") — a learner isn't expected to reproduce those verbatim.
function coreAnswer(s) {
  return String(s).replace(/\s*\([^)]*\)/g, '').replace(/\s+—.*$/, '').trim();
}

// Spanish is pro-drop: a subject pronoun spelled out in the stored answer
// ("Ellas son de Bolivia.") can always be omitted ("Son de Bolivia.") without
// changing correctness, so accept that variant too.
const SPANISH_SUBJECT_PRONOUNS = ['yo', 'tú', 'tu', 'él', 'el', 'ella', 'usted', 'nosotros', 'nosotras', 'vosotros', 'vosotras', 'ellos', 'ellas', 'ustedes'];

function proDropVariant(text) {
  const words = String(text).trim().split(/\s+/);
  if (words.length < 2) return null;
  const first = words[0].toLowerCase().replace(/^[¡¿]+/, '');
  if (!SPANISH_SUBJECT_PRONOUNS.includes(first)) return null;
  const rest = words.slice(1);
  rest[0] = rest[0].charAt(0).toUpperCase() + rest[0].slice(1);
  return rest.join(' ');
}

function acceptableAnswers(exercise) {
  const sources = [exercise.answer, exercise.english, ...(exercise.altAnswers || [])].filter(Boolean);
  const variants = new Set();
  sources.forEach(text => {
    text.split('/').forEach(part => {
      part = part.trim();
      variants.add(normalizeAnswer(part));
      variants.add(normalizeAnswer(coreAnswer(part)));
      const dropped = proDropVariant(part);
      if (dropped) variants.add(normalizeAnswer(dropped));
    });
  });
  return variants;
}

// When Gemini is unavailable we can't have it grade the previous answer, but
// we still know the correct answer for the exercise the learner just
// submitted — grade it locally instead of unconditionally marking it wrong.
function gradeLocally(exercise, learnerAnswer) {
  if (!exercise || learnerAnswer == null) return false;
  return acceptableAnswers(exercise).has(normalizeAnswer(learnerAnswer));
}

export async function callGemini(env, userMessage, exercise, learnerAnswer, isFirstTurn = false, briefing = null, focusConcept = null) {
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${env.GEMINI_API_KEY}`;

  let systemPrompt = BASE_SYSTEM_PROMPT;
  if (briefing) {
    systemPrompt = BASE_SYSTEM_PROMPT + '\n\n' + briefing;
  }

  let prompt = userMessage;
  if (exercise && learnerAnswer !== null) {
    prompt = `Exercise type: ${exercise.type}${exercise.concept_id ? `\nConcept: ${exercise.concept_id}` : ''}
Prompt shown: "${exercise.prompt}"
Correct answer: "${exercise.answer}"
Learner answered: "${learnerAnswer}"

Evaluate and give the next exercise.`;
  }

  // Gemini has no cross-request memory, so without this reminder the focus
  // instruction given at session start (see start.js) only ever reaches the
  // model once — every subsequent turn drifted to whatever concept Gemini
  // felt like next, defeating "Drill this concept" mode after exercise 1.
  if (focusConcept && !isFirstTurn) {
    prompt += `\n\nReminder: this whole session is focused on drilling the concept "${focusConcept}". The next exercise must also target concept_id "${focusConcept}".`;
  }

  if (isFirstTurn) {
    prompt += '\n\n(first_turn=true)';
  }

  const body = JSON.stringify({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    systemInstruction: { parts: [{ text: systemPrompt }] },
    generationConfig: { temperature: 0.85, maxOutputTokens: 700 }
  });

  // Retry transient failures (network errors, 429 rate-limit, 5xx) before
  // giving up — a single rate-limit blip used to fall straight to the
  // static fallback bank even though the very next attempt would likely
  // succeed. Non-transient failures (4xx other than 429) are not retried,
  // since retrying an auth/bad-request error just wastes the backoff delay
  // on something that will never succeed. Backoff is short (300ms, 900ms)
  // because a real user is waiting synchronously on this response.
  const MAX_ATTEMPTS = 3;
  const BACKOFF_MS = [300, 900];
  let lastErr;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body
      });

      if (!res.ok) {
        const retryable = res.status === 429 || res.status >= 500;
        if (retryable && attempt < MAX_ATTEMPTS - 1) {
          console.error(`Gemini ${res.status} (attempt ${attempt + 1}/${MAX_ATTEMPTS}), retrying...`);
          await new Promise(r => setTimeout(r, BACKOFF_MS[attempt]));
          continue;
        }
        throw new Error(`Gemini ${res.status}`);
      }

      const data = await res.json();
      const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

      return parseGeminiResponse(raw, isFirstTurn, focusConcept);
    } catch (err) {
      lastErr = err;
      // A thrown non-ok-status Error (from just above) already had its
      // retry decision made; a genuine network/fetch-level exception is
      // always worth retrying since it's inherently transient.
      const isStatusError = err instanceof Error && /^Gemini \d+$/.test(err.message);
      if (!isStatusError && attempt < MAX_ATTEMPTS - 1) {
        console.error(`Gemini call failed (attempt ${attempt + 1}/${MAX_ATTEMPTS}), retrying:`, err);
        await new Promise(r => setTimeout(r, BACKOFF_MS[attempt]));
        continue;
      }
      break;
    }
  }

  console.error('Gemini call failed after retries, using fallback exercise:', lastErr);
  return {
    correct: gradeLocally(exercise, learnerAnswer), feedback: '', exercise: fallback(focusConcept),
    greeting: null, conceptNote: null, source: 'fallback', fallbackReason: lastErr?.message ?? 'unknown',
  };
}

function parseGeminiResponse(raw, isFirstTurn, focusConcept = null) {
  let greeting = null;
  let body = raw;

  if (isFirstTurn) {
    const correctIdx = raw.indexOf('CORRECT:');
    if (correctIdx > 0) {
      greeting = raw.slice(0, correctIdx).trim() || null;
      body = raw.slice(correctIdx);
    }
  }

  const correctMatch = body.match(/^CORRECT:\s*(true|false)/im);
  const correct = correctMatch?.[1]?.toLowerCase() === 'true';

  const feedbackMatch = body.match(/^CORRECT:\s*(?:true|false)\s*\n+([\s\S]*?)(?=\s*<EXERCISE>)/im);
  let feedback = feedbackMatch?.[1]?.trim() ?? '';

  // Strip concept note from feedback if it bled through
  feedback = feedback.replace(/\[CONCEPT_NOTE\][\s\S]*?\[\/CONCEPT_NOTE\]/gi, '').trim();

  const exerciseMatch = body.match(/<EXERCISE>\s*([\s\S]*?)\s*<\/EXERCISE>/i);
  let exercise = null;
  if (exerciseMatch) {
    try { exercise = JSON.parse(exerciseMatch[1]); } catch {}
  }
  // Tags whether this exercise actually came from Gemini's response or had to
  // fall back — the only way to tell "Gemini is working" from "the fallback
  // bank is covering for a dead/misconfigured API key" without guessing from
  // exercise phrasing.
  const source = exercise ? 'gemini' : 'fallback';
  const fallbackReason = exercise ? undefined : 'unparseable exercise JSON in Gemini response';
  if (!exercise) exercise = fallback(focusConcept);

  const conceptNoteMatch = body.match(/\[CONCEPT_NOTE\]([\s\S]*?)\[\/CONCEPT_NOTE\]/i);
  const conceptNote = conceptNoteMatch?.[1]?.trim() ?? null;

  return { correct, feedback, exercise, greeting, conceptNote, source, fallbackReason };
}
