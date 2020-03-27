import React, { useState } from "react"

import Layout from "src/layout"
import Question from "src/components/Question"
import data from "src/data"
import { START } from "src/helpers/constants"
import Summary from "src/components/Summary"

const Home: GatsbyPage = () => {
  const [current, setCurrent] = useState(data[START])

  const handleNext = (slug: Slug) => {
    setCurrent(data[slug])
  }

  return (
    <Layout>
      {current ? <Question question={current} next={handleNext} /> : <Summary score={97}>Terminé</Summary>}
    </Layout>
  )
}

export default Home
