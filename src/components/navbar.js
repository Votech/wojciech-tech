import React, { useState } from "react"

import { Link } from "gatsby"

import { useLocation } from "@reach/router"

import navbarStyles from "../styles/components/navbar.module.scss"

const Navbar = () => {
  const location = useLocation()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav>
      <ul className={navbarStyles.list}>
        {console.log(location.pathname)}
        <li>
          <Link
            to="/work"
            activeClassName={!isHovered ? navbarStyles.active : null}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {console.log(isHovered)}
            <p>Work</p>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeClassName={navbarStyles.active}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            activeClassName={navbarStyles.active}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Blog</p>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            activeClassName={navbarStyles.active}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
