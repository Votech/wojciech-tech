import React from 'react';
import animationSlideUpStyles from '../styles/components/animationSlideUp.module.scss';

const AnimationSlideUp = ({
  children,
  shouldAnimate,
  delay,
  ...otherProps
}) => {
  return (
    <div className={animationSlideUpStyles.mask} {...otherProps}>
      <div
        className={`${animationSlideUpStyles.animation} ${
          shouldAnimate && animationSlideUpStyles.start
        }`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimationSlideUp;
