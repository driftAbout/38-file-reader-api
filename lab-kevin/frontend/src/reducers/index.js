import {combineReducers} from 'redux';
import signReducer from './sign-reducer';

export default combineReducers(
  {
    token: signReducer,
  }
);