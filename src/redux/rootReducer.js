import { combineReducers } from 'redux'
import { loginReducer } from './reducers/loginReducer'

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    // Similarly you can add many reducers here to combine them all together.
})
export default rootReducer