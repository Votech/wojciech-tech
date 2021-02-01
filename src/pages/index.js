import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Card from "../components/card"
import Quote from "../components/quote"

import indexStyles from "../styles/pages/index.module.scss"
import facebookMacBook from "../assets/images/facebook_macbook.png"
import foodieIphone from "../assets/images/iphone_foodie.png"

const IndexPage = () => {
  return (
    <Layout>
      <PageTitle />
      <section className={indexStyles.body}>
        <Card
          to="/about"
          title1={`Nice to \nmeet you `}
          title2={`About me`}
          backgroundImageSrc="https://uploads-ssl.webflow.com/5fe8ce03305f8608daeabeb2/6009ebff34c834d91241413a_photo-home%402x.png"
        />
        <Quote
          grayText="By designing accessible interfaces, I make digital products"
          blackText=" usable for everyone."
        />
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
        <Quote
          grayText="Occasionally I write design related insights to help designers"
          blackText=" improve their skills."
          maxWidth="720px"
        />
      </section>
    </Layout>
  )
}

export default IndexPage
