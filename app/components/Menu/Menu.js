import React from 'react';
import { Store } from '../../Store';
import { setActiveMenuAction, addModalAction, removeModalAction } from '../../actions';
import { KEYS } from '../../constants/KEYS';
import { returnProyectsByType } from '../../constants/PROYECTS';

import './Menu.css';

export const Menu = (props) => {
  const menus = Object.values(KEYS);

  const { state, dispatch } = React.useContext(Store);

  return (
    <div
      id="menu"
      className={['action-container animated']}>
      
      {menus.map((menu, i) => <ActionBlock name={menu} key={i} />)}
      
      <HoveringItems />
    </div>
  )
}

const HoveringItems = (props) => {
  const { state, dispatch } = React.useContext(Store);

  const menuOptions = returnProyectsByType(state.activeMenu);

  const isModalAlreadyOpen = (id) => {
    return state.activeModals.some(proyect => proyect === id);
  } 

  const openPopUp = (id) => {
    isModalAlreadyOpen(id) ? removeModalAction(id, dispatch) : addModalAction(id, dispatch);
  }

  return state.activeMenu && (
   <div>
     {  
      menuOptions.map((option, i) => <div 
        className={[
          'menu-items ',
          isModalAlreadyOpen(option.id) && ' active'
        ]}
        key={i} 
        onClick={() => {openPopUp(option.id)}}>
          {option.name}
        </div>) 
     }
   </div> 
  )
}

const ActionBlock = (props) => {

  const { dispatch } = React.useContext(Store);

  const {name} = props;
  const toggleContainer = (menu) => {
    setActiveMenuAction(menu, dispatch);
  }

  return (
    <span onClick={() => toggleContainer(name)} className="block">{name}</span>
  )
}