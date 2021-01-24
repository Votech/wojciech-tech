import React from "react"

import burgerButtonStyles from "../styles/components/burgerbutton.module.scss"

const BurgerButton = () => {
  return (
    <div>
      <div className={burgerButtonStyles.line} />
      <div className={burgerButtonStyles.line} />
    </div>
  )
}

export default BurgerButton
