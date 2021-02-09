import React from "react"
import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import blogStyles from "../styles/templates/blog.module.scss"

import Layout from "../components/layout"
import PageContainer from "../components/pageContainer"

// export const query = graphql`
//   query SingleContentFulBlogData($slug: String!) {
//     contentfulProject(slug: { eq: $slug }) {
//       id
//       title
//       articleLead
//       readTime
//       slug
//       publishedDate(formatString: "MMM D YYYY")
//       articleImage {
//         file {
//           url
//         }
//       }
//       body {
//         raw
//         references {
//           contentful_id
//           title
//           file {
//             url
//             fileName
//           }
//         }
//       }
//     }
//   }
// `

const Project = props => {
  return (
    <Layout>
      <PageContainer>
        <h1>hello!</h1>
      </PageContainer>
    </Layout>
  )
}

export default Project
