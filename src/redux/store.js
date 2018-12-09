import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import freeze from 'redux-freeze'
import _ from 'lodash'
import rootReducer from './rootReducer'

const logger = createLogger()
const middleware = _.compact([thunk, freeze, logger])
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
const store = createStoreWithMiddleware(rootReducer)

export default store
