import React from 'react';
import Typist from 'react-typist';

import { Store } from '../../Store';

import {Sign} from './Sign';
import vector from './secret_animation.svg';
import vector2 from './secret_air.svg';

export default function Secret() {
  const { state, dispatch } = React.useContext(Store);

  return !state.menuState && state.activeModals.length > 0 ? (
      <div id="secret">
        <h1>wow! secret</h1>
        <div className="message">
          <Typist>
            Hello, you discovered the secret
            <Typist.Delay ms={1250} />
            <br />
            actually there is no secret at all
            <Typist.Delay ms={1250} />
            <br />
            you did it, now you can sign my wall
          </Typist>
          <div className="secretCanvas">
            <embed src={vector}/>
            <embed src={vector2}/>
          </div>

        </div>
        <Sign />
      </div>
  ) : null
}
