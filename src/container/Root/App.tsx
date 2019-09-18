import React, { FC } from 'react';

import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Routing from 'container/Routing/Routing';
import theme from 'theme/theme';
import 'i18n/i18n';

/**
 * The app container renders the material ui
 * theme provider and the routing component.
 *
 * @returns ThemeProvider and Routing component
 */
const App: FC<{}> = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routing />
  </ThemeProvider>
);

export default App;
