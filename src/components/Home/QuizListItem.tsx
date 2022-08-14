import React from 'react';
import { IQuiz } from './Home';
import { Link } from 'react-router-dom';
import { QuizListItemWrapper, QuizActionWrapper, StartButton, QuizTitle } from './style';

export const QuizListItem: React.FC<IQuiz> = ({ title, owner, questionsCount, questionsId, id }) => {
  return (
    <QuizListItemWrapper>
      <QuizTitle>{title}</QuizTitle>
      <p>by {owner}</p>

      <QuizActionWrapper>
        <p>Quiestions: {questionsCount}</p>

        <StartButton
          variant="contained"
          // @ts-ignore
          component={Link}
          to={`/quiz/${id}`}
          state={{ title, owner, questionsCount, questionsId, id }}
        >
          Start
        </StartButton>
      </QuizActionWrapper>
    </QuizListItemWrapper>
  );
};
