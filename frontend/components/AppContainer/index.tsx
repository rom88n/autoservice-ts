// base
import * as React from 'react'

// material-ui
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(createStyles({
  root: {
    flex: 1
  }
}))

const AppContainer = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      content
    </div>
  )
}

export default AppContainer
