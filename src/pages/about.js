import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import aboutStyles from "../styles/pages/about.module.scss";

import Img from "gatsby-image";
import Head from "../components/head";
import PageContainer from "../components/pageContainer";
import PageTitle from "../components/pageTitle";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Head title="About" />
      <PageTitle>
        <h1>
          <span>About</span> me
        </h1>
      </PageTitle>

      <PageContainer>
        <div className={aboutStyles.header}>
          <div className={aboutStyles.image_wrapper}>
            <Img
              className={aboutStyles.image}
              fluid={data.image.childImageSharp.fluid}
              alt="Wojciech Mietlinski"
              loading="lazy"
            />
            <h1 className={aboutStyles.headline}>Hello</h1>
          </div>
        </div>
        <div className={aboutStyles.container}>
          <p className={aboutStyles.story}>
            My name is Wojciech and I'm a Frontend Developer. Most of my time I
            spend working with ReactJS and it's ecosystem. I'm developing
            interactive websites and web applications. On the side I help
            companies to exist in the digital market. After hours I'm working on
            my side projects.
            <br />
            <br />
            By developing blazing fast, accessible websites, I make products
            usable for everyone.
            <br />
            <br />
            In my spare time I read philosophy books, I enjoy some strategy
            games, good music, and some quality time downtown.
          </p>
        </div>
      </PageContainer>
    </Layout>
  );
};

export const query = graphql`
  query {
    image: file(
      relativePath: { eq: "assets/images/profile_photo_transparent.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
