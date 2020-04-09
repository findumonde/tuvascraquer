import { IQuestion, Slug } from "src/types"

const questions: Record<Slug, IQuestion> = {
  place: {
    theme: "red",
    label: "What can you see from your window?",
    next: "house",
    choices: [
      {
        label: "Buildings, I'm in the city",
        points: -2,
      },
      {
        label: "Sheep, I'm in the country",
        points: 4,
      },
      {
        label: "The sea, I'm on the coast",
        points: 4,
      },
      {
        label: "Zombies, I live in New York",
        localized: {
          "en-GB,en-IE,en-IN": "The racecourse, I'm in Cheltenham",
        },
        points: -3,
      },
      {
        label: "I don't have a window",
        points: -5,
      },
    ],
  },
  house: {
    theme: "orange",
    label: "Where are you on lockdown?",
    next: "outside1",
    choices: [
      {
        label: "In a house",
        points: 4,
      },
      {
        label: "In an apartment",
        localized: {
          "en-GB,en-IE,en-IN": "In a flat",
        },
        points: 1,
      },
      {
        label: "In a caravan",
        points: 1,
      },
      {
        label: "On a ship. A cruise ship",
        points: -3,
      },
      {
        label: "In a bunker",
        points: -2,
      },
      {
        label: "Up your ass",
        points: -3,
      },
    ],
  },
  outside1: {
    theme: "pink",
    label: "Do you have access to any outdoor spaces?",
    localized: {
      "en-GB,en-IE,en-IN": "Do you have access to outside space?",
    },
    choices: [
      {
        label: "Yes",
        next: "outside2",
      },
      {
        label: "No",
        points: -3,
        next: "appliances",
      },
    ],
  },
  outside2: {
    theme: "pink",
    label: "Well look at you, you lucky bastard! What type of outdoor space?",
    localized: {
      "en-GB,en-IE,en-IN": "Lucky bastard! What spaces exactly?",
    },
    multiple: true,
    next: "appliances",
    choices: [
      {
        label: "A garden",
        points: 3,
      },
      {
        label: "A football field",
        localized: {
          "en-GB,en-IE,en-IN": "A croquet lawn",
        },
        points: 4,
      },
      {
        label: "A balcony",
        points: 1,
      },
      {
        label: "A vegetable patch",
        localized: {
          "en-GB,en-IE,en-IN": "A kitchen garden",
        },
        points: 6,
      },
      {
        label: "A swimming pool, but I don't know how to swim",
        points: 1,
      },
      {
        label: "Your mum",
        points: -2,
      },
    ],
  },
  appliances: {
    theme: "green",
    label: "Your home is equipped with",
    localized: {
      "en-GB,en-IE,en-IN": "Your dwelling is equipped with",
    },
    multiple: true,
    next: "before",
    choices: [
      {
        label: "Multiple windows",
        points: 0,
      },
      {
        label: "A fridge",
        points: 2,
      },
      {
        label: "A washing machine",
        points: 2,
      },
      {
        label: "An exercise bike",
        points: 1,
      },
      {
        label: "An internet connection",
        points: 3,
      },
      {
        label: "A vibrator",
        points: 2,
      },
    ],
  },
  before: {
    theme: "purple",
    label: "Before the lockdown…",
    multiple: true,
    next: "situation",
    choices: [
      {
        label: "I played sport a few times a week",
        points: -3,
      },
      {
        label: "I had a sex life",
        points: -1,
      },
      {
        label: "I had never cooked pasta",
        points: -2,
      },
      {
        label: "I made out with an Italian who'd just come back from their gap year in China",
        points: -3,
      },
      {
        label: "What lockdown?",
        points: 3,
      },
      {
        label: "None of the above",
        points: 3,
        unique: true,
      },
    ],
  },
  situation: {
    theme: "red",
    label: "What is your current status?",
    multiple: true,
    next: "people",
    choices: [
      {
        label: "I'm a student, trying to explain Discord to my teachers",
        points: 1,
      },
      {
        label: "I'm looking after my kids, and my therapist is looking after me",
        points: -3,
      },
      {
        label: "Working from home, at least that's what my boss thinks",
        points: 2,
      },
      {
        label: "Unemployed at last! What day is it?",
        points: -1,
      },
      {
        label: "I'm a key worker… I'm screwed",
        points: -2,
      },
      {
        label:
          "You see, in this world, there is two kinds of people, my friend: those with loaded guns and those who dig.",
        localized: {
          "en-GB,en-IE,en-IN":
            "You know, I always say that where hope grows, miracles blossom. By unfolding, we heal. We need to open our souls to the majesty of the universe's mysteries",
        },
        points: 3,
      },
    ],
  },
  people: {
    theme: "orange",
    label: "Are you in lockdown alone?",
    choices: [
      {
        label: "Yes",
        next: "alone",
      },
      {
        label: "No",
        next: "peopleYes",
      },
    ],
  },
  alone: {
    theme: "orange",
    label: "Are you a major geek?",
    next: "days",
    choices: [
      {
        label: "Yes",
        points: 5,
      },
      {
        label: "No",
      },
    ],
  },
  peopleYes: {
    theme: "orange",
    label: "Who else is in your home?",
    multiple: true,
    next: "celebrities",
    choices: [
      {
        label: "My partner",
        points: 2,
      },
      {
        label: "One or several childr%&#$qeorzbyqezpr",
        points: -5,
      },
      {
        label: "My mother in law",
        points: -4,
      },
      {
        label: "My mother in law… but I'm sleeping with her",
        points: 2,
      },
      {
        label: "My parents",
        points: -3,
      },
      {
        label: "My housemates",
        localized: {
          "en-GB,en-IE,en-IN": "My flatmates",
        },
        points: 2,
      },
      {
        label: "Your brother",
        points: 2,
      },
      {
        label: "My cat or dog (or donkey)",
        points: 2,
      },
      {
        label: "My dead grand parents… saving the economy",
        localized: {
          "en-GB,en-IE,en-IN": "My tapeworm",
        },
        points: -2,
      },
    ],
  },
  celebrities: {
    theme: "orange",
    label: "Among those people, you have…",
    multiple: true,
    next: "days",
    choices: [
      {
        label: "A cook",
        points: 3,
      },
      {
        label: "Bear Grylls",
        points: 4,
      },
      {
        label: "Another lame 'Imagine' singer",
        localized: {
          "en-GB,en-IE,en-IN": "Chris Whitty (pre-infection)",
        },
        points: -2,
      },
      {
        label: "A Covid-19 carrier",
        points: -4,
      },
      {
        label: "None of the above",
      },
    ],
  },
  days: {
    theme: "pink",
    label: "Let's get back to the important things… How are you spending your time?",
    multiple: true,
    next: "drink",
    choices: [
      {
        label: "I'm doing this stupid quiz",
        points: 1,
      },
      {
        label: "I'm working on my Texas Hold'em tactics",
        localized: {
          "en-GB,en-IE,en-IN": "I'm working on my Whist tactics and fine-tuning my strategies for Risk",
        },
        points: 3,
      },
      {
        label: "I'm trying to have a video chat with my parents nostrils",
        points: 1,
      },
      {
        label: "Cook, eat, weight myself in the morning, cry, repeat",
        points: 2,
      },
      {
        label: "Netflix, Pornhub, repeat",
        points: 1,
      },
      {
        label:
          "I'm learning Japanese, perfecting my yoga poses, painting the bathroom, reading the classics… Yeah I'm boring as hell",
        points: 3,
      },
      {
        label: "Have you ever noticed that toilet water flushes anti-clockwise?",
        points: -1,
      },
      {
        label: "I'm touching myself watching reruns of Megan Rapinoe playing soccer",
        localized: {
          "en-GB,en-IE,en-IN": "I'm touching myself watching reruns of Megan Rapinoe playing football",
        },
        points: 2,
      },
      {
        label: "I'm finishing Tetris",
        points: 2,
      },
      {
        label: "Nothing. I'm doing absolutely nothing.",
        points: -3,
        unique: true,
      },
    ],
  },
  drink: {
    theme: "green",
    label: "Time to have a drink. You have…",
    multiple: true,
    next: "food",
    choices: [
      {
        label: "Water",
        points: 2,
      },
      {
        label: "Beer",
        points: 3,
      },
      {
        label: "Bourbon",
        localized: {
          "en-GB,en-IE,en-IN": "Gin",
        },
        points: -1,
      },
      {
        label: "Chloroquine",
        points: -5,
      },
    ],
  },
  food: {
    theme: "purple",
    label: "What did you have for lunch yesterday?",
    next: "shower",
    choices: [
      {
        label: "Toilet Paper",
        localized: {
          "en-GB,en-IE,en-IN": "Loo roll",
        },
        points: -4,
      },
      {
        label: "Cold fries and peanut butter",
        localized: {
          "en-GB,en-IE,en-IN": "Cold chips and marmalade",
        },
        points: -3,
      },
      {
        label: "Instant ramen",
        points: -1,
      },
      {
        label: "Seared scallops, beef bourguignon and panna cotta with a raspberry coulis",
        points: 4,
      },
      {
        label: "I only got up at 5pm",
        localized: {
          "en-GB,en-IE,en-IN": "I only got up at 8pm, Clap for Carers woke me up",
        },
        points: -2,
      },
    ],
  },
  shower: {
    theme: "red",
    label: "When was your last shower?",
    next: "out",
    choices: [
      {
        label: "An hour ago",
        points: 2,
      },
      {
        label: "Yesterday… or the day before… who knows",
        points: 1,
      },
      {
        label: "Last week",
        points: -1,
      },
      {
        label: "When I had my last Tinder date",
        points: -2,
      },
    ],
  },
  out: {
    theme: "orange",
    label: "To go out…",
    next: "after",
    choices: [
      {
        label: "I put on my mask stolen from the French",
        localized: {
          "en-GB,en-IE,en-IN":
            "I carefully rehearse my backstory about why all the Easter eggs I'm buying are essential medical supplies for my sick aunt",
        },
        points: -2,
      },
      {
        label: "I put on my gym kit so it looks like I might actually be exercising",
        points: -1,
      },
      {
        label: "I send the kids out to make sure everyone is social distancing before I leave the house",
        points: -2,
      },
      {
        label: "YOU STAY AT HOME FFS!\n#StayAtHome",
        points: 2,
      },
    ],
  },
  after: {
    theme: "pink",
    label: "What comes after the lockdown?",
    multiple: true,
    next: "end",
    choices: [
      {
        label: "There will be no after",
        points: 1,
      },
      {
        label: "At least this time we'll know who the father is",
        points: 1,
      },
      {
        label: "I'll blow everything I've saved at the bar",
        localized: {
          "en-GB,en-IE,en-IN": "I'll blow everything I've saved at the pub",
        },
        points: -1,
      },
      {
        label: "I'll sue Trump's ass",
        localized: {
          "en-GB,en-IE,en-IN": "I'll vote greens in the local elections",
        },
        points: 1,
      },
      {
        label: "I might chill at home for a bit",
        points: 3,
      },
    ],
  },
  end: {
    theme: "green",
    label: "Are you sure you want to know the results of this test?",
    choices: [
      {
        label: "Yes",
        points: 1,
      },
      {
        label: "No",
        points: -1,
      },
    ],
  },
}

export default questions
