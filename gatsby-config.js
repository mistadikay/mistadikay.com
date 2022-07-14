module.exports = {
  siteMetadata: {
    title: "mistadikay",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
          "gatsby-remark-copy-linked-files",
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-12099885-2",
        head: false,
        anonymize: true,
      },
    },
  ],
};
