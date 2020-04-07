import React, { useState } from "react"
import styled, { keyframes, css } from "styled-components"
import { THEMES } from "src/helpers/constants"
import { IQuestion } from "src/types"
import { random } from "src/helpers/utils"

const NUM = 4
const range = 100 / (NUM / 2)

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;

  svg {
    position: absolute;
    z-index: -1;
    margin-bottom: -100px;
  }
`

const getAnimation = (rotate: number) => {
  const start = random(3, 1)
  const rotateAnimation = `
    0% {
      transform: rotate(${rotate}deg);
    }
    ${start}0% {
      transform: rotate(${rotate}deg);
    }
    ${start}1% {
      transform: rotate(${rotate - 2}deg);
    }
    ${start}3% {
      transform: rotate(${rotate + random(10, 5)}deg);
    }
    ${start}5% {
      transform: rotate(${rotate - random(10, 5)}deg);
    }
    ${start}6% {
      transform: rotate(${rotate - 1}deg);
    }
    100% {
      transform: rotate(${rotate}deg);
    }
  `

  const translateAnimation = `
    0% {
      transform: translateX(0px) rotate(${rotate}deg);
    }
    50% {
      transform: translateX(${random(30, 10)}px) rotate(${rotate}deg);
    }
    100% {
      transform: translateX(0px) rotate(${rotate}deg);
    }
  `

  const scaleAnimation = `
    0% {
      transform: scaleY(1) scaleX(1) rotate(${rotate}deg);
    }
    50% {
      transform: scaleY(1.4) scaleX(1.4) rotate(${rotate}deg);
    }
    100% {
      transform: scaleY(1) scaleX(1) rotate(${rotate}deg);
    }
  `

  const animations = [
    {
      keyFrame: keyframes`
      ${rotateAnimation}
    `,
      duration: random(5, 2),
      delay: 0,
      iteration: "1",
    },
    {
      keyFrame: keyframes`
      ${translateAnimation}
    `,
      duration: random(5, 3),
      delay: random(1),
      iteration: "infinite",
    },
    {
      keyFrame: keyframes`
      ${scaleAnimation}
    `,
      duration: random(10, 2),
      delay: 0,
      iteration: "infinite",
    },
  ]

  return animations[random(2)]
}

interface AnimatedVirusProps {
  $index: number
  $multiplier: number
  $rotate: number
  $animation: any
}

const AnimatedViruses = {}
Object.keys(THEMES).forEach((theme) => {
  AnimatedViruses[theme] = styled(THEMES[theme].Virus)<AnimatedVirusProps>`
    top: ${({ $multiplier }: AnimatedVirusProps) => `${random(range * ($multiplier + 1), range * $multiplier)}`}%;
    ${({ $index }: AnimatedVirusProps) => `${$index % 2 ? "right" : "left"}: -${random(25, 10)}px;`};
    ${({ $animation: { keyFrame, duration, delay, iteration } }: AnimatedVirusProps) =>
      css`
        animation: ${keyFrame} ${duration}s ease-in-out ${delay}s ${iteration};
      `};
    transform: rotate(${({ $rotate }: AnimatedVirusProps) => $rotate}deg);
  `
})

interface Props {
  theme: IQuestion["theme"]
}

const Background: React.FC<Props> = ({ theme }) => {
  const [height, setHeight] = useState(document.body.clientHeight)

  return (
    <Container
      ref={() => {
        setHeight(Math.max(document.body.clientHeight, window.outerHeight))
      }}
      style={{
        height,
      }}
    >
      {Array.from({ length: NUM }).map((_, index) => {
        const rotate = random(360)
        const animation = getAnimation(rotate)
        const multiplier = Math.floor(index / 2)
        const width = random(100, 40)
        const AnimatedVirus = AnimatedViruses[theme]

        return (
          <AnimatedVirus
            key={index}
            $index={index}
            $multiplier={multiplier}
            $rotate={rotate}
            $animation={animation}
            width={width}
          />
        )
      })}
    </Container>
  )
}

export default Background
