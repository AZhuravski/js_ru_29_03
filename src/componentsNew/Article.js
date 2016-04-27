import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { deleteArticle, loadArticleById } from '../AC/articles'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        deleteArticle: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <h3 onClick = {this.handleLoadArticle}>{this.props.article.title}</h3>
                <a href = "#" onClick = {this.handleDelete}>delete article</a>
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        const { deleteArticle, article: { id }} = this.props
        deleteArticle(id)
    }

    handleLoadArticle = (ev) => {
        const { loadArticleById, article: { id }} = this.props
        loadArticleById(id)
    }
}

export default connect(null, { deleteArticle, loadArticleById })(Article)