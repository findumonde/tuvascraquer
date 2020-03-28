import React, { useEffect } from "react"
import styled from "styled-components"

import { RESULTS } from "src/helpers/constants"
import { isBrowser, openPopup } from "src/helpers/window"
import { queryString } from "src/helpers/api"

import ShareIcon from "src/images/share.svg"
import FacebookIcon from "src/images/facebook.svg"
import TwitterIcon from "src/images/twitter.svg"

const Content = styled.div`
  min-height: calc(100vh - 90px);
  padding-bottom: 30px;
`
const Score = styled.h1``
const Text = styled.p`
  max-width: 500px;
  margin: 0 auto;
`
const Share = styled.h2``
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

interface Props {
  date: string
  range: number
}

const track = (type: string, value: string | number) => {
  console.log("GA", type, value)
  // TODO: GA
}

const Result: React.FC<Props> = ({ date, range }) => {
  const sharedText = `Je vais craquer ${date} !\n#confinement #covid19`
  const hasShareApi = isBrowser() && "share" in navigator

  useEffect(() => {
    track("result", range)
  }, [range])

  const handleShare = () => {
    navigator
      .share({
        title: "Tu vas craquer ?",
        text: sharedText,
        url: location.href,
      })
      .then(() => {
        track("share", "share")
      })
      .catch(() => {
        // ignore
      })
  }

  const handleFacebook = () => {
    const params = {
      u: location.href,
      quote: sharedText,
    }
    openPopup("fb", `https://www.facebook.com/sharer/sharer.php?${queryString(params)}`)
    track("share", "facebook")
  }

  const handleTwitter = () => {
    const params = {
      url: location.href,
      text: sharedText + "\n",
    }
    openPopup("twitter", `https://twitter.com/intent/tweet?${queryString(params)}`, 275)
    track("share", "twitter")
  }

  const { Character, color, text } = RESULTS[range]

  return (
    <>
      <Content style={{ minHeight: window.innerHeight - 100 }}>
        <Character />
        <Score>
          Tu vas craquer
          <br />
          <span style={{ color }}>{date} !</span>
        </Score>
        <Text>{text}</Text>
        <Share>
          Partage la nouvelle
          <br />
          avant qu’il ne soit trop tard
        </Share>
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
        {RESULTS.map(({ Character }, index) => (
          <Character key={index} />
        ))}
      </Bottom>
    </>
  )
}

export default Result
