import React, { Component, PropTypes } from 'react'
import ArticleList from '../containers/ArticleList'

class ArticlesRoute extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ArticleList />
            </div>
        )
    }
}

export default ArticlesRoute