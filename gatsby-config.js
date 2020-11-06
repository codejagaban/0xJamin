module.exports = {
  siteMetadata: {
    title: `Trust Jamin Okpukoro`,
    description: `Hi, I'm Trust Jamin Okpukoro a Frontend Developer and a JavaScript Engineer passionate about making the web easily accessible for everyone.`,
    author: `@codekyd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Trust Jamin Okpukoro`,
        short_name: `codekyd`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/codekyd-dark.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
