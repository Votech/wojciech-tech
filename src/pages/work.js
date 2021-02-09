import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import ProjectsList from "../components/projectsList"
import PageContainer from "../components/pageContainer"

const WorkPage = () => {
  return (
    <Layout>
      <PageTitle>
        <h1>
          Selected <span>work</span>
        </h1>
      </PageTitle>
      <PageContainer>
        <ProjectsList />
      </PageContainer>
    </Layout>
  )
}

export default WorkPage
