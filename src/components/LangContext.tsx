import React, { useContext, useState, useEffect } from "react"

import { Localized } from "src/types"

import { isBrowser, getUrlParam } from "src/helpers/window"
import { DEFAULT_COUNTRY } from "src/helpers/constants"
import TRANSLATIONS from "src/translations"

export const translation = TRANSLATIONS[process.env.GATSBY_LANG]

interface ILangContext {
  country: string
}

const LangContext = React.createContext<ILangContext>({} as ILangContext)

interface Data {
  label: string
  localized?: Localized
}

export const localize = (data: Data) => {
  if (isBrowser() && data.localized) {
    const lang = getUrlParam("lang") || navigator.language
    for (const locales in data.localized) {
      const list = locales.split(",")
      if (list.includes(lang)) {
        return data.localized[locales]
      }
    }
  }
  return data.label
}

export const LangProvider: React.FC = ({ children }) => {
  const [country, setCountry] = useState<string>()

  useEffect(() => {
    const code = getUrlParam("country")
    if (code) {
      setCountry(code)
    } else {
      fetch(`/cdn-cgi/trace`)
        .then((response) => response.text())
        .then((data) => {
          const match = data.match(/loc=([A-Z]+)$/m)
          setCountry((match && match[1]) || DEFAULT_COUNTRY)
        })
        .catch(() => {
          setCountry(DEFAULT_COUNTRY)
        })
    }
  }, [])

  return <LangContext.Provider value={{ country }}>{children}</LangContext.Provider>
}

export const useCountry = () => useContext(LangContext).country

export const translate = (key: string, cat = "_root") => {
  const messages = translation[cat]
  return (messages && messages[key]) || key
}
