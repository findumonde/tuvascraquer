import React from "react"
import styled from "styled-components"
import { differenceInDays } from "date-fns"

import { RESULTS, THEMES, START_DATE } from "src/helpers/constants"
import { isBrowser } from "src/helpers/window"
import NextButton from "./NextButton"
import { Translation } from "src/types"

const Title = styled.h1``
const Subtitle = styled.h1`
  color: ${THEMES.red.color};
  margin-bottom: 50px;
`
const Bottom = styled.div`
  svg {
    display: block;
    margin: 50px auto;
    height: 80px;
    :first-of-type {
      height: 90px;
      vertical-align: -3px;
    }
    :last-of-type {
      height: 110px;
    }
  }
  @media (min-width: 900px) {
    svg {
      display: inline;
    }
  }
`
const About = styled.footer`
  margin-top: 40px;
  font-size: 10px;
  line-height: 12px;
`

interface Props {
  translation: Translation
  start: () => void
}

const Home: React.FC<Props> = ({ start, translation }) => {
  return (
    <>
      <Title>
        {translation.lockdown} {isBrowser() ? ` ${translation.day} ${differenceInDays(new Date(), START_DATE)}` : ""}
      </Title>
      <Subtitle>{translation.subtitle}</Subtitle>
      <NextButton onClick={start}>
        {translation.start}
        <span />
      </NextButton>
      <Bottom>
        {RESULTS.map(({ Character }, index) => (
          <Character key={index} />
        ))}
      </Bottom>
      <About>
        {translation.createdBy}
        <br />
        <a href="https://www.malt.fr/profile/margotdauban">Margot Dauban</a>,{" "}
        <a href="https://antoine.rousseau.im">Antoine Rousseau</a> et{" "}
        <a href="https://www.malt.fr/profile/raphaelpi">Raphaël Pi</a>,
        <br />
        {translation.while}.
      </About>
    </>
  )
}

export default Home
