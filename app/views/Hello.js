import React, { useState, useEffect } from 'react';

import './Hello.css';

export const Hello = () => {
  let [orientation, setOrientation] = useState({ a: 0, b: 0, g: 0 });
  let [ax, setAx] = useState(0);
  let [bx, setBx] = useState(0);
  let [gx, setGx] = useState(0);

  useEffect(() => {
    addDeviceOrientationListener();
  }, []);

  useEffect(() => {
    setOrientation({ a: ax, b: bx, g: gx });
  }, [ax, bx, gx]);

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
      <div id="HELLO">
        <div className='main_title'>
          <h1>test ♫</h1>

          <div className='god'>
            <label>alpha</label>
            <input type="range" min="-360" max="360" placeholder="10" onChange={e => setAx(e.target.value)} />
            <label>beta</label>
            <input type="range" min="-360" max="360" placeholder="10" onChange={e => setBx(e.target.value)} />
            <label>gama</label>
            <input type="range" min="-360" max="360" placeholder="0" onChange={e => setGx(e.target.value)} />
          </div>
        </div>

        <div className='main_content'>
          <svg viewBox="0 0 100 100" width="100%" height="100%" >

            {/* <pattern id="pattern-circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <image href="https://www.transparenttextures.com/patterns/cardboard-flat.png" x="0" y="0" width="100" height="100" />
            </pattern> */}
            <g className='vector-title'>
              {/* <text className='vector-title' x="30%" y="150" 
                font-size="2rem">
                title
              </text> */}
              <path d={`M 0 0 l ${bx} ${ax}`} stroke="red" />
            </g>
            <g>
              <path d={`M -10 100 H 110 V 50 H -10 Z`} />
            </g>
            <rect x="0" y="0" width="100%" height="100%"/>
          </svg>
        </div>

      </div>
    </React.Fragment>
  );
}
