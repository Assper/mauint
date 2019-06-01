import { RSAA } from 'redux-api-middleware'
import { types, entryPoint, NAME } from './constants'

function showMessage({ type, text }) {
  return (dispatch, getState) => {
    const state = getState()
    const { commonMessages } = state[NAME]
    commonMessages.push({ type, text })

    dispatch({
      type: types.HIDE_MESSAGE,
      payload: [...commonMessages]
    })
  }
}

function hideMessage(index) {
  return (dispatch, getState) => {
    const state = getState()
    const { commonMessages } = state[NAME]
    commonMessages.splice(index, 1)

    dispatch({
      type: types.HIDE_MESSAGE,
      payload: [...commonMessages]
    })
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
            dispatch(showMessage(data.response.message))
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
  getUserData,
  hideMessage,
  showMessage
}
