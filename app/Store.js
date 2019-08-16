import React from 'react'
import { ADD_MODAL, REMOVE_MODAL, SET_ACTIVE_MENU, TOGGLE_MENU } from './actionTypes';

export const Store = React.createContext();

const initialState = {
  activeMenu: '',
  activeModals: [],
  menuState: false
}

function reducer(state, action) {
  switch (action.type) {
    case ADD_MODAL:
      return { 
        ...state, 
        activeModals: [...state.activeModals, action.payload] 
      };
    case REMOVE_MODAL:
      const removeModal = state.activeModals.filter(id => id !== action.payload);
      return { ...state, activeModals: removeModal };
    case SET_ACTIVE_MENU:
      const setActiveMenu = state.activeMenu === action.payload ? '' : action.payload;
      return {
        ...state, 
        activeMenu: setActiveMenu
      };
    case TOGGLE_MENU:
      return {
        ...state, 
        menuState: !state.menuState
      };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>
}