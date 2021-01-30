import React, { useState, useEffect } from "react"

import { useLocation } from "@reach/router"

import { RemoveScroll } from "react-remove-scroll"

import BurgerButton from "../components/burgerButton"

import sidebarStyles from "../styles/components/sidebar.module.scss"

const Sidebar = ({ isSidebarOpen, sidebarHandler }) => {
  const [legend, setLegend] = useState("")
  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    if (isSidebarOpen === true) {
      setLegend("CLICK TO CLOSE")
    } else if (pathname === "/") {
      setTimeout(() => setLegend(">  HELLO WORLD"), 100)
    } else if (pathname === "/work") {
      setTimeout(() => setLegend("MY WORK"), 100)
    } else if (pathname === "/about") {
      setTimeout(() => setLegend("ABOUT ME"), 100)
    } else if (pathname === "/blog") {
      setTimeout(() => setLegend("BLOG"), 100)
    } else if (pathname === "/contact") {
      setTimeout(() => setLegend("CONTACT"), 100)
    }
  }, [isSidebarOpen, pathname])

  return (
    <div className={sidebarStyles.sidebar} onClick={() => sidebarHandler()}>
      {isSidebarOpen ? <RemoveScroll /> : null}
      <BurgerButton small isSidebarOpen={isSidebarOpen} />
      <div className={sidebarStyles.legend}>
        <p>{legend}</p>
      </div>
    </div>
  )
}

export default Sidebar
