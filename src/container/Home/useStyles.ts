import { makeStyles, Theme } from '@material-ui/core/styles';

/**
 * Mui styling for the home container component.
 *
 * @exports StylesHook
 */
export default makeStyles((theme: Theme) => ({
  contentContainer: {
    maxWidth: theme.maxWidth,
    padding: '0 10px',
    margin: `auto`,
    width: '100%',
  },
  loadingContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '75vh',
  },
  searchContainer: {
    margin: `${theme.spacing(1)}px 0`,
  },
  icon: {
    fontSize: '25px',
  },
  itemGrid: {
    margin: `${theme.spacing(1)}px 0`,
  },
}));
