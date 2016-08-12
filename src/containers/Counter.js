import React, { Component, PropTypes } from 'react'

// Connect - Redux tool which connects Store, AC to component.
// Connect is also HOC - hi-ordered component.
import { connect } from 'react-redux'
import { increment as pureInrement } from '../AC/counter'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired
    };

    render() {
        const { count } = this.props
        return (
            <div>
                <h1>{count}</h1>
                <a href = "#" onClick = {this.handleClick}>increment</a>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default connect((state) => {
    const { counter } = state
    return {count: counter}
}, {
    increment: pureInrement
})(Counter)