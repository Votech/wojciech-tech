import React from "react"

import burgerButtonStyles from "../styles/components/burgerbutton.module.scss"

const BurgerButton = ({ small, isSidebarOpen, ...otherProps }) => {
  const burgerButtonStyle = small
    ? burgerButtonStyles.burgerButtonSmall
    : burgerButtonStyles.burgerButton

  const close = isSidebarOpen ? burgerButtonStyles.close : null

  return (
    <div className={`${burgerButtonStyle} ${close}`} {...otherProps}>
      <div className={burgerButtonStyles.line} />
      <div className={burgerButtonStyles.line} />
    </div>
  )
}

export default BurgerButton
