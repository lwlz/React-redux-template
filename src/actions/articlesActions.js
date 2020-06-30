import rc from '../store/redux-constants';
import Services from '../services';

// eslint-disable-next-line
export const getList = (params) => ({
    types: [rc.ARTICLES_LIST_LOAD, rc.ARTICLES_LIST_SUCCESS, rc.ARTICLES_LIST_FAIL],
    promise: () => Services.ArticlesService.getArticles(params),
    pushToUrl: {
        page: params.pageUrl
    }
});
