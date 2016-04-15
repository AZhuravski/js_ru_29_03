import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { Link } from 'react-router'
import { loadCommentsPage } from '../AC/comments'
import Comment from '../components/Comment'

class CommentsContainer extends Component {
    static propTypes = {
        comments: PropTypes.array
    }

    render() {
        const { comments } = this.props
        if (!comments.every((item) => item)) {
            return <h3>Loading...</h3>
        }

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment} /></li>)
        return <ul>
                {commentItems}
            </ul>
    }
}

function getState(stores, props) {
    const { page } = props
    const total = stores.comments.total
    let comments = []
    for (let i=page*10-9; i<=page*10 && i<=total; i++) {
        comments = comments.concat(stores.comments.getById(i))
    }

    if (!comments.every((item) => item)) {
        loadCommentsPage({ limit:10, offset:page*10-10 })
    }

    return {
        comments: comments
    }
}

export default connectToStore(['comments'], getState)(CommentsContainer)