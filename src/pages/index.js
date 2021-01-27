import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

const IndexPage = () => {
  return (
    <Layout>
      <PageTitle />
      <h1>Hello.</h1>
      <h2>I'm Wojciech, a web developer.</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
