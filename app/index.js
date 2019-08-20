import React from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider } from './Store';

import App from './App.jsx';

import './App.css';

ReactDOM.render(
  <StoreProvider>
    <App/>
  </StoreProvider>,
  document.getElementById('app')
);