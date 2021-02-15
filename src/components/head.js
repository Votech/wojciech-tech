import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Helmet } from 'react-helmet';

import thumbnail from '../assets/images/thumbnail.jpeg';

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
  return (
    <Helmet
      title={`${title} | ${data.site.siteMetadata.title}`}
      htmlAttributes={{
        lang: 'en',
      }}
    >
      <link rel='image_src' href={thumbnail} />
    </Helmet>
  );
};

export default Head;
