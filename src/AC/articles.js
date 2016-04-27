import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID, START, SUCCESS, FAIL } from '../constants'
import { loadArticleById as loadById } from './api'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        data: { id }
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callApi: '/api/article'
    }
}

export function loadArticleById(id) {
    return (dispatch, store) => {
        dispatch({
            type: LOAD_ARTICLE_BY_ID + START
        })

        loadById(id)
            .done(response => dispatch({
                type: LOAD_ARTICLE_BY_ID + SUCCESS,
                data: { id },
                response
            }))
            .fail(error => dispatch({
                type: LOAD_ARTICLE_BY_ID + FAIL,
                data: { id },
                error
            }))
    }
}