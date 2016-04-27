import React from 'react'
import { render } from 'react-dom'
import store from './store'
import routes from './routes'

window.store = store

render(routes, document.getElementById('container'))

/*
function wrappedIncrement() {
    store.dispatch(increment())
}

function renderCounter() {
    render(<Counter count = {store.getState().counter} increment = {wrappedIncrement} />, document.getElementById('container'))
}

renderCounter()

store.subscribe(renderCounter)
*/
