const HYDRATE_STATE = 'HYDRATE_STATE'

const API_URL = 'http://localhost/api.opened.bible/endpoints/'

function loadDatas (idsToLoad) {
  return (dispatch, getState) => {
    let idsToFetch = getDatasIdsToFetch(getState(), idsToLoad)
    if (idsToFetch.length) {
      return dispatch(fetchDatas(idsToFetch))
    } else {
      return Promise.resolve()
    }
  }
}

function getDatasIdsToFetch (state, idsToLoad) {
  let idsToFetch = []
  idsToLoad.map((id) => {
    if (state.groups.datas[id] === undefined) {
      idsToFetch.push(id)
    }
  })
  return idsToFetch
}

function fetchDatas (ids) {
  return dispatch => {
    return fetch(API_URL + 'groups.php?action=get_datas&ids=' + ids.join(','))
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: HYDRATE_STATE,
        payload: json
      })
    })
  }
}

function loadTree () {
  return dispatch => {
    return dispatch(fetchTree())
  }
}

function fetchTree () {
  return dispatch => {
    return fetch(API_URL + 'groups.php?action=get_tree')
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: HYDRATE_STATE,
        payload: json
      })
    })
  }
}

export {
  loadDatas,
  loadTree
}