import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Card from "../components/card"
import PageContainer from "../components/pageContainer"

import facebookMacBook from "../assets/images/facebook_macbook.png"
import foodieIphone from "../assets/images/iphone_foodie.png"

const WorkPage = () => {
  return (
    <Layout>
      <PageTitle>
        <h1>
          Selected <span>work</span>
        </h1>
      </PageTitle>
      <PageContainer>
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
      </PageContainer>
    </Layout>
  )
}

export default WorkPage
