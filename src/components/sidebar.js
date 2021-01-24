import React from "react"

import BurgerButton from "../components/burgerbutton"

import sidebarStyles from "../styles/components/sidebar.module.scss"

const Sidebar = () => {
  return (
    <div className={sidebarStyles.sidebar}>
      <BurgerButton />
    </div>
  )
}

export default Sidebar
