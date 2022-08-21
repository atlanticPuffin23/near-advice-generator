import styled from '@emotion/styled';
import { Modal } from '@mui/material';
import { PrimaryButtonStyled } from '../../common/style';

export const PageTitle = styled.h1({
  fontSize: 28,
  margin: '10px 0px 10px 0px',
  color: '#000000',
});

export const QuizAuthor = styled.p({
  color: '#000000',
});

export const QuestionTitle = styled.p({
  marginBottom: '20px',
});

export const TakeQuizWrapper = styled.div({
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

export const FinishButton = styled(PrimaryButtonStyled)({
  margin: '20px 0 30px 0',
  backgroundColor: '#111111',

  '&:hover': {
    backgroundColor: '#ffffff59',
  },
});

export const ConfirmationModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  top: '50%',
  position: 'absolute',
  opacity: 1,
  width: '450px',
  height: '250px',
  left: '50%',
  color: '#FFFFFF',
  backgroundColor: 'rgb(0 0 0 / 45%)',
  transform: 'translate(-50%, -50%)',
});

export const ConfirmationModalActions = styled.div({
  padding: '50px 10px 20px 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
