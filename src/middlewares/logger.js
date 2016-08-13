// Side effect functionality - middlewares.
// Here it is shows Store before and after Action.

export default store => next => action => {
    console.log('---', 'before', store.getState())
    console.log('---', 'dispatching', action)

    // next passes action futhers
    
    next(action)
    console.log('---', 'after', store.getState())
}