import React from "react"

import { Link } from "gatsby"

import Navbar from "./navbar"
import BurgerButton from "./burgerButton"

import headerStyles from "../styles/components/header.module.scss"

const Header = ({ isSidebarOpen, sidebarHandler }) => {
  return (
    <header id={headerStyles.header}>
      <Link id={headerStyles.logo} to="/">
        Wojciech Mietlinski
      </Link>
      <Navbar className={headerStyles.navbar} />
      <BurgerButton
        onClick={() => sidebarHandler()}
        isSidebarOpen={isSidebarOpen}
      />
    </header>
  )
}

export default Header
