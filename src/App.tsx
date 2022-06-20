import 'regenerator-runtime/runtime';
import React from 'react';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './components/router/Routes';
import { AppWrapper, ApplicationStyled } from './style';

export const App: React.FC = () => {
  return (
    <>
      <Global styles={ApplicationStyled} />
      <AppWrapper className="gradient">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AppWrapper>
    </>
  );
};
