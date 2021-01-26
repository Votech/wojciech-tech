import React from "react"

import BurgerButton from "../components/burgerButton"

import sidebarStyles from "../styles/components/sidebar.module.scss"

const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <BurgerButton small />
    </div>
  )
}

export default Sidebar
