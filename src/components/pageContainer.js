import React from 'react';
import pageContainerStyles from '../styles/components/pageContainer.module.scss';

const PageContainer = ({ children }) => {
  return (
    <section className={pageContainerStyles.container}>{children}</section>
  );
};

export default PageContainer;
