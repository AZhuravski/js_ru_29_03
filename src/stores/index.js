import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'
import UserStore from './UserStore'
import SimpleStore from './SimpleStore'
import { normalizedArticles, normalizedComments } from '../fixtures'

const stores = {}

Object.assign(stores, {
    articles: 	new ArticleStore(stores),
    comments: 	new CommentStore(stores),
    user: 		new UserStore(stores)
})

//for debug only
window.stores = stores

export default stores
export const commentStore = stores.comments
export const articleStore = stores.articles
export const userStore = stores.user