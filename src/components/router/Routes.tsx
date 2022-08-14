import React from 'react';
import { ROUTES } from './constants';
import { Home } from '../pages/Home/Home';
import { Quiz } from '../pages/Quiz/Quiz';
import { Login } from '../pages/Login/Login';
import { PrivateRoute } from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import { CreateQuiz } from '../pages/CreateQuiz/CreateQuiz';

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
    <Route
      path={ROUTES.Quiz}
      element={
        <PrivateRoute>
          <Quiz />
        </PrivateRoute>
      }
    />
    <Route path={ROUTES.Login} element={<Login />} />
  </Routes>
);
