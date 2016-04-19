import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { inputUserName } from '../AC/users'

class Login extends Component {
    state = {
        loginText: ''
    }


    static propTypes = {

    };

    static contextTypes = {

    }

    render() {
        const userName = this.props.userName? 'User: '+this.props.userName : null

        return (
            <div>
                {userName}<br/>
                {this.getUserInput()}
            </div>
        )
    }

    getUserInput() {
        return <form onSubmit={this.loginUser}>
            <label>Login: </label>
            <input type="text" value={this.state.loginText} onChange = {this.handleChange}/>
        </form>
    }

    loginUser = (ev) => {
        ev.preventDefault()
        inputUserName(this.state.loginText)
        this.setState({
            loginText: ''
        })
    }

    handleChange = (ev) => {
        this.setState({
            loginText: ev.target.value
        })
    }
}

function getState(stores) {
    return {
        userName: stores.user.userName
    }
}

export default connectToStore(['user'], getState)(Login)