import React from 'react';
import { login } from '../../../near/utils';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { LoginWrapper, LoginText } from './style';
import { SecondaryButtonStyled } from '../../common/style';

export const Login: React.FC = () =>
  window.walletConnection?.isSignedIn() ? (
    <Navigate to={ROUTES.Home} />
  ) : (
    <LoginWrapper>
      <LoginText>Please, log in to continue</LoginText>
      <SecondaryButtonStyled onClick={login}>log in</SecondaryButtonStyled>
    </LoginWrapper>
  );
