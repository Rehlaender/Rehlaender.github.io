import React from 'react';
import { Store } from './Store';

import RenderModals from './components/RenderModals';

import {Menu, Header, Footer} from './components';
import Secret from './components/Secret/Secret';

import * as centerImage from "../assets/casa_bajo.png";

export default function App() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    // state.activeModals.length === 0 && renderModals();
  });

  return (
    <React.Fragment>
      <div className="mainApp">
        <Header />
        <Menu />
        <RenderModals />
        <Secret />
        <Footer />
      </div>
    </React.Fragment>
  );
}
