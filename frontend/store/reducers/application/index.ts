import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { StateApplication } from '../../../config/interfaces'

const initialState = {
  globalLoading: false
}

export type setGlobalLoading = StateApplication & {
  type: 'SET_GLOBAL_LOADING'
  globalLoading: boolean
}

export type Action = setGlobalLoading

export const applicationReducer = (state: StateApplication = initialState, action: Action): StateApplication => {
  switch (action.type) {
    case 'SET_GLOBAL_LOADING':
      return { globalLoading: action.globalLoading }

    default:
      return state
  }
}

export const setGlobalLoading = (globalLoading: boolean): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return dispatch(setGlobalLoading(globalLoading))
  }
}
