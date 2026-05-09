/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `jennydevs.github.io`,
    siteUrl: `https://jennydevs.github.io`
  },
  plugins: [ 
    "gatsby-transformer-remark", 
    "gatsby-plugin-image", 
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-remark-images",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "project_images",
        "path": "./src/pages/content/projects/images/",
      },
      __key: "project_images",
    },
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
        plugins: [{ 
            resolve: "gatsby-remark-images",
            options: {
                "backgroundColor": "none",
                "disableBgImage": true,
                "disableBgImageOnAlpha": true,
            }
         }]
      }
    }
  ],
  trailingSlash: "never"
};