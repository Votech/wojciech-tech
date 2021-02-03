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
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
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
          {data.allMarkdownRemark.edges.map((edge, index) => {
            return (
              <BlogCard
                to={`/blog/${edge.node.fields.slug}`}
                title={edge.node.frontmatter.title}
                date={edge.node.frontmatter.date}
              />
            )
          })}
          <BlogCard
            title="hello worldhello worldhello world"
            date="12-12-2019"
          />
          <BlogCard
            title="hello worldhello worldhello world"
            date="12-12-2019"
          />
          <BlogCard
            title="hello worldhello worldhello world"
            date="12-12-2019"
          />
          <BlogCard
            title="hello worldhello worldhello world"
            date="12-12-2019"
          />
          <BlogCard
            title="hello worldhello worldhello world"
            date="12-12-2019"
          />
          <BlogCard
            title="hello worldhello worldhello world"
            date="12-12-2019"
          />
        </div>
      </PageContainer>
    </Layout>
  )
}

export default BlogPage
