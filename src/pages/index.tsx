import React, { useState } from "react"

import Layout from "src/layout"
import Background from "src/components/Background"
import Question from "src/components/Question"
import Result from "src/components/Result"
import data from "src/data"
import { START } from "src/helpers/constants"
import Home from "src/components/Home"

const IndexPage: GatsbyPage = () => {
  const [current, setCurrent] = useState<Question | undefined | "end">()
  const [total, setTotal] = useState(0)

  if (current === "end") {
    return (
      <Layout>
        <Result points={total} />
      </Layout>
    )
  }

  if (current) {
    const handleNext = (points: number, slug?: Slug) => {
      setTotal(total + points)
      setCurrent(slug ? data[slug] : "end")
    }

    return (
      <Layout>
        <Background theme={current.theme} />
        <Question question={current} next={handleNext} />
      </Layout>
    )
  }

  const handleStart = () => {
    setCurrent(data[START])
  }

  return (
    <Layout>
      <Home start={handleStart} />
    </Layout>
  )
}

export default IndexPage
