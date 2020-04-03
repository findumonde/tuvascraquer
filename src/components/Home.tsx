import React from "react"
import styled from "styled-components"
import { differenceInDays } from "date-fns"

import { THEMES, START_DATE, AUTHORS } from "src/helpers/constants"
import { isBrowser } from "src/helpers/window"
import { useTranslate } from "src/components/LangContext"
import NextButton from "src/components/NextButton"
import Authors from "src/components/Authors"
import Flag from "src/components/Flag"
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
  start: () => void
}

const Home: React.FC<Props> = ({ start }) => {
  const { translate, getTranslation } = useTranslate()
  const day = isBrowser() ? ` ${translate("day")} ${differenceInDays(new Date(), START_DATE)}` : ""

  return (
    <>
      {process.env.GATSBY_LANG === "fr" && <Flag />}
      <Title>{translate("lockdown").replace("%day%", day)}</Title>
      <Subtitle>{translate("subtitle")}</Subtitle>
      <NextButton onClick={start}>
        {translate("start")}
        <span />
      </NextButton>
      <Bottom>
        {Characters.map((Character, index) => (
          <Character key={index} />
        ))}
      </Bottom>
      <About>
        {translate("createdBy")}
        <br />
        <Authors authors={AUTHORS} />
        <br />
        {translate("while")}.
        {translate("translators") && (
          <>
            <br />
            <br />
            {translate("translatedBy")}
            <br />
            <Authors authors={getTranslation("translators")} />
          </>
        )}
      </About>
    </>
  )
}

export default Home
