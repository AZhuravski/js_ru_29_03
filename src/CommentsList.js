import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentsList extends Component {


    state = {
        isOpen: false,
    }

    render() {
        const commentsAmount = this.props.comments? this.props.comments.length : 0;
        const commentsLink = this.props.comments? 
            <p onClick={this.handleClick}>show comments <span className="amount">({commentsAmount})</span></p>
            :
            <p>no comments</p>
        const body = this.state.isOpen ? 
            <div className="comments">
                <p onClick={this.handleClick}>hide comments <span className="amount">({commentsAmount})</span></p>
                <ul>
                    {this.getList()}
                </ul>
            </div>
            :
            <div className="comments">
                {commentsLink}
            </div>

        return (
            <div className="comments-container">
                {body}
            </div>
        )
    }

    getList() {
        if (this.props.comments) {
            return this.props.comments.map((comment, index) =>
                <li className="comment-item" key={comment.id}><Comment comment = {comment} /></li>
            )            
        } else {
            return '';
        }
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentsList