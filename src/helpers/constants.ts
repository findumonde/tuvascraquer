import { GreenVirus, OrangeVirus, PinkVirus, PurpleVirus, RedVirus } from "src/images/virus"
import Characters from "src/images/characters"
import { ThemeId, Theme, Result } from "src/types"

export const START_DATE = new Date(2020, 2, 17)

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

export const RANGES = [-50, 0, 15, 35, 50, 78] // min = -64, max = 93

export const AUTHORS = {
  "Margot Dauban": "https://www.malt.fr/profile/margotdauban",
  "Antoine Rousseau": "https://antoine.rousseau.im",
  "Raphaël Pi": "https://www.malt.fr/profile/raphaelpi",
}
