import React, { useEffect } from 'react';
import { QuizListItem } from './QuizListItem';
import { PageTitle, QuizListWrapper } from './style';

interface IChoice {
  choice: string;
  isCorrect: boolean;
}

interface IQuestion {
  quiestion: string;
  choices: IChoice[];
}

export interface IQuiz {
  id: string;
  title: string;
  owner: string;
  questions: IQuestion[];
}

export const Home: React.FC = () => {
  const [quizzes, setQuizzes] = React.useState<Array<IQuiz> | null>(null);

  const getQuizList = async () => {
    // TO DO: Fix type
    // @ts-ignore
    const quizzesList = await window.contract.getAllQuizzes();
    quizzesList && setQuizzes(quizzesList);
  };

  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <div>
      <PageTitle>Quiz List</PageTitle>
      <QuizListWrapper>{quizzes && quizzes?.map((quiz) => <QuizListItem key={quiz.id} {...quiz} />)}</QuizListWrapper>
    </div>
  );
};
