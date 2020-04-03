// import hopeful from "../media/hopeful.jpg";
// import beautiful from "../media/beautiful.jpg";
// import workInProgress from "../media/workinprogress.jpg";
// import calm from "../media/calm.jpg";
// import calm2 from "../media/calm2.jpg";

let list = [

    /*---------- feelings ----------*/

    {
        negative: "bad",
        positive: "pretty good"
    },
    {
        negative: "angry",
        positive: "openminded"
    },
    {
        negative: "mad",
        positive: "openminded"
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
        negative: "depressed",
        positive: `<div class="inline hopeful">hopeful</div>`
    },
    {
        negative: "down",
        positive: '<div class="inline happy">happy</div>'
    },
    {
        negative: "worry",
        positive: `<div class="inline calm">feel calm</div>`
    },
    {
        negative: "worried",
        positive: `<div class="inline calm">calm</div>`
    },
    {
        negative: "anxious",
        positive: "secure"
    },
    {
        negative: "scared",
        positive: "brave"
    },
    {
        negative: "jealous",
        positive: "admiring"
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
        positive: `<div class="inline not-afraid">not afraid</div>`
    },
    {
        negative: "scared",
        positive: "not scared"
    },
    {
        negative: "unsafe",
        positive: "safe"
    },
    {
        negative: "upset",
        positive: "content"
    },
    {
        negative: "unhappy",
        positive: "happy"
    },

    /*---------- descriptors ----------*/

    {
        negative: "negative",
        positive: "positive"
    },
    {
        negative: "ugly",
        positive: '<div class="inline beautiful">beautiful</div>'
    },
    {
        negative: "terrible",
        positive: "amazing"
    },
    {
        negative: "horrible",
        positive: "great"
    },
    {
        negative: "worthless",
        positive: '<div class="inline valuable">valuable</div>'
    },
    {
        negative: "weak",
        positive: "strong"
    },
    {
        negative: "awkward",
        positive: "courageous"
    },
    {
        negative: "failure",
        positive: '<div class="inline work-in-progress">work in progress</div>'
    },
    {
        negative: "fail",
        positive: "overcome"
    },
    {
        negative: "dumb",
        positive: "smart"
    },
    {
        negative: "stupid",
        positive: "intelligent"
    },
    {
        negative: "uncomfortable",
        positive: "comfortable"
    },
    {
        negative: "dirty",
        positive: "comfortable"
    },
    {
        negative: "disgusting",
        positive: "positive"
    },
    {
        negative: "sick",
        positive: "understandable"
    },
    {
        negative: "small",
        positive: "nice"
    },
    {
        negative: "big",
        positive: "great"
    },
    {
        negative: "flat",
        positive: "pleasing"
    },
    {
        negative: "dispensable",
        positive: '<div class="inline valuable">valuable</div>'
    },
    {
        negative: "unworthy",
        positive: "worthy"
    },
    {
        negative: "tiring",
        positive: "refreshing"
    },
    {
        negative: "hard",
        positive: "strengthening"
    },
    {
        negative: "painful",
        positive: "healing"
    },
    {
        negative: "careless",
        positive: "careful"
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
        negative: "over",
        positive: "improved"
    },
    {
        negative: "weird",
        positive: "unique"
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
        negative: "powerless",
        positive: "powerful"
    },
    {
        negative: "dumb",
        positive: "smart"
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
        negative: "hatred",
        positive: "peacefulness"
    },
    {
        negative: "pain",
        positive: `<div class="inline calm2">calm</div>`
    },
    {
        negative: "insecurity",
        positive: '<div class="inline self-esteem">self-esteem</div>'
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
        negative: "die",
        positive: '<div class="inline live">live</div>'
    },
    {
        negative: "waste",
        positive: "good use"
    },
    {
        negative: "fuckup",
        positive: '<div class="inline blessing">blessing</div>'
    },
    {
        negative: "kill",
        secondNegative: "myself",
        positive: '<div class="inline get-better">get better</div>'
    },
    {
        negative: "no",
        secondNegative: "one",
        positive: "many people"
    },


    /*---------- verbs ----------*/

    // {
    //     negative: "lied",
    //     positive: ""
    // },
    {
        negative: "hurt",
        positive: "better"
    },

    /*---------- swears ----------*/

    {
        negative: "fucking",
        positive: ""
    },
    {
        negative: "shit",
        positive: ":)"
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
        negative: "didn't",
        positive: ""
    },
    {
        negative: "don't",
        positive: ""
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
        negative: "must",
        positive: "can"
    },
    {
        negative: "doesn't",
        positive: "does"
    },
    {
        negative: "nothing",
        positive: "not everything"
    },
    {
        negative: "always",
        positive: "sometimes"
    },
    {
        negative: "never",
        positive: ""
    },
    {
        negative: "every",
        positive: "some of the"
    },
    {
        negative: "ever",
        positive: ""
    },
    {
        negative: "anymore",
        positive: ""
    }
]

export default list;
