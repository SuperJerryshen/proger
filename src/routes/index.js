import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import Main from '../containers/Main'

const loading = () => <div />
const Home = Loadable({
  loader: () => import('./Home'),
  loading,
})
const HelloProger = Loadable({
  loader: () => import('../components/HelloProger'),
  loading,
})

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
    )
  }
}

export default Routes
