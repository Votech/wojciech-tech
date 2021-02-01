import React from "react"

import cardStyles from "../styles/components/card.module.scss"

const Card = ({ primary, backgroundImageSrc, secondary, title1, title2 }) => {
  let backgroundColor = "#f5f5f5"
  let textColor = "#222222"

  if (primary) {
    backgroundColor = "#fdf0f2"
    textColor = "#770012"
  } else if (secondary) {
    backgroundColor = "#f8f7ff"
    textColor = "#271c64"
  }

  return (
    <a
      className={cardStyles.container}
      style={{
        backgroundColor: `${backgroundColor}`,
        backgroundImage: `url(${backgroundImageSrc})`,
      }}
    >
      <h2 className={cardStyles.headline1} style={{ color: `${textColor}` }}>
        {title1.split("\n").map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          )
        })}
      </h2>
      <h3 className={cardStyles.headline2} style={{ color: `${textColor}` }}>
        {title2}
      </h3>
    </a>
  )
}

export default Card
