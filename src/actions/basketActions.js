import rc from '../store/redux-constants';

// eslint-disable-next-line
export const setBasket = (item) => {
    return {
        type: rc.SET_BASKET,
        selectedItems: item
    };
};
