import { combinedReducers } from '../../store/reducers'

export interface StateApplication {
  globalLoading: boolean
}

export type RootState = ReturnType<typeof combinedReducers>
