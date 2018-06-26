import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { withRouter } from 'react-router-dom';
import App from './App';
import createStore from './store';

import './assets/css/reset.css';

const store = createStore();
window.store = store;
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
