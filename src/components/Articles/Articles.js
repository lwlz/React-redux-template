import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import history from '../../utils/history';
import DisplayArticles from './DisplayArticles'
import Pagination from '@material-ui/lab/Pagination';
import * as articlesActions from '../../actions/articlesActions';
import * as basketActions from '../../actions/basketActions';


class Articles extends PureComponent {

    constructor(props, context) {
        super(props, context);
        this.getArticles();
    }

    handleSelectArticle = (item) => {

        const { selectedItems } = this.props.basketRed;
        const newArticle = selectedItems.find((it) => it.id === item.id);

        if (!newArticle) {
            this.props.basketActions.setBasket([...selectedItems,item]);
        }

        else alert(`This item is already in your basket`)
        
    };


    retrieveDisplayOptions() {
        const tabulationList = this.props.location.pathname.split('/');
        const tab = tabulationList.findIndex((elem) => elem === 'articles');
        let pageNbr = 0;
        if (tab === -1) {
            const url = new URLSearchParams(history.location.search);
            pageNbr = parseInt(url.get('page') || '0', 10);
        }

        return {
            page: pageNbr > 0 ? pageNbr - 1 : 0,
            pageUrl: pageNbr || 1,
            size: 15
        };
    }

    getArticles = async () => {
        const displayOptions = this.retrieveDisplayOptions();
        await this.getArticlesPage(displayOptions);
    };

    async getArticlesPage(displayOptions) {
        await this.props.articlesActions.getList(displayOptions)
    }

    changePage = async (pageNumber, pageSize= 15) => {
        const displayListOptions = {
            page: pageNumber - 1,
            pageUrl: pageNumber,
            size: pageSize
        };
        await this.getArticlesPage(displayListOptions);
    };


    
    render() {
        const { data, totalElements } = this.props.articlesRed;
        
        return (
            <div>
                <DisplayArticles params={{ data: data, handleSelectArticle: this.handleSelectArticle }}/>
                <div style={{ marginTop:32,marginBottom:32, display:'flex', flexDirection:'row-reverse'}}>
                    <Pagination
                        count={Math.round(totalElements/15)+ 1 }
                        color='primary'
                        onChange={(event, page) => {this.changePage(page)}}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counterRed: state.counterReducer,
    articlesRed: state.articlesReducer,
    basketRed:state.basketReducer
});

const mapDispatchToProps = (dispatch) => ({
    articlesActions: bindActionCreators(articlesActions, dispatch),
    basketActions: bindActionCreators(basketActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
