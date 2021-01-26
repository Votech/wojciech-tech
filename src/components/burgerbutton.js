import React from "react"

import burgerButtonStyles from "../styles/components/burgerbutton.module.scss"

const BurgerButton = ({ className, small }) => {
  return (
    <div
      className={`${className} ${
        small
          ? burgerButtonStyles.burgerButtonSmall
          : burgerButtonStyles.burgerButton
      }`}
    >
      <div className={burgerButtonStyles.line} />
      <div className={burgerButtonStyles.line} />
    </div>
  )
}

export default BurgerButton
