import React from 'react';
import { Store } from './Store';

import RenderModals from './components/RenderModals';
import {Menu} from './components/Menu/Menu';

import { addModalAction } from './Actions';

export default function App() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    // state.activeModals.length === 0 && renderModals();
  });

  return (
    <React.Fragment>
      <div>
        {JSON.stringify({message: 'jenlo', state})}
        <Menu />
        <RenderModals />
      </div>
    </React.Fragment>
  );
}
