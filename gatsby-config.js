module.exports = {
  siteMetadata: {
    title: `Trust Jamin Okpukoro`,
    description: `Hi, I'm Trust Jamin Okpukoro a Frontend Developer and a JavaScript Engineer passionate about making the web easily accessible for everyone.`,
    author: `@codekyd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
