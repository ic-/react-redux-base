import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import App from './commons/app'
// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'




function configureStore(reducers, initialState) {
  const reducer = combineReducers({
    ...reducers,
    initialState,
    routing: routerReducer
  })
  // const DevTools = createDevTools(
  //   <DockMonitor toggleVisibilityKey="ctrl-h"
  //                changePositionKey="ctrl-w"
  //                defaultIsVisible={false}
  //                defaultPosition="right">
  //     <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  //   </DockMonitor>
  // )
  let middleware = [thunk, routerMiddleware(history)]
  const store = createStore(
    reducer,
    compose(
      applyMiddleware(...middleware),
      // DevTools.instrument()
    )
  )
  return store
}

const Root = ({routes, reducers}) => {
  const store = configureStore(reducers, (window.__initialState__ || {}))
  // Create an enhanced history that syncs navigation events with the store
  const history = createHistory()
  return (
    <Provider store={store}>
      <Router history={history}>
        {routes}
      </Router>
    </Provider>
  )
}

export default Root

