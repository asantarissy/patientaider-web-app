module.exports = {
  siteMetadata: {
    title: 'PatientAider',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-82052082-2',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xbvvg00rroa3`,
        accessToken: `65cb8df68f03a23c901de20bbc878395c6e1db8908ad454f6d857ff8bd6288d4`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'patientaider',
        start_url: '/',
        display: 'minimal-ui',
      },
    },
    'gatsby-transformer-remark',
  ],
};
