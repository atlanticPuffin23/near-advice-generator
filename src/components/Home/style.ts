import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const PageTitle = styled.h1({
  textAlign: 'center',
  fontSize: 28,
  color: '#ffffffe0',
  margin: '10px 0px 10px 0px',
});

export const QuizListWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const QuizListItemWrapper = styled.div({
  backgroundColor: '#00000012',
  color: '#000000',
  padding: 20,
  margin: 10,
  minWidth: 300,
});

export const QuizInfoWrapper = styled.div({
  display: 'flex',
});

export const QuizTitle = styled.p({
  fontSize: 18,
});

export const QuizActionWrapper = styled.div({
  marginTop: 20,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
});

export const StartButton = styled(Button)({
  backgroundColor: '#111111',
  '&:hover': {
    backgroundColor: '#ffffff59',
  },
});
