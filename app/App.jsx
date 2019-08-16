import React from 'react';
import { Store } from './Store';

import RenderModals from './components/RenderModals';

import {Menu, Header, Footer} from './components';

export default function App() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    // state.activeModals.length === 0 && renderModals();
  });

  return (
    <React.Fragment>
      <div>
        {/* <Header /> */}
        {JSON.stringify(state)}
        <Menu />
        <RenderModals />
        <Footer />
      </div>
    </React.Fragment>
  );
}
