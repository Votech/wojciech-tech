import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

import indexStyles from "../styles/pages/index.module.scss";

import Head from "../components/head";
import PageTitle from "../components/pageTitle";
import PageContainer from "../components/pageContainer";
import Card from "../components/card";
import Quote from "../components/quote";
import ProjectsList from "../components/projectsList";
// import BlogLastThreePosts from '../components/blogLastThreePosts';
import ButtonLink from "../components/buttonLink";

const IndexPage = ({ data }) => {
  // Ugly jsx structure is due to gatsby css pre proccesing issue, this structure is workaroud, so styles are displayed correctly more about the topic here https://github.com/gatsbyjs/gatsby/issues/9733
  return (
    <Layout>
      <Head title="Home" />
      <PageTitle>
        <h1>
          Developer creating <br /> <span>digital </span> products
        </h1>
      </PageTitle>
      <PageContainer>
        <Card
          profile
          to="/about"
          title1={`Nice to \nmeet you `}
          title2={`About me`}
          data={data}
        />
        <section>
          <Quote maxWidth="770px">
            I am developer with deep passion for creating software for the web
            <span> usable for everyone</span>.
          </Quote>
        </section>
        <ProjectsList />
        {/* <section className={indexStyles.posts}>
          <Quote maxWidth="770px">
            <span> Occasionally I write</span> code related articles for other
            people to help them improve their skills<span>.</span>
          </Quote>
          <BlogLastThreePosts />
          <ButtonLink className={indexStyles.buttonStories} to="/blog">
            Show all stories
          </ButtonLink>
        </section> */}
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

export default IndexPage;
