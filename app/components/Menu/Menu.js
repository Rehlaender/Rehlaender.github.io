import React from 'react';
import { Store } from '../../Store';
import { setActiveMenuAction, addModalAction, removeModalAction, toggleMenuAction } from '../../actions';
import { KEYS } from '../../constants/KEYS';
import { returnProyectsByType } from '../../constants/PROYECTS';

import {CloseAll} from './CloseAll';

import {Motion, spring} from 'react-motion';

import './Menu.css';

export const Menu = (props) => {
  const menus = Object.values(KEYS);

  const { state, dispatch } = React.useContext(Store);

  const toggleMenu = () => {
    toggleMenuAction(dispatch);
  }

  return (
    <div
      id="menu"
      className={[
        state.menuState && 'isOpen ',
        ' action-container animated'
      ]}>
      <Motion style={{x: spring(state.menuState ? -20 : 0)}}>
        {({x}) =>
          <div className="hamburguer" 
            onClick={()=>{toggleMenu()}}
            style={{
              transform: `rotate(${x}deg)`,
            }}>
            hamburguesa
        </div>
        }
      </Motion>
      
      <CloseAll />
      
      <Motion style={{x: spring(state.menuState ? 0 : 400)}}>
        {({x}) =>  
          <div className="springContainer" style={{
            WebkitTransform: `translate3d(0, ${x}px, 0)`,
            transform: `translate3d(0, ${x}px, 0)`,
          }}>
            {menus.map((menu, i) => <ActionBlock name={menu} key={i} />)}
          </div>
        }
      </Motion>
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

  return (
    <Motion style={{x: spring(state.isMenuAway ? 400 : 0)}}>
      {({x}) =>
        <div style={{
          WebkitTransform: `translate3d(${x}px, 0, 0)`,
          transform: `translate3d(${x}px, 0, 0)`,
        }}>
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
      }
    </Motion>
  )
}

const ActionBlock = (props) => {

  const { state, dispatch } = React.useContext(Store);

  const {name} = props;
  const toggleContainer = (menu) => {
    setActiveMenuAction(menu, dispatch);
  }

  return (
    <span onClick={() => toggleContainer(name)} 
    className={[state.activeMenu === name && 'active ', ' block']}>
      {name}
      <div className="blackLine"></div>
    </span>
  )
}