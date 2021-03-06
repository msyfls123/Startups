import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers/reducers'

const loggerMiddleware = createLogger()
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)
export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState, window.devToolsExtension && window.devToolsExtension())
}

// export default function configureStore(initialState) {
//    return createStore(rootReducer, initialState)
//  }
