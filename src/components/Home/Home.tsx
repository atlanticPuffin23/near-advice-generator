import React, { useEffect } from 'react';
import { QuizListItem } from './QuizListItem';
import { PageTitle, QuizListWrapper } from './style';

export interface IChoice {
  choice: string;
  isCorrect: boolean;
}

export interface IQuestion {
  quiestion: string;
  choices: IChoice[];
}

export interface IQuiz {
  id: string;
  title: string;
  owner: string;
  questionsId: string;
  questionsCount: string;
}

export const Home: React.FC = () => {
  const [quizzes, setQuizzes] = React.useState<Array<IQuiz> | null>(null);

  const getQuizList = async () => {
    // TO DO: Fix type
    // @ts-ignore
    const quizzesList = await window.contract.getAllQuizzes();
    console.log('quizzesList', quizzesList);
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
