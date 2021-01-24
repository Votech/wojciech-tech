import React from "react"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

import "../styles/pages/index.scss"
import layoutStyles from "../styles/components/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={layoutStyles.container}>
      <Sidebar />
      <div className={layoutStyles.main}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
