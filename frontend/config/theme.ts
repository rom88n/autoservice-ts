import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#196699'
    },
    secondary: {
      main: '#eaef3e'
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        fontSize: 14
      },
      body1: {
        fontSize: 14
      },
      body2: {
        fontSize: 14
      }
    },
    MuiListItem: {
      root: {
        fontSize: 14
      }
    }
  },
})
