import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import PageContainer from "../components/pageContainer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMM D, YYYY")
      body {
        raw
        references {
          ... on ContentfulAsset {
            file {
              url
            }
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = ""
        const url = console.log(node)
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <PageContainer>
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <p>{props.data.contentfulBlogPost.publishedDate}</p>
        {documentToReactComponents(
          JSON.parse(props.data.contentfulBlogPost.body.raw),
          options
        )}
        {console.log(props.data.contentfulBlogPost.body.references[0].file.url)}
      </PageContainer>
    </Layout>
  )
}

export default Blog
