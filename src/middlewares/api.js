import $ from 'jquery'
import { SUCCESS, START, FAIL} from '../constants'

export default store => next => action => {
    const { callApi, type, ...rest } = action
    if (!callApi) return next(action)

    next({...rest, type: type + START})

    $.get(callApi)
        .done(response => next({...rest, type: type + SUCCESS, response}))
        .fail(error => next({...rest, type: type + FAIL, error}))
}