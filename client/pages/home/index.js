import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Switch, Router } from 'react-router-dom'
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import App from '../../commons/app.js'
import About from '../about'
import Home from './page'
import reducer from './reducer.js'
import classnames from 'classnames'
import '../../commons/scss/main.scss'
import configureStore from '../../Root'

const routes = (
  <App>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
  </App>
)


const store = configureStore(reducer, (window.__initialState__ || {}))
// Create an enhanced history that syncs navigation events with the store
const history = createHistory()

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('layout')
);


if (module.hot) {
  module.hot.accept();
}
