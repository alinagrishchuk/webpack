import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import { ExtendedLandingPage } from './components/landingPage';

const App = props => (
  <Router>
    <div>
      <Route exact path='/' component={ExtendedLandingPage} />
    </div>
  </Router>
);
export default App;