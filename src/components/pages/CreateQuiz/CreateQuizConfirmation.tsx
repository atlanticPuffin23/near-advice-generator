import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/constants';
import { IQuiz } from '../../../types/interfaces';
import { SecondaryButtonStyled } from '../../common/style';
import { CreateQuizConfirmationWrapper, PageTitle, CreatedQuizName } from './style';

interface ICreateQuizConfirmationProps {
  quiz: IQuiz;
}

export const CreateQuizConfirmation: React.FC<ICreateQuizConfirmationProps> = ({ quiz }) => (
  <CreateQuizConfirmationWrapper>
    <PageTitle>
      Your quiz <CreatedQuizName>"{quiz.name}"</CreatedQuizName>has been created!
    </PageTitle>

    {/* @ts-ignore */}
    <SecondaryButtonStyled component={Link} to={ROUTES.Home}>
      Go to quizzes page to see it
    </SecondaryButtonStyled>
  </CreateQuizConfirmationWrapper>
);
