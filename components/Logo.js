import React from 'react';

import oldLogo from '../assets/old-logo.jpg';
import newLogo from '../assets/new-logo.png';
import styles from '../assets/css/Logo.module.css';

export const OldLogo = () => {
  return (
    <img
      src={oldLogo}
      alt="SCEC's Logo"
      width="300px"
      className={styles.logo}
    />
  );
};

export const NewLogo = () => {
  return (
    <img
      src="https://rpl-skandakra.vercel.app/logo.png"
      alt="RPL Skandakra Dev's Logo"
      width="350px"
      className={styles.logo}
    />
  );
};

export const NewLogoSquare = () => {
  return (
    <img
      src={newLogo}
      alt="RPL Skandakra Dev's Logo"
      width="350px"
      className={styles.logo}
    />
  );
};
