import React from 'react';
// @ts-ignore
import NearLogo from '../../assets/logo-black.svg';
import { Link } from 'react-router-dom';
import { logout } from '../../near/utils';
import { ROUTES } from '../router/constants';
import { ButtonStyled } from '../common/style';
import { HeaderWrapper, Logo, UserName, UserMenuWrapper } from './style';

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Link to={ROUTES.Home}>
      <Logo src={NearLogo} alt="Near Logo" />
    </Link>
    <UserMenuWrapper>
      {/* @ts-ignore */}
      <UserName>{window.walletConnection.getAccountId()}</UserName>
      {/* @ts-ignore */}
      <ButtonStyled component={Link} to={ROUTES.CreateQuiz}>
        New
      </ButtonStyled>
      <ButtonStyled onClick={logout}>Log Out</ButtonStyled>
    </UserMenuWrapper>
  </HeaderWrapper>
);
