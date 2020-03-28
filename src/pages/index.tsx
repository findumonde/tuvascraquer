import React, { useState } from "react"

import Layout from "src/layout"
import Question from "src/components/Question"
import data from "src/data"
import { START } from "src/helpers/constants"
import { queryString } from "src/helpers/api"

const Home: GatsbyPage = ({ navigate }) => {
  const [current, setCurrent] = useState<Question | undefined>(data[START])

  const handleNext = (slug: Slug) => {
    const next = data[slug]
    if (next) {
      setCurrent(next)
    } else {
      navigate("/result/bad/?" + queryString({ date: "mercredi 8 mars" }))
    }
  }

  return (
    <Layout>
      <Question question={current} next={handleNext} />
    </Layout>
  )
}

export default Home
