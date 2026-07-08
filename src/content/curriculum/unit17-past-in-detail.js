// Unit 17 — The Past in Detail (B1)
// Covers: preterite_irregular, imperfect, preterite_vs_imperfect
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish-adjacent
// grammar references, and established grammar references before writing —
// see the audit note at the bottom of this file for the specific claims
// checked. This unit builds on Unit 11 (regular preterite), which is not
// re-taught here, and is written to be consistent with the existing
// preterite_irregular, imperfect, and preterite_vs_imperfect entries in
// src/content/grammar.js and functions/_lib/concepts.js.

export default {
  sections: [
    {
      heading: 'When the Preterite Breaks Its Own Rules',
      paragraphs: [
        "Back in Unit 11 you learned the regular preterite — the tense for a single, completed action in the past, built by swapping the infinitive ending for endings like -é, -aste, -ó. That pattern covers a huge number of Spanish verbs. But some of the most common verbs in the language refuse to follow it, and because you'll need these verbs constantly (to say what someone had, did, could, wanted, or came to do), they're worth learning as their own small, tight set rather than as isolated exceptions.",
        "The most important irregular pair is ir (to go) and ser (to be) — in the preterite, they are identical: fui, fuiste, fue, fuimos, fuisteis, fueron. That's not a typo or a coincidence; historically the two verbs merged into one shared preterite form, and modern Spanish just lives with the ambiguity. In practice this is almost never confusing, because context makes it obvious which verb is meant: Fui al cine (I went to the movies — clearly ir, since al cine signals a destination) versus Fui profesor durante diez años (I was a teacher for ten years — clearly ser, since profesor is a role, not a place).",
        "Notice something else about fui, fue, fuimos: none of these forms carries a written accent, unlike the regular preterite endings you learned in Unit 11 (hablé, comió). That's your first clue that you've left the regular pattern behind. A whole family of common verbs shares this accent-free trait, along with its own private set of endings — that family is coming up next.",
      ],
      examples: [
        { es: 'Fui a la playa el verano pasado.', en: 'I went to the beach last summer. (ir)' },
        { es: 'Mi abuela fue maestra toda su vida.', en: 'My grandmother was a teacher her whole life. (ser)' },
        { es: '¿Adónde fuiste ayer?', en: 'Where did you go yesterday?' },
        { es: 'Fuimos los primeros en llegar.', en: 'We were the first ones to arrive.' },
        { es: 'Ellos fueron a la fiesta pero se fueron temprano.', en: 'They went to the party but left early.' },
      ],
      commonMistakes: [
        "Don't panic when fui/fue/fueron looks ambiguous out of context — native speakers rely on the rest of the sentence (a destination = ir, a role or description = ser) exactly the way you now will.",
        "Don't add an accent to fui, fue, or fuimos — these irregular preterite forms never take a written accent, unlike hablé or comió from the regular pattern.",
        "Don't confuse this shared preterite with the present tense — voy (I go), soy (I am) are completely distinct words from fui; the overlap only happens in the preterite.",
      ],
    },
    {
      heading: 'The "Strong" Preterite: One Set of Endings, Many Verbs',
      paragraphs: [
        "Spanish grammar books often call the next group the pretérito fuerte (\"strong preterite\") — a historical term, but a genuinely useful one, because these verbs share a single irregular ending pattern once you know their special stem. The endings are: -e, -iste, -o, -imos, -isteis, -ieron. Compare that to the regular -er/-ir preterite endings from Unit 11 (-í, -iste, -ió, -imos, -isteis, -ieron): they're close cousins, but the yo and él/ella forms lose their accent and change vowel (-e instead of -í, -o instead of -ió). That's the accent-free signature you just saw in fui/fue.",
        "To use this pattern, you need each verb's irregular stem — the ending is always the same, but the stem replaces the infinitive root entirely. Some of the most common: tener → tuv- (tuve, tuviste, tuvo, tuvimos, tuvisteis, tuvieron), estar → estuv- (estuve, estuviste, estuvo…), poder → pud- (pude, pudiste, pudo…), poner → pus- (puse, pusiste, puso…), saber → sup- (supe, supiste, supo…), and querer → quis- (quise, quisiste, quiso…). Notice the pattern within the pattern: tener and estar both swap in -uv-, while poder, poner, saber, and querer swap in a stem ending in a consonant plus a short vowel.",
        "Two verbs bend the stem a little further because they involve an i-to-e or e-to-i-like shift: hacer → hic- (hice, hiciste, hizo, hicimos, hicisteis, hicieron) — watch that hizo swaps c for z, purely a spelling fix to keep the \"s\" sound before o, not a new irregularity to memorize separately. And venir → vin- (vine, viniste, vino, vinimos, vinisteis, vinieron), which shares its vowel pattern with tener's cousin tuv- but with an i instead of a u.",
        "A final subgroup — decir (to say/tell), traer (to bring), and a few others like conducir (to drive) and traducir (to translate) — take a stem ending in j: dij-, traj-. These follow the same endings with one extra twist: in the ellos/ellas/ustedes form, the i of -ieron gets swallowed by the j, so you get dijeron and trajeron, not dijieron or trajieron. Full forms: decir → dije, dijiste, dijo, dijimos, dijisteis, dijeron; traer → traje, trajiste, trajo, trajimos, trajisteis, trajeron.",
      ],
      examples: [
        { es: 'Tuve una semana muy difícil.', en: 'I had a very difficult week. (tener)' },
        { es: '¿Dónde estuviste anoche?', en: 'Where were you last night? (estar)' },
        { es: 'No pude terminar la tarea.', en: "I couldn't finish the homework. (poder)" },
        { es: 'Puse las llaves en la mesa.', en: 'I put the keys on the table. (poner)' },
        { es: 'Ella hizo toda la cena sola.', en: 'She made the whole dinner by herself. (hacer)' },
        { es: 'Vine en tren porque no quise conducir.', en: 'I came by train because I didn\'t want to drive. (venir, querer)' },
        { es: 'Supe la verdad ayer.', en: 'I found out the truth yesterday. (saber)' },
        { es: '¿Qué dijiste? — Dije que traje el postre.', en: 'What did you say? — I said I brought the dessert. (decir, traer)' },
        { es: 'Ellos dijeron la verdad y trajeron pruebas.', en: 'They told the truth and brought proof. (dijeron, not dijieron)' },
      ],
      commonMistakes: [
        "Don't add accents to any of these strong-preterite forms — tuve, pude, hice, dije all lack the written accent that regular preterite verbs carry, and that's expected, not an error.",
        "Don't build hizo as hico — the c changes to z before o, purely to preserve the \"s\" sound; it's a spelling adjustment, not a different stem.",
        "Don't write dijieron or trajieron — verbs with a j-stem (decir, traer, conducir, traducir) drop the i in the ellos/ellas/ustedes ending: it's dijeron and trajeron.",
        "Don't mix up the strong-preterite endings with the regular ones — the giveaway is always the yo form: hablé (regular, accented -é) versus tuve (irregular, unaccented -e).",
      ],
    },
    {
      heading: 'The Imperfect: Spanish\'s Most Regular Past Tense',
      paragraphs: [
        "So far every past-tense verb you've met describes a finished action — something that happened and ended. Spanish has a second past tense, the imperfect (el imperfecto), for a completely different job: describing what was ongoing, habitual, or true as background, without focusing on when it started or ended. Where the preterite says \"this happened,\" the imperfect says \"this is how things were.\"",
        "Here's the encouraging part: after the irregular preterite verbs you just learned, the imperfect is almost a relief — it is one of the most regular tenses in the entire language. For -ar verbs, add -aba, -abas, -aba, -ábamos, -abais, -aban to the stem: hablar → hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban. For both -er and -ir verbs, add -ía, -ías, -ía, -íamos, -íais, -ían: comer → comía, comías, comía, comíamos, comíais, comían; vivir → vivía, vivías, vivía, vivíamos, vivíais, vivían. Notice -er and -ir share the same endings here too, just as they did in the preterite.",
        "There are only three genuinely irregular verbs in the entire imperfect tense: ser (era, eras, era, éramos, erais, eran), ir (iba, ibas, iba, íbamos, ibais, iban), and ver (veía, veías, veía, veíamos, veíais, veían — it keeps the e from the stem, giving it an extra vowel rather than an irregular ending). That's it. Every other verb in Spanish, no matter how irregular it is in the present or preterite, is perfectly regular in the imperfect — tener becomes tenía, hacer becomes hacía, ir's usual troublemaking cousin querer becomes quería, all following the plain -ía pattern.",
        "So what do you actually use this very regular tense for? Four overlapping jobs: habitual or repeated past actions (Todos los veranos íbamos a la playa — Every summer we used to go to the beach), descriptions of people, places, or things in the past (La casa era grande y tenía un jardín — The house was big and had a garden), background context that sets a scene (Llovía y hacía frío — It was raining and it was cold), and telling time or age in the past (Eran las diez de la noche — It was ten at night; Tenía quince años — I was fifteen years old). Notice the common thread: none of these focuses on when the action started or ended — they just describe an ongoing state of affairs.",
      ],
      examples: [
        { es: 'Cuando era niño, vivía en el campo.', en: 'When I was a child, I lived in the countryside.' },
        { es: 'Todos los domingos visitábamos a mis abuelos.', en: 'Every Sunday we used to visit my grandparents.' },
        { es: 'Mi profesora era muy paciente.', en: 'My teacher was very patient.' },
        { es: 'Hacía mucho calor ese día.', en: 'It was very hot that day.' },
        { es: 'Eran las tres de la tarde cuando salí.', en: 'It was three in the afternoon when I left.' },
        { es: 'Yo quería ser astronauta de pequeño.', en: 'I wanted to be an astronaut as a little kid.' },
      ],
      commonMistakes: [
        "Don't try to memorize a long irregular list for the imperfect the way you did for the preterite — there are only three irregular verbs total (ser, ir, ver); everything else, including verbs that are wildly irregular elsewhere, is fully regular here.",
        "Don't forget the accent marks on the -ía endings (tenía, quería) and on the nosotros form of -ar verbs (hablábamos) — these accents are required in writing, not optional.",
        'Don\'t confuse ir\'s imperfect (iba, íbamos…) with its preterite (fui, fuimos…) — they look nothing alike because ir is irregular in both tenses, but in two entirely different ways.',
      ],
    },
    {
      heading: 'Choosing Between Them: The Core Rule',
      paragraphs: [
        "You now have two past tenses that both translate as English simple past — comí and comía both mean roughly \"I ate\" in isolation — so the real skill in this unit isn't conjugating either one; it's knowing which one a given sentence calls for. The core rule: use the preterite for a completed action viewed as a whole, with a clear beginning and end (even if you don't state them), or something that happened a specific, countable number of times. Use the imperfect for an ongoing action, a habitual or repeated action without a countable number, a description, or background scene-setting.",
        "A useful mental image: the imperfect is the video camera panning across a scene, and the preterite is the single photograph of an event within it. Comía cuando sonó el teléfono (I was eating when the phone rang) uses exactly this contrast — comía (imperfect) is the ongoing action already in progress, the video running in the background, while sonó (preterite) is the single interrupting event, the photograph snapped at one instant. This interruption pattern — imperfect for the ongoing action, preterite for what broke into it — is one of the most common and useful structures in Spanish narration, and it's worth internalizing as a pair: Dormía cuando sonó el teléfono (I was sleeping when the phone rang); Caminaba por la calle cuando vi a mi amigo (I was walking down the street when I saw my friend).",
        "Time expressions are a strong, reliable hint for which tense a sentence wants. Words that anchor a specific, completed moment — ayer (yesterday), anoche (last night), una vez (once), de repente (suddenly), el año pasado (last year), a las tres (at three o'clock, as a completed arrival/departure point) — pull toward the preterite. Words that signal repetition or an unbounded stretch of time — siempre (always), todos los días (every day), a menudo (often), mientras (while), de niño/de niña (as a child), normalmente (normally) — pull toward the imperfect. De niño jugaba al fútbol, pero ayer jugué al tenis contrasts the two directly: jugaba (imperfect, habitual childhood pattern) versus jugué (preterite, one specific completed game yesterday).",
        "A handful of verbs genuinely change meaning depending on which past tense you pick, because the imperfect describes a state and the preterite describes the moment that state began or ended. Sabía means \"I knew\" (an ongoing state of knowledge); supe means \"I found out\" (the specific moment the knowledge began). Conocía means \"I knew/was acquainted with\" (an existing state); conocí means \"I met\" (the specific moment I first encountered someone). Podía means \"I was able to / had the general ability\"; pude means \"I managed to / succeeded in\" a specific attempt (and no pude often specifically means \"I tried and failed\"). Quería means \"I wanted\" (an ongoing desire); quise can mean \"I tried\" (the moment of attempting to act on that desire), and no quise means \"I refused.\" One more reliable pattern: ser and tener describing background facts — age, appearance, characteristics — are almost always imperfect in a narrative, since they're setting the scene rather than reporting an event: Tenía veinte años y era muy tímido cuando nos conocimos (I was twenty and was very shy when we met — note conocimos here is preterite, the one-time meeting event).",
      ],
      examples: [
        { es: 'Dormía cuando sonó el teléfono.', en: 'I was sleeping when the phone rang.' },
        { es: 'Caminábamos por el parque cuando empezó a llover.', en: 'We were walking through the park when it started to rain.' },
        { es: 'De niña, jugaba al fútbol todos los días; ayer jugué por primera vez en un año.', en: 'As a girl, I played soccer every day; yesterday I played for the first time in a year.' },
        { es: 'Sabía que tenías razón, pero lo supe demasiado tarde.', en: "I knew you were right, but I found it out too late." },
        { es: 'Conocía a su hermano, pero conocí a Marta ayer.', en: "I already knew her brother, but I met Marta yesterday." },
        { es: 'Quería llamarte, pero al final no quise molestarte tan tarde.', en: "I wanted to call you, but in the end I decided not to bother you so late." },
        { es: 'Tenía quince años y era muy alto cuando empezó la escuela.', en: 'He was fifteen years old and very tall when school started.' },
      ],
      commonMistakes: [
        "Don't assume the imperfect is just \"the past tense for things that happened a long time ago\" — the choice is about the grammatical shape of the action (ongoing/habitual vs. completed/bounded), not how long ago it happened. Ayer jugué (yesterday, but a single completed game) is still preterite.",
        "Don't put the interrupting event in the imperfect — in Dormía cuando sonó el teléfono, the phone ringing is the single completed event that breaks into the ongoing background, so it must be preterite (sonó), even though it also \"happened once, quickly.\"",
        "Don't translate sabía and supe the same way — sabía is an ongoing state (\"I knew\"), while supe marks the specific moment the knowledge started (\"I found out\"). The same shift applies to conocía/conocí and podía/pude.",
        'Don\'t treat time words as an absolute rule with no exceptions — siempre and todos los días strongly favor the imperfect, but a sentence can still use the preterite with them if it\'s counting a bounded set of repetitions ("Fui al gimnasio todos los días de esa semana" — I went to the gym every day that week — a specific, closed week, so preterite). Read the whole sentence, not just the time word.',
      ],
    },
  ],

  vocab: [
    { es: 'fui', en: 'I went / I was', example: 'Fui a la tienda esta mañana.', exampleEn: 'I went to the store this morning.' },
    { es: 'tuve', en: 'I had', example: 'Tuve un examen muy difícil.', exampleEn: 'I had a very difficult exam.' },
    { es: 'estuve', en: 'I was (temporary state/location)', example: 'Estuve en Madrid la semana pasada.', exampleEn: 'I was in Madrid last week.' },
    { es: 'hice', en: 'I did / made', example: 'Hice la tarea anoche.', exampleEn: 'I did the homework last night.' },
    { es: 'pude', en: 'I could / managed to', example: 'Por fin pude terminar el proyecto.', exampleEn: 'I finally managed to finish the project.' },
    { es: 'puse', en: 'I put', example: 'Puse el libro en la mesa.', exampleEn: 'I put the book on the table.' },
    { es: 'quise', en: 'I wanted / tried to', example: 'Quise llamarte pero no tenía tu número.', exampleEn: "I wanted to call you but I didn't have your number." },
    { es: 'supe', en: 'I found out / learned', example: 'Supe la noticia por mi hermana.', exampleEn: 'I found out the news from my sister.' },
    { es: 'vine', en: 'I came', example: 'Vine en autobús porque el coche no funcionaba.', exampleEn: "I came by bus because the car wasn't working." },
    { es: 'dije', en: 'I said / told', example: 'Le dije la verdad a mi amigo.', exampleEn: 'I told my friend the truth.' },
    { es: 'traje', en: 'I brought', example: 'Traje comida para todos.', exampleEn: 'I brought food for everyone.' },
    { es: 'hablaba', en: 'I used to speak / was speaking', example: 'De niño hablaba solo con mi abuela en español.', exampleEn: 'As a child I only spoke Spanish with my grandmother.' },
    { es: 'vivía', en: 'I used to live / was living', example: 'Vivía en un pueblo pequeño.', exampleEn: 'I used to live in a small town.' },
    { es: 'era', en: 'I/he/she/it was (description)', example: 'Mi primer coche era rojo.', exampleEn: 'My first car was red.' },
    { es: 'iba', en: 'I/he/she/it was going / used to go', example: 'Iba al colegio a pie todos los días.', exampleEn: 'I used to walk to school every day.' },
    { es: 'mientras', en: 'while', example: 'Mientras cocinaba, escuchaba música.', exampleEn: 'While I was cooking, I was listening to music.' },
    { es: 'de repente', en: 'suddenly', example: 'De repente, empezó a llover.', exampleEn: 'Suddenly, it started to rain.' },
    { es: 'de niño / de niña', en: 'as a child', example: 'De niña, quería ser doctora.', exampleEn: 'As a girl, I wanted to be a doctor.' },
  ],

  practice: [
    // ── preterite_irregular block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which is the correct yo preterite form of tener?', word: 'tuve', english: 'I had', answer: 'tuve', options: ['tené', 'tuve', 'tenía', 'tengo'], concept_id: 'preterite_irregular', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Ayer yo ___ (hacer) toda la cena."', word: 'hacer', english: 'to do/make', answer: 'hice', concept_id: 'preterite_irregular', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Ellos ___ (decir) la verdad." (watch the ellos ending)', word: 'decir', english: 'to say/tell', answer: 'dijeron', concept_id: 'preterite_irregular', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I went to the party but I couldn\\'t stay long.' (ir, poder)", english: "I went to the party but I couldn't stay long.", answer: 'Fui a la fiesta pero no pude quedarme mucho tiempo.', altAnswers: ['Fui a la fiesta pero no me pude quedar mucho tiempo.'], word: 'fui / pude', concept_id: 'preterite_irregular', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Estuvimos en la playa todo el día"?', word: 'estuvimos', english: 'we were', answer: 'We were at the beach all day.', concept_id: 'preterite_irregular', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which correctly conjugates traer for "they brought"?', word: 'trajeron', english: 'they brought', answer: 'trajeron', options: ['traeron', 'trajieron', 'trajeron', 'traieron'], concept_id: 'preterite_irregular', difficulty: 3 },
    { type: 'error_correction', prompt: 'Find and fix the error: "Yo hicé la tarea anoche."', word: 'hice', english: 'I did/made', answer: 'Yo hice la tarea anoche.', concept_id: 'preterite_irregular', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and fix the error: "Ellos dijieron que sí."', word: 'dijeron', english: 'they said', answer: 'Ellos dijeron que sí.', concept_id: 'preterite_irregular', difficulty: 3 },

    // ── imperfect block (kept separate from preterite_irregular; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which is the correct yo imperfect form of vivir?', word: 'vivía', english: 'I used to live', answer: 'vivía', options: ['viví', 'vivía', 'vivo', 'viviera'], concept_id: 'imperfect', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Cuando ___ (ser) niño, jugaba en el parque todos los días."', word: 'ser', english: 'to be', answer: 'era', concept_id: 'imperfect', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Nosotros ___ (ir) a la playa cada verano." (irregular imperfect)', word: 'ir', english: 'to go', answer: 'íbamos', concept_id: 'imperfect', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'It was ten o'clock and it was raining.'", english: 'It was ten o\'clock and it was raining.', answer: 'Eran las diez y llovía.', word: 'eran / llovía', concept_id: 'imperfect', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Mi abuelo siempre contaba las mismas historias"?', word: 'contaba', english: 'used to tell', answer: 'My grandfather always used to tell the same stories.', altAnswers: ['My grandfather always told the same stories.'], concept_id: 'imperfect', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and fix the error: "Yo veía la tele; ella veiba un libro." (imperfect of ver)', word: 'veía', english: 'was watching/seeing', answer: 'Yo veía la tele; ella veía un libro.', concept_id: 'imperfect', difficulty: 3 },

    // ── preterite_vs_imperfect block (interleaves both tenses; kept last since it requires both) ──
    { type: 'multiple_choice', prompt: '"Yo ___ (dormir) cuando sonó el teléfono." Which tense fits the ongoing background action?', word: 'dormía', english: 'was sleeping', answer: 'dormía', options: ['dormí', 'dormía', 'duermo', 'dormido'], concept_id: 'preterite_vs_imperfect', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "De niño, yo ___ (jugar) al fútbol todos los días, pero ayer ___ (jugar) al tenis." (habit, then one-time event)', word: 'jugaba / jugué', english: 'used to play / played', answer: 'jugaba, jugué', concept_id: 'preterite_vs_imperfect', difficulty: 3 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We were walking through the park when it started to rain.'", english: 'We were walking through the park when it started to rain.', answer: 'Caminábamos por el parque cuando empezó a llover.', word: 'caminábamos / empezó', concept_id: 'preterite_vs_imperfect', difficulty: 3 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Sabía que tenías razón, pero lo supe demasiado tarde"?', word: 'sabía / supe', english: 'knew / found out', answer: 'I knew you were right, but I found it out too late.', concept_id: 'preterite_vs_imperfect', difficulty: 3 },
    { type: 'multiple_choice', prompt: 'Which best captures the difference between "conocía" and "conocí"?', word: 'conocía vs. conocí', english: 'knew (state) vs. met (event)', answer: 'conocía = was already acquainted with; conocí = met for the first time', options: ['They mean exactly the same thing', 'conocía = was already acquainted with; conocí = met for the first time', 'conocía is used only for places; conocí only for people', 'conocí is the imperfect and conocía is the preterite'], concept_id: 'preterite_vs_imperfect', difficulty: 3 },
    { type: 'error_correction', prompt: 'Find and fix the error: "Dormía cuando el teléfono sonaba." (the interrupting event should be a completed action)', word: 'sonó', english: 'rang', answer: 'Dormía cuando el teléfono sonó.', concept_id: 'preterite_vs_imperfect', difficulty: 3 },
    { type: 'error_correction', prompt: 'Find and fix the error: "Tenía veinte años y fui muy tímido cuando nos conocimos." (background description should be imperfect)', word: 'era', english: 'was (description)', answer: 'Tenía veinte años y era muy tímido cuando nos conocimos.', concept_id: 'preterite_vs_imperfect', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict guides (Preterite
// Conjugations, Spanish Preterite Stem Changes, Imperfect Tense, Imperfect
// Conjugations, Preterite vs Imperfect in Spanish), Migaku's Estar Preterite
// Conjugation guide, and additional grammar references (July 2026):
// - ir/ser share identical preterite forms: fui, fuiste, fue, fuimos,
//   fuisteis, fueron — disambiguated only by context.
// - Strong/irregular preterite stems and their shared endings (-e, -iste,
//   -o, -imos, -isteis, -ieron), none of them accented: tener→tuv-,
//   estar→estuv-, poder→pud-, poner→pus-, querer→quis-, saber→sup-,
//   hacer→hic- (with hizo's c→z spelling change before o), venir→vin-.
// - j-stem verbs (decir→dij-, traer→traj-, and the related conducir/
//   traducir family) drop the i in the ellos/ellas/ustedes ending:
//   dijeron/trajeron, not dijieron/trajieron.
// - Regular imperfect endings: -ar → -aba/-abas/-aba/-ábamos/-abais/-aban;
//   -er/-ir → -ía/-ías/-ía/-íamos/-íais/-ían.
// - Only three irregular imperfect verbs exist: ser (era…), ir (iba…), ver
//   (veía…) — confirmed as a closed, complete list, no stem-changing verbs
//   in the imperfect.
// - Core preterite-vs-imperfect contrast: completed/bounded/countable
//   actions → preterite; ongoing, habitual, descriptive, or background
//   actions → imperfect; the classic "ongoing action interrupted by a
//   completed event" pattern (Dormía cuando sonó el teléfono) with
//   imperfect for the background action and preterite for the interruption.
// - Meaning-shifting verbs in preterite vs. imperfect: sabía/supe,
//   conocía/conocí, podía/pude, quería/quise (including no quise = refused,
//   no pude = tried and failed), and ser/tener defaulting to imperfect for
//   background description (age, appearance, traits) in narrative.
// This content builds on (and does not re-teach) Unit 11's regular
// preterite, and is complementary to the existing GRAMMAR_CARDS entries for
// preterite_irregular, imperfect, and preterite_vs_imperfect in
// src/content/grammar.js (same facts, fuller B1-paced walkthrough).
