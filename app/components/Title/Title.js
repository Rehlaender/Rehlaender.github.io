import React from 'react';
import { Store } from '../../Store';

import './Title.css';
import {TextHidder} from '../TextHidder/TextHidder';

export const Title = (props) => {
  const { state } = React.useContext(Store);
  
  return (
    <React.Fragment>
      <section className='title'>
        <div>
          <img src='/' alt='picture' />
        </div>

        <div className='title_description'>
          <div className='shapeoutside'></div>
          <p>
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            super hyerpmega text
            
          </p>
        </div>

        <TextHidder words={'this is the title'}/>
      </section>
    </React.Fragment>
  );
}
