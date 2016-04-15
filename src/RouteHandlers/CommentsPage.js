import React, { Component, PropTypes } from 'react'
import CommentsContainer from '../containers/Comments'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        const { page } = this.props.params

        return (
            <div>
                <h3>Comments page {page}</h3>
                <CommentsContainer page = {page} key = {page} />
            </div>
        )
    }
}

export default CommentsPage