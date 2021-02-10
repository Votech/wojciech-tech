import React from "react"
import { Link } from "gatsby"

import Underline from "../components/underline"

import buttonLinkStyles from "../styles/components/buttonLink.module.scss"

const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <div className={buttonLinkStyles.container}>
        <Underline>
          <p>{children}</p>
        </Underline>
      </div>
    </Link>
  )
}

export default ButtonLink
