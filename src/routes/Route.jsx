
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import { useAuth } from '../hooks/auth';

export default function RouterWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { user } = useAuth();

  if (!(!!user) && isPrivate) {
    return <Redirect to="/" />;
  }
  if (!!user && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = !!user ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}