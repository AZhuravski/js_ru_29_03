import React from 'react'
import { render } from 'react-dom'
import store from './store'
import routes from './routes'

// It's for debugging only. Store is available in console now.
window.store = store

render(routes, document.getElementById('container'))

/*

//this block is exchanged to CONNECT redux function which performs these steps inside: dispatch, subscribe and store-entities connection

function wrappedIncrement() {
    store.dispatch(increment())
}

function renderCounter() {
    render(<Counter count = {store.getState().counter} increment = {wrappedIncrement} />, document.getElementById('container'))
}

renderCounter()

store.subscribe(renderCounter)
*/
