import { getBasePath } from '../../service'

export const NAME = 'Root'
export const entryPoint = `${getBasePath()}/api`
export const types = {
  SHOW_MESSAGE: `${NAME}SHOW_MESSAGE`,
  HIDE_MESSAGE: `${NAME}HIDE_MESSAGE`,
  GET_USER_DATA_REQUEST: `${NAME}GET_USER_DATA_REQUEST`,
  GET_USER_DATA_SUCCESS: `${NAME}GET_USER_DATA_SUCCESS`,
  GET_USER_DATA_FAILURE: `${NAME}GET_USER_DATA_FAILURE`,
  SET_USER_DATA: `${NAME}SET_USER_DATA`
}
