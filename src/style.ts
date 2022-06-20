import styled, { Interpolation } from '@emotion/styled';
import { Theme } from '@emotion/react';

export const AppWrapper = styled.div({
  display: 'flex',
  height: '100%',
});

export const ApplicationStyled: Interpolation<Theme> = {
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
