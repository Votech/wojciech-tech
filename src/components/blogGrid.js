import blogGridStyles from '../styles/components/blogGrid.module.scss';

import React from 'react';

const BlogGrid = ({ children }) => {
  return <div className={blogGridStyles.grid}>{children}</div>;
};

export default BlogGrid;
