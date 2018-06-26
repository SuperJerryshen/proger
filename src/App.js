import React, { Component } from 'react';
import Routes from './routes';

class App extends Component {
  componentDidCatch(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
