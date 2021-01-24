import React from "react"

import { Link } from "gatsby"

import navbarStyles from "../styles/components/navbar.module.scss"

const Navbar = () => {
  return (
    <nav>
      <ul className={navbarStyles.list}>
        <li>
          <Link to="/work" activeClassName={navbarStyles.activeNavItem}>
            <p>Work</p>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            <p>Blog</p>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
