/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `jennydevs.github.io`,
    siteUrl: `https://jennydevs.github.io`
  },
  plugins: [
    "gatsby-plugin-sitemap", 
    "gatsby-plugin-mdx", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-image", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "pages",
        "path": "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
          }
        ]
      }
    }
  ],
  trailingSlash: "ignore"
};