//
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
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


export default configureStore
