// base
import * as React from 'react'

// material-ui
import { makeStyles, createStyles } from '@material-ui/core/styles'

// @ts-ignore
import background from '../../public/images/background.jpg'

const useStyles = makeStyles(createStyles({
  root: {
    height: '100vh',
    background: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
  },
  container: {
    position: 'relative',
    height: '100%'
  }
}))

export default function AppBackground({ children }: React.PropsWithChildren<any>): React.ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {children}
      </div>
    </div>
  )
}
