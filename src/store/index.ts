import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducers/RootReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, composeEnhancers(middleware));

export default store;
