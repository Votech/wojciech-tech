import BlogLastThreePosts from '../components/blogLastThreePosts';
import ButtonLink from '../components/buttonLink';
import Card from '../components/card';
import Head from '../components/head';
import Layout from '../components/layout';
import PageTitle from '../components/pageTitle';
import ProjectsList from '../components/projectsList';
import Quote from '../components/quote';
import React from 'react';
import { graphql } from 'gatsby';
import indexStyles from '../styles/pages/index.module.scss';
import profilePhoto from '../assets/images/profile_photo_transparent.png';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Head title='Home' />
      <PageTitle>
        <h1>
          Developer creating <br /> <span>digital </span> products
        </h1>
      </PageTitle>
      <main className={indexStyles.body}>
        <Card
          profile
          to='/about'
          title1={`Nice to \nmeet you `}
          title2={`About me`}
          data={data}
        />

        <Quote maxWidth='770px'>
          I am developer with deep passion for creating software for the web
          <span> usable for everyone</span>.
        </Quote>

        <ProjectsList />

        <Quote maxWidth='770px'>
          <span> Occasionally I write</span> code related articles for other
          people to help them improve their skills<span>.</span>
        </Quote>

        <section className={indexStyles.posts}>
          <BlogLastThreePosts />
          <div className={indexStyles.spacer} />
          <ButtonLink to='/blog'>Show all stories</ButtonLink>
        </section>
      </main>
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

export default IndexPage;
