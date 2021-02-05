import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

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
            return (
              <BlogCard
                key={index}
                to={`/blog/${edge.node.slug}`}
                title={edge.node.title}
                date={edge.node.publishedDate}
              />
            )
          })}
        </div>
      </PageContainer>
    </Layout>
  )
}

export default BlogPage
