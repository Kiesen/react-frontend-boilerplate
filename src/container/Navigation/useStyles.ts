import { makeStyles, Theme } from '@material-ui/core/styles';

/**
 * Mui styling for the navigation container component.
 *
 * @exports StylesHook
 */
export default makeStyles((theme: Theme) => ({
  toolbar: {
    minHeight: theme.minNavHeight,
    maxWidth: theme.maxWidth,
    padding: '0 10px',
    margin: 'auto',
    width: '100%',
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
}));
