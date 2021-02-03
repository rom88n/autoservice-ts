// base
import * as React from 'react'

// material-ui
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import AppSidebar from '../AppSidebar'
import AppHeader from '../AppHeader'
import Spinner from '../Spinner'

// @ts-ignore
import background from '../../public/images/background.jpg'
import { useEffect } from 'react'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { validateUser } from '../../store/reducers/user'
import { RootState } from '../../config/interfaces'

const useStyles = makeStyles(createStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  paper: {
    minHeight: '70vh',
    height: '100%',
    position: 'relative',
    background: 'transparent',
    border: '2px solid #ffffff61',
    borderRadius: '40px',
    padding: '1rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    '&::before': {
      content: '""',
      background: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      position: 'absolute',
      width: '110%',
      height: '110%',
      top: '-5%',
      left: '-5%',
      zIndex: 0,
      filter: 'blur(10px)'
    }
  },
  container: {
    display: 'flex',
    flex: 1
  },
  content: {
    zIndex: 1,
    padding: '1rem',
    borderRadius: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flex: 1
  }
}))

const AppDashboard = ({ children }: React.PropsWithChildren<any>): React.ReactElement => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const user = useSelector((state: RootState): object => state.user)

  useEffect(() => {
    setTimeout(() => {
      dispatch(validateUser())
    }, 1000)
  }, [])

  if (!Object.keys(user).length) return <Spinner/>

  return (
    <div className={classes.root}>
      <div className="container-xl">
        <Paper className={classes.paper} elevation={18}>
          <AppHeader/>
          <div className={classes.container}>
            <AppSidebar/>
            <Paper className={classes.content} elevation={0}>
              {children}
            </Paper>
          </div>
        </Paper>
      </div>
    </div>
  )
}

export default AppDashboard
