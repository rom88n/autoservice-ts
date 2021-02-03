// base
import * as React from 'react'

// material-ui
import { makeStyles, createStyles } from '@material-ui/core/styles'
import AppDashboard from '../../components/AppDashboard'

const useStyles = makeStyles(createStyles({
  root: {
  }
}))

export default function dashboard(): React.ReactElement<{}> {
  const classes = useStyles()
  return (
    <AppDashboard>
      <div className={classes.root}>
        content
      </div>
    </AppDashboard>
  )
}
