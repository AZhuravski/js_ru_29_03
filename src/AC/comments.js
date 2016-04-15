import AppDispatcher from '../dispatcher'
import { ADD_COMMENT, COUNT_COMMENTS, LOAD_COMMENTS_PART } from '../constants'
import { loadCommentsPart } from './api/comments'
import { asyncAC } from './utils'

export function addComment(text, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            text, articleId,
            id: Date.now()
        }
    })
}

export const countComments = asyncAC(loadCommentsPart, COUNT_COMMENTS)
export const loadCommentsPage = asyncAC(loadCommentsPart, LOAD_COMMENTS_PART)