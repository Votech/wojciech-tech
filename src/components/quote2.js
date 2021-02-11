import quoteStyles from '../styles/components/quote2.module.scss';

import React from 'react';

const Quote = ({ maxWidth, children }) => {
  return (
    <div className={quoteStyles.container}>
      <h3 className={quoteStyles.headline} style={{ maxWidth: `${maxWidth}` }}>
        {children}
      </h3>
    </div>
  );
};

export default Quote;
