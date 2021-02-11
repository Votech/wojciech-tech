import { graphql, useStaticQuery } from 'gatsby';

import BlogCard from '../components/blogCard';
import BlogGrid from '../components/blogGrid';
import React from 'react';

const BlogList = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMM D, YYYY")
            readTime
            articleImage {
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
    <BlogGrid>
      {data.allContentfulBlogPost.edges.map((edge, index) => {
        // destructing data from map above
        const {
          slug,
          title,
          publishedDate,
          articleImage,
          readTime,
        } = edge.node;

        return (
          <BlogCard
            key={index}
            to={`/blog/${slug}`}
            title={title}
            date={publishedDate}
            imgSrc={articleImage && articleImage.file.url}
            imgAlt={articleImage && articleImage.file.fileName}
            readTime={readTime}
          />
        );
      })}
    </BlogGrid>
  );
};

export default BlogList;
