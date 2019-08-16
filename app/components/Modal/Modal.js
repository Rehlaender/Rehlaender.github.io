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
    <div>
        <div
          className={`band popup`}
          style={{
            // backgroundImage: `url(${main_image})`,
            left: randomLeft,
            top: randomTop,
            zIndex: `${index + 20} `
          }}>
          <div
            className="closeButton"
            onClick={() => { closeBandPopUp() }}>
            x
          </div>
          <div className="band-info">
            <div className="info-container">
              <h2>{name}</h2>
              <p>{text}</p>
            </div>
          </div>
          {JSON.stringify(props.data)}
          jenlo {props.index}
        </div>
    </div>
  )
}