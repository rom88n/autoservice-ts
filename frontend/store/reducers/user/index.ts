import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import Router from 'next/router'
import { client } from '../../../config/apollo/apolloClient'
import { AUTH, VALIDATE } from '../../../config/apollo/queries/auth'
import ROUTES from '../../../config/routes'
import { setToastMessage } from '../application'

export interface StateUser {
  token?: string
  id?: string
  name?: string
}

const initialState = {}

export type SetUser = StateUser & {
  type: 'SET_USER'
  user: StateUser | {}
}

export type Action = SetUser

export const userReducer = (state: StateUser = initialState, action: Action): StateUser => {
  switch (action.type) {
    case 'SET_USER':
      return action.user

    default:
      return state
  }
}

export const setUser = (user: SetUser | {}): SetUser => ({ type: 'SET_USER', user })

export const loginUser = (email: string, password: string): ThunkAction<Promise<void | object>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void | object> => {
    try {
      dispatch({ type: 'SET_GLOBAL_LOADING', globalLoading: true })
      const request = await client.mutate({
        mutation: AUTH,
        variables: { email, password }
      })
      const result = await request
      const { data: { authenticateUserWithPassword } } = result
      dispatch({ type: 'SET_GLOBAL_LOADING', globalLoading: false })

      if (authenticateUserWithPassword) {
        await Router.replace({ pathname: `/${ROUTES.DASHBOARD}` })
        dispatch(
          setUser({ ...authenticateUserWithPassword.item, token: authenticateUserWithPassword.token })
        )
      }
      return authenticateUserWithPassword
    } catch (er) {
      dispatch({ type: 'SET_GLOBAL_LOADING', globalLoading: false })
      console.error(er)
      dispatch(setToastMessage({ type: 'error', message: er.toString() }))
      throw new Error(er)
    }
  }
}

export const validateUser = (): (dispatch: ThunkDispatch<{}, {}, AnyAction>) => Promise<void> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    try {
      const request = await client.query({
        query: VALIDATE,
      })
      const result = await request
      const { data: { authenticatedUser } } = result
      if (!authenticatedUser) {
        await dispatch(setUser({}))
        await Router.replace({ pathname: `/${ROUTES.LOGIN}` })
      }
    } catch (er) {
      console.error(er)
    }
  }
}
