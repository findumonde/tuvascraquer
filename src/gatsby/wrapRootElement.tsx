import React from "react"

import { LangProvider } from "src/components/LangContext"

const wrapRootElement = ({ element }) => <LangProvider>{element}</LangProvider>

export default wrapRootElement
