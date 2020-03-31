import React from "react"
import styled from "styled-components"
import { differenceInDays } from "date-fns"

import { RESULTS, THEMES, START_DATE } from "src/helpers/constants"
import { isBrowser } from "src/helpers/window"
import NextButton from "./NextButton"
import { Trad } from "src/types"

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
  trad: Trad
  start: () => void
}

const Home: React.FC<Props> = ({ start, trad }) => {
  return (
    <>
      <Title>
        {trad.lockdown} {isBrowser() ? ` ${trad.day} ${differenceInDays(new Date(), START_DATE)}` : ""}
      </Title>
      <Subtitle>{trad.subtitle}</Subtitle>
      <NextButton onClick={start}>
        {trad.start}
        <span />
      </NextButton>
      <Bottom>
        {RESULTS.map(({ Character }, index) => (
          <Character key={index} />
        ))}
      </Bottom>
      <About>
        ${trad.createdBy}
        <br />
        <a href="https://www.malt.fr/profile/margotdauban">Margot Dauban</a>,{" "}
        <a href="https://antoine.rousseau.im">Antoine Rousseau</a> et{" "}
        <a href="https://www.malt.fr/profile/raphaelpi">Raphaël Pi</a>,
        <br />${trad.while}.
      </About>
    </>
  )
}

export default Home
