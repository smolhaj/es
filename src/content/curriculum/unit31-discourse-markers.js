// Unit 31 — Discourse Markers: Structuring an Argument Like a Native (C2)
// Covers: reformuladores, estructuradores_informacion, operadores_discursivos
// See ES.md's "Pedagogical principles" for the general rules this content
// follows: comprehensible input, explicit instruction, retrieval practice,
// blocked practice before interleaving, multiple modalities, and immediate
// explanatory feedback. This is a C2 unit, and C2 content follows a
// different center of gravity than earlier units: per DELE/Instituto
// Cervantes-aligned research on discourse competence, C2 mastery is not
// primarily about learning new grammar rules — the learner already commands
// nearly all of Spanish's morphology and syntax by this point. What remains
// is discourse-level control: how fluent speakers connect, restate,
// structure, and frame ideas across a stretch of speech or writing, plus the
// pragmatic nuance of exactly what a marker signals about the speaker's
// stance. This unit is written with that in mind — less "here is a rule,"
// more "here is how a fluent argument is actually built."
//
// This unit explicitly builds on Unit 30 (Connectors & Cohesion, C1), which
// taught the plain connective layer: sin embargo/no obstante (contrast),
// por lo tanto/así que (consequence), además/en primer lugar (addition/
// sequence), ya que/puesto que (cause). This unit assumes that foundation
// and adds the next layer up: reformulating a point with more precision,
// organizing a multi-part argument as a structured whole, and pragmatically
// framing a point as reinforcement, correction, or aside — the layer that
// separates an advanced learner's Spanish from a native speaker's. Because
// these markers are fundamentally about discourse cohesion, almost none of
// them make sense applied to an isolated sentence — nearly every exercise
// below uses the passage/passageEn fields (a short text or two-person
// dialogue) instead of a one-off sentence, since that is the only context
// where these markers actually do their job.
//
// Every Spanish claim below was verified via WebSearch against the CVC
// (Centro Virtual Cervantes) "Diccionario de términos clave de ELE" entry
// for marcadores del discurso, RAE's Nueva gramática de la lengua española
// (discursive-connectors chapters), and the standard Martín Zorraquino &
// Portolés discourse-marker taxonomy (reformuladores explicativos/
// rectificativos, estructuradores ordenadores, operadores de refuerzo
// argumentativo/de concreción/digresión) — see the audit note at the bottom
// of this file for the specific claims checked. This content is
// complementary to the existing GRAMMAR_CARDS entries for reformuladores,
// estructuradores_informacion, and operadores_discursivos in
// src/content/grammar.js and does not contradict them.

