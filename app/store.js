import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import Reducers from './reducers.js'
import { DevToolsEnhancer } from './dev_tools.js'

export default createStore(
  Reducers,
  {},
  compose(
    applyMiddleware(thunkMiddleware),
    DevToolsEnhancer
  )
)
