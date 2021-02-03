// base
import * as React from 'react'

// material-ui
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

// components
import LoginForm from '../../components/Forms/LoginForm'

const useStyles = makeStyles(createStyles({
  paper: {
    position: 'fixed',
    height: '230px',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: 'auto',
    borderRadius: '16px',
    backgroundColor: '#FFFFFF',
    padding: '2rem 1rem 1rem',
    minWidth: '300px',
    maxWidth: '520px',
    width: '100%'
  }
}))

export default function LoginPage() {
  const classes = useStyles()
  return (
    <Paper elevation={18} className={classes.paper}>
      <LoginForm/>
    </Paper>
  )
}
