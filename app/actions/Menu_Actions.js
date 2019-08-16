import {SET_ACTIVE_MENU, TOGGLE_MENU} from '../actionTypes';

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