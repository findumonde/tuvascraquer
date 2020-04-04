import React, { useContext } from "react"

import { Localized, Translation } from "src/types"

import { isBrowser } from "src/helpers/window"

interface ILangContext {
  translation: Translation
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

export const LangProvider = LangContext.Provider

export const useTranslate = () => {
  const { translation } = useContext(LangContext)
  return {
    translate: (key: string, cat = "_root") => translation[cat][key] || key,
    getTranslation: (cat: string) => translation[cat],
  }
}
