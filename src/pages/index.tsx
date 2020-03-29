import React, { useState, useEffect } from "react"

import Layout from "src/layout"
import Background from "src/components/Background"
import Question from "src/components/Question"
import Result from "src/components/Result"
import data from "src/data"
import { START } from "src/helpers/constants"
import Home from "src/components/Home"

const IndexPage: GatsbyPage = () => {
  const [current, setCurrent] = useState<undefined | Slug | "RESULT">()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    window.scroll(0, 0)
  }, [current])

  if (current === "RESULT") {
    return (
      <Layout>
        <Result points={total} />
      </Layout>
    )
  }

  if (current) {
    const handleNext = (points: number, slug?: Slug) => {
      setTotal(total + points)
      setCurrent(slug || "RESULT")
    }

    const question = data[current]

    return (
      <Layout>
        <Background theme={question.theme} />
        <Question key={current} question={question} next={handleNext} />
      </Layout>
    )
  }

  const handleStart = () => {
    setCurrent(START)
  }

  return (
    <Layout>
      <Home start={handleStart} />
    </Layout>
  )
}

export default IndexPage
