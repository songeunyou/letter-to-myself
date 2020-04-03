import hopeful from "../media/hopeful.jpg";
import beautiful from "../media/beautiful.jpg";
import workInProgress from "../media/workinprogress.jpg";
import calm from "../media/calm.jpg";
import calm2 from "../media/calm2.jpg";

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
        negative: "insecure",
        positive: '<div class="inline confident"><p>confident</p></div>'
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
        positive: `<div class="inline hopeful"><p>hopeful</p><img src=${hopeful}/></div>`
    },
    {
        negative: "down",
        positive: '<div class="inline happy">happy</div>'
    },
    {
        negative: "worry",
        positive: `<div class="inline calm"><p>feel calm</p><img src=${calm}/></div>`
    },
    {
        negative: "worried",
        positive: `<div class="inline calm"><p>calm</p><img src=${calm}/></div>`
    },
    {
        negative: "anxious",
        positive: "grounded"
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
        positive: `<div class="inline calm"><p>calm</p><img src=${calm}/></div>`
    },
    {
        negative: "afraid",
        positive: "not afraid"
    },
    {
        negative: "scared",
        positive: "not scared"
    },
    {
        negative: "unsafe",
        positive: "safe"
    },

    /*---------- descriptors ----------*/

    {
        negative: "negative",
        positive: "positive"
    },
    {
        negative: "ugly",
        positive: `<div class="inline beautiful"><p>beautiful</p><img src=${beautiful}/></div>`
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
        positive: `<div class="inline work-in-progress"><p>work in progress</p><img src=${workInProgress}/></div>`
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
        negative: "everything",
        positive: "some things"
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
        negative: "give",
        secondNegative: "up",
        positive: "persevere"
    },

    /*---------- words ----------*/

    {
        negative: "trigger",
        positive: "source of strength"
    },
    {
        negative: "triggers",
        positive: "sources of strength"
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
        positive: `<div class="inline calm2"><p>calm</p><img src=${calm2}/></div>`
    },
    {
        negative: "insecurity",
        positive: '<div class="inline self-esteem">self-esteem</div>'
    },
    {
        negative: "anxiety",
        positive: '<div class="inline confidence"><p>confidence</p></div>'
    },
    {
        negative: "anxieties",
        positive: "feelings"
    },
    {
        negative: "die",
        positive: "live"
    },
    {
        negative: "waste",
        positive: "good use"
    },
    {
        negative: "fuckup",
        positive: "blessing"
    },
    {
        negative: "kill",
        secondNegative: "myself",
        positive: "get better"
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
