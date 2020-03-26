const questions: Question[] = [
  {
    slug: "q1",
    label: "Question 1",
    answers: [
      {
        label: "Reponse 1",
        next: "q2",
      },
      {
        label: "Reponse 2",
        next: "q3",
      },
    ],
  },
  {
    slug: "q2",
    label: "Question 2",
    multiple: true,
    next: () => "q4",
    answers: [
      {
        label: "Question 2 Reponse 1",
      },
      {
        label: "Question 2 Reponse 2",
      },
    ],
  },
  {
    slug: "q3",
    label: "Question 3",
    next: "q4",
    answers: [
      {
        label: "Question 3 Reponse 1",
      },
      {
        label: "Question 3 Reponse 2",
      },
    ],
  },
  {
    slug: "q4",
    label: "Question 4",
    next: "q5",
    answers: [
      {
        label: "Question 4 Reponse 1",
      },
      {
        label: "Question 4 Reponse 2",
      },
    ],
  },
]

export default questions
