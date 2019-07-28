import { combineReducers } from 'redux';
import { StylistReducer } from './StylistReducer';
import { LoginReducer } from './LoginReducer';
import { ProfileReducer } from './ProfileReducer';

export default combineReducers({
  LoginReducer,
  StylistReducer,
  ProfileReducer
})