import React from 'react';
import Typist from 'react-typist';

import { Store } from '../../Store';

import {Sign} from './Sign';

export default function Secret() {
  const { state, dispatch } = React.useContext(Store);

  return !state.menuState && state.activeModals.length > 0 ? (
      <div id="main">
        <Typist>
          <p>Hello, you discovered the secret</p>
          <br/>
          <p>actually there is no secret at all</p>
          <br/>
          <p>you did it, now you can sign my wall</p>
        </Typist>
        <Sign />
      </div>
  ) : null
}
