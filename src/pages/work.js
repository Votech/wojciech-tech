import Head from '../components/head';
import Layout from '../components/layout';
import PageContainer from '../components/pageContainer';
import PageTitle from '../components/pageTitle';
import ProjectsList from '../components/projectsList';
import React from 'react';

const WorkPage = () => {
  return (
    <Layout>
      <Head title='Work' />
      <PageTitle>
        <h1>
          Selected <span>work</span>
        </h1>
      </PageTitle>
      <PageContainer>
        <ProjectsList />
      </PageContainer>
    </Layout>
  );
};

export default WorkPage;
