// Action types are constants and saved in appropriate folder.
// Here in reducers direct application data change is made and then a NEW state is returned. 
// Thanks to replaceReducer Redux tool these changes can be tested for several reducer conditions.

import { INCREMENT } from '../constants'

export default (state = 0, action) => {
    const { type, data } = action
    return type == INCREMENT ? state - 5 : state
}
