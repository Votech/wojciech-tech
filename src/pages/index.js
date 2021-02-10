import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Card from "../components/card"
import Quote from "../components/quote"
import BlogLastThreePosts from "../components/blogLastThreePosts"
import ButtonLink from "../components/buttonLink"
import ProjectsList from "../components/projectsList"
import Head from "../components/head"

import indexStyles from "../styles/pages/index.module.scss"

import profilePhoto from "../assets/images/profile_photo_transparent.jp2"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <PageTitle>
        <h1>
          Developer creating <br /> <span>digital </span> products
        </h1>
      </PageTitle>
      <main className={indexStyles.body}>
        <Card
          profile
          to="/about"
          title1={`Nice to \nmeet you `}
          title2={`About me`}
          imgSrc={profilePhoto}
        />
        <section>
          <Quote maxWidth="770px">
            I am developer with deep passion for creating software for the web
            <span> usable for everyone</span>.
          </Quote>
        </section>

        <ProjectsList />
        <section>
          <Quote maxWidth="770px">
            <span> Occasionally I write</span> code related articles for other
            people to help them improve their skills<span>.</span>
          </Quote>
        </section>
        <section className={indexStyles.posts}>
          <BlogLastThreePosts />
          <div className={indexStyles.spacer} />
          <ButtonLink to="/blog">Show all stories</ButtonLink>
        </section>
      </main>
    </Layout>
  )
}

export default IndexPage
