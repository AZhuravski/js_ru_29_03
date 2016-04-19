import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import Login from '../containers/Login'
import { Link } from 'react-router'

class Articles extends Component {
    static propTypes = {

    };

    static childContextTypes = {
        style: PropTypes.object
    }

    getChildContext() {
        return {
            style: {color: 'green'}
        }
    }

    render() {
        return (
            <div>
                <Login />
                <h3 onClick={this.redirectToNew}>New article</h3>
                <Navigation />
                {this.props.children}
            </div>
        )
    }

    redirectToNew = (ev) => {
        this.props.history.push('/articles/new')
    }
}

export default Articles