import React from "react"
import styled from "styled-components"

import { openPopup } from "src/helpers/window"
import { COLORS } from "src/helpers/constants"
import { queryString } from "src/helpers/api"

const Container = styled.div``
const Title = styled.h1``
const Score = styled.h2``

const ShareButton = styled.button<{ color: string }>`
  margin: 40px auto 20px;
  ${({ color }) => `color: ${color}; border-color: ${color}`}
`

interface SummaryProps {
  date: string
}

const Summary: React.FC<SummaryProps> = ({ date }) => {
  const text = `Je vais craquer ${date} !\n#confinement #covid19`
  const url = location.href

  const handleShare = () => {
    navigator.share({
      title: "Tu vas craquer ?",
      text,
      url,
    })
  }

  const handleFacebook = () => {
    const params = {
      u: url,
      quote: text,
    }
    openPopup("fb", `https://www.facebook.com/sharer/sharer.php?${queryString(params)}`)
  }

  const handleTwitter = () => {
    const params = {
      url,
      text: text + "\n",
    }
    openPopup("twitter", `https://twitter.com/intent/tweet?${queryString(params)}`, 275)
  }

  return (
    <Container>
      <Title>Terminé</Title>
      <Score>Tu vas craquer {date} !</Score>
      {"share" in navigator ? (
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
    </Container>
  )
}

export default Summary
