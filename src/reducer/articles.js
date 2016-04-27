import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE_BY_ID, START, SUCCESS, FAIL } from '../constants'

const defaultState = {
    loading: false,
    loaded: false,
    entities: []
}

export default (articles = defaultState, action) => {
    const { type, data, response } = action

    switch (type) {
        case DELETE_ARTICLE: return {
            ...articles,
            entities: articles.entities.filter((article) => article.id != data.id)
        }
        case LOAD_ALL_ARTICLES + START: return Object.assign({}, articles, {loading: true})
        case LOAD_ALL_ARTICLES + SUCCESS: return {entities: response, loaded: true}
    }

    return articles
}