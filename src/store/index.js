import { createStore, compose } from 'redux' // Compose - for middleware composition. (and for Redux DevTools)
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import api from '../middlewares/api'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import multi from 'redux-multi'
import { applyMiddleware } from 'redux' // For side-effects. Connects Middleware to Store.
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(multi, thunk, api, createLogger()),
    DevTools.instrument()
)

// Now we have one store but several reducers that are combined by Redux.
// createStore( REDUCER, STATE, MIDDLEWARE)
const store = createStore(reducer, {}, enhancer) 

// One of Redux dev. tools - replaceReducer
// allows you to exchange reducers keeping history
if (module.hot) {
    module.hot.accept('../reducer', () =>
        store.replaceReducer(require('../reducer').default)
    );
}
export default store