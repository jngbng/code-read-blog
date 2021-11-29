module.exports = {
  siteMetadata: {
    title: `Jeongbong Seo`,
    author: `Jeongbong Seo`,
    description: `Tech blogs`,
    siteUrl: `https://bgpworks.com`,
    social: [
      {
        name: `GitHub`,
        url: `https://github.com/jngbng`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        mdx: false,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        rehypePlugins: [require("rehype-waves")],
      },
    },
    `gatsby-theme-waves`,
  ],
};
