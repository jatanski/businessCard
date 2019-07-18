module.exports = {
  siteMetadata: {
    title: `Tanski Portfolio Page`,
    description: `My business card wrote in gatsby and sass.`,
    author: `Jakub Tanski`,
    image: "/my-face.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tanski-portfolio-page`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#111`,
        display: `minimal-ui`,
        icon: "src/images/favicon.png",
        // This path is relative to the root of the site.
      },
    },
  ],
}
