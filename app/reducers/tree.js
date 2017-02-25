import { HYDRATE_STATE } from '../actions/types.js'

const initialState = {
  datas: {}
}

export function tree (state = initialState, action) {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        datas: {
          ...state.datas,
          ...action.data
        }
      }
    default:
      return state
  }
}
