import { RSAA } from 'redux-api-middleware'
import { types, entryPoint } from './constants'
import { actions as rootActions } from '../Root'

function loginSubmit(values) {
  return (dispatch) => dispatch({
    [RSAA]: {
      types: [
        types.LOGIN_REQUEST,
        {
          type: types.LOGIN_SUCCESS,
          payload: async (action, state, res) => {
            const data = await res.json()
            dispatch(rootActions.setUserData(data.response.user))
            dispatch(rootActions.showMessage({ type: 'success', text: 'Login Success' }))
          }
        },
        {
          type: types.LOGIN_FAILURE,
          payload: async (action, state, res) => {
            const data = await res.json()
            dispatch(rootActions.showMessage({ type: 'error', text: data.response.message }))
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
          payload: () => {
            const data = {
              email: values.email,
              password: values.password
            }
            loginSubmit(data)
          }
        },
        {
          type: types.SIGNUP_FAILURE,
          payload: async (action, state, res) => {
            const data = await res.json()
            dispatch(rootActions.showMessage({ type: 'error', text: data.response.message }))
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

function restoreSubmit(values) {
  return (dispatch) => dispatch({
    [RSAA]: {
      types: [
        types.RESTORE_REQUEST,
        {
          type: types.RESTORE_SUCCESS,
          payload: async (action, state, res) => {
            await res.json()
          }
        },
        {
          type: types.RESTORE_FAILURE,
          payload: async (action, state, res) => {
            const data = await res.json()
            dispatch(rootActions.showMessage({ type: 'error', text: data.response.message }))
          }
        }
      ],
      endpoint: `${entryPoint}/restore`,
      body: JSON.stringify(values),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }
  })
}

export const actions = {
  loginSubmit,
  signupSubmit,
  restoreSubmit
}
