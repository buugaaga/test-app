import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    textSecondary: {
      main: '#fff',
    },
  },
  typography: {
    body2: {
      color: '#fff',
    },
    h4: {
      color: '#fff',
    }
  },
  // TODO: need to download open sans
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': ['Open Sans'],
  //     },
  //   },
  // },
})
export default theme
