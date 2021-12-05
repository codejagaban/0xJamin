module.exports = {
  siteMetadata: {
    title: `Trust Jamin Okpukoro`,
    description: `Hi, I'm Trust Jamin Okpukoro a Frontend Developer and a JavaScript Engineer passionate about making the web easily accessible for everyone. I love building web products, here you'll find some of my previous projects and some information about me.`,
    author: `@tsjamin`,
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
        short_name: `tsjamin`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`,`/about/`,`/works/`, `/contact`],
      },
    },
    `gatsby-plugin-root-import`

  ],
}
