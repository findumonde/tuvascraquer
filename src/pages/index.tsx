import React, { useState } from "react"

import Layout from "src/layout"
import Question from "src/components/Question"
import data from "src/data"
import { START } from "src/helpers/constants"

const Home: GatsbyPage = () => {
  const [current, setCurrent] = useState(data.find((question) => question.slug === START))

  const handleNext = (slug: Slug) => {
    setCurrent(data.find((question) => question.slug === slug))
  }

  return (
    <Layout>
      <Question question={current} next={handleNext} />
    </Layout>
  )
}

export default Home
