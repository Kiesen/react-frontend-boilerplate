import { createMuiTheme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    maxWidth: number;
    minNavHeight: number;
  }
  interface ThemeOptions {
    maxWidth: number;
    minNavHeight: number;
  }
}

/**
 * Create and export an overwritten version of the
 * default material ui theme.
 *
 * @exports MuiTheme
 */
export default createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    background: {
      default: '#fff',
    },
  },

  maxWidth: 800,
  minNavHeight: 53,
});
