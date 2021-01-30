import React from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import Navbar from "./navbar"
import BurgerButton from "./burgerButton"

import headerStyles from "../styles/components/header.module.scss"

const Header = ({ isSidebarOpen, sidebarHandler }) => {
  return (
    <header id={headerStyles.header}>
      <AniLink id={headerStyles.logo} to="/" cover direction="up" bg="#BBBBBB">
        Wojciech Mietlinski
      </AniLink>
      <Navbar className={headerStyles.navbar} />
      <BurgerButton
        onClick={() => sidebarHandler()}
        isSidebarOpen={isSidebarOpen}
      />
    </header>
  )
}

export default Header
