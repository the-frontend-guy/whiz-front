require("dotenv").config({  
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  pathPrefix: `/staging/whizwafture/`,
  // pathPrefix: '/',
  siteMetadata: {
    title: `Whizwafture`,
    description: `A creative web solution company | Mumbai`,
    author: `@whizwafture`,
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_API_URL,
        contentTypes: [
          "service-details",
          "service-child-details",
          "page",
        ],     
        singleTypes: [
          "home-data",
          "contact-us",
          "aboutus-data"
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-173545512-1",
        head: true
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fav-icon-48.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
