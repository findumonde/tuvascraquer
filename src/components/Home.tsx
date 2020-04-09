import React from "react"
import styled from "styled-components"
import { differenceInDays } from "date-fns"

import { THEMES, getStartDate, AUTHORS } from "src/helpers/constants"
import { isBrowser } from "src/helpers/window"
import { translate, translation, useCountry } from "src/components/LangContext"
import NextButton from "src/components/NextButton"
import Authors from "src/components/Authors"
import Flag from "src/components/Flag"
import Characters from "src/images/characters"

export const Title = styled.h1``
export const Subtitle = styled.h1`
  color: ${THEMES.red.color};
  margin-bottom: 50px;
`
export const Bottom = styled.div`
  svg {
    display: block;
    margin: 50px auto;
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
  start: () => void
}

const Home: React.FC<Props> = ({ start }) => {
  const country = useCountry()
  const day =
    isBrowser() && country ? ` ${translate("day")} ${differenceInDays(new Date(), getStartDate(country)) + 1}` : ""

  const { translators } = translation

  return (
    <>
      {process.env.GATSBY_LANG === "fr" && <Flag />}
      <Title>{translate("lockdown").replace("%day%", day)}</Title>
      <Subtitle>{translate("subtitle")}</Subtitle>
      <NextButton onClick={start}>
        {translate(isBrowser() ? "start" : "loading")}
        <span />
      </NextButton>
      <Bottom>
        {Characters.map((Character, index) => (
          <Character key={index} height={100} />
        ))}
      </Bottom>
      <About>
        {translate("createdBy")}
        <br />
        <Authors authors={AUTHORS} />
        <br />
        {translate("while")}.
        {translators && (
          <>
            <br />
            <br />
            {translate("translatedBy")}
            <br />
            <Authors authors={translators} />
          </>
        )}
      </About>
    </>
  )
}

export default Home
