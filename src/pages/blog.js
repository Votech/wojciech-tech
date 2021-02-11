import React from 'react';

import Layout from '../components/layout';
import BlogList from '../components/blogList';
import Head from '../components/head';
import PageContainer from '../components/pageContainer';
import PageTitle from '../components/pageTitle';

const BlogPage = () => {
  return (
    <Layout>
      <Head title='Blog' />
      <PageTitle maxWidth='660px'>
        <h1>
          <span>Thouhts</span> <br />
          about design
        </h1>
      </PageTitle>

      <PageContainer>
        <BlogList />
      </PageContainer>
    </Layout>
  );
};

export default BlogPage;
