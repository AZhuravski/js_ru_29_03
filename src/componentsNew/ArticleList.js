import React, { Component, PropTypes } from 'react'
import Article from './Article'
import Select from 'react-select'
require('react-select/dist/react-select.css')

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array,
        loading: PropTypes.bool
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.articles != this.props.articles
    }

    render() {
        const { articles, loading } = this.props
        if (loading) return <h1>Loading...</h1>
        const items = articles.map((article) => <li key = {article.id}><Article {...{ article }}/></li>)
        return (
            <ul>
                <Select
                    options = {articles}
                    valueKey = "id"
                    labelKey = "title"
                />
                {items}
            </ul>
        )
    }
}

export default ArticleList