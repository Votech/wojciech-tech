import React from "react"
import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import PageContainer from "../components/pageContainer"

export const query = graphql`
  query SingleContentFulBlogData($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      articleLead
      readTime
      slug
      publishedDate(formatString: "MMM D, YYYY")
      articleImage {
        file {
          url
        }
      }
      body {
        raw
        references {
          contentful_id
          title
          file {
            url
            fileName
          }
        }
      }
    }
  }
`

const Blog = props => {
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const imageID = node.data.target.sys.id
        const {
          file: { url },
          title,
        } = references.find(({ contentful_id: id }) => {
          return id === imageID
        })

        return <img src={url} alt={title} />
      },
    },
  }

  // destructing from props.data
  const {
    contentfulBlogPost: {
      title,
      publishedDate,
      articleLead,
      readTime,
      articleImage: {
        file: { url, fileName },
      },
      body: { raw, references },
    },
  } = props.data

  // parsing the json  :
  const rawBlogPostObject = JSON.parse(raw)

  return (
    <Layout>
      <PageContainer>
        <p>{`${publishedDate} ${readTime} read`}</p>
        <h1>{title}</h1>
        <h3>{articleLead}</h3>
        <img src={url} alt={fileName} />
        {documentToReactComponents(rawBlogPostObject, options)}
        {console.log(url)}
      </PageContainer>
    </Layout>
  )
}

export default Blog
