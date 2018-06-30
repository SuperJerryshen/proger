import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Routes from './routes'
import createStore from './store'

const store = createStore()

class App extends Component {
  componentDidCatch(...params) {
    console.error(params)
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App
