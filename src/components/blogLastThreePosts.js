import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BlogGrid from "../components/blogGrid"
import BlogCard from "../components/blogCard"

const BlogLastThreePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(
        sort: { fields: publishedDate, order: DESC }
        limit: 3
      ) {
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
  `)

  return (
    <BlogGrid>
      {data.allContentfulBlogPost.edges.map((edge, index) => {
        console.log(edge.node)

        // destructing data from map above
        const { slug, title, publishedDate, articleImage, readTime } = edge.node

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
        )
      })}
    </BlogGrid>
  )
}

export default BlogLastThreePosts