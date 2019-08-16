import {ADD_MODAL, REMOVE_MODAL} from '../actionTypes';
// import React from 'react';
// import { Store } from '../Store';

// const { dispatch } = React.useContext(Store);

export const AddModal = (modalId, dispatch) => {
  return dispatch({
    type: ADD_MODAL,
    payload: modalId
  });
};


export const removeModalAction = (modalId, dispatch) => {
  return dispatch({
    type: REMOVE_MODAL,
    payload: modalId
  });
};