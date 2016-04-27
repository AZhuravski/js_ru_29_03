import $ from 'jquery'

export function loadArticleById(id) {
    return $.get(`/api/article/${id}`)
}