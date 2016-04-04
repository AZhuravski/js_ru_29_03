import React, { Component, PropTypes } from 'react'
import Article from './Article'

class AricleList extends Component {
    state = {
        selectedArticles: [],
        openedArticle: ''
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
                    isOpen = { (this.state.openedArticle == article.id) }
                    selectArticle = {this.selectArticle}
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
        this.setState({
            openedArticle: id
        })
    }
}

export default AricleList