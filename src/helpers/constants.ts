import { GreenVirus, OrangeVirus, PinkVirus, PurpleVirus, RedVirus } from "src/images/virus"
import Characters from "src/images/characters"
import { ThemeId, Theme, Result } from "src/types"

export const DEFAULT_COUNTRY = "FR"

// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// https://en.wikipedia.org/wiki/Curfews_and_lockdowns_related_to_the_2019%E2%80%9320_coronavirus_pandemic
// https://en.wikipedia.org/wiki/National_responses_to_the_2019%E2%80%9320_coronavirus_pandemic
export const START_DAYS = {
  // Europe:
  IT: 9,
  IE: 12,
  ES: 14,
  FR: 17, // default
  DE: 20,
  GR: 23,
  GB: 24,
  RO: 25,
  // Asia & Oceania:
  LB: 15,
  AU: 23,
  IN: 25,
  RU: 30,
  AE: 31,
  // North America:
  US: 19,
  CA: 21, // Québec
  MX: 30,
  // Central & South America:
  SV: 12,
  EC: 16,
  PE: 16,
  VE: 17,
  HN: 17,
  DO: 19,
  CL: 19,
  AR: 19,
  PY: 20,
  BO: 22,
  CU: 23,
  CR: 23,
  BR: 24, // Santa Catarina 17, São Paulo 24
  CO: 25,
  PA: 25,
}
export const getStartDate = (country: string) => new Date(2020, 2, START_DAYS[country] || START_DAYS[DEFAULT_COUNTRY])

export const COLORS = {
  white: "#ffffff",
  black: "#1B1A1A",
}

export const FONTS = {
  title: "'Boogaloo', cursive",
  text: "'Open Sans', sans-serif",
}

export const START = "place"

export const THEMES: Record<ThemeId, Theme> = {
  red: { color: "#FF534D", Virus: RedVirus },
  orange: { color: "#F2850C", Virus: OrangeVirus },
  pink: { color: "#86025B", Virus: PinkVirus },
  green: { color: "#12B47A", Virus: GreenVirus },
  purple: { color: "#7208C0", Virus: PurpleVirus },
}

export const RESULTS: Result[] = [
  {
    slug: "worst",
    Character: Characters[0],
    color: THEMES.red.color,
  },
  {
    slug: "bad",
    Character: Characters[1],
    color: THEMES.orange.color,
  },
  {
    slug: "average",
    Character: Characters[2],
    color: THEMES.pink.color,
  },
  {
    slug: "good",
    Character: Characters[3],
    color: THEMES.green.color,
  },
  {
    slug: "best",
    Character: Characters[4],
    color: THEMES.purple.color,
  },
]

export const RANGES = [-50, 0, 15, 35, 50, 78] // min = -67, max = 96

export const AUTHORS = {
  "Margot Dauban": "https://www.malt.fr/profile/margotdauban",
  "Antoine Rousseau": "https://antoine.rousseau.im",
  "Raphaël Pi": "https://www.malt.fr/profile/raphaelpi",
}
