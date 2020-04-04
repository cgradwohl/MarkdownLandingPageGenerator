module.exports = {
  siteMetadata: {
    title: 'Markdown Landing Page Generator',
    description: 'Use markdown to create and deploy an html landing page.',
    author: 'Chris Gradwohl',
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'MDLAPI',
        // Field under which the remote schema will be accessible.
        // You'll use this in your Gatsby query
        fieldName: 'mdlapi',
        // Url to query from
        url: 'https://thfzdb5ajf.execute-api.us-east-1.amazonaws.com/dev/graphql',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
