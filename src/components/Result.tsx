import React, { useEffect } from "react"
import styled from "styled-components"
import { addDays, differenceInDays, format } from "date-fns"
import { fr, enUS } from "date-fns/locale"

import { RESULTS, START_DATE, RANGES } from "src/helpers/constants"
import { isBrowser, openPopup } from "src/helpers/window"
import { useTranslate } from "src/components/LangContext"

import ShareIcon from "src/images/share.svg"
import FacebookIcon from "src/images/facebook.svg"
import TwitterIcon from "src/images/twitter.svg"
import Characters from "src/images/characters"

const DATE_LOCALES = {
  fr,
  en: enUS,
}
const DATE_LOCALE = DATE_LOCALES[process.env.GATSBY_LANG]
const EUROPEAN_ENGLISH = ["en-GB", "en-IE"]

const Content = styled.div`
  min-height: calc(100vh - 90px);
  padding-bottom: 30px;
`
const Score = styled.h1``
const Text = styled.p`
  max-width: 500px;
  margin: 0 auto;
`
const Share = styled.h2`
  white-space: pre-line;
`
const Bottom = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    height: 30px;
  }
  svg {
    flex: 1 0 auto;
    width: 10%;
    height: 100%;
  }
  svg:first-of-type {
    height: 120%;
  }
  svg:last-of-type {
    height: 150%;
    margin-top: -15px;
  }
`

const ShareButton = styled.button`
  display: inline-block;
`

const queryString = (query: Record<string, string>) =>
  Object.keys(query)
    .map((key) => `${key}=${encodeURIComponent(query[key])}`)
    .join("&")

const trackSharing = (label: string) => {
  ga("send", "social", label, "share")
}

const DAYS_WEIGHTER = 1.5 // 150 points => 100 days

const getDate = (points: number) => {
  const now = new Date()
  let date = addDays(START_DATE, (points - RANGES[0]) / DAYS_WEIGHTER)
  if (date.getTime() < addDays(now, 5).getTime()) {
    date = addDays(now, 3 - (RANGES[0] - points) / differenceInDays(now, START_DATE))
  }
  return date
}

const getResult = (points: number) => {
  for (let i = 0; i < RESULTS.length; i++) {
    if ((points >= RANGES[i] || i === 0) && (points <= RANGES[i + 1] || i === RESULTS.length - 1)) {
      return RESULTS[i]
    }
  }
}

interface Props {
  points: number
}

const Result: React.FC<Props> = ({ points }) => {
  const { translate } = useTranslate()
  const dateFormat = EUROPEAN_ENGLISH.includes(navigator.language) ? "EEEE, do MMMM!" : translate("date")
  const date = format(getDate(points), dateFormat, { locale: DATE_LOCALE })
  const sharedText = translate("shareText").replace("%date%", date)
  const hasShareApi = isBrowser() && "share" in navigator

  const { slug, Character, color } = getResult(points)

  useEffect(() => {
    ga("set", "dimension1", slug)
    ga("set", "dimension2", points)
    ga("set", "metric1", 1)
    ga("send", "pageview", "result")
  }, [slug, points])

  const handleShare = () => {
    navigator
      .share({
        title: "Tu vas craquer ?",
        text: sharedText,
        url: location.href,
      })
      .then(() => {
        trackSharing("share")
      })
      .catch(() => {
        // user cancelled
      })
  }

  const handleFacebook = () => {
    const params = {
      u: location.href,
      quote: sharedText,
    }
    openPopup("fb", `https://www.facebook.com/sharer/sharer.php?${queryString(params)}`)
    trackSharing("facebook")
  }

  const handleTwitter = () => {
    const params = {
      url: location.href,
      text: sharedText,
    }
    openPopup("twitter", `https://twitter.com/intent/tweet?${queryString(params)}`, 275)
    trackSharing("twitter")
  }

  return (
    <>
      <Content style={{ minHeight: window.innerHeight - 100 }}>
        <Character />
        <Score>
          {translate("youWillCrack")}
          <br />
          <span style={{ color }}>{date}</span>
        </Score>
        <Text>{translate(slug, "persona")}</Text>
        <Share>{translate("share")}</Share>
        {hasShareApi ? (
          <ShareButton onClick={handleShare}>
            <ShareIcon />
          </ShareButton>
        ) : (
          <>
            <ShareButton onClick={handleTwitter}>
              <TwitterIcon />
            </ShareButton>
            <ShareButton onClick={handleFacebook}>
              <FacebookIcon />
            </ShareButton>
          </>
        )}
      </Content>
      <Bottom>
        {Characters.map((Character, index) => (
          <Character key={index} />
        ))}
      </Bottom>
    </>
  )
}

export default Result
