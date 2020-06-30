import { createReducer } from '../store/configureReducer';
import rc from '../store/redux-constants';

const initialState = {
    selectedItems: [],
    isError: false,
    isLoading: false,
    totalElements: 0
};

export default createReducer(initialState, {
    [rc.SET_BASKET]: (state, action) => {
        return {
            ...state,
            selectedItems: action.selectedItems
        };
    }
});
