// Unit 06 — Everyday Actions (A1)
// Covers: present_ar, present_er_ir
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose for a true
// beginner. Every Spanish verb form and grammatical claim below was
// verified against SpanishDict, WordReference-adjacent conjugation sources,
// and established grammar references before writing — see the audit note
// at the bottom of this file for the specific claims checked. Only fully
// regular -ar, -er, and -ir verbs (present indicative) appear here;
// irregular present tense (ir, tener, ser, hacer…) is a separate later
// unit (irregular_present, A2) and is only briefly forward-referenced.

export default {
  sections: [
    {
      heading: 'Meet the Three Verb Families: -AR, -ER, -IR',
      paragraphs: [
        'In Spanish, if you look a verb up in a dictionary, you\'ll always find it in one particular form called the infinitive — the equivalent of English "to speak," "to eat," "to live." Spanish infinitives end in exactly one of three ways: -ar, -er, or -ir, and that ending tells you immediately which "family" of conjugation patterns the verb belongs to. This is one of the most useful facts you\'ll learn as a beginner: unlike English, where irregular verbs (go/went, eat/ate) are common and just have to be memorized one by one, the vast majority of Spanish verbs are perfectly regular within their family. Learn the -ar pattern once, and it works for hundreds of verbs — trabajar, estudiar, cocinar, escuchar, comprar, caminar, cantar, and on and on.',
        'A conjugated form is different from the infinitive: hablar ("to speak") names the action as a whole idea, while hablo chops off -ar and attaches an ending that packs in who\'s doing the speaking — in this case, "I speak." Every regular verb you meet in this unit works the same way: strip the -ar/-er/-ir, attach the ending that matches the subject.',
        'This unit covers only regular verbs. A handful of extremely common ones — ser, estar, ir, tener, hacer, and others — break these patterns in the present tense and get their own dedicated unit later, once these two regular patterns are solid. If you\'ve already noticed a verb that doesn\'t seem to fit, that\'s expected; it\'s simply not covered yet.',
      ],
      examples: [
        { es: 'hablar, comer, vivir', en: 'to speak, to eat, to live — one infinitive from each family' },
        { es: '-ar, -er, -ir', en: 'the three infinitive endings that tell you which pattern to use' },
        { es: 'Hablo. Como. Vivo.', en: 'I speak. I eat. I live. — the same three verbs, conjugated for "yo"' },
        { es: 'trabajar, estudiar, cocinar, escuchar, comprar, caminar, cantar', en: "more -ar verbs following the same pattern you'll learn next" },
        { es: 'Ser, estar, ir y tener son irregulares.', en: 'Ser, estar, ir, and tener are irregular. (covered in a later unit)' },
      ],
      commonMistakes: [
        'English speakers often try to memorize each Spanish verb\'s conjugation individually, the way English handles its irregular verbs (go/went, eat/ate) — but the vast majority of Spanish verbs are perfectly regular within their family, so learning the -ar, -er, and -ir patterns pays off across hundreds of verbs at once.',
        'Don\'t confuse the infinitive (hablar, "to speak") with a conjugated form (habla, "he/she speaks") — the infinitive never changes; it\'s what you look up in a dictionary or verb list.',
        'This unit only covers regular verbs — don\'t try to apply -o/-as/-a or -o/-es/-e endings to verbs like ser, ir, or tener; those follow their own irregular patterns, taught separately.',
      ],
    },
    {
      heading: 'The -AR Family: hablar as Your Model',
      paragraphs: [
        'Every regular -ar verb follows exactly the same recipe as hablar ("to speak"): take the infinitive, remove -ar, and you\'re left with the stem — habl-. Attach one of six endings to that stem depending on who\'s doing the action, and you\'ve conjugated the verb correctly, every time. The six endings are -o, -as, -a, -amos, -áis, -an.',
        'Matched up with the subject pronouns from Unit 1, the full pattern for hablar looks like this: yo hablo, tú hablas, él/ella/usted habla, nosotros/as hablamos, vosotros/as habláis, ellos/ellas/ustedes hablan. Notice that usted still takes the same form as él/ella (habla) and ustedes takes the same form as ellos/ellas (hablan) — exactly the pronoun behavior you already learned applies here too.',
        'Because this pattern is completely regular, it transfers immediately to any other -ar verb: trabajar (to work) → trabajo, trabajas, trabaja…; estudiar (to study) → estudio, estudias, estudia… — the same six endings, every single time. Common regular -ar verbs worth learning early include trabajar, estudiar, cocinar (to cook), escuchar (to listen to), comprar (to buy), caminar (to walk), and cantar (to sing).',
        'One more habit from Unit 1 carries over directly: Spanish usually drops the subject pronoun once the verb ending makes the subject clear. Trabajo en un hospital already means "I work at a hospital" — adding yo is optional, used mainly for emphasis or contrast (Yo trabajo, pero tú descansas — "I work, but you rest").',
      ],
      examples: [
        { es: 'Yo hablo español y un poco de francés.', en: 'I speak Spanish and a little French.' },
        { es: '¿Tú trabajas los sábados?', en: 'Do you work on Saturdays?' },
        { es: 'Ella estudia medicina en la universidad.', en: 'She studies medicine at the university.' },
        { es: 'Nosotros cocinamos juntos los domingos.', en: 'We cook together on Sundays.' },
        { es: '¿Vosotros escucháis música mientras estudiáis?', en: 'Do you all listen to music while you study? (vosotros -áis)' },
        { es: 'Mis padres compran verduras en el mercado.', en: 'My parents buy vegetables at the market.' },
      ],
      commonMistakes: [
        'A very common beginner slip is leaving the verb in its infinitive form instead of conjugating it — "Yo hablar español" is incorrect; it must be "Yo hablo español."',
        'Don\'t drop the accent mark on the vosotros form: habláis, not hablais — the accent marks where the stress falls and is part of correct spelling, not decoration.',
        'It\'s easy to mix up -amos (nosotros) and -an (ellos/ellas/ustedes) since they look similar at a glance — hablamos means "we speak," while hablan means "they/you all (formal) speak."',
      ],
    },
    {
      heading: 'The -ER and -IR Families: comer and vivir',
      paragraphs: [
        'The -er and -ir families share almost the entire set of endings — so close that it\'s easier to learn them together and focus on the one place they differ. Take comer ("to eat") as your -er model and vivir ("to live") as your -ir model: remove the ending, then attach the endings below to the stem (com-, viv-).',
        'Full comparison: comer → como, comes, come, comemos, coméis, comen. Vivir → vivo, vives, vive, vivimos, vivís, viven. Look closely at the yo, tú, él/ella/usted, and ellos/ellas/ustedes forms — como/vivo, comes/vives, come/vive, comen/viven — and you\'ll see the endings (-o, -es, -e, -en) are identical between the two families.',
        'The only place -er and -ir verbs part ways is nosotros and vosotros: -er verbs take -emos/-éis (comemos, coméis), while -ir verbs take -imos/-ís (vivimos, vivís). That\'s the entire difference between the two families — one vowel, in exactly two forms, and everything else is shared.',
        'This pattern is just as regular and transferable as -ar: beber (to drink), leer (to read), aprender (to learn), vender (to sell), and correr (to run) all follow comer\'s pattern; escribir (to write), abrir (to open), recibir (to receive), compartir (to share), and decidir (to decide) all follow vivir\'s.',
      ],
      examples: [
        { es: 'Como fruta por la mañana y bebo café.', en: 'I eat fruit in the morning and drink coffee.' },
        { es: '¿Lees el periódico todos los días?', en: 'Do you read the newspaper every day?' },
        { es: 'Vivimos en un apartamento pequeño.', en: 'We live in a small apartment.' },
        { es: '¿Coméis en casa o coméis fuera?', en: 'Do you all eat at home or eat out? (vosotros -éis)' },
        { es: 'Mis abuelos viven en Argentina; nosotros vivimos en España.', en: 'My grandparents live in Argentina; we live in Spain.' },
        { es: 'Ella escribe correos y yo abro las cartas.', en: 'She writes emails and I open the letters.' },
      ],
      commonMistakes: [
        'The most common mix-up in this family is defaulting to -emos for every "we" form — remember it\'s only -er verbs (comemos) that use -emos; -ir verbs use -imos (vivimos), even though the rest of the pattern is shared.',
        'Don\'t assume every -er or -ir verb follows this pattern — very common ones like tener (to have), hacer (to do/make), and decir (to say) are irregular and need to be learned separately; this unit sticks to fully regular verbs on purpose so the pattern stays clean while it\'s new.',
        'Watch the accent on vosotros: coméis needs the accent on the é; without it, both the stress and the spelling are wrong.',
      ],
    },
    {
      heading: 'Putting It Together: Talking About Your Everyday Life',
      paragraphs: [
        'Put the two patterns together and you already have a real sentence engine: any subject pronoun (yo, tú, él/ella/usted, nosotros/as, vosotros/as, ellos/ellas/ustedes) plus any regular -ar, -er, or -ir verb produces a correct, natural sentence about someone\'s everyday life — no memorization beyond the six endings per family.',
        'A handful of frequency words make these sentences immediately more useful: todos los días ("every day"), siempre ("always"), a veces ("sometimes"), and generalmente ("generally"). Spanish word order with these is more flexible than English, but as a beginner, a safe default is to put siempre and a veces right before the conjugated verb (Siempre trabajo los lunes — "I always work on Mondays") and to let todos los días sit at the start or end of the sentence.',
        'Keep leaning on the pronoun-dropping habit from Unit 1 here too: Vivo en Madrid y trabajo en un banco already communicates "I live in Madrid and I work at a bank" — no yo required unless you\'re contrasting with someone else.',
        'You now have two of the most-used grammar patterns in the entire language, covering a large share of everyday regular verbs. The next step, in a later unit, is the smaller set of very common irregular verbs (ir, tener, ser, hacer, and others) that don\'t follow -o/-as/-a or -o/-es/-e — but with these two patterns solid, that unit will mostly be about memorizing exceptions to a rule you already own.',
      ],
      examples: [
        { es: 'Trabajo en un hospital y estudio inglés por las noches.', en: 'I work at a hospital and study English at night.' },
        { es: 'Mi familia vive en Perú y come mucho arroz.', en: 'My family lives in Peru and eats a lot of rice.' },
        { es: 'Siempre leo antes de dormir.', en: 'I always read before sleeping.' },
        { es: '¿Escribes correos electrónicos todos los días?', en: 'Do you write emails every day?' },
        { es: 'Nosotros compartimos un apartamento pequeño cerca de la universidad.', en: 'We share a small apartment near the university.' },
      ],
      commonMistakes: [
        'When a sentence has two actions joined by "y" (and), both verbs need to be conjugated to match the subject — "Trabajo y estudia" mixes yo and él/ella by mistake; it must be "Trabajo y estudio" if both actions are yours.',
        'English speakers often place frequency words exactly where English would ("I read always") — Spanish rarely does this; as a beginner, put siempre and a veces right before the conjugated verb, and save todos los días for the start or end of the sentence, and you\'ll sound natural.',
      ],
    },
  ],

  vocab: [
    { es: 'hablar', en: 'to speak', example: 'Hablo español todos los días.', exampleEn: 'I speak Spanish every day.' },
    { es: 'trabajar', en: 'to work', example: 'Trabajo en una oficina.', exampleEn: 'I work in an office.' },
    { es: 'estudiar', en: 'to study', example: 'Estudiamos francés los martes.', exampleEn: 'We study French on Tuesdays.' },
    { es: 'cocinar', en: 'to cook', example: 'Mi madre cocina muy bien.', exampleEn: 'My mother cooks very well.' },
    { es: 'escuchar', en: 'to listen (to)', example: 'Escucho música por la mañana.', exampleEn: 'I listen to music in the morning.' },
    { es: 'comprar', en: 'to buy', example: '¿Compras pan en la panadería?', exampleEn: 'Do you buy bread at the bakery?' },
    { es: 'caminar', en: 'to walk', example: 'Caminamos al parque los fines de semana.', exampleEn: 'We walk to the park on weekends.' },
    { es: 'cantar', en: 'to sing', example: 'Ella canta en la ducha.', exampleEn: 'She sings in the shower.' },
    { es: 'comer', en: 'to eat', example: 'Como fruta todos los días.', exampleEn: 'I eat fruit every day.' },
    { es: 'beber', en: 'to drink', example: 'Bebemos agua después de correr.', exampleEn: 'We drink water after running.' },
    { es: 'leer', en: 'to read', example: 'Leo el periódico por la mañana.', exampleEn: 'I read the newspaper in the morning.' },
    { es: 'aprender', en: 'to learn', example: 'Aprendemos español en clase.', exampleEn: 'We learn Spanish in class.' },
    { es: 'vender', en: 'to sell', example: 'Ellos venden fruta en el mercado.', exampleEn: 'They sell fruit at the market.' },
    { es: 'correr', en: 'to run', example: 'Corro todas las mañanas.', exampleEn: 'I run every morning.' },
    { es: 'vivir', en: 'to live', example: 'Vivo en Madrid.', exampleEn: 'I live in Madrid.' },
    { es: 'escribir', en: 'to write', example: 'Escribo cartas a mis amigos.', exampleEn: 'I write letters to my friends.' },
    { es: 'abrir', en: 'to open', example: 'Abro la ventana cuando hace calor.', exampleEn: "I open the window when it's hot." },
    { es: 'recibir', en: 'to receive', example: 'Recibimos correos electrónicos cada día.', exampleEn: 'We receive emails every day.' },
    { es: 'compartir', en: 'to share', example: 'Compartimos la comida con nuestros amigos.', exampleEn: 'We share food with our friends.' },
    { es: 'decidir', en: 'to decide', example: '¿Decides tú o decido yo?', exampleEn: 'Do you decide or do I?' },
  ],

  practice: [
    // ── present_ar block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Choose the correct form: "Nosotros ___ español." (hablar)', word: 'hablar', english: 'to speak', answer: 'hablamos', options: ['hablo', 'hablas', 'hablamos', 'habláis'], concept_id: 'present_ar', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of trabajar: "Yo ___ en una oficina."', word: 'trabajar', english: 'to work', answer: 'trabajo', concept_id: 'present_ar', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "You (informal) study French."', english: 'You (informal) study French.', answer: 'Estudias francés.', word: 'estudiar', concept_id: 'present_ar', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "trabajamos"?', word: 'trabajar', english: 'we work', answer: 'we work', concept_id: 'present_ar', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which subject goes with the verb form "cocina"?', word: 'cocinar', english: 'to cook', answer: 'él/ella/usted', options: ['yo', 'tú', 'él/ella/usted', 'nosotros'], concept_id: 'present_ar', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of escuchar: "Vosotros ___ música todo el día."', word: 'escuchar', english: 'to listen (to)', answer: 'escucháis', concept_id: 'present_ar', difficulty: 2 },

    // ── present_er_ir block (kept separate from present_ar; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Choose the correct form: "Ellos ___ mucho café." (beber)', word: 'beber', english: 'to drink', answer: 'beben', options: ['bebo', 'bebes', 'beben', 'bebéis'], concept_id: 'present_er_ir', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of vivir: "Yo ___ en Madrid."', word: 'vivir', english: 'to live', answer: 'vivo', concept_id: 'present_er_ir', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "We eat pizza on Fridays."', english: 'We eat pizza on Fridays.', answer: 'Comemos pizza los viernes.', word: 'comer', concept_id: 'present_er_ir', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "escribís"?', word: 'escribir', english: 'you all write', answer: 'you all write', concept_id: 'present_er_ir', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which ending completes the nosotros form of a regular -ir verb like vivir?', word: 'vivir', english: 'to live', answer: '-imos', options: ['-emos', '-imos', '-ís', '-en'], concept_id: 'present_er_ir', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete with the correct form of leer: "Ella ___ un libro nuevo cada mes."', word: 'leer', english: 'to read', answer: 'lee', concept_id: 'present_er_ir', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: 'Translate: "They share an apartment."', english: 'They share an apartment.', answer: 'Comparten un apartamento.', word: 'compartir', concept_id: 'present_er_ir', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict conjugation pages,
// WordReference-adjacent conjugation sources, and established grammar
// references before writing (July 2026):
// - hablar full present paradigm (hablo/hablas/habla/hablamos/habláis/hablan)
//   confirmed regular -ar model.
// - comer vs. vivir full present paradigms confirmed regular, with the only
//   divergence at nosotros/vosotros: -emos/-éis (-er) vs. -imos/-ís (-ir);
//   all other persons share identical endings (-o, -es, -e, -en).
// - Each vocab verb individually checked for present-indicative regularity,
//   not just superficial -ar/-er/-ir shape:
//   -ar: hablar, trabajar, estudiar, cocinar, escuchar, comprar, caminar,
//   cantar — all confirmed fully regular present indicative, no stem
//   changes (deliberately avoided look-alike but irregular verbs such as
//   pensar, jugar, cerrar, contar, empezar).
//   -er: comer, beber, leer, aprender, vender, correr — confirmed regular;
//   leer specifically confirmed regular in the present indicative (its
//   irregularities are spelling changes in the gerund/preterite only, not
//   present tense).
//   -ir: vivir, escribir, abrir, recibir, compartir, decidir — confirmed
//   regular in the present indicative; escribir and abrir specifically
//   confirmed to have irregular past participles only (escrito, abierto),
//   which is irrelevant to present tense and not used in this unit.
//   Deliberately avoided -ir verbs with present-tense stem changes (pedir,
//   servir, dormir, sentir, preferir) and -uir verbs with a present-tense
//   spelling insertion (construir, huir).
// - Frequency-adverb placement (siempre/a veces before the verb; todos los
//   días more flexible) checked against multiple sources; phrased with
//   appropriate hedging since sources describe Spanish adverb placement as
//   flexible rather than governed by one strict rule.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// present_ar and present_er_ir in src/content/grammar.js (same facts,
// fuller beginner-paced walkthrough) and does not contradict them.
