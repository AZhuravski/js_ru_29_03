import React, { Component as ReactComponent } from 'react'

export default (Component) => class ComponentOpened extends ReactComponent {
    state = {
        openedComponent: ''
    }

    componentOpened = (id) => {
        // if (ev) ev.preventDefault()
        this.setState({
            openedComponent: id
        })
    }

    render() {
        return <Component {...this.props} openedComponent = {this.state.openedComponent} componentOpened = {this.componentOpened}/>
    }
}