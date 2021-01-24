import React from "react"

import { Link } from "gatsby"

import Navbar from "./navbar"

import headerStyles from "../styles/components/header.module.scss"

const Header = () => {
  return (
    <header id={headerStyles.header}>
      <div>
        <Link id={headerStyles.logo} to="/">
          Wojciech Mietlinski
        </Link>
        <Navbar />
      </div>
      <section className={headerStyles.title}>
        <h1>
          Developer creating <span>digital</span> products
        </h1>
      </section>
    </header>
  )
}

export default Header
