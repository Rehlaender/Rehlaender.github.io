import React from 'react';

import { Store } from '../../Store';

export default function Secret() {
  const { state, dispatch } = React.useContext(Store);

  return !state.menuState && state.activeModals.length > 0 ? (
      <div id="main">
        Hello, you discovered the secret
      </div>
  ) : null
}
