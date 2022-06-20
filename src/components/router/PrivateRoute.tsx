import React from 'react';
import { ROUTES } from './constants';
import { Layout } from '../layout/Layout';
import { Navigate } from 'react-router-dom';

export const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) =>
  // TO DO: fix type error
  // @ts-ignore
  window.walletConnection.isSignedIn() ? <Layout>{children}</Layout> : <Navigate to={ROUTES.Login} replace />;
