import { combineReducers } from 'redux'
import { Action } from './actions'
// States' definition
export interface AccessToken {
  isFetching: boolean
  token?: string
}

const initialState = {
  isFetching: false
}

const accessToken = (state: AccessToken = initialState, action: Action): AccessToken => {
  switch (action.type) {
    case 'SET':
      return { ...state, token: action.accessToken }
    case 'SET_FETCHING':
      return { ...state, isFetching: action.isFetching }
    default:
      return state
  }
}

export interface State {
  accessToken: AccessToken
}

export default combineReducers<State>({
  accessToken
})
