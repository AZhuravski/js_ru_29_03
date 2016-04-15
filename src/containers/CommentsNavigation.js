import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { Link } from 'react-router'

class CommentsNavigation extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired,
        loading: PropTypes.bool,
        total: PropTypes.number
    };

    render() {
        const { comments, loading, total } = this.props
        if (loading) return <h3>Loading...</h3>
        var links = []
            ,i = 1
            ,page = 1
        while (i<total) {
            const k = (i+9<total)? i+9 : total
            links = links.concat(
                <li key={page}>
                    <Link to={`/comments/${page}`} activeClassName="active" activeStyle = {{color: 'red'}}>{i}-{k}</Link>
                </li>
            ) 
            i += 10
            page +=1
        }
        return (
            <ul>
                {links}
            </ul>
        )
    }
}

function getState(stores) {
    return {
        comments: stores.comments.countCommentsQuantity(),
        loading: stores.comments.loading,
        total: stores.comments.total
    }
}

export default connectToStore(['comments'], getState)(CommentsNavigation)