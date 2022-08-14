import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const PageTitle = styled.h1({
  fontSize: 28,
  margin: '10px 0px 10px 0px',
  color: '#000000',
});

export const QuizAuthor = styled.p({
  color: '#000000',
});

export const QuizWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const QuestionItemWrapper = styled.div({
  padding: 10,
  marginTop: 20,
  backgroundColor: '#00000012',
  minWidth: 400,
});

export const FinishButton = styled(Button)({
  margin: '20px 0 30px 0',
  backgroundColor: '#111111',

  '&:hover': {
    backgroundColor: '#ffffff59',
  },
});
