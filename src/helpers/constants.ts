import { GreenVirus, OrangeVirus, PinkVirus, PurpleVirus, RedVirus } from "src/images/virus"
import Characters from "src/images/characters"
import { ThemeId, Theme, Result } from "src/types"

export const START_DATES = {
  FR: new Date(2020, 2, 17),
  GB: new Date(2020, 2, 24),
  AU: new Date(2020, 2, 23),
  IN: new Date(2020, 2, 25),
  US: new Date(2020, 2, 19),
  DE: new Date(2020, 2, 20),
  AE: new Date(2020, 2, 26),
  LB: new Date(2020, 2, 15),
  IT: new Date(2020, 2, 9),
}
export const DEFAULT_START_DATE = START_DATES.FR
export const getStartDate = (country: string) => START_DATES[country] || DEFAULT_START_DATE

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
