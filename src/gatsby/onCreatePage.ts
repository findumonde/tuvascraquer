import { GatsbyOnCreatePage } from "../gatsby"
import datas from "../data"
import trads from "../trads"

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
        trad: trads[lang],
      },
    })
  }
}

export default onCreatePage
