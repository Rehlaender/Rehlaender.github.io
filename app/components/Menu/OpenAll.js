import React from 'react';
import { Store } from '../../Store';
import { openAllAction } from '../../actions';

export const OpenAll = () => {
  const { state, dispatch } = React.useContext(Store);

  const openAll = () => {
    openAllAction(dispatch);
  }

  return state.menuState && (
    <div id="openAll" onClick={() => openAll()}>
      open all
    </div>
  );
}