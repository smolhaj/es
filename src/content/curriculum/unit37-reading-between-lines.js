// Unit 37 — Reading Between the Lines (C2)
// Covers: implicatura_pragmatica, generos_discursivos_formales,
// referencias_culturales_avanzadas
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. This unit is
// pragmatics and cultural competence, not grammar, so it is written
// accordingly: less about rules to apply and more about recognition —
// hearing what is implied, reading the register a text calls for, and
// catching the cultural shorthand embedded in ordinary Spanish. Every claim
// below was verified against dictionary/pedagogical sources (RAE, and
// established explainers on implicature, formal genres, and each cultural
// allusion) before writing — see the audit note at the bottom of this file.
//
// This is the CLOSING unit of the entire curriculum: order 37, the last stop
// on the "Learn" path spanning A1 through C2. Its third section closes with
// a short, deliberate send-off rather than a routine lesson wrap-up.

export default {
  sections: [
    {
      heading: 'Reading Between the Lines: Pragmatic Implicature',
      paragraphs: [
        "You are standing at the very end of this course, at the level where mastering Spanish stops being mostly about verb forms and vocabulary and becomes, in large part, about understanding what people mean rather than only what they literally say. Pragmatic implicature (implicatura pragmática) is the clearest example of that shift: a speaker can answer a question truthfully and stay technically on-topic without ever stating the actual answer, and a competent listener still walks away knowing exactly what was meant.",
        'Take the simplest case: —¿Vienes a la fiesta? ("Are you coming to the party?") —Tengo que trabajar ("I have to work"). Nothing in that reply literally means "no." And yet every native speaker hears it as a polite refusal. Why? Because a cooperative listener assumes the speaker is being relevant — if the answer were yes, mentioning work would be a strange, irrelevant thing to say in response to an invitation. The only way "I have to work" makes sense as an answer to "are you coming?" is if it is offered as the reason the person is not coming. The listener does the inferential work; the speaker never has to say the word no out loud.',
        'The same logic produces subtler effects. —¿Qué tal la comida? ("How was the food?") —Bueno, no me puse enfermo ("Well, I did not get sick"). Praising the absence of the worst possible outcome, instead of praising the food itself, implies the food was mediocre at best — if it had actually been good, the speaker would presumably have said so directly. —¿Te gustó la película? —La música era bonita ("Did you like the movie?" — "The music was nice") works the same way: singling out one minor, safe element implies the rest left something to be desired.',
        'None of these responses is false — that is exactly the point. The speaker says something true and, on its face, only loosely related to the question, trusting the listener to fill in the rest. This differs from irony, which flips the literal meaning of the words; implicature usually adds an unstated layer on top of literal, truthful words rather than contradicting them. Recognizing it is above all a listening skill: the words alone will not hand you the answer, but the relevance of those words to the question will.',
      ],
      examples: [
        { es: '—¿Vienes a la fiesta? —Tengo que trabajar.', en: '"Are you coming to the party?" "I have to work." (implying no)' },
        { es: '—¿Qué tal la comida? —Bueno, no me puse enfermo.', en: '"How was the food?" "Well, I did not get sick." (implying it was mediocre)' },
        { es: '—¿Te gustó la película? —La música era bonita.', en: '"Did you like the movie?" "The music was nice." (implying the rest was not great)' },
        { es: '—¿Tienes hora? —Sí.', en: '"Do you have the time?" "Yes." (technically true, but withholding the time itself reads as curt or uncooperative)' },
        { es: '—¿Qué te pareció mi presentación? —Se notó que trabajaste mucho en las diapositivas.', en: '"What did you think of my presentation?" "You could tell you put a lot of work into the slides." (praising the effort, not the content, implies the content was not the strong point)' },
      ],
      commonMistakes: [
        'Reading "Tengo que trabajar" as just a neutral fact about tomorrow\'s schedule misses the implicature entirely — right after a yes/no invitation, it functions as a refusal, not a random comment.',
        'Do not assume every indirect or seemingly off-topic answer hides a deeper meaning — implicature depends entirely on context; the same sentence in a different situation can simply be literal.',
        'Implicature is a two-way social contract: it depends on both speakers assuming the other is being cooperative and relevant. If that assumption breaks down (a distracted, evasive, or confused speaker), the inference can misfire.',
      ],
    },
    {
      heading: 'Writing with Authority: Informe vs. Ensayo Argumentativo',
      paragraphs: [
        'The two genres in this section are not conversational at all — they are the formal, written registers a C2 speaker is expected to produce competently: the informe (report) and the ensayo argumentativo (argumentative essay). Both are formal, both favor connectors and complete sentences over conversational shortcuts, but they are structured around entirely different goals, and mixing their conventions is one of the clearest tells of an under-prepared writer.',
        'An informe exists to inform, not to persuade — its job is to lay out facts, data, and findings as objectively as possible, and it signals that objectivity structurally. Expect clearly labeled, often numbered sections: introducción, metodología, resultados, and conclusiones y recomendaciones are typical. The voice stays impersonal: instead of "yo recomiendo" ("I recommend"), a report reaches for the impersonal se or a passive construction — se recomienda aumentar la inversión ("it is recommended to increase investment"). First-person opinion markers are largely avoided; the report should read as though the facts are speaking for themselves.',
        'An ensayo argumentativo exists to persuade — it opens with a clearly stated thesis, defends that thesis with supporting arguments, and, crucially at this level, engages with the strongest counterargument before answering it rather than pretending the other side does not exist. Unlike the informe, first-person stance markers are not just allowed but expected: defenderé que ("I will argue that"), considero que ("I believe that"), en mi opinión ("in my opinion"). The register stays formal throughout — this is not casual conversation — but the voice is unmistakably personal.',
        'Both genres lean on the same toolkit of formal connectors you already know from earlier C2 units — por una parte...por otra (parte), sin embargo, en definitiva, cabe destacar que — the difference is not vocabulary but architecture and voice. A useful habit before writing either one: ask what the text is actually for. If the goal is to present findings neutrally, structure and depersonalize like an informe. If the goal is to win someone over to a position, build an argument and confront the counterargument like an ensayo. This is a practical starting point, not an exhaustive style manual — real academic and professional conventions vary by field, institution, and country.',
      ],
      examples: [
        { es: 'Informe: "El presente informe analiza la evolución del comercio local durante los últimos cinco años."', en: 'Report: "This report analyzes the evolution of local commerce over the past five years."' },
        { es: 'Informe: "Se recomienda implementar ayudas fiscales para los pequeños comercios."', en: 'Report: "It is recommended to implement tax subsidies for small businesses."' },
        { es: 'Ensayo: "En este ensayo defenderé la idea de que las ciudades deben priorizar al peatón."', en: 'Essay: "In this essay I will argue that cities should prioritize the pedestrian."' },
        { es: 'Ensayo: "Cabría argumentar que el coche ofrece libertad; sin embargo, considero que esa libertad sale cara a la ciudad."', en: 'Essay: "One might argue that the car offers freedom; however, I believe that freedom comes at a high cost to the city."' },
      ],
      commonMistakes: [
        'Writing an informe in the first person ("Yo pienso que deberíamos...") undercuts its objective, findings-first tone — reach for the impersonal se or a passive construction instead.',
        'Writing an ensayo argumentativo without ever acknowledging the opposing view makes the argument feel one-sided and unconvincing at a C2 level — a strong essay names the counterargument before rebutting it.',
        'Neither genre tolerates conversational fillers, contact controllers (¿no?, fíjate), or ironic asides that are natural in speech — both stay in formal written register from the first line to the last.',
      ],
    },
    {
      heading: 'Cultural Shorthand: Allusions Every C2 Speaker Should Recognize',
      paragraphs: [
        'There is one last layer to fluency that no verb chart can teach: recognizing the shared cultural shorthand that native speakers reach for constantly, without ever pausing to explain it. A handful of historical, literary, and mythological references have become such common currency across the Spanish-speaking world that a C2 speaker is simply expected to catch them in context — in the news, in conversation, in a novel — the way an English speaker is expected to understand "catch-22" or "Achilles heel" without a footnote.',
        'Quijotesco, from Cervantes\'s Don Quijote de la Mancha, describes an idealistic, noble effort that is ultimately impractical or doomed — Se lanzó a una empresa quijotesca ("He threw himself into a quixotic venture") carries genuine admiration for the idealism alongside gentle irony about how unrealistic it is. Kafkiano, from the writer Franz Kafka, describes a situation that is absurd, oppressive, and illogical — usually a nightmarish bureaucratic tangle where no one seems able to help and no explanation makes sense: Fue un trámite kafkiano que duró seis meses ("It was a Kafkaesque process that took six months").',
        'Three more come straight from Greek mythology and are recognized everywhere Spanish is spoken. El talón de Aquiles ("the Achilles heel") names someone\'s or something\'s one weak, vulnerable point, taken from the one spot on Achilles\'s body that was not invulnerable — Su talón de Aquiles es la falta de paciencia. Una odisea, from Homer\'s epic, describes any long, exhausting journey full of setbacks — Llegar al aeropuerto con la nieve fue toda una odisea. And un trabajo de Sísifo describes an endless, ultimately futile task — from the king condemned to push a boulder up a hill forever, only for it to roll back down every time — Revisar ese informe línea por línea se ha convertido en un trabajo de Sísifo.',
        'Two more round out this core set. Pan y circo (from the Latin panem et circenses, "bread and circuses") describes cheap entertainment or handouts used to distract people from something more serious — Con la que está cayendo, esto es puro pan y circo. Abrir la caja de Pandora ("to open Pandora\'s box") means taking an action that unleashes a wave of problems that cannot easily be undone — Preguntar eso en la reunión fue abrir la caja de Pandora. As with any cultural reference, the goal is recognition, not decoration: understand these instantly when you hear or read them, but use them sparingly yourself — a sentence stacked with three classical allusions reads as showing off, not as fluency.',
        'That is, in a sense, the real finish line of this entire course. Thirty-seven units ago, hola was new information; now, the last thing left to teach is not a rule but a habit of attention — listening for what is implied, recognizing the register a piece of writing calls for, and catching the cultural references embedded in ordinary conversation. There is no formal ceiling above C2, only a lifetime of reading, listening, and noticing left ahead of you. Enhorabuena — buen viaje de aquí en adelante.',
      ],
      examples: [
        { es: 'Se lanzó a una empresa quijotesca que nadie más creía posible.', en: 'He threw himself into a quixotic venture that no one else believed possible.' },
        { es: 'Fue un trámite kafkiano que duró seis meses.', en: 'It was a Kafkaesque process that took six months.' },
        { es: 'Su talón de Aquiles es la falta de paciencia.', en: 'His Achilles heel is his lack of patience.' },
        { es: 'Llegar al aeropuerto con la nieve fue toda una odisea.', en: 'Getting to the airport in the snow was a real odyssey.' },
        { es: 'Revisar ese informe línea por línea se ha convertido en un trabajo de Sísifo.', en: 'Reviewing that report line by line has become a Sisyphean task.' },
        { es: 'Preguntar eso en la reunión fue abrir la caja de Pandora.', en: "Asking that in the meeting was opening Pandora's box." },
      ],
      commonMistakes: [
        'Do not take these expressions literally — kafkiano is not about literally recalling a specific person, and una odisea does not require an actual sea voyage; both are shorthand for a type of experience, not a literal comparison.',
        'These six references are deliberately pan-Hispanic (Greek and Roman mythology, Cervantes, and a globally known 20th-century writer) rather than country-specific pop culture, which varies far too much between Spain and the many countries of Latin America to generalize safely.',
        'Reach for these sparingly — native speakers use them for a specific rhetorical or humorous effect, not in every other sentence; overusing them can come across as pretentious rather than fluent.',
      ],
    },
  ],

  vocab: [
    { es: 'sobrentender', en: 'to imply, to understand without it being said', example: 'Se sobrentiende que no quiere venir, aunque no lo diga.', exampleEn: "It's understood that he doesn't want to come, even though he doesn't say so." },
    { es: 'leer entre líneas', en: 'to read between the lines', example: 'Hay que leer entre líneas para entender lo que realmente quiso decir.', exampleEn: 'You have to read between the lines to understand what he really meant.' },
    { es: 'aludir', en: 'to allude, to hint at', example: 'En su discurso, aludió a la crisis sin nombrarla directamente.', exampleEn: 'In his speech, he alluded to the crisis without naming it directly.' },
    { es: 'la alusión', en: 'the allusion', example: 'El artículo está lleno de alusiones históricas.', exampleEn: 'The article is full of historical allusions.' },
    { es: 'el trasfondo', en: 'the backdrop, the underlying context', example: 'Detrás de la broma había un trasfondo serio.', exampleEn: 'Behind the joke there was a serious undertone.' },
    { es: 'el matiz', en: 'the nuance, the shade of meaning', example: 'Ese verbo tiene un matiz más formal que el otro.', exampleEn: 'That verb has a more formal shade of meaning than the other one.' },
    { es: 'la trayectoria', en: 'the trajectory, the career path', example: 'Ha tenido una trayectoria impresionante como escritora.', exampleEn: "She's had an impressive career trajectory as a writer." },
    { es: 'el recorrido', en: 'the journey, the path traveled', example: 'Este curso ha sido un largo recorrido desde el primer "hola".', exampleEn: 'This course has been a long journey since the very first "hola."' },
    { es: 'el desenlace', en: 'the outcome, the ending', example: 'Nadie esperaba ese desenlace para la historia.', exampleEn: 'No one expected that ending for the story.' },
    { es: 'la meta', en: 'the goal, the finish line', example: 'Por fin llegamos a la meta después de tanto esfuerzo.', exampleEn: 'We finally reached the finish line after so much effort.' },
    { es: 'el legado', en: 'the legacy', example: 'Su legado sigue vivo en cada estudiante que enseñó.', exampleEn: 'Her legacy lives on in every student she taught.' },
    { es: 'despedirse', en: 'to say goodbye, to take leave', example: 'Es hora de despedirse, aunque el aprendizaje nunca termina de verdad.', exampleEn: "It's time to say goodbye, though learning never really ends." },
  ],

  practice: [
    // ── implicatura_pragmatica block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    {
      type: 'multiple_choice',
      prompt: 'Someone asks "¿Vienes a la fiesta?" and the reply is "Tengo que trabajar." What does the reply most likely imply?',
      word: 'tengo que trabajar',
      english: 'I have to work (implying no)',
      answer: 'No va a ir a la fiesta.',
      options: ['No va a ir a la fiesta.', 'Sí va a ir a la fiesta.', 'No sabe si va a ir.', 'Está preguntando la hora de la fiesta.'],
      concept_id: 'implicatura_pragmatica',
      difficulty: 1,
    },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, cuando Sofía dice 'Tengo que trabajar hasta tarde ese día,' la implicatura es que ella ___ (ir) a la fiesta.",
      word: 'no va',
      english: 'is not going',
      answer: 'no va',
      concept_id: 'implicatura_pragmatica',
      difficulty: 2,
      passage: "Marta: ¿Vienes a la fiesta de despedida de Diego el sábado?\nSofía: Tengo que trabajar hasta tarde ese día.\nMarta: Vaya, qué pena. Pablo, ¿tú te apuntas?\nPablo: Bueno... mi hermano llega de visita esa misma noche.\nMarta: Entiendo. Por cierto, ¿qué tal la cena de anoche?\nSofía: Bueno, al menos no me puse enferma.\nMarta: ¿Y la película que viste el fin de semana, Pablo?\nPablo: La banda sonora era preciosa.",
      passageEn: "Marta: Are you coming to Diego's farewell party on Saturday?\nSofía: I have to work late that day.\nMarta: Oh, that's a shame. Pablo, are you in?\nPablo: Well... my brother is arriving to visit that same night.\nMarta: I see. By the way, how was dinner last night?\nSofía: Well, at least I didn't get sick.\nMarta: And the movie you watched over the weekend, Pablo?\nPablo: The soundtrack was beautiful.",
    },
    {
      type: 'multiple_choice',
      prompt: "En el diálogo, ¿qué implica la respuesta de Pablo, 'mi hermano llega de visita esa misma noche'?",
      word: 'mi hermano llega de visita',
      english: 'my brother is arriving to visit (implying he cannot come)',
      answer: 'Que tampoco va a poder ir a la fiesta.',
      options: ['Que tampoco va a poder ir a la fiesta.', 'Que su hermano organiza la fiesta.', 'Que va a llevar a su hermano a la fiesta.', 'Que no tiene ningún plan esa noche.'],
      concept_id: 'implicatura_pragmatica',
      difficulty: 2,
      passage: "Marta: ¿Vienes a la fiesta de despedida de Diego el sábado?\nSofía: Tengo que trabajar hasta tarde ese día.\nMarta: Vaya, qué pena. Pablo, ¿tú te apuntas?\nPablo: Bueno... mi hermano llega de visita esa misma noche.\nMarta: Entiendo. Por cierto, ¿qué tal la cena de anoche?\nSofía: Bueno, al menos no me puse enferma.\nMarta: ¿Y la película que viste el fin de semana, Pablo?\nPablo: La banda sonora era preciosa.",
      passageEn: "Marta: Are you coming to Diego's farewell party on Saturday?\nSofía: I have to work late that day.\nMarta: Oh, that's a shame. Pablo, are you in?\nPablo: Well... my brother is arriving to visit that same night.\nMarta: I see. By the way, how was dinner last night?\nSofía: Well, at least I didn't get sick.\nMarta: And the movie you watched over the weekend, Pablo?\nPablo: The soundtrack was beautiful.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate Sofía's line about dinner: 'Bueno, al menos no me puse enferma.'",
      word: 'al menos no me puse enferma',
      english: "well, at least I didn't get sick",
      answer: "Well, at least I didn't get sick.",
      concept_id: 'implicatura_pragmatica',
      difficulty: 2,
      passage: "Marta: ¿Vienes a la fiesta de despedida de Diego el sábado?\nSofía: Tengo que trabajar hasta tarde ese día.\nMarta: Vaya, qué pena. Pablo, ¿tú te apuntas?\nPablo: Bueno... mi hermano llega de visita esa misma noche.\nMarta: Entiendo. Por cierto, ¿qué tal la cena de anoche?\nSofía: Bueno, al menos no me puse enferma.\nMarta: ¿Y la película que viste el fin de semana, Pablo?\nPablo: La banda sonora era preciosa.",
      passageEn: "Marta: Are you coming to Diego's farewell party on Saturday?\nSofía: I have to work late that day.\nMarta: Oh, that's a shame. Pablo, are you in?\nPablo: Well... my brother is arriving to visit that same night.\nMarta: I see. By the way, how was dinner last night?\nSofía: Well, at least I didn't get sick.\nMarta: And the movie you watched over the weekend, Pablo?\nPablo: The soundtrack was beautiful.",
    },
    {
      type: 'multiple_choice',
      prompt: "¿Qué implica Sofía sobre la cena al responder 'al menos no me puse enferma' en vez de decir directamente si estuvo buena?",
      word: 'al menos no me puse enferma',
      english: 'implying the food was mediocre',
      answer: 'Que la cena no estuvo muy buena.',
      options: ['Que la cena no estuvo muy buena.', 'Que la cena fue excelente.', 'Que no cenó nada.', 'Que se puso enferma después de todo.'],
      concept_id: 'implicatura_pragmatica',
      difficulty: 3,
      passage: "Marta: ¿Vienes a la fiesta de despedida de Diego el sábado?\nSofía: Tengo que trabajar hasta tarde ese día.\nMarta: Vaya, qué pena. Pablo, ¿tú te apuntas?\nPablo: Bueno... mi hermano llega de visita esa misma noche.\nMarta: Entiendo. Por cierto, ¿qué tal la cena de anoche?\nSofía: Bueno, al menos no me puse enferma.\nMarta: ¿Y la película que viste el fin de semana, Pablo?\nPablo: La banda sonora era preciosa.",
      passageEn: "Marta: Are you coming to Diego's farewell party on Saturday?\nSofía: I have to work late that day.\nMarta: Oh, that's a shame. Pablo, are you in?\nPablo: Well... my brother is arriving to visit that same night.\nMarta: I see. By the way, how was dinner last night?\nSofía: Well, at least I didn't get sick.\nMarta: And the movie you watched over the weekend, Pablo?\nPablo: The soundtrack was beautiful.",
    },
    {
      type: 'multiple_choice',
      prompt: "La respuesta de Pablo sobre la película, 'La banda sonora era preciosa,' implica que...",
      word: 'la banda sonora era preciosa',
      english: 'implying the rest of the movie was not as good',
      answer: 'el resto de la película no le pareció tan buena',
      options: ['el resto de la película no le pareció tan buena', 'la película no tenía banda sonora', 'a Pablo no le gusta la música', 'la película fue un documental musical'],
      concept_id: 'implicatura_pragmatica',
      difficulty: 3,
      passage: "Marta: ¿Vienes a la fiesta de despedida de Diego el sábado?\nSofía: Tengo que trabajar hasta tarde ese día.\nMarta: Vaya, qué pena. Pablo, ¿tú te apuntas?\nPablo: Bueno... mi hermano llega de visita esa misma noche.\nMarta: Entiendo. Por cierto, ¿qué tal la cena de anoche?\nSofía: Bueno, al menos no me puse enferma.\nMarta: ¿Y la película que viste el fin de semana, Pablo?\nPablo: La banda sonora era preciosa.",
      passageEn: "Marta: Are you coming to Diego's farewell party on Saturday?\nSofía: I have to work late that day.\nMarta: Oh, that's a shame. Pablo, are you in?\nPablo: Well... my brother is arriving to visit that same night.\nMarta: I see. By the way, how was dinner last night?\nSofía: Well, at least I didn't get sick.\nMarta: And the movie you watched over the weekend, Pablo?\nPablo: The soundtrack was beautiful.",
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate this indirect, polite refusal (an implicature, not a direct 'no'): 'I have other plans that day.'",
      english: 'I have other plans that day.',
      answer: 'Tengo otros planes ese día.',
      word: 'tengo otros planes',
      concept_id: 'implicatura_pragmatica',
      difficulty: 1,
    },

    // ── generos_discursivos_formales block (kept separate from implicatura_pragmatica; blocked before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: '¿Qué tono predomina en el informe citado a continuación?',
      word: 'informe',
      english: 'report',
      answer: 'Impersonal y objetivo',
      options: ['Impersonal y objetivo', 'Personal y subjetivo', 'Humorístico e irónico', 'Poético y literario'],
      concept_id: 'generos_discursivos_formales',
      difficulty: 1,
      passage: 'INFORME: SITUACIÓN DEL COMERCIO LOCAL EN EL BARRIO NORTE\n\n1. Introducción\nEl presente informe analiza la evolución del comercio local en el barrio Norte durante los últimos cinco años.\n\n2. Metodología\nSe han consultado datos del ayuntamiento y encuestas realizadas a cuarenta comercios de la zona.\n\n3. Resultados\nSe observa un descenso del 15% en el número de tiendas familiares, mientras que ha aumentado la presencia de cadenas.\n\n4. Conclusiones y recomendaciones\nSe recomienda implementar ayudas fiscales para los pequeños comercios y agilizar los trámites administrativos.',
      passageEn: 'REPORT: THE STATE OF LOCAL COMMERCE IN BARRIO NORTE\n\n1. Introduction\nThis report analyzes the evolution of local commerce in Barrio Norte over the past five years.\n\n2. Methodology\nCity council data and surveys of forty local businesses were consulted.\n\n3. Results\nA 15% decline in family-owned shops is observed, while the presence of chain stores has increased.\n\n4. Conclusions and recommendations\nIt is recommended to implement tax subsidies for small businesses and streamline administrative procedures.',
    },
    {
      type: 'fill_blank',
      prompt: "Según el informe, completa la sección que falta: 'Introducción, Metodología, Resultados y ___.'",
      word: 'Conclusiones y recomendaciones',
      english: 'Conclusions and recommendations',
      answer: 'Conclusiones y recomendaciones',
      concept_id: 'generos_discursivos_formales',
      difficulty: 2,
      passage: 'INFORME: SITUACIÓN DEL COMERCIO LOCAL EN EL BARRIO NORTE\n\n1. Introducción\nEl presente informe analiza la evolución del comercio local en el barrio Norte durante los últimos cinco años.\n\n2. Metodología\nSe han consultado datos del ayuntamiento y encuestas realizadas a cuarenta comercios de la zona.\n\n3. Resultados\nSe observa un descenso del 15% en el número de tiendas familiares, mientras que ha aumentado la presencia de cadenas.\n\n4. Conclusiones y recomendaciones\nSe recomienda implementar ayudas fiscales para los pequeños comercios y agilizar los trámites administrativos.',
      passageEn: 'REPORT: THE STATE OF LOCAL COMMERCE IN BARRIO NORTE\n\n1. Introduction\nThis report analyzes the evolution of local commerce in Barrio Norte over the past five years.\n\n2. Methodology\nCity council data and surveys of forty local businesses were consulted.\n\n3. Results\nA 15% decline in family-owned shops is observed, while the presence of chain stores has increased.\n\n4. Conclusions and recommendations\nIt is recommended to implement tax subsidies for small businesses and streamline administrative procedures.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this line from the report: 'Se recomienda implementar ayudas fiscales para los pequeños comercios.'",
      word: 'se recomienda',
      english: 'it is recommended (impersonal)',
      answer: 'It is recommended to implement tax subsidies for small businesses.',
      concept_id: 'generos_discursivos_formales',
      difficulty: 2,
      passage: 'INFORME: SITUACIÓN DEL COMERCIO LOCAL EN EL BARRIO NORTE\n\n1. Introducción\nEl presente informe analiza la evolución del comercio local en el barrio Norte durante los últimos cinco años.\n\n2. Metodología\nSe han consultado datos del ayuntamiento y encuestas realizadas a cuarenta comercios de la zona.\n\n3. Resultados\nSe observa un descenso del 15% en el número de tiendas familiares, mientras que ha aumentado la presencia de cadenas.\n\n4. Conclusiones y recomendaciones\nSe recomienda implementar ayudas fiscales para los pequeños comercios y agilizar los trámites administrativos.',
      passageEn: 'REPORT: THE STATE OF LOCAL COMMERCE IN BARRIO NORTE\n\n1. Introduction\nThis report analyzes the evolution of local commerce in Barrio Norte over the past five years.\n\n2. Methodology\nCity council data and surveys of forty local businesses were consulted.\n\n3. Results\nA 15% decline in family-owned shops is observed, while the presence of chain stores has increased.\n\n4. Conclusions and recommendations\nIt is recommended to implement tax subsidies for small businesses and streamline administrative procedures.',
    },
    {
      type: 'multiple_choice',
      prompt: "¿Qué función cumple la frase 'cabría argumentar que... sin embargo, considero que...' en el ensayo citado?",
      word: 'sin embargo',
      english: 'however (introducing the rebuttal)',
      answer: 'Presenta un contraargumento y luego lo responde con la postura del autor',
      options: ['Presenta un contraargumento y luego lo responde con la postura del autor', 'Resume la metodología del estudio', 'Enumera los resultados obtenidos en una encuesta', 'Cita una fuente bibliográfica externa'],
      concept_id: 'generos_discursivos_formales',
      difficulty: 3,
      passage: '¿DEBERÍAN LAS CIUDADES PRIORIZAR AL PEATÓN SOBRE EL COCHE?\n\nEn este ensayo defenderé la idea de que las ciudades deben rediseñarse en torno al peatón, no al automóvil. Por una parte, cabría argumentar que el coche ofrece libertad e independencia; sin embargo, considero que esa libertad individual sale cara al conjunto de la ciudad, en forma de contaminación y ruido. Es cierto que una transición así exige inversión y tiempo, pero, en definitiva, una ciudad pensada para las personas resulta más habitable para todos.',
      passageEn: 'SHOULD CITIES PRIORITIZE PEDESTRIANS OVER CARS?\n\nIn this essay I will argue that cities should be redesigned around the pedestrian, not the automobile. On the one hand, one might argue that the car offers freedom and independence; however, I believe that this individual freedom comes at a high cost to the city as a whole, in the form of pollution and noise. It is true that such a transition requires investment and time, but, ultimately, a city designed for people is more livable for everyone.',
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate, using the first-person stance expected in an ensayo argumentativo: 'In this essay I will argue that social media has changed the way we read.'",
      english: 'In this essay I will argue that social media has changed the way we read.',
      answer: 'En este ensayo defenderé la idea de que las redes sociales han cambiado la forma en que leemos.',
      word: 'defenderé la idea de que',
      concept_id: 'generos_discursivos_formales',
      difficulty: 3,
    },
    {
      type: 'error_correction',
      prompt: "Fix the register mistake for a formal informe (too personal/informal): 'Yo creo que deberíamos gastar más dinero en esto.'",
      word: 'se recomienda',
      english: 'it is recommended (impersonal register)',
      answer: 'Se recomienda destinar más presupuesto a este ámbito.',
      concept_id: 'generos_discursivos_formales',
      difficulty: 3,
    },
    {
      type: 'multiple_choice',
      prompt: '¿Cuál de estas frases encajaría mejor en un ensayo argumentativo que en un informe?',
      word: 'en mi opinión',
      english: 'in my opinion (first-person stance, essay register)',
      answer: 'En mi opinión, deberíamos replantear todo el sistema.',
      options: ['En mi opinión, deberíamos replantear todo el sistema.', 'Se concluye que el sistema requiere una revisión.', 'Los resultados se resumen en la tabla 3.', 'La metodología incluyó cuarenta encuestas.'],
      concept_id: 'generos_discursivos_formales',
      difficulty: 2,
    },

    // ── referencias_culturales_avanzadas block (kept separate; blocked before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: "Si alguien describe un trámite administrativo como 'kafkiano', probablemente se refiere a...",
      word: 'kafkiano',
      english: 'Kafkaesque',
      answer: 'una situación absurda, opresiva y sin lógica aparente',
      options: ['una situación absurda, opresiva y sin lógica aparente', 'un trámite muy rápido y sencillo', 'una situación muy romántica', 'un lugar con mucha naturaleza'],
      concept_id: 'referencias_culturales_avanzadas',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: "'Se lanzó a una empresa quijotesca' significa que la persona...",
      word: 'quijotesco',
      english: 'quixotic',
      answer: 'persiguió un ideal noble pero poco realista',
      options: ['persiguió un ideal noble pero poco realista', 'ganó mucho dinero sin esfuerzo', 'actuó de forma cobarde', 'mintió deliberadamente a todos'],
      concept_id: 'referencias_culturales_avanzadas',
      difficulty: 2,
    },
    {
      type: 'translation_to_english',
      prompt: "Translate: 'Llegar al aeropuerto con la nieve fue toda una odisea.'",
      word: 'una odisea',
      english: 'a real odyssey',
      answer: 'Getting to the airport in the snow was a real odyssey.',
      concept_id: 'referencias_culturales_avanzadas',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: "En el diálogo, ¿qué quiere decir Marina con 'eso puede ser abrir la caja de Pandora'?",
      word: 'abrir la caja de pandora',
      english: "opening Pandora's box",
      answer: 'Que la entrevista podría desatar problemas inesperados',
      options: ['Que la entrevista podría desatar problemas inesperados', 'Que la entrevista será muy breve', 'Que a Marina le encanta la idea', 'Que la caja de Pandora es un objeto real que tienen en la oficina'],
      concept_id: 'referencias_culturales_avanzadas',
      difficulty: 2,
      passage: 'Antonio: Al final aceptamos la entrevista con la prensa.\nMarina: Cuidado, eso puede ser abrir la caja de Pandora.',
      passageEn: "Antonio: In the end we agreed to the interview with the press.\nMarina: Careful, that could be opening Pandora's box.",
    },
    {
      type: 'fill_blank',
      prompt: "Completa la expresión mitológica: 'Revisar ese informe línea por línea se ha convertido en un trabajo de ___.' (el personaje condenado a empujar una piedra eternamente cuesta arriba)",
      word: 'Sísifo',
      english: 'Sisyphus',
      answer: 'Sísifo',
      concept_id: 'referencias_culturales_avanzadas',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: "'Su talón de Aquiles es la falta de paciencia' significa que la falta de paciencia es...",
      word: 'talón de Aquiles',
      english: 'Achilles heel',
      answer: 'su punto débil',
      options: ['su punto débil', 'su mayor virtud', 'un mito sin relación con él', 'un error de gramática'],
      concept_id: 'referencias_culturales_avanzadas',
      difficulty: 1,
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate, using a classical allusion: 'The government is just distracting us with bread and circuses.'",
      english: 'The government is just distracting us with bread and circuses.',
      answer: 'El gobierno solo nos distrae con pan y circo.',
      word: 'pan y circo',
      concept_id: 'referencias_culturales_avanzadas',
      difficulty: 3,
    },

    // ── Production practice: writing_prompt (self-assessed, no exact-match grading) ──
    { type: 'writing_prompt', prompt: 'Escribe la frase inicial de un breve ensayo argumentativo sobre si la tecnología nos hace más o menos conectados entre nosotros.', word: null, english: null, answer: 'En la era digital, resulta paradójico que, cuanto más conectados estamos a través de las pantallas, más distantes nos sentimos de quienes tenemos alrededor.', concept_id: 'generos_discursivos_formales', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - implicatura_pragmatica: the Gricean idea that a cooperative listener
//   infers unstated meaning from a relevant-but-not-literal answer (¿vienes
//   a la fiesta? / tengo que trabajar → implied "no") — checked against
//   LibreTexts Español's "Implicaturas conversacionales" and "Las máximas
//   de conversación de Grice" chapters, and StudySmarter's "Implicatura
//   Conversacional" summary; the exact worked exchanges here (party/dinner/
//   movie) are original but built on the same cooperative-principle logic
//   documented in those sources and consistent with the existing
//   implicatura_pragmatica card in src/content/grammar.js.
// - generos_discursivos_formales: informe = objective/impersonal, numbered
//   sections (introducción, metodología, resultados, conclusiones y
//   recomendaciones), directed at informing; ensayo argumentativo = a
//   thesis defended with arguments, first-person stance markers allowed and
//   expected, engages counterarguments — checked against the Studocu
//   "Diferencias entre Ensayo Argumentativo e Informe de Investigación"
//   comparison and rbraintareas.com's "¿Cuál es la diferencia entre un
//   informe y un ensayo?" explainer; consistent with the existing
//   generos_discursivos_formales card in src/content/grammar.js (same
//   informe/ensayo structural contrast, same impersonal-se vs.
//   first-person-stance distinction).
// - referencias_culturales_avanzadas, each allusion individually verified
//   as a genuinely widespread, pan-Hispanic (not single-country) usage:
//   - quijotesco = idealistic but impractical, from Cervantes's Don
//     Quijote (RAE's dle.rae.es/quijotesco entry; definiciones-de.com and
//     definicion.de "quijotesco" pages)
//   - kafkiano = absurd, oppressively illogical/bureaucratic, from Franz
//     Kafka, an RAE-recognized entry since 2001 (dle.rae.es/kafkiano;
//     Infobae "¿Qué significa que algo es 'kafkiano'?"; El Librero
//     explainer)
//   - talón de Aquiles = someone's one weak/vulnerable point, from the
//     Achilles myth (Spanish Wikipedia "Talón de Aquiles"; Infobae and
//     LA NACION explainers on the expression's mythological origin)
//   - una odisea = a long, arduous, peripeteia-filled journey, from
//     Homer's Odyssey (RAE dle.rae.es/odisea; significados.com "Odisea:
//     qué es, significado y origen")
//   - trabajo/tarea de Sísifo = an endless, futile task, from the myth of
//     Sisyphus's boulder (Spanish Wikipedia "El mito de Sísifo";
//     diccionarioactual.com "¿Qué es de Sísifo?")
//   - pan y circo = cheap distraction/handouts used to placate people,
//     from Juvenal's Latin "panem et circenses" (Spanish Wikipedia "Panem
//     et circenses"; LA NACION "Qué significa 'Pan y circo'")
//   - abrir la caja de Pandora = an action that unleashes a wave of
//     unstoppable problems, from the Pandora myth (Spanish Wikipedia "Caja
//     de Pandora"; cuales.es "Caja de Pandora: ¿qué significa?")
//   All six were deliberately chosen because they derive from classical
//   mythology, Cervantes, or a globally known 20th-century literary
//   reference rather than country-specific pop culture — consistent with
//   the existing referencias_culturales_avanzadas card in
//   src/content/grammar.js, which makes the same pan-Hispanic-only design
//   choice explicitly in its "exceptions" field.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// implicatura_pragmatica, generos_discursivos_formales, and
// referencias_culturales_avanzadas in src/content/grammar.js (same facts,
// fuller C2-paced walkthrough with original dialogues/passages) and does
// not contradict them. As the closing unit of the entire 37-unit A1→C2
// "Learn" path, this file's final section deliberately ends with a short,
// direct send-off rather than a routine lesson wrap-up.
