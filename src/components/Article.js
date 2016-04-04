import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'
import toggleOpen from '../HOC/toggleOpen'

class Article extends Component {

    render() {
        const { article: { title }, isSelected, articleIsOpen } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {this.handleClick} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select this article</a>
                {this.getBody()}
            </div>
        )
    }

    componentDidMount() {
/*
        console.log('---', this.refs);
        console.log('---', 'commentList: ', this.refs.commentList, findDOMNode(this.refs.commentList));
*/
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }

    getBody() {
        const { article } = this.props
        if (!this.props.articleIsOpen) return null
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} ref = "commentList" />
            </section>
        )
    }

    handleClick = (ev) => {
        const { article: {id}, articleIsOpen, openArticle } = this.props
        const articleId = articleIsOpen? '' : id

        // open-close click
        this.props.toggleOpen()

        // open exact article and close the rest
        openArticle(articleId)
    }
}

export default toggleOpen(Article)
