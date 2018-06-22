import React, { Component } from 'react';
import { Router } from '@reach/router';

import HelloProger from '../components/HelloProger';
import Home from '../views/Home';
import Main from '../containers/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Main path="/">
          <Home path="/" />
          <HelloProger path="/hello" />
        </Main>
      </Router>
    );
  }
}

export default Routes;
