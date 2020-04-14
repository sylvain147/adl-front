import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#13395d',
    },
    secondary: {
      main: '#EF476F',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
    grey : {
      light : '#d4d4d4',
    }
  },
  navBar: {
    link: {
      color: '#000'
    }
  }
});

export default theme;
