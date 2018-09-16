import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import addDelete from './addDelete';
import filter from './filter';

let rootReducer = combineReducers({
  filter,
  addDelete,
  routing: routerReducer
});

export default rootReducer;