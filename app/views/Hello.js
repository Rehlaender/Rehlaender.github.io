import React, { useState, useEffect, useRef } from 'react';
import { Store } from '../Store';
import { setOrientationAction } from '../actions';

import './Hello.css';

import { Title } from '../components';

export const Hello = () => {
  const { state, dispatch } = React.useContext(Store);

  let [orientation, setOrientation] = useState({ a: 0, b: 0, g: 0 });
  let [ax, setAx] = useState(0);
  let [bx, setBx] = useState(0);
  let [gx, setGx] = useState(0);
  let [isOnHold, setOnHold] = useState(false);

  const prevBx = usePrevious(bx);

  useEffect(() => {
    addDeviceOrientationListener();
  }, []);

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  }

  useEffect(() => {
    scrollY();
  }, [bx]);

  useEffect(() => {
    setOrientation({ a: ax, b: bx, g: gx });
    console.log('change in orientatino', ax, bx, gx);
  }, [ax, bx, gx]);

  const scrollY = () => {
    if (!state.isOnHold) {
      if (bx < 30 && bx > -30) {
        // window.scrollBy(0, 0);
        setOrientationAction('none', dispatch);
      } else if (bx > prevBx) {
        // window.scrollBy(0, 50);
        setOrientationAction('up', dispatch);
      } else if (bx < prevBx) {
        // window.scrollBy(0, -50);
        setOrientationAction('down', dispatch);
      }
    }
  }

  const addDeviceOrientationListener = () => {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function (e) {
        alpha = Math.floor(e.alpha);
        beta = Math.floor(e.beta);
        gamma = Math.floor(e.gamma);
        console.log(alpha, beta, gamma, 'alpha beta gamma')
        setOrientation({ a: alpha, b: beta, g: gamma });
      })
    }
  }

  return (
    <React.Fragment>
      <div id="HELLO" onClick={() => { setOnHold(!isOnHold) }}>
        <div className='main_title'>
          <h1>test ♫</h1>

          <div className='god'>

            {state.deviceOrientation}
            <label>alpha</label>
            <input type="range" min="0" max="360" placeholder="180" onChange={e => setAx(e.target.value)} />
            <label>beta</label>
            <input type="range" min="0" max="360" placeholder="180" onChange={e => setBx(e.target.value)} />
            <label>gama</label>
            <input type="range" min="0" max="360" placeholder="180" onChange={e => setGx(e.target.value)} />
          </div>
        </div>

        <div className='status_button'>
          {
            isOnHold ? `| |` : `►`
          }
        </div>

        <div className='main_content'>
          <Title />
        </div>

        <div className='bottom_content'>
          <h3>contact</h3>
          lorem ipsum a{JSON.stringify({ 'a': 'asdf', isOnHold })}
        </div>
      </div>
    </React.Fragment>
  );
}
