import React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux-immutable';
import { Route, IndexRoute, Switch } from 'react-router';

import Root from '../../Root';

import reducers from './reducer';
import App from '../../common/App';
import HomePage from './HomePage';
import { urlContext } from '../../utils/config';

import '../../common/scss/main.scss';

const routes = (
  <App>
    <Route path="/home" component={HomePage}></Route>
  </App>
);

render(
  <Root routes={routes} reducers={reducers} basename={`${urlContext}/home`} />,
  document.getElementById('layout')
);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./reducer', () => {
    const nextRootReducer = require('./reducer');
    store.replaceReducer(nextRootReducer);
  });
}
if (module.hot) {
  module.hot.accept();
}
