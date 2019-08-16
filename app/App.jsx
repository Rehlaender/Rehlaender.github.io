import React from 'react';
import { Store } from './Store';

import RenderModals from './components/RenderModals';

import { AddModal } from './Actions';

export default function App() {
  const { state, dispatch } = React.useContext(Store);

  const renderModals = () => {
    AddModal(5, dispatch);
    AddModal(4, dispatch);
  }

  React.useEffect(() => {
    state.activeModals.length === 0 && renderModals();
  });

  return (
    <React.Fragment>
      <div>
        {JSON.stringify({message: 'jenlo', state})}
        <RenderModals />
      </div>
    </React.Fragment>
  );
}
