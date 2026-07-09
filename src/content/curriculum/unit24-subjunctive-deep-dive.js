// Unit 23 — Subjunctive Deep Dive (B1)
// Covers: imperfect_subjunctive, si_clauses, subjunctive_adverbial, perfect_subjunctive
//
// Curriculum-pacing-lag fix (07-09-2026): this unit moved from B2 to B1.
// The CEFR audit retagged imperfect_subjunctive, si_clauses, and
// subjunctive_adverbial to B1 (matching real-world type-2-hypothetical-
// before-type-3-counterfactual sequencing and PCIC placement), while
// perfect_subjunctive stays genuinely B2. Rather than splitting this unit
// apart, it's kept as one deliberately-sequenced teaching arc — si_clauses
// literally cannot be taught without imperfect_subjunctive's forms, built
// two sections earlier in this same unit — and moved wholesale to B1 to
// match 3 of its 4 concepts. perfect_subjunctive is a documented,
// accepted exception: it's taught here as the natural capstone of the
// same sequence (it directly extends the imperfect subjunctive build-up
// with the perfect aspect) even though its own correct level is one step
// ahead of the unit's new B1 position. See ES.md punch-list item 29.
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com/adjacent
// grammar references, and RAE-informed usage guides before writing — see
// the audit note at the bottom of this file for the specific claims
// checked. This unit assumes Unit 19's present subjunctive and WEIRDO
// trigger framework as known background and does not re-teach what the
// subjunctive mood is or why it exists — it extends that same "wish, doubt,
// emotion, judgment" logic into the past, into if-sentences, into time
// clauses, and into the perfect aspect. This is the single densest unit in
// the whole course. That's by design, not an oversight: real B2 Spanish
// leans on these four structures constantly, and they genuinely interlock
// (si_clauses needs imperfect_subjunctive; that's why they're taught back
// to back here). Expect this unit to take longer than earlier ones, and
// don't be discouraged if it takes more than one pass to feel solid — that
// is completely normal for this material, even for learners who found the
// present subjunctive in Unit 19 fairly manageable.

