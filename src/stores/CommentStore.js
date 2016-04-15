import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { countComments } from '../AC/comments'
import { ADD_COMMENT, COUNT_COMMENTS, LOAD_COMMENTS_PART, START, SUCCESS, FAIL } from '../constants'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        CommentStore.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case ADD_COMMENT:
                    this.__add({
                        text: data.text,
                        id: data.id
                    })
                    break;

                case COUNT_COMMENTS + START:
                    this.loading = true
                    break;

                case LOAD_COMMENTS_PART + START:
                    break;

                case COUNT_COMMENTS + SUCCESS:
                case LOAD_COMMENTS_PART + SUCCESS:
                    this.total = response.total
                    this.loading = false
                    response.records.forEach(this.__add)
                    break;

                case COUNT_COMMENTS + FAIL:
                case LOAD_COMMENTS_PART + FAIL:
                    this.error = error
                    break;

                default: return
            }
            this.emitChange()
        })
    }

    countCommentsQuantity() {
        const comments = this.getAll()
        if (!comments.length) countComments({limit:10 , offset:0})
            console.log();
        return comments
    }
}

export default CommentStore