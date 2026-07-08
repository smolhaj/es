// Unit 19 — Opinions & Commands (B1)
// Covers: present_subjunctive, imperative
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com, and other
// established grammar references before writing — see the audit note at
// the bottom of this file for the specific claims checked. This is the
// first exposure to the subjunctive mood in the whole course, so it's
// treated as a genuinely new way of thinking about a sentence, not just
// another verb ending to memorize — and the imperative section leans on
// the subjunctive taught earlier in this same unit for its negative and
// formal command forms, which is a deliberate, motivating payoff rather
// than a coincidence of ordering.

export default {
  sections: [
    {
      heading: 'A New Mood, Not Just a New Tense',
      paragraphs: [
        "Every verb form you've learned so far — present, preterite, imperfect, future, conditional — belongs to what grammarians call the indicative mood. The indicative is the mood of stated fact: it describes what is, what was, or what will be, as if reporting on reality. This unit introduces something different in kind, not just in form: the subjunctive mood, which doesn't state facts at all. It expresses the speaker's wishes, doubts, emotions, or judgments about an action — not the action as an observed reality.",
        "Here's the shift in thinking that matters most: in English, we barely mark this distinction (\"I suggest that he go\" is about the only surviving trace of an English subjunctive, and even that sounds stiff to most speakers). Spanish marks it constantly, with its own set of verb endings, and native speakers reach for it automatically the moment a sentence's meaning calls for it. Learning to \"hear\" when a sentence needs the subjunctive — rather than just memorizing another conjugation table — is genuinely the single biggest jump in thinking a beginner-to-intermediate learner makes in Spanish. Take it slowly here; this section is worth rereading.",
        'The pattern almost always looks like this: [Main clause] + que + [dependent clause in the subjunctive]. The main clause is where the wishing, doubting, or feeling happens; que (\"that\") introduces the dependent clause; and the dependent clause — describing an action that is not a settled, agreed-upon fact — takes the subjunctive verb form. Compare Sé que Ana viene (I know that Ana is coming — a stated fact, indicative) with Quiero que Ana venga (I want Ana to come — not a fact, just a wish, subjunctive). Same structure, same word que, but a completely different meaning is being expressed about the clause that follows it, and the verb form has to change to reflect that.',
        "One more important piece of the puzzle before we build the forms: the subjunctive normally only appears when the subject of the main clause and the subject of the dependent clause are different people. Quiero que vengas (I want you to come) has two different subjects — yo wants, tú comes — so que + subjunctive is required. But if the subject doesn't change, Spanish uses a plain infinitive instead: Quiero venir (I want to come) — not \"quiero que yo venga,\" which would be unnatural. Keep an eye out for this same-subject-vs-different-subject test; it will come back explicitly in a later unit, but it's already quietly at work in every example below.",
      ],
      examples: [
        { es: 'Sé que Ana viene a la fiesta.', en: 'I know Ana is coming to the party. (fact, indicative)' },
        { es: 'Quiero que Ana venga a la fiesta.', en: 'I want Ana to come to the party. (wish, subjunctive)' },
        { es: 'Es verdad que él trabaja mucho.', en: "It's true that he works a lot. (fact, indicative)" },
        { es: 'Es bueno que él trabaje mucho.', en: "It's good that he works a lot. (judgment, subjunctive)" },
        { es: 'Quiero venir a la fiesta.', en: 'I want to come to the party. (same subject → infinitive, no que)' },
      ],
      commonMistakes: [
        "Don't treat the subjunctive as just \"a different ending to memorize for no reason.\" It marks a real shift in meaning — the dependent clause is not being presented as settled fact — and that meaning is what tells you whether to use it, not a fixed list of trigger words to memorize blindly.",
        "A very common beginner error is using que + subjunctive even when the subject doesn't change — \"quiero que yo vaya\" instead of the natural quiero ir. Reach for the infinitive whenever the same person is doing both the wanting and the doing.",
        "Don't confuse similar-looking sentences that differ only in whether the dependent clause is asserted as fact — Sé que viene (fact) vs. Espero que venga (hope, not fact) look almost identical in English translation but require different Spanish verb forms.",
      ],
    },
    {
      heading: 'Building the Present Subjunctive: One Rule, Two Endings',
      paragraphs: [
        'The good news about subjunctive formation is that it follows one clean rule you can apply to almost any verb you already know how to conjugate in the present indicative. Step one: take the yo form of the present indicative and drop the final -o. Step two: add the "opposite vowel" set of endings — -ar verbs swap to endings built around e, while -er and -ir verbs swap to endings built around a. That flip (-ar verbs "go to e," -er/-ir verbs "go to a") is the whole trick.',
        'For -ar verbs like hablar: drop the -o from hablo to get the stem habl-, then add -e, -es, -e, -emos, -éis, -en → hable, hables, hable, hablemos, habléis, hablen. For -er and -ir verbs like comer and vivir: drop the -o from como/vivo to get com-/viv-, then add -a, -as, -a, -amos, -áis, -an → coma, comas, coma, comamos, comáis, coman; and viva, vivas, viva, vivamos, viváis, vivan. Notice yo and él/ella/usted share the same form in every case (hable, coma, viva) — context and the subject noun or pronoun tell you which one is meant, exactly as happens elsewhere in Spanish.',
        "Because the subjunctive is built from the yo present-indicative form, any verb that's irregular in yo carries that irregularity straight into every subjunctive form: tener (tengo) → tenga, tengas, tenga, tengamos, tengáis, tengan; hacer (hago) → haga, hagas, haga, hagamos, hagáis, hagan; conocer (conozco) → conozca, conozcas, conozca, conozcamos, conozcáis, conozcan. This is genuinely good news — you already memorized these yo forms in an earlier unit, and the subjunctive mostly just rides along on that work.",
        "A short list of verbs don't build their subjunctive from a regular yo form at all and simply have to be memorized: ser → sea, seas, sea, seamos, seáis, sean; estar → esté, estés, esté, estemos, estéis, estén; ir → vaya, vayas, vaya, vayamos, vayáis, vayan; dar → dé, des, dé, demos, deis, den; saber → sepa, sepas, sepa, sepamos, sepáis, sepan; haber → haya, hayas, haya, hayamos, hayáis, hayan (this last one you'll meet again later as the building block of the present perfect subjunctive). Stem-changing -ar/-er verbs keep their boot-shaped stem change in the subjunctive too: querer → quiera, quieras, quiera, queramos, queráis, quieran; poder → pueda, puedas, pueda, podamos, podáis, puedan.",
      ],
      examples: [
        { es: 'Espero que hables con ella pronto.', en: 'I hope you talk to her soon. (hablar → hables)' },
        { es: 'Quiero que comas algo antes de salir.', en: 'I want you to eat something before leaving. (comer → comas)' },
        { es: 'Ojalá que vivamos cerca algún día.', en: 'Hopefully we live nearby someday. (vivir → vivamos)' },
        { es: 'Es necesario que tengas paciencia.', en: 'It is necessary that you have patience. (tener → tengas)' },
        { es: 'Dudo que él sea tan joven.', en: "I doubt he's that young. (irregular: ser → sea)" },
        { es: 'Ojalá que puedas venir a la boda.', en: "I hope you can come to the wedding. (poder → puedas, stem change kept)" },
      ],
      commonMistakes: [
        'A frequent slip is forgetting to swap the vowel family — writing "hablo que…" endings for -ar verbs instead of switching to e-based endings (hable), or keeping a-based endings for -er/-ir verbs instead of switching to a-based endings correctly matched to the right verb family. Double-check: -ar → e; -er/-ir → a.',
        'Don\'t forget that yo-form irregularities carry over — a common error is conjugating tener\'s subjunctive as a regular "tenas" instead of the correct tengas, which keeps the -ga- from the irregular yo form tengo.',
        "Don't try to derive ser, estar, ir, dar, saber, or haber's subjunctive forms from a rule — like their present-indicative forms, they simply have to be memorized as their own shapes (sea, esté, vaya, dé, sepa, haya).",
      ],
    },
    {
      heading: 'When Do You Actually Use It? The WEIRDO Triggers',
      paragraphs: [
        "Knowing how to build the subjunctive doesn't help until you know when a sentence calls for it. A widely used memory aid groups the most common trigger categories under the acronym WEIRDO: Wishes, Emotions, Impersonal expressions, Recommendations, Doubt/Denial, and Ojalá. This unit focuses on the four categories you'll meet constantly at this level, kept deliberately simple rather than exhaustive.",
        'Wishes and wants: when the main clause expresses wanting, wishing, hoping, or preferring that someone else do something, the dependent clause takes the subjunctive. Querer que is the anchor verb here — Quiero que estudies más (I want you to study more) — alongside esperar que (to hope that) and preferir que (to prefer that). Remember the same-subject rule from the previous section: this only applies when the wisher and the doer are different people.',
        'Doubt and denial: when the main clause casts doubt on, denies, or questions whether something is true, the dependent clause takes the subjunctive, because you\'re explicitly not vouching for it as fact. Dudo que and No creo que are the two workhorse phrases — Dudo que llueva mañana (I doubt it will rain tomorrow), No creo que sea tan difícil (I don\'t think it\'s that difficult). Notice the flip side: creer que and no dudar que (believing or being certain something IS true) take the indicative instead, because now you ARE vouching for the fact — Creo que llueve mañana (I think it\'s raining tomorrow, stated more like a fact).',
        "Emotion: when the main clause expresses a feeling — happiness, sadness, surprise, fear, regret — about the dependent clause, the subjunctive follows, because feelings are about subjective reaction, not objective fact. Alegrarse de que (to be glad that) and es una lástima que (it's a shame that) are two reliable anchors: Me alegro de que estés aquí (I'm glad you're here), Es una lástima que no puedan venir (It's a shame they can't come).",
        'Impersonal expressions of necessity or opinion: phrases built on es + adjective + que, when the adjective expresses a value judgment or requirement rather than a plain fact, also trigger the subjunctive in the clause that follows. Es importante que estudies (It\'s important that you study) and es necesario que llegues temprano (It\'s necessary that you arrive early) are the two most common patterns. Contrast this with impersonal expressions that state a plain fact, like es verdad que or es obvio que, which take the indicative — because now the clause is being presented as objectively true, not as an opinion or requirement.',
      ],
      examples: [
        { es: 'Quiero que estudies más este semestre.', en: 'I want you to study more this semester. (wish)' },
        { es: 'Dudo que ese restaurante sea muy bueno.', en: "I doubt that restaurant is very good. (doubt)" },
        { es: 'No creo que tengamos tiempo hoy.', en: "I don't think we have time today. (denial)" },
        { es: 'Me alegro de que vengas a visitarnos.', en: "I'm glad you're coming to visit us. (emotion)" },
        { es: 'Es una lástima que no puedas quedarte más.', en: "It's a shame you can't stay longer. (emotion)" },
        { es: 'Es importante que lleguemos a tiempo.', en: "It's important that we arrive on time. (impersonal necessity)" },
      ],
      commonMistakes: [
        'A very common error is using creer que and dudar que the same way — but they trigger opposite moods: creo que + indicative (I believe it\'s true) vs. dudo que + subjunctive (I doubt it\'s true). Flip it around in the negative too: no creo que takes the subjunctive (now you\'re expressing doubt), while no dudo que takes the indicative (now you\'re expressing certainty).',
        'Don\'t apply the subjunctive to every "es + adjective + que" phrase automatically — es verdad que and es obvio que state a fact and take the indicative, while es importante que and es necesario que state a judgment or requirement and take the subjunctive. The test is always: is the dependent clause being presented as objective fact, or as a wish/doubt/feeling/judgment about it?',
        "Emotion verbs are easy to get right in form but easy to forget in trigger-spotting — a common miss is translating \"I'm happy that you're here\" word-for-word and not noticing that \"happy that\" is an emotion trigger requiring estés, not estás.",
      ],
    },
    {
      heading: 'Giving Direct Commands: Affirmative Tú',
      paragraphs: [
        "Now for the second half of this unit: the imperative mood, used to give direct commands — \"Speak!\", \"Eat!\", \"Come here!\" Spanish's command forms split by who you're talking to and whether the command is affirmative or negative, and — in a satisfying twist — the negative and formal commands you're about to learn reuse the exact subjunctive forms you just built, rather than requiring a whole new set of endings.",
        "Affirmative tú commands (telling one person you address informally to DO something) are the easiest of the bunch: for regular verbs, they're identical to the él/ella/usted form of the present indicative. Habla (speak!, from él habla), come (eat!, from él come), and escribe (write!, from él escribe) — no new ending to learn at all, just borrow a form you already know.",
        'Eight common verbs are irregular in the affirmative tú command and simply need to be memorized: decir → di (say/tell), hacer → haz (do/make), ir → ve (go), poner → pon (put), salir → sal (leave/go out), ser → sé (be), tener → ten (have), and venir → ven (come). A popular memory aid strings them into "di, haz, pon, sal, sé, ten, ven, ve" or similar — however you group them, plan to just drill these eight until they\'re automatic, since no rule predicts them.',
      ],
      examples: [
        { es: '¡Habla más despacio, por favor!', en: 'Speak more slowly, please! (regular, from él habla)' },
        { es: '¡Come tus verduras!', en: 'Eat your vegetables! (regular, from él come)' },
        { es: '¡Ven aquí ahora mismo!', en: 'Come here right now! (irregular: venir → ven)' },
        { es: '¡Sé paciente conmigo!', en: 'Be patient with me! (irregular: ser → sé)' },
        { es: '¡Haz la tarea antes de salir!', en: 'Do the homework before going out! (irregular: hacer → haz)' },
        { es: '¡Pon la mesa, por favor!', en: 'Set the table, please! (irregular: poner → pon)' },
      ],
      commonMistakes: [
        'Don\'t confuse the affirmative tú command with the tú present-indicative form — habla (command) drops the -s that hablas (you speak) has; a common slip is saying "¡Hablas más despacio!" instead of the correct ¡Habla más despacio!',
        "Don't confuse sé (the command form of ser, with an accent) with se (the reflexive/impersonal pronoun, no accent) — they're pronounced identically but spelled differently to keep their very different jobs distinct in writing.",
        "The eight irregular tú commands have no shared pattern connecting them to each other or to their infinitives (di from decir, ve from ir, and so on) — resist the urge to guess and instead treat this as a short memorized list, the same way you treated ser/estar/ir's irregular present forms.",
      ],
    },
    {
      heading: 'The Payoff: Negative Tú, and Usted/Ustedes Commands',
      paragraphs: [
        "Here's where the subjunctive you just built pays off directly: negative tú commands (\"Don't speak!\", \"Don't go!\") don't use the indicative form at all — they use the present subjunctive tú form instead, with no in front. No hables tan rápido (Don't speak so fast) uses hables, the exact same form you'd use in Quiero que hables — it's simply a command sentence borrowing a form you've already learned rather than a fresh irregularity to memorize. No comas eso (Don't eat that) and No vayas allí (Don't go there) follow the identical logic, including with the irregular subjunctive stems: even ir, so irregular in its affirmative command (ve), regularizes to its subjunctive stem in the negative (no vayas).",
        'Usted and ustedes commands — for someone (or a group) you address formally, or any plural "you all" in Latin American Spanish — go one step further: they use the present subjunctive for BOTH affirmative and negative, with no exception. Hable más despacio (Speak more slowly, to one person, formal) and No hable tan rápido (Don\'t speak so fast, to one person, formal) both use the usted subjunctive form hable; only the presence or absence of no changes. The same logic extends to ustedes: Hablen con cuidado (Speak carefully, to a group) and No hablen tan rápido (Don\'t speak so fast, to a group) both use hablen.',
        "Put together, here's the full command picture at a glance: tú affirmative is the odd one out (él/ella present-indicative form, or one of the eight memorized irregulars), while every other command — tú negative, and usted/ustedes both affirmative and negative — is simply the matching present subjunctive form. Once the subjunctive itself is solid, three-quarters of the command system is already built.",
      ],
      examples: [
        { es: '¡No hables tan rápido, por favor!', en: "Don't speak so fast, please! (tú negative = subjunctive)" },
        { es: '¡No comas tanta comida rápida!', en: "Don't eat so much fast food! (tú negative = subjunctive)" },
        { es: '¡No vayas solo por la noche!', en: "Don't go alone at night! (tú negative, irregular subjunctive stem)" },
        { es: 'Hable más despacio, por favor.', en: 'Speak more slowly, please. (usted affirmative = subjunctive)' },
        { es: 'No hable tan rápido, por favor.', en: "Don't speak so fast, please. (usted negative = subjunctive)" },
        { es: 'Pasen por aquí, por favor.', en: 'Come this way, please. (ustedes affirmative = subjunctive)' },
      ],
      commonMistakes: [
        'A very common error is trying to negate the affirmative tú command directly — "no habla" instead of the correct no hables — but negative tú commands always switch to the subjunctive form, they never just add no to the affirmative form.',
        "Don't assume usted commands follow the tú pattern (different form for affirmative vs. negative) — usted (and ustedes) use the exact same subjunctive form for both; only no changes.",
        'Watch for irregular subjunctive stems carrying into commands exactly as they do elsewhere — a common slip is writing "no vas" for a negative tú command instead of the correct no vayas (from the irregular subjunctive stem vaya-), since ir\'s present-indicative vas has no place in the subjunctive-based negative command.',
      ],
    },
    {
      heading: 'Where Do the Pronouns Go? Attaching to Commands',
      paragraphs: [
        "One last piece completes the picture: what happens to reflexive and object pronouns (like te, lo, la, me) when you use them with a command? The rule matches a pattern you've already learned for infinitives and gerunds, which should make it feel familiar rather than brand new.",
        'With affirmative commands, pronouns attach directly to the end of the verb, forming one word: Levántate (Get up! — reflexive te attached to levanta), Cómpralo (Buy it! — direct object lo attached to compra), Dime la verdad (Tell me the truth! — indirect object me attached to di). Notice that attaching a pronoun often shifts where the natural stress falls, so Spanish adds a written accent to keep the stress on the syllable it belonged on before attachment — that\'s why it\'s levánta-te and not "levanta-te," and cómpra-lo and not "compra-lo."',
        "With negative commands, pronouns do the opposite: they go before the verb as a separate word, exactly like they do with any other conjugated verb — No te levantes (Don't get up), No lo compres (Don't buy it), No me digas eso (Don't tell me that). Since the verb itself is already the subjunctive form here, no extra accent adjustment is needed; the pronoun simply sits in its normal pre-verb position.",
      ],
      examples: [
        { es: '¡Levántate! Es tarde.', en: "Get up! It's late. (affirmative — pronoun attached, accent added)" },
        { es: '¡No te levantes todavía!', en: "Don't get up yet! (negative — pronoun before the verb)" },
        { es: '¡Cómpralo si te gusta!', en: 'Buy it if you like it! (affirmative — pronoun attached)' },
        { es: '¡No lo compres, es muy caro!', en: "Don't buy it, it's too expensive! (negative — pronoun before the verb)" },
        { es: 'Dígame su nombre, por favor.', en: 'Tell me your name, please. (usted affirmative — pronoun attached)' },
        { es: 'No me diga eso, por favor.', en: "Don't tell me that, please. (usted negative — pronoun before the verb)" },
      ],
      commonMistakes: [
        'Forgetting the written accent after attaching a pronoun to an affirmative command is one of the most common written errors — "Levantate" without the accent looks fine when spoken aloud but is technically misspelled; it must be Levántate.',
        'Don\'t attach the pronoun to a negative command the way you would an affirmative one — "no cómprelo" is wrong; negative commands always keep the pronoun in front: no lo compre.',
        "This split (attach after affirmative, place before negative) is the same rule you've already learned for infinitives and gerunds with object pronouns — treat commands as one more member of that same family rather than a separate rule to memorize from scratch.",
      ],
    },
  ],

  vocab: [
    { es: 'querer que', en: 'to want (someone) to', example: 'Quiero que me escuches.', exampleEn: 'I want you to listen to me.' },
    { es: 'esperar que', en: 'to hope that', example: 'Espero que tengas suerte.', exampleEn: 'I hope you have luck.' },
    { es: 'dudar que', en: 'to doubt that', example: 'Dudo que llegue a tiempo.', exampleEn: "I doubt he'll arrive on time." },
    { es: 'no creer que', en: 'to not believe that', example: 'No creo que sea verdad.', exampleEn: "I don't think it's true." },
    { es: 'alegrarse de que', en: 'to be glad that', example: 'Me alegro de que estés bien.', exampleEn: "I'm glad you're okay." },
    { es: 'es una lástima que', en: "it's a shame that", example: 'Es una lástima que no vengas.', exampleEn: "It's a shame you're not coming." },
    { es: 'es importante que', en: "it's important that", example: 'Es importante que descanses.', exampleEn: "It's important that you rest." },
    { es: 'es necesario que', en: "it's necessary that", example: 'Es necesario que firmes aquí.', exampleEn: 'It is necessary that you sign here.' },
    { es: 'ojalá que', en: 'hopefully / I hope that', example: 'Ojalá que llueva pronto.', exampleEn: 'Hopefully it rains soon.' },
    { es: 'preferir que', en: 'to prefer that', example: 'Prefiero que hablemos en persona.', exampleEn: 'I prefer that we talk in person.' },
    { es: 'di (decir)', en: 'say / tell (tú command)', example: '¡Dime la verdad!', exampleEn: 'Tell me the truth!' },
    { es: 'haz (hacer)', en: 'do / make (tú command)', example: '¡Haz tu cama!', exampleEn: 'Make your bed!' },
    { es: 've (ir)', en: 'go (tú command)', example: '¡Ve a la tienda!', exampleEn: 'Go to the store!' },
    { es: 'pon (poner)', en: 'put / place (tú command)', example: '¡Pon la mesa!', exampleEn: 'Set the table!' },
    { es: 'ten (tener)', en: 'have (tú command)', example: '¡Ten cuidado!', exampleEn: 'Be careful!' },
    { es: 'ven (venir)', en: 'come (tú command)', example: '¡Ven conmigo!', exampleEn: 'Come with me!' },
  ],

  practice: [
    // ── present_subjunctive block: formation (blocked practice: drill the new endings in isolation first) ──
    { type: 'multiple_choice', prompt: 'Which is the correct present subjunctive yo/él form of hablar?', word: 'hablar', english: 'to speak', answer: 'hable', options: ['habla', 'hable', 'hablo', 'hablas'], concept_id: 'present_subjunctive', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Quiero que tú ___ más despacio." (comer)', word: 'comer', english: 'to eat', answer: 'comas', concept_id: 'present_subjunctive', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the irregular subjunctive form: "Espero que ___ (tener, tú) suerte."', word: 'tener', english: 'to have', answer: 'tengas', concept_id: 'present_subjunctive', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Quiero que tú vas al médico."', word: 'ir (subjunctive)', english: 'to go', answer: 'Quiero que tú vayas al médico.', concept_id: 'present_subjunctive', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Es necesario que ella sea puntual"?', word: 'ser (subjunctive)', english: 'to be', answer: 'It is necessary that she be punctual.', altAnswers: ["It's necessary for her to be punctual."], concept_id: 'present_subjunctive', difficulty: 2 },

    // ── present_subjunctive block: WEIRDO triggers (still blocked, one level up from raw formation) ──
    { type: 'multiple_choice', prompt: 'Which sentence correctly expresses doubt using the subjunctive?', word: 'dudar que', english: 'to doubt that', answer: 'Dudo que él tenga razón.', options: ['Dudo que él tiene razón.', 'Dudo que él tenga razón.', 'Creo que él tenga razón.', 'Sé que él tenga razón.'], concept_id: 'present_subjunctive', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Me alegro de que tú ___ (estar) aquí."', word: 'alegrarse de que', english: 'to be glad that', answer: 'estés', concept_id: 'present_subjunctive', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It's important that you (tú) study every day.'", english: "It's important that you study every day.", answer: 'Es importante que estudies todos los días.', word: 'es importante que', concept_id: 'present_subjunctive', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "Creo que ella tenga razón." (expressing genuine belief, not doubt)', word: 'creer que', english: 'to believe that', answer: 'Creo que ella tiene razón.', concept_id: 'present_subjunctive', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Es una lástima que no puedas venir"?', word: 'es una lástima que', english: "it's a shame that", answer: "It's a shame you can't come.", concept_id: 'present_subjunctive', difficulty: 2 },

    // ── imperative block: affirmative tú (blocked separately from subjunctive-based commands) ──
    { type: 'multiple_choice', prompt: 'What is the affirmative tú command for hablar?', word: 'hablar', english: 'to speak', answer: 'habla', options: ['habla', 'hable', 'hables', 'hablas'], concept_id: 'imperative', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete the irregular tú command: "¡___ (decir) la verdad!"', word: 'decir', english: 'to say/tell', answer: 'di', concept_id: 'imperative', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate the command: 'Come here!' (tú, informal, addressing a friend)", english: 'Come here!', answer: '¡Ven aquí!', altAnswers: ['¡Ven acá!'], word: 'venir (command)', concept_id: 'imperative', difficulty: 1 },

    // ── imperative block: negative tú and usted/ustedes (payoff — reuses present_subjunctive) ──
    { type: 'multiple_choice', prompt: 'Which is the correct negative tú command form of hablar?', word: 'hablar', english: 'to speak', answer: 'No hables', options: ['No habla', 'No hables', 'No hablas', 'No hable'], concept_id: 'imperative', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and correct the error: "¡No vas tan rápido!" (telling a friend not to drive so fast)', word: 'ir (negative command)', english: 'to go', answer: '¡No vayas tan rápido!', concept_id: 'imperative', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate the formal command: 'Speak more slowly, please.' (to a stranger, usted)", english: 'Speak more slowly, please.', answer: 'Hable más despacio, por favor.', word: 'hablar (usted command)', concept_id: 'imperative', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the pronoun in the correct position: "¡No ___ levantes todavía!" (don\'t get up yet)', word: 'reflexive pronoun placement', english: "don't get up", answer: 'te', concept_id: 'imperative', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¡Levántate! Es tarde."?', word: 'levantarse (command)', english: 'to get up', answer: "Get up! It's late.", concept_id: 'imperative', difficulty: 1 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and other established grammar references before writing (July 2026):
// - Present subjunctive formation: drop -o from the yo present-indicative
//   form, then add -e/-es/-e/-emos/-éis/-en for -ar verbs, or -a/-as/-a/
//   -amos/-áis/-an for -er/-ir verbs (SpanishDict "Spanish Subjunctive"
//   guide; irregular yo forms — tener→tengo→tenga, hacer→hago→haga,
//   conocer→conozco→conozca — carry into the subjunctive stem)
// - Fully irregular subjunctive stems not derived from yo: ser→sea,
//   estar→esté, ir→vaya, dar→dé, saber→sepa, haber→haya
// - WEIRDO trigger framework (Wishes, Emotions, Impersonal expressions,
//   Recommendations, Doubt/Denial, Ojalá) per SpanishDict's "Subjunctive
//   Trigger Words" guide and spanish.academy's WEIRDO guide; this unit
//   deliberately teaches Wishes/Doubt-Denial/Emotion/Impersonal-necessity
//   as the core four, per the assignment's scope, without claiming
//   exhaustive WEIRDO coverage
// - creer que / no dudar que (certainty) take indicative, while no creer
//   que / dudar que (doubt) take subjunctive — confirmed via SpanishDict
//   subjunctive-vs-indicative guide
// - Affirmative tú commands = él/ella present-indicative form for regular
//   verbs; the 8 irregular affirmative tú commands are di, haz, ve, pon,
//   sal, sé, ten, ven (decir, hacer, ir, poner, salir, ser, tener, venir)
//   — confirmed via SpanishDict "Informal Tú Commands" guide and
//   mundodele.com's irregular-imperative-forms page
// - Negative tú commands = present subjunctive tú form + no (SpanishDict
//   "Negative Informal Tú Commands" guide)
// - Usted/ustedes commands, both affirmative and negative, = present
//   subjunctive usted/ustedes forms (SpanishDict "Formal Affirmative and
//   Negative Commands" guide; CliffsNotes "Usted and Ustedes Commands")
// - Pronoun placement: attached to the end of affirmative commands (with
//   a written accent added to preserve original stress), placed before
//   the verb for negative commands — confirmed via CliffsNotes "Using
//   Pronouns with Commands" and studyspanish.com's object-pronouns-with-
//   commands lesson
// This content agrees with (does not contradict) the existing
// present_subjunctive and imperative entries in src/content/grammar.js and
// functions/_lib/concepts.js, and builds on present_ar/present_er_ir,
// irregular_present, and reflexive_verbs already taught in earlier units.
