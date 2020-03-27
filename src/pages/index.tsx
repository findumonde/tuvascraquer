import React, { useState } from "react"

import Layout from "src/layout"
import Question from "src/components/Question"
import data from "src/data"
import { START } from "src/helpers/constants"

const Home: GatsbyPage = () => {
  const [current, setCurrent] = useState(data[START])

  const handleNext = (slug: Slug) => {
    setCurrent(data[slug])
  }

  return (
    <Layout>
      <Question question={current} next={handleNext} />
    </Layout>
  )
}

export default Home
