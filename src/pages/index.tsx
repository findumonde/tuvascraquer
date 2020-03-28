import React, { useState } from "react"

import Layout from "src/layout"
import Background from "src/components/Background"
import Question from "src/components/Question"
import Result from "src/components/Result"
import data from "src/data"
import { START } from "src/helpers/constants"

const Home: GatsbyPage = () => {
  const [current, setCurrent] = useState<Question | undefined>(data[START])

  const handleNext = (slug: Slug) => {
    setCurrent(data[slug])
  }

  return (
    <Layout>
      {current ? (
        <>
          <Background theme={current.theme} />
          <Question question={current} next={handleNext} />
        </>
      ) : (
        <Result date="mercredi 8 mars" />
      )}
    </Layout>
  )
}

export default Home
