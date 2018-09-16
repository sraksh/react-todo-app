import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';

import todos from './todos';
import filter from './filter';

let rootReducer = combineReducers({
  filter,
  todos,
  routing: routerReducer
});

export default rootReducer;