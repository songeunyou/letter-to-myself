// import hopeful from "../media/hopeful.jpg";
// import beautiful from "../media/beautiful.jpg";
// import workInProgress from "../media/workinprogress.jpg";
// import calm from "../media/calm.jpg";
// import calm2 from "../media/calm2.jpg";

let list = [

    /*---------- feelings ----------*/

    {
        negative: "bad",
        positive: '<div class="inline good">good</div>'
    },
    {
        negative: "angry",
        positive: '<div class="inline openminded">openminded</div>'
    },
    {
        negative: "mad",
        positive: '<div class="inline openminded">openminded</div>'
    },
    {
        negative: "enraged",
        positive: '<div class="inline openminded">thoughtful</div>'
    },
    {
        negative: "insecure",
        positive: '<div class="inline confident">confident</div>'
    },
    {
        negative: "hate",
        positive: '<div class="inline love">love</div>'
    },
    {
        negative: "hates",
        positive: '<div class="inline love">loves</div>'
    },
    {
        negative: "hated",
        positive: '<div class="inline love">loved</div>'
    },
    {
        negative: "hateful",
        positive: '<div class="inline love">loving</div>'
    },
    {
        negative: "hating",
        positive: '<div class="inline love">loving</div>'
    },
    {
        negative: "dislike",
        positive: "like"
    },
    {
        negative: "despise",
        positive: "appreciate"
    },
    {
        negative: "sad",
        positive: '<div class="inline happy">happy</div>'
    },
    {
        negative: "miserable",
        positive: '<div class="inline happy">happy</div>'
    },
    {
        negative: "depressed",
        positive: '<div class="inline hopeful">hopeful</div>'
    },
    {
        negative: "worry",
        positive: '<div class="inline calm">feel calm</div>'
    },
    {
        negative: "worried",
        positive: '<div class="inline calm">calm</div>'
    },
    {
        negative: "anxious",
        positive: '<div class="inline secure">secure</div>'
    },
    {
        negative: "scared",
        positive: '<div class="inline confident">confident</div>'
    },
    {
        negative: "terrifying",
        positive: '<div class="inline exhilarating">exhilarating</div>'
    },
    {
        negative: "jealous",
        positive: '<div class="inline admiring">admiring</div>'
    },
    {
        negative: "resentful",
        positive: "forgiving"
    },
    {
        negative: "annoyed",
        positive: `<div class="inline calm">calm</div>`
    },
    {
        negative: "afraid",
        positive: '<div class="inline not-afraid">not afraid</div>'
    },
    {
        negative: "unsafe",
        positive: "safe"
    },
    {
        negative: "lonely",
        positive: '<div class="inline self-sufficient">self-sufficient</div>'
    },
    {
        negative: "alienated",
        positive: '<div class="inline accepted">accepted</div>'
    },
    {
        negative: "upset",
        positive: '<div class="inline happy">content</div>'
    },
    {
        negative: "unhappy",
        positive: '<div class="inline happy">happy</div>'
    },

    /*---------- descriptors ----------*/

    {
        negative: "negative",
        positive: '<div class="inline positive">positive</div>'
    },
    {
        negative: "worse",
        positive: '<div class="inline better">better</div>'
    },
    {
        negative: "low",
        positive: "high"
    },
    {
        negative: "ugly",
        positive: '<div class="inline beautiful">beautiful</div>'
    },
    {
        negative: "hideous",
        positive: '<div class="inline gorgeous">gorgeous</div>'
    },
    {
        negative: "terrible",
        positive: "amazing"
    },
    {
        negative: "horrible",
        positive: '<div class="inline great">great</div>'
    },
    {
        negative: "worthless",
        positive: '<div class="inline valuable">valuable</div>'
    },
    {
        negative: "suck",
        positive: "rock"
    },
    {
        negative: "empty",
        positive: '<div class="inline valuable">meaningful</div>'
    },
    {
        negative: "useless",
        positive: '<div class="inline valuable">important</div>'
    },
    {
        negative: "unimportant",
        positive: '<div class="inline important">important</div>'
    },
    {
        negative: "invisible",
        positive: '<div class="inline valuable">invaluable</div>'
    },
    {
        negative: "weak",
        positive: '<div class="inline strong">strong</div>'
    },
    {
        negative: "pathetic",
        positive: '<div class="inline courageous">willing to improve</div>'
    },
    {
        negative: "awkward",
        positive: '<div class="inline courageous">courageous</div>'
    },
    {
        negative: "boring",
        positive: '<div class="inline interesting">engaging</div>'
    },
    {
        negative: "uninteresting",
        positive: '<div class="inline interesting">interesting</div>'
    },
    {
        negative: "failure",
        positive: '<div class="inline work-in-progress">work in progress</div>'
    },
    {
        negative: "fail",
        positive: '<div class="inline overcome">overcome</div>'
    },
    {
        negative: "failed",
        positive: '<div class="inline overcome">overcome</div>'
    },
    {
        negative: "dumb",
        positive: "thoughtful"
    },
    {
        negative: "stupid",
        positive: "reasonable"
    },
    {
        negative: "unfortunate",
        positive: "fortunate"
    },
    {
        negative: "uncomfortable",
        positive: '<div class="inline comfortable">comfortable</div>'
    },
    {
        negative: "dirty",
        positive: '<div class="inline comfortable">comfortable</div>'
    },
    {
        negative: "disgusting",
        positive: '<div class="inline appealing">likeable</div>'
    },
    {
        negative: "revolting",
        positive: '<div class="inline appealing">appealing</div>'
    },
    {
        negative: "disgust",
        positive: "delight"
    },
    {
        negative: "disgusted",
        positive: "delighted"
    },
    {
        negative: "gross",
        positive: '<div class="inline confident">confident</div>'
    },
    {
        negative: "sick",
        positive: "understandable"
    },
    {
        negative: "unattractive",
        positive: '<div class="inline attractive">attractive</div>'
    },
    {
        negative: "small",
        positive: "nice"
    },
    {
        negative: "little",
        positive: "nice"
    },
    {
        negative: "big",
        positive: '<div class="inline great">great</div>'
    },
    {
        negative: "flat",
        positive: "pleasing"
    },
    {
        negative: "evil",
        positive: '<div class="inline good">good</div>'
    },
    {
        negative: "dispensable",
        positive: '<div class="inline valuable">valuable</div>'
    },
    {
        negative: "unworthy",
        positive: '<div class="inline worthy">worthy</div>'
    },
    {
        negative: "tiring",
        positive: '<div class="inline refreshing">refreshing</div>'
    },
    {
        negative: "hard",
        positive: '<div class="inline motivating">motivating</div>'
    },
    {
        negative: "tough",
        positive: '<div class="inline motivating">motivating</div>'
    },
    {
        negative: "painful",
        positive: "healing"
    },
    {
        negative: "inferior",
        positive: "equal"
    },
    {
        negative: "inferiority",
        positive: "equality"
    },
    {
        negative: "awful",
        positive: '<div class="inline incredible">incredible</div>'
    },
    {
        negative: "uncool",
        positive: '<div class="inline cool">cool</div>'
    },
    {
        negative: "careless",
        positive: "careful"
    },
    {
        negative: "stressful",
        positive: '<div class="inline calm">calming</div>'
    },
    {
        negative: "overwhelmed",
        positive: '<div class="inline strong">strong</div>'
    },
    {
        negative: "unfair",
        positive: "understandable"
    },
    {
        negative: "disrespectful",
        positive: "respectful"
    },
    {
        negative: "weird",
        positive: '<div class="inline unique">unique</div>'
    },
    {
        negative: "weirdo",
        positive: '<div class="inline unique">unique person</div>'
    },
    {
        negative: "strange",
        positive: '<div class="inline distinctive">distinctive</div>'
    },
    {
        negative: "undesirable",
        positive: '<div class="inline desirable">desirable</div>'
    },
    {
        negative: "unwanted",
        positive: '<div class="inline wanted">wanted</div>'
    },
    {
        negative: "arrogant",
        positive: "humble"
    },
    {
        negative: "isolated",
        positive: '<div class="inline comforted">comforted</div>'
    },
    {
        negative: "bitter",
        positive: '<div class="inline grateful">grateful</div>'
    },
    {
        negative: "jaded",
        positive: '<div class="inline grateful">grateful</div>'
    },
    {
        negative: "retarded",
        positive: "smart"
    },
    {
        negative: "fake",
        positive: '<div class="inline genuine">genuine</div>'
    },
    {
        negative: "selfish",
        positive: "considerate"
    },
    {
        negative: "inadequate",
        positive: '<div class="inline good-enough">good enough</div>'
    },
    {
        negative: "flawed",
        positive: "remarkable"
    },
    {
        negative: "impossible",
        positive: '<div class="inline possible">possible</div>'
    },
    {
        negative: "worst",
        positive: "best"
    },
    {
        negative: "distant",
        positive: "close"
    },
    {
        negative: "trash",
        positive: "lovely"
    },
    {
        negative: "broken",
        positive: '<div class="inline flawless">flawless</div>'
    },
    {
        negative: "unflattering",
        positive: "flattering"
    },
    {
        negative: "unacceptable",
        positive: "acceptable"
    },
    {
        negative: "powerless",
        positive: "powerful"
    },
    {
        negative: "tired",
        positive: "excited"
    },
    {
        negative: "narcissistic",
        positive: "selfless"
    },
    {
        negative: "uncaring",
        positive: '<div class="inline caring">caring</div>'
    },
    {
        negative: "cruel",
        positive: '<div class="inline caring">caring</div>'
    },
    {
        negative: "dumb",
        positive: "smart"
    },
    {
        negative: "wrong",
        positive: "right"
    },
    {
        negative: "annoying",
        positive: '<div class="inline interesting">interesting</div>'
    },
    {
        negative: "problem",
        positive: "resolution"
    },
    {
        negative: "end",
        positive: "improve"
    },
    {
        negative: "give",
        secondNegative: "up",
        positive: '<div class="inline persevere">persevere</div>'
    },

    /*---------- words ----------*/

    {
        negative: "trigger",
        positive: '<div class="inline source-of-strength">source of strength</div>'
    },
    {
        negative: "triggers",
        positive: '<div class="inline source-of-strength">source of strength</div>'
    },
    {
        negative: "anger",
        positive: "reflection"
    },
    {
        negative: "threat",
        positive: "harmless thing"
    },
    {
        negative: "killing",
        positive: '<div class="inline improving">improving</div>'
    },
    {
        negative: "hatred",
        positive: "love"
    },
    {
        negative: "pain",
        positive: `<div class="inline calm2">calm</div>`
    },
    {
        negative: "addiction",
        positive: "preference"
    },
    {
        negative: "insecurity",
        positive: '<div class="inline self-esteem">self-esteem</div>'
    },
    {
        negative: "doubt",
        positive: "believe"
    },
    {
        negative: "unbearable",
        positive: '<div class="inline great">great</div>'
    },
    {
        negative: "anxiety",
        positive: '<div class="inline confident">confidence</div>'
    },
    {
        negative: "anxieties",
        positive: "feelings"
    },
    {
        negative: "fear",
        positive: '<div class="inline confident">confidence</div>'
    },
    {
        negative: "die",
        positive: '<div class="inline live">live</div>'
    },
    {
        negative: "dead",
        positive: '<div class="inline live">alive</div>'
    },
    {
        negative: "waste",
        positive: "good use"
    },
    {
        negative: "burden",
        positive: '<div class="inline great-person">valuable person</div>'
    },
    {
        negative: "fuckup",
        positive: '<div class="inline great-person">capable person</div>'
    },
    {
        negative: "loser",
        positive: '<div class="inline great-person">great person</div>'
    },
    {
        negative: "asshole",
        positive: '<div class="inline great-person">amazing person</div>'
    },
    {
        negative: "jackass",
        positive: '<div class="inline great-person">great person</div>'
    },
    {
        negative: "breakdown",
        positive: '<div class="inline re-adjustment">re-adjustment</div>'
    },
    {
        negative: "kill",
        secondNegative: "myself",
        positive: '<div class="inline get-better">get better</div>'
    },
    {
        negative: "kill",
        secondNegative: "yourself",
        positive: '<div class="inline get-better">get better</div>'
    },
    {
        negative: "no",
        secondNegative: "one",
        positive: "many people"
    },
    {
        negative: "nobody",
        positive: "many people"
    },
    {
        negative: "freak",
        positive: "person"
    },
    {
        negative: "flaws",
        positive: "quirks"
    },
    {
        negative: "lies",
        positive: "honesty"
    },
    {
        negative: "resentment",
        positive: '<div class="inline accept">acceptance</div>'
    },
    {
        negative: "flashback",
        positive: "memory"
    },
    {
        negative: "flashbacks",
        positive: "memories"
    },
    {
        negative: "trauma",
        positive: "memory"
    },
    {
        negative: "traumas",
        positive: "memories"
    },
    {
        negative: "nightmare",
        positive: "dream"
    },
    {
        negative: "nightmares",
        positive: "dreams"
    },
    {
        negative: "shame",
        positive: '<div class="inline courageous">courage</div>'
    },
    {
        negative: "rejection",
        positive: '<div class="inline accept">acceptance</div>'
    },
    {
        negative: "depression",
        positive: '<div class="inline mindfulness">mindfulness</div>'
    },
    {
        negative: "jerk",
        positive: "great person"
    },
    {
        negative: "jerks",
        positive: "great people"
    },
    {
        negative: "conscious",
        positive: '<div class="inline confident">confident</div>'
    },
    {
        negative: "disappointment",
        positive: '<div class="inline blessing">blessing</div>'
    },
    {
        negative: "suicide",
        positive: "getting help"
    },
    {
        negative: "my",
        secondNegative: "fault",
        positive: "in my control"
    },


    /*---------- verbs ----------*/

    {
        negative: "lie",
        positive: "be honest"
    },
    {
        negative: "lied",
        positive: "confided"
    },
    {
        negative: "hurt",
        positive: '<div class="inline strong">much stronger</div>'
    },
    {
        negative: "hurts",
        positive: "gives strength to me"
    },
    {
        negative: "hurting",
        positive: '<div class="inline improving">improving</div>'
    },
    {
        negative: "harm",
        positive: '<div class="inline improving">improvement</div>'
    },
    {
        negative: "cry",
        positive: "reflect"
    },
    {
        negative: "crying",
        positive: "reflecting"
    },
    {
        negative: "dismiss",
        positive: "consider"
    },
    {
        negative: "dismissed",
        positive: "considered"
    },
    {
        negative: "mock",
        positive: "compliment"
    },
    {
        negative: "damaging",
        positive: '<div class="inline strengthening">strengthening</div>'
    },
    {
        negative: "ruining",
        positive: '<div class="inline strengthening">strengthening</div>'
    },
    {
        negative: "damaged",
        positive: '<div class="inline strengthening">strengthened</div>'
    },
    {
        negative: "ruined",
        positive: '<div class="inline strengthening">strengthened</div>'
    },
    {
        negative: "eroded",
        positive: '<div class="inline strengthening">strengthened</div>'
    },
    {
        negative: "lack",
        secondNegative: "of",
        positive: ""
    },
    {
        negative: "lack",
        positive: '<div class="inline have">have</div>'
    },
    {
        negative: "lacking",
        positive: '<div class="inline have">having</div>'
    },
    {
        negative: "keeps",
        positive: "encourages"
    },
    {
        negative: "wasted",
        positive: "made use of"
    },
    {
        negative: "killed",
        positive: "improved"
    },
    {
        negative: "cheat",
        secondNegative: "on",
        positive: '<div class="inline commit">commit to</div>'
    },
    {
        negative: "cheat",
        positive: '<div class="inline commit">love me</div>'
    },
    {
        negative: "pretend",
        positive: "want"
    },
    {
        negative: "pretends",
        positive: "wants"
    },
    {
        negative: "avoid",
        positive: '<div class="inline accept">accept</div>'
    },
    {
        negative: "suffer",
        positive: '<div class="inline get-better">get better</div>'
    },
    {
        negative: "judge",
        positive: '<div class="inline accept">accept</div>'
    },
    {
        negative: "judged",
        positive: '<div class="inline accept">accepted</div>'
    },
    {
        negative: "struggle",
        positive: '<div class="inline persevere">persevere</div>'
    },
    {
        negative: "struggled",
        positive: '<div class="inline persevere">persevered</div>'
    },

    /*---------- swears ----------*/

    {
        negative: "fucking",
        positive: ""
    },
    // {
    //     negative: "fuck",
    //     positive: ""
    // },
    {
        negative: "fucked",
        secondNegative: "up",
        positive: "constructive"
    },
    {
        negative: "shit",
        positive: '<div class="inline happy">happiness</div>'
    },
    {
        negative: "shitty",
        positive: '<div class="inline great">great</div>'
    },
    {
        negative: "shittiest",
        positive: '<div class="inline great">greatest</div>'
    },

    /*---------- negations ----------*/

    {
        negative: "not",
        positive: ""
    },
    {
        negative: "no",
        positive: ""
    },
    {
        negative: "isn't",
        positive: "is"
    },
    {
        negative: "didn't",
        positive: "did"
    },
    {
        negative: "didnt",
        positive: "did"
    },
    {
        negative: "don't",
        positive: ""
    },
    {
        negative: "dont",
        positive: ""
    },
    {
        negative: "haven't",
        positive: "have"
    },
    {
        negative: "havent",
        positive: "have"
    },
    {
        negative: "won't",
        positive: "will"
    },
    {
        negative: "just",
        positive: ""
    },
    {
        negative: "aren't",
        positive: "are"
    },
    {
        negative: "can't",
        positive: "can"
    },
    {
        negative: "cant",
        positive: "can"
    },
    {
        negative: "must",
        positive: "can"
    },
    {
        negative: "wasn't",
        positive: "was"
    },
    {
        negative: "doesn't",
        positive: "does"
    },
    {
        negative: "wouldn't",
        positive: "would"
    },
    {
        negative: "nothing",
        positive: "not everything"
    },
    {
        negative: "better",
        positive: "different"
    },
    {
        negative: "always",
        positive: "sometimes"
    },
    {
        negative: "none",
        positive: "some"
    },
    {
        negative: "any",
        positive: "some"
    },
    {
        negative: "but",
        positive: "and"
    },
    {
        negative: "never",
        positive: ""
    },
    {
        negative: "yet",
        positive: ""
    },
    {
        negative: "ever",
        positive: ""
    },
    {
        negative: "anymore",
        positive: ""
    },
]

export default list;
