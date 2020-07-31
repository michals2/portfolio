module.exports = {
  siteMetadata: {
    title: "LGM",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
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
