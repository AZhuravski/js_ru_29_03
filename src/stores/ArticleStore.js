import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { DELETE_ARTICLE } from '../constants'


class ArticleStore extends SimpleStore {
	constructor(initialData) {
		super()

		AppDispatcher.register( (action)=> {
			const { type, data } = action

			switch (type) {
				case DELETE_ARTICLE:
					this.__delete(data.id)
					this.emitChange()
					break;
			}
			console.log('---',this.getAll());
		})
	}
}

export default ArticleStore