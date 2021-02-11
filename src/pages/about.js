import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

import aboutStyles from '../styles/pages/about.module.scss';

import Img from 'gatsby-image';
import Head from '../components/head';
import PageContainer from '../components/pageContainer';
import PageTitle from '../components/pageTitle';

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <Head title='About' />
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
              alt='Wojciech Mietlinski'
              loading='lazy'
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
