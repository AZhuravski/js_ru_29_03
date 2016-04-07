import React, { Component, PropTypes } from 'react'
import { articleStore } from '../stores'
import { commentStore } from '../stores'
import ArticleList from './../components/ArticleList'
import { deleteArticle } from '../AC/articles'

class AppContainer extends Component {
    static propTypes = {

    };

    constructor() {
        super()
        this.state = this.getState()
    }

    getState() {
        return {
            articles: articleStore.getAll()
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.changeArticles)
        commentStore.addChangeListener(this.changeArticles)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.changeArticles)
        commentStore.removeChangeListener(this.changeArticles)
    }

    changeArticles = () => {
        this.setState(this.getState())
    }

    render() {
        const comments = commentStore.getAll()
        //использовать length для id не лучший выбор
        const nextCommentId = comments.length
        return <ArticleList 
            articles = {this.state.articles} 
            deleteArticle = {deleteArticle}
            nextCommentId = {nextCommentId}
            />
    }
}

export default AppContainer
