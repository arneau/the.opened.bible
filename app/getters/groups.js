import { HYDRATE_STATE } from '../actions/types.js'

const API_URL = 'http://localhost/api.opened.bible/endpoints/'

function fetchChildrenById (topicId, state, dispatch) {
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

function getGroupsDatas(state, dispatch, ids) {
  window.fetch(API_URL + 'groups.php?action=get_groups_datas&ids=2').then((response) => {
    return response.json()
  }).then((payload) => {
    dispatch({
      type: HYDRATE_STATE,
      payload: payload
    })
  })
}

function getGroupsTree(state, dispatch) {
  window.fetch(API_URL + 'groups.php?action=get_groups_tree').then((response) => {
    return response.json()
  }).then((payload) => {
    dispatch({
      type: HYDRATE_STATE,
      payload: payload
    })
  })
}

function getGroupData(state, dispatch, id) {
  window.fetch(API_URL + 'groups.php?action=get_datas&ids=' + id).then((response) => {
    return response.json()
  }).then((payload) => {
    dispatch({
      type: HYDRATE_STATE,
      payload: payload
    })
  })
}

export {
  fetchChildrenById,
  getGroupsDatas,
  getGroupsTree,
  getGroupData
}