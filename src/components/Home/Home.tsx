import React, { useEffect } from 'react';
import { logout } from '../../near/utils';

interface IQuiz {
  id: string;
  title: string;
  owner: string;
  questions: string[];
}

export const Home: React.FC = () => {
  const [quizzes, setQuizzes] = React.useState<Array<IQuiz> | null>(null);

  const getQuizList = async () => {
    // TO DO: Fix type
    // @ts-ignore
    const quizzesList = await window.contract.getAllQuizzes();
    quizzesList && setQuizzes(quizzesList);
  };

  // TO DO: Fix type
  // @ts-ignore
  const createNewQuiz = () => window.contract.createQuiz({ title: 'TEST', questions: ['1', '2'] });

  useEffect(() => {
    getQuizList();
  }, []);

  return (
    <div>
      <h1>Quiz List</h1>
      <button onClick={createNewQuiz}>create Quiz</button>
      <button onClick={getQuizList}>Get Advice</button>

      {quizzes &&
        quizzes?.map(({ id, title, owner, questions }) => (
          <>
            <p>{id}</p>
            <p>{title}</p>
            <p>{owner}</p>
            <p>{questions}</p>
          </>
        ))}
      <button onClick={logout}>log out</button>
    </div>
  );
};
