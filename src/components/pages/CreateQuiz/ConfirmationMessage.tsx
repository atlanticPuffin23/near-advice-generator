import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { IQuiz } from '../../../types/interfaces';
import { ButtonStyled } from '../../common/style';
import { ConfirmationMessageWrapper, PageTitle, CreatedQuizName } from './style';

interface IConfirmationMessageProps {
  quiz: IQuiz;
}

export const ConfirmationMessage: React.FC<IConfirmationMessageProps> = ({ quiz }) => (
  <ConfirmationMessageWrapper>
    <PageTitle>
      Your quiz <CreatedQuizName>"{quiz.name}"</CreatedQuizName>has been created!
    </PageTitle>

    {/* @ts-ignore */}
    <ButtonStyled component={Link} to={ROUTES.Home}>
      Go to quizzes page to see it
    </ButtonStyled>
  </ConfirmationMessageWrapper>
);
