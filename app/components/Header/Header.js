import React from 'react';

import {INFO} from '../../constants/INFO';
import './Header.css';

export const Header = (props) => {
  const {
    title, 
    subtitle, 
    text
  } = INFO;
  return (
    <div
      id="info"
      className={['info ' + 'right-shadow']}>
      <div className="container">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        {
          text && text.length > 0 && text.map(element => {
            return <p>{element}</p>
          })
        }
      </div>
    </div>
  )
}