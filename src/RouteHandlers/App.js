import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'

class App extends Component {
    static propTypes = {

    };

    render() {
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}

export default App