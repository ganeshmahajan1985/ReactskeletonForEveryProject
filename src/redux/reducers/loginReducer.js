import C from '../../constants'

const loginStatus = (state = false, action) =>{
    switch (action.type) {
        case C.LOG_IN:
            return true

        case C.LOG_OUT:
            return false

        default:
            return state
    }
}

export default loginStatus
