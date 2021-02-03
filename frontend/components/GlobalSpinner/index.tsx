// base
import * as React from 'react'

// redux
import { useSelector } from 'react-redux'
import { RootState } from '../../config/interfaces'

// components
import Spinner from '../Spinner'

const GlobalSpinner: () => React.ReactElement = (): React.ReactElement => {
  const globalLoading = useSelector((state: RootState): boolean => state.application.globalLoading)

  if (globalLoading) return <Spinner/>
  return <div/>
}

export default GlobalSpinner
