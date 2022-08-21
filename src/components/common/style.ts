import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const PrimaryButtonStyled = styled(Button)({
  color: '#FFFFFF',
  backgroundColor: '#111111',

  '&:hover': {
    backgroundColor: '#ffffff59',
  },
});

export const SecondaryButtonStyled = styled(Button)({
  color: '#000000',
  '&:hover': {
    backgroundColor: '#ffffff59',
  },
});

export const SecondaryInverseButtonStyled = styled(Button)({
  color: '#FFFFFF',

  '&:hover': {
    backgroundColor: '#ffffff59',
  },
});
