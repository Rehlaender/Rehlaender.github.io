import React from 'react'
import { ADD_MODAL, REMOVE_MODAL, SET_ACTIVE_MENU, TOGGLE_MENU } from './actionTypes';

export const Store = React.createContext();

const initialState = {
  activeMenu: '',
  activeModals: [],
  menuState: false,
  isMenuAway: true,
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
      const setActiveMenu = state.activeMenu === action.payload;
      const whatToDo = state.isMenuAway != true && setActiveMenu;
      const toggleActiveMenu = setActiveMenu ? '' : action.payload;
      return {
        ...state, 
        activeMenu: toggleActiveMenu,
        isMenuAway: whatToDo
      };
    case TOGGLE_MENU: 
      return {
        ...state, 
        menuState: !state.menuState,
        isMenuAway: true,
        activeMenu: '',
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