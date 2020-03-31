require("dotenv").config()

if (!process.env.GATSBY_LANG) {
  throw new Error("Env var LANG not found...")
}

// we need these in the browser for Bugsnag:
process.env.GATSBY_DEPLOY_URL = process.env.DEPLOY_URL || "local" // from Netlify
process.env.GATSBY_RELEASE = process.env.COMMIT_REF || "local" // from Netlify
process.env.GATSBY_DEPLOY_DATE = new Date().toString()

module.exports = {
  siteMetadata: {
    title: `Tu vas craquer ?`,
    description: `Le quiz inutile (et donc indispensable) pour tester ta résistance au confinement`,
    locale: `fr_FR`,
    siteUrl: `https://tuvascraquer.fr`,
    keywords: ["coronavirus", "covid", "SARS-CoV-2", "fin du monde", "craquer", "confinement", "lockdown", "quiz"],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 50,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tu vas craquer ?`,
        short_name: `Tu vas craquer ?`,
        start_url: `/`,
        background_color: `#1B1A1A`,
        theme_color: `#1B1A1A`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV === "development",
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        allPageHeaders: ["Cache-Control: public, max-age=43200"], // 12-hour caching of html
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS,
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
  ],
}
