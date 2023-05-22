// Core
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducers
import { rootReducer } from './reducers';


const middlewares = [];
export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
));
