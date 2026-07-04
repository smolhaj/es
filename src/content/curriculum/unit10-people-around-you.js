// Unit 10 — People & Things Around You (A2)
// Covers: direct_object_pronouns, indirect_object_pronouns
// See ES.md's "Pedagogical principles" for the rules this content follows:
// comprehensible input, explicit instruction, retrieval practice, blocked
// practice before interleaving, multiple modalities, immediate corrective
// feedback, and L1 (English) scaffolding in lesson prose. Every Spanish
// claim below was verified against SpanishDict, StudySpanish.com, and other
// established grammar references before writing — see the audit note at
// the bottom of this file for the specific claims checked.

export default {
  sections: [
    {
      heading: 'Stop Repeating Yourself: Direct Object Pronouns',
      paragraphs: [
        "Imagine answering every question in a conversation by repeating the whole noun back: \"Do you have the book?\" \"Yes, I have the book.\" \"Where did you buy the book?\" \"I bought the book at the store.\" It's exhausting in English, and it's exhausting in Spanish too — which is exactly why Spanish (like English) lets you swap a noun for a pronoun once it's already been mentioned. In English that pronoun is usually \"it,\" \"him,\" \"her,\" or \"them.\" In Spanish, the direct object pronouns are lo, la, los, and las.",
        'A direct object is simply the thing or person directly receiving the action of the verb — the "what" or "who" right after most verbs. In ¿Compraste el pan? (\"Did you buy the bread?\"), el pan is the direct object: it\'s the thing being bought. To answer without repeating it, swap el pan for lo (masculine singular): Sí, lo compré (\"Yes, I bought it\"). If the noun is feminine, use la: ¿Tienes la llave? — Sí, la tengo (\"Do you have the key? — Yes, I have it\"). For plurals, use los (masculine) or las (feminine): ¿Ves los libros? — Sí, los veo (\"Do you see the books? — Yes, I see them\"); Compré las manzanas → Las compré (\"I bought the apples → I bought them\").',
        "Notice the pronoun always matches the gender and number of the noun it replaces — not the gender of whoever is speaking or listening. Lo replaces any masculine singular noun (el pan, el libro, even a whole idea or the neutral \"it\"), la replaces any feminine singular noun, and so on. Also notice something that has no equivalent in English: lo, te, and the others can also stand in for a person. Te quiero (\"I love you\") and Los espero (\"I'll wait for them\") work exactly the same way as swapping in a thing — the direct object pronouns cover both people and objects.",
        "One more thing worth flagging early, because you'll hear it if you spend time with Spanish media from Spain: in parts of Spain, native speakers sometimes use le instead of lo for a masculine person (not a masculine thing) — a well-known regional pattern called leísmo. It's considered standard there, but this course teaches the pan-Hispanic standard (lo for masculine people and things) since that's understood everywhere.",
      ],
      examples: [
        { es: '¿Compraste el pan? — Sí, lo compré.', en: 'Did you buy the bread? — Yes, I bought it.' },
        { es: '¿Tienes la llave? — Sí, la tengo.', en: 'Do you have the key? — Yes, I have it.' },
        { es: '¿Ves los libros? — Sí, los veo.', en: 'Do you see the books? — Yes, I see them.' },
        { es: 'Compré las manzanas. → Las compré.', en: 'I bought the apples. → I bought them.' },
        { es: 'Te quiero.', en: 'I love you.' },
        { es: 'Los espero en la puerta.', en: "I'll wait for them at the door." },
      ],
      commonMistakes: [
        "Don't match the pronoun to the speaker or listener's gender — match it to the noun being replaced. La refers to a feminine noun (la llave, or a female person), never to the speaker.",
        'A common beginner slip is leaving the old noun in the sentence alongside the pronoun, like *Lo compré el pan — once you use the pronoun, the noun it replaces disappears from that clause.',
        "Remember lo/la/los/las can replace people too, not just objects — Spanish doesn't have a separate set of pronouns just for humans the way \"it\" vs. \"him/her\" splits in English.",
      ],
    },
    {
      heading: 'To Whom, For Whom: Indirect Object Pronouns',
      paragraphs: [
        "Now for a different question: not \"what got acted on,\" but \"who benefited, or who received something.\" That's the indirect object, and Spanish marks it with its own small set of pronouns: me, te, le, nos, os, les. If you've already worked through gustar (Me gusta el café, Te gusta el chocolate), you've been using these pronouns all along — me, te, le, nos, os, and les are exactly the same words used for \"the thing that pleases someone.\" This lesson gives that pattern its proper name and extends it beyond gustar to any verb involving giving, telling, writing, or showing something to someone.",
        'Take Le escribí una carta ("I wrote her/him a letter"). Una carta is the direct object (the thing being written), but le tells you who the letter was written to or for — the indirect object. Compare Le doy el libro a María ("I give the book to María"): el libro is what\'s given (direct object), and le marks that María is the recipient (indirect object). Notice Spanish keeps le there even though a María already names who "to" refers to — this double-marking (le … a María) is completely normal and expected in Spanish, not a redundant mistake to avoid.',
        "The indirect object pronouns are me (to/for me), te (to/for you, informal), le (to/for him/her/you formal), nos (to/for us), os (to/for you all, Spain), and les (to/for them/you all). Le and les are a little ambiguous on their own — le podría mean \"to him,\" \"to her,\" or \"to you (usted)\" — which is exactly why Spanish often adds a + [name/pronoun] for clarity or emphasis: Le hablé a ella, no a él (\"I spoke to her, not to him\").",
        "Placement works the same way you've already seen with reflexive and gustar-type pronouns: the pronoun goes right before a conjugated verb (Me escribe cartas — \"She writes me letters\"), and it attaches to the end of an infinitive, a gerund, or an affirmative command (Voy a explicarle el problema or Le voy a explicar el problema — both correct; Explícale, \"Explain to him/her!\"). In a negative sentence, the pronoun sits between the negative word and the verb: No le escribo (\"I don't write to him/her\").",
      ],
      examples: [
        { es: 'Le escribí una carta.', en: 'I wrote her/him a letter.' },
        { es: 'Le doy el libro a María.', en: 'I give the book to María.' },
        { es: '¿Les hablas en español?', en: 'Do you speak to them in Spanish?' },
        { es: 'Me escribe cartas todos los días.', en: 'She writes letters to me every day.' },
        { es: 'Voy a explicarle el problema. / Le voy a explicar el problema.', en: 'I am going to explain the problem to him/her. (both word orders correct)' },
        { es: 'No le escribo mucho.', en: "I don't write to him/her much." },
      ],
      commonMistakes: [
        'Don\'t drop le/les just because a + noun already names the person — Le hablé a Juan is correct Spanish, not a redundant double-up; leaving out le (*Hablé a Juan) sounds incomplete to a native speaker.',
        "Don't confuse le/les with lo/la/los/las — le/les answer \"to/for whom,\" while lo/la/los/las answer \"what/whom did the action directly happen to.\" The same sentence can need both: Le escribí una carta (le = to her; una carta stays a full noun here, not yet replaced).",
        'Remember these are the exact same pronouns you already use with gustar (me gusta, te gusta, le gusta) — if you\'ve got gustar down, you already know half of this lesson.',
      ],
    },
    {
      heading: 'Where Do These Pronouns Go? A Placement Recap',
      paragraphs: [
        "Both families of object pronouns — direct (lo/la/los/las) and indirect (me/te/le/nos/os/les) — follow the exact same placement rules, so it's worth seeing them side by side. Rule one: with a single conjugated verb, the pronoun goes immediately before it. Lo veo (\"I see it/him\"), Le escribo (\"I write to him/her\"). Rule two: in a negative sentence, the negative word comes first, then the pronoun, then the verb: No lo veo (\"I don't see it\"), No le escribo (\"I don't write to him/her\") — the pronoun never jumps in front of no.",
        "Rule three covers infinitives and gerunds (the -ando/-iendo form): you have a genuine choice. Attach the pronoun to the end of the infinitive or gerund, or place it before the first conjugated verb — both are correct and equally common. Quiero verlo and Lo quiero ver both mean \"I want to see it.\" Estoy escribiéndole and Le estoy escribiendo both mean \"I am writing to him/her\" (note the accent mark added when a pronoun attaches to a gerund, to keep the original stress: escribiendo → escribiéndole).",
        'Rule four is the one exception with no flexibility: affirmative commands. There, the pronoun must attach to the end — Cómpralo ("Buy it!"), Escríbele ("Write to him/her!"). But negative commands follow rule two instead, putting the pronoun back in front: No lo compres ("Don\'t buy it"), No le escribas ("Don\'t write to him/her"). Same verb, same idea, opposite pronoun position, depending on whether the command is telling you to do something or not to do it.',
      ],
      examples: [
        { es: 'Lo veo todos los días.', en: 'I see it/him every day.' },
        { es: 'No lo veo hoy.', en: "I don't see it/him today." },
        { es: 'Quiero verlo. / Lo quiero ver.', en: 'I want to see it. (both orders correct)' },
        { es: '¡Cómpralo! / ¡No lo compres!', en: 'Buy it! / Don\'t buy it!' },
        { es: '¡Escríbele! / ¡No le escribas!', en: 'Write to him/her! / Don\'t write to him/her!' },
      ],
      commonMistakes: [
        'A frequent slip is attaching the pronoun to a negative command the way you would an affirmative one — *No cómpralo is wrong; it must be No lo compres.',
        'Don\'t forget the accent mark that often appears when a pronoun attaches to a gerund or a multi-syllable command form (escribiéndole, explícale) — it preserves where the stress falls in the original verb.',
        'With infinitives/gerunds, either placement is correct — there is no "more correct" option between Lo quiero ver and Quiero verlo, so don\'t overthink which one to produce.',
      ],
    },
    {
      heading: 'When Both Show Up Together: se lo, me lo, te la',
      paragraphs: [
        "Sometimes a sentence needs both an indirect object pronoun (who benefits) and a direct object pronoun (what's involved) at once — as in \"I gave it to her.\" Spanish handles this with two rules. First, order: the indirect object pronoun always comes before the direct object pronoun. So \"give it to me\" is me lo, never *lo me. Second, and this is the one exception to memorize on its own: le and les can never sit directly in front of lo, la, los, or las — Spanish doesn't allow le lo, le la, les lo, or les las because they're awkward to say. Whenever that combination would occur, le or les changes to se instead.",
        "Take Le di la carta a ella (\"I gave her the letter\"). Replace la carta with la, and le automatically becomes se: Se la di (\"I gave it to her\") — never *Le la di. Likewise, ¿Le puedes dar el libro? becomes ¿Se lo puedes dar? (\"Can you give it to him?\"). This se has nothing to do with reflexive se or impersonal se you may encounter later — here it's purely a stand-in for le/les to avoid an awkward-sounding pair of pronouns, and context (usually a nearby a + name/pronoun) tells you who se refers to.",
        "This is a preview more than a full mastery point — later units will drill double object pronouns in depth, including how they attach together to infinitives, gerunds, and commands (Dámelo — \"Give it to me!\"). For now, the goal is simply to recognize se lo, me lo, te la, and similar combinations when you see them, and to know the one rule behind them: indirect before direct, and le/les always becomes se in front of lo/la/los/las.",
      ],
      examples: [
        { es: 'Le di la carta a ella. → Se la di.', en: 'I gave her the letter. → I gave it to her.' },
        { es: '¿Me das el libro? → ¿Me lo das?', en: 'Will you give me the book? → Will you give it to me?' },
        { es: '¿Le puedes dar el libro? → ¿Se lo puedes dar?', en: 'Can you give him the book? → Can you give it to him?' },
        { es: 'Nos mandan los resultados. → Nos los mandan.', en: 'They send us the results. → They send them to us.' },
        { es: '¡Dámelo!', en: 'Give it to me!' },
      ],
      commonMistakes: [
        'Never say *le lo, *le la, *les lo, or *les las — it is always se lo, se la, se los, se las, with no exceptions.',
        "Don't reverse the order — the indirect pronoun always comes first: me lo, te la, se los, never *lo me or *la te.",
        "Because se lo can mean \"it to him,\" \"it to her,\" \"it to you (usted),\" or \"it to them,\" native speakers often add a + name/pronoun for clarity: Se lo di a Juan — don't assume context alone always makes se unambiguous.",
      ],
    },
  ],

  vocab: [
    { es: 'lo', en: 'it / him (direct object, masc. sing.)', example: '¿Tienes el pasaporte? — Sí, lo tengo.', exampleEn: 'Do you have the passport? — Yes, I have it.' },
    { es: 'la', en: 'it / her (direct object, fem. sing.)', example: '¿Ves la casa? — Sí, la veo.', exampleEn: 'Do you see the house? — Yes, I see it.' },
    { es: 'los', en: 'them (direct object, masc. plural)', example: 'Compré los boletos. → Los compré.', exampleEn: 'I bought the tickets. → I bought them.' },
    { es: 'las', en: 'them (direct object, fem. plural)', example: '¿Tienes las llaves? — Sí, las tengo.', exampleEn: 'Do you have the keys? — Yes, I have them.' },
    { es: 'me', en: 'me / to me', example: 'Me escribe todos los días.', exampleEn: 'She writes to me every day.' },
    { es: 'te', en: 'you / to you (informal)', example: 'Te quiero mucho.', exampleEn: 'I love you very much.' },
    { es: 'le', en: 'to him / to her / to you (formal)', example: 'Le doy el regalo.', exampleEn: 'I give him/her the gift.' },
    { es: 'nos', en: 'us / to us', example: 'Nos mandan un mensaje.', exampleEn: 'They send us a message.' },
    { es: 'les', en: 'to them / to you all', example: '¿Les hablas en español?', exampleEn: 'Do you speak to them in Spanish?' },
    { es: 'se lo / se la', en: 'it to him/her/you/them (double pronoun)', example: 'Se lo di ayer.', exampleEn: 'I gave it to him/her yesterday.' },
    { es: 'dar', en: 'to give', example: 'Voy a darle el regalo.', exampleEn: "I'm going to give him/her the gift." },
    { es: 'escribir', en: 'to write', example: 'Le escribo un mensaje.', exampleEn: "I'm writing him/her a message." },
    { es: 'mandar', en: 'to send', example: 'Nos mandan los resultados.', exampleEn: 'They send us the results.' },
    { es: 'explicar', en: 'to explain', example: 'Le voy a explicar el problema.', exampleEn: 'I am going to explain the problem to him/her.' },
    { es: 'la carta', en: 'the letter', example: 'Le escribí una carta.', exampleEn: 'I wrote her/him a letter.' },
  ],

  practice: [
    // ── direct_object_pronouns block (blocked practice: new-concept drill in isolation before interleaving elsewhere) ──
    { type: 'multiple_choice', prompt: 'Choose the correct pronoun: "¿Compraste el pan? — Sí, ___ compré."', word: 'lo', english: 'it (masc. sing.)', answer: 'lo', options: ['lo', 'la', 'los', 'las'], concept_id: 'direct_object_pronouns', difficulty: 1 },
    { type: 'fill_blank', prompt: 'Complete: "¿Tienes la llave? — Sí, ___ tengo." (it, fem. sing.)', word: 'la', english: 'it (fem. sing.)', answer: 'la', concept_id: 'direct_object_pronouns', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate, replacing 'the books' with a pronoun: 'I see them.' (referring to los libros)", english: 'I see them.', answer: 'Los veo.', word: 'los', concept_id: 'direct_object_pronouns', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Las compré ayer"?', word: 'las', english: 'I bought them yesterday', answer: 'I bought them yesterday', concept_id: 'direct_object_pronouns', difficulty: 1 },
    { type: 'error_correction', prompt: 'Fix the error: "Lo compré el pan."', word: 'lo', english: 'I bought it', answer: 'Lo compré.', concept_id: 'direct_object_pronouns', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which sentence correctly says "I love you" using a direct object pronoun?', word: 'te', english: 'you (informal)', answer: 'Te quiero.', options: ['Te quiero.', 'Le quiero.', 'Lo quiero tú.', 'Quiero te.'], concept_id: 'direct_object_pronouns', difficulty: 1 },

    // ── indirect_object_pronouns block (kept separate from direct_object_pronouns; blocked before mixed review) ──
    { type: 'multiple_choice', prompt: 'Choose the correct pronoun: "___ escribí una carta a mi abuela." (to her)', word: 'le', english: 'to her', answer: 'Le', options: ['La', 'Le', 'Lo', 'Les'], concept_id: 'indirect_object_pronouns', difficulty: 2 },
    { type: 'fill_blank', prompt: 'Complete: "___ escribe cartas todos los días." (to me)', word: 'me', english: 'to me', answer: 'Me', concept_id: 'indirect_object_pronouns', difficulty: 1 },
    { type: 'translation_to_spanish', prompt: "Translate: 'Do you speak to them in Spanish?'", english: 'Do you speak to them in Spanish?', answer: '¿Les hablas en español?', word: 'les', concept_id: 'indirect_object_pronouns', difficulty: 2 },
    { type: 'translation_to_english', prompt: '¿Qué significa "Le doy el libro a María"?', word: 'le', english: 'I give the book to María', answer: 'I give the book to María (le = to her)', concept_id: 'indirect_object_pronouns', difficulty: 2 },
    { type: 'error_correction', prompt: 'Fix the error: "No escribo le mucho." (I don\'t write to him/her much)', word: 'le', english: "I don't write to him/her much", answer: 'No le escribo mucho.', concept_id: 'indirect_object_pronouns', difficulty: 2 },
    { type: 'multiple_choice', prompt: 'Which pronoun connects to the gustar pattern you already know (Me gusta el café)?', word: 'me', english: 'to me', answer: 'me', options: ['me', 'mí', 'yo', 'mío'], concept_id: 'indirect_object_pronouns', difficulty: 1 },

    // ── mixed practice: both concepts together, including the double-pronoun preview ──
    { type: 'multiple_choice', prompt: 'Which is correct? "I gave her the letter → I gave it to her."', word: 'se la', english: 'it to her', answer: 'Se la di.', options: ['Se la di.', 'Le la di.', 'La le di.', 'Se lo di.'], concept_id: 'indirect_object_pronouns', difficulty: 3 },
    { type: 'fill_blank', prompt: 'Complete the affirmative command: "___ (Write to him/her!)" using escribir + le', word: 'escríbele', english: 'Write to him/her!', answer: 'Escríbele', concept_id: 'indirect_object_pronouns', difficulty: 2 },
  ],
};

// ── Accuracy audit note ──────────────────────────────────────────────────
// Claims cross-verified via WebSearch against SpanishDict ("Direct Object
// Pronoun Placement," "Indirect Object Pronouns" guides), StudySpanish.com
// ("Indirect Object Pronouns: Part I/II," "Using Object Pronouns with
// Commands"), and additional grammar references (Kwiziq, Migaku, Lawless
// Spanish) before writing (July 2026):
// - Direct object pronouns (lo/la/los/las) agree in gender/number with the
//   noun replaced, and can refer to people or things.
// - Indirect object pronouns (me/te/le/nos/os/les) mark to/for whom, and
//   are the same set already used with gustar-type verbs.
// - Placement: before a single conjugated verb; between negation word and
//   verb in negative sentences; either attached to infinitive/gerund or
//   placed before the first conjugated verb when both are present (free
//   variation); must attach to affirmative commands but precede the verb
//   in negative commands.
// - Double marking (le ... a + noun) is standard/expected, not redundant.
// - Double object pronouns: indirect always precedes direct (me lo, te la);
//   le/les obligatorily become se before lo/la/los/las (le lo -> se lo),
//   confirmed as a phonotactic/euphonic rule, not a meaning change; noted
//   this is a preview only, full double-pronoun mechanics deferred to the
//   existing object_pronoun_order (B1) concept.
// - Leísmo (le for masculine human direct object in parts of Spain) noted
//   as a regional exception, consistent with the existing grammar.js entry
//   for direct_object_pronouns, without teaching it as the default form.
// This content is complementary to the existing GRAMMAR_CARDS entries for
// direct_object_pronouns and indirect_object_pronouns in src/content/
// grammar.js (same facts, fuller beginner-paced walkthrough) and does not
// contradict them. It also cross-references gustar_type (Unit 9) to reuse
// already-taught me/te/le/nos/os/les rather than presenting them as new.
