import {CLOSE_ALL, SET_ACTIVE_MENU, TOGGLE_MENU} from '../actionTypes';

export const setActiveMenuAction = (menuName, dispatch) => {
  return dispatch({
    type: SET_ACTIVE_MENU,
    payload: menuName
  });
}

export const toggleMenuAction = (dispatch) => {
  return dispatch({
    type: TOGGLE_MENU,
  });
}

export const closeAllAction = (dispatch) => {
  return dispatch({
    type: CLOSE_ALL,
  });
}