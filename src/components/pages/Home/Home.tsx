import React, { useEffect } from 'react';
import { QuizListItem } from './QuizListItem';
import { IQuiz } from '../../../types/interfaces';
import { PageTitle, QuizListWrapper } from './style';

export const Home: React.FC = () => {
  const [quizzes, setQuizzes] = React.useState<Array<IQuiz> | null>(null);

  useEffect(() => {
    window.contract.getAllQuizzes().then((res) => {
      res && setQuizzes(res);
    });
  }, []);

  return (
    <div>
      <PageTitle>Quiz List</PageTitle>
      <QuizListWrapper>
        {quizzes?.map((quiz) => (
          <QuizListItem key={quiz.id} {...quiz} />
        ))}
      </QuizListWrapper>
    </div>
  );
};
