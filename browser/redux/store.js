import {createStore} from 'redux';
import reducer from './reducers/root-reducer';
import {applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'
// invoking createLogger will give us an instance of redux-logger middleware
 const appliedMiddleware = applyMiddleware(createLogger())
export default createStore(reducer, appliedMiddleware);