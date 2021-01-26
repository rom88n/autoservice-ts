// base
import React from 'react'
import App from 'next/app'

import { MuiThemeProvider, withStyles, createStyles, WithStyles } from '@material-ui/core/styles'
import theme from '../config/theme'

// redux
// import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
import store from '../store'
import { Provider } from 'react-redux'

// helpers
import ReactContext from '../helpers/ReactContext'

import 'bootstrap/dist/css/bootstrap.min.css'

const styles = createStyles({
  root: {
    '& button': {
      '&:focus': {
        outline: 'none'
      }
    }
  }
})

interface Props extends WithStyles<typeof styles> {
  Component: React.Component
  store: any
}

// const persistor = persistStore(store);

class _App extends App<Props> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles: HTMLElement = document.querySelector('#jss-server-side') as HTMLElement
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps, router, classes } = this.props

    return (
      <Provider store={store}>
          <div className={classes.root}>
            <ReactContext.Provider value={{ mobile: false }}>
              <MuiThemeProvider theme={theme}>
                <Component
                  router={router}
                  {...pageProps}
                />
              </MuiThemeProvider>
            </ReactContext.Provider>
          </div>
      </Provider>
    )
  }
}

export default withStyles(styles)(_App)
