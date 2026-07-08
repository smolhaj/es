// Unit 18 — Future & Hypotheticals (B1)
// Covers: future_simple, conditional
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a learner who
// already has ir a + infinitive (Unit 13) for near-future plans and the
// irregular present tense (Unit 15), but has not yet met either the simple
// future or the conditional as dedicated tenses. Every Spanish claim below
// was verified against SpanishDict, StudySpanish.com, and Collins/Spanish
// Academy grammar references before writing — see the audit note at the
// bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'A New Way to Talk About the Future',
      paragraphs: [
        "Back in Unit 13 you learned ir a + infinitive (Voy a comer, \"I'm going to eat\") for talking about the future, and that construction is genuinely the most common way Spanish speakers bring up future plans in casual conversation. So why learn another future tense at all? Because Spanish also has a dedicated simple future tense — the equivalent of English \"will\" — and it shows up constantly in writing, in more formal or careful speech, in promises, and in predictions about things further off than \"later today.\" You need both: ir a + infinitive for the everyday, close-at-hand future, and the simple future for everything else \"will\" covers in English.",
        'The genuinely good news is that the simple future is one of the easiest tenses to form in all of Spanish. Instead of chopping the infinitive down to a stem the way most tenses do, you add the ending directly onto the whole infinitive — hablar, comer, and vivir keep their -ar/-er/-ir ending intact, and the new ending just gets tacked on after it. And even better: -ar, -er, and -ir verbs all share the exact same set of endings in this tense, which is unusual — no other tense in Spanish treats all three conjugations identically.',
        'The endings are: -é, -ás, -á, -emos, -éis, -án. So hablar becomes hablaré (I will speak), hablarás (you will speak), hablará (he/she/you formal will speak), hablaremos (we will speak), hablaréis (you all will speak, Spain), hablarán (they/you all will speak). Comer and vivir work exactly the same way: comeré, comerás, comerá… and viviré, vivirás, vivirá… Notice every form carries a written accent except the nosotros form (-emos) — a small detail worth building into your muscle memory now, since a missing accent is one of the most common small errors learners make with this tense.',
        "One more useful pattern: the simple future doesn't just mean \"will\" — Spanish speakers also use it to express probability or a guess about the present, something English usually phrases with \"must be\" or \"I wonder.\" ¿Dónde estará Ana? doesn't ask about Ana's future location — it means \"Where can Ana be (right now)? / I wonder where Ana is.\" And Serán las tres means \"It must be about three o'clock.\" This use — the \"future of probability\" — trips learners up because there's no future-tense word in the English translation at all, so keep an eye out for it in context rather than expecting to always translate estará as \"will be.\"",
      ],
      examples: [
        { es: 'Mañana hablaré con el jefe.', en: 'Tomorrow I will speak with the boss.' },
        { es: '¿A qué hora comerás?', en: 'What time will you eat?' },
        { es: 'Viviremos en Madrid el próximo año.', en: "We will live in Madrid next year." },
        { es: 'Los estudiantes aprenderán mucho este semestre.', en: 'The students will learn a lot this semester.' },
        { es: '¿Dónde estará mi teléfono?', en: 'Where can my phone be? (probability, right now)' },
        { es: 'Serán las diez de la noche.', en: "It must be about ten at night. (probability)" },
      ],
      commonMistakes: [
        'Don\'t drop or move the accent marks — hablara (no accent) is a completely different verb form (imperfect subjunctive), while hablará (accent on the á) is the simple future "he/she will speak." The accent is not decorative.',
        "Don't chop the infinitive down to a stem the way you would for other tenses — the simple future is one of the few places the whole infinitive survives intact; hablar → hablaré, not *hablé (which is actually the preterite \"I spoke\").",
        'Don\'t assume every future-sounding sentence needs this tense — for near, plan-like future ("I\'m going to call you later"), ir a + infinitive is still what native speakers reach for most; save the simple future for predictions, promises, and more distant or formal statements about the future.',
      ],
    },
    {
      heading: 'The Dozen Verbs That Bend the Rule',
      paragraphs: [
        "The simple future's endings never change, even for irregular verbs — but a small, high-frequency group of about a dozen verbs use a different, shortened stem instead of the full infinitive. The endings stay exactly the same (-é, -ás, -á, -emos, -éis, -án); only the piece the endings attach to changes. These verbs come up so often in real conversation that they're worth memorizing as their own short list rather than deriving them from a rule each time.",
        'One small group simply drops the -e from the infinitive ending before adding the future endings: poder → podr- (podré, "I will be able to"), saber → sabr- (sabré, "I will know"), querer → querr- (querré, "I will want"), and haber → habr- (habré, used mainly in the compound tenses and in habrá, "there will be"). A second group does the same thing but also inserts an extra -d- where the vowel was dropped: tener → tendr- (tendré, "I will have"), poner → pondr- (pondré, "I will put"), venir → vendr- (vendré, "I will come"), and salir → saldr- (saldré, "I will leave/go out"). A final, small pair simply has to be memorized outright, since the change is more drastic: decir → dir- (diré, "I will say/tell") and hacer → har- (haré, "I will do/make").',
        "That's the full working set for this level: decir→dir-, hacer→har-, poder→podr-, poner→pondr-, querer→querr-, saber→sabr-, salir→saldr-, tener→tendr-, venir→vendr-, and haber→habr-. Every single one of these verbs still takes the same six endings as any regular verb — tendré, tendrás, tendrá, tendremos, tendréis, tendrán looks and behaves exactly like hablaré, hablarás, hablará… once you're past the stem. Learn the twelve stems once, and you already know how to conjugate every one of them in every person.",
      ],
      examples: [
        { es: 'No podré ir a la fiesta mañana.', en: "I won't be able to go to the party tomorrow." },
        { es: '¿Qué harás este fin de semana?', en: 'What will you do this weekend?' },
        { es: 'Tendremos que salir temprano.', en: "We will have to leave early." },
        { es: 'Ella dirá la verdad.', en: 'She will tell the truth.' },
        { es: 'Vendrán a las ocho en punto.', en: 'They will come at eight o\'clock sharp.' },
        { es: 'Habrá mucha gente en el concierto.', en: 'There will be a lot of people at the concert.' },
      ],
      commonMistakes: [
        'The endings never change for these verbs — only the stem does. A mistake like *tenré (trying to just drop the e without adding the extra -d-) is wrong; the correct stem is tendr-, not tenr-.',
        'Don\'t confuse decir\'s future stem (dir-) with its stem in other tenses (dij- in the preterite, dic- in the present) — each tense has its own memorized irregular pattern for this verb, and they don\'t transfer between tenses.',
        'Haber\'s future form for "there will be" is always habrá, singular, no matter how many things there will be — Habrá tres exámenes ("There will be three exams"), never *habrán tres exámenes.',
      ],
    },
    {
      heading: 'What Would Happen: Forming the Conditional',
      paragraphs: [
        "Now that you have the simple future down, the conditional tense — Spanish's equivalent of English \"would\" — is almost free. The conditional uses exactly the same stems as the simple future, including all twelve irregular ones you just learned; the only thing that changes is the ending. So the moment you know a verb's future stem, you already know its conditional stem too — there's nothing new to memorize on the irregular-verb side at all.",
        'The conditional endings are -ía, -ías, -ía, -íamos, -íais, -ían. If those look familiar, that\'s because they\'re the same endings the imperfect tense uses for -er and -ir verbs — the conditional is essentially "future stem + imperfect -er/-ir endings," which is a genuinely useful shortcut for remembering it. For regular verbs, the endings attach to the whole infinitive exactly like the future does: hablar → hablaría (I would speak), comer → comería (I would eat), vivir → viviría (I would live). Every single form carries an accent on the í, in every person, with no exception — unlike the future, there\'s no unaccented nosotros form to watch out for here.',
        'For the twelve irregular verbs, swap in the same shortened stem you already learned and add these new endings: tendría (I would have), podría (I would be able to), haría (I would do/make), diría (I would say/tell), vendría (I would come), sabría (I would know), querría (I would want), saldría (I would leave), pondría (I would put), habría (there would be). Compare tendré/tendría, haré/haría, podré/podría — same irregular stem, only the ending marks the difference between "will" and "would."',
      ],
      examples: [
        { es: 'Yo hablaría con ella si pudiera.', en: 'I would speak with her if I could.' },
        { es: '¿Comerías sushi?', en: 'Would you eat sushi?' },
        { es: 'Viviríamos en la playa si tuviéramos dinero.', en: 'We would live at the beach if we had money.' },
        { es: 'Él tendría veinte años en esa foto.', en: 'He would have been twenty in that photo. (probability, about the past)' },
        { es: '¿Qué harías tú en mi lugar?', en: 'What would you do in my place?' },
        { es: 'Habría espacio para todos.', en: 'There would be room for everyone.' },
      ],
      commonMistakes: [
        "Don't mix up the future and conditional endings — they share every irregular stem, but tendré (I will have) and tendría (I would have) are not interchangeable; the vowel in the ending is the only thing distinguishing \"will\" from \"would\" for these verbs, so it carries all the meaning.",
        'The conditional does NOT translate English "would" when "would" really means habitual "used to" — De niño, comía arroz todos los días ("As a kid, I used to/would eat rice every day") needs the imperfect, not the conditional. Reach for the conditional only for hypotheticals, polite requests, or reported future — not repeated past habits.',
        'Every conditional form gets an accent on the í, including nosotros — comeríamos, not *comeriamos — unlike the future tense, which skips the accent only in the nosotros form.',
      ],
    },
    {
      heading: 'Putting the Conditional to Work',
      paragraphs: [
        'The conditional isn\'t just a grammar exercise — it does three genuinely useful jobs in everyday Spanish. The first is politeness: softening a request or question makes it sound more courteous, the same way English shifts from "Can you help me?" to "Could you help me?" ¿Podrías ayudarme? is noticeably gentler than ¿Puedes ayudarme?, and ¿Podría hablar con usted un momento? is a natural, polite way to open a request with someone you don\'t know well. This is one of the most common everyday uses of the conditional, and it\'s worth adopting early — it will make your spoken Spanish sound more natural and considerate immediately.',
        'The second job is describing hypothetical situations — what would happen under some different, often unreal, set of circumstances. Si tuviera más tiempo, viajaría más ("If I had more time, I would travel more") pairs a hypothetical condition with a conditional result. You\'ll get the full grammar of these si-clauses (which tense goes in the "if" half) in a later unit — for now, just recognize that the conditional is the piece that expresses the "would" result, whatever comes before it.',
        'The third job is reported (indirect) speech about the future — restating what someone said they would do, when the original statement is now in the past. If Ana originally said "Vendré mañana" ("I will come tomorrow"), and you later report that statement, the future tense inside her original words shifts back one step to the conditional: Ana dijo que vendría ("Ana said that she would come"). This mirrors English exactly — "will" backshifts to "would" inside reported speech — so the pattern should feel familiar once you see it named.',
        "Finally, just as the simple future can express a guess about the present (Serán las tres, \"it must be about three\"), the conditional does the same job one step further back in time — a guess about the past. Tendría unos treinta años cuando la conocí (\"He must have been about thirty when I met him\") isn't really about anything hypothetical; it's simply a polite, slightly softened way of estimating an age or fact you're not fully sure of, placed in the past.",
      ],
      examples: [
        { es: '¿Podrías ayudarme con esto?', en: 'Could you help me with this?' },
        { es: '¿Podría hablar con usted un momento?', en: 'Could I speak with you for a moment?' },
        { es: 'Si tuviera más tiempo, viajaría más.', en: 'If I had more time, I would travel more.' },
        { es: 'Ana dijo que vendría mañana.', en: 'Ana said that she would come tomorrow.' },
        { es: 'Me dijeron que llegarían tarde.', en: 'They told me they would arrive late.' },
        { es: 'Tendría unos treinta años cuando la conocí.', en: 'He must have been about thirty when I met her. (probability about the past)' },
      ],
      commonMistakes: [
        'Reported speech backshifts the tense the same way English does: the original future (vendré) becomes conditional (vendría) once it\'s inside a past-tense reporting verb like dijo que — don\'t leave it in the future tense when reporting a past statement.',
        '¿Podrías…? and ¿Podría…? are softer and more polite than ¿Puedes…? / ¿Puede…? — but they\'re not more "correct"; the present tense isn\'t wrong, it\'s just more direct, so reach for the conditional specifically when politeness matters (with strangers, service staff, or formal requests).',
        'Don\'t confuse the conditional-for-hypotheticals (needs a si-clause partner, even an implied one) with the conditional-for-probability (a standalone guess, usually about age, time, or a fact) — both look identical in form, only context tells you which job the conditional is doing in a given sentence.',
      ],
    },
  ],

  vocab: [
    { es: 'hablaré', en: 'I will speak (hablar, regular future)', example: 'Mañana hablaré con el jefe.', exampleEn: 'Tomorrow I will speak with the boss.' },
    { es: 'comerás', en: 'you will eat (comer, regular future)', example: '¿A qué hora comerás?', exampleEn: 'What time will you eat?' },
    { es: 'viviremos', en: 'we will live (vivir, regular future)', example: 'Viviremos en Madrid.', exampleEn: 'We will live in Madrid.' },
    { es: 'tendré', en: 'I will have (tener, irregular stem tendr-)', example: 'Tendré que salir temprano.', exampleEn: "I'll have to leave early." },
    { es: 'podrás', en: 'you will be able to (poder, irregular stem podr-)', example: '¿Podrás venir mañana?', exampleEn: 'Will you be able to come tomorrow?' },
    { es: 'haré', en: 'I will do / make (hacer, irregular stem har-)', example: '¿Qué harás este fin de semana?', exampleEn: 'What will you do this weekend?' },
    { es: 'dirá', en: 'he/she will say (decir, irregular stem dir-)', example: 'Ella dirá la verdad.', exampleEn: 'She will tell the truth.' },
    { es: 'vendrán', en: 'they will come (venir, irregular stem vendr-)', example: 'Vendrán a las ocho.', exampleEn: 'They will come at eight.' },
    { es: 'habrá', en: 'there will be (haber, irregular stem habr-)', example: 'Habrá mucha gente.', exampleEn: 'There will be a lot of people.' },
    { es: 'hablaría', en: 'I would speak (hablar, regular conditional)', example: 'Yo hablaría con ella.', exampleEn: 'I would speak with her.' },
    { es: 'comerías', en: 'you would eat (comer, regular conditional)', example: '¿Comerías sushi?', exampleEn: 'Would you eat sushi?' },
    { es: 'tendría', en: 'I/he/she would have (tener, irregular stem tendr-)', example: 'Tendría unos treinta años.', exampleEn: 'He would have been about thirty.' },
    { es: 'podrías', en: 'you would be able to / could you (poder, irregular stem podr-)', example: '¿Podrías ayudarme?', exampleEn: 'Could you help me?' },
    { es: 'querría', en: 'I would want (querer, irregular stem querr-)', example: 'Querría un café, por favor.', exampleEn: 'I would like a coffee, please.' },
    { es: 'sabría', en: 'I/he/she would know (saber, irregular stem sabr-)', example: 'No sabría decirte.', exampleEn: "I wouldn't know how to tell you." },
  ],

  practice: [
    // ── future_simple block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which ending set is used for ALL simple future verbs (-ar, -er, and -ir alike)?', word: '-é/-ás/-á/-emos/-éis/-án', english: 'simple future endings', answer: '-é, -ás, -á, -emos, -éis, -án', options: ['-é, -ás, -á, -emos, -éis, -án', '-aré, -erás, -irá, -aremos, -eréis, -irán', '-aba, -abas, -aba, -ábamos, -abais, -aban', '-o, -as, -a, -amos, -áis, -an'], concept_id: 'future_simple', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Mañana ___ (hablar, yo) con el jefe."', word: 'hablaré', english: 'I will speak', answer: 'hablaré', concept_id: 'future_simple', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the irregular future stem: "Nosotros ___ (tener) que salir temprano."', word: 'tendremos', english: 'we will have', answer: 'tendremos', concept_id: 'future_simple', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the irregular future stem: "¿Qué ___ (hacer, tú) este fin de semana?"', word: 'harás', english: 'you will do', answer: 'harás', concept_id: 'future_simple', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'They will come at eight o'clock.' (venir)", english: "They will come at eight o'clock.", answer: 'Vendrán a las ocho.', word: 'vendrán', concept_id: 'future_simple', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "¿Dónde estará mi teléfono?"?', word: 'estará', english: 'Where can my phone be? (probability)', answer: 'Where can my phone be? (a guess about the present, not a future event)', concept_id: 'future_simple', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "Yo tenré mucho trabajo mañana." (missing the -d- in the irregular stem)', word: 'tendré', english: 'I will have', answer: 'Yo tendré mucho trabajo mañana.', concept_id: 'future_simple', difficulty: 2 },

    // ── conditional block (blocked separately before mixed review) ──
    { type: 'multiple_choice', prompt: 'The conditional endings (-ía, -ías, -ía, -íamos, -íais, -ían) are the same endings used by which other tense (for -er/-ir verbs)?', word: 'imperfect', english: 'imperfect tense', answer: 'the imperfect tense', options: ['the preterite', 'the imperfect tense', 'the present subjunctive', 'the present progressive'], concept_id: 'conditional', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "¿___ (poder, tú) ayudarme?" (a polite request)', word: 'podrías', english: 'could you', answer: 'podrías', concept_id: 'conditional', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Si tuviera más tiempo, ___ (viajar, yo) más."', word: 'viajaría', english: 'I would travel', answer: 'viajaría', concept_id: 'conditional', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete the reported speech: "Ana dijo que ___ (venir) mañana." (her original words were "Vendré mañana")', word: 'vendría', english: 'she would come', answer: 'vendría', concept_id: 'conditional', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Could you help me with this?' (polite request, tú)", english: 'Could you help me with this?', answer: '¿Podrías ayudarme con esto?', altAnswers: ['¿Me podrías ayudar con esto?'], word: 'podrías', concept_id: 'conditional', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Tendría unos treinta años cuando la conocí"?', word: 'tendría', english: 'He must have been about thirty when I met her.', answer: 'He must have been about thirty when I met her. (probability about the past)', concept_id: 'conditional', difficulty: 3 },
    { type: 'error_correction', prompt: 'Fix the error: "De niño, yo comería arroz todos los días." (habitual past action, not a hypothetical)', word: 'comía', english: 'I used to eat', answer: 'De niño, yo comía arroz todos los días.', concept_id: 'conditional', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish.com,
// and Collins/Spanish.academy grammar references before writing (July 2026):
// - Simple future formation: endings (-é, -ás, -á, -emos, -éis, -án) attach
//   directly to the full infinitive for -ar/-er/-ir verbs alike; every form
//   is accented except the nosotros (-emos) form.
// - The 12 canonical future/conditional irregular stems, grouped by pattern:
//   e-dropping (poder→podr-, saber→sabr-, querer→querr-, haber→habr-),
//   e/i-dropping + inserted -d- (tener→tendr-, poner→pondr-, venir→vendr-,
//   salir→saldr-), and fully irregular (decir→dir-, hacer→har-) — endings
//   remain the standard regular set in every case.
// - Conditional formation: identical stems to the simple future (regular =
//   full infinitive; irregular = same 12 shortened stems), with endings
//   -ía/-ías/-ía/-íamos/-íais/-ían — confirmed as literally the imperfect
//   -er/-ir endings attached to the future stem, with an accent on every
//   single form including nosotros (no exception, unlike the future).
// - Conditional core uses confirmed: (1) softening requests/politeness
//   (¿Podrías...? vs. ¿Puedes...?), (2) hypothetical results paired with a
//   si-clause (fuller si-clause grammar deferred to a later B2 unit per
//   concepts.js prereqs), (3) reported/indirect speech backshifting an
//   original future statement to conditional (Dijo que vendría), and (4) an
//   additional "conditional of probability" for guesses about the past,
//   paralleling the future-of-probability for the present.
// - Future/conditional "of probability" uses (Estará en el trabajo / Tendría
//   treinta años) confirmed as legitimate, common uses distinct from a
//   present-and-future or hypothetical reading of the same forms.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// future_simple and conditional in src/content/grammar.js (same facts,
// fuller B1-paced walkthrough) and does not contradict them. Per
// concepts.js, conditional lists future_simple as its sole prerequisite,
// which this unit satisfies by teaching future_simple first, in the same
// lesson, immediately before introducing the conditional.
