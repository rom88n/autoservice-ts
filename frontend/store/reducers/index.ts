import { combineReducers } from 'redux'
import { userReducer } from './user'
import { applicationReducer } from './application'

export const combinedReducers = combineReducers({
  application: applicationReducer,
  user: userReducer,
})


