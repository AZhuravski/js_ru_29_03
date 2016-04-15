import React, { Component, PropTypes } from 'react'
import CommentsNavigation from '../containers/CommentsNavigation'

class Comments extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <CommentsNavigation />
                {this.props.children}
            </div>
        )
    }
}

export default Comments