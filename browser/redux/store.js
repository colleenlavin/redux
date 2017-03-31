import {createStore} from 'redux';
import reducer from './reducers/root-reducer';
import {applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
// invoking createLogger will give us an instance of redux-logger middleware

export default createStore(reducer, applyMiddleware());