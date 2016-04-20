import React, { Component, PropTypes } from 'react'
import connectToStore from '../HOC/connectToStore'
import { inputUserName } from '../AC/users'

class Login extends Component {
    state = {
        loginText: ''
    }

    static contextTypes = {
        style: PropTypes.object,
        user: PropTypes.string
    }

    render() {
        const user = this.context.user
        const userName = user? 'User: '+user : null

        return (
            <div>
                {userName}<br/><br/>
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

export default Login