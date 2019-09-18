import React, { FC } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { LOGIN } from 'constants/routes';
import { AUTH_CREDENTIALS } from 'constants/storageKeys';

/**
 * Higher order components which checks
 * if a user is authenticated
 *
 * @param {RouteProps} RouteProps - route props with an not optional react component
 * @returns Either <Route /> with the given component and RouteProps or <Redirect /> to login
 */
const AuthRoute: FC<RouteProps> = ({ component: Component, ...rest }) =>
  // -- TODO --
  // Depending on the auth service or the api you use the
  // auth logic needs to be changed.
  sessionStorage.getItem(AUTH_CREDENTIALS) !== null ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to={LOGIN} />
  );

export default AuthRoute;
