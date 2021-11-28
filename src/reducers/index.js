import { combineReducers } from 'redux';
import todolist from './todolist';
import exchange from './exchange';

export default combineReducers({
  todolist,
  exchange
});
