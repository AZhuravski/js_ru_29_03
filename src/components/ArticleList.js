import React, { Component, PropTypes } from 'react'
import Article from './Article'
import componentOpened from '../HOC/componentOpened'

class ArticleList extends Component {
    state = {
        selectedArticles: [],
    }

    render() {
        return (
            <div>
                <ul>
                    {this.getList()}
                </ul>
            </div>
        )
    }

    getList() {
        return this.props.articles.map((article, index) =>
            <li key={article.id}>
                <Article
                    article = {article}
                    isSelected = {this.state.selectedArticles.includes(article.id)}
                    selectArticle = {this.selectArticle}
                    articleIsOpen = { (this.props.openedComponent==article.id) }
                    openArticle = {this.openArticle}
                />
            </li>
        )
    }

    selectArticle = (id) => {
        this.setState({
            selectedArticles: this.state.selectedArticles.concat(id)
        })
    }

    openArticle = (id) => {
        this.props.componentOpened(id)
    }
}

export default componentOpened(ArticleList)