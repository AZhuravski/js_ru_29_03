import React, { Component, PropTypes } from 'react'
import Navigation from '../containers/Navigation'
import Login from '../containers/Login'
import { Link } from 'react-router'
import connectToStore from '../HOC/connectToStore'

class Articles extends Component {
    static propTypes = {

    };

    static childContextTypes = {
        style: PropTypes.object,
        user: PropTypes.string
    }

    getChildContext() {
        return {
            style: {color: 'green'},
            user: this.props.userName
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
        if (this.props.userName) { 
            this.props.history.push('/articles/new') 
        } else {
            alert('please login to see new article')
            return;
        }

    }
}

function getState(stores) {
    const userName = stores.user.userName
    return { userName }
}

export default connectToStore(['user'], getState)(Articles)