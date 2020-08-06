module.exports = {
  siteMetadata: {
    title: "LGM",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "LGM",
        start_url: "/",
        icon: "src/images/black-hexagon.png",
      },
    },
  ],
};
