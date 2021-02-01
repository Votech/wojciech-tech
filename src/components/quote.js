import React from "react"

import quoteStyles from "../styles/components/quote.module.scss"

const Quote = ({ maxWidth, grayText, blackText }) => {
  return (
    <div className={quoteStyles.container}>
      <h3 className={quoteStyles.headline} style={{ maxWidth: `${maxWidth}` }}>
        {grayText}
        <span>{blackText}</span>
      </h3>
    </div>
  )
}

export default Quote
