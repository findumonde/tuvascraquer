import { GatsbyOnCreatePage } from "../gatsby"
import dataFr from "../data/fr"
import dataEn from "../data/en"
import tradFr from "../trads/fr"
import tradEn from "../trads/en"

const lang = process.env.GATSBY_LANG
const datas = {
  fr: dataFr,
  en: dataEn,
}
const trads = {
  fr: tradFr,
  en: tradEn,
}

const onCreatePage: GatsbyOnCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path === "/") {
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        data: datas[lang],
        trad: trads[lang],
      },
    })
  }
}

export default onCreatePage
