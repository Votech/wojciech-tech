import { graphql, useStaticQuery } from 'gatsby';

import Card from '../components/card';
import React from 'react';

const ProjectsList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulProject(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            title2
            slug
            publishedDate(formatString: "MMM D, YYYY")
            image {
              file {
                url
                fileName
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div
      style={{
        width: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {data.allContentfulProject.edges.map((edge, index) => {
        // destructing data from map above
        const { slug, title, title2, image } = edge.node;

        return (
          <Card
            primary={index % 2 === 0}
            secondary={index % 2 === 1}
            to={`/project/${slug}`}
            key={`${index}${slug}`}
            title1={title}
            title2={title2}
            backgroundImageSrc={image.file.url}
          />
        );
      })}
    </div>
  );
};

export default ProjectsList;
