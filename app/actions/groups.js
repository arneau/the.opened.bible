const HYDRATE_STATE = 'HYDRATE_STATE'

const API_URL = 'http://localhost/api.opened.bible/endpoints/'

function fetchGroupsIfNeeded (ids) {
  return (dispatch, getState) => {
    if (shouldFetchGroups(getState(), ids)) {
      return dispatch(fetchGroups(ids))
    } else {
      return Promise.resolve()
    }
  }
}

function shouldFetchGroups (state, ids) {
  // return (state.groups.datas[id] === undefined)
  return true
}

function fetchGroups (ids) {
  return dispatch => {
    return fetch(API_URL + 'groups.php?action=get_datas&ids=' + ids.join(','))
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: HYDRATE_STATE,
        payload: json
      })
    })
  }
}

function fetchTreeIfNeeded () {
  return (dispatch) => {
    return dispatch(fetchTree())
  }
}

function fetchTree () {
  return dispatch => {
    return fetch(API_URL + 'groups.php?action=get_tree')
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: HYDRATE_STATE,
        payload: json
      })
    })
  }
}

export {
  fetchGroupsIfNeeded,
  fetchTreeIfNeeded
}