import React from 'react';
import backdropStyles from '../styles/components/backdrop.module.scss';

const Backdrop = ({ ...props }) => {
  return <div className={`${backdropStyles.backdrop}`} {...props} />;
};

export default Backdrop;
