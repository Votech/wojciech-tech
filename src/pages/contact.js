import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import PageContainer from "../components/pageContainer"
import ContactForm from "../components/contactForm"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <PageContainer>
        <PageTitle>
          <h1>
            Get <span>in touch</span>
          </h1>
        </PageTitle>
      </PageContainer>
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
