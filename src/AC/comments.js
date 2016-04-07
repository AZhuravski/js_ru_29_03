import AppDispatcher from '../dispatcher'
import { ADD_COMMENT } from '../constants'

export function addComment(id, text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: { id, text, articleId }
    })
}