import React from 'react';
import { Link } from 'react-router-dom';
import { IQuiz } from '../../../types/interfaces';
import { PrimaryButtonStyled } from '../../common/style';
import { QuizListItemWrapper, QuizActionWrapper, QuizTitle } from './style';

export const QuizListItem: React.FC<IQuiz> = (quiz) => {
  const { name, owner, questionsCount, id } = quiz;

  return (
    <QuizListItemWrapper>
      <QuizTitle>{name}</QuizTitle>
      <p>by {owner}</p>

      <QuizActionWrapper>
        <p>Quiestions: {questionsCount}</p>

        <PrimaryButtonStyled
          variant="contained"
          // @ts-ignore
          component={Link}
          to={`/quiz/${id}`}
          state={{ quiz }}
        >
          Start
        </PrimaryButtonStyled>
      </QuizActionWrapper>
    </QuizListItemWrapper>
  );
};
