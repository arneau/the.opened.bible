const HYDRATE_STATE = 'HYDRATE_STATE'
const HYDRATE_RESULTS = 'HYDRATE_RESULTS'

const API_URL = 'http://localhost/api.opened.bible/endpoints/'

function loadDatasByIds (idsToLoad) {
  return (dispatch, getState) => {
    let idsToFetch = getDatasIdsToFetch(getState(), idsToLoad)
    if (idsToFetch.length) {
      return dispatch(fetchDatasByIds(idsToFetch))
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

function fetchDatasByIds (ids) {
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

function loadDatasBySearchTerm (search_term) {
  return (dispatch) => {
    return dispatch(fetchDatasBySearchTerm(search_term))
  }
}

function fetchDatasBySearchTerm (search_term) {
  return dispatch => {
    return fetch(API_URL + 'groups.php?action=get_datas&search_term=' + search_term)
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: HYDRATE_STATE,
        payload: json
      })
      dispatch({
        type: HYDRATE_RESULTS,
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
  HYDRATE_STATE,
  HYDRATE_RESULTS,
  loadDatasByIds,
  loadDatasBySearchTerm,
  loadTree
}