import { combineReducers } from 'redux'
import { loginReducer } from './reducers/loginReducer'

const rootReducer = combineReducers({
    loginReducer: loginReducer,
})
export default rootReducer