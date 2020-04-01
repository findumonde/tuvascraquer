import React from "react"
import styled from "styled-components"
import { differenceInDays } from "date-fns"

import { Translation } from "src/types"
import { THEMES, START_DATE, AUTHORS } from "src/helpers/constants"
import { isBrowser } from "src/helpers/window"
import NextButton from "src/components/NextButton"
import Authors from "src/components/Authors"
import Characters from "src/images/characters"

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
  const day = isBrowser() ? ` ${translation.day} ${differenceInDays(new Date(), START_DATE)}` : ""

  return (
    <>
      <Title>{(translation.lockdown as string).replace("%day%", day)}</Title>
      <Subtitle>{translation.subtitle}</Subtitle>
      <NextButton onClick={start}>
        {translation.start}
        <span />
      </NextButton>
      <Bottom>
        {Characters.map((Character, index) => (
          <Character key={index} />
        ))}
      </Bottom>
      <About>
        {translation.createdBy}
        <br />
        <Authors authors={AUTHORS} />
        <br />
        {translation.while}.
        {translation.translators && (
          <>
            <br />
            <br />
            {translation.translatedBy}
            <br />
            <Authors authors={translation.translators as Record<string, string>} />
          </>
        )}
      </About>
    </>
  )
}

export default Home
