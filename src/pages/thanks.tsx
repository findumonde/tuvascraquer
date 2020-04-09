import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"

import Layout from "src/layout"
import { translate } from "src/components/LangContext"
import { Subtitle, Bottom } from "src/components/Home"
import NextButton from "src/components/NextButton"
import Characters from "src/images/characters"

const ThanksPage: GatsbyPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Subtitle>{translate("thanks")}</Subtitle>
      <NextButton as={Link} to="/">
        {translate("restart")}
        <span />
      </NextButton>
      <Bottom>
        {Characters.map((Character, index) => (
          <Character key={index} height={100} />
        ))}
      </Bottom>
    </Layout>
  )
}

export default ThanksPage
