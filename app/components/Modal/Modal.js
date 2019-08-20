import React from 'react';
import { Store } from '../../Store';
import { removeModalAction } from '../../actions';

import './Modal.css';

export const Modal = (props) => {
  const {
    index,
    data: {
      id,
      name,
      text,
      links,
      main_image,
      type,
    }
  } = props;

  const { dispatch } = React.useContext(Store);

  const closeBandPopUp = () => {
    removeModalAction(id, dispatch);
  }

  const innerHeight = window.innerHeight - 200;
  const innerWidth = window.innerWidth - 400;
  const randomTop = Math.floor(Math.random() * innerHeight) + 1;
  const randomLeft = Math.floor(Math.random() * innerWidth) + 1;

  return (
    <div
      className={`popup`}
      style={{
        backgroundImage: `url(${main_image})`,
        zIndex: `${index + 20} `
      }}>
      <div
        className="closeButton"
        onClick={() => { closeBandPopUp() }}>
        cerrar
          </div>
      <div className="info-container">
        <div className="info">
          <h2>{name}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}