import React, { Component, PropTypes } from 'react'
import Counter from './Counter'
import { Provider } from 'react-redux' // Redux functionality. It connects Root component with Store.
import DevTools from './DevTools' // Development Tools - that's why we use pure functions and functional approach in Redux
import ArticleList from './ArticleList'

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