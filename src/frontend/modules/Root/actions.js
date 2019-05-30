import { RSAA } from 'redux-api-middleware'
import { types, entryPoint } from './constants'

function showError(error) {
  return {
    type: types.SHOW_ERROR,
    payload: { error }
  }
}

function setUserData(data) {
  return {
    type: types.SET_USER_DATA,
    payload: data
  }
}

function getUserData() {
  return (dispatch) => dispatch({
    [RSAA]: {
      types: [
        types.GET_USER_DATA_REQUEST,
        {
          type: types.GET_USER_DATA_SUCCESS,
          payload: async (action, state, res) => {
            const data = await res.json()
            dispatch(setUserData(data.response.user))
          }
        },
        {
          type: types.GET_USER_DATA_FAILURE,
          payload: async (action, state, res) => {
            const data = await res.json()
            dispatch(showError(data.response.message))
          }
        }
      ],
      endpoint: `${entryPoint}/user`,
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
  })
}

export const actions = {
  setUserData,
  getUserData
}
