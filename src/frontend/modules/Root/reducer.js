import { types } from './constants'

const initialState = {
  userData: {},
  commonMessages: []
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_USER_DATA:
      return {
        ...state,
        userData: { ...action.payload }
      }
    case types.SHOW_ERROR:
      return {
        ...state,
        error: action.payload.error
      }
    case types.GET_USER_DATA_SUCCESS:
    case types.GET_USER_DATA_REQUEST:
      return {
        ...state,
        error: ''
      }
    case types.HIDE_MESSAGE:
    case types.SHOW_MESSAGE:
      return {
        ...state,
        commonMessages: action.payload
      }
    default:
      return { ...state }
  }
}
