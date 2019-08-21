import React from 'react';
import { Store } from '../../Store';
import { closeAllAction } from '../../actions';

export const CloseAll = () => {
  const { state, dispatch } = React.useContext(Store);

  const closeAll = () => {
    closeAllAction(dispatch);
  }

  return state.activeModals.length > 1 && (
    <div id="closeAll" onClick={() => closeAll()}>
      {!state.menuState && state.activeModals.length > 0 ? 'close secret' : 'close all'}
    </div>
  );
}