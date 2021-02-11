/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Wojciech Mietlinski`,
    Description: `Portfolio website and blog`,
    author: `Wojciech Mietlinski`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOrginal: false,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wojciech Mietlinski Portfolio Website`,
        short_name: `Wojciech Mietlinski`,
        description: `Portfolio website and blog of Wojciech Mietlinski. Main topics: web development, fronted, technology of the web, software development, coding.`,
        lang: `en`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#bbb`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
  ],
};
