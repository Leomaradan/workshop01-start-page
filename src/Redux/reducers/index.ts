import { combineReducers } from 'redux';
import { linkReducer } from './linkReducer';
import { optionReducer } from './optionReducer';

export default combineReducers({
  links: linkReducer,
  options: optionReducer,
});
