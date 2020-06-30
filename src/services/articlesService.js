import API from '../utils/Api'
export default class ArticlesService {
    static getArticles = async (params) => {
       
        try {
            const articles = await API.get(`photos?_page=${params.pageUrl}&_limit=${params.size}`);
            return articles;
        } catch (err) {
            return Promise.reject(err);
        }
    };


}
