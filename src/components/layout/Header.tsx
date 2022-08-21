import React from 'react';
// @ts-ignore
import NearLogo from '../../assets/logo-black.svg';
import { Link } from 'react-router-dom';
import { logout } from '../../near/utils';
import { ROUTES } from '../router/constants';
import { SecondaryButtonStyled } from '../common/style';
import { HeaderWrapper, Logo, UserName, UserMenuWrapper } from './style';

export const Header: React.FC = () => (
  <HeaderWrapper>
    <Link to={ROUTES.Home}>
      <Logo src={NearLogo} alt="Near Logo" />
    </Link>

    <UserMenuWrapper>
      <UserName>{window.walletConnection.getAccountId()}</UserName>
      {/* @ts-ignore */}
      <SecondaryButtonStyled component={Link} to={ROUTES.CreateQuiz}>
        New
      </SecondaryButtonStyled>
      <SecondaryButtonStyled onClick={logout}>Log Out</SecondaryButtonStyled>
    </UserMenuWrapper>
  </HeaderWrapper>
);
