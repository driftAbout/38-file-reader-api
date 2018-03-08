import App from './app';
import {store} from '../../lib';

if(localStorage.token) store.dispatch({type: 'TOKEN_SET', payload: localStorage.token});

export {App};