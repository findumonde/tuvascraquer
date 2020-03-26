import React from "react"
import styled from "styled-components"

const Title = styled.h1``

interface QuestionProps {
  question: Question
}

const Question: React.FC<QuestionProps> = ({ question }) => <Title>{question.label}</Title>

export default Question
