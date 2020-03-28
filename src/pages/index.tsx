import React, { useState } from "react"

import Layout from "src/layout"
import Question from "src/components/Question"
import data from "src/data"
import { START } from "src/helpers/constants"
import Summary from "src/components/Summary"

const Home: GatsbyPage = () => {
  const [current, setCurrent] = useState<Question | undefined>(data[START])

  const handleNext = (slug: Slug) => {
    setCurrent(data[slug])
  }

  return (
    <Layout title={current ? undefined : "Tu vas craquer mercredi 8 mars !"}>
      {current ? <Question question={current} next={handleNext} /> : <Summary date="mercredi 8 mars" />}
    </Layout>
  )
}

export default Home
