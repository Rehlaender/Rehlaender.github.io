import React from 'react';
import { Store } from '../Store';
import Typist from 'react-typist';

import { Modal } from './Modal/Modal';

import { PROYECTS } from '../constants/PROYECTS';

import './RenderModals.css';

export default function RenderModals() {
  const { state, dispatch } = React.useContext(Store);

  const returnProyect = (id) => {
    return PROYECTS.find(proyect => id === proyect.id);
  }
  
  return (
    <React.Fragment>
    {
      state.activeModals.length !== 0 ?
      (
        <div className="renderModals"
          style={{opacity: state.menuState ? 1 : 0}}>
          {state.activeModals.map(
            (modal, i) => {
              return <Modal 
                index={i} 
                key={i} 
                data={returnProyect(modal)}
              />;
            }
          )}
        </div>
      ) : (
        <div id="welcomeMessage">
          <Typist>
            Hello, welcome. You can check my proyects in the <strong>hamburguesa</strong> button.
          </Typist>
        </div>
      )
    }

    </React.Fragment>
  );
}