export default {
  sections: [
    {
      heading: 'Taking the Subjunctive into the Past: Why We Need a New Form',
      paragraphs: [
        "In Unit 19 you learned to recognize when a sentence needs the subjunctive — a wish, a doubt, an emotion, a judgment — and how to build the present subjunctive to express it. But that present subjunctive only works cleanly when the main clause is also in the present: Quiero que vengas (I want you to come). What happens when the wishing, doubting, or feeling happened in the past instead? Quería... — I wanted... — needs its own dependent-clause form, because vengas doesn't fit comfortably after a past-tense main verb. Spanish's answer is the imperfect subjunctive: Quería que vinieras (I wanted you to come).",
        "Nothing about the underlying logic changes. The same WEIRDO triggers — wishes, emotions, impersonal judgments, doubt/denial, ojalá — still create the same que + [subjunctive] pattern. The only thing that shifts is which subjunctive tense you reach for, and that shift is governed by a simple, learnable rule of sequence: a past-tense (or conditional) main clause pulls the dependent clause into the imperfect subjunctive, the same way a present-tense main clause pulls it into the present subjunctive. Compare the pair directly: Espero que vengas (I hope you come — present trigger, present subjunctive) vs. Esperaba que vinieras (I hoped you would come — past trigger, imperfect subjunctive). Same verb, same structure, same meaning-shape — just shifted one step into the past.",
        "This unit builds four things on top of that idea, in an order that's deliberately chosen because each one leans on the last: first the imperfect subjunctive itself (its forms and its past-tense triggers), then si-clauses (\"if\" sentences), which need the imperfect subjunctive to express a hypothetical condition, then subjunctive use in adverbial time clauses (cuando, antes de que, and friends), and finally the perfect subjunctive, for talking about something already finished relative to a subjunctive-triggering present-tense verb. Take it one section at a time — this is genuinely advanced material, and feeling like you need to reread a section is a completely normal part of getting it to stick, not a sign you're behind.",
      ],
      examples: [
        { es: 'Quiero que vengas.', en: 'I want you to come. (present trigger → present subjunctive)' },
        { es: 'Quería que vinieras.', en: 'I wanted you to come. (past trigger → imperfect subjunctive)' },
        { es: 'Espero que tengas razón.', en: "I hope you're right. (present)" },
        { es: 'Esperaba que tuvieras razón.', en: 'I was hoping you were right. (past)' },
      ],
      commonMistakes: [
        "Don't panic if this unit feels like a step up in difficulty from Unit 19 — it is one, deliberately. The subjunctive mood itself isn't new; what's new is layering tense sequencing, conditional sentences, and the perfect aspect on top of a mood you're still getting comfortable with. That's normal for B2.",
        'A frequent early error is leaving the dependent clause in the present subjunctive even after a clearly past-tense main verb — "Quería que vengas" instead of the correct Quería que vinieras. Let the tense of the main clause set the tense of the clause that follows it.',
      ],
    },
    {
      heading: 'Building the Imperfect Subjunctive: One Rule, from a Form You Already Know',
      paragraphs: [
        "Here's the genuinely good news about the imperfect subjunctive: it is built from a form you already learned in earlier units — the ellos/ellas preterite — so there's no new stem to memorize, only a new set of endings. The rule: take the ellos/ellas preterite form of any verb (regular or irregular), drop the -ron ending, and add -ra, -ras, -ra, -ramos, -rais, -ran.",
        "Walk it through with hablar: the ellos preterite is hablaron. Drop -ron to get hablá-, then add the endings: hablara, hablaras, hablara, habláramos, hablarais, hablaran. Same process for comer (comieron → comiera, comieras, comiera, comiéramos, comierais, comieran) and vivir (vivieron → viviera, vivieras, viviera, viviéramos, vivierais, vivieran). Notice two things that will save you trouble later: yo and él/ella/usted share the exact same form again (hablara can mean \"I spoke/would speak\" or \"he/she/you formal spoke/would speak\" — context tells you which), and the nosotros form always carries a written accent on the vowel right before -ramos (habláramos, comiéramos, viviéramos) to keep the stress in the right place.",
        "Because this form is built from the preterite rather than the present, every irregular preterite you already learned carries straight through: tener (tuvieron) → tuviera, tuvieras, tuviera, tuviéramos, tuvierais, tuvieran; ir and ser share one preterite (fueron) and so share one imperfect subjunctive too → fuera, fueras, fuera, fuéramos, fuerais, fueran (context distinguishes \"went\" from \"was/were\"); decir (dijeron) → dijera, dijeras...; poder (pudieron) → pudiera, pudieras...; querer (quisieron) → quisiera, quisieras...; estar (estuvieron) → estuviera, estuvieras.... If you can already produce the ellos preterite correctly — including its irregulars — you can already produce the imperfect subjunctive; the two skills are really one skill applied twice.",
        "One more detail worth knowing, mostly so you recognize it rather than have to produce it: Spanish has a second, entirely valid set of imperfect subjunctive endings built on -se instead of -ra — hablase, hablases, hablase, hablásemos, hablaseis, hablasen. The two sets are genuinely interchangeable in meaning; the -se set simply skews more formal and literary, and is somewhat more associated with Spain, while the -ra set is used everywhere and dominates in speech across the whole Spanish-speaking world. This course focuses your active practice on the -ra forms, since they'll serve you in every region, but don't be thrown off if you encounter hablase-style forms in a novel or a more formal text — they mean exactly the same thing.",
      ],
      examples: [
        { es: 'Ellos hablaron. → que yo hablara', en: 'They spoke. → that I spoke/would speak (drop -ron, add -ra)' },
        { es: 'Ojalá comieras algo antes de salir.', en: "I wish you'd eat something before leaving." },
        { es: 'Si nosotros viviéramos aquí...', en: 'If we lived here... (accented nosotros form)' },
        { es: 'Quería que tú tuvieras paciencia.', en: 'I wanted you to have patience. (tener → tuviera)' },
        { es: 'Dudaba que ellos fueran los culpables.', en: 'I doubted they were the guilty ones. (ir/ser → fuera)' },
        { es: 'Te hablase con cariño. (formal/literary variant)', en: 'He/she would speak to you affectionately. (same meaning as hablara)' },
      ],
      commonMistakes: [
        "Don't try to build the imperfect subjunctive from the present tense the way you built the present subjunctive — it comes from the preterite. A common error is producing something like \"hablara\" correctly by luck but then failing on an irregular verb by starting from the present stem instead of the correct preterite stem (e.g., trying to build from tiene instead of correctly starting from the preterite tuvieron).",
        "Don't forget the accent on the nosotros form — \"hablaramos\" (no accent) is a common misspelling; it must be habláramos, with the stress marked to keep it on the third-to-last syllable.",
        "You don't need to actively produce -se forms (hablase, comiese) for this course, but don't mistake them for a different tense or a mistake if you see them in reading — they're simply a more formal/literary stylistic variant of exactly the same imperfect subjunctive, common in Spain especially in writing.",
      ],
    },
    {
      heading: 'Using the Imperfect Subjunctive: Past-Tense WEIRDO Triggers',
      paragraphs: [
        "The trigger logic doesn't change from Unit 19 — the same four categories (wishes, doubt/denial, emotion, impersonal judgment) still call for a subjunctive dependent clause. What changes is simply which subjunctive tense answers the call, based on the tense of the main-clause trigger. A trigger in the preterite, imperfect, or conditional pulls its dependent clause into the imperfect subjunctive.",
        'Wishes and wants in the past: Quería que llegaras a tiempo (I wanted you to arrive on time), Prefería que no fumaras (I preferred that you not smoke). Doubt and denial in the past: Dudaba que él dijera la verdad (I doubted he was telling the truth), No creía que tuvieran razón (I didn\'t believe they were right). Emotion in the past: Me alegré de que vinieras (I was glad you came), Sentí mucho que no pudieras quedarte (I was very sorry you couldn\'t stay). Impersonal judgment in the past: Era importante que estudiaras (It was important that you study), Fue una lástima que perdiéramos el vuelo (It was a shame we missed the flight).',
        "There's one more common trigger worth flagging here because it appears constantly and always takes the imperfect subjunctive regardless of what tense surrounds it: como si (\"as if\"). Because \"as if\" is inherently describing something untrue or hypothetical by nature — you're comparing reality to something that isn't the case — Spanish always follows como si with the imperfect subjunctive (or, for a completed hypothetical, the pluperfect subjunctive, which is a topic for a later, more advanced unit), even in an otherwise present-tense sentence: Habla como si lo supiera todo (He talks as if he knew everything) — note that supiera describes his present manner of talking, yet the verb is imperfect subjunctive because the comparison itself is inherently contrary-to-fact.",
      ],
      examples: [
        { es: 'Quería que llegaras a tiempo.', en: 'I wanted you to arrive on time. (past wish)' },
        { es: 'Dudaba que él dijera la verdad.', en: 'I doubted he was telling the truth. (past doubt)' },
        { es: 'Me alegré de que vinieras a la fiesta.', en: 'I was glad you came to the party. (past emotion)' },
        { es: 'Era importante que estudiaras más.', en: 'It was important that you study more. (past impersonal judgment)' },
        { es: 'Habla como si lo supiera todo.', en: 'He talks as if he knew everything. (como si → always imperfect subjunctive)' },
        { es: 'Gastaba dinero como si fuera millonario.', en: 'He spent money as if he were a millionaire.' },
      ],
      commonMistakes: [
        'The most common error at this stage is a tense mismatch — leaving the dependent clause in the present subjunctive after a clearly past-tense trigger: "Dudaba que él diga la verdad" is wrong; because dudaba is past, the dependent verb must also shift back, to dijera.',
        'Don\'t translate como si word-for-word without noticing it\'s a fixed trigger — a common miss is writing "como si sabe todo" (indicative); como si always demands the subjunctive (imperfect, here), because it inherently frames something as not actually true.',
        "Watch for the conditional also counting as a past-shifted trigger, not just simple past tenses — Me gustaría que vinieras (I would like you to come) uses the imperfect subjunctive after a conditional main verb, following the same sequencing logic as a preterite or imperfect trigger.",
      ],
    },
    {
      heading: 'Si-Clauses, Part 1: Real Conditions and True Hypotheticals',
      paragraphs: [
        "Now that the imperfect subjunctive is in place, it unlocks one of the most useful structures in Spanish: si-clauses, or \"if\" sentences. Spanish sorts every conditional sentence into a small number of clearly defined patterns based on how real or hypothetical the condition is — and unlike English, which uses roughly the same \"if\" structure for all of them, Spanish requires a different verb combination for each type. Getting the pairing right is the whole skill here.",
        "Type 1 — real or likely conditions: for something that genuinely could happen, or a general truth, use si + present indicative in the if-clause, paired with present indicative, future, or an imperative in the main clause. Si llueve, no voy (If it rains, I'm not going) — llueve is a real possibility being described as a plain fact, so it stays in the present indicative, exactly as any other factual present-tense statement would. You'll also see the future in the main clause (Si llueve, no iré) or a command (Si llueve, quédate en casa — If it rains, stay home). What you should never do is put the subjunctive directly after si in this type — *si llueva is simply incorrect Spanish; a real, open condition never triggers the subjunctive right after si.",
        "Type 2 — hypothetical or contrary-to-present-fact: for something imagined, unlikely, or flatly untrue right now, use si + imperfect subjunctive in the if-clause, paired with the conditional in the main clause. Si tuviera dinero, viajaría (If I had money, I would travel) describes a present reality that isn't the case — the speaker doesn't have the money right now — so the condition itself goes into the imperfect subjunctive (tuviera), and the imagined result goes into the conditional (viajaría), the tense you learned in an earlier unit for \"would\" statements. Compare the two types side by side: Si tengo tiempo, te ayudo (Type 1 — a real possibility: I might have time) vs. Si tuviera tiempo, te ayudaría (Type 2 — a hypothetical: I likely don't have time, so this is imagined). Same rough English translation (\"if I have/had time\"), genuinely different Spanish structures, because the degree of reality being claimed is different.",
        "A quick note on order: the si-clause and the main clause can appear in either order without changing the meaning — Si tuviera dinero, viajaría and Viajaría si tuviera dinero say exactly the same thing. When the si-clause comes first, Spanish separates it from the main clause with a comma, as in the examples above; when it comes second, no comma is needed.",
      ],
      examples: [
        { es: 'Si llueve, no voy.', en: "If it rains, I'm not going. (Type 1: present indicative → present indicative)" },
        { es: 'Si tienes hambre, come algo.', en: "If you're hungry, eat something. (Type 1: present indicative → imperative)" },
        { es: 'Si estudias, aprobarás el examen.', en: 'If you study, you will pass the exam. (Type 1: present indicative → future)' },
        { es: 'Si tuviera dinero, viajaría por el mundo.', en: 'If I had money, I would travel the world. (Type 2: imperfect subjunctive → conditional)' },
        { es: 'Si fueras más paciente, tendrías menos problemas.', en: 'If you were more patient, you would have fewer problems. (Type 2)' },
        { es: 'Viajaría si tuviera dinero.', en: 'I would travel if I had money. (same meaning, order reversed, no comma needed)' },
      ],
      commonMistakes: [
        'Never put the subjunctive directly after si when describing a real, open condition — "si llueva" is always wrong; a Type 1 real condition takes si + present indicative, full stop.',
        "Don't mix tenses across a conditional pair — a very common error is Si tuviera dinero, viajo or Si tengo dinero, viajaría, pairing a Type 2 if-clause with a Type 1 result (or vice versa). Keep the pairing consistent: imperfect subjunctive pairs with conditional; present indicative pairs with present/future/imperative.",
        'Don\'t assume the conditional tense alone (without si) always signals a hypothetical the way "would" can casually in English — it\'s the si + imperfect subjunctive combination specifically that marks a Type 2 conditional sentence in Spanish.',
      ],
    },
    {
      heading: 'Si-Clauses, Part 2: A Preview of the Past Hypothetical',
      paragraphs: [
        "There's a third type of si-clause you'll see constantly once you start reading or listening to more advanced Spanish, and it's worth previewing here even though the full form belongs to a later, more advanced unit. Type 3 — contrary-to-past-fact — describes something that didn't happen in the past, along with the imagined result that also never happened: Si hubiera sabido, habría venido (If I had known, I would have come). Neither half of that sentence describes reality — the speaker didn't know, and so didn't come.",
        "You can already recognize the shape of both halves from tenses you've met: hubiera sabido is the pluperfect subjunctive (haber in the imperfect subjunctive + past participle — a more advanced cousin of the perfect subjunctive you'll build later in this unit), and habría venido is the conditional perfect (haber in the conditional + past participle). Building these forms yourself is a C1-level skill for a later course stage — for now, the goal is simply to recognize the pattern when you encounter it, and to see clearly how it fits alongside the two types you're actively practicing: Type 1 talks about the present/future as genuinely open, Type 2 talks about the present as imagined and untrue, and Type 3 talks about the past as imagined and untrue.",
      ],
      examples: [
        { es: 'Si hubiera sabido, habría venido.', en: 'If I had known, I would have come. (Type 3 — preview only)' },
        { es: 'Si hubieras estudiado, habrías aprobado.', en: 'If you had studied, you would have passed. (Type 3 — preview only)' },
        { es: 'Si tuviera dinero, viajaría. (Type 2, present)', en: 'If I had money, I would travel.' },
        { es: 'Si hubiera tenido dinero, habría viajado. (Type 3, past)', en: 'If I had had money, I would have traveled.' },
      ],
      commonMistakes: [
        "You are not expected to produce Type 3 si-clauses correctly on your own yet — the pluperfect subjunctive is introduced formally later, at a more advanced level. The goal in this section is recognition: seeing hubiera + participle paired with habría + participle and understanding it describes an unrealized past.",
        "Don't confuse Type 2 (Si tuviera dinero, viajaría — an ongoing present hypothetical) with Type 3 (Si hubiera tenido dinero, habría viajado — a closed, past hypothetical) just because both use a form of the verb tener — the auxiliary haber and the participle are what signal you've shifted from a present hypothetical to a past one.",
      ],
    },
    {
      heading: 'Subjunctive in Adverbial Time Clauses: Cuando and Its Family',
      paragraphs: [
        "Step away from si-clauses for a moment and look at a different kind of trigger: certain time conjunctions — cuando (when), en cuanto (as soon as), hasta que (until), and antes de que (before) — switch between indicative and subjunctive depending on whether the event they introduce is a settled, habitual, or already-completed fact, or a future/hypothetical event that hasn't happened yet.",
        "The core test: if the clause describes something habitual or already completed — a routine, a fact about the past, a general truth — use the indicative. Cuando llego a casa, ceno (When I get home, I have dinner) describes a repeated, factual routine, so llego stays in the plain present indicative. But if the clause describes something anticipated — a specific future event that hasn't happened yet, viewed from the present — switch to the subjunctive: Cuando llegue a casa, cenaré (When I get home [at some future point], I will have dinner) uses llegue, the present subjunctive, precisely because that arrival hasn't happened and isn't a settled routine — it's a single anticipated future moment. Same conjunction, same rough translation, genuinely different grammar depending on whether you're describing a pattern or a single anticipated event.",
        "En cuanto and hasta que follow the identical logic: En cuanto llega, empezamos (As soon as he arrives, we start — habitual, indicative) vs. En cuanto llegue, empezaremos (As soon as he arrives [this one time, in the future], we'll start — subjunctive). Espera hasta que yo termine (Wait until I finish — anticipated, subjunctive) is the far more common pattern for hasta que in everyday speech, since \"wait until X happens\" is almost always describing something that hasn't happened yet.",
        "Antes de que (before) is the one member of this family that breaks the habitual/anticipated split — it always takes the subjunctive, with no indicative counterpart, because \"before X\" inherently frames X as not yet having happened at the reference point of the sentence, no matter what tense surrounds it. Voy a llamarte antes de que salgas (I'm going to call you before you leave) and Lo llamé antes de que saliera (I called him before he left) both use the subjunctive — present in the first case, imperfect in the second, following the same past-shifting sequence rule from earlier in this unit — even though saliera describes something that, from the narrator's present-day vantage point telling the story, has already happened.",
      ],
      examples: [
        { es: 'Cuando llego a casa, ceno.', en: 'When I get home, I have dinner. (habitual → indicative)' },
        { es: 'Cuando llegue a casa, cenaré.', en: 'When I get home, I will have dinner. (future/anticipated → subjunctive)' },
        { es: 'En cuanto termina la clase, se va.', en: 'As soon as class ends, she leaves. (habitual → indicative)' },
        { es: 'En cuanto termine la clase, hablaremos.', en: "As soon as class ends, we'll talk. (anticipated → subjunctive)" },
        { es: 'Espera aquí hasta que yo vuelva.', en: "Wait here until I come back. (anticipated → subjunctive)" },
        { es: 'Llámame antes de que te vayas.', en: 'Call me before you leave. (antes de que → always subjunctive)' },
      ],
      commonMistakes: [
        "A very common error is treating cuando as always taking the subjunctive because it introduces subjunctive so often — but Cuando llegue a casa is only correct for a future/anticipated event; a habitual routine (Cuando llego a casa, ceno) correctly stays indicative, and using the subjunctive there (\"cuando llegue\" for a daily routine) is a mistake.",
        "Don't treat antes de que like cuando/en cuanto/hasta que and look for a habitual-vs-anticipated distinction — there isn't one. Antes de que always takes the subjunctive, in every tense, with no indicative option.",
        "When the time clause shifts to the past, remember the sequencing rule from earlier: a past main verb pulls even these adverbial subjunctives back into the imperfect subjunctive — Lo llamé antes de que saliera, not saliera's present-tense cousin salga.",
      ],
    },
    {
      heading: 'The Perfect Subjunctive: When the Subjunctive Meets "Already Happened"',
      paragraphs: [
        "One last piece completes the set. So far, every subjunctive verb you've built has described an action happening at the same time as, or after, the main-clause trigger. But what if the action you're expressing doubt, hope, or emotion about is already finished by the time you're talking about it? Espero que hayas llegado bien (I hope you've arrived safely) needs a subjunctive form that itself carries the meaning of \"already completed\" — that's the job of the perfect subjunctive (also called the present perfect subjunctive).",
        "Formation is simple and reuses two things you already know: the present subjunctive of haber (haya, hayas, haya, hayamos, hayáis, hayan) plus a past participle (hablado, comido, vivido, or an irregular one like hecho, dicho, visto, puesto, vuelto). Espero que hayas llegado bien puts this together directly: hayas (present subjunctive of haber) + llegado (past participle) — \"I hope that you have arrived.\"",
        "The test for choosing the perfect subjunctive over the plain present subjunctive is exactly the same test English uses to choose \"has done\" over \"does\": is the action complete relative to the moment of the main clause, or still ongoing/future? Compare Me alegra que vengas (I'm glad you're coming — an event still ahead of or simultaneous with now, present subjunctive) with Me alegra que hayas venido (I'm glad you've come — the arrival is already done, perfect subjunctive). Both sentences are triggered by the same emotion verb, alegrar; the only difference is whether the dependent action is complete yet, and that difference alone decides which subjunctive tense you need.",
        "All four WEIRDO trigger categories can pair with the perfect subjunctive exactly as they do with the present subjunctive — the trigger logic from Unit 19 doesn't change at all, only the completed-vs-not-yet-completed timing of the dependent clause does: No creo que haya terminado el proyecto (I don't think he's finished the project — doubt), Es una pena que no hayamos podido ir (It's a shame we weren't able to go — emotion/judgment), Cuando hayas terminado, avísame (When you've finished, let me know — this one is a subjunctive-adverbial trigger from the previous section, combined here with the perfect aspect, showing how these building blocks stack together in real Spanish).",
      ],
      examples: [
        { es: 'Espero que hayas llegado bien.', en: "I hope you've arrived safely. (hope + completed action)" },
        { es: 'Me alegra que hayas venido.', en: "I'm glad you've come. (emotion + completed action)" },
        { es: 'No creo que haya terminado el proyecto.', en: "I don't think he's finished the project. (doubt + completed action)" },
        { es: 'Es una pena que no hayamos podido ir.', en: "It's a shame we weren't able to go. (impersonal judgment + completed action)" },
        { es: 'Cuando hayas terminado, avísame.', en: "When you've finished, let me know. (adverbial trigger + completed action)" },
        { es: 'Dudo que hayan visto la película todavía.', en: "I doubt they've seen the movie yet. (irregular participle: visto)" },
      ],
      commonMistakes: [
        'A common error is using the plain present subjunctive when the action is clearly already finished — "Me alegra que vengas ayer" mixes an incomplete-action form (vengas) with a past-time marker (ayer); the correct form for a completed action is Me alegra que hayas venido.',
        "Don't forget that irregular past participles behave exactly as they did in the present perfect indicative — haya hecho, haya dicho, haya visto, haya puesto, haya vuelto are the correct forms, not regularized ones like \"haya hacido.\"",
        "Keep haya (subjunctive) and ha (indicative) straight — Creo que ha llegado (I believe he has arrived — stated as fact, indicative) versus Dudo que haya llegado (I doubt he has arrived — subjunctive) look almost identical in English but require different Spanish forms depending on the same fact-vs-not-fact test from Unit 19.",
      ],
    },
  ],

  vocab: [
    { es: 'quería que', en: 'I wanted (someone) to', example: 'Quería que vinieras a la boda.', exampleEn: 'I wanted you to come to the wedding.' },
    { es: 'esperaba que', en: 'I was hoping that', example: 'Esperaba que llegaras a tiempo.', exampleEn: 'I was hoping you would arrive on time.' },
    { es: 'dudaba que', en: 'I doubted that', example: 'Dudaba que dijera la verdad.', exampleEn: 'I doubted he was telling the truth.' },
    { es: 'como si', en: 'as if', example: 'Habla como si lo supiera todo.', exampleEn: 'He talks as if he knew everything.' },
    { es: 'ojalá que + imperfect subj.', en: 'if only / I wish', example: 'Ojalá que tuviéramos más tiempo.', exampleEn: 'I wish we had more time.' },
    { es: 'si + present indicative', en: 'if (real/likely condition)', example: 'Si llueve, no salgo.', exampleEn: "If it rains, I won't go out." },
    { es: 'si + imperfect subjunctive', en: 'if (hypothetical condition)', example: 'Si tuviera tiempo, te ayudaría.', exampleEn: 'If I had time, I would help you.' },
    { es: 'el condicional', en: 'the conditional (would ___)', example: 'Viajaría si pudiera.', exampleEn: 'I would travel if I could.' },
    { es: 'en cuanto', en: 'as soon as', example: 'En cuanto llegue, te aviso.', exampleEn: "As soon as I arrive, I'll let you know." },
    { es: 'hasta que', en: 'until', example: 'Espera hasta que yo vuelva.', exampleEn: 'Wait until I come back.' },
    { es: 'antes de que', en: 'before (always + subjunctive)', example: 'Llámame antes de que te vayas.', exampleEn: 'Call me before you leave.' },
    { es: 'cuando + subjunctive', en: 'when (future/not yet happened)', example: 'Cuando llegue, cenaremos.', exampleEn: 'When he arrives, we will have dinner.' },
    { es: 'haya + participio', en: 'have/has (subjunctive, completed action)', example: 'Espero que hayas dormido bien.', exampleEn: 'I hope you slept well.' },
    { es: 'es una pena que', en: "it's a shame that", example: 'Es una pena que no hayan venido.', exampleEn: "It's a shame they haven't come." },
    { es: 'me alegra que', en: "I'm glad that", example: 'Me alegra que hayas llamado.', exampleEn: "I'm glad you called." },
    { es: 'todavía no', en: 'not yet', example: 'Dudo que hayan llegado todavía.', exampleEn: "I doubt they've arrived yet." },
  ],

  practice: [
    // ── imperfect_subjunctive block: formation (blocked practice: drill the new endings in isolation first) ──
    { type: 'multiple_choice', prompt: 'Which is the correct imperfect subjunctive yo/él form of hablar (from ellos hablaron)?', word: 'hablar', english: 'to speak', answer: 'hablara', options: ['hablara', 'hablase', 'hable', 'hablaba'], concept_id: 'imperfect_subjunctive', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Quería que tú ___ (tener) más paciencia." (from ellos tuvieron)', word: 'tener', english: 'to have', answer: 'tuvieras', concept_id: 'imperfect_subjunctive', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Dudaba que él diga la verdad."', word: 'decir (imperfect subjunctive)', english: 'to say/tell', answer: 'Dudaba que él dijera la verdad.', concept_id: 'imperfect_subjunctive', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I wanted you (tú) to come to the party.'", english: 'I wanted you to come to the party.', answer: 'Quería que vinieras a la fiesta.', word: 'venir (imperfect subjunctive)', concept_id: 'imperfect_subjunctive', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Habla como si lo supiera todo"?', word: 'como si', english: 'as if', answer: 'He talks as if he knew everything.', altAnswers: ['She talks as if she knew everything.'], concept_id: 'imperfect_subjunctive', difficulty: 2 },

    // ── si_clauses block (needs imperfect_subjunctive; still blocked before mixing with other concepts) ──
    { type: 'multiple_choice', prompt: 'Which pairing correctly completes a Type 1 (real/likely) conditional: "Si llueve, ___."', word: 'si + present indicative', english: 'if it rains', answer: 'no voy', options: ['no voy', 'no fuera', 'no iría', 'no vaya'], concept_id: 'si_clauses', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete the Type 2 hypothetical: "Si ___ (tener, yo) dinero, viajaría por el mundo."', word: 'tener (imperfect subjunctive)', english: 'to have', answer: 'tuviera', concept_id: 'si_clauses', difficulty: 3 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Si tuviera dinero, viajo por el mundo."', word: 'si_clauses (tense pairing)', english: 'conditional pairing', answer: 'Si tuviera dinero, viajaría por el mundo.', concept_id: 'si_clauses', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'If I were more patient, I would have fewer problems.'", english: 'If I were more patient, I would have fewer problems.', answer: 'Si fuera más paciente, tendría menos problemas.', word: 'ser (imperfect subjunctive)', concept_id: 'si_clauses', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Si hubiera sabido, habría venido"?', word: 'Type 3 si-clause (preview)', english: 'contrary-to-past-fact', answer: "If I had known, I would have come.", altAnswers: ['If he had known, he would have come.', 'If she had known, she would have come.'], concept_id: 'si_clauses', difficulty: 3 },

    // ── subjunctive_adverbial block (blocked: cuando/en cuanto/hasta que/antes de que) ──
    { type: 'multiple_choice', prompt: 'Which sentence correctly describes a habitual routine (indicative)?', word: 'cuando (habitual)', english: 'when', answer: 'Cuando llego a casa, ceno.', options: ['Cuando llego a casa, ceno.', 'Cuando llegue a casa, cene.', 'Cuando llegara a casa, cenara.', 'Cuando llegaré a casa, cenaré.'], concept_id: 'subjunctive_adverbial', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete (future/anticipated event): "Cuando ___ (llegar, yo) a casa, cenaré."', word: 'llegar (subjunctive)', english: 'to arrive', answer: 'llegue', concept_id: 'subjunctive_adverbial', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Llámame antes de que te vas."', word: 'antes de que', english: 'before', answer: 'Llámame antes de que te vayas.', concept_id: 'subjunctive_adverbial', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Wait here until I come back.'", english: 'Wait here until I come back.', answer: 'Espera aquí hasta que yo vuelva.', word: 'hasta que', concept_id: 'subjunctive_adverbial', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which conjunction always takes the subjunctive, in every tense, with no indicative option?', word: 'antes de que', english: 'before', answer: 'antes de que', options: ['cuando', 'en cuanto', 'antes de que', 'hasta que'], concept_id: 'subjunctive_adverbial', difficulty: 2 },

    // ── perfect_subjunctive block (blocked; final concept, builds on all three above) ──
    { type: 'multiple_choice', prompt: 'Which correctly expresses "I hope you have arrived safely"?', word: 'llegar (perfect subjunctive)', english: 'to arrive', answer: 'Espero que hayas llegado bien.', options: ['Espero que llegues bien.', 'Espero que hayas llegado bien.', 'Espero que llegaste bien.', 'Espero que llegaras bien.'], concept_id: 'perfect_subjunctive', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "No creo que él ___ (terminar) el proyecto todavía."', word: 'terminar (perfect subjunctive)', english: 'to finish', answer: 'haya terminado', concept_id: 'perfect_subjunctive', difficulty: 3 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Me alegra que vengas ayer."', word: 'perfect_subjunctive vs. present_subjunctive', english: 'completed vs. ongoing action', answer: 'Me alegra que hayas venido ayer.', concept_id: 'perfect_subjunctive', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It's a shame we weren't able to go.' (use the perfect subjunctive)", english: "It's a shame we weren't able to go.", answer: 'Es una pena que no hayamos podido ir.', word: 'poder (perfect subjunctive)', concept_id: 'perfect_subjunctive', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which form correctly uses the irregular past participle of hacer in the perfect subjunctive?', word: 'hacer (perfect subjunctive)', english: 'to do/make', answer: 'haya hecho', options: ['haya hacido', 'haya hecho', 'haya hace', 'hubo hecho'], concept_id: 'perfect_subjunctive', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com-
// adjacent sources, and other established grammar references before writing
// (July 2026):
// - Imperfect subjunctive formation: ellos/ellas preterite, drop -ron, add
//   -ra/-ras/-ra/-ramos/-rais/-ran, with a written accent on the vowel
//   before -ramos in the nosotros form (habláramos, tuviéramos) — confirmed
//   via SpanishDict's "Imperfect Subjunctive" guide and Lawless Spanish's
//   imperfect-subjunctive conjugation tables.
// - -se alternative endings (hablase, comiese, viviese) are fully
//   interchangeable in meaning with -ra forms; -ra is more widespread and
//   used in speech across all Spanish-speaking regions, while -se skews
//   more formal/literary and more associated with Spain — confirmed via
//   SpanishDict's guide and the WordReference forum thread on -ra/-se
//   variants.
// - Irregular preterite stems carry directly into the imperfect subjunctive
//   (tuvieron→tuviera, fueron→fuera for both ir/ser, dijeron→dijera,
//   pudieron→pudiera, quisieron→quisiera, estuvieron→estuviera) — consistent
//   with the already-verified preterite irregulars taught in earlier units
//   and confirmed against the same imperfect-subjunctive sources above.
// - Past-tense/conditional main clause sequencing pulls a WEIRDO-triggered
//   dependent clause into the imperfect subjunctive (Quería que vinieras);
//   como si always triggers imperfect (or pluperfect) subjunctive because it
//   inherently frames a contrary-to-fact comparison — confirmed via
//   SpanishDict's imperfect subjunctive usage guide and Tell Me In Spanish's
//   imperfect-subjunctive-uses page.
// - Si-clause typology: Type 1 (real/likely) = si + present indicative →
//   present/future/imperative; Type 2 (hypothetical/contrary-to-present) =
//   si + imperfect subjunctive → conditional; Type 3 (contrary-to-past) = si
//   + pluperfect subjunctive → conditional perfect — confirmed via multiple
//   sources including spanishgrammar.net's si-clauses guide, spanish.academy's
//   conditional-sentences guide, and the Acceso/LibreTexts si-clauses unit;
//   Type 3 is deliberately taught only as a recognition preview here since
//   pluperfect_subjunctive is a separate, later C1 concept per
//   functions/_lib/concepts.js.
// - Never use subjunctive directly after si in a real (Type 1) condition
//   (*si llueva is ungrammatical) — consistent with the existing si_clauses
//   entry in src/content/grammar.js and confirmed across si-clause sources
//   above.
// - Adverbial time conjunctions (cuando, en cuanto, hasta que) take
//   indicative for habitual/completed events and subjunctive for
//   future/anticipated events not yet realized; antes de que always takes
//   the subjunctive regardless of tense, with no indicative counterpart —
//   confirmed via the Bowdoin "Subjunctive in Adverb Clauses" grammar page,
//   123teachme's adverbial-clauses lesson, and SpanishDict forum answers on
//   adverbial clauses and the subjunctive.
// - Perfect (present perfect) subjunctive formation: present subjunctive of
//   haber (haya/hayas/haya/hayamos/hayáis/hayan) + past participle, used for
//   subjunctive-triggered situations describing an action already completed
//   relative to the main clause; irregular participles (hecho, dicho, visto,
//   puesto, vuelto) behave exactly as in the present perfect indicative —
//   confirmed via SpanishDict's "Present Perfect Subjunctive" guide,
//   Baselang's present-perfect-subjunctive guide, and Lawless Spanish's
//   present-perfect-subjunctive page.
// This content builds directly on present_subjunctive and imperative from
// Unit 19 (src/content/curriculum/unit19-opinions-commands.js) without
// re-explaining the WEIRDO trigger framework or present subjunctive
// formation from scratch, and agrees with (does not contradict) the
// existing imperfect_subjunctive, si_clauses, subjunctive_adverbial, and
// perfect_subjunctive entries in src/content/grammar.js and
// functions/_lib/concepts.js. Pluperfect subjunctive (hubiera + participio)
// is deliberately previewed but not formally taught here, matching its
// separate C1-level concept entry.
