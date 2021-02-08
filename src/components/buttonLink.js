import React from "react"
import { Link } from "gatsby"

import Underline from "../components/underline"

import buttonLinkStyles from "../styles/components/buttonLink.module.scss"

const ButtonLink = ({ to }) => {
  return (
    <Link to={to}>
      <div className={buttonLinkStyles.container}>
        <Underline>
          <p>Show all stories</p>
        </Underline>
      </div>
    </Link>
  )
}

export default ButtonLink
