import { EventEmitter } from 'events'
import DataWrapper from './DataWrapper'

class SimpleStore extends EventEmitter {
    constructor(stores, initialData) {
        super()
        this.__stores = stores
        this.__items = {}
        if (initialData) initialData.forEach(this.__add)
    }

    emitChange() {
        this.emit('CHANGE_EVENT')
    }

    addChangeListener(callback) {
        this.on('CHANGE_EVENT', callback)
    }

    removeChangeListener(callback) {
        this.removeListener('CHANGE_EVENT', callback)
    }

    getStores() {
        return this.__stores
    }

    getStore(name) {
        return this.__stores[name]
    }

    getById = (id) => {
        return this.__items[id]
    }

    getAll = () => {
        return Object.keys(this.__items).map(this.getById)
    }

    getLength = () => {
        return this.__items.length
    }

    __add = (item) => {
        this.__items[item.id] = new DataWrapper(item, this)
    }

    __delete = (id) => {
        delete this.__items[id]
    }

    __update = (item) => {
        const entity = this.getById(item.id)
        if (!entity) return this.__add(item)
        Object.assign(entity, item)
    }
}

export default SimpleStore