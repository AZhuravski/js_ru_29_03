import $ from 'jquery'

export function loadCommentsPart({ limit, offset }) {
    return $.get(`/api/comment?limit=${limit}&offset=${offset}`)
}