import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Card from "../components/card"

import indexStyles from "../styles/pages/index.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <PageTitle />
      <section className={indexStyles.body}>
        <Card
          title1={`Nice to \nmeet you `}
          title2={`About me`}
          backgroundImageSrc="https://uploads-ssl.webflow.com/5fe8ce03305f8608daeabeb2/6009ebff34c834d91241413a_photo-home%402x.png"
        />
        <Card
          primary
          title1={`Friend Book `}
          title2={`Social web app`}
          backgroundImageSrc="https://uploads-ssl.webflow.com/5fe8ce03305f8608daeabeb2/5fec9c545ceaed50d6d84f58_hvc-website-hero%402x.png"
        />
        <Card secondary title1={`Crwn clothing`} title2={`e-commerce`} />
        <Card primary title1={`Foodie`} title2={`Cooking portal`} />
      </section>
    </Layout>
  )
}

export default IndexPage
