import React from 'react';

import ContactForm from '../components/contactForm';
import Head from '../components/head';
import Layout from '../components/layout';
import PageContainer from '../components/pageContainer';
import PageTitle from '../components/pageTitle';

const ContactPage = () => {
  return (
    <Layout>
      <Head title='Contact' />
      <PageContainer>
        <PageTitle>
          <h1>
            Get <span>in touch</span>
          </h1>
        </PageTitle>
      </PageContainer>
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
