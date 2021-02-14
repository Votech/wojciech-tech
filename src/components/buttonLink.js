import buttonLinkStyles from '../styles/components/buttonLink.module.scss';

import React from 'react';
import { Link } from 'gatsby';

import Underline from '../components/underline';

const ButtonLink = ({ to, children, className, ...otherProps }) => {
  return (
    <div className={`${buttonLinkStyles.flex} ${className}`} {...otherProps}>
      <Link to={to}>
        <div className={buttonLinkStyles.container}>
          <Underline>
            <p>{children}</p>
          </Underline>
        </div>
      </Link>
    </div>
  );
};

export default ButtonLink;
