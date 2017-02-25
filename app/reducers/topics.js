import { HYDRATE_STATE } from '../actions/types.js'

const initialState = {
  datas: {},
  ids: []
}

export function topics (state = initialState, action) {
  switch (action.type) {
    case HYDRATE_STATE:
      return {
        datas: {
          ...state.datas,
          ...action.data
        },
        ids: [
          ...state.ids,
          ...Object.keys(action.data)
        ]
      }
    default:
      return state
  }
};
