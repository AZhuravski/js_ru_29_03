import store from './store'

export function pureGetRelation(state, entity, relation) {
    const relationSubTree = state[relation]
    if (!relationSubTree || !entity[relation]) return []

    return relationSubTree.entities.filter(id => entity[relation.includes(id)])
}

//not a pure function
export function getRelation(entity, relation) {
    return pureGetRelation(store.getState(), entity, relation)
}