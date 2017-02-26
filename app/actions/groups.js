const HYDRATE_STATE = 'HYDRATE_STATE'

const API_URL = 'http://localhost/api.opened.bible/endpoints/'

function fetchGroup (id) {

  return dispatch => {
    return fetch(API_URL + 'groups.php?action=get_datas&ids=2')
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: HYDRATE_STATE,
        payload: json
      })
    })
  }

}

function shouldFetchGroup (state, id) {
  console.log(state, id)
  return true
}

export function fetchGroupIfNeeded (id) {

  return (dispatch, getState) => {

    if (shouldFetchGroup(getState(), id)) {
      dispatch(fetchGroup(id))
    } else {
      Promise.resolve()
    }

  }

}