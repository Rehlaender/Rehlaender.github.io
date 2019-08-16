import {ADD_MODAL, REMOVE_MODAL} from '../actionTypes';

export const addModalAction = (modalId, dispatch) => {
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
