import { createStore, applyMiddleware, combineReducers } from 'redux'
import { apiMiddleware } from 'redux-api-middleware'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import {
  NAME as rootName,
  reducer as rootReducer
} from './modules/Root'

const appReducer = combineReducers({
  [rootName]: rootReducer,
  form: formReducer
})

const store = createStore(appReducer, applyMiddleware(apiMiddleware, thunk))
export default store
