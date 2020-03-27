import React, { useState } from "react"
import styled from "styled-components"

import ChoiceButton from "src/components/ChoiceButton"
import { THEMES, COLORS, FONTS } from "src/helpers/constants"

const Title = styled.h1``

const Choices = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px 0;
`

const NextButton = styled.button<{ disabled: boolean; color: string }>`
  padding: 15px 30px;
  border-radius: 40px;
  margin: 0 auto 20px;
  font-family: ${FONTS.title};
  font-size: 1.6em;
  ${({ color }) => `color: ${color}; border-color: ${color}`};
  span {
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid ${({ color }) => color};
    margin-left: 10px;
  }
  :disabled {
    color: ${COLORS.black};
    border-color: ${COLORS.black};
    opacity: 0.5;
    span {
      border-left-color: ${COLORS.black};
    }
  }
`

const Disclaimer = styled.p``

interface QuestionProps {
  question: Question
  next: (slug: Slug) => void
}

const Question: React.FC<QuestionProps> = ({ question, next }) => {
  const [answers, setAnswers] = useState<number[]>([])
  const { multiple, label, theme } = question

  const { color, Virus } = THEMES[theme]

  const handleClick = (index: number) => () => {
    if (multiple) {
      const position = answers.indexOf(index)
      if (position !== -1) {
        const newAnswers = answers.slice()
        newAnswers.splice(position, 1)
        setAnswers(newAnswers)
      } else {
        setAnswers([...answers, index])
      }
    } else {
      setAnswers([index])
    }
  }

  const handleNext = () => {
    if (!answers.length) {
      // no answer
      return
    }
    const slug = question.next ? question.next() : question.choices[answers[0]].next
    setAnswers([])
    next(slug)
  }

  return (
    <>
      <Virus width={100} style={{ position: "absolute", right: 20 }} />
      <Title>{label}</Title>
      {multiple && <Disclaimer>Question à choix multiples</Disclaimer>}
      <Choices>
        {question.choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            choice={choice}
            color={color}
            onClick={handleClick(index)}
            selected={answers.includes(index)}
          />
        ))}
      </Choices>
      <NextButton disabled={!answers.length} color={color} onClick={handleNext}>
        Suivant
        <span />
      </NextButton>
    </>
  )
}

export default Question
