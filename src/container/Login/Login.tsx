import React, {
  FC,
  useState,
  SyntheticEvent,
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
} from 'react';
import { useTranslation } from 'react-i18next';

import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import useStyles from 'container/Login/useStyles';
import Footer from 'container/Footer/Footer';
import { useLocation } from 'hooks/react-router-hooks';
import { AUTH_CREDENTIALS } from 'constants/storageKeys';
import { BASE } from 'constants/routes';

/**
 * Basic login container component.
 * Handels onChange events of the email and password input fields
 * and checks if the values are valid after a login action got triggered
 * or an input field triggers the onBlur event.
 *
 * @returns Login page with input fields
 */
const Login: FC<{}> = () => {
  // CSS classes created by material ui
  const classes = useStyles();
  // React router context
  const { navigate } = useLocation();
  // i18n translations
  const { t } = useTranslation();
  // State used for the text fields
  const [values, setValues] = useState({
    email: '',
    password: '',
    emailError: false,
    passwordError: false,
  });

  // Mail regex taken from the w3 recommendation:
  // https://www.w3.org/TR/html5/forms.html#valid-e-mail-address
  const emailRe = new RegExp(
    "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]" +
      '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9]' +
      '(?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$'
  );

  /**
   * Function triggers all necessary validation steps and
   * pushes the BASE path to the history stack, if no error occures.
   *
   * @param {SyntheticEvent} event - SyntheticEvent<HTMLButtonElement>
   */
  const loginAction = (event?: SyntheticEvent<HTMLButtonElement>): void => {
    if (event) event.preventDefault();
    const emailError = !emailRe.test(values.email);
    const passwordError = values.password.length < 1;
    if (emailError || passwordError) {
      setValues({
        ...values,
        emailError: emailError,
        passwordError: passwordError,
      });
    } else {
      // -- TODO --
      // Add login call to your api or auth service here
      // Also add some error handling if auth failes
      sessionStorage.setItem(AUTH_CREDENTIALS, '');
      navigate(BASE);
    }
  };

  /**
   * Function set's the input field value to the component state.
   *
   * @param {ChangeEvent} event - ChangeEvent<HTMLInputElement>
   */
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  /**
   * Function triggers the loginAction if an enter key got pressed.
   *
   * @param {KeyboardEvent} event - KeyboardEvent<HTMLInputElement>
   */
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') loginAction();
  };

  /**
   * Function validate a input field if a blur event got triggered.
   *
   * @param {FocusEvent} event - FocusEvent<HTMLInputElement>
   */
  const validateOnBlur = (event: FocusEvent<HTMLInputElement>): void => {
    event.preventDefault();
    switch (event.target.name) {
      case 'email':
        setValues({ ...values, emailError: !emailRe.test(event.target.value) });
        break;
      case 'password':
        setValues({ ...values, passwordError: event.target.value.length < 1 });
        break;
      default:
        break;
    }
  };

  return (
    <Grid className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <Card>
          <CardContent>
            <h1>{t('client:headline.login')}</h1>
          </CardContent>
          <CardContent>
            <form noValidate>
              <TextField
                label={t('client:form.label.email')}
                fullWidth
                type="email"
                name="email"
                margin="normal"
                variant="outlined"
                value={values.email}
                error={values.emailError}
                onChange={handleChange}
                onBlur={validateOnBlur}
                onKeyPress={handleKeyPress}
                helperText={
                  values.emailError ? t('client:form.errorText.email') : ''
                }
              />
              <TextField
                label={t('client:form.label.password')}
                fullWidth
                type="password"
                name="password"
                margin="normal"
                variant="outlined"
                value={values.password}
                error={values.passwordError}
                onChange={handleChange}
                onBlur={validateOnBlur}
                onKeyPress={handleKeyPress}
                helperText={
                  values.passwordError
                    ? t('client:form.errorText.password')
                    : ''
                }
              />
            </form>
          </CardContent>
          <CardContent>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={loginAction}
            >
              {t('client:button.login')}
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Footer />
    </Grid>
  );
};

export default Login;
