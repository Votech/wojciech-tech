import React from 'react';
import blogGridStyles from '../styles/components/blogGrid.module.scss';

const BlogGrid = ({ children }) => {
  return <div className={blogGridStyles.grid}>{children}</div>;
};

export default BlogGrid;
