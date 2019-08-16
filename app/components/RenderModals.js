import React from 'react';
import { Store } from '../Store';

import { Modal } from './Modal/Modal';

import { PROYECTS } from '../constants/PROYECTS';

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
        <div>
          JENLO MODALS =>
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
        <div>no hay</div>
      )
    }

    </React.Fragment>
  );
}
