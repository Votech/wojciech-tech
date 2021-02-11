import { graphql, useStaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';
import React from 'react';

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />;
};

export default Head;
