import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from 'container/Login/Login';
import Home from 'container/Home/Home';
import AuthRoute from 'components/hoc/AuthRoute';
import { BASE, LOGIN } from 'constants/routes';

/**
 * The routing container component renders all possible
 * frontend routes wrapped by BrowserRouter and Switch component.
 *
 * @returns Routes wrapped by BrowserRouter and Switch
 */
const Routing: FC<{}> = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={LOGIN} component={Login} />

      <AuthRoute path={BASE} component={Home} />

      <Redirect to={BASE} />
    </Switch>
  </BrowserRouter>
);

export default Routing;
