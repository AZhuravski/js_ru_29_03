import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllArticles } from '../AC/articles'
import ArticleList from '../componentsNew/ArticleList'

class ArticleListContainer extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadAllArticles()
    }

    render() {
        return <ArticleList {...this.props}/>
    }
}

export default connect(state => {
    const { articles } = state

    return { articles: articles.entities, loading: articles.loading }
}, {
    loadAllArticles
})(ArticleListContainer)