import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { asyncRequest } from '../middlewares/asyncRequest';
import rootReducer from '../reducers';
import history from '../utils/history'

export function configureStore(initialState = {}) {
    const middleware = [thunk, asyncRequest, routerMiddleware(history)];
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(rootReducer(history), initialState, composeEnhancers(applyMiddleware(...middleware)));
}
