import { TOGGLE_ASIDE } from '../actions/aside.js'

const initialState = {
  isVisible: false
}

export function aside (state = initialState, action) {
  switch (action.type) {
    case TOGGLE_ASIDE:
      return {
        isVisible: !state.isVisible
      }
    default:
      return state
  }
}
