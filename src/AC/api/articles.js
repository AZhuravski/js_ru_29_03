import $ from 'jquery'

export function loadAll() {
    return $.get('/api/article')
}

export function loadArt(id) {
    return $.get('/api/article/'+id)
}