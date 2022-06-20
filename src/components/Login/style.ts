import styled from '@emotion/styled';
import { Typography } from '@mui/material';

export const LoginWrapper = styled.div({
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  height: '100%',
  width: '100%',
  flexDirection: 'column',
});

export const LoginText = styled(Typography)({
  padding: 20,
});
