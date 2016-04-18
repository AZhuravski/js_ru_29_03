import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { Link } from 'react-router'
import { loadArticleById, deleteArticle } from '../AC/articles'
import { loadArticleComments } from '../AC/comments'
import Article from '../components/Article'

class ArticleContainer extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        article: PropTypes.object,
        comments: PropTypes.array
    };

    render() {
        const { article } = this.props
        const { comments } = this.props
        if (!article || article.loading) return <h3>Loading...</h3>

        return <Article
            article = {article}
            comments = {comments}
            ignoreLoading = {true}
            deleteArticle = {deleteArticle}
            isOpen = {true} />
    }
}

function getState(stores, props) {
    const { id } = props
    const article = stores.articles.getById(id)
    if (!article || !article.text && !article.loading) loadArticleById({ id })

    const comments = []
    if (!comments.length && article && article.text) loadArticleComments({ id })

    return { article, comments }
}

export default connectToStore(['articles','comments'], getState)(ArticleContainer)