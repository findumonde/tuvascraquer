import React from "react"
import styled from "styled-components"

import Layout from "src/layout"
import { COLORS } from "src/helpers/constants"
import { openPopup } from "src/helpers/window"
import { queryString } from "src/helpers/api"

const Title = styled.h1``
const Score = styled.h2``

const ShareButton = styled.button<{ color: string }>`
  margin: 40px auto 20px;
  ${({ color }) => `color: ${color}; border-color: ${color}`}
`

interface Context {
  result: string
}

const Result: GatsbyPage<undefined, Context> = ({ location, pageContext: { result } }) => {
  const params = new URLSearchParams(location.search)
  const date = params.get("date")
  const title = `Tu vas craquer ${date} !`
  const text = `Je vais craquer ${date} !\n#confinement #covid19`
  const url = location.href

  const track = (type: string) => {
    // TODO: GA
  }

  const handleShare = () => {
    navigator
      .share({
        title: "Tu vas craquer ?",
        text,
        url,
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
      u: url,
      quote: text,
    }
    openPopup("fb", `https://www.facebook.com/sharer/sharer.php?${queryString(params)}`)
    track("facebook")
  }

  const handleTwitter = () => {
    const params = {
      url,
      text: text + "\n",
    }
    openPopup("twitter", `https://twitter.com/intent/tweet?${queryString(params)}`, 275)
    track("twitter")
  }

  return (
    <Layout title={title}>
      <Title>Terminé / {result}</Title>
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
    </Layout>
  )
}

export default Result
