import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Card from "../components/card"
import Quote from "../components/quote"
import BlogLastThreePosts from "../components/blogLastThreePosts"
import ButtonLink from "../components/buttonLink"
import ProjectsList from "../components/projectsList"

import indexStyles from "../styles/pages/index.module.scss"

import profilePhoto from "../assets/images/profile_photo_transparent.png"

const IndexPage = () => {
  return (
    <Layout>
      <PageTitle>
        <h1>
          Developer creating <br /> <span>digital </span> solutions
        </h1>
      </PageTitle>
      <main className={indexStyles.body}>
        <Card
          to="/about"
          title1={`Nice to \nmeet you `}
          title2={`About me`}
          imgSrc={profilePhoto}
        />
        <Quote>
          By designing accessible interfaces, I make digital products
          <span> usable for everyone.</span>
        </Quote>
        <ProjectsList />
        <section>
          <Quote maxWidth="720px">
            <span> Occasionally I write</span> design related insights to help
            designers improve thier skills
          </Quote>
        </section>
        <section className={indexStyles.posts}>
          <BlogLastThreePosts />
          <div className={indexStyles.spacer} />
          <ButtonLink to="/work" />
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
