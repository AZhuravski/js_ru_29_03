import React, { Component, PropTypes } from 'react'
import Counter from './Counter'
// Redux functionality. It provides Root component (Connect tool) with Store via Context.
// Provider puts Store from props to Context.
import { Provider } from 'react-redux' 
import DevTools from './DevTools' // Development Tools - that's why we use pure functions and functional approach in Redux
import ArticleList from './ArticleList'

// Root container is for Store->Context->Connect connection

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Counter />
                    <ArticleList />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Root