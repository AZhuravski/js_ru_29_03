import AppDispatcher from '../dispatcher'
import SimpleStore from './SimpleStore'
import { INPUT_USER_NAME } from '../constants'

class UserStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response } = action

            switch (type) {
                case INPUT_USER_NAME:
                    this.userName = data.userName
                    break;

                default: return
            }

            this.emitChange()
        })
    }
}

export default UserStore