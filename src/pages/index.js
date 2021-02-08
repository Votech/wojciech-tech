import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Card from "../components/card"
import Quote from "../components/quote"
import BlogLastThreePosts from "../components/blogLastThreePosts"
import ButtonLink from "../components/buttonLink"

import indexStyles from "../styles/pages/index.module.scss"

import facebookMacBook from "../assets/images/facebook_macbook.png"
import foodieIphone from "../assets/images/iphone_foodie.png"
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
        <Card
          primary
          title1={`Social web app \nlike a facebook`}
          title2={`Friend Book`}
          backgroundImageSrc={facebookMacBook}
        />
        <Card
          secondary
          title1={`Crwn clothing`}
          title2={`e-commerce`}
          backgroundImageSrc="https://uploads-ssl.webflow.com/5fe8ce03305f8608daeabeb2/5fec78254df42885c7959010_hvc-app-hero%402x.png"
        />
        <Card
          primary
          title1={`Foodie`}
          title2={`Cooking portal`}
          backgroundImageSrc={foodieIphone}
        />
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
