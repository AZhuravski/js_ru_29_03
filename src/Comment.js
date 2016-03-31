import React, { Component, PropTypes } from 'react'

class Comment extends Component {

    render() {
        const { text, id} = this.props.comment;
        return (
            <section className="comment">{text}</section>
        )
    }
}

export default Comment