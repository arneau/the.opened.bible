import { HYDRATE_STATE, HYDRATE_RESULTS } from '../actions/groups.js'

const initialState = {
  datas: {},
  results: {},
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
        results: state.results,
        tree: {
          ...state.tree,
          ...action.payload.groups.tree
        }
      }
    case HYDRATE_RESULTS:
      return {
        datas: state.datas,
        results: Object.keys(action.payload.groups.datas),
        tree: state.tree
      }
    default:
      return state
  }
}
