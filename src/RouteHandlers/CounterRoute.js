import React, { Component, PropTypes } from 'react'
import Counter from '../containers/Counter'

class CouterRoute extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <Counter />
            </div>
        )
    }
}

export default CouterRoute