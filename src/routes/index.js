import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HelloProger from '../components/HelloProger';
import Home from '../views/Home';
import Main from '../containers/Main';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/hello" component={HelloProger} />
          </Switch>
        </Main>
      </Router>
    );
  }
}

export default Routes;
