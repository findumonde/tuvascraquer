import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO: React.FC = () => {
  const {
    site: { siteMetadata: data },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          locale
          keywords
          siteUrl
        }
      }
    }
  `)

  const htmlAttr = {
    lang: data.locale.substr(0, 2),
  }

  return (
    <Helmet htmlAttributes={htmlAttr}>
      <title>{data.title}</title>
      <meta property="og:title" content={data.title} />
      <meta name="description" property="og:description" content={data.description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="keywords" content={data.keywords.join(", ")} />
      <meta property="og:locale" content={data.locale} />
      <meta property="og:site_name" content={data.title} />
      <meta property="og:url" content={data.siteUrl} />
      <meta property="og:image" content={`${data.siteUrl}/virus.png`} />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="1024" />
    </Helmet>
  )
}

export default SEO
