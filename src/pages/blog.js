import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              slug
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <Layout>
      <PageTitle maxWidth="660px">
        <h1>
          <span>Thouhts</span> <br />
          about design
        </h1>
      </PageTitle>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogPage
