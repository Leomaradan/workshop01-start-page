import { combineReducers } from 'redux';
import { linkReducer } from './linkReducer';
import { optionReducer } from './optionReducer';
import { backgroundReducer } from './backgroundReducer';

export default combineReducers({
  links: linkReducer,
  options: optionReducer,
  background: backgroundReducer,
});
