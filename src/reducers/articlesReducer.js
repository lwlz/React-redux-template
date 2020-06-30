import { createReducer } from '../store/configureReducer';
import rc from '../store/redux-constants';

const initialState = {
    data: [],
    isError: false,
    isLoading: false,
    totalElements: 0
};

export default createReducer(initialState, {
    [rc.ARTICLES_LIST_LOAD]: (state) => {
        return {
            ...state,
            isError: false,
            isLoading: true
        };
    },

    [rc.ARTICLES_LIST_SUCCESS]: (state, action) => {
        return {
            ...state,
            data: action.result.data,
            isError: false,
            isLoading: false,
            totalElements: action.result.totalElements || 0,
            currentPage: action.result.currentPage || 0
        };
    },

    [rc.ARTICLES_LIST_FAIL]: (state) => {
        return {
            ...state,
            isLoading: false,
            isError: true
        };
    }
});
