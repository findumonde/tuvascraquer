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
  next?: (choice?: Choice) => Slug
}

interface Choice {
  label: string
  next?: Slug
}
