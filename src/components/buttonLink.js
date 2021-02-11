import buttonLinkStyles from '../styles/components/buttonLink.module.scss';

import React from 'react';
import { Link } from 'gatsby';

import Underline from '../components/underline';

const ButtonLink = ({ to, children }) => {
  return (
    <div className={buttonLinkStyles.flex}>
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
