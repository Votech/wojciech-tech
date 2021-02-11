import React from 'react';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import Img from 'gatsby-image';
import cardStyles from '../styles/components/card.module.scss';

const Card = ({
  primary,
  backgroundImageSrc,
  imgSrc,
  secondary,
  title1,
  title2,
  to,
  profile,
  data,
}) => {
  // setting the style of component
  let backgroundColor = '#f5f5f5';
  let textColor = '#222222';

  if (primary) {
    backgroundColor = '#fdf0f2';
    textColor = '#770012';
  } else if (secondary) {
    backgroundColor = '#f8f7ff';
    textColor = '#271c64';
  }
  return (
    <AniLink
      cover
      direction='up'
      bg='#BBBBBB'
      to={to}
      className={cardStyles.container}
      id={profile && cardStyles.profile}
      style={{
        backgroundColor: `${backgroundColor}`,
        backgroundImage: `url(${backgroundImageSrc})`,
      }}
    >
      {data && (
        <Img
          fluid={data.image.childImageSharp.fluid}
          alt='Wojciech Mietlinski'
          className={cardStyles.image}
          loading='lazy'
          style={{ position: 'absolute' }}
        />
      )}
      <h2 className={cardStyles.headline1} style={{ color: `${textColor}` }}>
        {/* function below creats new line every "\n"  */}
        {title1.split('\n').map((item, key) => {
          return (
            <span key={key}>
              {item}
              <br />
            </span>
          );
        })}
      </h2>
      <h3 className={cardStyles.headline2} style={{ color: `${textColor}` }}>
        {title2}
      </h3>
    </AniLink>
  );
};

export default Card;
