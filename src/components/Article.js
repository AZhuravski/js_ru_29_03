import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        selectArticle: PropTypes.func.isRequired,
        isSelected: PropTypes.bool,
        openItem: PropTypes.func.isRequired,
        deleteArticle: PropTypes.func.isRequired,
        loadArticle: PropTypes.func.isRequired
    }
    render() {
        const { article: { title }, isSelected, openItem, deleteArticle, loadArticle } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {openItem} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a> |
                <a href = "#" onClick = {this.deleteArticle}>delete this article</a>
                {this.getBody()}
            </div>
        )
    }

    deleteArticle = (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(this.props.article.id)
    }

    componentDidMount() {
/*
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
*/
    }

    componentWillReceiveProps(nextProps) {
        //если б здесь была проверка, нужно ли загружать текст - статью можно было бы открыть
        if (nextProps.isOpen > this.props.isOpen && !nextProps.article.text) {
            this.props.loadArticle(this.props.article.id)();
        }
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }

    getBody() {
        if (!this.props.isOpen) return null
        const { article } = this.props
        if (this.props.loading) {
            return <h4>Article Loading...</h4>
        } else {
            return (
                <section>
                    {article.text}
                    <CommentList article = {article} ref = "commentList" />
                </section>
            )            
        }
    }
}

export default Article
