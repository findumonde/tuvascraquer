import React from "react"
import styled from "styled-components"

import { openPopup } from "src/helpers/window"

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
  const text = encodeURIComponent(`Je vais craquer ${date} !\n#confinement #covid19`)
  const url = encodeURIComponent(location.href)

  const handleFacebook = () => {
    openPopup("fb", `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`)
  }

  const handleTwitter = () => {
    openPopup("twitter", `https://twitter.com/intent/tweet?url=${url}&text=${text}%0A`, 275)
  }

  return (
    <Container>
      <Title>Terminé</Title>
      <Score>Tu vas craquer {date} !</Score>
      <ShareButton color="#4267b2" onClick={handleFacebook}>
        Partager sur Facebook
      </ShareButton>
      <ShareButton color="#1da1f2" onClick={handleTwitter}>
        Partager sur Twitter
      </ShareButton>
    </Container>
  )
}

export default Summary
