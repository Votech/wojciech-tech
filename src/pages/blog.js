import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"

const BlogPage = () => {
  return (
    <Layout>
      <PageTitle maxWidth="660px">
        <h1>
          <span>Thouhts</span> <br />
          about design
        </h1>
      </PageTitle>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
    </Layout>
  )
}

export default BlogPage
