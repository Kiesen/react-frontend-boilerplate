import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import useStyles from 'container/Footer/useStyles';

/**
 * Basic footer container component.
 * Returns a one-liner wrapped by the footer html tag
 * and some styling.
 *
 * @returns a simple footer container component
 */
const Footer: FC<{}> = () => {
  // i18n translations
  const { t } = useTranslation();
  // CSS classes created by material ui
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container>
        <Typography variant="body1" align={'center'}>
          {t('client:footer.reference')}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