export default {
  sections: [
    {
      heading: 'Reformulators: Saying It Again, More Precisely — O sea, Es decir, Mejor dicho',
      paragraphs: [
        "By now you can already connect ideas with además, por lo tanto, sin embargo, and the rest of Unit 30's connectors — you can add, conclude, and contrast. Reformulators do something different: they don't add a new idea at all. They go back to something you just said and present it again, in other words, because the first version wasn't precise enough, wasn't clear enough, or simply deserves saying differently for emphasis. This is a genuinely C2 skill, because it requires holding your own last sentence in mind and consciously choosing to rephrase it — something native speakers do constantly and unconsciously, and something a fluent-sounding non-native speaker needs to be able to do on purpose.",
        "Spanish groups reformulators by what kind of \"again, but differently\" they signal. O sea and es decir are explicativos (explanatory) — they restate the same idea in clearer or more accessible words, without correcting anything: La reunión es a las nueve, es decir, dentro de una hora (\"The meeting is at nine, that is, in an hour\"). The two are not interchangeable in register, though: es decir is the neutral, written-safe choice — you'll see it in reports, essays, and careful speech — while o sea is overwhelmingly the spoken, everyday choice, extremely common in conversation but a shade too casual for formal writing. Dicho de otro modo (\"put another way\") functions like a more deliberate, formal cousin of es decir, useful when you want to flag that a genuinely different phrasing is coming, not just a quick clarification.",
        "Mejor dicho belongs to a different family entirely: reformuladores rectificativos (rectifying reformulators). It doesn't just clarify — it corrects or sharpens something you just said, signaling \"actually, let me put that more accurately.\" Vive en Madrid — mejor dicho, en un pueblo cerca de Madrid (\"She lives in Madrid — or rather, in a town near Madrid\") tells the listener your first statement was slightly wrong or imprecise, and this is the fix. That's the real test for choosing between es decir/o sea and mejor dicho: are you rephrasing the same accurate idea for clarity, or walking back something you now realize was a bit off? Más bien works the same corrective way as mejor dicho and can substitute for it.",
        "One extra wrinkle worth knowing, precisely because it's a common trap: o sea also does a completely different job in casual spoken Spanish, introducing a consequence rather than a reformulation — Ya son las diez, o sea que llegamos tarde (\"It's already ten, so we're running late\"). This isn't a contradiction of the explanatory use; it's simply a second, extremely common function that spoken o sea (usually followed by que) has picked up. Recognize both, but keep them straight: reformulating a prior idea vs. drawing a conclusion from it are different jobs, even when the same word does both.",
      ],
      examples: [
        { es: 'La reunión es a las nueve, es decir, dentro de una hora.', en: 'The meeting is at nine, that is, in an hour.' },
        { es: 'Llego en un rato, o sea, sobre las ocho.', en: "I'll get there in a bit — that is, around eight." },
        { es: 'Vive en Madrid — mejor dicho, en un pueblo cerca de Madrid.', en: 'She lives in Madrid — or rather, in a town near Madrid.' },
        { es: 'El proyecto se pospone; dicho de otro modo, no se cancela, solo se retrasa.', en: "The project is being postponed; put another way, it's not cancelled, just delayed." },
        { es: 'Ya son las diez, o sea que llegamos tarde.', en: "It's already ten, so we're running late. (o sea introducing a consequence, not a reformulation)" },
      ],
      commonMistakes: [
        "Treating es decir and o sea as perfectly interchangeable in every context — they say the same kind of thing, but o sea skews strongly spoken/casual and can sound out of place in a formal report or essay, where es decir (or dicho de otro modo) is the safer choice.",
        "Reaching for mejor dicho when you're just clarifying, not correcting — mejor dicho specifically signals you're fixing or sharpening something imprecise you just said, not simply restating it in equivalent words (that's the job of es decir/o sea).",
        "Assuming o sea always reformulates — in casual speech, o sea (que) very often introduces a consequence instead (\"so...\"), a distinct function from its explanatory use, and only context tells you which job it's doing.",
      ],
    },
    {
      heading: 'Structuring a Multi-Part Argument: Por una parte…por otra, En primer lugar…en definitiva',
      paragraphs: [
        "Once you're building a real argument — weighing two sides of an issue, or walking through several points in order — you need markers that organize the whole structure, not just connect two clauses. Spanish calls this family estructuradores de la información (information structurers), and within it, the specific markers you need at C2 are ordenadores: markers whose entire job is to tell the listener where a piece fits within a larger, ordered whole.",
        "Por una parte…por otra (parte) frames two sides of the same issue as a single, deliberately balanced comparison — not two random facts, but two faces of one coin: Por una parte, el teletrabajo mejora la conciliación familiar; por otra parte, dificulta la supervisión directa (\"On the one hand, telework improves work-life balance; on the other, it makes direct supervision harder\"). The pairing only works as a pair — starting with por una parte commits you to a por otra (parte) later, and using por otra parte alone, with no earlier por una parte, reads as structurally incomplete in careful writing (you'll hear it done anyway in speech, where the first half is sometimes just implied). Por un lado…por otro (lado) means exactly the same thing and is a completely correct, slightly less formal everyday variant — reach for parte in a report, lado in a conversation, and don't feel you have to pick one for the whole text.",
        "En primer lugar…en segundo lugar…(en último lugar) do a related but different job: they number a sequence of points in a list or argument, the way \"first…second…lastly\" does in English. What closes this kind of structured sequence is a separate pair of markers: en definitiva and en resumen. En definitiva means \"ultimately\" or \"in short\" — it signals the real, bottom-line conclusion the whole preceding discussion was building toward, not just \"the last item on my list.\" En resumen (\"in summary\") does something slightly different: it condenses everything said before into a compact restatement, useful when you genuinely want to summarize rather than conclude. Both wrap up a structured passage; en definitiva leans toward \"here's what it comes down to,\" en resumen leans toward \"here's the short version of everything I just said.\"",
        "It's worth being explicit about how this family differs from the other two in this unit: reformulators (o sea, es decir, mejor dicho) rework a single idea you just expressed; estructuradores organize an entire multi-point text or argument into a visible shape the listener can follow; and, as you'll see next, operadores discursivos do neither — they reinforce, correct, or digress from a specific claim. All three matter for the same overall goal: sounding like someone who is in full command of how they're building an argument, not just producing grammatically correct sentences one at a time.",
      ],
      examples: [
        { es: 'Por una parte, el teletrabajo mejora la conciliación familiar; por otra parte, dificulta la supervisión directa.', en: 'On the one hand, telework improves work-life balance; on the other, it makes direct supervision harder.' },
        { es: 'Por un lado me encanta empezar más tarde; por otro, echo de menos ver al equipo por la mañana.', en: 'On one hand I love starting later; on the other, I miss seeing the team in the morning.' },
        { es: 'En primer lugar, hay que revisar el presupuesto. En segundo lugar, contactar con los proveedores.', en: 'First, we need to review the budget. Second, contact the suppliers.' },
        { es: 'En definitiva, la decisión dependerá de los resultados de la encuesta.', en: 'Ultimately, the decision will depend on the results of the survey.' },
        { es: 'En resumen, las tres propuestas comparten el mismo objetivo.', en: 'In summary, all three proposals share the same goal.' },
      ],
      commonMistakes: [
        "Opening with por una parte and then never delivering por otra parte — the two halves are a matched pair, and dropping the second half (or replacing it with an unrelated además) leaves the structure visibly incomplete in formal writing.",
        "Treating por una parte/por otra parte and por un lado/por otro (lado) as different in meaning — they aren't; the only real difference is register (parte skews more formal/written, lado more everyday/spoken), so mixing them within one text is a style inconsistency, not a grammar error.",
        "Using en definitiva as if it just meant \"lastly\" in a numbered list — it specifically signals the overall conclusion or bottom line the discussion was building toward, which is a different job from en primer lugar/en segundo lugar's simple numbering.",
      ],
    },
    {
      heading: 'De hecho, En realidad, Por cierto: Reinforcing, Correcting, and Digressing',
      paragraphs: [
        "This last group, operadores discursivos (discourse operators), doesn't organize an argument's shape or restate a prior sentence — it does something more subtle: it tells the listener exactly what kind of move you're making with the specific claim you're about to say. Are you backing up your last point with harder evidence? Correcting a wrong impression? Or stepping sideways into something unrelated? Three markers, three completely different jobs, and mixing them up is a classic near-native slip.",
        "De hecho and en realidad both belong to what's called refuerzo argumentativo (argumentative reinforcement) — both strengthen a claim — but they reinforce in different ways. De hecho (\"in fact, as a matter of fact\") adds a stronger, more concrete piece of supporting evidence to something already said: Le gusta el cine; de hecho, va todas las semanas (\"He likes cinema; in fact, he goes every week\") — the second clause is hard evidence for the first. En realidad (\"actually, in reality\") does something closer to correcting an assumption or a false impression, often reorienting what came before: Parece fácil, pero en realidad es bastante complicado (\"It looks easy, but it's actually quite complicated\") — here the second half doesn't just add support, it overturns what the first half implied. A useful test: if what follows confirms and strengthens the previous idea with a concrete fact, reach for de hecho; if it corrects a wrong impression the previous idea created, reach for en realidad.",
        "Por cierto is a different creature altogether — a digresor (digression marker), not a reinforcement operator at all. It introduces a comment that sits outside the logical thread of the conversation, an aside: Por cierto, ¿ya reservaste el hotel para el viaje? (\"By the way, did you already book the hotel for the trip?\"). Nothing about the sentence that follows por cierto needs to connect logically to what was just said — that's the whole point of a digression marker, and it's precisely what separates por cierto from de hecho/en realidad, which do connect logically (as reinforcement or correction) to the prior claim.",
        "One precision worth holding onto, because it's a common confusion even among strong learners: de hecho is not the same as en efecto. En efecto confirms that something already stated turns out to be true (\"indeed, as expected\"); de hecho adds new supporting detail or evidence, without necessarily confirming a prior prediction. They can look similar in a rough English gloss but do different jobs — en efecto isn't one of this unit's three target markers, but knowing it exists as a close neighbor helps you not reach for de hecho when what you actually mean is simple confirmation.",
      ],
      examples: [
        { es: 'Le gusta el cine; de hecho, va todas las semanas.', en: 'He likes cinema; in fact, he goes every week.' },
        { es: 'Parece fácil, pero en realidad es bastante complicado.', en: "It looks easy, but it's actually quite complicated." },
        { es: 'Por cierto, ¿ya reservaste el hotel para el viaje?', en: 'By the way, did you already book the hotel for the trip?' },
        { es: 'Todos pensaban que había fracasado; de hecho, fue un éxito rotundo.', en: 'Everyone thought it had failed; in fact, it was a resounding success.' },
        { es: 'Se dice que el equipo no rinde bien; en realidad, los resultados han mejorado mucho.', en: "People say the team isn't performing well; actually, the results have improved a lot." },
      ],
      commonMistakes: [
        "Using de hecho when the intent is to correct a false impression rather than add supporting evidence — if the second clause overturns what the first implied (not just backs it up), en realidad is the more accurate choice.",
        "Using por cierto to reinforce an argument — it introduces a tangential, tonally unrelated remark, not another piece of evidence for the point you were just making; that job belongs to de hecho or en realidad, not por cierto.",
        "Confusing de hecho with en efecto — de hecho adds new concrete supporting detail; en efecto simply confirms that a prior statement or expectation was correct. They aren't freely interchangeable.",
      ],
    },
  ],

  vocab: [
    { es: 'el teletrabajo', en: 'remote work, telework', example: 'La empresa amplió el teletrabajo a tres días por semana.', exampleEn: 'The company expanded remote work to three days a week.' },
    { es: 'la conciliación (laboral y familiar)', en: 'work-life balance', example: 'El nuevo horario mejora la conciliación laboral y familiar.', exampleEn: 'The new schedule improves work-life balance.' },
    { es: 'la productividad', en: 'productivity', example: 'La productividad del equipo subió este trimestre.', exampleEn: "The team's productivity went up this quarter." },
    { es: 'el rendimiento', en: 'performance, output', example: 'El rendimiento del equipo mejoró con el nuevo horario.', exampleEn: "The team's performance improved with the new schedule." },
    { es: 'la plantilla', en: 'staff, workforce', example: 'Casi toda la plantilla apoya la propuesta.', exampleEn: 'Almost the entire staff supports the proposal.' },
    { es: 'el compromiso', en: 'commitment', example: 'El compromiso del equipo con el proyecto es evidente.', exampleEn: "The team's commitment to the project is clear." },
    { es: 'la propuesta', en: 'proposal', example: 'La dirección presentó una nueva propuesta de horario.', exampleEn: 'Management presented a new schedule proposal.' },
    { es: 'rebatir', en: 'to rebut, to refute', example: 'Intentó rebatir el argumento con datos concretos.', exampleEn: 'He tried to rebut the argument with concrete data.' },
    { es: 'sostener (que)', en: 'to maintain, to argue (that)', example: 'Ella sostiene que el teletrabajo no afecta la productividad.', exampleEn: 'She maintains that telework does not affect productivity.' },
    { es: 'la encuesta', en: 'survey, poll', example: 'Los resultados de la encuesta se publicarán el lunes.', exampleEn: 'The survey results will be published on Monday.' },
    { es: 'el desacuerdo', en: 'disagreement', example: 'Hay cierto desacuerdo entre los jefes de equipo.', exampleEn: 'There is some disagreement among the team leaders.' },
    { es: 'la jornada (laboral)', en: 'workday, shift', example: 'La jornada laboral empieza a las nueve.', exampleEn: 'The workday starts at nine.' },
    { es: 'matizar', en: 'to qualify, to add nuance to', example: 'Quiero matizar lo que dije antes sobre el proyecto.', exampleEn: 'I want to qualify what I said earlier about the project.' },
    { es: 'el consenso', en: 'consensus', example: 'Todavía no hay consenso sobre el nuevo horario.', exampleEn: 'There is still no consensus on the new schedule.' },
    { es: 'resentirse', en: 'to suffer, to be adversely affected', example: 'Temen que la comunicación del equipo se resienta.', exampleEn: "They fear the team's communication will suffer." },
  ],

  practice: [
    // ── reformuladores block (blocked practice: drilled alone before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: 'Read the passage, then answer: why does the speaker use "mejor dicho" in the last sentence instead of "es decir"?',
      passage: 'La empresa va a implementar un nuevo sistema de teletrabajo; es decir, los empleados podrán trabajar desde casa dos días a la semana. Muchos en la plantilla lo han recibido con entusiasmo, o sea, la mayoría está a favor. Sin embargo, el director no dijo que sería obligatorio — mejor dicho, cada equipo decidirá sus propios días según la carga de trabajo.',
      passageEn: "The company is going to roll out a new telework system; that is, employees will be able to work from home two days a week. Most of the staff have welcomed it enthusiastically — in other words, most are in favor. However, the director didn't say it would be mandatory — rather, each team will decide its own days based on workload.",
      word: 'mejor dicho',
      english: 'rather, more precisely (self-correction)',
      answer: 'Because they are correcting/sharpening what they just implied, not just rephrasing it in equivalent words',
      options: [
        'Because they are simply repeating the same idea in other words',
        'Because they are correcting/sharpening what they just implied, not just rephrasing it in equivalent words',
        'Because "mejor dicho" is more casual than "es decir"',
        'Because "mejor dicho" only works with negative sentences',
      ],
      concept_id: 'reformuladores',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: 'Según el texto, completa: "Muchos en la plantilla lo han recibido con entusiasmo, ___, la mayoría está a favor." (the casual, spoken reformulator)',
      word: 'o sea',
      english: 'that is, in other words',
      answer: 'o sea',
      concept_id: 'reformuladores',
      difficulty: 1,
      passage: 'La empresa va a implementar un nuevo sistema de teletrabajo; es decir, los empleados podrán trabajar desde casa dos días a la semana. Muchos en la plantilla lo han recibido con entusiasmo, o sea, la mayoría está a favor. Sin embargo, el director no dijo que sería obligatorio — mejor dicho, cada equipo decidirá sus propios días según la carga de trabajo.',
      passageEn: "The company is going to roll out a new telework system; that is, employees will be able to work from home two days a week. Most of the staff have welcomed it enthusiastically — in other words, most are in favor. However, the director didn't say it would be mandatory — rather, each team will decide its own days based on workload.",
    },
    {
      type: 'translation_to_english',
      prompt: 'Translate this sentence from the text: "Es decir, los empleados podrán trabajar desde casa dos días a la semana."',
      word: 'es decir',
      english: 'that is',
      answer: 'That is, employees will be able to work from home two days a week.',
      concept_id: 'reformuladores',
      difficulty: 1,
      passage: 'La empresa va a implementar un nuevo sistema de teletrabajo; es decir, los empleados podrán trabajar desde casa dos días a la semana. Muchos en la plantilla lo han recibido con entusiasmo, o sea, la mayoría está a favor. Sin embargo, el director no dijo que sería obligatorio — mejor dicho, cada equipo decidirá sus propios días según la carga de trabajo.',
      passageEn: "The company is going to roll out a new telework system; that is, employees will be able to work from home two days a week. Most of the staff have welcomed it enthusiastically — in other words, most are in favor. However, the director didn't say it would be mandatory — rather, each team will decide its own days based on workload.",
    },
    {
      type: 'multiple_choice',
      prompt: 'In the dialogue, what is Luis doing when he says "¿O sea, crees que trabajamos menos desde casa?"',
      word: 'o sea',
      english: 'so, in other words (checking understanding)',
      answer: 'Checking his understanding by rephrasing what Ana just said',
      options: [
        'Introducing a completely new, unrelated topic',
        'Checking his understanding by rephrasing what Ana just said',
        'Correcting a factual error Ana made',
        'Ending the conversation politely',
      ],
      concept_id: 'reformuladores',
      difficulty: 2,
      passage: 'Ana: Me parece que el teletrabajo reduce la productividad.\nLuis: ¿En serio? O sea, ¿crees que trabajamos menos desde casa?\nAna: No exactamente. Es decir, no es que trabajemos menos, sino que la comunicación se resiente.\nLuis: Ah, mejor dicho, el problema no es la cantidad de trabajo, sino la coordinación del equipo.',
      passageEn: "Ana: I think telework reduces productivity.\nLuis: Really? So, do you mean you think we work less from home?\nAna: Not exactly. That is, it's not that we work less, but that communication suffers.\nLuis: Ah, in other words, the problem isn't the amount of work, but the team's coordination.",
    },
    {
      type: 'fill_blank',
      prompt: 'Completa la línea de Luis: "Ah, ___, el problema no es la cantidad de trabajo, sino la coordinación del equipo." (self-correcting, sharpening Ana\'s point)',
      word: 'mejor dicho',
      english: 'rather, put more precisely',
      answer: 'mejor dicho',
      concept_id: 'reformuladores',
      difficulty: 2,
      passage: 'Ana: Me parece que el teletrabajo reduce la productividad.\nLuis: ¿En serio? O sea, ¿crees que trabajamos menos desde casa?\nAna: No exactamente. Es decir, no es que trabajemos menos, sino que la comunicación se resiente.\nLuis: Ah, mejor dicho, el problema no es la cantidad de trabajo, sino la coordinación del equipo.',
      passageEn: "Ana: I think telework reduces productivity.\nLuis: Really? So, do you mean you think we work less from home?\nAna: Not exactly. That is, it's not that we work less, but that communication suffers.\nLuis: Ah, in other words, the problem isn't the amount of work, but the team's coordination.",
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate, using a reformulator that corrects/refines a previous statement: 'She lives in Madrid — or rather, in a small town near Madrid.'",
      english: 'She lives in Madrid — or rather, in a small town near Madrid.',
      answer: 'Vive en Madrid — mejor dicho, en un pueblo pequeño cerca de Madrid.',
      word: 'mejor dicho',
      concept_id: 'reformuladores',
      difficulty: 3,
    },
    {
      type: 'error_correction',
      prompt: 'This line is from a formal written report, where the more casual reformulator sounds out of place: "El proyecto se retrasará un mes, o sea, no cumpliremos con el plazo original." Replace it with the neutral, written-register option.',
      word: 'es decir',
      english: 'that is (formal, written register)',
      answer: 'El proyecto se retrasará un mes; es decir, no cumpliremos con el plazo original.',
      concept_id: 'reformuladores',
      difficulty: 3,
    },

    // ── estructuradores_informacion block (kept separate; blocked before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: 'Read the passage, then answer: what function do "por una parte" and "por otra parte" serve together?',
      passage: 'Sobre la propuesta de teletrabajo hay opiniones divididas en la empresa. Por una parte, muchos empleados valoran la flexibilidad y la conciliación que ofrece. Por otra parte, algunos jefes de equipo temen que la comunicación se resienta. En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas. En definitiva, la decisión dependerá de los resultados de la encuesta interna que se realizará el próximo mes.',
      passageEn: "Opinions are divided at the company about the telework proposal. On the one hand, many employees value the flexibility and work-life balance it offers. On the other hand, some team leaders fear that communication will suffer. First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices. Ultimately, the decision will depend on the results of the internal survey to be carried out next month.",
      word: 'por una parte...por otra parte',
      english: 'on the one hand...on the other hand',
      answer: 'They present two contrasting sides of the same issue as one balanced comparison',
      options: [
        'They present two contrasting sides of the same issue as one balanced comparison',
        'They list unrelated topics in random order',
        'They introduce the final conclusion of the text',
        'They correct something said earlier in the text',
      ],
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
    },
    {
      type: 'fill_blank',
      prompt: 'Completa: "___, muchos empleados valoran la flexibilidad; por otra parte, algunos jefes temen que la comunicación se resienta."',
      word: 'Por una parte',
      english: 'on the one hand',
      answer: 'Por una parte',
      concept_id: 'estructuradores_informacion',
      difficulty: 1,
      passage: 'Sobre la propuesta de teletrabajo hay opiniones divididas en la empresa. Por una parte, muchos empleados valoran la flexibilidad y la conciliación que ofrece. Por otra parte, algunos jefes de equipo temen que la comunicación se resienta. En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas. En definitiva, la decisión dependerá de los resultados de la encuesta interna que se realizará el próximo mes.',
      passageEn: "Opinions are divided at the company about the telework proposal. On the one hand, many employees value the flexibility and work-life balance it offers. On the other hand, some team leaders fear that communication will suffer. First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices. Ultimately, the decision will depend on the results of the internal survey to be carried out next month.",
    },
    {
      type: 'fill_blank',
      prompt: 'Completa la conclusión del texto: "___, la decisión dependerá de los resultados de la encuesta interna." (the marker meaning "ultimately, in short")',
      word: 'En definitiva',
      english: 'ultimately, in short',
      answer: 'En definitiva',
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
      passage: 'Sobre la propuesta de teletrabajo hay opiniones divididas en la empresa. Por una parte, muchos empleados valoran la flexibilidad y la conciliación que ofrece. Por otra parte, algunos jefes de equipo temen que la comunicación se resienta. En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas. En definitiva, la decisión dependerá de los resultados de la encuesta interna que se realizará el próximo mes.',
      passageEn: "Opinions are divided at the company about the telework proposal. On the one hand, many employees value the flexibility and work-life balance it offers. On the other hand, some team leaders fear that communication will suffer. First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices. Ultimately, the decision will depend on the results of the internal survey to be carried out next month.",
    },
    {
      type: 'translation_to_english',
      prompt: 'Translate this sentence from the text: "En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas."',
      word: 'en primer lugar...en segundo lugar',
      english: 'first...second',
      answer: 'First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices.',
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
      passage: 'Sobre la propuesta de teletrabajo hay opiniones divididas en la empresa. Por una parte, muchos empleados valoran la flexibilidad y la conciliación que ofrece. Por otra parte, algunos jefes de equipo temen que la comunicación se resienta. En primer lugar, conviene analizar el impacto en la productividad. En segundo lugar, hay que evaluar el coste de mantener oficinas más pequeñas. En definitiva, la decisión dependerá de los resultados de la encuesta interna que se realizará el próximo mes.',
      passageEn: "Opinions are divided at the company about the telework proposal. On the one hand, many employees value the flexibility and work-life balance it offers. On the other hand, some team leaders fear that communication will suffer. First, we should analyze the impact on productivity. Second, we need to assess the cost of maintaining smaller offices. Ultimately, the decision will depend on the results of the internal survey to be carried out next month.",
    },
    {
      type: 'error_correction',
      prompt: 'Fix the gender agreement error: "Por una parte, el equipo apoya la medida; por otro parte, los directores dudan."',
      word: 'por otra parte',
      english: 'on the other hand',
      answer: 'Por una parte, el equipo apoya la medida; por otra parte, los directores dudan.',
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: 'Read the dialogue, then answer: is "por un lado...por otro" more or less formal than "por una parte...por otra parte"?',
      word: 'por un lado...por otro',
      english: 'on one hand...on the other (informal variant)',
      answer: 'Less formal — an equally correct, more everyday variant',
      options: [
        'More formal — reserved for legal and academic writing',
        'Less formal — an equally correct, more everyday variant',
        'They are never interchangeable in meaning',
        'Only "por un lado" is grammatically correct',
      ],
      options_note: undefined,
      concept_id: 'estructuradores_informacion',
      difficulty: 3,
      passage: 'Jefe: ¿Qué opináis del nuevo horario flexible?\nMarta: Por un lado, me encanta poder empezar más tarde. Por otro, echo de menos ver a todo el equipo junto por la mañana.\nJefe: Entiendo. En resumen, parece que la flexibilidad tiene ventajas y desventajas para todos.',
      passageEn: 'Boss: What do you all think of the new flexible schedule?\nMarta: On one hand, I love being able to start later. On the other, I miss seeing the whole team together in the morning.\nBoss: I understand. In short, it seems flexibility has both advantages and disadvantages for everyone.',
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate, using the closing/summary structurer meaning 'in short': 'In short, all three proposals share the same goal.'",
      english: 'In short, all three proposals share the same goal.',
      answer: 'En resumen, las tres propuestas comparten el mismo objetivo.',
      word: 'en resumen',
      concept_id: 'estructuradores_informacion',
      difficulty: 2,
    },

    // ── operadores_discursivos block (kept separate; blocked before mixed review) ──
    {
      type: 'multiple_choice',
      prompt: 'Read the dialogue, then answer: why does the employee use "en realidad" at the start of her reply?',
      word: 'en realidad',
      english: 'actually, in reality',
      answer: 'To correct a false impression the boss just expressed',
      options: [
        'To agree completely with what the boss just said',
        'To correct a false impression the boss just expressed',
        'To change the subject entirely, unrelated to the boss\'s comment',
        'To ask the boss a question',
      ],
      concept_id: 'operadores_discursivos',
      difficulty: 2,
      passage: 'Jefe: Se dice que el nuevo horario no está funcionando bien.\nEmpleada: En realidad, la mayoría del equipo está satisfecha. De hecho, el rendimiento subió un quince por ciento este trimestre.\nJefe: Qué buena noticia. Por cierto, ¿ya enviaste el informe de la encuesta?\nEmpleada: Sí, lo envié ayer por la tarde.',
      passageEn: "Boss: People say the new schedule isn't working well.\nEmployee: Actually, most of the team is satisfied. In fact, performance went up fifteen percent this quarter.\nBoss: That's great news. By the way, did you already send the survey report?\nEmployee: Yes, I sent it yesterday afternoon.",
    },
    {
      type: 'multiple_choice',
      prompt: 'In the same dialogue, why does the employee follow up with "de hecho" right after "en realidad"?',
      word: 'de hecho',
      english: 'in fact, as a matter of fact',
      answer: 'To reinforce her point with a concrete supporting fact (the 15% figure)',
      options: [
        'To reinforce her point with a concrete supporting fact (the 15% figure)',
        'To contradict what she just said',
        'To apologize for the schedule change',
        'To introduce a completely unrelated topic',
      ],
      concept_id: 'operadores_discursivos',
      difficulty: 2,
      passage: 'Jefe: Se dice que el nuevo horario no está funcionando bien.\nEmpleada: En realidad, la mayoría del equipo está satisfecha. De hecho, el rendimiento subió un quince por ciento este trimestre.\nJefe: Qué buena noticia. Por cierto, ¿ya enviaste el informe de la encuesta?\nEmpleada: Sí, lo envié ayer por la tarde.',
      passageEn: "Boss: People say the new schedule isn't working well.\nEmployee: Actually, most of the team is satisfied. In fact, performance went up fifteen percent this quarter.\nBoss: That's great news. By the way, did you already send the survey report?\nEmployee: Yes, I sent it yesterday afternoon.",
    },
    {
      type: 'fill_blank',
      prompt: 'Completa la línea del jefe: "Qué buena noticia. ___, ¿ya enviaste el informe de la encuesta?" (introduces an unrelated, tangential question)',
      word: 'Por cierto',
      english: 'by the way',
      answer: 'Por cierto',
      concept_id: 'operadores_discursivos',
      difficulty: 1,
      passage: 'Jefe: Se dice que el nuevo horario no está funcionando bien.\nEmpleada: En realidad, la mayoría del equipo está satisfecha. De hecho, el rendimiento subió un quince por ciento este trimestre.\nJefe: Qué buena noticia. Por cierto, ¿ya enviaste el informe de la encuesta?\nEmpleada: Sí, lo envié ayer por la tarde.',
      passageEn: "Boss: People say the new schedule isn't working well.\nEmployee: Actually, most of the team is satisfied. In fact, performance went up fifteen percent this quarter.\nBoss: That's great news. By the way, did you already send the survey report?\nEmployee: Yes, I sent it yesterday afternoon.",
    },
    {
      type: 'translation_to_english',
      prompt: 'Translate this sentence from the text: "En realidad, la mayoría del equipo está satisfecha. De hecho, el rendimiento subió un quince por ciento este trimestre."',
      word: 'en realidad / de hecho',
      english: 'actually / in fact',
      answer: 'Actually, most of the team is satisfied. In fact, performance went up fifteen percent this quarter.',
      concept_id: 'operadores_discursivos',
      difficulty: 2,
      passage: 'Jefe: Se dice que el nuevo horario no está funcionando bien.\nEmpleada: En realidad, la mayoría del equipo está satisfecha. De hecho, el rendimiento subió un quince por ciento este trimestre.\nJefe: Qué buena noticia. Por cierto, ¿ya enviaste el informe de la encuesta?\nEmpleada: Sí, lo envié ayer por la tarde.',
      passageEn: "Boss: People say the new schedule isn't working well.\nEmployee: Actually, most of the team is satisfied. In fact, performance went up fifteen percent this quarter.\nBoss: That's great news. By the way, did you already send the survey report?\nEmployee: Yes, I sent it yesterday afternoon.",
    },
    {
      type: 'error_correction',
      prompt: 'Fix the misuse: the speaker wants to reinforce their claim with supporting evidence, but "por cierto" only introduces asides, not reinforcement: "El equipo trabaja muy bien en remoto; por cierto, la productividad subió un veinte por ciento."',
      word: 'de hecho',
      english: 'in fact (reinforcing evidence, not a tangent)',
      answer: 'El equipo trabaja muy bien en remoto; de hecho, la productividad subió un veinte por ciento.',
      concept_id: 'operadores_discursivos',
      difficulty: 3,
    },
    {
      type: 'translation_to_spanish',
      prompt: "Translate: 'It looks easy, but it's actually quite complicated.'",
      english: "It looks easy, but it's actually quite complicated.",
      answer: 'Parece fácil, pero en realidad es bastante complicado.',
      word: 'en realidad',
      concept_id: 'operadores_discursivos',
      difficulty: 2,
    },
    {
      type: 'multiple_choice',
      prompt: 'Which sentence correctly uses "por cierto" to introduce a tangential, unrelated comment (not to reinforce an argument)?',
      word: 'por cierto',
      english: 'by the way',
      answer: 'Por cierto, ¿ya reservaste el hotel para el viaje?',
      options: [
        'Por cierto, ¿ya reservaste el hotel para el viaje?',
        'Por cierto, el proyecto fue un éxito rotundo.',
        'Por cierto, no es tan complicado como parece.',
        'Por cierto, trabaja todas las semanas en el mismo proyecto.',
      ],
      concept_id: 'operadores_discursivos',
      difficulty: 2,
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - reformuladores: the standard classification into reformuladores
//   explicativos (o sea, es decir, esto es, a saber — restating the same
//   idea for clarity, no correction implied) vs. reformuladores
//   rectificativos (mejor dicho, más bien — correcting/sharpening what was
//   just said); the register split within the explicativos group (o sea
//   dominant in speech and skewing casual, es decir/esto es/a saber the
//   written-safe/formal choices) — checked against Retóricas "Ejemplos de
//   Reformuladores," Castellano Actual (Universidad de Piura) "Los
//   reformuladores en el discurso," and the CVC (Centro Virtual Cervantes)
//   "Diccionario de términos clave de ELE" marcadores del discurso entry.
// - o sea's second, distinct function introducing a consequence in
//   colloquial speech (o sea que + indicative, "so...") as a genuinely
//   separate use from its explanatory/reformulating function, not a
//   contradiction of it — checked against a WordReference forum discussion
//   of "o sea (que)" and general es-decir-vs-o-sea register comparisons
//   (formal writing favors es decir; o sea is flagged as a filler/
//   colloquial marker in formal-vs-informal register guides).
// - estructuradores_informacion: the estructuradores category splits into
//   comentadores, ordenadores, and digresores; por una parte/por otra
//   parte and en primer lugar/en segundo lugar are ordenadores, whose job
//   is placing a discourse member within an ordered sequence of parts; en
//   definitiva functions as a marcador conclusivo (bottom-line conclusion,
//   distinct from simply "the last item in a numbered list") — checked
//   against Retóricas "Ejemplos de Marcadores Estructuradores" and the CVC
//   ELE dictionary's marcadores del discurso entry, consistent with the
//   existing estructuradores_informacion card in src/content/grammar.js
//   (which likewise notes por una parte requiring its por otra parte
//   counterpart, and por un lado/por otro as an equally correct, less
//   formal variant).
// - operadores_discursivos: de hecho and en realidad both classify as
//   operadores de refuerzo argumentativo (argumentative-reinforcement
//   operators), with de hecho reinforcing via added concrete
//   evidence/data and en realidad often functioning contra-argumentatively
//   to correct a prior assumption or reorient the discourse; por cierto
//   classifies as a conector/operador de digresión (digression marker),
//   introducing an aside outside the main argumentative thread, which is a
//   different category from refuerzo argumentativo entirely — checked
//   against the CVC ELE dictionary's marcadores del discurso entry, RAE's
//   Nueva gramática "Conectores discursivos adverbiales (I) y (II)"
//   chapters, and the AESLA/RAEL academic paper "Los operadores
//   discursivos de concreción o especificación y de refuerzo
//   argumentativo," consistent with the existing operadores_discursivos
//   card in src/content/grammar.js (including its de hecho vs. en efecto
//   distinction, which this unit's prose repeats without contradiction).
// This content is complementary to the existing GRAMMAR_CARDS entries for
// reformuladores, estructuradores_informacion, and operadores_discursivos
// in src/content/grammar.js (same facts, fuller C2-paced walkthrough built
// around one running workplace-telework-debate theme across all three
// sections) and does not contradict them. As the first unit in the
// curriculum to explicitly build on a prior unit's connector foundation
// (Unit 30, Connectors & Cohesion) rather than introducing a standalone
// grammar thread, this unit's prose deliberately foregrounds discourse
// function and register over new syntax, per this unit's C2-specific
// assignment.
