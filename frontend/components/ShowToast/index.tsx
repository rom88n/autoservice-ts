// base
import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../config/interfaces'
import { setToastMessage, Toast } from '../../store/reducers/application'
import { useSnackbar } from 'notistack'

const ShowToast: () => React.ReactElement = (): React.ReactElement => {
  const toast = useSelector((state: RootState): Toast => state.application.toast)
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  useEffect(() => {
    if (toast?.type) {
      enqueueSnackbar(toast.message, { variant: toast.type });
      dispatch(setToastMessage({}))
    }
  }, [toast])

  return <div/>
}

export default ShowToast
