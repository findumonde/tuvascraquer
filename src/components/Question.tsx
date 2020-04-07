import React, { useState, useEffect } from "react"
import styled from "styled-components"

import ChoiceButton from "src/components/ChoiceButton"
import { THEMES } from "src/helpers/constants"
import NextButton from "src/components/NextButton"
import { translate, localize } from "src/components/LangContext"
import { IQuestion, Slug } from "src/types"

const Title = styled.h1``

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`

const Disclaimer = styled.p`
  font-style: italic;
  font-weight: 300;
`

interface QuestionProps {
  question: IQuestion
  next: (points: number, slug?: Slug) => void
}

const Question: React.FC<QuestionProps> = ({ question, next }) => {
  const [answers, setAnswers] = useState<number[]>([])
  const { choices, multiple, theme } = question
  const { color } = THEMES[theme]

  useEffect(() => {
    ga("send", "pageview", question.label)
  }, [question])

  const handleClick = (index: number) => () => {
    const position = answers.indexOf(index)
    if (multiple && !choices[index].unique) {
      if (position !== -1) {
        const newAnswers = answers.slice()
        newAnswers.splice(position, 1)
        setAnswers(newAnswers)
      } else {
        setAnswers([...answers.filter((i) => !choices[i].unique), index])
      }
    } else {
      if (position !== -1) {
        setAnswers([])
      } else {
        setAnswers([index])
      }
    }
  }

  const handleNext = () => {
    if (!answers.length) {
      // no answer
      return
    }
    const points = answers.reduce((total, index) => total + (choices[index].points || 0), 0)
    let slug = question.next ? question.next : choices[answers[0]].next

    if (question.next === "celebrities") {
      slug = answers.some((index) => index < 7) ? "celebrities" : "days"
    }

    answers.forEach((index) => {
      ga("send", "event", "answer", question.label, choices[index].label)
    })
    setAnswers([])
    next(points, slug)
  }

  return (
    <>
      <Title>{localize(question)}</Title>
      {multiple && <Disclaimer>{translate("multiple")}</Disclaimer>}
      <Choices>
        {choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            label={localize(choice)}
            color={color}
            onClick={handleClick(index)}
            selected={answers.includes(index)}
          />
        ))}
      </Choices>
      <NextButton disabled={!answers.length} color={color} onClick={handleNext}>
        {translate("next")}
        <span />
      </NextButton>
    </>
  )
}

export default Question
