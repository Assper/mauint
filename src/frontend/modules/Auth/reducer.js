import { types } from './constants'

const initialState = {
  error: ''
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        error: ''
      }
    default:
      return { ...state }
  }
}
