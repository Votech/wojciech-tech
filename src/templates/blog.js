import React from "react"
import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import blogStyles from "../styles/templates/blog.module.scss"

import Layout from "../components/layout"
import PageContainer from "../components/pageContainer"
import BlogLastThreePosts from "../components/blogLastThreePosts"

export const query = graphql`
  query SingleContentFulBlogData($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      id
      title
      articleLead
      readTime
      slug
      publishedDate(formatString: "MMM D YYYY")
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
        <section className={blogStyles.header}>
          <div className={blogStyles.wrapper}>
            <div className={blogStyles.date}>
              <p>{publishedDate}</p>
              <p className={blogStyles.dot}>•</p>
              <p>{`${readTime} read`}</p>
            </div>
            <h1 className={blogStyles.headline}>{title}</h1>
            <h4 className={blogStyles.headline2}>{articleLead}</h4>
          </div>
        </section>
        <section className={blogStyles.image}>
          <img loading="lazy" src={url} alt={fileName} />
        </section>
        <section className={blogStyles.article}>
          {documentToReactComponents(rawBlogPostObject, options)}
        </section>
        <section className={blogStyles.recommended}>
          <h3 className={blogStyles.headline2}>Continue reading</h3>
          <BlogLastThreePosts />
        </section>
      </PageContainer>
    </Layout>
  )
}

export default Blog
