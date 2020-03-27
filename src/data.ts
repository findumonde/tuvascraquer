const questions: Record<Slug, Question> = {
  q1: {
    theme: "green",
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
      {
        label: "Reponse 3",
        next: "q4",
      },
      {
        label: "Reponse 4",
        next: "q5",
      },
      {
        label: "Reponse 4",
        next: "q5",
      },
      // {
      //   label: "Reponse 5",
      //   next: "q6",
      // },
      // {
      //   label: "Reponse 6",
      //   next: "q7",
      // },
    ],
  },
  q2: {
    theme: "pink",
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
  q3: {
    theme: "purple",
    label: "Question 3",
    next: () => "q4",
    answers: [
      {
        label: "Question 3 Reponse 1",
      },
      {
        label: "Question 3 Reponse 2",
      },
    ],
  },
  q4: {
    theme: "orange",
    label: "Question 4",
    next: () => "q5",
    answers: [
      {
        label: "Question 4 Reponse 1",
      },
      {
        label: "Question 4 Reponse 2",
      },
    ],
  },
}

export default questions
