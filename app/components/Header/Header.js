
import React from 'react';
import { Store } from '../../Store';

import {INFO} from '../../constants/INFO';
import './Header.css';
import profilePicture from '../../../assets/user.png';

export const Header = (props) => {
  const { state, dispatch } = React.useContext(Store);

  const {
    title, 
    subtitle, 
    text
  } = INFO;
  return (
    <div
      id="info"
      className={[
        !state.menuState && state.activeModals.length > 0 && 'isSecret']}>
      <div className="container">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        {
          text && text.length > 0 && text.map((element, i) => {
            return <p key={i}>{element}</p>
          })
        }
        <img 
          className="profilePicture"
          src={profilePicture}
          alt="yeah, i look like that"
          title="yeah, i look like that"
        />
      </div>
    </div>
  )
}