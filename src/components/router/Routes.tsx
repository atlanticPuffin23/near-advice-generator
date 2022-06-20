import React from 'react';
import { Home } from '../Home/Home';
import { ROUTES } from './constants';
import { Login } from '../Login/Login';
import { PrivateRoute } from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import { CreateQuiz } from '../CreateQuiz/CreateQuiz';

export const Router = () => (
  <Routes>
    <Route
      path={ROUTES.Home}
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
    <Route
      path={ROUTES.CreateQuiz}
      element={
        <PrivateRoute>
          <CreateQuiz />
        </PrivateRoute>
      }
    />
    <Route path={ROUTES.Login} element={<Login />} />
  </Routes>
);
