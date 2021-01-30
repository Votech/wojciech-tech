import React, { useState } from "react"

import AniLink from "gatsby-plugin-transition-link/AniLink"

import navbarStyles from "../styles/components/navbar.module.scss"

const Navbar = ({ className }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <nav className={className}>
      <ul className={navbarStyles.list}>
        <li>
          <AniLink
            cover
            direction="up"
            bg="#BBBBBB"
            to="/work"
            activeClassName={!isHovered ? navbarStyles.active : null}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Work</p>
          </AniLink>
        </li>
        <li>
          <AniLink
            cover
            direction="up"
            bg="#BBBBBB"
            to="/about"
            activeClassName={!isHovered ? navbarStyles.active : null}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>About</p>
          </AniLink>
        </li>
        <li>
          <AniLink
            cover
            direction="up"
            bg="#BBBBBB"
            to="/blog"
            activeClassName={!isHovered ? navbarStyles.active : null}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Blog</p>
          </AniLink>
        </li>
        <li>
          <AniLink
            cover
            direction="up"
            bg="#BBBBBB"
            to="/contact"
            activeClassName={!isHovered ? navbarStyles.active : null}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <p>Contact</p>
          </AniLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
