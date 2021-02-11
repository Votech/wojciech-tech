import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import projectsListStyles from '../styles/components/projectsList.module.scss';

import Card from '../components/card';

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
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className={projectsListStyles.container}>
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
            fluid={image.fluid}
          />
        );
      })}
    </div>
  );
};

export default ProjectsList;
