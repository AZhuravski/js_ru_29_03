// combineReducers - this Redux tool is used in case of several reducers to combine them
import { combineReducers } from 'redux' 

import articleReducer from './articles'
import counterReducer from './counter'

export default combineReducers({
    articles: articleReducer,
    counter: counterReducer
})

// ES6 allows to use the next construction instead:
// import articles from './articles'
// import counter from './counter'

// export default combineReducers({
//     articles, counter
// })