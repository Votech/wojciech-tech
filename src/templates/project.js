import React from "react"
import { graphql } from "gatsby"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from "../components/layout"
import ButtonLink from "../components/buttonLink"
import Head from "../components/head"
import PageContainer from "../components/pageContainer"

import projectStyles from "../styles/templates/project.module.scss"

export const query = graphql`
  query SingleContentFulProjectData($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      id
      title
      title2
      bgColor
      titleColor
      slug
      publishedDate(formatString: "MMM D YYYY")
      image {
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

const Project = props => {
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

        return (
          <img
            src={url}
            alt={title}
            className={projectStyles.bodyImage}
            loading="lazy"
          />
        )
      },
    },
    renderText: text => {
      return text.split("\n").reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

  const {
    contentfulProject: {
      title,
      title2,
      bgColor,
      titleColor,
      image: {
        file: { url, fileName },
      },
      body: { raw, references },
    },
  } = props.data

  // parsing the json  :
  const rawProjectObject = JSON.parse(raw)

  return (
    <Layout>
      <Head title={title} />
      <article className={projectStyles.article}>
        <header
          className={projectStyles.header}
          style={{ backgroundColor: `${bgColor}` }}
        >
          <div
            className={projectStyles.titles}
            style={{ color: `${titleColor}` }}
          >
            <h1 className={projectStyles.headline1}>{title2}</h1>
            <h2 className={projectStyles.headline2}>{title}</h2>
          </div>
          <img src={url} alt={fileName} className={projectStyles.image} />
        </header>
        <section className={projectStyles.body}>
          {documentToReactComponents(rawProjectObject, options)}
        </section>
        <footer className={projectStyles.footer}>
          <ButtonLink to="/work">See more projects</ButtonLink>
        </footer>
      </article>
    </Layout>
  )
}

export default Project
