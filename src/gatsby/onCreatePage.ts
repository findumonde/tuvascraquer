import { GatsbyOnCreatePage } from "../gatsby"
import datas from "../data"
import translations from "../translation"

const lang = process.env.GATSBY_LANG
const onCreatePage: GatsbyOnCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (page.path === "/") {
    deletePage(page)
    createPage({
      ...page,
      context: {
        ...page.context,
        data: datas[lang],
        translation: translations[lang],
      },
    })
  }
}

export default onCreatePage
