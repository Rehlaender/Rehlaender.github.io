import React from 'react';
import { Store } from '../../Store';
import './TextHidder.css';

export const TextHidder = (props) => {
  const { state, dispatch } = React.useContext(Store);
  
  const { words } = props;

  const returnTopPosition = () => {
    switch (state.deviceOrientation) {
      case 'up':
        return '-1.2rem';
      case 'down':
        return '1.2rem';
      default:
          return '0px';
    }
  }
  return (
    <React.Fragment>
      <div className='text-hidder'>
        <div className='hidder_top'>{words}</div>
        <div className='hidder_text superTransitioner'
        style={{top: returnTopPosition()}}
        >{words}</div>
      </div>
    </React.Fragment>
  );
}
