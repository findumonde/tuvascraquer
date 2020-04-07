import React, { useContext, useState, useEffect } from "react"

import { Localized, Translation } from "src/types"

import { isBrowser } from "src/helpers/window"

interface ILangContext {
  translation: Translation
  country: string
}

const LangContext = React.createContext<ILangContext>({} as ILangContext)

interface Data {
  label: string
  localized?: Localized
}

export const localize = (data: Data) => {
  if (isBrowser() && data.localized) {
    for (const locales in data.localized) {
      const list = locales.split(",")
      if (list.includes(navigator.language)) {
        return data.localized[locales]
      }
    }
  }
  return data.label
}

export const LangProvider: React.FC<{ translation: Translation }> = ({ translation, children }) => {
  const [country, setCountry] = useState("")
  const server = "https://www.cloudflare.com"

  useEffect(() => {
    fetch(`${server}/cdn-cgi/trace`)
      .then((response) => response.text())
      .then((data) => {
        const match = data.match(/loc=([A-Z]+)\n/)
        setCountry(match && match.length > 0 ? match[1] : "FR")
      })
      .catch(() => setCountry("FR"))
  }, [])

  return <LangContext.Provider value={{ translation, country }}>{children}</LangContext.Provider>
}

export const useCountry = () => useContext(LangContext).country

export const useTranslate = () => {
  const { translation } = useContext(LangContext)

  return {
    translate: (key: string, cat = "_root") => {
      const messages = translation[cat]
      if (!messages) {
        if (isBrowser() && !location.search.includes("reloaded")) {
          location.replace("/?reloaded")
        }
        return ""
      }
      return messages[key] || key
    },
    getTranslation: (cat: string) => translation[cat],
  }
}
