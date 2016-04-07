import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList'
import { findDOMNode } from 'react-dom'
import {deleteArticle} from '../AC/articles'

class Article extends Component {

    render() {
        const { article: { title }, isSelected, isOpen, openItem } = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div ref = "articleContainer">
                <h3 onClick = {openItem} style = {style}>{title}</h3>
                <a href = "#" onClick = {this.handleSelect}>select</a>&nbsp;|&nbsp;
                <a href = "#" onClick = {this.deleteArticle}>delete</a>
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

    deleteArticle = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }

    handleSelect = (ev) => {
        const { article: {id}, selectArticle } = this.props
        selectArticle(id)
    }

    getBody() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentList comments = {article.comments} ref = "commentList" />
            </section>
        )
    }
}

export default Article
