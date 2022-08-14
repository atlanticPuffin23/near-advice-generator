import React from 'react';
import { login } from '../../../near/utils';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { ButtonStyled } from '../../common/style';
import { LoginWrapper, LoginText } from './style';

export const Login: React.FC = () =>
  window.walletConnection?.isSignedIn() ? (
    <Navigate to={ROUTES.Home} />
  ) : (
    <LoginWrapper>
      <LoginText>Please, log in to continue</LoginText>
      <ButtonStyled onClick={login}>log in</ButtonStyled>
    </LoginWrapper>
  );
