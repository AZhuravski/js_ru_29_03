import React, { Component, PropTypes } from 'react'
import Comment from './Comment/index.js'
import toggleOpen from '../HOC/toggleOpen'
import { addComment } from '../AC/comments'

class CommentList extends Component {
    state = {
        commentText: ''
    }

    static contextTypes = {
        user: PropTypes.string
    }

    render() {
        return (
            <div>
                {this.getLink()}
                {this.getBody()}
            </div>
        )
    }

    getLink() {
        const text = this.props.isOpen ? 'close comments' : 'open comments'
        return <a href="#" onClick = {this.props.toggleOpen}>{text}</a>
    }

    getBody() {
        const { article, isOpen, comments } = this.props
        
        // if (!isOpen || !comments) return null
        if (!isOpen) return null

        const commetItems = comments? comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>) : null
        return <ul>
                {commetItems}
                <li>{this.getCommentInput()}</li>
            </ul>
    }

    getCommentInput() {
        return <form onSubmit={this.addComment}>
            <label>new comment: </label>
            <input type="text" value={this.state.commentText} onChange = {this.handleChange}/>
        </form>
    }

    addComment = (ev) => {
        ev.preventDefault()
        const user = this.context.user? this.context.user : 'guest'
        addComment(this.state.commentText
            ,this.props.article.id
            ,user)
        this.setState({
            commentText: ''
        })
    }

    handleChange = (ev) => {
        this.setState({
            commentText: ev.target.value
        })
    }
}

export default toggleOpen(CommentList)