module.exports = {
  siteMetadata: {
    title: "Trust Jamin",
    titleTemplate: "%s | Trust Jamin Okpukoro",
    siteUrl: "https://www.jagaban.dev", // No trailing slash allowed!
    description:
      "Hi, I'm a JavaScript Engineer devoted to making the web easily accessible. here you'll find some of my previous projects and pieces of information about me.",
    author: "@codejagaban",
    url: "https://www.jagaban.dev", // No trailing slash allowed!
    image: "/static/banner.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@codejagaban",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Trust Jamin Okpukoro",
        short_name: "tsjamin",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/images/logo.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: ["/","/about/","/works/", "/contact"],
      },
    },
    "gatsby-plugin-root-import"

  ],
};
