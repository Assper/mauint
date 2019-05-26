import { createStore, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

import { NAME as rootName, reducer as rootReducer } from './modules/Root'
import { NAME as authName, reducer as authReducer } from './modules/Auth'
import { NAME as integrationsName, reducer as integrationsReducer } from './modules/Integrations'

const appReducer = combineReducers({
  [rootName]: rootReducer,
  [authName]: authReducer,
  [integrationsName]: integrationsReducer,
  form: formReducer
})

const store = createStore(appReducer, applyMiddleware(apiMiddleware, thunk))
export default store
