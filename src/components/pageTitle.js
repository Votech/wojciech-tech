import React from 'react';
import pageTitleStyles from '../styles/components/pageTitleStyles.module.scss';

const PageTitle = ({ children }) => {
  return <section className={pageTitleStyles.title}>{children}</section>;
};

export default PageTitle;
