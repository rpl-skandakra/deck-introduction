import React from 'react';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';

export const Website = () => {
  return (
    <a href="https://rplskandakra.org">
      <img
        src="https://raw.githubusercontent.com/rpl-skandakra/website/main/docs/website-dark.png"
        alt="Website Preview"
        width="900px"
      />
    </a>
  );
};

export const Github = () => {
  return (
    <a href="https://rplskandakra.org/github">
      <img src={github} alt="Github Preview" width="900px" />
    </a>
  );
};

export const Instagram = () => {
  return (
    <a href="https://rplskandakra.org/instagram">
      <img src={instagram} alt="Instagram Preview" width="900px" />
    </a>
  );
};
