import burgerButtonStyles from '../styles/components/burgerButton.module.scss';

import React from 'react';

const BurgerButton = ({ small, isSidebarOpen, ...otherProps }) => {
  const burgerButtonStyle = small
    ? burgerButtonStyles.burgerButtonSmall
    : burgerButtonStyles.burgerButton;

  const close = isSidebarOpen ? burgerButtonStyles.close : null;

  return (
    <div className={`${burgerButtonStyle} ${close}`} {...otherProps}>
      <div className={burgerButtonStyles.line} />
      <div className={burgerButtonStyles.line} />
    </div>
  );
};

export default BurgerButton;
