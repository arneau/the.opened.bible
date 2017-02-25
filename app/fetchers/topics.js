import { HYDRATE_STATE } from '../actions/types.js'

export function fetchChildrenById (topicId, state, dispatch) {
  if (topicId === 0) {
    window.fetch('http://localhost/api.opened.bible/').then((response) => {
      return response.json()
    }).then((data) => {
      dispatch({
        type: HYDRATE_STATE,
        data: data
      })
    })
  } else {
    window.fetch('http://localhost/api.opened.bible/?parent_topic_id=' + topicId).then((response) => {
      return response.json()
    }).then((data) => {
      dispatch({
        type: HYDRATE_STATE,
        data: data
      })
    })
  }
}
