import { getBasePath } from '../../service'

export const NAME = 'Auth'
export const entryPoint = `${getBasePath()}/api/auth`
export const types = {
  SHOW_ERROR: `${NAME}SHOW_ERROR`,
  LOGIN_REQUEST: `${NAME}LOGIN_REQUEST`,
  LOGIN_SUCCESS: `${NAME}LOGIN_SUCCESS`,
  LOGIN_FAILURE: `${NAME}LOGIN_FAILURE`
}
