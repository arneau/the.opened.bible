import { HYDRATE_STATE } from '../actions/types.js'

const initialState = {
  datas: {},
  tree: {}
}

export function groups (state = initialState, action) {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        datas: {
          ...state.datas,
          ...action.payload.groups.datas
        },
        tree: {
          ...state.tree,
          ...action.payload.groups.tree
        }
      }
    default:
      return state
  }
}
