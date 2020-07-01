import API from '../utils/Api'
export default class ArticlesService {
    static getArticles = async (params) => {
       
        try {
            const articles = await API.get(`photos?_page=${params.pageUrl}&_limit=${params.size}`);
            const totalArticles = await API.get(`photos`);
            const totalElements = totalArticles.data.length

            const response = {
                articles,
                totalElements
            }
            return response;
        } catch (err) {
            return Promise.reject(err);
        }
    };


}
