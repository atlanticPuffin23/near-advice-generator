import styled from '@emotion/styled';

export const AppLayout = styled.div({
  display: 'flex',
  height: '100%',
});

export const AppContent = styled.main({
  display: 'flex',
  height: '100%',
  flexDirection: 'column',
  flexGrow: 1,
  overflow: 'auto',
});

export const ApplicationStyled = {
  ['*']: {
    margin: 0,
    padding: 0,
    border: 0,
    fontSize: '100%',
    verticalAlign: 'baseline',
    ['&:focus']: {
      outline: 'none',
    },
  },
  'html, body, #root': {
    height: '100%',
  },
  body: {
    lineHeight: 1.5,
    boxSizing: 'border-box',
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
  },
  'ol, ul': {
    listStyle: 'none',
  },
};
