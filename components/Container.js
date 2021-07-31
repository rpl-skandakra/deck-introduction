import React from 'react';

import styles from '../assets/css/Container.module.css';

const Container = ({ children }) => {
  return <main className={styles.container}>{children}</main>;
};

export default Container;
