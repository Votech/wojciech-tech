import React, { useState } from "react"

import { Link } from "gatsby"

import navbarStyles from "../styles/components/navbar.module.scss"

const Navbar = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav className={className}>
      <ul className={navbarStyles.list}>
        <li>
          <Link
            to="/work"
            activeClassName={!isHovered ? navbarStyles.active : null}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Work</p>
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            activeClassName={!isHovered ? navbarStyles.active : null}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            activeClassName={!isHovered ? navbarStyles.active : null}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Blog</p>
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            activeClassName={!isHovered ? navbarStyles.active : null}
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
