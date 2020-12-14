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
        path: `${__dirname}/src/writing`,
        name: `essays`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/projects`,
    //     name: `projects`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
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
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/writing`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          essays: require.resolve("./src/templates/blogTemplate.js"),
          projects: require.resolve("./src/templates/blogTemplate.js"),
          default: require.resolve("./src/templates/blogTemplate.js"),
        },
      },
    },
  ],
};
