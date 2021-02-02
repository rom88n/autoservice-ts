// base
import * as React from 'react'

// material-ui
import { makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import LoginForm from '../../components/Forms/LoginForm'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main
  },
  paper: {
    padding: '2rem 1rem 1rem',
    minWidth: '300px',
    maxWidth: '520px',
    width: '100%'
  }
}));

export default function LoginPage() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper elevation={18} className={classes.paper}>
        <LoginForm/>
      </Paper>
    </div>
  )
}
