import React from "react"
import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import blogStyles from "../styles/templates/blog.module.scss"

import Layout from "../components/layout"
import Head from "../components/head"
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

        return <img src={url} alt={title} loading="lazy" />
      },
    },
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
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
      <Head title={title} />
      <PageContainer>
        <article>
          <header className={blogStyles.header}>
            <div className={blogStyles.wrapper}>
              <div className={blogStyles.date}>
                <p>{publishedDate}</p>
                <p className={blogStyles.dot}>•</p>
                <p>{`${readTime} read`}</p>
              </div>
              <h1 className={blogStyles.headline}>{title}</h1>
              <h4 className={blogStyles.headline2}>{articleLead}</h4>
            </div>
          </header>
          <div className={blogStyles.image}>
            <img loading="lazy" src={url} alt={fileName} />
          </div>
          <div className={blogStyles.main}>
            {documentToReactComponents(rawBlogPostObject, options)}
          </div>
          <aside className={blogStyles.recommended}>
            <h3 className={blogStyles.headline2}>Continue reading</h3>
            <BlogLastThreePosts />
          </aside>
        </article>
      </PageContainer>
    </Layout>
  )
}

export default Blog
