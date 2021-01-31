import React, { useState } from "react"

import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"
import Backdrop from "../components/backdrop"
import SidebarDrawer from "../components/sidebarDrawer"

import "../styles/pages/index.scss"
import layoutStyles from "../styles/components/layout.module.scss"
const Layout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  const sidebarHandler = () => {
    setSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={layoutStyles.container}>
      {isSidebarOpen ? <Backdrop onClick={() => sidebarHandler()} /> : null}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        sidebarHandler={() => sidebarHandler()}
      />
      <SidebarDrawer
        isSidebarOpen={isSidebarOpen}
        sidebarHandler={() => sidebarHandler()}
      />

      <div className={layoutStyles.main}>
        <Header
          isSidebarOpen={isSidebarOpen}
          sidebarHandler={() => sidebarHandler()}
        />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
