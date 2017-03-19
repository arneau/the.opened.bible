import { combineReducers } from 'redux'

import { aside } from './reducers/aside.js'
import { groups } from './reducers/groups.js'

export default combineReducers({
  aside,
  groups
})
