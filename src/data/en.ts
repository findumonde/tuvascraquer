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
        label: "Fields, I'm in the country",
        points: 4,
      },
      {
        label: "The sea, I'm on the coast",
        points: 4,
      },
      {
        label: "The racecourse, I'm in Cheltenham",
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
        label: "In a flat",
        points: 1,
      },
      {
        label: "In a caravan",
        points: 1,
      },
      {
        label: "On a ship...a cruise ship",
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
    label: "Do you have access to outside space?",
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
    label: "Lucky bastard! What spaces exactly?",
    multiple: true,
    next: "appliances",
    choices: [
      {
        label: "A garden",
        points: 3,
      },
      {
        label: "A croquet lawn",
        points: 4,
      },
      {
        label: "A balcony",
        points: 1,
      },
      {
        label: "A kitchen garden",
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
    label: "Your dwelling is equipped with",
    multiple: true,
    next: "before",
    choices: [
      {
        label: "A number of windows",
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
        label: "A printer",
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
    label: "Before the lockdown...",
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
        label: "I played tonsil tennis with an Italian who'd just spent 6 months in China",
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
    next: "people",
    choices: [
      {
        label: "I'm a student, having to explain to my teachers how to use Zoom",
        points: 1,
      },
      {
        label: "I'm looking after my kids, but also looking after myself",
        points: -3,
      },
      {
        label: "Working from home, at least that's what my employer thinks",
        points: 2,
      },
      {
        label: "Finally unemployed, what day are we on already?",
        points: -1,
      },
      {
        label: "I'm a key worker... I'm screwed",
        points: -2,
      },
      {
        label: "There is no good or bad, only thinking makes it so",
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
        label: "A child",
        points: -2,
      },
      {
        label: "More than one child",
        points: -5,
      },
      {
        label: "My mother in law",
        points: -4,
      },
      {
        label: "My mother in law...but I'm sleeping with her",
        points: 2,
      },
      {
        label: "My parents",
        points: -3,
      },
      {
        label: "My housemates",
        points: 2,
      },
      {
        label: "My brother",
        points: 2,
      },
      {
        label: "My cat or dog (or guinea pig)",
        points: 2,
      },
      {
        label: "My tapeworm",
        points: -2,
      },
    ],
  },
  celebrities: {
    theme: "orange",
    label: "Among those people, you have",
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
        label: "Chris Whitty (pre-infection)",
        points: -2,
      },
      {
        label: "A  Covid-19 carrier",
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
        label: "Doing endless stupid questionnaires",
        points: 1,
      },
      {
        label: "I'm working on my Whist tactics et my Risk attacks",
        points: 3,
      },
      {
        label: "I'm singing karaoke projected onto the wall of the building opposite",
        points: 3,
      },
      {
        label: "I'm explaining to my dad how to use HouseParty",
        points: 1,
      },
      {
        label: "Cook, eat, repeat",
        points: 2,
      },
      {
        label: "Netflix, Pornhub, repeat",
        points: 1,
      },
      {
        label:
          "I'm learning Japonese, perfecting my yoga practice, repainting the bathroom, re-reading the classics...basically just being a real pain in the arse",
        points: 3,
      },
      {
        label: "Have you noticed how the toilet always flushes in the opposite direction to the hands of a clock?",
        points: -1,
      },
      {
        label: "I'm touching myself watching reruns of Megan Rapinoe playing football",
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
    label: "Time to have a drink. You have...",
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
        label: "Gin",
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
        label: "Loo roll",
        points: -4,
      },
      {
        label: "Toast and whatever spread was left in the cupboard",
        points: -3,
      },
      {
        label: "Quick cook noodles",
        points: -1,
      },
      {
        label: "A grilled halloumi salad, fresh pasta, and a chocolate fondant",
        points: 4,
      },
      {
        label: "I only got up at 8pm, Clap for Carers woke me up",
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
        label: "Yesterday... or the day before... who knows",
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
        label:
          "I carefully prepare my backstory to explain why all these Easter eggs I'm buying are necessary medical supplies for my sick aunt",
        points: -2,
      },
      {
        label: "I disguise myself in gym kit so it looks like I might actually be exercising",
        points: -1,
      },
      {
        label: "I send the kids out to make sure everyone is social distancing before I leave the house",
        points: -2,
      },
      {
        label: "YOU STAY AT HOME FFS !\n#StayAtHome",
        points: 2,
      },
    ],
  },
  after: {
    theme: "pink",
    label: "After lockdown…",
    multiple: true,
    next: "end",
    choices: [
      {
        label: "There will be no after",
        points: 1,
      },
      {
        label: "At least this time we know who the father is",
        points: 1,
      },
      {
        label: "I'll blow everything I've saved at the pub",
        points: -1,
      },
      {
        label: "I'll vote greens in the local elections",
        points: 1,
      },
      {
        label: "I'll have a nice few quiet days at home",
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
