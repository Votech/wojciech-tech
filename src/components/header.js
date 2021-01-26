import React from "react"

import { Link } from "gatsby"

import Navbar from "./navbar"
import BurgerButton from "./burgerButton"

import headerStyles from "../styles/components/header.module.scss"

const Header = () => {
  return (
    <header id={headerStyles.header}>
      <Link id={headerStyles.logo} to="/">
        Wojciech Mietlinski
      </Link>
      <Navbar className={headerStyles.navbar} />
      <BurgerButton />
    </header>
  )
}

export default Header
