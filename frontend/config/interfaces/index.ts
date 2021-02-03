import { combinedReducers } from '../../store/reducers'
import { Toast } from '../../store/reducers/application'

export interface StateApplication {
  globalLoading: boolean
  toast: Toast
}

export type RootState = ReturnType<typeof combinedReducers>
