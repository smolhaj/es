// Unit 11 — What Happened (A2)
// Covers: preterite_regular, negation
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com/related
// grammar references, and established grammar references before writing —
// see the audit note at the bottom of this file for the specific claims
// checked. This content is written to be consistent with (not contradictory
// to) the existing preterite_regular and negation entries in
// src/content/grammar.js and functions/_lib/concepts.js.

export default {
  sections: [
    {
      heading: 'Talking About the Past: Meet the Preterite',
      paragraphs: [
        "So far you've mostly talked about what's happening now or what's generally true — hablo, como, vivo. This unit gives you your first real tool for the past: the preterite tense (pretérito), used for actions that were completed at a specific point in time. Think of it as Spanish's answer to the English simple past — \"I spoke,\" \"you ate,\" \"they lived\" — a single, finished event, not something ongoing or habitual.",
        "The preterite is formed the same way you've formed every tense so far: drop the infinitive ending (-ar, -er, or -ir) and add a new set of endings in its place. The good news is that there are only two patterns to learn, not three — -er and -ir verbs share identical preterite endings, so once you know -ar and one more pattern, you can conjugate the vast majority of Spanish verbs in the past.",
        'For -ar verbs, the endings are: -é, -aste, -ó, -amos, -asteis, -aron. Take hablar (to speak): hablé (I spoke), hablaste (you spoke), habló (he/she/you formal spoke), hablamos (we spoke), hablasteis (you all spoke, Spain), hablaron (they/you all spoke). For -er and -ir verbs, the endings are: -í, -iste, -ió, -imos, -isteis, -ieron. Comer (to eat) gives comí, comiste, comió, comimos, comisteis, comieron; vivir (to live) gives viví, viviste, vivió, vivimos, vivisteis, vivieron — notice -er and -ir verbs take exactly the same endings.',
        "One detail worth flagging early: the yo, él/ella/usted forms of -ar and -ir verbs carry a written accent on the final vowel (hablé, habló; viví, vivió) — that accent isn't decorative, it's what tells you the stress falls on that last syllable rather than the second-to-last, and it's also what distinguishes some preterite forms from present-tense forms that would otherwise look identical (hablo = I speak now, habló = he/she spoke).",
      ],
      examples: [
        { es: 'Ayer hablé con mi profesora.', en: 'Yesterday I spoke with my teacher.' },
        { es: '¿Comiste en ese restaurante?', en: 'Did you eat at that restaurant?' },
        { es: 'Vivieron en Bogotá por dos años.', en: 'They lived in Bogotá for two years.' },
        { es: 'Anoche cenamos a las nueve.', en: 'Last night we had dinner at nine.' },
        { es: 'Ella escribió una carta muy larga.', en: 'She wrote a very long letter.' },
      ],
      commonMistakes: [
        "Don't drop the accent mark on forms like hablé, habló, comió, or vivió — in writing, hablo (I speak, present) and habló (he/she spoke, preterite) are different words that just happen to share the same letters minus the accent.",
        "Remember -er and -ir verbs share identical preterite endings — there's no need to memorize two separate sets for them; only -ar verbs get their own pattern.",
        'The nosotros form of -ar and -ir verbs (hablamos, vivimos) looks exactly the same in the present and the preterite — context (usually a time word like ayer or a completed sentence) tells you which one is meant.',
      ],
    },
    {
      heading: 'The Yo-Form Spelling Changes: busqué, llegué, empecé',
      paragraphs: [
        "Here's a wrinkle that trips up almost every learner at first, so let's be precise about what it actually is: it is a spelling change, not an irregular verb. The verb itself follows the completely regular -ar pattern above — the only thing that changes is how one letter is written, and only in the yo form, and only to keep the pronunciation consistent.",
        'Spanish spelling has fixed rules for which letters make a hard consonant sound before which vowels. The letter c sounds hard (like "k") before a, o, u, but soft (like "s" or "th") before e or i. So a verb like buscar (to look for) would normally give the yo form buscé — but that spelling would be pronounced with a soft c, contradicting the hard "k" sound the stem actually has. To keep the "k" sound and follow spelling rules, Spanish swaps c for qu before the -é ending: busqué. The verb hasn\'t changed at all; only the spelling has, to protect the sound.',
        'The same logic covers two other verb-ending families. Verbs ending in -gar (like llegar, "to arrive") swap g for gu before -é, to keep the hard "g" sound: llegué (not llegé, which would sound like the soft "h" in gente). Verbs ending in -zar (like empezar, "to begin") swap z for c before -é, simply because standard Spanish spelling avoids z immediately before e or i: empecé (not empezé).',
        "These three families — -car → -qué, -gar → -gué, -zar → -cé — are extremely common, so it's worth committing the pattern to memory rather than each verb individually: jugar → jugué, tocar → toqué, pagar → pagué, comenzar → comencé, sacar → saqué. Every other form of these verbs (tú, él/ella, nosotros, etc.) is completely regular — the spelling change is strictly limited to the yo form, because that's the only form where the -é ending would otherwise create a pronunciation mismatch.",
      ],
      examples: [
        { es: 'Ayer busqué mis llaves por toda la casa.', en: 'Yesterday I looked for my keys all over the house.' },
        { es: 'Llegué tarde a la reunión.', en: 'I arrived late to the meeting.' },
        { es: 'Empecé a estudiar español el año pasado.', en: 'I started studying Spanish last year.' },
        { es: 'Jugué al fútbol con mis amigos.', en: 'I played soccer with my friends.' },
        { es: 'Pagué la cuenta con tarjeta.', en: 'I paid the bill with a card.' },
      ],
      commonMistakes: [
        'Don\'t treat busqué, llegué, and empecé as irregular verbs to memorize form-by-form — they\'re fully regular preterite verbs with one spelling adjustment in the yo form only; every other person (buscaste, buscó, buscamos…) follows the normal -ar pattern exactly.',
        'Watch the direction of the swap: -car becomes -qué (not -ce), -gar becomes -gué (not -ge), and -zar becomes -cé (not -ze) — it\'s easy to mix these up when writing quickly.',
        "This spelling change never appears outside the yo form — busco, buscas, busca, buscamos, buscáis, buscan (present) and buscaste, buscó, buscamos, buscasteis, buscaron (preterite, non-yo) all keep the plain c.",
      ],
    },
    {
      heading: 'Saying No: Basic Negation',
      paragraphs: [
        'You already know the simplest negation pattern in Spanish, because you\'ve been using it since Unit 1 without a name for it: put no directly before the conjugated verb. No hablo francés ("I don\'t speak French"), No trabajamos los domingos ("We don\'t work on Sundays"). Unlike English, which needs a helper verb to negate ("I do not speak," "we do not work"), Spanish just adds no in front — no "do/does" required.',
        'This same rule extends cleanly into the preterite you just learned: No hablé con ella ayer ("I didn\'t speak with her yesterday"), No llegamos a tiempo ("We didn\'t arrive on time"). The no simply sits in front of the conjugated verb, whatever tense it\'s in, and pronoun objects (if any) sit between no and the verb: No lo vi ("I didn\'t see it/him").',
        "Beyond plain no, Spanish has a small set of negative words for more specific meanings: nada (nothing/anything), nadie (nobody/anyone), nunca (never), ninguno/ninguna (none/not any), and tampoco (neither/not either). These work alongside no, not as one-word replacements for it — which is exactly what the next section is about.",
      ],
      examples: [
        { es: 'No hablo alemán.', en: "I don't speak German." },
        { es: 'No trabajamos los domingos.', en: "We don't work on Sundays." },
        { es: 'No llegué a tiempo ayer.', en: "I didn't arrive on time yesterday." },
        { es: '¿Comiste algo? — No, no comí nada todavía.', en: 'Did you eat something? — No, I haven\'t eaten anything yet.' },
      ],
      commonMistakes: [
        'Don\'t look for a Spanish equivalent of "do/does" to build a negative sentence — English "I do not speak" collapses to a single word, no, in Spanish before the verb: No hablo.',
        'When there\'s an object pronoun, no goes before it, not between the pronoun and the verb: No lo vi (correct), not Lo no vi.',
      ],
    },
    {
      heading: 'The Double Negative: Required, Not a Mistake',
      paragraphs: [
        'Here\'s where Spanish negation genuinely differs from English grammar, in a way that surprises a lot of learners: Spanish requires a double negative in sentences where a negative word (nada, nadie, nunca, ninguno, tampoco) comes after the verb. In English, "I don\'t see nobody" is considered bad grammar — a double negative that (confusingly) is supposed to cancel out to a positive. In Spanish, the equivalent construction, No veo a nadie ("I don\'t see anyone/anybody"), is not just acceptable — it\'s the only correct way to say it.',
        'The rule works like this: if the negative word goes after the verb, you must also put no before the verb. No tengo nada (I don\'t have anything/I have nothing). No viene nunca (He never comes). No hay nadie aquí (There\'s nobody here). No me gusta tampoco (I don\'t like it either). In every one of these, leaving out the no — "*Tengo nada," "*Viene nunca" — is ungrammatical, not just informal.',
        "There's a second option that avoids the double negative entirely: put the negative word before the verb instead of no. Nada tengo, Nunca viene, Nadie está aquí, Tampoco me gusta all mean the same thing as their no-plus-negative-word counterparts above — but this word order is much less common in everyday speech and sounds a bit more formal or literary. As a learner, default to the no + verb + negative word pattern (No tengo nada) for natural, everyday Spanish, and just recognize the fronted version (Nada tengo) when you encounter it.",
        "Two more details will save you from common slips. First, nadie and alguien (someone) refer only to people, and when nadie is the direct object of a verb, it needs the personal a in front of it, just like any other person-as-direct-object: No vi a nadie en la fiesta (I didn't see anyone at the party) — leaving out the a here is a frequent beginner error. Second, ninguno shortens to ningún right before a masculine singular noun, the same way uno shortens to un and bueno to buen: No tengo ningún problema (I don't have any problem), but Ninguna de mis amigas vino (None of my friends came) keeps the full ninguna before a feminine noun or when standing alone.",
      ],
      examples: [
        { es: 'No tengo nada en la mochila.', en: "I don't have anything in my backpack." },
        { es: 'No conozco a nadie aquí. / No vi a nadie ayer.', en: "I don't know anyone here. / I didn't see anyone yesterday." },
        { es: 'Nunca como carne. / No como carne nunca.', en: "I never eat meat." },
        { es: 'No tengo ningún problema con eso.', en: "I don't have any problem with that." },
        { es: '—No me gusta el café. —A mí tampoco.', en: '"I don\'t like coffee." "Me neither."' },
      ],
      commonMistakes: [
        'Don\'t drop the no just because a negative word like nada or nadie already appears after the verb — Tengo nada is wrong; Spanish requires No tengo nada. The double negative is standard, correct Spanish, not a mistake to avoid the way it is in English.',
        'Don\'t forget the personal a before nadie when it\'s a direct object referring to a person: No vi a nadie is correct; No vi nadie is missing the required a.',
        'Watch the shortening: it\'s ningún problema (before a masculine singular noun), not ninguno problema — ninguno only keeps its full form before a feminine noun (ninguna razón) or when it stands alone without a noun right after it (Ninguno vino, "None of them came").',
      ],
    },
  ],

  vocab: [
    { es: 'hablé', en: 'I spoke / talked', example: 'Ayer hablé con mi madre por teléfono.', exampleEn: 'Yesterday I spoke with my mother on the phone.' },
    { es: 'comí', en: 'I ate', example: 'Comí pizza anoche.', exampleEn: 'I ate pizza last night.' },
    { es: 'viví', en: 'I lived', example: 'Viví en México dos años.', exampleEn: 'I lived in Mexico for two years.' },
    { es: 'llegó', en: 'he/she/you (formal) arrived', example: 'El tren llegó tarde.', exampleEn: 'The train arrived late.' },
    { es: 'trabajamos', en: 'we worked', example: 'Trabajamos todo el día ayer.', exampleEn: 'We worked all day yesterday.' },
    { es: 'buscar (yo busqué)', en: 'to look for (I looked for)', example: 'Busqué mis llaves por diez minutos.', exampleEn: 'I looked for my keys for ten minutes.' },
    { es: 'empezar (yo empecé)', en: 'to begin (I began)', example: 'Empecé el trabajo el lunes.', exampleEn: 'I started the job on Monday.' },
    { es: 'ayer', en: 'yesterday', example: 'Ayer fue un día muy largo.', exampleEn: 'Yesterday was a very long day.' },
    { es: 'anoche', en: 'last night', example: 'Anoche no dormí bien.', exampleEn: "Last night I didn't sleep well." },
    { es: 'nada', en: 'nothing / anything', example: 'No dije nada.', exampleEn: "I didn't say anything." },
    { es: 'nadie', en: 'nobody / anyone', example: 'No hay nadie en casa.', exampleEn: "There's nobody home." },
    { es: 'nunca', en: 'never', example: 'Nunca llego tarde.', exampleEn: "I'm never late." },
    { es: 'ninguno / ningún', en: 'none / not any', example: 'No tengo ningún interés en eso.', exampleEn: "I don't have any interest in that." },
    { es: 'tampoco', en: 'neither / not either', example: 'Yo no fui, y ella tampoco.', exampleEn: "I didn't go, and neither did she." },
    { es: 'todavía no', en: 'not yet', example: 'Todavía no comí.', exampleEn: "I haven't eaten yet." },
  ],

  practice: [
    // ── preterite_regular block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Which is the correct yo preterite form of hablar?', word: 'hablé', english: 'I spoke', answer: 'hablé', options: ['hablo', 'hablé', 'hablaba', 'hablas'], concept_id: 'preterite_regular', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Ayer yo ___ (comer) en un restaurante nuevo."', word: 'comer', english: 'to eat', answer: 'comí', concept_id: 'preterite_regular', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "Ellos ___ (vivir) en Perú por cinco años."', word: 'vivir', english: 'to live', answer: 'vivieron', concept_id: 'preterite_regular', difficulty: 2 },
    { type: 'translation_to_spanish', prompt: "Translate: 'We spoke with the doctor yesterday.'", english: 'We spoke with the doctor yesterday.', answer: 'Hablamos con el doctor ayer.', altAnswers: ['Hablamos con el médico ayer.'], word: 'hablamos', concept_id: 'preterite_regular', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Ella escribió una carta"?', word: 'escribió', english: 'she wrote', answer: 'She wrote a letter.', concept_id: 'preterite_regular', difficulty: 1 },
    { type: 'multiple_choice', prompt: 'Which correctly conjugates the yo form of buscar in the preterite?', word: 'busqué', english: 'I looked for', answer: 'busqué', options: ['buscé', 'busqué', 'busco', 'buscaba'], concept_id: 'preterite_regular', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "Yo ___ (llegar) tarde a la fiesta."', word: 'llegar', english: 'to arrive', answer: 'llegué', concept_id: 'preterite_regular', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and fix the error: "Yo empezé la clase a las ocho."', word: 'empecé', english: 'I began', answer: 'Yo empecé la clase a las ocho.', concept_id: 'preterite_regular', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and fix the error: "Ayer yo buscé trabajo todo el día."', word: 'busqué', english: 'I looked for', answer: 'Ayer yo busqué trabajo todo el día.', concept_id: 'preterite_regular', difficulty: 2 },

    // ── negation block (kept separate from preterite_regular; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Which sentence correctly says "I don\'t have anything"?', word: 'no...nada', english: "I don't have anything", answer: 'No tengo nada.', options: ['Tengo nada.', 'No tengo nada.', 'No tengo algo.', 'Nada no tengo.'], concept_id: 'negation', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "___ hay nadie en la oficina." (There is nobody in the office.)', word: 'no', english: 'not', answer: 'No', concept_id: 'negation', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'I never eat meat.' (using the no + verb + negative word pattern)", english: 'I never eat meat.', answer: 'No como carne nunca.', word: 'nunca', concept_id: 'negation', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "No vi a nadie en la calle"?', word: 'nadie', english: 'nobody / anyone', answer: "I didn't see anyone on the street.", concept_id: 'negation', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and fix the error: "Tengo nada en la mochila."', word: 'no...nada', english: "I don't have anything", answer: 'No tengo nada en la mochila.', concept_id: 'negation', difficulty: 2 },
    { type: 'error_correction', prompt: 'Find and fix the error: "No vi nadie en la fiesta."', word: 'a nadie', english: 'anyone (personal a)', answer: 'No vi a nadie en la fiesta.', concept_id: 'negation', difficulty: 3 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict, StudySpanish-
// adjacent grammar sources, and additional established grammar references
// before writing (July 2026):
// - Regular preterite endings: -ar → -é/-aste/-ó/-amos/-asteis/-aron;
//   -er/-ir → -í/-iste/-ió/-imos/-isteis/-ieron (SpanishDict preterite guide).
// - The yo-form written accent (hablé, comió, vivió) marking final-syllable
//   stress and distinguishing preterite from present-tense lookalikes.
// - Yo-form spelling changes are orthographic, not irregular conjugation:
//   -car → -qué (buscar → busqué), -gar → -gué (llegar → llegué),
//   -zar → -cé (empezar → empecé) — confirmed these exist purely to
//   preserve the stem's original consonant sound and are limited to the yo
//   form only, with all other persons fully regular.
// - Basic negation: no placed directly before the conjugated verb (and
//   before object pronouns), no auxiliary "do/does" required.
// - Double negative is grammatically required (not just tolerated) when a
//   negative word (nada, nadie, nunca, ninguno, tampoco) follows the verb;
//   fronting the negative word before the verb (Nadie vino) is a valid but
//   less common/more formal alternative that drops the no.
// - Personal a is required before nadie when it functions as a direct
//   object referring to a person (No vi a nadie).
// - Ninguno shortens to ningún immediately before a masculine singular
//   noun, paralleling uno→un and bueno→buen; ninguna keeps its full form
//   before feminine nouns and when used without a following noun.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// preterite_regular and negation in src/content/grammar.js (same facts,
// fuller beginner-paced walkthrough) and does not contradict them.
