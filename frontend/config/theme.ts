import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#0086bf'
    },
    secondary: {
      main: '#eaef3e'
    }
  },
  overrides: {
    MuiTypography: {
      root: {
        fontSize: '15px'
      },
      body1: {
        fontSize: '15px'
      },
      body2: {
        fontSize: '15px'
      }
    },
    MuiListItem: {
      root: {
        fontSize: '15px'
      }
    }
  }
})
