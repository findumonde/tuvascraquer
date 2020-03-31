export type Slug = string

export type ThemeId = "pink" | "purple" | "green" | "red" | "orange"

export interface Theme {
  color: string
  Virus: React.FC<React.SVGProps<SVGSVGElement>>
}

export interface IQuestion {
  theme: ThemeId
  label: string
  multiple?: boolean
  choices: Choice[]
  next?: Slug
}

export interface Choice {
  label: string
  unique?: boolean
  points?: number
  next?: Slug
}

export interface Result {
  slug: "worst" | "bad" | "average" | "good" | "best"
  Character: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
  color: string
}

export type Trad = Record<string, string | Record<string, string>>
