import {ADD_MODAL, REMOVE_MODAL, SET_ACTIVE_MENU} from '../actionTypes';

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

export const setActiveMenuAction = (menuName, dispatch) => {
  return dispatch({
    type: SET_ACTIVE_MENU,
    payload: menuName
  });
}