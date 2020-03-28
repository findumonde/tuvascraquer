import React from "react"
import styled from "styled-components"
import { THEMES } from "src/helpers/constants"

const NUM = 4

const Container = styled.div`
  svg {
    position: fixed;
    z-index: -1;
    margin-bottom: -100px;
  }
`

const random = (max: number, min = 0) => min + Math.round(Math.random() * (max - min))

const getRandomStyle = (index: number) => {
  const range = 100 / (NUM / 2)
  const multiplier = Math.floor(index / 2)
  const style: React.CSSProperties = {
    [index % 2 ? "right" : "left"]: -random(35, 20),
    transform: `rotate(${random(360)}deg)`,
    top: `${random(range * (multiplier + 1), range * multiplier)}%`,
    width: random(100, 40),
  }
  return style
}

interface Props {
  theme: Question["theme"]
}

const Background: React.FC<Props> = ({ theme }) => {
  const { Virus } = THEMES[theme]
  return (
    <Container>
      {Array.from({ length: NUM }).map((_, index) => (
        <Virus key={index} width={100} style={getRandomStyle(index)} />
      ))}
    </Container>
  )
}

export default Background
