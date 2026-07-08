// Unit 30 — Connectors & Cohesion (C1)
// Covers: connectors_contrast, connectors_consequence,
// connectors_addition_sequence, connectors_cause_reason
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback. This unit sits at the end of the C1 sequence (after Units 26-29)
// and exists to fill a gap a curriculum scoping review identified: discourse
// connectors/markers had zero dedicated foundation anywhere below C2. The
// existing B1 unit called "Nuance & Connection" (Unit 20) is about tricky
// individual WORDS (por/para, relative clauses, saber/conocer, lo neutro),
// not discourse-level COHESION — and earlier units used pero/porque only
// incidentally, inside dialogue, without ever teaching the connector system
// itself. Without this unit, the planned C2 unit on reformuladores /
// estructuradores / operadores discursivos (o sea, por una parte...por
// otra, de hecho) would be a learner's first-ever exposure to the whole
// category of connector, at the hardest tier. This unit teaches the basic,
// one-word-or-short-phrase building blocks that C2 unit builds on. The
// explanations stay as clear as Unit 1's even though the material is
// advanced. Every Spanish claim below was verified via WebSearch against
// SpanishDict, RAE's Nueva gramática, and other established grammar
// references before writing — see the audit note at the bottom of this
// file.

export default {
  sections: [
    {
      heading: 'Beyond Pero: Contrast Connectors (Sin embargo, no obstante, en cambio)',
      paragraphs: [
        "Up to this point, every unit you've done has used pero (\"but\") whenever a sentence needed to pivot on a contrast, and that's been completely correct — pero is the default, all-purpose word for it, in speech and writing alike. But this is the first time this curriculum treats discourse connectors as their own system worth studying directly, rather than a word that quietly showed up inside a dialogue. From here on, you're learning the machinery that links whole sentences and ideas together, not just individual vocabulary.",
        'Sin embargo (\"however\"), no obstante (\"nevertheless\"), and en cambio (\"on the other hand,\" \"in contrast\") all express the same basic relationship as pero, but they belong to a more formal, more written register — the kind of connector you reach for in a report, an essay, or a considered spoken argument, rather than casual chat. Structurally they also behave differently from pero: rather than joining two clauses directly in one breath (X pero Y), they typically open or punctuate a full clause on their own, usually set off by a comma: La propuesta parecía sólida; sin embargo, el comité pidió más tiempo (\"The proposal seemed solid; however, the committee asked for more time\"). Pero can\'t open a new sentence this naturally in formal writing — sin embargo, no obstante, and en cambio can.',
        'Sin embargo is the safest, most versatile choice of the three and can replace either of the other two in most contexts. No obstante is a close synonym, marginally more formal still, and carries a slight extra flavor of concession — conceding that something happens despite an obstacle just mentioned. It also has a second life as a preposition, no obstante + noun, meaning "despite" or "in spite of": No obstante las dificultades, el equipo cumplió el plazo (\"Despite the difficulties, the team met the deadline\") — notice there\'s no que and no full clause there, just a noun phrase.',
        'En cambio is the odd one out, because it doesn\'t just soften an objection the way the other two do — it specifically sets two parallel situations side by side, contrasting what happens to one against what happens to the other: El primer proveedor subió los precios; el segundo, en cambio, los mantuvo igual (\"The first supplier raised prices; the second, in contrast, kept them the same\"). Reach for en cambio when you\'re comparing X against Y, and sin embargo/no obstante when you\'re contradicting an expectation more generally.',
      ],
      examples: [
        { es: 'El argumento era convincente; sin embargo, faltaban datos que lo respaldaran.', en: 'The argument was convincing; however, it lacked data to back it up.' },
        { es: 'No obstante las objeciones del director financiero, la junta aprobó el proyecto.', en: "Despite the CFO's objections, the board approved the project." },
        { es: 'Un proveedor ofrecía mejor precio; el otro, en cambio, ofrecía mejor calidad.', en: 'One supplier offered a better price; the other, in contrast, offered better quality.' },
        { es: 'La reunión se alargó dos horas; sin embargo, no llegamos a ningún consenso.', en: 'The meeting ran two hours long; however, we didn\'t reach any consensus.' },
        { es: 'El plan tenía varios inconvenientes. No obstante, era la opción más rentable.', en: 'The plan had several drawbacks. Nevertheless, it was the most cost-effective option.' },
        { es: 'Ella defendía la propuesta con firmeza; él, en cambio, no dejaba de plantear riesgos.', en: 'She defended the proposal firmly; he, on the other hand, kept raising risks.' },
      ],
      commonMistakes: [
        'Treating sin embargo, no obstante, and en cambio as if they could plug directly into a single clause the way pero does — X pero Y works, but X, en cambio, Y needs its own clause boundary and, usually, a comma; you can\'t compress it the way you can with pero.',
        "Using en cambio when there's no real second item being compared — en cambio needs two parallel things (X does one thing; Y, in contrast, does another). If you're simply contradicting an expectation with no second subject to compare, sin embargo or no obstante fits better.",
        'Forgetting that no obstante can work as a plain preposition before a noun (no obstante + noun, "despite ___") and not only as a clause-opening connector (no obstante, + full clause, "however") — the two patterns look similar but aren\'t interchangeable word-for-word.',
      ],
    },
    {
      heading: 'Stating the Result: Consequence Connectors (Por lo tanto, así que, de ahí que)',
      paragraphs: [
        "Just as Section 1 introduced formal alternatives to pero, this section does the same for the idea of \"so\" or \"therefore\" — a relationship you've been expressing informally (often just with two clauses run together, or entonces) without ever seeing it named and organized as its own connector family. That changes here.",
        'Por lo tanto and así que both mean "therefore" or "so," introducing a logical result of what was just said, and both take the indicative because the result is being stated as plain fact, not hedged or doubted: No había consenso; por lo tanto, se pospuso la votación ("There was no consensus; therefore, the vote was postponed"). The difference between them is almost entirely register: así que is the everyday, conversational choice, while por lo tanto is the one you\'d reach for in a report, a formal email, or a structured argument.',
        "De ahí que is the odd one out in this group, and it's worth slowing down for: it also introduces a consequence (\"hence,\" \"which is why\"), but it is normally followed by the subjunctive, not the indicative — the one clear exception among illative connectors, which otherwise all take the indicative. Ha trabajado sin parar; de ahí que esté agotada (\"She's worked non-stop, which is why she's exhausted\"). The reasoning behind the subjunctive here is subtle but consistent: de ahí que frames the consequence as something inferred or deduced from what came before, rather than a fact being reported directly — grammatically, Spanish treats an inferred conclusion differently from a flatly asserted one, the same underlying logic you've already met with dudar and negar in Unit 26.",
        "A practical note for a C1 speaker: all three connectors are common enough that you'll meet all of them constantly in the wild, but of ahí que's grammar is the one genuinely easy to get wrong, since it looks like it should just take a normal indicative result clause the way por lo tanto and así que do. It doesn't — build the habit now of pairing de ahí que with a subjunctive verb form automatically.",
      ],
      examples: [
        { es: 'El proyecto se retrasó tres meses; por lo tanto, el presupuesto tuvo que revisarse.', en: 'The project fell three months behind; therefore, the budget had to be revised.' },
        { es: 'No llegamos a un consenso, así que la decisión se pospuso hasta la próxima reunión.', en: "We didn't reach a consensus, so the decision was postponed until the next meeting." },
        { es: 'El equipo lleva meses sobrecargado, de ahí que la rotación de personal haya aumentado.', en: 'The team has been overloaded for months, which is why staff turnover has increased.' },
        { es: 'Las cifras eran contundentes; por lo tanto, nadie discutió la propuesta.', en: 'The figures were compelling; therefore, no one argued with the proposal.' },
        { es: 'El proveedor incumplió el contrato dos veces, así que decidimos descartarlo.', en: 'The supplier breached the contract twice, so we decided to rule them out.' },
        { es: 'El informe tenía fallos metodológicos, de ahí que sus conclusiones sean poco fiables.', en: 'The report had methodological flaws, which is why its conclusions are unreliable.' },
      ],
      commonMistakes: [
        'Defaulting to the indicative after de ahí que out of habit, since por lo tanto and así que both take it — de ahí que is the exception in this family and needs the subjunctive (de ahí que esté, de ahí que hayan aumentado), even though the result feels just as "real" as the others.',
        "Treating así que and por lo tanto as perfectly interchangeable in every context — they mean the same thing, but reaching for así que in a formal report or por lo tanto in casual conversation will sound off-register even if it's not technically wrong.",
        'Confusing de ahí que (a consequence connector, "hence") with desde ahí ("from there," a place) or simply de ahí ("from there," also literal) — the que is what turns this into the subjunctive-triggering discourse connector.',
      ],
    },
    {
      heading: 'Building an Argument: Addition & Sequence Connectors (Además, es más, en primer lugar…en segundo lugar…por último)',
      paragraphs: [
        "Earlier units let you add a second point to a sentence with y (\"and\") or también (\"also\"), but neither of those tells your listener anything about how strong that second point is or where it falls in a longer argument. This section introduces the first connectors in this curriculum built specifically for structuring a multi-point case — again, a category no earlier unit named directly, even though you've been building simple arguments in Spanish for a while now.",
        'Además means "furthermore" or "besides" — it adds a further, complementary point to what was just said, at roughly the same weight: El candidato tiene la experiencia necesaria. Además, habla tres idiomas ("The candidate has the necessary experience. Furthermore, he speaks three languages"). Es más goes a step beyond that: it doesn\'t just add another fact, it intensifies — introducing something stronger, more surprising, or more damning than what came before. No cumplió el plazo; es más, ni siquiera avisó del retraso ("He missed the deadline; what\'s more, he didn\'t even warn about the delay") only works because the second fact escalates the first. Reach for es más when the new point should land harder than the one before it; use además for a same-level addition, since dropping es más onto a merely neutral second fact tends to sound overblown.',
        "En primer lugar…en segundo lugar…por último is a closed, matched set for walking a listener through an argument step by step: \"firstly…secondly…lastly.\" It's especially useful in exactly the kind of setting this unit's theme is built around — laying out a case in a meeting or a written proposal: En primer lugar, el coste actual es insostenible. En segundo lugar, la competencia ya ha hecho el cambio. Por último, el equipo técnico ya está preparado (\"Firstly, the current cost is unsustainable. Secondly, the competition has already made the switch. Lastly, the technical team is already prepared\"). Because it's a matched sequence, it holds together best when you use it as a set rather than mixing en primer lugar with an unrelated ordinal like primero or finalmente midway through the same argument.",
        "One precision worth keeping straight: por último here means \"lastly\" in the sense of closing out a list of points, not \"finally\" in the sense of \"at long last, after a wait\" — that second meaning belongs to por fin. Por último organizes structure; por fin expresses relief or the end of a wait.",
      ],
      examples: [
        { es: 'El plan reduce costes. Además, mejora la satisfacción del equipo.', en: 'The plan cuts costs. Furthermore, it improves team satisfaction.' },
        { es: 'La propuesta llegó tarde; es más, ni siquiera incluía un presupuesto.', en: "The proposal arrived late; what's more, it didn't even include a budget." },
        { es: 'En primer lugar, revisemos las cifras. En segundo lugar, escuchemos al equipo técnico. Por último, votemos.', en: "First, let's review the figures. Second, let's hear from the technical team. Lastly, let's vote." },
        { es: 'El proveedor es fiable. Además, su plantilla habla nuestro idioma.', en: 'The supplier is reliable. Besides, their staff speaks our language.' },
        { es: 'No respondió a los correos; es más, canceló la llamada sin avisar.', en: "He didn't reply to the emails; what's more, he cancelled the call without notice." },
        { es: 'Por último, quiero agradecer a todos su paciencia durante este proceso.', en: 'Lastly, I want to thank everyone for their patience during this process.' },
      ],
      commonMistakes: [
        'Reaching for es más to add a plain, unremarkable second fact — es más needs the new point to escalate or surprise; for a neutral addition of similar weight, además is the natural choice.',
        'Mixing en primer lugar with primero, luego, or finalmente inside what should be one structured sequence — the en primer/segundo lugar…por último set is meant to be used together as a matched chain in more formal speech or writing.',
        'Reading por último as "finally, at last" (relief after a wait) — that sense belongs to por fin; por último only marks the last item in a structured list of points.',
      ],
    },
    {
      heading: 'Giving a Reason Up Front: Cause/Reason Connectors (Ya que, puesto que, dado que vs. porque)',
      paragraphs: [
        "You already know porque (\"because\") from far earlier units — you've used it constantly to answer why something happened. What you haven't seen until now is that porque has a real structural limit: it normally can't open a sentence the way \"because\" sometimes can loosely in English. *Porque llovía, no salimos sounds distinctly odd to a native speaker; the natural order is No salimos porque llovía, reason after result. (The one common exception is answering a direct question — ¿Por qué no viniste? Porque no tenía tiempo is perfectly natural, since there porque is completing an already-asked question, not opening a fresh statement.)",
        'Ya que, puesto que, and dado que exist to fill exactly that gap: they introduce a reason, just like porque, but they can freely open the sentence, putting the cause before the result: Ya que insistes, te acompaño (\"Since you insist, I\'ll go with you\"), Dado que los resultados fueron positivos, se aprobó el proyecto (\"Given that the results were positive, the project was approved\"). All three are also more formal than plain porque, and all three are followed by the indicative, with no subjunctive alternative to worry about here.',
        "There's a real difference in what these connectors imply about the listener, not just where they sit in the sentence: porque tends to introduce a reason as new information the listener didn't already have, while ya que, puesto que, and dado que present the reason as something already shared, known, or obvious to both people in the conversation. Puesto que no hay más preguntas, damos por terminada la reunión (\"Since there are no more questions, we'll consider the meeting over\") treats the lack of questions as something everyone in the room can already see — it isn't news.",
        'Among the three, dado que and puesto que are close to interchangeable and both translate roughly as "given that"; ya que can carry that same sense but can also lean toward "now that," marking a reason tied to a recently changed situation: Ya que ya tenemos los datos, podemos decidir hoy mismo ("Now that we already have the data, we can decide today"). All three, and porque\'s own negative forms, share one more restriction worth knowing at this level: ya que, puesto que, and dado que don\'t admit a "no" directly in front of the connector the way certain porque constructions can — this is a fine point, and simply knowing the three formal connectors always keep a straightforwardly affirmative shape is enough for now.',
      ],
      examples: [
        { es: 'Ya que estamos todos de acuerdo, pasemos a la votación.', en: "Since we're all in agreement, let's move to the vote." },
        { es: 'Puesto que no hay más objeciones, damos el proyecto por aprobado.', en: 'Since there are no more objections, we consider the project approved.' },
        { es: 'Dado que el riesgo era demasiado alto, el comité descartó la propuesta.', en: 'Given that the risk was too high, the committee ruled out the proposal.' },
        { es: 'No renovamos el contrato porque el proveedor incumplió los plazos.', en: "We didn't renew the contract because the supplier missed the deadlines." },
        { es: '¿Por qué se pospuso la reunión? — Porque faltaba el respaldo de dirección.', en: 'Why was the meeting postponed? — Because it lacked backing from management.' },
        { es: 'Ya que la plantilla ya está reducida, no podemos permitirnos más retrasos.', en: "Now that the staff is already reduced, we can't afford any more delays." },
      ],
      commonMistakes: [
        'Opening a sentence with porque outside of a direct answer to "why" — *Porque el riesgo era alto, lo descartamos sounds foreign to a native ear; ya que, puesto que, or dado que is the natural choice to lead with a reason: Dado que el riesgo era alto, lo descartamos.',
        "Assuming ya que/puesto que/dado que and porque are simply interchangeable synonyms — they share a meaning but not a register or an implication: the formal three present the reason as already known/given, while porque more often introduces it as new information.",
        'Reaching for the subjunctive after ya que, puesto que, or dado que by analogy with de ahí que from Section 2 — these three always take the indicative; only de ahí que, among the connectors in this unit, requires the subjunctive.',
      ],
    },
  ],

  vocab: [
    { es: 'la propuesta', en: 'the proposal', example: 'El comité revisó la propuesta antes de votar.', exampleEn: 'The committee reviewed the proposal before voting.' },
    { es: 'el argumento', en: 'the argument', example: 'Su argumento convenció incluso a los más escépticos.', exampleEn: 'Her argument convinced even the most skeptical.' },
    { es: 'la ventaja', en: 'the advantage', example: 'La principal ventaja es el ahorro de tiempo.', exampleEn: 'The main advantage is the time saved.' },
    { es: 'el inconveniente', en: 'the drawback, the downside', example: 'El único inconveniente es el coste inicial.', exampleEn: 'The only drawback is the initial cost.' },
    { es: 'rentable', en: 'profitable, cost-effective', example: 'A largo plazo, el cambio resultó rentable.', exampleEn: 'In the long run, the switch turned out to be cost-effective.' },
    { es: 'el consenso', en: 'the consensus', example: 'No hubo consenso sobre cómo proceder.', exampleEn: 'There was no consensus on how to proceed.' },
    { es: 'postergar', en: 'to postpone, to put off', example: 'Decidieron postergar la decisión una semana más.', exampleEn: 'They decided to postpone the decision one more week.' },
    { es: 'descartar', en: 'to rule out, to dismiss', example: 'El equipo descartó la primera opción por el riesgo.', exampleEn: 'The team ruled out the first option because of the risk.' },
    { es: 'el riesgo', en: 'the risk', example: 'Asumir ese riesgo podría salir muy caro.', exampleEn: 'Taking on that risk could turn out very costly.' },
    { es: 'la plantilla', en: 'the staff, the workforce', example: 'La plantilla creció un veinte por ciento este año.', exampleEn: "The workforce grew twenty percent this year." },
    { es: 'la sobrecarga', en: 'the overload', example: 'La sobrecarga de trabajo empezó a notarse en el equipo.', exampleEn: 'The work overload started to show in the team.' },
    { es: 'contundente', en: 'compelling, forceful, conclusive', example: 'Presentó datos contundentes a favor del cambio.', exampleEn: 'She presented compelling data in favor of the change.' },
    { es: 'el respaldo', en: 'the backing, the support', example: 'Sin el respaldo de dirección, el proyecto no avanza.', exampleEn: "Without management's backing, the project doesn't move forward." },
    { es: 'viable', en: 'viable, feasible', example: 'La propuesta es viable solo si reducimos el alcance.', exampleEn: 'The proposal is viable only if we reduce the scope.' },
    { es: 'la reticencia', en: 'the reluctance, the hesitancy', example: 'Notamos cierta reticencia por parte del cliente.', exampleEn: 'We noticed some reluctance on the client\'s part.' },
  ],

  practice: [
    // ── connectors_contrast block (blocked practice: drilled alone before mixing with other connector types) ──
    { type: 'multiple_choice', prompt: "Complete: 'Los dos proveedores ofrecían precios similares; el primero, ___, entregaba mucho más rápido.' (contrasting two parallel options)", word: 'en cambio', english: 'in contrast', answer: 'en cambio', options: ['además', 'en cambio', 'por lo tanto', 'dado que'], concept_id: 'connectors_contrast', difficulty: 2 },
    { type: 'fill_blank', prompt: "Complete: 'La propuesta tenía varias ventajas. ___, el comité pidió más tiempo para decidir.' (however, more formal register)", word: 'sin embargo', english: 'however', answer: 'sin embargo', concept_id: 'connectors_contrast', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate, using 'no obstante' as a preposition: 'Despite the risks, the board approved the proposal.'", english: 'Despite the risks, the board approved the proposal.', answer: 'No obstante los riesgos, la junta aprobó la propuesta.', word: 'no obstante', concept_id: 'connectors_contrast', difficulty: 3 },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la línea de Marta: 'El presupuesto es limitado. ___, creo que la propuesta sigue siendo viable.'",
      word: 'sin embargo',
      english: 'however',
      answer: 'sin embargo',
      concept_id: 'connectors_contrast',
      difficulty: 2,
      passage: 'Marta: He revisado los dos proveedores. El primero es más barato; el segundo, en cambio, tiene mejor reputación de servicio.\nLuis: ¿Y cuál recomiendas?\nMarta: El presupuesto es limitado. Sin embargo, creo que la propuesta sigue siendo viable con el segundo proveedor, a pesar del coste.\nLuis: No obstante las quejas que hemos recibido antes, a mí me sigue preocupando su plazo de entrega.',
      passageEn: "Marta: I've reviewed the two suppliers. The first is cheaper; the second, in contrast, has a better service reputation.\nLuis: And which do you recommend?\nMarta: The budget is limited. However, I think the proposal is still viable with the second supplier, despite the cost.\nLuis: Despite the complaints we've received before, I'm still worried about their delivery time.",
    },
    {
      type: 'multiple_choice',
      prompt: "En el diálogo, Marta dice 'El primero es más barato; el segundo, en cambio, tiene mejor reputación.' ¿Por qué se usa 'en cambio' aquí?",
      word: 'en cambio',
      english: 'in contrast',
      answer: 'Porque contrasta dos opciones paralelas, una frente a la otra',
      options: [
        'Porque contrasta dos opciones paralelas, una frente a la otra',
        'Porque introduce una consecuencia lógica',
        'Porque añade un punto más fuerte al anterior',
        'Porque exige el subjuntivo en la oración siguiente',
      ],
      concept_id: 'connectors_contrast',
      difficulty: 3,
      passage: 'Marta: He revisado los dos proveedores. El primero es más barato; el segundo, en cambio, tiene mejor reputación de servicio.\nLuis: ¿Y cuál recomiendas?\nMarta: El presupuesto es limitado. Sin embargo, creo que la propuesta sigue siendo viable con el segundo proveedor, a pesar del coste.\nLuis: No obstante las quejas que hemos recibido antes, a mí me sigue preocupando su plazo de entrega.',
      passageEn: "Marta: I've reviewed the two suppliers. The first is cheaper; the second, in contrast, has a better service reputation.\nLuis: And which do you recommend?\nMarta: The budget is limited. However, I think the proposal is still viable with the second supplier, despite the cost.\nLuis: Despite the complaints we've received before, I'm still worried about their delivery time.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate Luis's line from the dialogue: 'No obstante las quejas que hemos recibido antes, a mí me sigue preocupando su plazo de entrega.'",
      word: 'no obstante',
      english: 'despite',
      answer: "Despite the complaints we've received before, I'm still worried about their delivery time.",
      concept_id: 'connectors_contrast',
      difficulty: 3,
      passage: 'Marta: He revisado los dos proveedores. El primero es más barato; el segundo, en cambio, tiene mejor reputación de servicio.\nLuis: ¿Y cuál recomiendas?\nMarta: El presupuesto es limitado. Sin embargo, creo que la propuesta sigue siendo viable con el segundo proveedor, a pesar del coste.\nLuis: No obstante las quejas que hemos recibido antes, a mí me sigue preocupando su plazo de entrega.',
      passageEn: "Marta: I've reviewed the two suppliers. The first is cheaper; the second, in contrast, has a better service reputation.\nLuis: And which do you recommend?\nMarta: The budget is limited. However, I think the proposal is still viable with the second supplier, despite the cost.\nLuis: Despite the complaints we've received before, I'm still worried about their delivery time.",
    },

    // ── connectors_consequence block (kept separate from contrast; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Complete: 'No hubo consenso; ___, se postergó la votación.' (formal register, therefore)", word: 'por lo tanto', english: 'therefore', answer: 'por lo tanto', options: ['en cambio', 'por lo tanto', 'ya que', 'es más'], concept_id: 'connectors_consequence', difficulty: 2 },
    { type: 'fill_blank', prompt: "Complete with the correct mood: 'El equipo lleva meses sobrecargado, de ahí que la rotación ___ (haber) aumentado.'", word: 'haya', english: 'has (subjunctive)', answer: 'haya', concept_id: 'connectors_consequence', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate, using 'así que': 'The supplier missed the deadline again, so we ruled them out.'", english: 'The supplier missed the deadline again, so we ruled them out.', answer: 'El proveedor incumplió el plazo otra vez, así que lo descartamos.', word: 'así que', concept_id: 'connectors_consequence', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: 'El informe tenía fallos evidentes, de ahí que sus conclusiones ___ (ser) poco fiables.'",
      word: 'sean',
      english: 'are (subjunctive)',
      answer: 'sean',
      concept_id: 'connectors_consequence',
      difficulty: 3,
      passage: 'El informe que presentó el equipo de análisis tenía fallos evidentes, de ahí que sus conclusiones sean poco fiables. Además, no se consultó a la plantilla antes de redactarlo, así que muchos empleados se sintieron ignorados. Por lo tanto, la dirección decidió encargar un segundo informe independiente antes de tomar cualquier decisión final.',
      passageEn: "The report the analysis team presented had obvious flaws, which is why its conclusions are unreliable. Furthermore, staff weren't consulted before it was written, so many employees felt ignored. Therefore, management decided to commission a second, independent report before making any final decision.",
    },
    {
      type: 'multiple_choice',
      prompt: "Según el texto: 'de ahí que sus conclusiones sean poco fiables.' ¿Por qué se usa el subjuntivo (sean) y no el indicativo (son)?",
      word: 'de ahí que',
      english: 'which is why (+ subjunctive)',
      answer: 'Porque de ahí que presenta la consecuencia como algo deducido, no como un hecho afirmado directamente',
      options: [
        'Porque de ahí que presenta la consecuencia como algo deducido, no como un hecho afirmado directamente',
        'Porque el sujeto de la oración es plural',
        'Porque el informe está en tiempo pasado',
        'Porque de ahí que siempre se refiere a algo hipotético que nunca ocurrió',
      ],
      concept_id: 'connectors_consequence',
      difficulty: 3,
      passage: 'El informe que presentó el equipo de análisis tenía fallos evidentes, de ahí que sus conclusiones sean poco fiables. Además, no se consultó a la plantilla antes de redactarlo, así que muchos empleados se sintieron ignorados. Por lo tanto, la dirección decidió encargar un segundo informe independiente antes de tomar cualquier decisión final.',
      passageEn: "The report the analysis team presented had obvious flaws, which is why its conclusions are unreliable. Furthermore, staff weren't consulted before it was written, so many employees felt ignored. Therefore, management decided to commission a second, independent report before making any final decision.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Por lo tanto, la dirección decidió encargar un segundo informe independiente.'",
      word: 'por lo tanto',
      english: 'therefore',
      answer: 'Therefore, management decided to commission a second, independent report.',
      concept_id: 'connectors_consequence',
      difficulty: 2,
      passage: 'El informe que presentó el equipo de análisis tenía fallos evidentes, de ahí que sus conclusiones sean poco fiables. Además, no se consultó a la plantilla antes de redactarlo, así que muchos empleados se sintieron ignorados. Por lo tanto, la dirección decidió encargar un segundo informe independiente antes de tomar cualquier decisión final.',
      passageEn: "The report the analysis team presented had obvious flaws, which is why its conclusions are unreliable. Furthermore, staff weren't consulted before it was written, so many employees felt ignored. Therefore, management decided to commission a second, independent report before making any final decision.",
    },

    // ── connectors_addition_sequence block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Complete: 'No respondió a los correos; ___, canceló la llamada sin avisar.' (the second fact should land harder than the first)", word: 'es más', english: "what's more", answer: 'es más', options: ['además', 'es más', 'en cambio', 'puesto que'], concept_id: 'connectors_addition_sequence', difficulty: 2 },
    { type: 'fill_blank', prompt: "Complete the closing connector: '___ lugar, quiero agradecer a todo el equipo su esfuerzo.' (lastly, closing a list of points)", word: 'por último', english: 'lastly', answer: 'por último', concept_id: 'connectors_addition_sequence', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate, structuring three points in sequence: 'Firstly, let's review the budget. Secondly, let's contact the suppliers. Lastly, let's set a deadline.'", english: "Firstly, let's review the budget. Secondly, let's contact the suppliers. Lastly, let's set a deadline.", answer: 'En primer lugar, revisemos el presupuesto. En segundo lugar, contactemos con los proveedores. Por último, fijemos un plazo.', word: 'en primer lugar', concept_id: 'connectors_addition_sequence', difficulty: 3 },
    {
      type: 'fill_blank',
      prompt: "Según el texto, completa: '___ lugar, el coste actual es insostenible.'",
      word: 'en primer',
      english: 'firstly',
      answer: 'en primer',
      concept_id: 'connectors_addition_sequence',
      difficulty: 2,
      passage: 'La directora tomó la palabra: "En primer lugar, el coste actual es insostenible: la plantilla ha crecido, pero el presupuesto no. En segundo lugar, la competencia ya ha hecho el cambio y nosotros vamos con retraso. Por último, el equipo técnico ya está preparado, así que no tenemos excusa para seguir postergando la decisión." Además, añadió que el consenso interno era casi total; es más, ni siquiera el departamento financiero, normalmente el más reticente, había puesto objeciones esta vez.',
      passageEn: 'The director spoke up: "Firstly, the current cost is unsustainable: the workforce has grown, but the budget hasn\'t. Secondly, the competition has already made the switch, and we\'re falling behind. Lastly, the technical team is already prepared, so we have no excuse to keep postponing the decision." She also added that internal consensus was nearly unanimous; what\'s more, not even the finance department, usually the most reluctant, had raised objections this time.',
    },
    {
      type: 'multiple_choice',
      prompt: "Según el texto: '...es más, ni siquiera el departamento financiero... había puesto objeciones esta vez.' ¿Por qué se usa 'es más' aquí y no 'además'?",
      word: 'es más',
      english: "what's more",
      answer: 'Porque el hecho añadido es más sorprendente o contundente que el anterior, no un simple dato más',
      options: [
        'Porque el hecho añadido es más sorprendente o contundente que el anterior, no un simple dato más',
        'Porque "es más" solo se usa al final de una lista',
        'Porque "además" no puede usarse en presente',
        'Porque el sujeto de la oración cambia de singular a plural',
      ],
      concept_id: 'connectors_addition_sequence',
      difficulty: 3,
      passage: 'La directora tomó la palabra: "En primer lugar, el coste actual es insostenible: la plantilla ha crecido, pero el presupuesto no. En segundo lugar, la competencia ya ha hecho el cambio y nosotros vamos con retraso. Por último, el equipo técnico ya está preparado, así que no tenemos excusa para seguir postergando la decisión." Además, añadió que el consenso interno era casi total; es más, ni siquiera el departamento financiero, normalmente el más reticente, había puesto objeciones esta vez.',
      passageEn: 'The director spoke up: "Firstly, the current cost is unsustainable: the workforce has grown, but the budget hasn\'t. Secondly, the competition has already made the switch, and we\'re falling behind. Lastly, the technical team is already prepared, so we have no excuse to keep postponing the decision." She also added that internal consensus was nearly unanimous; what\'s more, not even the finance department, usually the most reluctant, had raised objections this time.',
    },
    {
      type: 'translation_to_english',
      prompt: "Translate this sentence from the text: 'Por último, el equipo técnico ya está preparado, así que no tenemos excusa para seguir postergando la decisión.'",
      word: 'por último',
      english: 'lastly',
      answer: "Lastly, the technical team is already prepared, so we have no excuse to keep postponing the decision.",
      concept_id: 'connectors_addition_sequence',
      difficulty: 3,
      passage: 'La directora tomó la palabra: "En primer lugar, el coste actual es insostenible: la plantilla ha crecido, pero el presupuesto no. En segundo lugar, la competencia ya ha hecho el cambio y nosotros vamos con retraso. Por último, el equipo técnico ya está preparado, así que no tenemos excusa para seguir postergando la decisión." Además, añadió que el consenso interno era casi total; es más, ni siquiera el departamento financiero, normalmente el más reticente, había puesto objeciones esta vez.',
      passageEn: 'The director spoke up: "Firstly, the current cost is unsustainable: the workforce has grown, but the budget hasn\'t. Secondly, the competition has already made the switch, and we\'re falling behind. Lastly, the technical team is already prepared, so we have no excuse to keep postponing the decision." She also added that internal consensus was nearly unanimous; what\'s more, not even the finance department, usually the most reluctant, had raised objections this time.',
    },

    // ── connectors_cause_reason block (kept separate; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: "Which of these can naturally OPEN a sentence to give a reason, unlike porque? '___ el riesgo era demasiado alto, descartamos la propuesta.'", word: 'dado que', english: 'given that', answer: 'Dado que', options: ['Porque', 'Dado que', 'Es más', 'En cambio'], concept_id: 'connectors_cause_reason', difficulty: 2 },
    { type: 'error_correction', prompt: "Fix the error (porque cannot naturally open this sentence to state a reason): 'Porque no había respaldo de dirección, se descartó la propuesta.'", word: 'ya que', english: 'since', answer: 'Ya que no había respaldo de dirección, se descartó la propuesta.', concept_id: 'connectors_cause_reason', difficulty: 3 },
    { type: 'fill_blank', prompt: "Complete: '___ no hay más objeciones, damos la reunión por terminada.' (since — presenting the reason as already obvious to everyone)", word: 'puesto que', english: 'since', answer: 'puesto que', concept_id: 'connectors_cause_reason', difficulty: 2 },
    {
      type: 'fill_blank',
      prompt: "Según el diálogo, completa la línea de Sonia: '___ ya tenemos los datos, podemos decidir hoy mismo.'",
      word: 'ya que',
      english: 'now that',
      answer: 'ya que',
      concept_id: 'connectors_cause_reason',
      difficulty: 2,
      passage: 'Sonia: Ya que ya tenemos los datos, podemos decidir hoy mismo.\nPablo: Dado que el riesgo financiero es bajo, yo estoy a favor de seguir adelante.\nSonia: Puesto que no hay más objeciones en la sala, propongo que votemos ahora.\nPablo: De acuerdo. No lo pospongamos más porque ya llevamos tres semanas de retraso.',
      passageEn: "Sonia: Now that we already have the data, we can decide today.\nPablo: Given that the financial risk is low, I'm in favor of moving forward.\nSonia: Since there are no more objections in the room, I propose we vote now.\nPablo: Agreed. Let's not postpone it any longer, because we're already three weeks behind.",
    },
    {
      type: 'multiple_choice',
      prompt: "En el diálogo, Pablo dice 'No lo pospongamos más porque ya llevamos tres semanas de retraso.' ¿Por qué es correcto usar 'porque' aquí, después de la cláusula principal, y no al principio de la oración?",
      word: 'porque',
      english: 'because',
      answer: 'Porque porque normalmente no abre una oración para dar una razón nueva; va después del resultado, no antes',
      options: [
        'Porque porque normalmente no abre una oración para dar una razón nueva; va después del resultado, no antes',
        'Porque "porque" siempre exige el subjuntivo',
        'Porque "porque" es más formal que "ya que"',
        'Porque "porque" solo se usa en preguntas',
      ],
      concept_id: 'connectors_cause_reason',
      difficulty: 3,
      passage: 'Sonia: Ya que ya tenemos los datos, podemos decidir hoy mismo.\nPablo: Dado que el riesgo financiero es bajo, yo estoy a favor de seguir adelante.\nSonia: Puesto que no hay más objeciones en la sala, propongo que votemos ahora.\nPablo: De acuerdo. No lo pospongamos más porque ya llevamos tres semanas de retraso.',
      passageEn: "Sonia: Now that we already have the data, we can decide today.\nPablo: Given that the financial risk is low, I'm in favor of moving forward.\nSonia: Since there are no more objections in the room, I propose we vote now.\nPablo: Agreed. Let's not postpone it any longer, because we're already three weeks behind.",
    },
    {
      type: 'translation_to_english',
      prompt: "Translate Pablo's first line from the dialogue: 'Dado que el riesgo financiero es bajo, yo estoy a favor de seguir adelante.'",
      word: 'dado que',
      english: 'given that',
      answer: "Given that the financial risk is low, I'm in favor of moving forward.",
      concept_id: 'connectors_cause_reason',
      difficulty: 2,
      passage: 'Sonia: Ya que ya tenemos los datos, podemos decidir hoy mismo.\nPablo: Dado que el riesgo financiero es bajo, yo estoy a favor de seguir adelante.\nSonia: Puesto que no hay más objeciones en la sala, propongo que votemos ahora.\nPablo: De acuerdo. No lo pospongamos más porque ya llevamos tres semanas de retraso.',
      passageEn: "Sonia: Now that we already have the data, we can decide today.\nPablo: Given that the financial risk is low, I'm in favor of moving forward.\nSonia: Since there are no more objections in the room, I propose we vote now.\nPablo: Agreed. Let's not postpone it any longer, because we're already three weeks behind.",
    },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch before writing (July 2026):
// - connectors_contrast: sin embargo and no obstante are near-synonyms, with
//   no obstante slightly more formal and carrying a shade of concession; both
//   are more formal/written-register than pero; no obstante also functions
//   as a preposition (no obstante + noun, "despite ___"), distinct from its
//   use as a clause-opening connector; en cambio specifically contrasts two
//   parallel subjects/situations rather than a general "however" — checked
//   against SpanishStep's "How to Use Sin Embargo in Spanish for Contrast",
//   Elon.io's "Formal Written Discourse Connectors" page, Baselang's "But in
//   Spanish" guide, and SpanishStep's dedicated "No obstante" grammar page
//   (confirming its dual connector/preposition use and formal register).
// - connectors_consequence: por lo tanto (formal) and así que (conversational)
//   both mean "therefore/so" and take the indicative; de ahí que is the
//   documented exception among illative connectors and normally requires
//   the subjunctive — checked directly against the RAE's Nueva gramática de
//   la lengua española, "Elección del modo con las conjunciones
//   subordinantes" (46.12f: illative locutions take indicative "except de
//   ahí que and de aquí que, which take subjunctive"), Instituto Cervantes'
//   CVC forum thread on "de ahí que + subjuntivo", and Tercera Gramática's
//   "El subjuntivo es lógico: de ahí que" analysis (confirming the
//   subjunctive reflects the consequence being framed as inferred/deduced
//   rather than flatly asserted, and that occasional indicative is
//   considered non-standard/careless rather than an equally valid variant —
//   this unit teaches the normed subjunctive pattern as standard, matching
//   the existing GRAMMAR_CARDS entry for this concept).
// - connectors_addition_sequence: además adds a same-level point; es más
//   intensifies with something stronger/more surprising than a plain
//   addition; en primer lugar…en segundo lugar…por último forms a matched
//   sequencing set for structuring an argument; por último marks the last
//   item in a list, distinct from por fin ("finally," relief after a wait)
//   — checked against Preply's and Migaku's Spanish-connectors guides
//   (además, es más as addition/intensifying connectors) and Clozemaster's/
//   Spanish.academy's transition-words guides (en primer lugar / por último
//   as a sequencing set).
// - connectors_cause_reason: porque normally cannot open a sentence to give
//   a fresh reason (the natural order keeps porque after the main clause),
//   except when directly answering a "why" question; ya que, puesto que,
//   and dado que can all freely open the sentence, are more formal than
//   porque, always take the indicative, and do not admit a "no" directly
//   before the connector; dado que/puesto que are close to interchangeable
//   ("given that"), while ya que can also lean toward "now that" — checked
//   against Kwiziq Spanish's "Ya que/Puesto que/Porque/No porque plus
//   indicative and subjunctive" grammar page and the WordReference forum
//   threads "Puesto que / Porque" and "Dado que, puesto que, ya que".
// This content is complementary to the existing GRAMMAR_CARDS entries for
// connectors_contrast, connectors_consequence, connectors_addition_sequence,
// and connectors_cause_reason in src/content/grammar.js (same facts, fuller
// C1-paced walkthrough with original workplace-decision-making examples and
// passages) and does not contradict them.
