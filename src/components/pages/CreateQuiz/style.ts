import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const PageTitle = styled.h1({
  textAlign: 'center',
  fontSize: 28,
  color: '#ffffffe0',
  margin: '10px 0px 10px 0px',
});

export const FormWrapper = styled.div({
  padding: '40px 100px 40px 100px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const FormActionsWrapper = styled.div({
  padding: '30px 0px 30px 0px',
});

export const QuizNameWrapper = styled.div({
  padding: '20px 0px 20px 0px',
});

export const QuestionWrapper = styled.div({
  flexDirection: 'column',
  display: 'flex',
  backgroundColor: '#00000012',
  color: '#000000',
  padding: '20px 40px 20px 40px',
  marginBottom: 20,
  width: '100%',
});

export const CreateQuizButton = styled(Button)({
  margin: '0px 20px 0px 20px',
  backgroundColor: '#111111',
  color: '#FFFFFF',

  '&:hover': {
    backgroundColor: '#ffffff59',
  },
});

export const CreateQuizConfirmationWrapper = styled.div({
  width: '100%',
  textAlign: 'center',
  padding: 40,
});

export const CreatedQuizName = styled.strong({
  color: '#000000',
});
