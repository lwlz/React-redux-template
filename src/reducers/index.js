import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import rc from '../store/redux-constants';
import articlesReducer from './articlesReducer';
import basketReducer from './basketReducer';

const getAppReducer = (history) => {
    return combineReducers({
        router: connectRouter(history),
        articlesReducer,
        basketReducer
    });
};

const rootReducer = (history) => {
    const appReducer = getAppReducer(history);
    return (state, action) => {
        let stateTransferred = state;
        if ([rc.USER_LOGOUT, rc.SWITCH_ACCOUNT_SUCCESS].indexOf(action.type) >= 0) {
            stateTransferred = undefined;
        }
        return appReducer(stateTransferred, action);
    };
};

export default rootReducer;
