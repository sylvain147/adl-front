import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#13395d',
    },
    secondary: {
      main: '#4A6890',
      light : '#4A6890'
    },
    test : '#ff0000',
    error: {
      main: red.A400,
    },
    background: {
      main : '#ff0000'
    },
    grey : {
      light : '#f2f2f2',
    },
     root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  },
  shadow : {
      ext : {
        right : '6px 0px 16px -15px'
      }
    },
  navBar: {
    link: {
      color: '#000'
    }
  }
});

export default theme;
