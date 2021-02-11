import pageContainerStyles from '../styles/components/pageContainer.module.scss';

import React from 'react';

const PageContainer = ({ children }) => {
  return (
    <section className={pageContainerStyles.container}>{children}</section>
  );
};

export default PageContainer;
