import {WHERE_WE_GOING} from '../actionTypes';

export const setOrientationAction = (direction, dispatch) => {
  return dispatch({
    type: WHERE_WE_GOING,
    payload: direction
  });
};