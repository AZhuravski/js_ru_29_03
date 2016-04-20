import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { ADD_COMMENT, LOAD_COMMENTS_FOR_PAGE, LOAD_COMMENTS_FOR_ARTICLE, START, SUCCESS, LOADING } from '../constants'
import { loadCommentsForPage } from '../AC/comments'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)
        this.pagination = {}

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.text,
                        id: data.id,
                        article: data.articleId,
                        user: data.userName
                    })
                    break;

                case LOAD_COMMENTS_FOR_PAGE + START:
                    this.pagination[data.page] = LOADING
                    break

                case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
                    this.total = response.total
                    this.pagination[data.page] = response.records.map(comment => comment.id)
                    response.records.forEach(this.__add)
                    break;

                case LOAD_COMMENTS_FOR_ARTICLE + START:
                    break;

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    response.forEach(this.__update)
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadForPage = (page) => {
        const pagination = this.pagination[page]
        if (!pagination) loadCommentsForPage({ page })
        if (!pagination || pagination == LOADING) return LOADING
        return pagination.map(this.getById)
    }

    getByArticleId = (id) => {
        let articleComments = []
        for (let key in this.__items){
            const comment = this.getById(key)
            articleComments = (comment.article === +id)? articleComments.concat(this.getById(key)) : articleComments
        }
        return articleComments
    }
}

export default CommentStore