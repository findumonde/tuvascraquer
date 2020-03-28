import React from "react"
import styled from "styled-components"

import { COLORS } from "src/helpers/constants"
import { isBrowser, openPopup } from "src/helpers/window"
import { queryString } from "src/helpers/api"

const Title = styled.h1``
const Score = styled.h2``

const ShareButton = styled.button<{ color: string }>`
  margin: 40px auto 20px;
  ${({ color }) => `color: ${color}; border-color: ${color}`}
`

interface Props {
  date: string
}

const Result: React.FC<Props> = ({ date }) => {
  const text = `Je vais craquer ${date} !\n#confinement #covid19`
  const hasShareApi = isBrowser() && "share" in navigator

  const track = (type: string) => {
    // TODO: GA
  }

  const handleShare = () => {
    navigator
      .share({
        title: "Tu vas craquer ?",
        text,
        url: location.href,
      })
      .then(() => {
        track("share")
      })
      .catch(() => {
        // ignore
      })
  }

  const handleFacebook = () => {
    const params = {
      u: location.href,
      quote: text,
    }
    openPopup("fb", `https://www.facebook.com/sharer/sharer.php?${queryString(params)}`)
    track("facebook")
  }

  const handleTwitter = () => {
    const params = {
      url: location.href,
      text: text + "\n",
    }
    openPopup("twitter", `https://twitter.com/intent/tweet?${queryString(params)}`, 275)
    track("twitter")
  }

  return (
    <>
      <Title>Terminé</Title>
      <Score>Tu vas craquer {date} !</Score>
      {hasShareApi ? (
        <ShareButton color={COLORS.black} onClick={handleShare}>
          Partager
        </ShareButton>
      ) : (
        <>
          <ShareButton color="#4267b2" onClick={handleFacebook}>
            Partager sur Facebook
          </ShareButton>
          <ShareButton color="#1da1f2" onClick={handleTwitter}>
            Partager sur Twitter
          </ShareButton>
        </>
      )}
    </>
  )
}

export default Result
