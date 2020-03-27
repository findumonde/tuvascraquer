type Slug = string

interface Question {
  slug: Slug
  theme: Slug
  label: string
  multiple?: boolean
  answers: Answer[]
  next?: Slug | ((answer?: Answer) => Slug)
}

interface Answer {
  label: string
  next?: Slug
}
