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
const GitlabLogin = Loadable({
  loader: () => import('./GitlabLogin'),
  loading,
})

const MainRoute = () => (
  <Main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={HelloProger} />
    </Switch>
  </Main>
)

const HelperRoute = () => (
  <Switch>
    <Route path="/helper/gitlablogin" component={GitlabLogin} />
  </Switch>
)

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/helper" component={HelperRoute} />
          <Route path="/" component={MainRoute} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
