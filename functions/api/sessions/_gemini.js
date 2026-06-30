export const BASE_SYSTEM_PROMPT = `You are Pablo, an expert Spanish tutor adapting to each learner's exact profile.

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
    ser_basics, estar_basics, present_ar, present_er_ir, adjective_agreement, question_words, hay, numbers_21_100
A2: ser_vs_estar, reflexive_verbs, gustar_type, direct_object_pronouns, indirect_object_pronouns,
    demonstratives, possessives, preterite_regular, modal_verbs, obligation_infinitive, time_expressions,
    present_progressive, irregular_present, negation, prepositions_basic, near_future, adverbs_formation
B1: acabar_de, llevar_gerund, preterite_irregular, imperfect, preterite_vs_imperfect, future_simple,
    conditional, present_subjunctive, imperative, por_vs_para, relative_clauses,
    object_pronoun_order, se_impersonal, infinitive_vs_subjunctive, exclamativas
B2: present_perfect, pluperfect, future_perfect, conditional_perfect, passive_voice, passive_se,
    imperfect_subjunctive, si_clauses, subjunctive_adverbial, comparatives, ser_estar_participle,
    diminutives_augmentatives, relative_pronouns_advanced, adjectives_ser_estar
C1: subjunctive_noun_clauses, subjunctive_adjective_clauses, gerund_advanced, ser_passive,
    estilo_indirecto, nominalisation, subjunctive_temporal, cuantificadores,
    futuro_probabilidad, condicional_probabilidad, perifraseis_avanzadas

difficulty: 1 (easy recall), 2 (production), 3 (full translation or nuanced contrast)

CONTENT SCOPE:
Default to A1 material unless the professor briefing explicitly shows higher CEFR level.
A1: greetings, numbers, colors, family, food, ser/estar basics, present -ar/-er/-ir, noun gender, articles
A2: ser vs estar contrast, preterite (regular), reflexives, gustar-type verbs, object pronouns (direct/indirect), demonstratives, possessives, modal verbs, obligation (tener que/hay que), time expressions (hace/ayer/desde hace), present progressive (estar + gerund), irregular present tense (ir/tener/hacer/poder/venir/saber + yo-go + stem-changes), negation (no/nada/nadie/nunca double negatives), adverbs of manner (-mente formation)
B1: preterite irregular, imperfect, preterite vs imperfect, future, conditional, present subjunctive, imperative, por/para, relative clauses, acabar de, llevar + gerund, double object pronouns (me lo/se lo), impersonal se, infinitive vs subjunctive (same/different subject), exclamatory sentences (¡Qué!, ¡Cuánto!)
B2: present perfect, pluperfect, future perfect, conditional perfect, passive constructions (ser + participio, pasiva se), imperfect subjunctive, si-clauses, subjunctive in adverbial clauses, comparatives, diminutives/augmentatives, advanced relative pronouns — only if CEFR level is B2+
C1: subjunctive in noun/adjective/temporal clauses, gerund (advanced), ser passive, indirect speech, nominalisation, quantifiers, future/conditional for probability inference, advanced verb periphrases (soler, ponerse a, volver a, dejar de, llevar sin) — only if CEFR level is C1

FEEDBACK RULES:
- Wrong: name the exact rule violated. One sentence on how to fix it.
- Right: one precise observation, or nothing if it was trivially obvious.
- Never "Great job!", "Excellent!", "Wonderful!", or hollow praise.
- Never repeat the same encouragement twice in a row.
- First turn: CORRECT: true, empty feedback, give first exercise.
- All feedback in English.

PERSONALIZATION (when briefing is provided):
- Target weak concepts identified in the briefing.
- Use the suggested explanation style for each concept.
- If fossilization risk is flagged, try a completely different angle.
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
  { type: 'fill_blank', prompt: 'Complete: ¿A ___ te gusta más, el café o el té? (cuál)', word: 'gustar', english: 'to like', answer: 'cuál', concept_id: 'gustar_type', difficulty: 2 },
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
  { type: 'translation_to_spanish', prompt: "Translate: 'Seeing you every day makes me happy.' (use gerund as subject)", english: 'Seeing you every day makes me happy.', answer: 'Verte todos los días me alegra.', word: 'ver', concept_id: 'gerund_advanced', difficulty: 3 },
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
];

function fallback() {
  return FALLBACK_EXERCISES[Math.floor(Math.random() * FALLBACK_EXERCISES.length)];
}

export async function callGemini(env, userMessage, exercise, learnerAnswer, isFirstTurn = false, briefing = null) {
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

  if (isFirstTurn) {
    prompt += '\n\n(first_turn=true)';
  }

  try {
    const res = await fetch(GEMINI_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { temperature: 0.85, maxOutputTokens: 700 }
      })
    });

    if (!res.ok) throw new Error(`Gemini ${res.status}`);

    const data = await res.json();
    const raw = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';

    return parseGeminiResponse(raw, isFirstTurn);
  } catch {
    return { correct: false, feedback: '', exercise: fallback(), greeting: null, conceptNote: null };
  }
}

function parseGeminiResponse(raw, isFirstTurn) {
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
  if (!exercise) exercise = fallback();

  const conceptNoteMatch = body.match(/\[CONCEPT_NOTE\]([\s\S]*?)\[\/CONCEPT_NOTE\]/i);
  const conceptNote = conceptNoteMatch?.[1]?.trim() ?? null;

  return { correct, feedback, exercise, greeting, conceptNote };
}
