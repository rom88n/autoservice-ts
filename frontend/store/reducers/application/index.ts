import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { StateApplication } from '../../../config/interfaces'

const initialState = {
  globalLoading: false,
  toast: {}
}

export type setGlobalLoadingType = {
  type: 'SET_GLOBAL_LOADING'
  globalLoading: boolean
}

export type Toast = {
  type?:  "default" | "error" | "success" | "warning" | "info"
  message?: string
}

export type SetToast = {
  type: 'SET_TOAST'
  toast: Toast
}

export type Action = setGlobalLoadingType | SetToast

export const applicationReducer = (state: StateApplication = initialState, action: Action): StateApplication => {
  switch (action.type) {
    case 'SET_GLOBAL_LOADING':
      return { ...state, globalLoading: action.globalLoading }
    case 'SET_TOAST':
      return { ...state, toast: action.toast }

    default:
      return state
  }
}

export const setToast = (toast: Toast): SetToast => ({ type: 'SET_TOAST', toast })

export const setToastMessage = (toast: Toast): ThunkAction<SetToast, {}, {}, AnyAction> => {
  return (dispatch: ThunkDispatch<{}, {}, AnyAction>): SetToast => {
    return dispatch(setToast(toast))
  }
}
