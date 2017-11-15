import {Map} from 'immutable';
import routing from '../../common/reducers/routing';
import toast from '../../common/reducers/toast';
import { combineReducers } from 'redux-immutable';

function home(state = Map(), action) {
  const {type, content} = action;
  if (type === 'home-hello') {
    return state.set('content', content);
  } else if (type === 'home-clear-hello') {
    return state.clear();
  }
  return state;
}


export default combineReducers({
  routing,
  toast,
  home
});
