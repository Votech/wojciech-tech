import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import PageContainer from "../components/pageContainer"

import aboutStyles from "../styles/pages/about.module.scss"

import profilePhoto from "../assets/images/profile_photo_transparent.png"

const AboutPage = () => {
  return (
    <Layout>
      <PageTitle>
        <h1>
          <span>About</span> me
        </h1>
      </PageTitle>

      <PageContainer>
        <div className={aboutStyles.header}>
          <div className={aboutStyles.image_wrapper}>
            <img
              className={aboutStyles.image}
              src={profilePhoto}
              alt="Wojciech Mietlinski"
            />
            <h1 className={aboutStyles.headline}>Hello</h1>
          </div>
        </div>
        <div className={aboutStyles.container}>
          <p className={aboutStyles.story}>
            My name is Semih, and I’m a digital designer from the Netherlands. I
            am currently working at Amsterdam-based design agency Unc Inc
            creating digital experiences for brands that want to make the world
            more sustainable.
            <br />
            <br />
            By designing accessible interfaces, I make digital products usable
            for everyone.
            <br />
            <br />
            In my spare time, I write about design and help other designers
            improve their skills by sharing UI & UX related insights. Besides
            that, I enjoy some deep sci-fi movies (Interstellar is my all-time
            favorite), good music, and some quality time with my newborn son.
          </p>
        </div>
      </PageContainer>
    </Layout>
  )
}

export default AboutPage
