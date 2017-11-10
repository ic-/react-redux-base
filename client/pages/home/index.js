import React from 'react';
import { render } from 'react-dom';
import { combineReducers } from 'redux-immutable';
import { Route, IndexRoute, Switch } from 'react-router';

import Root from '../../Root';
import routing from '../../common/reducers/routing';
import toast from '../../common/reducers/toast';
import home from './reducer';
import App from '../../common/App';
import HomePage from './HomePage';
import { urlContext } from '../../utils/config';

import '../../common/scss/main.scss';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
  </Route>
);

const reducers = combineReducers({
  routing,
  toast,
  home
});

render(
  <Root routes={routes} reducers={reducers} basename={`${urlContext}/home`} />,
  document.getElementById('layout')
);


if (module.hot) {
  module.hot.accept();
}
