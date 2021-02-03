import React from "react"

import { Link } from "gatsby"

import blogCardStyles from "../styles/components/blogCard.module.scss"

const BlogCard = ({ imgSrc, imgAlt, date, title, to }) => {
  return (
    <div className={blogCardStyles.container}>
      <Link to={to}>
        <img
          loading="lazy"
          src={imgSrc}
          alt={imgAlt}
          className={blogCardStyles.image}
        />
        <div className={blogCardStyles.info}>
          <div className={blogCardStyles.date}>
            <p>
              {date}
              <span className={blogCardStyles.dot}>•</span>4 min read
            </p>
          </div>
          <h2 className={blogCardStyles.headline}>{title}</h2>
        </div>
      </Link>
    </div>
  )
}

export default BlogCard
