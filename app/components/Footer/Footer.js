import React from 'react';

import {SOCIAL_MEDIA} from '../../constants/SOCIAL_MEDIA';
import './Footer.css';

export const Footer = (props) => {
  const {
    facebook,
    twitter,
    instagram,
    github
  } = SOCIAL_MEDIA;
  return (
    <div className="footer">
      <p className="link"><a href={facebook}>facebook</a></p>
      <p className="link"><a href={twitter}>twitter</a></p>
      <p className="link"><a href={instagram}>instagram</a></p>
      <p className="link"><a href={github}>github</a></p>
    </div>
  )
}