import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import Comment from './Comment/index.js'
import toggleOpen from '../HOC/toggleOpen'
import { addComment } from '../AC/comments'

class CommentList extends Component {
    state = {
        isFormShown: false,
        inputValue: ''
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
        const formStyle = this.state.isFormShown? 
            {
                display: 'block',
                margin: '10px 0',
            }
            : 
            {display: 'none'}
        return (
            <div>
                <a href="#" onClick = {this.props.toggleOpen}>{text}</a>&nbsp;|&nbsp;
                <a href="#" onClick = {this.showForm}>add comment</a>

                <form style={formStyle} role='form' onSubmit={this.addComment}>
                    <input type='text' value={this.state.inputValue}
                        onChange={this.handleChange}
                        placeholder='Write your comment here'
                        ref="theInput"
                    />
                </form>
            </div>
        )
            
    }

    getBody() {
        const { comments } = this.props
        if (!this.props.isOpen || !comments) return null
        const commetItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        return <ul>{commetItems}</ul>
    }

    showForm = (ev) => {
        ev.preventDefault()
        this.setState({
            isFormShown: true
        })

        this.setState({inputValue: ''}, () => {
            findDOMNode(this.refs.theInput).focus();
        });
    }

    handleChange = (ev) => {    
        this.setState({
            inputValue: ev.target.value
        });
    }

    addComment = (ev) => {
        ev.preventDefault()
        addComment(this.props.nextCommentId, this.state.inputValue, this.props.articleId)
        this.setState({
            isFormShown: false,
            inputValue: ''
        })
    }
}

export default toggleOpen(CommentList)