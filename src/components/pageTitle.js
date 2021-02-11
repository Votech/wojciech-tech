import pageTitleStyles from '../styles/components/pageTitleStyles.module.scss';

import React from 'react';

const PageTitle = ({ children }) => {
  return <section className={pageTitleStyles.title}>{children}</section>;
};

export default PageTitle;
