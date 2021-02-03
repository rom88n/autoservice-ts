// base
import * as React from 'react'

// material-ui
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(createStyles({
  root: {
    zIndex: 1,
    paddingLeft: '295px',
    height: '50px'
  }
}))

const AppHeader = (): React.ReactElement => {
  const classes = useStyles()
  return (
    <div className={classes.root}>

    </div>
  )
}

export default AppHeader
