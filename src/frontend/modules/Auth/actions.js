import { RSAA } from 'redux-api-middleware'
import { types, entryPoint } from './constants'

function showError(error) {
  return {
    type: types.SHOW_ERROR,
    payload: { error }
  }
}

function loginSubmit(values) {
  return (dispatch) => dispatch({
    [RSAA]: {
      types: [
        types.LOGIN_REQUEST,
        {
          type: types.LOGIN_SUCCESS,
          payload: async (action, state, res) => {
            await res.json()
          }
        },
        {
          type: types.LOGIN_FAILURE,
          payload: async (action, state, res) => {
            const data = await res.json()
            dispatch(showError(data.response.message))
          }
        }
      ],
      endpoint: `${entryPoint}/login`,
      body: JSON.stringify(values),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
  })
}

function signupSubmit(values) {
  delete values.repassword
  
  return (dispatch) => dispatch({
    [RSAA]: {
      types: [
        types.SIGNUP_REQUEST,
        {
          type: types.SIGNUP_SUCCESS,
          payload: async (action, state, res) => {
            await res.json()
          }
        },
        {
          type: types.SIGNUP_FAILURE,
          payload: async (action, state, res) => {
            const data = await res.json()
            dispatch(showError(data.response.message))
          }
        }
      ],
      endpoint: `${entryPoint}/signup`,
      body: JSON.stringify(values),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
  })
}

export const actions = {
  loginSubmit,
  signupSubmit,
  showError
}
