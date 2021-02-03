// base
import React from 'react'
import App from 'next/app'
import { SnackbarProvider } from 'notistack'

import { MuiThemeProvider, withStyles, createStyles, WithStyles } from '@material-ui/core/styles'
import theme from '../config/theme'

// redux
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../store'
import { compose } from 'redux'
import { Provider } from 'react-redux'

// components
import ShowToast from '../components/ShowToast'
import GlobalSpinner from '../components/GlobalSpinner'
import AppBackground from '../components/AppBackground'

// helpers
import ReactContext from '../helpers/ReactContext'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../config/global.css'

const styles = createStyles({
  root: {
    '& body': {
      fontSize: '13px'
    },
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
        <PersistGate persistor={persistor}>

          <div className={classes.root}>
            <ReactContext.Provider value={{ mobile: false }}>
              <MuiThemeProvider theme={theme}>
                <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                  <AppBackground>
                    <Component
                      router={router}
                      {...pageProps}
                    />
                  </AppBackground>
                  <ShowToast/>
                  <GlobalSpinner/>
                </SnackbarProvider>
              </MuiThemeProvider>
            </ReactContext.Provider>
          </div>
        </PersistGate>
      </Provider>
    )
  }
}

export default compose(
  withStyles(styles)
)(_App)
