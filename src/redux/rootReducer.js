import { combineReducers } from 'redux'
import  loginStatus  from './reducers/loginReducer'

const rootReducer = combineReducers({
    loginStatus: loginStatus,
    // Similarly you can add many reducers here to combine them all together.
})
export default rootReducer