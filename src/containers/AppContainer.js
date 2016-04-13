import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import ArticleList from './../components/ArticleList'
import { deleteArticle, loadAllArticles, loadArticle } from '../AC/articles'
import connectToStore from '../HOC/connectToStore'

class AppContainer extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

/*
    componentDidMount() {
        loadAllArticles()
    }

*/
    render() {
        const { articles, loading } = this.props
        if (!loading && !articles.length) {
            return <h1>Loading...</h1>
        }
        //вы вешаете лоадер сразу на все, соответственно сначала убирается старый ArticcleList, ставиться Loader,
        //потом новый ArticleList. 
        //Нужно показывать лоадер для статьи, или внести в ArticleList
        return <ArticleList
                    articles = {articles} 
                    deleteArticle = {deleteArticle}
                    loadArticle = {loadArticle} 
                    loading = {loading} />
    }
}

function getState(stores) {
    return {
        articles: stores.articles.getOrLoadAll(),
        loading: stores.articles.loading
    }
}

export default connectToStore(['articles'], getState)(AppContainer)
