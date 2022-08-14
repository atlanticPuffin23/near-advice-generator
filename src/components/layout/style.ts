import styled from '@emotion/styled';

export const AppContent = styled.div({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  flexGrow: 1,
  overflow: 'auto',
});

export const MainContent = styled.main({
  flex: '1 1 auto',
});

export const HeaderWrapper = styled.header({
  top: 0,
  backdropFilter: 'blur(10px)',
  zIndex: 999,
  maxHeight: 60,
  position: 'sticky',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #1b1c1c',
});

export const Logo = styled.img({
  height: 50,
  width: 50,
});

export const UserName = styled.p({
  color: '#000000',
  marginRight: 10,
});

export const UserMenuWrapper = styled.p({
  padding: 10,
  display: 'flex',
  alignItems: 'center',
});
