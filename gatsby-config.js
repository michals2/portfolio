module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: "src/posts",
        assetPath: "src/assets",
      },
    },
    `gatsby-theme-blog-darkmode`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {},
        failOnError: true,
      },
    },
    `gatsby-plugin-use-query-params`,
    {
      // Add paths to pages that set query params here.
      // This is a workaround: https://github.com/alexluong/gatsby-packages/issues/41
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/search/*`] },
    },
  ],
  siteMetadata: {
    title: `Luke Michals`,
    author: `Luke Michals`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lukemichals`,
      },
      {
        name: `github`,
        url: `https://github.com/michals2/`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/luke-michals/`,
      },
    ],
  },
}
