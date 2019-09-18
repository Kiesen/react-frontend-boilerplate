import React, { FC, SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

import useStyles from 'container/Navigation/useStyles';
import { useLocation } from 'hooks/react-router-hooks';
import { AUTH_CREDENTIALS } from 'constants/storageKeys';
import { LOGIN, BASE } from 'constants/routes';

/**
 * Simple navigation container component.
 * Handels the logout action and shows the app title.
 *
 * @returns a sticky navigation bar
 */
const Navigation: FC<{}> = () => {
  // CSS classes created by material ui
  const classes = useStyles();
  // i18n translations
  const { t } = useTranslation();
  // Get the history from the router context
  const { navigate } = useLocation();

  /**
   * This function handels the logout action.
   * First remove any auth related items, than
   * redirect to the login view.
   *
   * @param {SyntheticEvent} event - SyntheticEvent<HTMLButtonElement>
   */
  const logout = (event: SyntheticEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    // -- TODO --
    // Depending on the auth service or the api you use the
    // auth logic must be updated.
    sessionStorage.removeItem(AUTH_CREDENTIALS);
    navigate(LOGIN);
  };

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Typography variant="h6" className={classes.title}>
              <Link className={classes.link} to={BASE}>
                react-frontend-boilerplate
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Grid container justify="flex-end">
              <Button variant="contained" color="secondary" onClick={logout}>
                {t('client:button.logout')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
