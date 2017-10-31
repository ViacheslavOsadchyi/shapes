import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import {shapesApp, initialState} from './reducers';
const store = createStore(shapesApp, initialState, applyMiddleware(logger));
export default store;
