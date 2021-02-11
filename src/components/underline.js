import React from 'react';
import underlineStyles from '../styles/components/underline.module.scss';

const Underline = ({ children }) => (
  <div className={underlineStyles.container}>
    <div className={underlineStyles.underline}>{children}</div>
  </div>
);

export default Underline;
