import React, { Component } from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux'
import { Route, Switch } from 'react-router-dom'

import App from '../../commons/app.js'
import About from '../about'
import Home from './page'
import Root from '../../Root.js'
import reducer from './reducer.js'

const routes = (
  <div>
    <Route path="/" component={App} />
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </div>
)

const reducers = combineReducers({
  reducer
});


render(
  <Root routes={routes} reducers={reducers} />,
  document.getElementById('layout')
);

if (module.hot) {
  module.hot.accept('./reducer', () => {
    const nextRootReducer = require('./reducer');
    store.replaceReducer(nextRootReducer);
  });
  module.hot.accept();
}


