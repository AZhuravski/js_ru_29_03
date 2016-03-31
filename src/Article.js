import React, { Component, PropTypes } from 'react'
import CommentsList from './CommentsList'

class Article extends Component {

    state = {
        isOpen: false,
    }

    render() {
        const { title, text, comments} = this.props.article;           
        const body = this.state.isOpen ? 
            <section className="body">
                <p>{text}</p>
                <CommentsList comments = {comments} />
            </section>
            : 
            null

        return (
            <div className="article">
                <h2 className="title" onClick={this.handleClick}>{title}</h2>
                {body}
            </div>
        )
    }

    handleClick = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article