import React from "react"

import { Link } from "gatsby"

import { useLocation } from "@reach/router"

import Underline from "../components/underline"

import sidebarDrawerStyles from "../styles/components/sidebarDrawer.module.scss"

const SidebarDrawer = ({ isSidebarOpen }) => {
  const location = useLocation()
  const { pathname } = location

  const sidebarOpen = isSidebarOpen
    ? sidebarDrawerStyles.open
    : sidebarDrawerStyles.close
  return (
    <nav className={`${sidebarDrawerStyles.sidebarDrawer} ${sidebarOpen}`}>
      <Underline>
        <Link to="/" activeClassName={sidebarDrawerStyles.active}>
          <h1 className={`${sidebarDrawerStyles.headline}`}>Home</h1>
          <div className={`${sidebarDrawerStyles.description}`}>
            <p>{pathname === "/" ? "You are here" : "Back to basics"}</p>
          </div>
        </Link>
      </Underline>

      <Underline>
        <Link to="/work" activeClassName={sidebarDrawerStyles.active}>
          <h1 className={`${sidebarDrawerStyles.headline}`}>Work</h1>
          <div className={`${sidebarDrawerStyles.description}`}>
            <p>{pathname === "/work" ? "You are here" : "My portfolio"}</p>
          </div>
        </Link>
      </Underline>

      <Underline>
        <Link to="/about" activeClassName={sidebarDrawerStyles.active}>
          <h1 className={`${sidebarDrawerStyles.headline}`}>About</h1>
          <div className={`${sidebarDrawerStyles.description}`}>
            <p>{pathname === "/about" ? "You are here" : "Know me better"}</p>
          </div>
        </Link>
      </Underline>

      <Underline>
        <Link to="/blog" activeClassName={sidebarDrawerStyles.active}>
          <h1 className={`${sidebarDrawerStyles.headline}`}>Blog</h1>
          <div className={`${sidebarDrawerStyles.description}`}>
            <p>{pathname === "/blog" ? "You are here" : "My writing"}</p>
          </div>
        </Link>
      </Underline>

      <Underline>
        <Link to="/contact" activeClassName={sidebarDrawerStyles.active}>
          <h1 className={`${sidebarDrawerStyles.headline}`}>Contact</h1>
          <div className={`${sidebarDrawerStyles.description}`}>
            <p>{pathname === "/contact" ? "You are here" : "Let's connect"}</p>
          </div>
        </Link>
      </Underline>
    </nav>
  )
}

export default SidebarDrawer
