import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import {Hello} from './views/Hello';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="mainApp">
          <Switch>
            <Route path="/">
              <Hello />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
