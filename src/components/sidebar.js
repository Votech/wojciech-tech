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
      setLegend(">  HELLO WORLD")
    } else if (pathname === "/work") {
      setLegend("MY WORK")
    } else if (pathname === "/about") {
      setLegend("ABOUT ME")
    } else if (pathname === "/blog") {
      setLegend("BLOG")
    } else if (pathname === "/contact") {
      setLegend("CONTACT")
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
