import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import PageContainer from "../components/pageContainer"
import BlogList from "../components/blogList"

const BlogPage = () => {
  return (
    <Layout>
      <PageTitle maxWidth="660px">
        <h1>
          <span>Thouhts</span> <br />
          about design
        </h1>
      </PageTitle>

      <PageContainer>
        <BlogList />
      </PageContainer>
    </Layout>
  )
}

export default BlogPage
