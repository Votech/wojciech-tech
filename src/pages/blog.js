import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import BlogCard from "../components/blogCard"
import PageContainer from "../components/pageContainer"

import blogStyles from "../styles/pages/blog.module.scss"

const BlogPage = () => {
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
  `)

  return (
    <Layout>
      <PageTitle maxWidth="660px">
        <h1>
          <span>Thouhts</span> <br />
          about design
        </h1>
      </PageTitle>

      <PageContainer>
        <div className={blogStyles.grid}>
          {data.allContentfulBlogPost.edges.map((edge, index) => {
            console.log(edge.node)

            // destructing data from map above
            const {
              slug,
              title,
              publishedDate,
              articleImage,
              readTime,
            } = edge.node

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
        </div>
      </PageContainer>
    </Layout>
  )
}

export default BlogPage
