import { createStore } from 'redux'

import Reducers from './reducers.js'
import { DevToolsEnhancer } from './dev_tools.js'

export default createStore(Reducers, {}, DevToolsEnhancer)
