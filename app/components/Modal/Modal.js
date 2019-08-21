import React from 'react';
import { Store } from '../../Store';
import { removeModalAction } from '../../actions';

import {MediaButtons} from './MediaButtons';

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
        <MediaButtons links={links} />
      </div>
    </div>
  )
}