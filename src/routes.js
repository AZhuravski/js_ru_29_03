import { Router, Route } from 'react-router'
import React from 'react'
import history from './history'
import App from './RouteHandlers/App'
import Articles from './RouteHandlers/Articles'
import Counter from './RouteHandlers/CounterRoute'

export default (
    <Router history = {history}>
        <Route path = "/" component = {App}>
            <Route path = "articles" component = {Articles} />
            <Route path = "counter" component = {Counter} />
        </Route>
    </Router>
)