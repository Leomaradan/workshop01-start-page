import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares = [
    thunk,
    logger
];

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;