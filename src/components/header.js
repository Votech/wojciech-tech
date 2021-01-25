import React from "react"

import { Link } from "gatsby"

import Navbar from "./navbar"

import headerStyles from "../styles/components/header.module.scss"

const Header = () => {
  return (
    <header id={headerStyles.header}>
      <Link id={headerStyles.logo} to="/">
        Wojciech Mietlinski
      </Link>
      <Navbar />
    </header>
  )
}

export default Header
