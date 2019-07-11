import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';
import promise from 'redux-promise-middleware';

//const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//const middleware = [promise, thunkMiddleware, loggerMiddleware];
const middleware = [promise, thunkMiddleware];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
