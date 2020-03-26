const questions: Question[] = [
  {
    id: 1,
    label: "Question 1",
    answers: [
      {
        label: "Reponse 1",
        nextId: 2,
      },
      {
        label: "Reponse 2",
        nextId: 3,
      },
    ],
  },
  {
    id: 2,
    label: "Question 2",
    multiple: true,
    getNextId: () => 4,
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
    id: 3,
    label: "Question 3",
    getNextId: () => 4,
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
    id: 4,
    label: "Question 4",
    getNextId: () => 5,
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
