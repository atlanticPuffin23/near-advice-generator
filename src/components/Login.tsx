import React from 'react';
import { login } from '../near/utils';
import { Button } from '@mui/material';
import { LoginWrapper, LoginText } from './style';

export const Login: React.FC = () => (
  <LoginWrapper>
    <LoginText>Please, log in to continue</LoginText>
    <Button variant="contained" onClick={login}>
      log in
    </Button>
  </LoginWrapper>
);
