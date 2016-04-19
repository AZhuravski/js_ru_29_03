import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID, LOAD_COMMENTS_FOR_ARTICLE } from '../constants'
import { loadAll, loadById } from './api/articles'
import { loadForArticle } from './api/comments'
import { asyncAC, promisification } from './utils'
import history from '../history'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export const loadAllArticles = asyncAC(loadAll, LOAD_ALL_ARTICLES)
//export const loadArticleById = asyncAC(loadById, LOAD_ARTICLE_BY_ID, (dfd) => dfd.fail(() => history.push('/articles/')))

export const loadArticleById = (...args) => {
	Promise.all([
		promisification( asyncAC(loadById, LOAD_ARTICLE_BY_ID, (dfd) => dfd.fail(() => history.push('/articles/'))), ...args),
		promisification( asyncAC(loadForArticle, LOAD_COMMENTS_FOR_ARTICLE), ...args)
	]).then(results => {});
}


