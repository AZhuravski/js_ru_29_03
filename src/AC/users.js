import { INPUT_USER_NAME } from '../constants'
import AppDispatcher from '../dispatcher'

export function inputUserName(userName) {
    AppDispatcher.dispatch({
        type: INPUT_USER_NAME,
        data: {
            userName 
        }
    })
}