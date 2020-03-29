type Slug = string

type ThemeId = "pink" | "purple" | "green" | "red" | "orange"

interface Theme {
  color: string
  Virus: React.FC<React.SVGProps<SVGSVGElement>>
}

interface Question {
  theme: ThemeId
  label: string
  multiple?: boolean
  choices: Choice[]
  next?: (answers: number[]) => Slug
}

interface Choice {
  label: string
  unique?: boolean
  points?: number
  next?: Slug
}

interface Result {
  slug: "worst" | "bad" | "average" | "good" | "best"
  Character: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
  color: string
}
