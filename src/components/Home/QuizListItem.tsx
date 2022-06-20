import React from 'react';
import { IQuiz } from './Home';
import { Link } from 'react-router-dom';
import { QuizListItemWrapper, QuizActionWrapper, StartButton, QuizTitle } from './style';

export const QuizListItem: React.FC<IQuiz> = ({ title, owner, questions, id }) => {
  return (
    <QuizListItemWrapper>
      <QuizTitle>{title}</QuizTitle>
      <p>by {owner}</p>

      <QuizActionWrapper>
        <p>Quiestions: {questions.length}</p>
        {/* @ts-ignore */}
        <StartButton variant="contained" component={Link} to={`/quiz/:${id}`} state={{ title, owner, questions, id }}>
          Start
        </StartButton>
      </QuizActionWrapper>
    </QuizListItemWrapper>
  );
};
