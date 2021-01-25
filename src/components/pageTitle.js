import React from "react"

import pageTitleStyles from "../styles/components/pageTitleStyles.module.scss"

const PageTitle = () => {
  return (
    <section className={pageTitleStyles.title}>
      <h1>
        Developer creating <span>digital</span> products
      </h1>
    </section>
  )
}

export default PageTitle
